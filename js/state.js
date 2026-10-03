export const SCHEMA = 1;
export const STORY = '1.0.0';
export const STAT_NAMES = ['Intelligence', 'Charisma', 'Looks', 'Happiness'];
export const WEIGHTS = { quizzes: .15, assignments: .25, project: .20, midterm: .15, final: .25 };
export const clamp = (n, lo = 0, hi = 100) => Math.max(lo, Math.min(hi, n));
export function freshState(seed = 0x62a9e831) {
  return { schemaVersion: SCHEMA, storyVersion: STORY, currentNodeId: 'p01', mode: 'PLAYING',
    stats: { Intelligence: 34, Charisma: 29, Looks: 43, Happiness: 28 }, cash: 185,
    food: 5, energy: 64, stress: 58, week: 0, day: 'Sunday', timeSlot: 'Afternoon',
    grades: { quizzes: 54, assignments: 54, project: null, midterm: null, final: null },
    completed: {}, prep: 0, attendance: 0, flags: { rentPaidThrough: 4 },
    relationships: { Maya: 0, affection: 0, Ben: 0, Sofia: 0, Hart: 0 },
    seed: seed >>> 0, challenges: {}, pending: null, choiceHistory: [], journal: [], entered: [],
    lastOutcome: null, ending: null, updatedAt: null,
    settings: { textSize: 18, reducedMotion: false, highContrast: false, explainChecks: true }
  };
}
export function average(state) {
  let total = 0, weight = 0;
  for (const [key, w] of Object.entries(WEIGHTS)) if (state.grades[key] !== null) { total += state.grades[key] * w; weight += w; }
  return weight ? Math.round(total / weight * 100) / 100 : 54;
}
export function academicPass(s) {
  return average(s) >= 70 && !s.flags.disqualified && ['project', 'midterm', 'final', 'research'].every(k => s.completed[k]);
}
export function romanceEligible(s) {
  return academicPass(s) && s.relationships.Maya >= 12 && s.flags.mentorBoundariesRespected && s.flags.mutualInterest && s.flags.listenedToMaya && s.flags.feelingsDiscussed && !s.flags.romanceDeclined && !s.flags.trustRupture;
}
export function rating(s) { return !academicPass(s) ? 1 : romanceEligible(s) && s.flags.explicitDatingAgreement ? 3 : 2; }
export function applyEffects(s, e = {}) {
  for (const [k, v] of Object.entries(e.stats || {})) s.stats[k] = clamp(s.stats[k] + v);
  for (const [k, v] of Object.entries(e.rel || {})) s.relationships[k] = clamp(s.relationships[k] + v, -30, 60);
  Object.assign(s.flags, e.flags || {});
  Object.assign(s.completed, e.completed || {});
  for (const [k, v] of Object.entries(e.grades || {})) s.grades[k] = clamp(v);
  for (const [k, v] of Object.entries(e.gradeDelta || {})) s.grades[k] = clamp((s.grades[k] ?? 54) + v);
  for (const k of ['cash', 'food', 'energy', 'stress', 'prep', 'attendance']) if (e[k] !== undefined) {
    s[k] += e[k];
    if (k === 'cash') s[k] = Math.round(s[k]);
    else s[k] = clamp(s[k], 0, k === 'food' ? 30 : 100);
  }
  s.flags.debt = Math.max(0, -s.cash);
  if (s.flags.termRentAddressed && s.cash >= 0) s.flags.rentPaidThrough = 16;
}
export function matches(s, condition) {
  if (!condition) return true;
  if (condition.all) return condition.all.every(c => matches(s, c));
  if (condition.any) return condition.any.some(c => matches(s, c));
  if (condition.not) return !matches(s, condition.not);
  if (condition.special === 'pass') return academicPass(s);
  if (condition.special === 'romance') return romanceEligible(s);
  const value = condition.path.split('.').reduce((o, k) => o?.[k], s);
  if ('eq' in condition) return value === condition.eq;
  if ('gte' in condition) return (value ?? 0) >= condition.gte;
  if ('lte' in condition) return (value ?? 0) <= condition.lte;
  return Boolean(value);
}
export function validateState(s, graph) {
  const errors = [];
  if (!s || typeof s !== 'object') return ['Save is not an object.'];
  if (s.schemaVersion !== SCHEMA) errors.push('This save version is not supported.');
  if (s.storyVersion !== STORY) errors.push('This save belongs to a different story edition.');
  if (!graph[s.currentNodeId]) errors.push('The saved scene is unavailable.');
  for (const k of STAT_NAMES) if (!Number.isFinite(s.stats?.[k]) || s.stats[k] < 0 || s.stats[k] > 100) errors.push(`Invalid ${k}.`);
  for (const k of ['cash', 'food', 'energy', 'stress', 'prep', 'attendance', 'seed', 'week']) if (!Number.isFinite(s[k])) errors.push(`Invalid ${k}.`);
  for (const k of Object.keys(WEIGHTS)) if (s.grades?.[k] !== null && (!Number.isFinite(s.grades?.[k]) || s.grades[k] < 0 || s.grades[k] > 100)) errors.push(`Invalid grade ${k}.`);
  for (const k of ['flags', 'relationships', 'completed', 'challenges', 'settings']) if (!s[k] || typeof s[k] !== 'object' || Array.isArray(s[k])) errors.push(`Missing ${k}.`);
  for (const k of ['choiceHistory', 'journal', 'entered']) if (!Array.isArray(s[k])) errors.push(`Missing ${k}.`);
  if (s.relationships) for (const k of ['Maya', 'affection', 'Ben', 'Sofia', 'Hart']) if (!Number.isFinite(s.relationships[k]) || s.relationships[k] < -30 || s.relationships[k] > 60) errors.push(`Invalid relationship ${k}.`);
  for (const [key, max] of Object.entries({ food: 30, energy: 100, stress: 100, prep: 100, attendance: 100, week: 15, seed: 4294967295 })) if (s[key] < 0 || s[key] > max) errors.push(`Out-of-range ${key}.`);
  if (!Number.isInteger(s.seed) || !Number.isInteger(s.week)) errors.push('Invalid calendar or random seed.');
  if (typeof s.day !== 'string' || typeof s.timeSlot !== 'string') errors.push('Invalid calendar.');
  if (s.settings && (!Number.isFinite(s.settings.textSize) || s.settings.textSize < 16 || s.settings.textSize > 30 || ['reducedMotion', 'highContrast', 'explainChecks'].some(k => typeof s.settings[k] !== 'boolean'))) errors.push('Invalid reading settings.');
  if (s.flags && Object.entries(s.flags).some(([k,v]) => ['schedule', 'teamRoles'].includes(k) ? !v || typeof v !== 'object' || Array.isArray(v) || Object.values(v).some(x => !['number', 'string'].includes(typeof x)) : !['boolean', 'number', 'string'].includes(typeof v) || (typeof v === 'number' && !Number.isFinite(v)))) errors.push('Invalid story flags.');
  for (const key of ['entered', 'journal']) if (Array.isArray(s[key]) && s[key].some(id => typeof id !== 'string' || !graph[id])) errors.push(`Invalid ${key} entries.`);
  if (Array.isArray(s.choiceHistory) && s.choiceHistory.some(r => !r || !graph[r.nodeId]?.choices?.some(c => c.id === r.choiceId) || typeof r.success !== 'boolean')) errors.push('Invalid choice history.');
  if (s.flags?.explicitDatingAgreement && !s.flags?.mutualInterest) errors.push('Dating agreement has no mutual-interest history.');
  if (s.pending && (s.pending.nodeId !== s.currentNodeId || !s.pending.answers || typeof s.pending.answers !== 'object' || Array.isArray(s.pending.answers) || !Number.isInteger(s.pending.step) || s.pending.step < 0 || s.pending.step > 100)) errors.push('Invalid pending assessment.');
  if (s.mode === 'MINIGAME' && (!graph[s.currentNodeId]?.minigame || !s.pending || s.challenges?.[s.currentNodeId])) errors.push('Assessment state does not match the scene.');
  if (s.mode === 'ENDING' && !graph[s.currentNodeId]?.terminal) errors.push('Ending state does not match the scene.');
  if (!['PLAYING', 'MINIGAME', 'ENDING'].includes(s.mode)) errors.push('Invalid screen state.');
  return errors;
}
