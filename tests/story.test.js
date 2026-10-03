import test from 'node:test';
import assert from 'node:assert/strict';
import {graph,endingVariants,pickEnding,chapters} from '../data/story.js';
import {freshState,academicPass,rating,validateState,applyEffects,average} from '../js/state.js';
import {enter,choose,choicesFor,validateGraph,random} from '../js/engine.js';
import {challenges,evaluate,finishChallenge} from '../js/minigames.js';
import {encode,decode,save,load,archiveAdd,archiveRead,SAVE_KEY,ARCHIVE_KEY} from '../js/save.js';
import {play,correctAnswers} from '../tools/simulation.js';
test('graph is valid, all weeks exist, every challenge refers to a known configuration',()=>{
 assert.deepEqual(validateGraph(graph),[]);assert.deepEqual(chapters.map(c=>c[0].chapter),Array.from({length:16},(_,i)=>i));
 for(const node of Object.values(graph))if(node.minigame)assert.ok(challenges[node.minigame]);
 assert.equal(new Set(Object.values(challenges).map(c=>c.type)).size,8);
});
test('perfect responses produce strong grades; missing answers cannot submit',()=>{
 for(const c of Object.values(challenges)){
  const s=freshState(),result=evaluate(c,correctAnswers(c),s);assert.equal(result.valid,true,c.title);assert.equal(result.points,result.total,c.title);assert.equal(evaluate(c,{},s).valid,false,c.title);
 }
});
test('three legitimate academic styles pass and romance needs explicit choices',()=>{
 for(const style of ['independent','social','balanced']){const s=play(style);assert.equal(academicPass(s),true,`${style}: ${average(s)}`);assert.equal(rating(s),2);}
 for(const style of ['independent','social','balanced'])assert.equal(rating(play(style,42,false,true)),3,`Romance through ${style}`);
 const good=play('romance');assert.equal(rating(good),3);assert.ok(good.flags.mutualInterest);assert.ok(good.flags.explicitDatingAgreement);
 const bad=play('balanced',2,true);assert.equal(rating(bad),1);
});
test('200 seeded mixed playthroughs terminate with valid state',()=>{
 const outcomes=new Set();for(let seed=1;seed<=200;seed++){const s=play('random',seed,seed%3===0);outcomes.add(rating(s));assert.ok(pickEnding(s));}
 assert.ok(outcomes.has(1));assert.ok(outcomes.has(2));
});
test('exact saves at story, pre-exam, active assessment and before ending',()=>{
 const s=freshState();enter(s,graph,'p01');choose(s,graph,'p01-1');
 for(const id of ['w0504','w0701','w0702','w1503']){
  enter(s,graph,id);if(s.pending)s.pending.answers.sample=1;
  const copy=decode(encode(s),graph);assert.deepEqual(copy,s);
  const before=structuredClone(copy);enter(copy,graph,id);assert.deepEqual(copy,before);
 }
});
test('a challenge and a story transition cannot reward twice',()=>{
 const s=freshState();enter(s,graph,'w0702');s.pending.answers=correctAnswers(challenges.midterm);finishChallenge(s,challenges.midterm,graph);const snapshot=structuredClone(s);assert.equal(finishChallenge(s,challenges.midterm,graph),null);assert.deepEqual(s,snapshot);
 const old=s.currentNodeId;assert.equal(choose(s,graph,'w0702-1',old),true);const after=structuredClone(s);assert.equal(choose(s,graph,'w0702-1',old),false);assert.deepEqual(s,after);
});
test('all twenty-four archive variants have distinct prose and a reachable selector',()=>{
 assert.equal(endingVariants.length,24);assert.equal(new Set(endingVariants.map(e=>e.blocks.map(b=>b.text).join(' '))).size,24);
 for(const e of endingVariants){const s=freshState();for(const k of Object.keys(s.grades))s.grades[k]=e.rating===1?40:85;Object.assign(s.completed,{project:true,research:true,midterm:true,final:true});if(e.rating===3){s.relationships.Maya=20;Object.assign(s.flags,{mentorBoundariesRespected:true,mutualInterest:true,listenedToMaya:true,feelingsDiscussed:true,explicitDatingAgreement:true});}if(e.when){const key=e.when.path.split('.')[1];s.flags[key]=true;}assert.equal(pickEnding(s).id,e.id,e.id);}
});
test('archive survives a fresh game and quota or read failures remain nonfatal',()=>{
 const data=new Map(),storage={getItem:k=>data.get(k)??null,setItem:(k,v)=>data.set(k,v),removeItem:k=>data.delete(k)};
 archiveAdd({id:'fair-quiet',rating:2,title:'Quiet'},storage);save(freshState(),storage);save(freshState(42),storage);assert.equal(archiveRead(storage).length,1);assert.equal(load(graph,storage).state.seed,42);
 data.set(SAVE_KEY,'broken');assert.ok(load(graph,storage).error);assert.equal(data.get(SAVE_KEY),'broken');assert.equal(archiveRead(storage).length,1);
});

test('malformed conditions and damaged save internals fail validation',()=>{
 const broken=structuredClone(graph);broken.p01.choices[0].availability={any:'wrong'};assert.ok(validateGraph(broken).some(e=>e.includes('malformed choice')));
 for(const mutate of [s=>s.settings.textSize=-100,s=>s.relationships.Maya=1000,s=>s.entered.push('missing'),s=>s.choiceHistory.push(null),s=>s.mode='MINIGAME']){const s=freshState();mutate(s);assert.throws(()=>decode(encode(s),graph));}
});
