import {scene as s,option as o,variant as v,flag as f} from '../helpers.js';
export const middleBranches=[
{after:'w0606',nodes:[
s('w06-consent','A participant can leave','Research methods lab',`The interview invitation said participation was voluntary. Priya asked what the team would do if someone agreed, answered two questions and then wanted to stop. Jonah had read the word voluntary as if its work ended when the person first said yes.

Priya: They might miss a bus. They might dislike the question. They might simply change their mind.

Sofia: We need the withdrawal procedure written before we recruit.

Ben: Can they ask us to remove what they've already said?

Priya: That's what we need to establish. Not improvise while they're standing there.

The team checked the course guidance. Participants could stop without explanation, and the invitation would specify the point before anonymization at which their contribution could be withdrawn. Once identifying information had been removed, retrieving a particular account might no longer be possible. That limitation needed to be explained before consent, not discovered afterward as a defense of convenience.

Jonah imagined giving the explanation at the bus stop while someone watched the road. A technically accurate paragraph could still be too long to use well in that situation. They needed a concise spoken version and a clear written one the person could keep.

Amir offered to test the invitation by playing a participant with somewhere else to be. He interrupted twice, once to ask who would see the data and once to say he had changed his mind. The exercise made the team's awkwardness visible before an actual participant had to absorb it.

No grade would compensate for making someone feel trapped in a student project. The ethical procedure also improved the research: people who understood the terms could make an informed choice, and the team would know what it was legitimately allowed to analyze.

Jonah had an opportunity to contribute something more useful than a general declaration that he cared about ethics. He could write a workable explanation, test a practical limit, or make sure the team stored consent separately from the evidence it would discuss.`,[
o('Draft the short explanation and have Priya test it for clarity.',{flags:{consentProcedure:true,researchIntegrity:true,priyaAlly:true},prep:2},`Priya removed a phrase that sounded like leaving would inconvenience the team. Jonah replaced it with a plain statement of the participant's options. They kept the written limitations visible rather than burying them beneath reassurance.`),
o('Test the withdrawal procedure with Amir before any real interviews.',{flags:{consentProcedure:true,amirAlly:true},stats:{Intelligence:2}},`They discovered that their first filing system made it difficult to locate an account before anonymization. Fixing the system now took less time than promising a withdrawal they couldn't later perform.`),
o('Separate consent records from anonymized interview notes.',{flags:{consentProcedure:true,protectedParticipantData:true},prep:2},`The folders now served different purposes. Jonah documented the access rules so that privacy would not depend on everyone remembering an informal conversation during a busy project week.`),
o('Ask Hart to review the unresolved procedure before collecting more data.',{flags:{consentProcedure:true,askedEthicsAdvice:true},rel:{Hart:1},energy:-1},`Hart clarified the withdrawal point and asked the team to revise the invitation before proceeding. Seeking advice delayed the next interview, but it prevented the deadline from becoming an excuse to invent consent terms afterward.`)
]),
s('w06-caption','The figure without an author','Group-study room',`The slide looked better with the new diagram. Jonah had found it in another group's shared presentation folder, where the labels matched almost exactly what his team wanted to explain. The folder was accessible to the class. That did not settle whether copying the diagram without acknowledgment was permitted.

Sofia: Who made it?

Jonah: I can find out.

Ben: Would it be quicker to make our own?

Sofia: Quicker isn't the only question. But perhaps.

The diagram compressed several relationships into a layout that seemed obvious only after someone had designed it. Jonah recognized the temptation to treat visual work as less authored than a paragraph. If he copied the words, the issue would be clear. Because the contribution appeared as boxes and arrows, it was easier to imagine that nobody in particular had done it.

Daniel joined the room to collect a charger and identified the diagram as one he had made with a partner. He was happy for the team to use it if the attribution was accurate and the labels weren't changed in a way that misrepresented the original method. He would also share the source references so they could check whether the diagram fit their data.

Daniel: Please don't put my name on a different argument just because you started with the same boxes.

Jonah: So credit isn't permission to change anything we want.

Daniel: Exactly. You can make your own version. Then say what it actually is.

There were several legitimate solutions. Jonah could use the diagram under the terms offered, adapt it transparently, or build a new one suited to the project. Each would take some time. The only effortless solution was the one that quietly treated another person's completed work as raw material without an owner.

The deadline did not make that solution better; it merely made the legitimate alternatives feel more expensive.`,[
o('Use the diagram with accurate attribution and unchanged methodological meaning.',{flags:{visualCreditKept:true,fairCredit:true,danielAlly:true},rel:{Sofia:1}},`The slide named the authors and the source, and Jonah checked that the explanation matched the diagram's purpose. The team gained a useful visual without pretending it had created the work behind it.`),
o('Build an adapted diagram and label the adaptation explicitly.',{flags:{visualCreditKept:true,presentationPrepared:true},stats:{Looks:2},prep:1},`Jonah changed the layout to match the team's actual evidence and recorded what had been adapted. The result was less polished at first and more accurate for the claim it would accompany.`),
o('Make a simpler original figure using the team’s own data.',{flags:{originalProjectFigure:true,presentationPrepared:true},stats:{Intelligence:2,Looks:1}},`The simpler diagram had fewer arrows because the team's evidence supported fewer relationships. That was a strength. Jonah could explain every part without borrowing the authority of a more ambitious design.`),
o('Omit the figure and use a clear verbal explanation with source cards.',{flags:{sourceCardsPrepared:true},prep:2,stats:{Charisma:1}},`The slide became plainer. The explanation became easier to connect to the team's actual sources. A visual was useful only if it clarified an argument they could defend.`)
])]},
{after:'w0705',nodes:[
s('w07-errors','The pattern in the wrong answers','Quiet study room',`Jonah drew three columns on a blank sheet: concept, mistake, next attempt. The midterm result could fit into one number, but the reasons behind it could not. He had confused a count with a rate on one practice problem, then answered a causal question correctly for a reason he couldn't reproduce afterward.

Sofia: A correct guess still leaves something to learn.

Jonah: That's an efficient way to make the good news worse.

Sofia: Or to find the useful part before the final asks differently.

She showed him her own error record. It wasn't empty. One answer had used an assumption the question did not grant, and she had lost points despite reaching a plausible conclusion. Jonah found the example reassuring precisely because Sofia didn't present it as proof that grades were meaningless. It was evidence of a specific habit she wanted to change.

They agreed not to compare totals during this session. The point was to produce a second attempt that addressed the first mistake. A page of reflections about being disappointed would not substitute for solving anything.

Jonah chose one question and changed the population from students to clinic visitors. The arithmetic remained familiar; the reason for choosing the denominator had to be stated again. When he explained it, Sofia asked who had not been surveyed. The follow-up exposed a limitation that had not appeared in his first answer.

He wrote the missing group into the second column, then made a new prompt for the third. The process was slower than rereading the solution, and it supplied better evidence of what he could actually do.

The room booking ended in twenty minutes. He could practice another concept, prepare a question for Hart, or stop after consolidating the one improvement. There was no benefit to manufacturing a long list of errors if the list would become another object he avoided opening.`,[
o('Work one new example for the most important remaining gap.',{prep:3,flags:{errorLogUsed:true},stats:{Intelligence:2}},`The second attempt still needed a correction, but it failed at a later and more specific step. Jonah could see progress without requiring the page to become flawless in one sitting.`),
o('Ask Sofia to challenge an answer he got right for an uncertain reason.',{prep:2,rel:{Sofia:2},flags:{fairRivalry:true,errorLogUsed:true}},`Her follow-up revealed where recognition had stood in for explanation. Jonah revised the reasoning while keeping the original correct answer visible. The distinction would help him trust future successes more accurately.`),
o('Prepare a focused office-hours question from the error log.',{prep:2,flags:{officeHoursQuestionReady:true},rel:{Hart:1}},`The question included the attempt, the uncertainty and the kind of explanation he needed. Hart would not have to reconstruct the problem from a general declaration that the topic was difficult.`),
o('Consolidate one improvement and stop before the practice becomes exhausted copying.',{prep:1,energy:4,flags:{deliberatePracticeLimit:true}},`Jonah wrote a short explanation without looking at the model answer, then closed the notebook. The stopping point preserved a piece of understanding rather than a record of how long he had remained at the desk.`)
]),
s('w07-homework','The other side of the call','Apartment video call',`His mother asked how the midterm had gone, then paused to answer someone at the door. Jonah waited with the small view of his own face in the corner of the screen. Behind her, the kitchen contained a stack of unopened post and a bag she had not put away.

When she returned, she apologized for the interruption. A neighbor needed a tool, and Dad was still at work.

Jonah: You don't have to make the whole evening free for this.

Mum: I wanted to hear how you were.

Jonah: I want to hear that about you too.

Mum: Then you'll get a very detailed account of a washing machine.

The machine had been making a noise that changed depending on the load. His parents were deciding whether to repair it or replace it with something used. Jonah felt an immediate urge to say he could send money, although his ledger did not support the offer. He recognized the same habit in a different direction: reassurance through a promise whose cost had not been checked.

His mother didn't ask him to solve the washing machine. She was describing her life, as he had described his. The conversation could contain mutual concern without becoming a competition over who was allowed to have the larger problem.

Jonah told her about one concept he had understood better and one he needed to practice. If the total was disappointing, the account could say that plainly. If it was strong, he could enjoy the result without turning it into a guarantee about the final.

The kitchen light changed as Dad arrived. He asked whether he had missed the important part. Mum said they were still deciding what that was. Jonah laughed and stopped trying to organize the call into a report that would make everyone entirely unworried by the time it ended.`,[
o('Share the actual midterm result and ask what help with the repair decision would be useful.',{flags:{parentHonesty:5,reciprocalFamilyTalk:true},stats:{Charisma:2}},`His father wanted a second person to compare the written estimates, not an unaffordable transfer. Jonah could do that. The offer became useful once it matched the need instead of his wish to eliminate their worry.`),
o('Keep the call balanced between college and their ordinary week.',{flags:{reciprocalFamilyTalk:true},stats:{Happiness:3},stress:-2},`They spent as much time on the neighbor's missing tool as on the exam. Jonah's life mattered without being the only life permitted to occupy the conversation.`),
o('Admit he cannot offer money and ask for the repair details anyway.',{flags:{familyMoneyHonesty:true,parentHonesty:4},stats:{Charisma:2}},`Mum said she hadn't been asking him to pay. Naming the assumption let Jonah stop hearing every household problem as another invoice for the chance they had given him.`),
o('Arrange a shorter call tomorrow when his father can join from the start.',{flags:{familyBoundary:true},energy:3},`They chose a time and kept the current goodbye affectionate. A planned continuation made the shorter call feel like an arrangement rather than a disappearance.`)
])]},
{after:'w0806',nodes:[
s('w08-camera','Outside the photograph','Campus garden',`Tessa had taken a photograph at the volunteer event and wanted to check who was comfortable being included in the newspaper's small report. Jonah had assumed that attending a public event automatically answered the question. Tessa said it did not settle every use, especially for a close photograph accompanying a personal account.

Tessa: I can use the wider shot. It shows the event without making one person represent the whole story.

Jonah: Would the close one be better?

Tessa: Better for what? That's the useful question.

The close photograph showed Nia speaking with a student near the pantry information table. It was warm, readable and potentially misleading. A caption could make an ordinary conversation look like a disclosure of need that neither person had chosen to publish.

Nia preferred the wider shot. The student did too. Tessa accepted the decision and returned to the layout. The more striking image had lost to the more appropriate one without anybody treating the people in it as obstacles to a good article.

Jonah thought of Maya's closed research folder and the accounts in the interview notes. He was beginning to see privacy as a set of choices made by particular people, not an abstract rule that could be set aside whenever a story became emotionally effective.

Daniel asked whether a caption should identify the volunteers by name. Ellis wanted his name included; another volunteer preferred not to appear. The group could honor both preferences without making either seem strange.

There was a small task Jonah could take: check the caption, ask the missing volunteer about their preference, or help choose a different image. Each involved giving someone accurate information about what would happen next, rather than asking for a quick yes without explaining the use.`,[
o('Help write a caption that describes the event without assigning private stories to participants.',{flags:{carefulPublicSpeech:true,privacyInPractice:true},stats:{Intelligence:2}},`The caption named the event and the available services. It did not infer why any particular person had attended. Jonah could see how much restraint a truthful short sentence sometimes required.`),
o('Ask the remaining volunteer about publication using the actual draft.',{flags:{privacyInPractice:true},stats:{Charisma:2},energy:-1},`Showing the draft made the request concrete. The volunteer chose to be unnamed, and Jonah recorded that preference accurately instead of asking them to justify it.`),
o('Support the wider image and help Daniel adjust the layout.',{flags:{danielAlly:true,privacyInPractice:true},stats:{Looks:2}},`The less dramatic image needed a different layout to remain readable. Daniel treated that as a design task, not a reason to pressure someone into allowing the closer photograph.`),
o('Decline to appear himself while supporting the event report.',{flags:{ownPrivacyBoundary:true},stress:-2},`Tessa removed his name from the caption without withdrawing the invitation to future meetings. Jonah could contribute to something public while choosing limits on his own visibility.`)
]),
s('w08-map','A map drawn by walking','Alderport riverside',`The river path divided at a sign whose arrows had become difficult to read. Ben chose the left path with enough confidence that Jonah followed before asking whether he knew where it went. Five minutes later they reached a locked maintenance gate.

Ben: I have discovered a very private section of public space.

Jonah: We could have read the map.

Ben: We can still become those people.

They walked back without turning the mistake into a dispute over who had sounded certain. Amir, catching up from a phone call, said the other path led to the old ferry steps. Priya had recommended the steps because they were close to a reliable bus stop, a detail Jonah now understood as part of what made a place usable.

At the water, they found a bench long enough for three people and bags. The view contained warehouses, apartment windows and a strip of sky rather than the picturesque version of Alderport used in college brochures. Jonah liked it more than he expected. It looked like a city where people did things besides attend an impressive institution.

Ben spoke about missing his younger cousins. Amir admitted he had joined too many clubs in the first month because every introduction felt like a decision about the rest of his life. Jonah had assumed both had settled in more easily than he had.

The conversation didn't require each person to disclose a difficulty of equal weight. Sometimes one spoke and the others listened. Sometimes they watched the water without interpreting the silence as a failure to connect.

They had time before the bus. Jonah could suggest another walk, offer to host a small meal, or simply let the afternoon remain a complete event rather than converting every good experience into an obligation to repeat it perfectly.`,[
o('Suggest a regular low-cost walk that people can join when free.',{flags:{riverRoutine:true,peerCircle:true},rel:{Ben:2},stats:{Happiness:2}},`They chose a recurring time with no attendance requirement. The routine would offer company without turning absence into a personal statement each week.`),
o('Offer a small meal at the apartment and explain its practical limits.',{flags:{hostedPeers:true,peerCircle:true},rel:{Ben:2},cash:-8,food:1},`Jonah mentioned the narrow table and asked everyone to bring something inexpensive. Ben said he could supply bread and an argument about soup. The invitation sounded possible rather than impressive.`),
o('Tell them one thing he misses from home without apologizing for it.',{flags:{peerVulnerability:true},rel:{Ben:2},stats:{Charisma:2}},`He described the kitchen noise on Sunday mornings. Amir recognized the feeling even though his own house sounded different. Missing home did not mean Jonah had failed to make a life here.`),
o('Enjoy the afternoon and preserve the next day for quiet recovery.',{flags:{restorativeSolitude:true},energy:4,stats:{Happiness:2}},`He declined a late extension and caught the bus with enough time to cook. The afternoon remained good partly because he didn't exhaust himself trying to make it longer.`)
])]},
{after:'w0906',nodes:[
s('w09-public','The correction that reaches everyone','Newspaper office',`Tessa asked Jonah to read a two-sentence correction before it appeared in the event notes. The original description of the project had overstated who wrote a section. She wanted the replacement to correct the fact without repeating a private disagreement in unnecessary detail.

Tessa: A correction should tell people what was wrong and what is right. It doesn't need to publish every conversation that got us there.

Jonah: What if someone thinks the short version leaves out too much?

Tessa: We keep the supporting record. We don't turn the correction into a second source of harm just to make it entertaining.

Jonah could see the temptation from both sides. A dramatic account might make his remorse more visible, or his innocence more persuasive, depending on what he had actually done. The people whose work had been misdescribed needed an accurate public record, not a performance centered on how difficult the correction felt for him.

Sofia had checked the contribution details. Maya had approved the description of her peer feedback but asked that her private messages not be quoted. Ben had corrected his own summary with the people who heard it. Several small actions had to fit together because the inaccurate account had not traveled through a single perfectly controlled channel.

The draft named the actual authorship and the nature of the peer critique. It did not claim that everybody now felt the same way about the events. That part of the story would remain in relationships rather than in the publication's record.

Jonah had a final chance to request a factual change, accept the wording or ask a question about where the correction would appear. He did not need to approve a flattering version. He needed to help produce a reliable one.`,[
o('Approve the accurate correction and keep private messages out of it.',{flags:{publicCorrectionCompleted:true,respectedPrivacy:true},rel:{Maya:2,Sofia:1}},`Tessa scheduled the correction and retained the supporting source note. Jonah accepted that some readers would never learn how carefully the wording had been considered. Accuracy did not need an audience for the effort behind it.`),
o('Request one factual change supported by the contribution record.',{flags:{publicCorrectionCompleted:true,contributionLedger:true},stats:{Intelligence:2}},`He pointed to the specific entry rather than asking for the tone to become more favorable. Tessa checked it, made the correction and thanked him for bringing evidence she could verify.`),
o('Ask how to reach the people who heard the inaccurate version outside the publication.',{flags:{correctionFollowthrough:true,publicCorrectionCompleted:true},stats:{Charisma:2},energy:-1},`Tessa suggested a short direct clarification to the relevant group. Jonah kept the wording consistent so that the correction would not acquire a different story each time it was repeated.`),
o('Let the others verify the facts and step back from shaping his own image.',{flags:{publicCorrectionCompleted:true,acceptedLimitedControl:true},stress:-2},`He confirmed the factual record and left the final wording to the people responsible for publishing it. Giving up control of how admirable he appeared made it easier to focus on whether the account was true.`)
],{variants:[v(f('falseAccusationResolved'),`The correction would state that Jonah's documented description had been accurate. He was not required to confess to the misleading phrase merely because a correction was now needed.`),v(f('misattributedDraft'),`If Jonah had helped create the inaccurate version, the correction needed to reach the same audience. Quietly changing a private file would not perform that task.`)]}),
s('w09-secondchance','A second invitation with limits','Peer-study noticeboard',`The peer group was planning another methods session. Ben asked whether Jonah wanted to join and explained that the meeting would use a stricter format this time: one prepared attempt from each person, a fixed end and an accurate note of any material used in later assignments.

Jonah: Is that because of what happened?

Ben: Partly. Also because the old arrangement had problems before anyone argued about them.

Jonah: I don't want to arrive as the reason everyone needs rules.

Ben: Then arrive with a problem you've attempted. That's what the rest of us are doing.

The invitation did not restore every relationship or dismiss the credit issue as unimportant. It offered a way to participate under conditions that could work for everyone. Jonah could accept those conditions without demanding that they first be removed as proof of forgiveness.

Sofia added that the meeting would not include a discussion of Maya's private decisions about tutoring. Academic support could continue through a group without recruiting that group to pressure one member into more contact. Jonah appreciated the clarity, even if part of him wished someone would argue his case.

Priya proposed a twenty-minute section on missing data. Amir would bring an example in which the missingness followed a pattern. Jonah could contribute a revised sampling question or help check the explanations after the meeting.

The work waiting on the table was useful in its own right. Rebuilding trust might happen through it, but treating every helpful action as a deposit against a debt of forgiveness would make the work harder to share.

Jonah looked at the date and compared it with the café rota before answering. The small practical check was one of the habits the group was asking him to bring.`,[
o('Accept the format and bring a genuine attempt, including its uncertainties.',{flags:{peerTrustSecondChance:true},prep:3,rel:{Ben:2,Sofia:1}},`The attempt contained a mistake worth discussing. Nobody treated its existence as an insult to the preparation requirement. Jonah had done the part that made the shared hour useful.`),
o('Contribute written questions because the meeting conflicts with work.',{flags:{peerTrustSecondChance:true,accurateAvailability:true},prep:2,rel:{Ben:1}},`He sent the questions before the session and received the group's notes afterward. The alternative respected the actual conflict rather than depending on a last-minute disappearance.`),
o('Decline for now and use Hart’s office hours without blaming the group.',{flags:{independentPlan:true,respectedPeerBoundary:true},prep:2},`Ben accepted the decision. Jonah could choose another legitimate route through the coursework without making the group's conditions into evidence that nobody wanted him to succeed.`),
o('Ask one practical question about the format before deciding.',{flags:{clarifiedPeerAgreement:true},stats:{Charisma:2},prep:1},`He asked how detailed the prepared attempt should be. Sofia showed an example, and the requirement became less mysterious. Clarification was welcome; bargaining against every limit would have been a different conversation.`)
])]},
{after:'w1006',nodes:[
s('w10-balance','An unpaid number stays visible','Vale’s counter',`Mrs. Vale had two copies of the installment record. Jonah's matched hers except for a payment date he had written a week too early. The discrepancy was not evidence that either person had acted dishonestly. It was an error that could become more consequential if left uncorrected.

Mrs. Vale: This is when the payment is expected. This is when it arrived. Keep both if they differ.

Jonah: Even if the balance is right?

Mrs. Vale: Especially if you want the next conversation to be simple.

Jonah corrected the date and looked at the amount remaining. If his account was positive, the discussion concerned confirming the next due date and preserving a buffer. If it was negative, the shortfall needed a realistic source of payment. The ledger did not become a different kind of document according to how badly he wanted the semester to feel settled.

His next wages, any approved aid and the term's remaining costs belonged on the same page. He could not promise income twice, once to rent and once to a plan that had quietly assumed rent was already solved. Mrs. Vale didn't need his academic average to understand the arithmetic. She needed the date and amount he could actually commit.

The conversation felt less humiliating than the version Jonah had imagined while avoiding it. It was still uncomfortable. Practical discomfort did not necessarily mean the other person was judging his entire life; sometimes it meant two people were discussing an obligation that had not been met.

A customer entered the shop and waited by the sweets. Mrs. Vale asked whether Jonah had one remaining question before she returned to work. He could use the moment to clarify the plan, revise an unrealistic promise, or confirm a record they both understood.`,[
o('Correct the date and reserve the next named income for the balance.',{flags:{rentRecordCorrected:true,reservedRent:true,paymentArrangement:true},stress:-2},`Both copies now showed the same plan. Jonah left the unpaid amount visible. An arrangement became trustworthy through accurate updates, not through making the page look more reassuring.`),
o('Revise an amount he cannot realistically pay on the earlier date.',{flags:{rentRecordCorrected:true,renegotiatedBeforeDefault:true},stats:{Charisma:2}},`Mrs. Vale considered the revised schedule and recorded what she could accept. Jonah had to hear a limit as well as state one. The resulting promise was smaller and more likely to survive the week.`),
o('Confirm that a positive balance is a buffer, not an excuse to forget the next bill.',{flags:{smallCashBuffer:true,rentRecordCorrected:true},prep:1},`He marked the next due date and kept necessary food costs beside it. Whether the buffer was large or modest, giving it a purpose made the next month's choices easier to compare.`),
o('Ask for a written copy of any revised terms before leaving.',{flags:{writtenRentTerms:true,rentRecordCorrected:true},stats:{Intelligence:1}},`The written terms protected both people's memory. Jonah put his copy beside the lease rather than trusting that an uncomfortable conversation would remain perfectly clear several weeks later.`)
]),
s('w10-source','The interview he cannot reuse','Research methods office',`One participant had agreed to an anonymous interview for the class project. Jonah now wanted to use the most vivid quotation in a separate presentation. The new context would be public within the college rather than confined to the original class.

Hart: What did the person agree to?

Jonah: The interview and the project.

Hart: Then identify whether this is the same use before deciding what would make your presentation stronger.

The quotation was persuasive. It described missing help because the available hours conflicted with travel and paid work. Jonah felt the familiar temptation to treat the importance of the problem as permission to use the strongest available material. The person's consent remained a separate question.

The guidance offered several options. He could seek fresh permission through the approved contact route, use an appropriately aggregated description that did not identify the person, or omit the quotation and rely on evidence already cleared for the presentation. He could not make the use acceptable merely by removing the name while leaving recognizable details intact.

Maya had faced similar questions in her own study, but Jonah did not need to take the problem to her. Hart's office was the appropriate place to clarify the rules. Using the correct source of support also kept an academic issue from becoming a pretext for contact someone might not currently want.

The deadline meant fresh permission might not arrive in time. That was a practical consequence of planning the use late, not a reason to assume the answer would be yes. Jonah needed a version of the presentation that remained defensible if permission was declined or no reply came.

He opened the draft and looked at the space occupied by the quotation. It was possible for the slide to become less dramatic and the work more responsible at the same time.`,[
o('Seek fresh permission and prepare a version that works without the quotation.',{flags:{renewedConsentRequested:true,researchIntegrity:true},prep:2},`The request explained the new audience and left refusal uncomplicated. Jonah did not make the participant responsible for his deadline; the alternative slide was ready before any response arrived.`),
o('Use an aggregated account within the original consent terms.',{flags:{consentScopeRespected:true,researchIntegrity:true},stats:{Intelligence:2}},`He checked that the summary could not identify the participant and that the original agreement permitted this use. The resulting account supported the claim without turning one person's story into public property.`),
o('Omit the quotation and make the evidence limitation explicit.',{flags:{consentScopeRespected:true,cautiousEvidence:true},prep:2},`The presentation lost a memorable sentence but retained a defensible argument. Jonah recorded why the quotation was absent so that another teammate would not quietly restore it while improving the slides.`),
o('Ask Hart to check the final use before the submission deadline.',{flags:{askedEthicsAdvice:true,consentScopeRespected:true},rel:{Hart:1},energy:-1},`The review took time that could have gone to polishing. It confirmed that the submitted version respected the participant's agreement. A polished misuse would not have been a better use of the afternoon.`)
])]},
];
