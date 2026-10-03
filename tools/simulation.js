import assert from 'node:assert/strict';
import {graph,pickEnding} from '../data/story.js';
import {freshState,validateState} from '../js/state.js';
import {enter,choose,choicesFor,random} from '../js/engine.js';
import {challenges,finishChallenge} from '../js/minigames.js';
export function correctAnswers(c){
 if(['exam','revision'].includes(c.type))return Object.fromEntries(c.questions.map(q=>[q.id,q.correct]));
 if(c.type==='sequence')return{order:[...c.correct]};
 if(c.type==='planning')return{Study:4,Food:2,Work:2,Rest:3,Social:1};
 if(c.type==='budget')return{shifts:'2',support:'aid',food:'pantry'};
 if(c.type==='negotiation')return{Collection:'Priya',Analysis:'Sofia',Presentation:'Jonah',resolution:'deadline'};
 if(c.type==='matching')return{...Object.fromEntries(c.claims.map((q,i)=>[`claim${i}`,q.correct])),qualify:c.qualification.correct};
 return Object.fromEntries(c.rounds.flatMap((q,i)=>[[`move${i}`,q.correctMove],[`evidence${i}`,q.correctEvidence]]));
}
export function play(style='balanced',seed=2,wrong=false,pursue=false){
 const s=freshState(seed);enter(s,graph,'p01');let steps=0;
 const preferences={w0201:style==='social'?1:0,w0302:style==='independent'?3:1,w0305:0,w0403:0,w0405:0,w0501:2,w0505:0,w0603:0,w0605:0,w0606:0,w0704:1,w0802:2,w0803:0,w0805:0,w0806:0,w0901:0,w0902:1,w0903:0,w0904:0,w0906:0,w1006:0,w1101:style==='social'?2:0,w1105:0,w1201:0,w1203:0,w1206:0,w1301:0,w1302:0,w1303:(style==='romance'||pursue)?2:0,w13m:0,w1403:0,w1405:0,w1503:(style==='romance'||pursue)?2:0};
 while(s.mode!=='ENDING'&&steps++<700){
  const node=graph[s.currentNodeId];
  if(s.mode==='MINIGAME'){
   const c=challenges[node.minigame],a=correctAnswers(c);
   if(wrong&&['exam','revision'].includes(c.type))for(const q of c.questions)a[q.id]=(q.correct+1)%q.options.length;
   if(wrong&&c.type==='presentation')for(const k of Object.keys(a))a[k]=(a[k]+1)%3;
   s.pending.answers=a;assert.ok(finishChallenge(s,c,graph));
  }
  const options=choicesFor(s,node);assert.ok(options.length>=2,`${node.id} has too few choices`);
  let choice;
  if(style==='random')choice=options[Math.floor(random(s)*options.length)];
  else {const desired=node.choices[preferences[node.id]??(style==='independent'?1:0)];choice=options.includes(desired)?desired:options[0];}
  assert.ok(choose(s,graph,choice.id,node.id));
  assert.deepEqual(validateState(s,graph),[]);
 }
 assert.ok(steps<700);return s;
}
