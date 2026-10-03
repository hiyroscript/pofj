import {readFileSync,writeFileSync} from 'node:fs';
const plan=JSON.parse(readFileSync(new URL('./page-plan.json',import.meta.url),'utf8'));
const authored={};
for(const file of ['early','middle','later','final','branches']){
 let id;
 for(const line of readFileSync(new URL(`../data/decisions/${file}.txt`,import.meta.url),'utf8').split('\n')){
  if(!line.trim())continue;
  if(line.startsWith('@')){id=line.slice(1);if(authored[id])throw Error(`Duplicate decision section ${id}`);authored[id]=[];continue;}
  const fields=line.split('|');if(fields.length!==6)throw Error(`Malformed decision at ${id}: ${fields.length} fields`);
  authored[id].push([[fields[0],fields[1],fields[2]],[fields[3],fields[4],fields[5]]]);
 }
}
const result={};let count=0;
for(const[id,p]of Object.entries(plan)){
 if(p.pages===1)continue;
 if(authored[id]?.length!==p.pages-1)throw Error(`${id}: expected ${p.pages-1} decisions, got ${authored[id]?.length}`);
 result[id]={blockCounts:p.chunks.map(c=>c.length),decisions:authored[id]};count+=authored[id].length;
}
for(const id of Object.keys(authored))if(!result[id])throw Error(`Unscheduled decision section ${id}`);
writeFileSync(new URL('../data/decisions/compiled.js',import.meta.url),'// Compiled from the authored decision text files by tools/compile-pages.js.\nexport default '+JSON.stringify(result)+';\n');
console.log(`Compiled ${count} authored decision points.`);
