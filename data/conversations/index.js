import arrival from './arrival.js';
import firstmarks from './firstmarks.js';
import agreements from './agreements.js';
import teamandmidterm from './teamandmidterm.js';
import breakandrepair from './breakandrepair.js';
import pressureandrevision from './pressureandrevision.js';
import visitorsandfeelings from './visitorsandfeelings.js';
import finalweeks from './finalweeks.js';
import {prose} from '../helpers.js';
export function attachConversations(graph){
 for(const[id,text]of Object.entries({...arrival,...firstmarks,...agreements,...teamandmidterm,...breakandrepair,...pressureandrevision,...visitorsandfeelings,...finalweeks})){
  if(!graph[id])throw Error(`Unknown conversation scene ${id}`);
  graph[id].narrativeBlocks.push(...prose(text));
 }
}
