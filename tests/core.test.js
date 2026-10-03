import test from 'node:test';
import assert from 'node:assert/strict';
import { freshState, average, academicPass, rating, applyEffects } from '../js/state.js';
import { random, chance } from '../js/engine.js';
import { save, encode, decode, load } from '../js/save.js';
test('grade boundary and consent are separate', () => {
  const s = freshState(); Object.keys(s.grades).forEach(k => s.grades[k] = 69); Object.assign(s.completed, { project: true, midterm: true, final: true, research: true });
  assert.equal(average(s), 69); assert.equal(rating(s), 1);
  Object.keys(s.grades).forEach(k => s.grades[k] = 70); assert.equal(academicPass(s), true); assert.equal(rating(s), 2);
  s.relationships.Maya = 60; assert.equal(rating(s), 2);
  Object.assign(s.flags, { mentorBoundariesRespected: true, mutualInterest: true, listenedToMaya: true, feelingsDiscussed: true, explicitDatingAgreement: true }); assert.equal(rating(s), 3);
  s.flags.disqualified = true; assert.equal(rating(s), 1);
});
test('bounded meters, reproducible random stream and risk bounds', () => {
  const a = freshState(99), b = freshState(99);
  for (let i = 0; i < 100; i++) assert.equal(random(a), random(b));
  applyEffects(a, { stats: { Intelligence: 1000, Happiness: -1000 }, cash: -400 });
  assert.equal(a.stats.Intelligence, 100); assert.equal(a.stats.Happiness, 0); assert.equal(a.cash, -215);
  assert.ok(chance(a, { weights: { Intelligence: 1 } }) <= .95);
});
test('save round trip, corruption, unsupported schema and unavailable storage', () => {
  const s = freshState(), graph = { p01: {} }; assert.deepEqual(decode(encode(s), graph), s);
  assert.throws(() => decode('garbage', graph)); assert.throws(() => decode(encode({ ...s, schemaVersion: 9 }), graph));
  assert.equal(save(s, { setItem() { throw Error('quota'); } }).ok, false);
  assert.ok(load(graph, { getItem() { throw Error('denied'); } }).error);
});
