import {earlyBranches} from './early.js';
import {middleBranches} from './middle.js';
import {lateBranches} from './late.js';
export const branchGroups=[...earlyBranches,...middleBranches,...lateBranches];
export function attachBranches(graph,chapters){
 for(const group of branchGroups){
  const parent=graph[group.after];
  const targets=new Set(parent.choices.map(c=>c.target));
  if(targets.size!==1)throw Error(`Branch insertion needs a single rejoin at ${parent.id}`);
  const target=parent.choices[0].target;
  group.nodes.forEach((node,i)=>{
   if(graph[node.id])throw Error(`Duplicate branch ${node.id}`);
   Object.assign(node,{chapter:parent.chapter,chapterTitle:parent.chapterTitle,day:'Sunday',timeSlot:i?'Evening':'Afternoon',tags:['extended-consequence']});
   node.choices=node.choices.map((c,j)=>({id:`${node.id}-${j+1}`,target,...c}));
   graph[node.id]=node;chapters[parent.chapter].push(node);
  });
  parent.choices.forEach((c,i)=>{c.target=group.nodes[i%group.nodes.length].id;if(c.failure)c.failure.target=c.target;});
 }
}
