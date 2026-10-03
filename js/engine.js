import { applyEffects, matches, clamp } from './state.js';
export function random(s) { s.seed = (Math.imul(s.seed, 1664525) + 1013904223) >>> 0; return s.seed / 4294967296; }
export function chance(s, check) {
  let weight = 0, sum = 0;
  for (const [stat, w] of Object.entries(check.weights)) { sum += s.stats[stat] * w; weight += w; }
  return clamp((check.base ?? .65) + .009 * (sum / weight - (check.target ?? 40)) + Math.min(.18, s.prep * .015) + (check.bonusFlag && s.flags[check.bonusFlag] ? .12 : 0) - Math.max(0, 40 - s.energy) * .004 - Math.max(0, s.stress - 70) * .003, .1, .95);
}
export function enter(s, graph, id) {
  const node = graph[id];
  if (!node) throw new Error(`Missing scene: ${id}`);
  if (s.pending && s.pending.nodeId !== id) s.pending = null;
  s.currentNodeId = id; s.week = node.chapter; s.timeSlot = node.timeSlot; s.day = node.day || 'Thursday';
  if (!s.entered.includes(id)) {
    if (node.chapter > 0 && !s.journal.some(previous => graph[previous]?.chapter === node.chapter)) { s.food = Math.max(0, s.food - (node.chapter === 1 ? 0 : 5)); }
    if ((!node.part || node.part === 1) && /seminar|lecture|classroom|lab|assessment|presentation/i.test(node.location || '')) s.attendance = Math.min(100, s.attendance + 1);
    applyEffects(s, node.entryEffects); s.entered.push(id); s.journal.push(id); }
  s.mode = node.terminal ? 'ENDING' : node.minigame && !s.challenges[id] ? 'MINIGAME' : 'PLAYING';
  if (s.mode === 'MINIGAME' && s.pending?.nodeId !== id) s.pending = { nodeId: id, answers: {}, step: 0 };
  return node;
}
export const choicesFor = (s, node) => (node.choices || []).filter(c => matches(s, c.availability));
export function blocksFor(s, node) {
  return [...node.narrativeBlocks, ...(node.variants || []).filter(v => matches(s, v.when)).flatMap(v => v.blocks)];
}
export function choose(s, graph, choiceId, expectedNode = s.currentNodeId) {
  if (expectedNode !== s.currentNodeId || s.mode !== 'PLAYING') return false;
  const node = graph[s.currentNodeId], c = choicesFor(s, node).find(c => c.id === choiceId);
  if (!c) return false;
  let success = true, probability = null, roll = null;
  if (c.check) { probability = chance(s, c.check); roll = random(s); success = roll < probability; }
  const outcome = success ? c : c.failure;
  applyEffects(s, outcome.effects);
  s.choiceHistory.push({ nodeId: node.id, choiceId, success, probability, roll });
  s.lastOutcome = { nodeId: node.id, title: node.title, blocks: outcome.response || [], reason: c.check ? `${success ? 'The approach worked.' : 'The approach did not land.'} Relevant preparation, energy and skills gave this attempt a ${Math.round(probability * 100)}% chance. Its result is saved.` : outcome.reason || null };
  enter(s, graph, outcome.target || c.target);
  return true;
}
export function validateGraph(graph) {
  const errors = [], ids = Object.keys(graph);
  function validCondition(c) {
    if (c === undefined) return true;
    if (!c || typeof c !== 'object' || Array.isArray(c)) return false;
    const keys = Object.keys(c);
    for (const group of ['all', 'any']) if (group in c) return keys.length === 1 && Array.isArray(c[group]) && c[group].length > 0 && c[group].every(validCondition);
    if ('not' in c) return keys.length === 1 && validCondition(c.not);
    if ('special' in c) return keys.length === 1 && ['pass', 'romance'].includes(c.special);
    return typeof c.path === 'string' && /^(flags|stats|relationships|completed|grades)\.[A-Za-z][A-Za-z0-9]*$|^(cash|food|energy|stress|prep|attendance|week)$/.test(c.path) && keys.every(k => ['path', 'eq', 'gte', 'lte'].includes(k)) && ['gte', 'lte'].every(k => !(k in c) || Number.isFinite(c[k]));
  }
  for (const n of Object.values(graph)) {
    if (graph[n.id] !== n) errors.push(`${n.id}: mismatched node ID`);
    for (const v of n.variants || []) if (!validCondition(v.when)) errors.push(`${n.id}: malformed variant condition`);
    if (!n.narrativeBlocks?.length || n.narrativeBlocks.some(b => !b.text)) errors.push(`${n.id}: missing text`);
    if (!n.terminal && (n.choices?.length < 2 || n.choices?.length > 4)) errors.push(`${n.id}: need 2–4 choices`);
    const choiceIds = new Set();
    for (const c of n.choices || []) {
      if (!validCondition(c.availability)) errors.push(`${n.id}: malformed choice condition`);
      if (choiceIds.has(c.id)) errors.push(`${n.id}: duplicate choice`); choiceIds.add(c.id);
      if (!graph[c.target]) errors.push(`${n.id}: missing ${c.target}`);
      if (c.check && (!c.failure || !graph[c.failure.target || c.target])) errors.push(`${n.id}: missing failure`);
      if (!c.label || !c.effects || !c.response?.length) errors.push(`${n.id}: incomplete choice ${c.id}`);
      for (const e of [c.effects, c.failure?.effects, n.entryEffects].filter(Boolean)) {
        for (const [key, v] of Object.entries(e.stats || {})) if (!['Intelligence', 'Charisma', 'Looks', 'Happiness'].includes(key) || !Number.isFinite(v) || Math.abs(v) > 10) errors.push(`${n.id}: invalid stat effect`);
      }
    }
    if (!n.terminal && (n.choices || []).filter(c => !c.availability).length < 2) errors.push(`${n.id}: fewer than two unconditional choices`);
  }
  const visited = new Set(), active = new Set();
  function visit(id) {
    if (active.has(id)) { errors.push(`Cycle at ${id}`); return; }
    if (visited.has(id) || !graph[id]) return;
    visited.add(id); active.add(id);
    for (const c of graph[id].choices || []) { visit(c.target); if (c.failure?.target) visit(c.failure.target); }
    active.delete(id);
  }
  visit('p01');
  for (const id of ids) if (!visited.has(id) && !graph[id].terminal) errors.push(`Unreachable ${id}`);
  return errors;
}
