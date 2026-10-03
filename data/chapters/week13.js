import { chapter, scene as s, option as o, variant as v, flag as f } from '../helpers.js';
const bond={all:[{path:'relationships.Maya',gte:12},f('listenedToMaya'),f('mentorBoundariesRespected'),f('firstInterestSignal'),f('secondInterestSignal'),{not:f('trustRupture')},{not:f('romanceDeclined')}]};
export default chapter(13, 'Saying It Clearly', [
s('w1301', 'A table without homework', 'Campus café', `Jonah asked whether Maya had time for a conversation separate from studying. She suggested the café between her lab and an appointment with Imani. The finite window was familiar now. It helped prevent the conversation from expanding until one of them had to escape it.

The table held two cups and no marked work. Jonah noticed how often he had used a page as a reason to be present. Whatever their relationship became, he wanted it to be able to exist without requiring him to remain in difficulty.

Maya: You said this wasn't about the final.

Jonah: It isn't. Though the final is occupying an unreasonable amount of my brain.

Maya: Mine too. We can give it fifteen minutes off.

There was no audience, no grand gesture and no purchased object demanding an appreciative response. There were two people with a history they could not rewrite on the spot.`, [
o('Acknowledge what has changed since the first tutorial.', { flags: { feelingsConversationOpened: true }, rel: { Maya: 1 }, stats: { Charisma: 2 } }, `Jonah described learning to bring his own attempts and to notice her work as more than a fact that limited her availability. Maya corrected one detail, then agreed with the larger change. The conversation began with a history both could recognize rather than a flattering story told for effect.`),
o('Ask how she understands their friendship now.', { flags: { feelingsConversationOpened: true, listenedToMaya: true }, rel: { Maya: 2 } }, `Maya took a moment before answering. She valued reliability, conversations that weren't about marks, and being able to disagree without becoming responsible for his confidence. Jonah listened to the answer before deciding what it meant for what he wanted to say.`),
o('Clarify that the study arrangement can end without ending respect.', { flags: { equalGroundDiscussed: true, mentorBoundariesRespected: true }, prep: 1 }, `They agreed that Jonah's academic plan now included Hart, the group and his own work. Maya wasn't being asked to promise continued tutoring as the price of closeness. The distinction made room for a relationship they could choose more freely, whatever form it took.`),
o('Keep this brief and say he values the friendship as it is.', { flags: { quietFriendship: true, romanceDeclined: true }, rel: { Maya: 2 } }, `Maya said she valued it too, with the degree of warmth their history allowed. Jonah didn't add an unspoken test to the sentence. Naming friendship could be an affirmative choice rather than the polite disguise of an expectation he planned to keep pressing.`)
], { variants:[v(f('trustRupture'),`Maya's caution was part of the conversation, not a mood Jonah could persuade away with the right opening. She had agreed to talk; she had not agreed to restore every earlier ease.`),v(f('supportedMayaSetback'),`She referred to the ten minutes after the grant decision when Jonah had let her be disappointed without turning it into a problem he must solve. The memory mattered because it had been about her needs.`),v(f('quietFriendship'),`Several of their best conversations had happened with Ben nearby or with no romantic possibility attached. Jonah could preserve that kind of closeness if it was what he wanted.`)] }),
s('w1302', 'The unequal part', 'Café, continued', `Maya turned her cup by its handle while considering the question of tutoring. She did not want to be the person Jonah associated with every recovery, every improved mark and every good thing that might happen next.

Maya: I like helping with a problem. I don't want to become the reason your life is allowed to work.

Jonah: That would be a lot of responsibility.

Maya: It's also not true. You've had other help. You've made choices. Some of them were even sensible.

The humor softened the sentence without weakening it. Jonah could acknowledge the independent work, the practical support, the friendships and the mistakes. Doing so would not diminish Maya's contribution. It would make the contribution part of an honest account rather than a debt too large for either person to live comfortably inside.`, [
o('Name the other support and take responsibility for his own work.', { flags: { equalGroundDiscussed: true }, rel: { Maya: 2 }, stats: { Charisma: 2 } }, `He mentioned Hart's feedback, Evans's plan, practical help and the practice he had finally done when nobody was watching. Maya seemed to relax. Gratitude became easier to accept when it didn't require her to remain the indispensable explanation for another person's future.`),
o('Agree to end formal tutoring after finals and choose any future contact freely.', { flags: { equalGroundDiscussed: true, mentorBoundariesRespected: true }, rel: { Maya: 2 } }, `They would finish the commitments already made, then stop treating their meetings as an academic arrangement. Friendship, a possible date, or respectful distance would have to stand on its own reasons. The end date made the distinction concrete.`),
o('Say he would rather keep things platonic while he finds his footing.', { flags: { romanceDeclined: true, quietFriendship: true, equalGroundDiscussed: true }, stats: { Happiness: 2 } }, `Maya accepted the answer without asking him to prove how long finding his footing would take. Jonah could want a steadier life before romance without treating himself as unworthy of affection. Their next conversation could simply be another conversation.`),
o('Say that he needs her more than anyone else could understand.', { flags: { unequalDependence: true, trustRupture: true }, rel: { Maya: -4 } }, `Maya set the cup down. “That's exactly the role I'm saying I can't take.” The sentence was painful because it was clear. Jonah would still have academic resources and opportunities for friendship, but insisting on dependence was closing the possibility of freely chosen closeness.`)
]),
s('w1303', 'The question with room around it', 'Café, before leaving', `Their cups were nearly empty. Maya had seven minutes before she needed to go. Jonah could feel the urge to compress everything he had been thinking into a speech that left no uncertain space for her answer. He resisted the idea long enough to recognize another possibility: a clear sentence, followed by listening.

He could name friendship and mean it. He could defer romance while preserving the relationship. If he wanted to express interest, he could do so without turning the history of help into evidence that she should reciprocate. Her answer would reflect her own feelings and the relationship they had actually built.

Outside the window, somebody was trying to fold a map in a wind that had other plans. The scene was ordinary enough to keep this one from becoming a ceremony.`, [
o('Tell her he wants to keep a lasting platonic friendship.', { flags: { romanceDeclined: true, quietFriendship: true, feelingsDiscussed: true }, rel: { Maya: 2 } }, `“I'd like that,” Maya said, adding that friendship still needed the same respect for time and honesty they had been discussing. Jonah agreed. The answer did not make the semester smaller. It clarified a relationship he wanted to keep for its own sake.`, { target:'w1304' }),
o('Say he is not ready to pursue anything romantic this semester.', { flags: { romanceDeclined: true, feelingsDiscussed: true }, rel: { Maya: 1 }, energy: 2 }, `Maya said that was a complete answer. They did not reserve one another for an imaginary later date or make promises about who they would become. Jonah felt the relief of a decision that did not need to be permanent to be honest now.`, { target:'w1304' }),
o('Express his interest and ask whether she feels something similar.', { flags: { feelingsDiscussed: true, acceptsRefusal: true } }, `Jonah said he liked her in a way that had become different from gratitude and friendship. He stopped before explaining why she ought to find the feeling reasonable. Maya took a moment, looking at him rather than at the table.`, { availability:bond,target:'w13m' }),
o('Express interest while making clear that she can decline.', { flags: { feelingsDiscussed: true, acceptsRefusal: true } }, `The sentence was shorter than Jonah had imagined. He told her what he felt and did not ask her to make it easier by pretending to feel the same. Maya listened carefully, then answered with the same effort toward clarity.`, { availability:{not:bond},target:'w13f' })
]),
s('w13m', 'An answer freely given', 'The same café table', `Maya smiled before she began speaking, then looked serious enough that Jonah understood he needed to hear the whole answer.

Maya: Yes. I like you too. Not because I helped you pass a quiz. I liked the garden walk, and the conversations where you remembered I had a life after the library.

Jonah: I hoped. I didn't know.

Maya: I wasn't entirely sure what I wanted to do about it until recently.

She wanted to finish the semester and end the formal study arrangement before deciding whether to begin dating. It wasn't a test he could pass by performing certainty. It was a boundary that made the possibility more comfortable for her.

Maya: We can talk after the results. Both of us still get to choose then.

Jonah noticed that his relief did not remove the need to answer carefully. Mutual interest was real. A relationship had not yet been agreed.`, [
o('Agree to wait and keep the coming weeks free of pressure.', { flags: { mutualInterest:true, mentorBoundariesRespected:true, romanceDeclined:false }, rel:{Maya:3,affection:2}, stats:{Happiness:4} }, `“After the results,” Jonah said. “And neither of us owes the other a yes.” Maya laughed softly at the formality, then said she appreciated the meaning. They left at the time she had named. The conversation had opened a possibility without borrowing her next appointment to celebrate it.`,{target:'w1304'}),
o('Thank her for being clear, but choose friendship for now.', {flags:{mutualInterest:false,romanceDeclined:true,quietFriendship:true},rel:{Maya:2},stats:{Happiness:2}},`Maya looked surprised, then accepted the answer. Jonah could recognize mutual interest and still decide that dating was not what he wanted now. They agreed not to make the friendship a waiting room for a different relationship.`,{target:'w1304'})
]),
s('w13f', 'An answer that is still kind', 'The same café table', `Maya thanked him for asking plainly. Then she said she did not want to begin a romantic relationship. She did not offer a detailed list of changes Jonah could make to earn a different answer.

Maya: I don't want you to hear “try harder” when I say no.

Jonah: I understand.

Maya: You don't have to feel cheerful about it immediately. I just need the answer to stand.

Depending on their history, she hoped to keep a friendship or preferred a little more distance. Neither possibility changed the academic standard Jonah still needed to meet. Her feelings were not another assessment whose feedback could be used to secure a higher mark.

Jonah felt disappointed. He could allow the feeling without turning it into a responsibility she must carry.`, [
o('Accept the answer and preserve whatever friendship is comfortable for both.', {flags:{romanceDeclined:true,unreciprocatedRespectfully:true,quietFriendship:true},rel:{Maya:2},stats:{Happiness:-2}},`He thanked her for being direct. They discussed the remaining study commitments practically, without pretending the moment was painless or making the pain a reason to bargain. Jonah left with an honest answer and the responsibility to respect it after the conversation ended.`,{target:'w1304'}),
o('Accept the answer and ask for some respectful distance.', {flags:{romanceDeclined:true,unreciprocatedRespectfully:true,chosenDistance:true},stats:{Happiness:-1},energy:2},`Maya agreed. They could be civil in shared classes while Jonah gave the feeling room to settle elsewhere. He did not announce that friendship had been worthless all along. Wanting distance now did not require rewriting the good parts of what had happened.`,{target:'w1304'})
]),
s('w1304', 'The rest of the afternoon', 'Library upper floor', `After the conversation, the final examination still existed. So did the project defense, the rent ledger and Ben's request to check the opening slide. Jonah found a table upstairs and laid out the work.

His feelings were allowed to affect the afternoon. They were not required to determine the academic outcome. Happiness could make concentration easier; disappointment could make it harder; neither replaced the actual methods he had practiced.

The library note from the first tutorial was still inside his folder: population, denominator, claim, limitation. He could now explain why those words belonged together. Whoever he might date, or not date, that understanding would remain his.`, [
o('Do one focused preparation block before discussing the conversation with anyone.', {prep:3,flags:{protectedFinalPrep:true},stats:{Intelligence:2}},`He worked through a problem without checking messages. The task gave the afternoon a shape that could hold both emotion and responsibility. When he finished, he could identify a real gap to review rather than treating every uncertain feeling as proof that nothing was under control.`),
o('Join Ben for a short rehearsal and keep Maya’s private words private.', {prep:2,rel:{Ben:2,Maya:1},flags:{respectedPrivacy:true,helpedBen:true}},`Ben asked whether Jonah was all right. Jonah gave a broad honest answer without quoting Maya's private explanation. Then they rehearsed the handoff. Friendship supplied company without requiring another person's conversation to become entertainment.`),
o('Take a walk and return at a specific time.', {energy:5,stress:-3,flags:{wellbeingPlan:true}},`He chose a route that ended back at the library and set no punitive pace. At the agreed time he returned. The break was useful because it had been a real break, not a disguised promise to think about work continuously while walking.`),
o('Let the afternoon disappear into replaying every sentence.', {prep:-2,energy:-3,flags:{ruminationBeforeFinal:true}},`Jonah considered alternate versions of the conversation until the daylight changed. None altered the words already spoken. The work remained available, but the time window was smaller. He would need to choose a next action rather than wait for an interpretation that made uncertainty disappear.`)
]),
s('w1305', 'The last preparation agreement', 'Group-study room', `Sofia put the final rubric in the middle of the table. The exam would test application. The defense would test whether the group could support its recommendation and acknowledge its limits. The research record and any formal review had separate deadlines.

Sofia: We can't guarantee one another grades. We can guarantee that these two hours contain actual practice.

Ben: That is a much less marketable slogan.

Priya: It also fits before my bus.

Jonah had become familiar with the room's particular noises: the radiator, the latch, the chair that complained only when someone leaned back. Familiarity did not mean safety from failure. It meant he had a place where effort could happen without first having to invent the conditions for it.`, [
o('Explain unfamiliar examples and ask the group to challenge his reasoning.', {prep:4,flags:{finalPractice:true},stats:{Intelligence:2}},`They changed the numbers, populations and claims so nobody could succeed by remembering the original answer. Jonah made two mistakes he was glad to discover here. The group didn't turn practice into a competition over who had already become ready.`),
o('Rehearse clear explanations and source references with Ben.', {prep:3,rel:{Ben:2},stats:{Charisma:2},flags:{finalPractice:true,presentationPrepared:true}},`They practiced beginning with the question, stating the answer and pointing to the evidence. When an explanation became too smooth for the data beneath it, Sofia interrupted. Jonah learned to welcome the interruption before a panel had to provide it.`),
o('Organize the materials, confirm deadlines and protect the final night’s rest.', {prep:3,energy:4,stats:{Looks:2},flags:{finalChecklist:true,presentationPrepared:true}},`The checklist contained the room, time, required files, source record and food for the day. None would answer an exam question. Together they reduced the number of avoidable problems that could consume attention before the question arrived.`),
o('Skip the group and rely on familiarity with the notes.', {flags:{skippedFinalPractice:true},prep:-1},`The notes looked increasingly familiar as Jonah read them. Whether he could apply them in a different example remained less clear. He still had the exam ahead, but he had declined a chance to discover the gap while someone could help him examine it.`)
])]);
