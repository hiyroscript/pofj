import { chapter, scene as s, option as o, variant as v, flag as f } from '../helpers.js';
export default chapter(3, 'Assigned, Not Rescued', [
s('w0301', 'A voluntary arrangement', 'Dr. Hart’s office', `Hart placed the improvement-plan form between them. It contained fewer inspiring words than Jonah expected: weekly practice, attendance, specific feedback, timely submission. Maya Park, the student from the printer, sat beside the window with her own notebook open.

Hart: Maya has agreed to two short sessions a week for the next month. You may choose one, both, or written guidance instead. This is peer study, not someone completing your assignments.

Maya: Tuesdays stop at five. I mean five, not five with an interesting question attached.

Jonah: What happens at five?

Maya: My own work.

She said it without hostility. Jonah realized the question had sounded as if her boundary required an interesting enough reason. Hart described how either student could change the arrangement. The form recorded a learning plan, not a contract giving Jonah access to another person's evenings.`, [
o('Accept two sessions and repeat the limits back clearly.', { rel: { Maya: 2, Hart: 1 }, flags: { mentorBoundariesRespected: true, regularTutorial: true } }, `“Questions prepared, my own writing, finished at five,” Jonah said. Maya added that “prepared” could include identifying exactly where he was stuck. She wasn't expecting competence before offering help. She was expecting him to participate in the difficulty rather than hand it over.`),
o('Choose one session and a practice checklist for independent days.', { prep: 2, rel: { Maya: 1 }, flags: { mentorBoundariesRespected: true, independentPlan: true } }, `Maya drew a line between an example they would discuss and two problems he would try alone. “Bring the attempts, including the wrong ones.” Jonah liked the clear boundary between assistance and ownership. One meeting could matter if the days around it contained actual work.`),
o('Explain his work schedule and negotiate a shorter meeting.', { rel: { Maya: 2 }, flags: { mentorBoundariesRespected: true, rescheduledHonestly: true, workDisclosed: true } }, `They found a Wednesday lunch slot before Maya's lab. Twenty-five minutes would require sharper questions than an hour. Hart wrote the change into the plan. Jonah felt unexpectedly relieved by a promise small enough that he could imagine keeping it.`),
o('Accept, but imply that extra help near deadlines will be necessary.', { rel: { Maya: -2 }, flags: { boundaryWarning: true } }, `Maya closed her pen. “Near your deadlines is also near mine.” Hart waited while Jonah absorbed the answer. The offer remained available, but the limit didn't move. He could still build a useful arrangement; first he would need to stop treating exceptional access as its starting point.`)
], { variants: [v(f('workDisclosed'), `The advisor's note about paid work lay beneath the form. The conflict had been documented, so Jonah did not have to establish its existence again.`), v(f('defensivePlan'), `Hart had also brought the disputed quiz. If Jonah still wanted to challenge it, she was willing to discuss the reasoning after the plan was recorded.`), v(f('tutorialQuestions'), `His three marked questions occupied the top page. Maya noticed them before she noticed the number beside the grade.`)] }),
s('w0302', 'The page between them', 'Library study room two', `Maya moved the marked quiz to the center of the table. Her own notes stayed on her side. Jonah appreciated the geography before he understood why: the problem belonged to him, but it was visible to both of them.

Maya: What happened on this question?

Jonah: I thought I understood it when I read the example.

Maya: And when the numbers changed?

Jonah: I couldn't tell which step came first.

Maya: That's more useful than “I'm bad at this.”

The room's booking slip showed another group arriving in forty minutes. Maya had a research proposal of her own, about how commuters accessed campus services, and a grant application due later in the term. She told him because it explained her schedule, not because his grade required her biography. There was room for a real conversation if he let it be about two people.`, [
o('Show the unfinished reasoning and name the point where he guessed.', { prep: 3, rel: { Maya: 3 }, flags: { candidAboutGrades: true, preciseLearningPlan: true } }, `Maya circled his first unsupported step, not the final wrong answer. “Here. Everything after this is obediently following the wrong instruction.” Jonah laughed despite himself. They rebuilt the step in words before using numbers. It was the first correction that felt like access to a method rather than a mark against him.`),
o('Ask how she plans her own work, then listen to the answer.', { rel: { Maya: 3 }, stats: { Charisma: 2 }, flags: { listenedToMaya: true, mayaResearchKnown: true } }, `Maya kept a list of questions her project could not answer. Jonah expected the list to sound discouraging. Instead it helped her protect the question it could. When she asked him to make the same kind of list for his essay, the exercise felt less like remedial work and more like borrowing a real research habit.`),
o('Say Hart explains the material badly and ask Maya to agree.', { rel: { Maya: -1 }, flags: { defensiveWithMaya: true } }, `“Which explanation?” Maya asked. Jonah had prepared a general complaint, not an example. She gave him time to find one. They discovered a compressed step in the notes that genuinely needed unpacking, and another he had skipped. Neither finding required pretending the other didn't exist.`),
o('Ask for a checklist and try the first problem independently.', { prep: 3, flags: { independentPlan: true }, rel: { Maya: 1 } }, `Maya wrote four prompts: population, denominator, claim, limitation. Jonah used them while she worked on her own paragraph. When he reached a defensible answer, she asked him to explain it rather than congratulate himself on matching hers. The silence between them became useful instead of awkward.`)
]),
s('w0303', 'Two kinds of tired', 'The café queue', `Luca counted the cups on the pickup counter twice, then called a name that nobody answered. Jonah waited behind Maya, who was reading an email with the expression of someone mentally moving several appointments at once.

Jonah: Another deadline?

Maya: My sister's school changed its meeting time. I'm the person who can get away in the afternoon, apparently.

Jonah: Can you?

Maya: That's the part still under discussion.

Luca finally found the owner of the coffee. Maya put her phone away without showing Jonah the message. He knew just enough to ask a considerate question and not enough to take charge. Her competence hadn't prevented other people from assuming she had spare time; perhaps it had encouraged them.`, [
o('Ask whether she wants to talk or have a quiet queue.', { rel: { Maya: 3 }, flags: { listenedToMaya: true, respectedPrivacy: true } }, `“A quiet queue,” she said. They discussed the café's improbable system of cup lids instead. Before leaving, Maya said she appreciated being offered a choice that included silence. Jonah hadn't solved the scheduling problem. He had avoided becoming another demand inside it.`),
o('Offer to reschedule their next tutorial if that would help.', { rel: { Maya: 2 }, flags: { mentorBoundariesRespected: true, flexibleTutorial: true }, prep: -1 }, `She checked her calendar and accepted a shorter meeting on Thursday. Jonah would lose some guided time and use the checklist first. Maya thanked him plainly. The cost was real enough to make the offer meaningful, small enough that it did not become a performance of sacrifice.`),
o('Tell her how his own family assumes college will work out.', { stats: { Charisma: 2 }, rel: { Maya: 1 }, flags: { sharedFamilyPressure: true } }, `Maya said that pride could become pressure without anyone intending it. Jonah recognized the description. They didn't decide whose family was harder to manage. They stood with two different versions of the same difficulty until Luca called Maya's order.`),
o('Suggest she should refuse the family request because grades come first.', { rel: { Maya: -2 }, flags: { presumedMayaNeeds: true } }, `“You don't know what the meeting is for,” she said. Jonah realized he had turned one glimpse of her afternoon into advice. She wasn't angry enough to explain her entire family. That was not an invitation to keep arguing. The conversation ended with the coffee arriving.`)
]),
s('w0304', 'Practicing an explanation', 'Quantitative lab', `Amir wrote five waiting times on the board: two, three, four, five and thirty-one minutes. Jonah's calculator produced nine. He stared at the result because almost nobody in the sample had waited anything like nine minutes.

Amir: The mean isn't lying. It just isn't the whole description.

Jonah: The middle one is four.

Amir: Median. Now keep the thirty-one visible somewhere. That person still waited.

Sofia wanted to know whether the long delay came from a different service. Priya wanted the table to say how many observations had been recorded. Each question changed what a reasonable summary could claim. Jonah began to understand that quantitative work was not choosing a single impressive number and defending it against people who complicated things.`, [
o('Report the median, range and sample size together.', { prep: 2, stats: { Intelligence: 3 }, flags: { learnedMedian: true }, gradeDelta: { quizzes: 4 } }, `Four minutes described the center; two to thirty-one described the spread; five described how little evidence they had. The answer was longer than nine. It also allowed a reader to notice a problem that the average alone had smoothed away.`),
o('Ask Sofia how to investigate the long delay without deleting it.', { rel: { Sofia: 2 }, prep: 2, flags: { learnedMedian: true, fairRivalry: true } }, `Sofia proposed checking the original record and then separating service types only if the distinction was documented. “A strange value is a question before it's an error.” Jonah wrote the sentence in his own notes, attributing it because it was memorable enough to borrow carefully.`),
o('Explain the difference to Ben using their bus journeys.', { rel: { Ben: 2 }, stats: { Charisma: 2 }, prep: 2, flags: { learnedMedian: true, helpsByExplaining: true } }, `Ben understood as soon as Jonah described four ordinary journeys and one broken-down bus. Then he asked whether the bad journey still mattered. Jonah kept it in the range. Teaching the example forced him to preserve the inconvenient part instead of simplifying the truth away.`),
o('Report only the mean to keep the answer concise.', { flags: { summaryGap: true }, gradeDelta: { quizzes: -2 } }, `Hart's comment asked what a typical visitor should expect and what the service should investigate. Nine minutes answered neither question especially well on its own. Jonah could calculate the mean correctly; he still needed to learn when another summary belonged beside it.`)
]),
s('w0305', 'A meeting can end', 'Library doorway', `At four fifty-eight Maya began packing. Jonah had one more question. It was genuinely useful, and he could also see how useful questions might stretch a meeting indefinitely if nobody ever allowed the last one to remain unanswered.

Maya: Write it down before you lose the wording.

Jonah: I thought we might just—

Maya: I know. Tuesday ends at five.

Through the glass, her lab partner was waiting with a poster tube. The person waved, then returned to reading. Jonah had enough information to understand that Maya's next appointment was real without knowing anything about it. A boundary was arriving at the exact moment when respecting it cost him something.`, [
o('Write the question down and stop on time.', { rel: { Maya: 3 }, flags: { mentorBoundariesRespected: true }, prep: 1 }, `Maya glanced at the written question. “Good one. Start there next time.” She left without hurrying her goodbye. Jonah stayed to test the first step alone. Respecting the end of a meeting had made the next one easier to imagine for both of them.`),
o('Ask whether the question belongs at Hart’s office hours instead.', { rel: { Maya: 2, Hart: 1 }, flags: { mentorBoundariesRespected: true, diversifiedSupport: true }, prep: 2 }, `“Yes, especially the grading part,” Maya said. Jonah had been treating the most approachable person as the right destination for every problem. Hart's office hours existed for a reason. He put the question there and let Maya leave.`),
o('Thank her and use a peer group for the unresolved step.', { rel: { Maya: 2, Ben: 1 }, prep: 2, flags: { mentorBoundariesRespected: true, studyCircle: true } }, `Ben didn't know the answer either, but Priya recognized the relevant example. They worked it through before her bus. Jonah sent Maya a brief note afterward: solved, explanation attached, no reply needed. The note contained evidence that help could produce independence.`),
o('Keep talking after she has said she needs to leave.', { rel: { Maya: -4 }, flags: { mentorBoundariesRespected: false, missedBoundary: true } }, `Maya interrupted him. “We agreed about this.” Her lab partner looked up, then away. Jonah stopped, but the next session would begin with a practical question about whether the arrangement still worked. A useful academic question had not given him priority over her time.`)
]),
s('w0306', 'The record of a week', 'Apartment table', `The improvement plan asked for a brief weekly record. Jonah considered writing “studied more,” then realized it would tell Hart almost nothing. He could name a denominator, a median, a weak claim, a meeting that had begun and ended. Some parts of the week showed progress; others showed habits that had merely acquired better explanations.

The key lay beside the page, blue mark upward. His parents had sent a photograph of their kitchen after repainting one wall. The room in the photograph was familiar but not frozen. Life was changing there without him, just as it was changing here without becoming easy.

He had to decide what kind of record he wanted to carry into the next week. The form would not reward elegant remorse. It needed evidence of work and a next action.`, [
o('Record the specific concepts learned and the gaps that remain.', { prep: 2, rel: { Hart: 1 }, flags: { improvementRecord: true }, gradeDelta: { quizzes: 2 } }, `He wrote what he could now explain, then attempted an example without notes. One answer held; one failed at the second step. The record contained both. Hart's reply the following morning was short: “Bring the failed attempt. It tells us where to work.”`),
o('Include a boundary mistake and a practical correction, if needed.', { rel: { Maya: 1 }, flags: { improvementRecord: true, boundaryRepairPlanned: true } }, `Jonah scheduled a reminder five minutes before the next meeting ended and wrote his questions in priority order. He didn't send Maya a long account of his guilt. A shorter, workable session would provide better evidence than a request for reassurance.`),
o('Send his parents a plain update including the early warning.', { flags: { parentHonesty: 4, improvementRecord: true }, stats: { Charisma: 2 }, stress: -3 }, `The call went quiet when he said “warning.” Dad asked what happened next, and Jonah could answer with actual dates. Mum wanted to know whether he was eating. Neither question solved the grade. Both made it harder for the warning to become a private catastrophe.`),
o('Write that things are improving without attaching any examples.', { flags: { vagueProgress: true }, stress: -1 }, `The sentence was not entirely false, which made it easy to submit. Hart asked for an example before their next review. Jonah closed the message without answering immediately. The opportunity to become specific remained open, but the form had not mistaken confidence for evidence.`)
])
]);
