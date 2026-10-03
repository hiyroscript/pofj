import {scene as s,option as o,variant as v,flag as f} from '../helpers.js';
export const earlyBranches=[
{after:'w0106',nodes:[
s('w01-letterbox','The letterbox downstairs','Vale’s shop',`Mrs. Vale was sorting the post into narrow slots when Jonah came downstairs. A letter addressed to the previous tenant occupied his slot. He recognized neither the name nor the unfamiliar return address, and for a moment he wasn't sure whether the small problem belonged to him simply because it had reached his door.

Mrs. Vale: Leave that with me. And write your name on the card, if you haven't.

Jonah: Is the old tenant nearby?

Mrs. Vale: Not anymore. I can forward it. You don't need to investigate a stranger's post to be helpful.

He wrote JONAH REED carefully, using the pen attached to the counter by a piece of string. The letters looked strangely official. Upstairs, his name existed mainly on course pages and the account that contained too little money. Here it identified a place someone could send something to him.

A parcel for the second-floor flat was too wide for its slot. Mrs. Vale pointed to the shelf where it would wait for collection. Jonah realized how many small arrangements made the building function without ever appearing in the lease.

Jonah: What should I do if something breaks upstairs?

Mrs. Vale: Tell me what it is. Don't wait until it has become three things.

He thought of the table leg, the window latch and the way the apartment key caught unless he lifted the handle. None was an emergency. Each could become harder to describe if he treated admitting a problem as an admission that he shouldn't have rented the room.

Mrs. Vale finished sorting the letters and asked whether he had found the market. It was not an invitation to report his entire first week. Jonah could offer a practical answer, ask for a repair, or help with one small task she actually wanted done. The counter was a place for ordinary exchanges, and ordinary exchanges might be part of learning to live here.`,[
o('Report the window latch clearly and arrange a suitable repair time.',{flags:{reportedApartmentRepair:true},stats:{Charisma:2},stress:-2},`Mrs. Vale wrote down the fault and offered two times. Jonah chose one when he would be home. The repair became an appointment rather than a vague grievance, and she knew not to enter while he was away.`),
o('Ask which building arrangements he should know before a problem arises.',{flags:{knowsBuildingRoutine:true},prep:1},`He learned where emergency notices appeared, how the laundry booking worked and whom to call for a leak. The information wasn't dramatic. It would save attention on a week when he had less to spare.`),
o('Offer to carry the parcel only after asking where it should go.',{flags:{helpedVale:true},stats:{Happiness:2}},`Mrs. Vale asked him to leave it on the designated shelf. Help, at this scale, meant following the recipient's practical preference. Jonah put it there and returned the pen without making the exchange larger than it needed to be.`),
o('Label his slot, thank her, and keep the conversation brief.',{flags:{namedApartment:true},energy:2},`His name remained behind the clear plastic cover when he went upstairs. It was a small sign that the room was occupied by someone particular. He didn't need a long conversation for the fact to matter.`)
]),
s('w01-bus','The route after dark','Alderport bus shelter',`The last campus bus followed a slightly different route. Jonah discovered this when a familiar turn passed outside the window and the driver continued straight ahead. He had a valid ticket and no immediate danger, only the peculiar embarrassment of realizing that a journey he thought he understood had another set of rules.

Priya sat two rows ahead, her bag firmly between her feet. She turned when he checked the route map for the third time.

Priya: Evening service. It misses Birch Street, but the next stop is only five minutes away.

Jonah: You know all of them?

Priya: The ones that might leave me stranded. I'm less ambitious about the others.

She had a long journey after this bus, including a connection whose timetable didn't care how interesting a seminar became. Jonah had heard her insist on meeting end times and mistaken the insistence for exceptional efficiency. Now he could see the ordinary infrastructure behind it.

The display announced the next stop. A student near the front asked the driver whether the return service would still be running after the club fair. The answer was no. Several people began checking their phones at once.

Priya: Campus acts as if everyone can stay an extra hour. The buses have a different academic philosophy.

Jonah: Does anybody change meeting times if you explain?

Priya: Sometimes. It helps if they ask before they send the final plan.

He wanted to remember the sentence without turning Priya into a walking lesson about access. She was tired and carrying groceries. If he asked another question, it should be one she had time to answer, not a request that she make her commute educational for him.

At the next stop they would separate. Jonah had enough information to get home and enough new context to make a future group meeting less careless. What he did with that context would matter more than an elaborate expression of sympathy on the bus.`,[
o('Ask permission to note her usual departure time for future group work.',{flags:{knowsPriyaCommute:true,priyaAlly:true},stats:{Charisma:2}},`Priya gave him the time and asked that he check again when the timetable changed. Jonah saved it as a constraint to consult, not a permanent fact he now knew better than she did.`),
o('Check his own return routes and save the evening timetable.',{flags:{knowsEveningBus:true},prep:2},`He saved the relevant services and the walking route from the alternate stop. The next late library visit would need a transport decision before he became absorbed in the work.`),
o('Offer to adjust the next study invitation around the bus connection.',{flags:{inclusivePlanning:true,priyaAlly:true},prep:1},`Priya suggested an earlier start rather than simply a shorter meeting. Jonah hadn't considered that option. The adjustment preserved useful study time while treating travel as something the schedule had to include.`),
o('Thank her for the directions and let her have a quiet journey.',{energy:2,flags:{respectedCommuterRest:true}},`She smiled and returned to the window. Jonah checked his stop once, then put the phone away. Being considerate did not require turning every moment of shared travel into a conversation.`)
])]},
{after:'w0206',nodes:[
s('w02-question','A question that fits on a card','Advising reception',`The receptionist handed Jonah an index card and suggested he use it to write the first question for his meeting. He initially wrote, “How do I fix this?” The sentence occupied very little space while containing almost everything that frightened him.

A student at the next chair was crossing out a question of her own. He introduced himself as Daniel, then laughed when Jonah looked confused at the name badge on his borrowed jacket.

Daniel: The jacket belongs to my sister. The name is mine. The badge is neither of us. Long story, poor laundry planning.

Jonah: I was mostly wondering what counts as one question.

Daniel: I've reduced mine from “my whole future” to “whether I can change one lab section.” So apparently anything smaller is progress.

Daniel Cho was waiting to discuss a clash between a required lab and a part-time work commitment. The solution might be simple, if a place existed in another section. If it didn't, the next choice would be harder. He had brought the schedule rather than an argument about why the conflict shouldn't exist.

Jonah looked at his own card again. He could identify a calculation he had not understood, a feedback comment he had misread, or a practical problem that had prevented him starting. None explained the entire grade. Each gave another person something specific to respond to.

The receptionist called someone else's name. Jonah had a few minutes before his turn. He folded the large, useless question behind the card and began again on the clean side.

Daniel: Keep the big question somewhere, though.

Jonah: Why?

Daniel: Because it's real. It just may need more than one office.

The distinction let Jonah feel less foolish about having written it. He didn't need to pretend the problem was small. He needed a first piece of it that would fit into an actual conversation.`,[
o('Write down the exact step where the quiz calculation stopped making sense.',{prep:2,flags:{specificAdvisingQuestion:true}},`The new question named the denominator and the reason he had chosen it. Jonah could bring the failed reasoning into the meeting without asking the advisor to infer it from the total score.`),
o('Write down the schedule conflict that most needs a decision.',{flags:{specificAdvisingQuestion:true,workDisclosed:true},stats:{Charisma:1}},`He listed the times, the travel and the deadline for replying. A practical answer might still involve a compromise, but it could now address the conflict he actually had.`),
o('Ask Daniel how he prepared the supporting information.',{flags:{metDaniel:true},prep:1,stats:{Charisma:1}},`Daniel showed him the two schedules and the email requesting a reply date. Jonah copied the structure, not the facts. A useful way of preparing could be shared without pretending two situations were identical.`),
o('Keep the first question and add one concrete example beneath it.',{stress:-2,flags:{admittedBroadAnxiety:true}},`The large worry stayed on the page, but an example gave the advisor a place to begin. Jonah didn't have to make his feelings fit the card before he was allowed to enter the room.`)
]),
s('w02-return','The book he has not finished','Library returns desk',`The reminder said the borrowed book was due tomorrow. Jonah had read fewer pages than he intended. He considered keeping it because returning it felt like admitting he had failed to use the opportunity, then noticed how little that argument concerned whether anyone else might need the book.

Tessa was near the returns desk, checking a quotation against a physical copy. She looked up when he placed the book on the counter without letting go.

Tessa: Renewal, or a ceremonial farewell?

Jonah: I haven't finished it.

Tessa: Those aren't mutually exclusive conditions.

The librarian explained that another reader had requested it. Jonah could return it, keep notes on the relevant section and place a new hold. He could also use a shorter source Hart had put on reserve. The choices were more practical than the story he had begun telling himself about what the unfinished book proved.

Tessa's article had a quotation that an online transcription had shortened badly. She showed him the difference after asking whether he had a minute. The omitted clause changed a qualified claim into a confident one. Jonah recognized the kind of error he had been making in his own draft, although this one had arrived through copying rather than original overstatement.

Jonah: The words are technically there.

Tessa: The meaning has been made to stand differently.

She copied the entire sentence and added the page reference. Jonah thought about how readily he trusted neat text simply because it looked finished. His notes were full of fragments whose origins he could no longer identify without reopening several tabs.

Returning the book could become part of a better method: record what he had actually used, preserve enough context to understand it, and let another person have the resource when it was their turn. The unfinished reading would still exist. It would no longer be disguised as a reason to ignore the borrowing arrangement.`,[
o('Return the book after recording one accurate quotation and its context.',{flags:{sourceNotebookStarted:true},prep:2,stats:{Intelligence:1}},`He recorded the page, the surrounding qualification and what he intended to use it for. The note would take less time to trust later because he had made its limits visible now.`),
o('Return it and use the shorter reserve source for the immediate task.',{prep:2,flags:{prioritizedRelevantReading:true}},`The reserve chapter addressed the exact question he had been trying to approach through the longer book. Choosing the relevant source was not evidence of laziness; it was part of identifying the task.`),
o('Ask Tessa to show him how she checks a quotation before publication.',{flags:{tessaAlly:true,sourceNotebookStarted:true},stats:{Charisma:2}},`She explained the check she had just performed, then returned to her own deadline. Jonah had received a method and a clear end to the conversation, both of which he could respect.`),
o('Return it unread and make a realistic plan to borrow it after midterms.',{energy:2,flags:{deferredOptionalReading:true}},`He placed a note in the calendar rather than carrying the unfinished book as a permanent accusation. The next borrowing decision could be made when the time to read it actually existed.`)
])]},
{after:'w0306',nodes:[
s('w03-cost','The cost of a question','Library booking desk',`The library's room-booking page showed three empty slots and several rooms marked unavailable. Jonah could reserve an entire afternoon with two clicks. He imagined the relief of knowing a quiet place would exist whenever he happened to arrive.

Amir was waiting behind him to book a room for a short group meeting. He looked at the screen without commenting on Jonah's choices.

Jonah: How long do you usually reserve?

Amir: The time we'll use. Plus ten minutes if the meeting needs setup.

Jonah: What if you need more?

Amir: Then needing more is a problem we solve. It doesn't give us ownership of every possible hour in advance.

The reply was matter-of-fact enough to avoid becoming a reprimand. Jonah had been thinking of empty slots as resources that would remain empty unless he claimed them. In reality, other people would arrive later with needs he couldn't see from the booking desk.

He checked the time Maya had agreed to meet. If he wanted to practice alone beforehand, he could book that interval too. The rest of the afternoon belonged to uncertain plans and other potential users. A booking could make a commitment more reliable or become a way to postpone deciding what the commitment actually was.

The desk assistant explained the release policy. Unused reservations should be cancelled; after a grace period, rooms could be offered to people waiting. Jonah liked the clarity. The rules didn't require everyone to guess whether a closed door concealed important work or an absent student who had forgotten to return.

Amir's group needed only thirty minutes to divide a lab task. Jonah could see a workable arrangement on the same screen once he stopped treating the afternoon as a single indivisible possession.`,[
o('Book the tutorial and a realistic preparation interval, leaving the rest free.',{flags:{fairRoomBooking:true},prep:2},`The reservation now matched the work he could name. Jonah put the cancellation rule in the calendar note so that a changed plan wouldn't quietly waste another person's study time.`),
o('Coordinate a shared room handoff with Amir’s group.',{flags:{amirAlly:true,coordinatedRooms:true},stats:{Charisma:2}},`They wrote down the handoff time and checked that each group could finish its task. Sharing the resource required a precise agreement, not an assumption that the other people would remain flexible indefinitely.`),
o('Use an open desk and reserve only the guided session.',{flags:{independentStudy:true},prep:1,energy:1},`The desk was less private but available immediately. Jonah could do the preliminary reading there and save the room for the conversation that actually required speaking aloud.`),
o('Reserve the longer period, then commit to doing the scheduled work there.',{prep:3,energy:-2,flags:{extendedStudyBooking:true}},`Keeping the long reservation became a decision to use the afternoon, not merely protect it from other people. Jonah brought enough work to justify the space and cancelled the final half hour when he finished early.`)
]),
s('w03-invitation','The invitation he can decline','Campus newspaper room',`Tessa's open meeting took place in a room whose cupboards contained more old editions than anyone appeared willing to count. Jonah arrived with the possibility of staying for twenty minutes. He had not promised an article or joined a committee by walking through the door.

Tessa: We need someone to check the posted service hours against the actual doors. It's unglamorous and useful.

Jonah: What happens if the sign and website disagree?

Tessa: We ask. Then we record the answer, including if no one has one yet.

Daniel was helping with the page layout. He had left enough blank space that the draft looked unfinished to Jonah. Daniel said the space was for readers, not evidence that the staff had run out of ideas.

The small verification task connected to Jonah's coursework, but it would take time. Four doors were in different buildings. One office closed before his next class ended. He could do part of the check, arrange a partner, or decline while exams and money needed attention. The room did not become hostile at the idea that a volunteer might name a limit.

Tessa showed him the publication schedule. A late fact-check could delay several other people's work. Accepting casually would therefore be less kind than it sounded if he couldn't finish. Jonah had been learning this lesson in tutorial appointments; it applied here too, even though no professor would grade the missed commitment.

He looked around the room at people doing small jobs with visible boundaries. There might be a place for him among them. Finding that place required deciding what he could offer now, rather than promising the version of himself who somehow had every evening free.`,[
o('Accept two nearby doors and give a clear reporting time.',{flags:{newspaperFactCheck:true,tessaAlly:true},stats:{Charisma:2},prep:1},`Tessa assigned the other buildings to someone else. Jonah's smaller commitment became useful because the rest of the plan could be built around its accurate size.`),
o('Pair with Daniel and divide the route around their actual classes.',{flags:{danielAlly:true,newspaperFactCheck:true},stats:{Looks:1,Charisma:1}},`They compared timetables before dividing the buildings. Daniel's route covered the early-closing office; Jonah's covered the evening services. The assignment fit because they checked the constraints rather than trusting enthusiasm to solve them.`),
o('Decline the task and ask whether he may attend another meeting later.',{flags:{newspaperBoundary:true},energy:3},`Tessa said yes and gave him the recurring meeting time. The invitation did not expire because Jonah had refused one task. He could remain interested without becoming unreliable.`),
o('Stay to learn the checking method, without taking responsibility for a deadline.',{prep:2,flags:{learnedVerification:true}},`He watched the group distinguish a confirmed fact from an unanswered query. The categories would be useful in his research notes even if he never wrote a newspaper article.`)
])]},
{after:'w0406',nodes:[
s('w04-ownwork','The proposal she does not show him','Library stairwell',`Maya was carrying a closed folder when Jonah met her in the stairwell. He recognized the title of her grant proposal on the cover. She mentioned that Imani had given difficult but useful feedback, then kept the folder closed.

Jonah: Are you changing much?

Maya: Enough that I want to finish thinking before I explain it to everyone.

Jonah: Fair.

Maya: I don't mean never. Just not every draft while it's still trying to become itself.

Jonah knew the wish to hide weak work from judgment. This sounded different. Maya was choosing who participated in a particular stage of her project, and when. Sharing an afternoon or a joke did not make every page she carried available for inspection.

He had fifteen minutes before his next class. They could talk about another subject, compare a general method without discussing her private draft, or part at the next landing. The encounter did not require him to prove closeness by gaining access to the folder.

A student coming down the stairs apologized for taking the inside rail because of a sore knee. They shifted aside and waited. The brief interruption changed the rhythm of the conversation in a useful way. Jonah could let the subject move instead of treating Maya's limit as a question he should solve.

She asked whether his next seminar used the short article on service access. He had read it, or at least enough to identify a passage worth discussing. There was intellectual company available without making her own project the necessary object of it.

For Jonah, that was a less dramatic and more sustainable possibility than becoming the one person to whom Maya supposedly had to show everything.`,[
o('Change the subject and ask about the seminar article.',{flags:{respectedDraftPrivacy:true,respectedPrivacy:true},rel:{Maya:2},prep:1},`They compared two possible interpretations of a sentence until reaching the landing. Maya seemed comfortable disagreeing because the discussion concerned a shared text she had chosen to discuss.`),
o('Say he would be glad to read a later version if she asks.',{flags:{respectedDraftPrivacy:true},rel:{Maya:2}},`Maya thanked him and made no promise. Jonah let the offer remain available without checking when she intended to use it. A resource could be offered without becoming another deadline.`),
o('Share a difficulty from his own revision without requesting her help.',{flags:{reciprocalConversation:true},rel:{Maya:1},stats:{Charisma:1}},`He described discovering that a favorite sentence did not belong in the argument. Maya laughed in recognition. They could share the experience of writing without exchanging the work itself.`),
o('End the conversation warmly and leave her time to think.',{flags:{respectedMayaWork:true},energy:2,rel:{Maya:1}},`They separated at the landing. Jonah noticed that an encounter could end before it had exhausted every possible topic. That left both people with a reason to be glad it had happened.`)
]),
s('w04-retrieval','The answer without the page','Quantitative practice room',`The worked example looked obvious while it lay open. Jonah turned the page over and tried to explain it to an empty chair. Halfway through the second sentence, the method stopped being obvious. He reached for the page, then stopped himself long enough to identify what had vanished.

Amir entered with a practice sheet and asked whether the chair had offered useful criticism.

Jonah: Devastating. Mostly silence.

Amir: That's its technique. Have you tried writing the missing step as a question?

Jonah: I thought I was supposed to retrieve the answer.

Amir: Knowing which part you can't retrieve is also information.

They agreed to work separately for ten minutes, then compare explanations. The task was not a competition to see who could make memory look effortless. Jonah had been reading examples as if familiarity would eventually become understanding without an intermediate action. The empty chair had exposed the missing action more effectively than another hour of rereading.

His new problem used clinic appointments rather than library visits. The numbers were different, but the denominator still represented the group to which the claim referred. He could see the relation while the source page was hidden. When he reached the limitation, he stalled again.

Amir did not fill the silence immediately. He waited for Jonah to say what he was trying to establish. That question led back to the population omitted from the sample. Jonah wrote the missing group in words before trying another numerical summary.

The practice left him with fewer completed examples than he had intended. It also left him with a clearer distinction between the steps he could produce and the ones he could only recognize. That distinction would matter when the midterm asked a new question in a familiar language.`,[
o('Complete a second unfamiliar example before reopening the notes.',{prep:3,flags:{retrievalPractice:true},stats:{Intelligence:2}},`The second attempt contained a different mistake, which Jonah marked rather than hiding. He was gathering evidence about his method. The practice would now tell him what to review before the exam.`),
o('Explain the missing limitation to Amir and invite one follow-up question.',{prep:2,flags:{retrievalPractice:true,amirAlly:true},stats:{Charisma:1}},`Amir changed the recruitment method and asked whether Jonah's limitation still applied. It didn't in exactly the same way. Jonah revised the answer instead of defending a memorized sentence.`),
o('Make a compact study card with a question on the front and method on the back.',{prep:2,flags:{methodCards:true}},`He wrote a prompt that required reasoning, not a phrase that merely cued a familiar answer. The card would be useful only if he paused to attempt the explanation before turning it over.`),
o('Stop after recording the gap and preserve the planned rest period.',{prep:1,energy:4,flags:{practiceGapRecorded:true}},`The unfinished problem stayed in the notebook with a specific question beside it. Stopping did not erase the useful discovery. Jonah could return to it with more attention rather than spending the evening proving that he was tired.`)
])]},
{after:'w0506',nodes:[
s('w05-payday','The payslip is a record','Café stockroom',`Luca showed Jonah a sample payslip before the first full payroll run. The columns distinguished hours, rate, gross pay and any adjustments. Jonah had been multiplying hours by twelve in his head, then treating the resulting number as if its arrival date were part of the calculation.

Luca: Earning it and receiving it can be different days. Check the date, especially if rent is waiting.

Jonah: I hadn't put the date into the plan.

Luca: Most people don't until the date introduces itself.

The induction wages already entered in Jonah's ledger had been paid separately. The regular rota would follow the published schedule. Luca pointed to the reporting deadline for any discrepancy. A missed hour could be corrected, but it was easier when the employee retained an accurate record rather than relying on everyone's memory after a busy fortnight.

Jonah compared the time sheet with the hours he had worked. One short training period was recorded under a separate code. He almost assumed it was missing, then checked the note beside the code. The explanation was there, in small print that mattered more than the large total.

A coworker came in to ask whether anyone could cover an opening shift. Luca said he would finish this conversation first. The pause modeled a boundary so unremarkably that Jonah nearly missed it: another person's request could wait while an existing task was completed.

The payslip would not make the rent smaller or the coursework easier. It could help Jonah stop building plans around money arriving at a time nobody had actually promised. His next decision concerned the record, the payment date and the way he would communicate any shortfall before it became an unanswered notice.`,[
o('Add payroll dates to the rent ledger and keep copies of the time sheets.',{flags:{payDatesKnown:true,workRecordsKept:true},stats:{Intelligence:2}},`The ledger now separated expected earnings from money already received. Jonah could see a temporary gap that had been invisible in the total. It was a problem to arrange, not evidence that the arithmetic itself had failed.`),
o('Ask Luca how to raise an error if a future payslip does not match.',{flags:{workRecordsKept:true},stats:{Charisma:2}},`Luca gave him the contact and the information needed: date, hours and the relevant record. Jonah saved it without waiting for an error. Knowing the process reduced the likelihood that an ordinary correction would become an avoidable argument.`),
o('Contact Mrs. Vale about the payment timing before the due date.',{flags:{paymentArrangement:true,payDatesKnown:true},stress:-2},`He gave the actual payroll date and amount expected. Mrs. Vale recorded the arrangement and the outstanding balance. The conversation worked because Jonah supplied something more precise than “soon.”`),
o('Keep the current plan but reserve a small buffer before optional spending.',{flags:{smallCashBuffer:true},prep:1,energy:1},`He wrote the buffer into the plan as money with a job already assigned. It was modest, and future bills might consume it. For now it prevented the entire account from appearing available for whichever need spoke first.`)
]),
s('w05-message','The message sent before the absence','Library entrance',`The tutorial reminder appeared while Jonah was still waiting for a delayed bus. He could arrive late, send notice, or say nothing until he had a complete explanation. The last option felt strangely attractive: perhaps a sufficiently detailed explanation afterward would be less embarrassing than admitting the problem while it was still unfolding.

Ben was at the same stop, watching the estimated arrival time increase.

Ben: That number has ambitions.

Jonah: I'm going to miss the start of a meeting.

Ben: Does the person know?

Jonah: Not yet. I don't know how late I'll be.

Ben: You do know you won't be on time.

The distinction was simple enough to be irritating. Jonah didn't need a finished account of the delay to communicate the part already certain. Maya could use the time differently if she knew. If the meeting was with another peer or an office, the same courtesy applied; notice was not a special performance reserved for relationships he most wanted to protect.

He opened the message and typed too much: the bus, the prior class, the reason he had chosen this route, the work schedule that made another route awkward. Most of it answered a question nobody had asked yet. The useful information was the delay, the uncertainty and an option for the other person to reschedule.

Ben checked his own calendar and sent a message too. Apparently the advice had reminded him of a commitment he was about to handle badly. Jonah appreciated that. They were two students learning to notice the practical effects of their choices, not one person delivering wisdom from outside the problem.

The bus finally appeared around the corner. Jonah still had time to send a message before boarding, which meant the choice could change someone else's next ten minutes rather than merely explain them afterward.`,[
o('Send a concise warning with permission to reschedule.',{flags:{noticeBeforeDelay:true,mentorBoundariesRespected:true},rel:{Maya:2},stats:{Charisma:1}},`The reply said Maya would use the interval for her own work and meet only if enough time remained. Jonah accepted that condition. The notice had preserved her ability to choose, even though it could not restore the lost minutes.`),
o('Cancel the meeting with notice and send the prepared question for a later session.',{flags:{noticeBeforeDelay:true,keptReschedulePromise:true},prep:1,rel:{Maya:1}},`He moved the question into the shared folder without asking for an immediate written answer. The preparation was still usable. A cancelled meeting did not have to become either wasted work or a claim on someone else's evening.`),
o('Ask Ben to help him shorten the message to the information that matters.',{flags:{noticeBeforeDelay:true,benPracticalAlly:true},rel:{Ben:2}},`Ben removed three defensive clauses and kept the uncertainty about arrival. Jonah sent the result. The message sounded less impressive and gave its recipient more useful information.`),
o('Wait until arriving, then acknowledge that notice should have come earlier.',{flags:{lateNoticeAcknowledged:true},rel:{Maya:-1},stress:1},`The delay had already used time someone else could have spent differently. Jonah named that without making the bus an excuse for the unsent message. The acknowledgment could inform his next choice; it couldn't return the minutes already gone.`)
])]},
];
