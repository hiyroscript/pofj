import {graph,chapters,endingVariants,unpagedGraph} from '../data/story.js';
import {challenges} from '../data/questions.js';
import {writeFileSync} from 'node:fs';
const words=text=>(text.match(/[\p{L}\p{N}]+(?:[’'-][\p{L}\p{N}]+)*/gu)||[]).length;
const passages=[];
let conversations=0;
for(const n of Object.values(graph)){
 passages.push(...n.narrativeBlocks,...(n.variants||[]).flatMap(v=>v.blocks));

 for(const c of n.choices){passages.push(...c.response,...(c.failure?.response||[]));}
}
conversations=Object.values(unpagedGraph).filter(n=>n.narrativeBlocks.filter(b=>b.type==='dialogue').length>=4).length;
passages.push(...endingVariants.flatMap(e=>e.blocks));
const unique=[...new Set(passages.map(b=>b.text.trim()))];
const flags=new Set();for(const n of Object.values(graph))for(const c of n.choices)for(const k of Object.keys(c.effects.flags||{}))flags.add(k);
const inventory={substantiveNarrativeWords:unique.reduce((n,t)=>n+words(t),0),narrativeNodes:Object.values(graph).filter(n=>!n.terminal).length,endingVariants:endingVariants.length,meaningfulChoices:Object.values(graph).reduce((n,x)=>n+x.choices.length,0),events:Object.values(unpagedGraph).filter(n=>!n.terminal).length,multiTurnConversations:conversations,minigameMechanics:new Set(Object.values(challenges).map(c=>c.type)).size,challengeConfigurations:Object.keys(challenges).length,persistentFlags:flags.size,weeks:chapters.map(c=>({week:c[0].chapter,nodes:c.length,narrativeWords:c.reduce((sum,n)=>sum+words([...n.narrativeBlocks,...(n.variants||[]).flatMap(v=>v.blocks),...n.choices.flatMap(c=>[...c.response,...(c.failure?.response||[])])].map(b=>b.text).join(' ')),0)}))};
const requirements={substantiveNarrativeWords:65000,narrativeNodes:450,events:120,multiTurnConversations:80,endingVariants:24,minigameMechanics:8};
inventory.gates=Object.fromEntries(Object.entries(requirements).map(([k,min])=>[k,{actual:inventory[k],minimum:min,pass:inventory[k]>=min}]));
writeFileSync(new URL('../docs/INVENTORY.json',import.meta.url),JSON.stringify(inventory,null,2)+'\n');console.log(JSON.stringify(inventory,null,2));
