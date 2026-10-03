import {prose} from './helpers.js';
// Uncertain approaches are deliberately separate from consent, support eligibility,
// and commitments. Failing a check never rerolls a grade or another person's feelings.
export function attachChecks(graph){
 const checks=[
 ['w0203',2,{Charisma:.6,Intelligence:.4},'Sofia is not persuaded by the first explanation. She asks Jonah to specify the trial’s cost and stopping rule. He understands why a pilot might be useful, but the group does not adopt his proposal today. The question remains available for his own work.',{prep:1,flags:{learnedPilot:true,pilotProposalDeferred:true}}],
 ['w1103',0,{Intelligence:.65,Charisma:.35},'Jonah can explain the revised sentence but loses the thread when the follow-up changes the example. Hart asks him to write the missing step after class. The attempt has exposed a real gap without erasing the revision he already completed. He has a precise question to bring to final practice.',{prep:1,flags:{publicExplanationNeedsPractice:true},stats:{Intelligence:1}}],
 ['w1104',0,{Looks:.6,Intelligence:.4},'The reformatted slide is cleaner, but Daniel still cannot find the source note while Jonah explains the figure. Presentation has improved in appearance before it has improved in use. Daniel marks the missing reference and Jonah keeps a correction task for the next rehearsal.',{stats:{Looks:2},prep:1,flags:{presentationPrepared:false,danielAlly:true}}],
 ['w0801',2,{Happiness:.4,Charisma:.4,Intelligence:.2},'At the newspaper meeting, Jonah has trouble keeping his pitch focused. Tessa asks him to send a short written version another day. He still hears useful discussion and meets people; the proposed story simply is not commissioned on the strength of this conversation. Rest and a clearer outline may help the next attempt.',{stats:{Charisma:1},flags:{newspaperVisit:true,tessaAlly:true,pitchDeferred:true}}]
 ];
 for(const[id,index,weights,text,effects]of checks){const c=graph[id].choices[index];c.check={base:.68,target:38,weights,bonusFlag:'finalPractice'};c.failure={target:c.target,response:prose(text),effects};}
}
