import pages from './compiled.js';
import {prose} from '../helpers.js';
const stats={I:'Intelligence',C:'Charisma',L:'Looks',H:'Happiness'};
const meters={P:'prep',E:'energy',S:'stress'};
const relationships={M:'Maya',B:'Ben',F:'Sofia',T:'Hart'};
function effects(code){
 const match=code.match(/^([ICLHPESMBFT])(-?\d+)$/);if(!match)throw Error(`Unknown authored effect ${code}`);
 const[,key,raw]=match,value=Number(raw);
 if(stats[key])return{stats:{[stats[key]]:value}};
 if(meters[key])return{[meters[key]]:value};
 return{rel:{[relationships[key]]:value}};
}
export function attachPages(graph,chapters){
 const originalNodes=Object.values(graph),entries=Object.fromEntries(Object.keys(pages).map(id=>[id,`${id}~1`]));
 // Remap incoming edges only. Every original scene ID remains the final commitment
 // of that event, preserving stable assessment and major-choice identifiers.
 for(const n of originalNodes)for(const c of n.choices||[]){if(entries[c.target])c.target=entries[c.target];if(c.failure?.target&&entries[c.failure.target])c.failure.target=entries[c.failure.target];}
 for(const[id,config]of Object.entries(pages)){
  const original=graph[id];if(!original||original.minigame||original.terminal)throw Error(`Invalid split event ${id}`);
  const blocks=original.narrativeBlocks,parts=config.blockCounts.length;
  if(config.blockCounts.reduce((a,b)=>a+b,0)!==blocks.length)throw Error(`Authored page boundaries need recompilation at ${id}`);
  let at=0;
  config.blockCounts.forEach((length,i)=>{
   const narrativeBlocks=blocks.slice(at,at+length);at+=length;
   if(i===parts-1){original.narrativeBlocks=narrativeBlocks;original.originId=id;original.part=parts;original.parts=parts;return;}
   const nodeId=`${id}~${i+1}`,next=i===parts-2?id:`${id}~${i+2}`;
   if(graph[nodeId])throw Error(`Duplicate authored page ${nodeId}`);
   const node={id:nodeId,originId:id,part:i+1,parts,title:original.title,chapter:original.chapter,chapterTitle:original.chapterTitle,day:original.day,timeSlot:original.timeSlot,location:original.location,narrativeBlocks,
    choices:config.decisions[i].map(([label,code,response],j)=>({id:`${nodeId}-${j+1}`,label,effects:effects(code),response:prose(response),target:next})),tags:['conversation-decision']};
   if(i===0){node.entryEffects=original.entryEffects;node.variants=original.variants;delete original.entryEffects;delete original.variants;}
   graph[nodeId]=node;chapters[original.chapter].push(node);
  });
 }
}
