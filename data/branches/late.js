import {scene as s,option as o,variant as v,flag as f} from '../helpers.js';
export const lateBranches=[
{after:'w1106',nodes:[
s('w11-reviewer','The reviewer who disagrees','Writing seminar annex',`Sofia read Jonah's revised recommendation and agreed with most of the evidence. She still disagreed with the proposal. Jonah felt a brief flash of frustration: he had corrected the claim, cited the source and addressed the counterargument. Surely a sufficiently responsible draft ought to make disagreement stop.

Sofia: I think the staffing burden is still too uncertain.

Jonah: I've said it needs consultation.

Sofia: Yes. I'm not accusing you of hiding it. I'm saying I give it more weight than you do.

The distinction was harder to respond to than a factual error. They could share an account of the evidence and still judge the tradeoff differently. Jonah's task was not to discover a missing sentence that would oblige Sofia to agree.

She proposed a smaller first step: survey staff availability before inviting students into a trial. Jonah thought that might delay help for commuters whose scheduling problems were already documented. Both concerns belonged to people affected by the decision. Neither became irrelevant because it complicated a neat conclusion.

Hart asked them to write the strongest version of the other person's position. The exercise made Jonah notice how often he had summarized opposition in a form easier to defeat. Sofia's version of his argument was more charitable and more precise than the one he had been preparing in his head for hers.

When they exchanged pages, Jonah found one sentence he would have liked to use in his own conclusion. Sofia found a condition she had underestimated. They still disagreed about the recommended sequence.

The seminar would end without declaring one of them the person who cared correctly about students. A good revision could acknowledge the genuine tradeoff, explain a decision and leave room for new evidence to change it. Jonah had a choice about how much of the disagreement he would preserve in the final submission.`,[
o('Include Sofia’s strongest objection and explain why he still favors a limited trial.',{flags:{fairCounterargument:true},stats:{Intelligence:2,Charisma:1},rel:{Sofia:2}},`The paragraph became less triumphant and more credible. Jonah could state why he chose the trial without implying that a reasonable person who weighted the staff burden differently must have misunderstood the evidence.`),
o('Adopt the staff-consultation step because her argument changes his judgment.',{flags:{changedMindWithReasons:true,fairCounterargument:true},prep:2,rel:{Sofia:2}},`He explained the change in the revision note. Changing his mind after considering an objection was not a loss of authorship. It was a decision he could now defend more honestly.`),
o('Propose a parallel process that keeps both concerns visible.',{flags:{negotiatedResearchPlan:true},stats:{Charisma:2},prep:1},`They designed a short consultation period while preparing, but not yet launching, the trial. The plan preserved momentum without pretending preparation and implementation were the same commitment.`),
o('Ask Hart whether the assignment permits a conclusion that remains explicitly provisional.',{flags:{provisionalConclusion:true},rel:{Hart:1},prep:2},`Hart said provisional did not mean vague. Jonah still needed criteria for proceeding, stopping or changing the plan. He added them, giving uncertainty a practical shape rather than using it to avoid a recommendation.`)
]),
s('w11-author','The author note at the bottom','Print station',`The final draft had enough room for a short author note. Jonah once would have treated it as the least important part of the page, something added after the argument had done the serious work. Now he read it before pressing Print.

The note described feedback, sources and revisions. It needed neither to deny help nor attribute his entire understanding to the people who had supplied it. The right account would be specific enough that those people could recognize their contributions without being made responsible for the claims he chose to submit.

Daniel stood at the next printer, checking that a graph remained readable in grayscale.

Daniel: The gold disappears on the cheap printer if I use it for anything essential.

Jonah: So the labels have to do the explaining.

Daniel: Labels, patterns, spacing. Color can help, but it shouldn't be the only person doing the job.

Jonah looked back at his own chart. Two categories differed only by shade. He could fix the problem before submitting rather than assume every reader would see the page under the same conditions he did.

The print station had become a place where small decisions about access, credit and clarity intersected. None looked dramatic enough to headline the semester. Together they determined whether another person could understand the work and trust the account of how it had been made.

Maya had first met him here beside a unreliable stapler. He remembered her correcting her own poster and understood the scene differently now. Revision had never been evidence that she secretly lacked the competence he attributed to her. It had been one of the things that competence involved.

He checked the author note again. The next version could acknowledge assistance accurately, improve the chart's readability, or both if he accepted that the last ten minutes still belonged to the work.`,[
o('Make the chart readable without color and check the author note for accurate credit.',{flags:{accessibleFigure:true,visualCreditKept:true},stats:{Looks:2},prep:1},`Jonah added direct labels and simplified the legend. The page now carried its meaning through several cues, and the author note carried an account of help that did not depend on anyone remembering a conversation.`),
o('Ask Daniel to test the printed page from a reader’s perspective.',{flags:{accessibleFigure:true,danielAlly:true},stats:{Charisma:2}},`Daniel could identify the categories immediately but found a source reference too small to read comfortably. Jonah enlarged it. Feedback about presentation became a practical way to include readers rather than an argument about taste.`),
o('Use a text table when the chart adds more complexity than insight.',{flags:{accessibleFigure:true,simplifiedEvidence:true},stats:{Intelligence:2}},`The table was less decorative and easier to verify. Jonah kept the conclusion close enough that the reader could see which numbers supported which part of the claim.`),
o('Record exactly which feedback he used and which decisions remained his.',{flags:{specificAuthorNote:true,fairCredit:true},rel:{Hart:1},prep:1},`The note named useful questions and identified the resulting changes. It neither hoarded credit nor handed responsibility away. Jonah submitted the draft as work he could explain.`)
])]},
{after:'w1206',nodes:[
s('w12-timing','A visit that can be smaller','Apartment doorway',`Jonah's parents suggested visiting briefly on their way through Alderport during the break. The idea pleased him and immediately produced a list of things he thought the apartment should contain before they saw it: a better lamp, a chair that matched the table, evidence that their investment had produced a visibly organized life.

Mum: We can bring sandwiches. We aren't assessing the furniture.

Jonah: I know.

Dad: You say that in the voice you use when you don't entirely know.

The visit would need to fit around work and whatever academic appointments remained. Jonah could offer a real interval, or keep the plan vague while trying to become a more impressive host. The latter would make everyone arrange their travel around information he hadn't supplied.

He looked at the room with the proposed visit in mind. Some tasks were useful regardless of who saw them: wash the dishes, clear a place to sit, check the account paperwork so a question could receive an accurate answer. Other tasks existed mainly to stage a picture of effortless adulthood.

The distinction didn't mean he was forbidden to want the room to look pleasant. It meant he could choose a few changes without spending money intended for food or pretending the old chair had somehow become a source of family shame.

His father asked whether there was a nearby place to walk if the room felt crowded. Jonah knew several now: the garden, the river steps, a route that avoided the closed bridge. Knowing those places felt like something more substantial to offer than a new piece of furniture.

They could visit the actual life he had built, still incomplete and sometimes difficult. Jonah had to decide whether he would let the invitation become that honest.`,[
o('Offer a specific visit time and show them the room as it is.',{flags:{honestFamilyVisit:true,parentHonesty:6},stress:-2},`The clear time let his parents plan the journey. Jonah cleaned what needed cleaning and left the room recognizable. He wanted them to see where he lived, not inspect a temporary set built to imply he never struggled.`),
o('Plan an inexpensive walk and a simple meal together.',{flags:{honestFamilyVisit:true,familySawAlderport:true},cash:-10,stats:{Happiness:3}},`He chose a route he actually used and food he knew how to make. The plan offered company and a piece of his new city without asking the ledger to finance a performance of success.`),
o('Explain a work conflict and suggest a shorter visit that everyone can keep.',{flags:{familyBoundary:true,accurateAvailability:true},stats:{Charisma:2}},`His parents adjusted their travel. Naming the constraint early prevented the visit from becoming a collision between affection and a commitment his coworkers expected him to honor.`),
o('Choose a video visit this time and preserve money and preparation time.',{flags:{familyBoundary:true,practicalRoute:true},energy:3,prep:1},`They agreed on a call with enough time for ordinary conversation. A smaller visit was still a chosen connection. Jonah didn't need to apologize for every limit as if it diminished the importance of his family.`)
]),
s('w12-sister','The message that belongs to someone else','Library courtyard',`Maya received a message from her sister while they were standing near the courtyard wall. She read it, smiled briefly and put the phone away. Jonah knew enough about the debate club to ask how the event had gone, but he did not know whether this message concerned the event at all.

Maya: She's deciding whether she wants me at the next meeting.

Jonah: I thought she wanted help.

Maya: She does. She also wants to do something without me becoming the older sister who explains it to everyone afterward.

Jonah could hear a familiar issue from an unfamiliar direction. Help could remain welcome while access to the whole story became unwelcome. Maya was trying to respect that distinction with someone she loved and had known far longer than she had known him.

She didn't ask Jonah to decide what her sister should want. She was thinking aloud about when to offer, when to wait and when being useful could become a way of staying in control. Those questions had appeared repeatedly in his own semester, sometimes in ways he hadn't enjoyed recognizing.

Imani was due to meet Maya shortly. Jonah had a final-preparation block on his calendar. The conversation could stay brief and still be meaningful. He could share a parallel experience without claiming the situations were identical, or simply listen and let Maya's thought remain unfinished.

The phone vibrated with a second message. Maya looked at it and laughed. Her sister had requested help carrying a box of supplies, while explicitly declining speech coaching. The boundaries were unusually concrete.

Maya: That, at least, I can understand.

Jonah: A box is a reasonably specific assignment.

Maya: Until I discover how many boxes she calls “a box.”

They laughed together. The family obligation had become neither a romantic opening nor an obstacle Jonah needed to resent. It was part of the independent life of someone he was learning to know.`,[
o('Listen and support the specific help her sister has actually requested.',{flags:{understoodChosenHelp:true,listenedToMaya:true},rel:{Maya:2}},`Jonah said the clear request sounded useful, then let Maya decide how to respond. He had contributed attention without adding another instruction to the ones she was already negotiating.`),
o('Share how he is learning to accept his parents’ help without surrendering every decision.',{flags:{reciprocalFamilyTalk:true},rel:{Maya:2},stats:{Charisma:1}},`Maya recognized the tension and added a different example from home. The comparison expanded the conversation without turning either family into a simplified lesson about the other.`),
o('Ask whether she needs their next meeting moved around the family commitment.',{flags:{mentorBoundariesRespected:true,accurateAvailability:true},rel:{Maya:2}},`She checked and said no, the current time still worked. Jonah accepted the answer. A considerate offer did not need to be used to count as considerate.`),
o('Leave her to the message and keep his own scheduled study block.',{flags:{respectedMayaWork:true,protectedFinalPrep:true},prep:2},`They parted on time. Jonah could care about her family without abandoning the work that remained his responsibility. Respecting both lives required ordinary departures as well as intimate conversations.`)
])]},
{after:'w1305',nodes:[
s('w13-noaudience','A private answer stays private','Café window table',`Ben noticed that Jonah seemed distracted and asked whether something had happened with Maya. The question came from a friend who had heard enough of the semester to care. It did not mean Ben was entitled to a transcript of the recent conversation.

Jonah could share his own feelings and broad decisions. Maya's specific explanation, family details and private uncertainties belonged to her as well. The distinction became harder when he imagined how useful a quotation might be in getting Ben to understand why he felt the way he did.

Ben: You can tell me the part that's yours.

Jonah: That might be a shorter story.

Ben: I have survived short stories before.

The joke helped. Jonah did not need to choose between total secrecy and complete disclosure. If they had expressed mutual interest, he could say there was a possibility they intended to revisit. If Maya had declined, he could discuss disappointment without presenting her answer as a case for appeal. If he had chosen friendship or distance, he could describe that choice without making it a disguised accusation.

Ben had his own concern about the final presentation. He didn't introduce it as a demand that Jonah stop talking. He mentioned the practice time so they could both decide what the conversation had room to contain.

The café was busy enough that nearby voices covered their quieter exchange. Jonah appreciated the ordinary setting. An emotionally significant conversation did not have to turn the room into an audience.

He could leave this table feeling understood without making Maya's privacy the price of that understanding. It would require him to tolerate the fact that Ben might not receive every detail that made his version of the story feel perfectly complete.`,[
o('Describe his own feelings and the broad agreement, leaving her private words out.',{flags:{respectedPrivacy:true,feelingsSharedCarefully:true},rel:{Ben:2,Maya:1}},`Ben listened without requesting the missing details. Jonah discovered that friendship could respond to a feeling without being handed all the evidence in an imagined argument about it.`),
o('Ask for company rather than analysis of the relationship.',{flags:{askedForCompany:true},rel:{Ben:2},stats:{Happiness:2}},`They discussed the least important part of the café menu for a while. Jonah had requested what would actually help instead of inviting a debate he didn't want and calling it support.`),
o('Focus on the presentation now and arrange another conversation after finals.',{flags:{protectedFinalPrep:true,benPracticalAlly:true},prep:2},`The later conversation went into the calendar without becoming a promise to reveal more than was his to share. For now, they practiced the opening sentence and checked the source cards.`),
o('Keep the subject private and say so without shutting Ben out generally.',{flags:{ownPrivacyBoundary:true},rel:{Ben:1},energy:2},`Ben accepted the boundary. Jonah asked about his week before they left. Choosing privacy about one subject did not require disappearing from the friendship around it.`)
]),
s('w13-promises','A promise small enough to keep','Library planning desk',`The final-preparation calendar contained fewer open spaces than Jonah wanted. He had agreed to help Ben rehearse, attend one group session, check his own research record and answer the remaining work-schedule messages. Maya had her own calendar and did not appear in his as a solution to every academic gap.

Priya looked over the proposed group session and pointed to the final ten minutes.

Priya: Is this a summary, or where all the unfinished questions go?

Jonah: Those may have become the same thing.

Priya: Then decide which one you can actually finish before my bus.

The question exposed a familiar habit at a larger scale. Jonah often made a plan by listing everything he wished to accomplish and then treating the final time as evidence that the list would fit. A usable plan needed priorities, margins and an honest account of what would remain undone.

He took a second sheet and wrote the essential tasks first. Required submissions, the final exam, the defense. Then he added food, travel and rest. The available hours did not expand when he considered how much the outcome mattered.

Sofia suggested that each person name one topic they were not ready to explain. The group could use those topics instead of performing another broad review that left everyone's actual gaps untouched. Ben wanted to practice entering after a question rather than only delivering a memorized opening.

There were enough distinct needs to make an unfocused meeting feel busy for several hours. Jonah could help the group choose a structure that produced a smaller amount of real preparation. He could also protect a private block for the work that required his own attempt.

The calendar would not award points for ambition. It would become the place where the next few days actually happened, including the moments when someone needed to leave.`,[
o('Prioritize required work and limit the group session to named gaps.',{flags:{finalPlanRealistic:true},prep:3,stress:-2},`They removed two vague review items and assigned time to the questions people had actually brought. The smaller plan produced clearer obligations and a finish time that did not depend on everyone ignoring their next commitment.`),
o('Protect an independent block before the group meets.',{flags:{independentPlan:true,finalPlanRealistic:true},prep:3},`Jonah would arrive with attempts rather than a list of topics he hoped other people would teach. The protected block made the shared session more reciprocal.`),
o('Reduce an optional commitment and tell the affected person promptly.',{flags:{accurateAvailability:true,finalPlanRealistic:true},energy:3,prep:1},`The message disappointed someone mildly and early enough to let them adjust. Jonah preferred that honest inconvenience to a last-minute absence accompanied by a much longer explanation.`),
o('Build in meals and rest before allocating the remaining study hours.',{flags:{wellbeingPlan:true,finalPlanRealistic:true},energy:4,food:2},`The schedule looked less heroic after the basic needs appeared. It also looked more like something a real person could follow. Jonah kept the practical version.`)
])]},
{after:'w1406',nodes:[
s('w14-afterward','The room after the defense','Presentation room',`The audience had left, and the room contained the less impressive remains of a formal presentation: half-empty water cups, source cards no longer in order and a projector still displaying the title slide. Ben stood near the lectern without the urgency that had kept him moving during the questions.

Ben: I don't remember the second answer properly.

Sofia: You answered the question they asked. Then Jonah supplied the source reference.

Ben: That's reassuringly specific.

Priya: We should write the feedback down before memory improves all our performances.

They reconstructed the panel's comments while the wording was still fresh. One question had exposed an assumption in the cost estimate. Another had confirmed that the limited trial matched the evidence more closely than the original broad recommendation. The panel had not promised adoption of the proposal.

Jonah could feel the temptation to organize the event into a single story: triumph, disaster, or a proof that he had become the kind of person who belonged at Bellwether. The details resisted that simplification. Some parts had gone well because they practiced; some had remained weak despite effort; some had depended on another teammate being ready when he wasn't.

The contribution ledger needed its final update. So did the shared folder. If they had used an adapted diagram, the attribution should remain attached when the slides were archived. If a source had been excluded for consent reasons, the excluded version should not become the one someone casually sent to a later audience.

Finishing the presentation therefore involved more than leaving the room. It required leaving a record that would remain accurate when the people who remembered the discussion were no longer standing beside it.

Jonah looked at the title slide with all four names. The names represented a set of particular contributions, disagreements and repairs. He wanted the final record to make those things legible without turning the archive into a transcript of every difficult conversation.`,[
o('Record the feedback and update the contribution ledger before leaving.',{flags:{projectArchivedAccurately:true,fairCredit:true},rel:{Sofia:2,Ben:1}},`The shared record named the panel's actual requests and each person's contribution. It would not depend on the most confident retelling becoming the official version.`),
o('Check the final files for consent limits, sources and obsolete slides.',{flags:{projectArchivedAccurately:true,consentScopeRespected:true},prep:2},`Jonah marked superseded files clearly and retained the required source history. The public-facing folder contained the version they were entitled to share, not merely the latest file someone happened to open.`),
o('Thank each teammate for a specific contribution before the group disperses.',{flags:{specificTeamThanks:true},rel:{Ben:2,Sofia:2},stats:{Happiness:2}},`Priya appreciated that Jonah mentioned the early collection materials rather than only her visible part during questions. Specific thanks recognized work that the audience had never seen.`),
o('Agree who will complete the archive so Priya can catch her bus.',{flags:{inclusivePlanning:true,projectArchivedAccurately:true},rel:{Sofia:1},energy:-1},`They divided the final tasks and sent Priya the completed record afterward. Letting her leave on time did not require removing her from the project's last decisions.`)
]),
s('w14-waiting','A day without a way to improve the mark','Alderport riverside',`For the first time since September, Jonah had no remaining assessment he could improve by staying up later. The final submissions were closed. The review process had reached its written decisions. The academic letter would arrive next week.

He went to the river because the apartment made it too easy to open the grade page again. The page contained the same information each time. Repetition gave him the sensation of doing something without creating any new evidence.

Amir was sitting on a bench with a book unrelated to the course. Jonah asked whether he was waiting for results too.

Amir: Yes. Reading this badly is still more interesting than refreshing the portal well.

Jonah: I keep thinking there must be one last useful thing.

Amir: There are useful things. Just not all of them change that number.

The distinction annoyed Jonah before it helped. He could check that the required receipt had been recorded, if there was a genuine reason to doubt it. He could make a practical plan for either academic outcome. He could cook, rest, speak to someone or finish an ordinary task that had been postponed during finals. None would secretly add points to the final.

The river was carrying a branch toward the old ferry steps. Jonah watched it turn slowly, refusing the direct route he expected. He did not try to make the sight into a lesson. Sometimes looking at something outside the problem was useful without having to explain why in an essay.

Amir returned to the book. Jonah had a choice about the rest of the day. Uncertainty would come along whichever route he chose. He could stop requiring the route to remove it before doing anything else.`,[
o('Make a brief practical plan for both possible academic outcomes.',{flags:{plannedForEitherResult:true},stress:-3,stats:{Intelligence:1}},`He listed the first appointment and financial task for each outcome, then stopped. Planning did not predict the letter. It reduced the number of decisions he would have to make while reacting to it.`),
o('Take a real break from checking and return to an ordinary household task.',{flags:{waitingBoundary:true},energy:5,food:2},`Jonah cooked and cleaned the table. The grade page remained unchanged while a different part of his life became easier to use. That was a legitimate result for the afternoon.`),
o('Meet a friend without making them repeatedly predict the outcome.',{flags:{waitingBoundary:true,peerCircle:true},rel:{Ben:2},stats:{Happiness:3}},`Ben declined to estimate the letter and agreed to a walk. Their conversation contained uncertainty without becoming an endless rehearsal of the same calculation.`),
o('Check the submission receipt once, then put the record away.',{flags:{recordVerified:true,waitingBoundary:true},stress:-2},`The required receipt was present. Jonah saved the confirmation and closed the page. Verifying a fact had an end; checking for reassurance could otherwise consume every available minute.`)
])]},
{after:'w1504',nodes:[
s('w15-catalogue','What belongs in the box','The apartment',`Jonah sorted the papers into three piles: keep, return and recycle. The categories were practical until a page acquired a memory. The first quiz belonged in keep, though not because he intended to remain permanently in conversation with its red circle. A borrowed handout belonged in return. Several nearly identical drafts could finally leave the room.

The tuition receipt lay between piles. He had treated it at different times as proof of love, a bill for future achievement and evidence that disappointing his parents would be uniquely unforgivable. The paper had not changed through those interpretations. It recorded money spent on a chance.

His phone contained the academic decision and the messages that would follow it into the break. Some relationships were warm, some cautious, some deliberately distant. Packing did not require him to resolve every unfinished feeling before closing the lid.

Ben sent a message asking whether Jonah wanted the group's final slides. Sofia had already shared the source record. Priya wanted to know where to send a book he had left behind. Their questions concerned the actual things he had done among them, not a single judgment about the semester.

Jonah chose a smaller folder for the work he might need in advising or future study. It contained examples, feedback, the final record and any formal decision relevant to explaining it. He would not preserve only the flattering pages or carry every scrap as if forgetting a failed sentence would make him dishonest.

The box was nearly full. He could close it now, write a note about what he wanted to remember, or contact someone whose borrowed item needed returning. Each action would give the ending a practical edge. A semester became part of the past through ordinary work as well as an official letter.`,[
o('Keep an accurate, manageable record of the work and academic decision.',{flags:{endingReflective:true,portableAcademicRecord:true}},`The folder contained enough to explain the semester without requiring Jonah to tell a heroic or hopeless story around it. He could use it wherever the next educational conversation happened.`),
o('Return borrowed materials and attach specific thanks where appropriate.',{flags:{endingConnected:true,borrowedItemsReturned:true},rel:{Ben:1,Sofia:1}},`The returns closed several small obligations. Jonah thanked people for what they had actually done, allowing each relationship to remain its own size rather than turning every returned book into a final speech.`),
o('Write a private note about one habit to continue and one to change.',{flags:{endingReflective:true,habitReview:true}},`He chose behaviors small enough to recognize on an ordinary Tuesday. The note did not promise reinvention. It offered a way to notice whether the next week was repeating the same avoidable mistake.`),
o('Finish packing and preserve a quiet evening before the next journey.',{flags:{endingQuiet:true},energy:4},`The lid closed. Jonah could rest without pretending the future was fully arranged. The next practical task had a date; it did not need to occupy every hour before that date arrived.`)
]),
s('w15-door','The person leaving the door open','Vale’s shop entrance',`Mrs. Vale was moving a delivery when Jonah came downstairs. He held the door and asked where she wanted the boxes. She pointed to a clear space near the counter rather than the location he would have guessed.

Mrs. Vale: There. The other spot blocks the meter cupboard.

Jonah: I wouldn't have noticed that.

Mrs. Vale: Now you have. Don't make it a personal revelation; just don't put boxes there.

He laughed. Her practical tone had become one of the familiar sounds of the building. Depending on the academic outcome and his plans, he might continue living upstairs or arrange a move. Either way, the account and notice requirements would need to be handled accurately.

Jonah asked for the relevant dates. If he stayed, he needed the next rent period. If he left, he needed the notice terms and a plan for any remaining balance. The conversation did not make academic success less meaningful or dismissal less painful. It simply belonged to the practical life that continued alongside the result.

A customer entered while they spoke, and Jonah stepped aside. He remembered standing at the counter after arrival, uncertain whether every small question announced that he was unprepared to live alone. He had since learned that questions could also prevent avoidable problems, provided he listened to the answers.

The apartment key was warm in his hand. It had never been a symbol to Mrs. Vale; it was the thing that opened the door if he lifted the handle correctly. Jonah could allow it to be practical and meaningful at once without requiring either interpretation to defeat the other.

Before leaving the shop, he had one final opportunity to make the next arrangement clear. The semester's rating was already determined. The next conversation would be easier if this one ended with accurate information.`,[
o('Confirm the next housing arrangement and put every outstanding amount in writing.',{flags:{endingPractical:true,housingNextStep:true,paymentArrangement:true}},`Jonah left with the date and balance recorded. A practical ending did not require every obligation to be settled immediately; it required the unsettled parts to remain visible and addressed.`),
o('Ask one remaining question about the lease before agreeing to the next step.',{flags:{endingPractical:true,housingNextStep:true}},`The answer clarified a notice period he had remembered incorrectly. Jonah corrected his calendar. Asking before promising had become a habit he intended to keep beyond this building.`),
o('Thank Mrs. Vale for specific practical help and finish the agreed arrangement.',{flags:{endingConnected:true,housingNextStep:true}},`She acknowledged the thanks and reminded him of the payment date. Jonah could appreciate the kindness without interpreting it as an erasure of the agreement that made living upstairs possible.`),
o('Keep the conversation brief, accurate and complete, then take the evening for himself.',{flags:{endingQuiet:true,housingNextStep:true},energy:2},`He supplied the information she needed and left at the end of the exchange. The next page of his life did not have to begin with a grand statement. It could begin with a promise small enough to keep.`)
])]},
];
