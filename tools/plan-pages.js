import {unpagedGraph as graph} from '../data/story.js';
import {writeFileSync} from 'node:fs';
const count=b=>b.text.split(/\s+/).length;
const candidates=Object.values(graph).filter(n=>!n.terminal&&!n.minigame&&!['p01','w1303','w13m','w13f','w1503','w1504'].includes(n.id));
const plan={};let extra=0;
for(const n of candidates){const words=n.narrativeBlocks.reduce((s,b)=>s+count(b),0);const pages=Math.max(1,Math.floor(words/90));plan[n.id]={pages,words};extra+=pages-1;}
let needed=450-Object.values(graph).filter(n=>!n.terminal).length-extra;
const byLength=candidates.toSorted((a,b)=>plan[b.id].words/plan[b.id].pages-plan[a.id].words/plan[a.id].pages);
while(needed>0){for(const n of byLength){if(needed<=0)break;plan[n.id].pages++;needed--;}}
while(needed<0){for(const n of [...byLength].reverse()){if(needed>=0)break;if(plan[n.id].pages>1){plan[n.id].pages--;needed++;}}}
for(const n of candidates){
 const {pages}=plan[n.id],blocks=n.narrativeBlocks,prefix=[0];
 blocks.forEach(b=>prefix.push(prefix.at(-1)+count(b)));
 const target=prefix.at(-1)/pages,memo=new Map();
 function split(at,left){
  const key=`${at}:${left}`;if(memo.has(key))return memo.get(key);
  if(left===1){const words=prefix.at(-1)-prefix[at];return {cost:(words-target)**2+(words<45?100000:0),cuts:[blocks.length]};}
  let best={cost:Infinity,cuts:[]};
  for(let end=at+1;end<=blocks.length-left+1;end++){const words=prefix[end]-prefix[at],rest=split(end,left-1),cost=(words-target)**2+(words<45?100000:0)+rest.cost;if(cost<best.cost)best={cost,cuts:[end,...rest.cuts]};}
  memo.set(key,best);return best;
 }
 let from=0;plan[n.id].chunks=split(0,pages).cuts.map(end=>{const c=blocks.slice(from,end);from=end;return c.map(b=>b.text);});
}
writeFileSync(new URL('../tools/page-plan.json',import.meta.url),JSON.stringify(plan,null,2)+'\n');
console.log('Additional decision pages',Object.values(plan).reduce((n,p)=>n+p.pages-1,0));
console.log(Object.entries(plan).filter(([,p])=>p.pages>1).map(([id,p])=>`${id}: ${p.pages-1} decisions`).join('\n'));
