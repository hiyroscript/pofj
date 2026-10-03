import { applyEffects, clamp } from './state.js';
import { challenges } from '../data/questions.js';
export function evaluate(config, answers, s) {
  let points = 0, total = 0, feedback = [], effects = {}, valid = true;
  const scoreAnswer = (q, value) => { total++; if (value === q.correct) points++; feedback.push(`${q.prompt} ${q.explanation}`); if (!Number.isInteger(value) || value < 0 || value >= q.options.length) valid = false; };
  if (['exam', 'revision'].includes(config.type)) config.questions.forEach(q => scoreAnswer(q, answers[q.id]));
  if (config.type === 'sequence') {
    const order = answers.order || []; total = 4;
    valid = order.length === 4 && new Set(order).size === 4 && order.every(i => Number.isInteger(i) && i >= 0 && i < config.notes.length);
    points = config.correct.reduce((n, id, i) => n + (order[i] === id ? 1 : 0), 0);
    feedback.push('The supported sequence is claim, interview evidence, sampling limitation, and a proportionate trial. The limitation narrows the claim; it does not erase the evidence.');
    effects = { prep: points, stats: { Intelligence: points >= 3 ? 3 : 1 }, flags: { synthesizedNotes: points >= 3 } };
  }
  if (config.type === 'planning') {
    const counts = config.categories.map(c => Number(answers[c] || 0));
    valid = counts.every(n => Number.isInteger(n) && n >= 0 && n <= config.blocks) && counts.reduce((a, b) => a + b, 0) === config.blocks;
    const [study, food, work, rest, social] = counts; total = 5;
    points = (study >= 3) + (food >= 2) + (rest >= 2) + (work <= 4) + (social >= 1);
    effects = { prep: Math.min(4, study), cash: work * 24, food: food * 2, energy: rest * 3 - work * 2, stress: work > 4 ? 5 : -3, stats: { Happiness: rest >= 2 ? 2 : -2 }, flags: { structuredWeek: study >= 3 && rest >= 2 && food >= 2, schedule: { study, food, work, rest, social } } };
    feedback.push(`Your week reserves ${study} study, ${food} food, ${work} work, ${rest} rest and ${social} social blocks. ${food < 2 || rest < 2 ? 'The plan leaves a basic need underprovided; Nia offers a chance to revise the next week.' : 'Meals and recovery have protected time.'} The work blocks earn $${work * 24}.`);
  }
  if (config.type === 'budget') {
    valid = ['0','2','4'].includes(String(answers.shifts)) && ['aid','installment','none'].includes(answers.support) && ['groceries','pantry'].includes(answers.food);
    const shifts = Number(answers.shifts || 0), earned = shifts * 48;
    const grant = answers.support === 'aid' && s.flags.aidApproved ? 180 : 0;
    const foodCost = answers.food === 'pantry' ? 20 : config.groceries;
    const costs = config.bill + foodCost + config.travel;
    const balance = s.cash + earned + grant - costs;
    total = 4; points = (balance >= 0 || answers.support !== 'none' ? 2 : 0) + (shifts <= 2 ? 1 : 0) + 1;
    effects = { cash: earned + grant - costs, food: 7, energy: -shifts * 3 + (shifts <= 2 ? 3 : 0), stress: balance < 0 ? 4 : -3,
      flags: { appliedForAid: s.flags.appliedForAid || answers.support === 'aid', aidPending: answers.support === 'aid' && !s.flags.aidApproved, rentPaidThrough: balance >= 0 ? (s.week === 5 ? 8 : 12) : s.flags.rentPaidThrough, paymentArrangement: balance < 0 && answers.support !== 'none', debt: Math.max(0, -balance), workBalanced: shifts <= 2, overworkedWeek10: s.week === 10 && shifts === 4 ? true : s.flags.overworkedWeek10 || false, usedPantry: answers.food === 'pantry' || s.flags.usedPantry || false } };
    feedback.push(`Income $${earned}${grant ? ` plus $${grant} approved aid` : ''}; rent $${config.bill}, food $${foodCost}, travel $${config.travel}. Ledger after payment: $${balance}. ${balance < 0 ? 'The shortfall stays on your account. A payment arrangement gives time, not free money.' : 'This period’s rent is covered.'} ${answers.support === 'aid' && !s.flags.aidApproved ? 'The aid appointment is booked for next week; approval and funds are not immediate.' : ''}`);
  }
  if (config.type === 'negotiation') {
    const roles = config.roles.map(r => answers[r]);
    valid = roles.every(p => config.people.includes(p)) && new Set(roles).size === 3 && ['rehearse','deadline','command'].includes(answers.resolution);
    total = 4; points = (answers.Analysis === 'Sofia') + (answers.Presentation !== 'Ben' || answers.resolution === 'rehearse' || s.flags.helpedBen ? 1 : 0) + (answers.Collection !== 'Priya' || answers.resolution === 'deadline' ? 1 : 0) + (answers.resolution !== 'command' ? 1 : 0);
    effects = { grades: { project: 50 + points * 10 }, completed: { project: true }, rel: { Ben: answers.resolution === 'rehearse' ? 2 : 0, Sofia: answers.Analysis === 'Sofia' ? 2 : -1 }, flags: { teamRoles: Object.fromEntries(config.roles.map(r => [r, answers[r]])), listenedToTeam: answers.resolution !== 'command', helpedBen: s.flags.helpedBen || answers.resolution === 'rehearse' } };
    feedback.push('Role fit matters alongside fairness. Sofia has the analysis experience; Ben needs a rehearsal if he opens; Priya needs an early handoff. A clear deadline or rehearsal creates a workable agreement; simply announcing assignments leaves conflicts unresolved.');
  }
  if (config.type === 'matching') {
    config.claims.forEach((q, i) => { total++; if (answers[`claim${i}`] === q.correct) points++; if (!Number.isInteger(answers[`claim${i}`]) || answers[`claim${i}`] < 0 || answers[`claim${i}`] >= config.sources.length) valid = false; });
    scoreAnswer(config.qualification, answers.qualify);
    feedback.push('Interview accounts support reported experience; appointment records support counts; a timetable supports opening hours. None of these establishes an effect on academic failure.');
    effects = { completed: { research: true }, flags: { researchIntegrity: points >= 4 }, stats: { Intelligence: points >= 4 ? 3 : 1 } };
  }
  if (config.type === 'presentation') {
    config.rounds.forEach((q, i) => { total += 2; if (answers[`move${i}`] === q.correctMove) points++; if (answers[`evidence${i}`] === q.correctEvidence) points++; for (const k of [`move${i}`, `evidence${i}`]) if (!Number.isInteger(answers[k]) || answers[k] < 0 || answers[k] > 2) valid = false; });
    feedback.push('An effective defense states scope, supports the recommendation, and identifies conditions under which it should change. Confidence helps people follow the explanation; it cannot replace evidence.');
  }
  const raw = total ? points / total * 100 : 0;
  const grade = Math.round(clamp(35 + raw * .6 + Math.min(5, s.prep * .3) - Math.max(0, 25 - s.energy) * .12));
  if (config.grade && config.grade !== 'research') {
    effects.grades = { ...(effects.grades || {}), [config.grade]: config.grade === 'project' ? Math.round(((s.grades.project ?? 54) + grade) / 2) : grade };
    effects.completed = { ...(effects.completed || {}), [config.grade]: true };
  }
  if (config.type === 'exam') effects.stats = { Intelligence: points >= total * .7 ? 3 : 1, Happiness: grade >= 70 ? 2 : -2 };
  return { valid, points, total, grade, feedback, effects };
}
export function finishChallenge(s, config, graph) {
  const id = s.currentNodeId;
  if (s.challenges[id] || !s.pending || s.pending.nodeId !== id) return null;
  const result = evaluate(config, s.pending.answers, s);
  if (!result.valid) return null;
  s.challenges[id] = { ...result, answers: structuredClone(s.pending.answers) };
  applyEffects(s, result.effects); s.pending = null; s.mode = 'PLAYING';
  return result;
}
export { challenges };
