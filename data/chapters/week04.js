import { chapter, scene as s, option as o, variant as v, flag as f } from '../helpers.js';
export default chapter(4, 'An Agreement', [
s('w0401', 'The revised arrangement', 'Library study room two', `Maya arrived with two copies of a practice sheet and a different proposal for how the meeting should run. Jonah would explain his attempt first. She would ask questions before supplying an example. The last five minutes would belong to his summary, not a rush to cover one more topic.

Maya: I don't want you leaving with an answer you can recognize only while I'm sitting beside it.

Jonah: That's a very specific problem.

Maya: It's a very common problem.

She asked whether the arrangement still worked for him. It was a real question. He could request a smaller commitment or a different format without insulting her effort. He could also admit that the previous week had exposed a problem in how he was using the help. Outside the room, another group was negotiating who had actually reserved the table. Inside, they had a chance to be clearer.`, [
o('Accept the explain-first method and protect the finishing time.', { prep: 2, rel: { Maya: 3 }, flags: { mentorBoundariesRespected: true, independentAttempt: true } }, `Jonah set his own reminder for the last five minutes. Maya didn't thank him for meeting a basic agreement; she opened the practice sheet and began. The ordinary quality of her response was reassuring. A boundary could become routine instead of a recurring crisis.`),
o('Ask for one meeting and more written practice between sessions.', { prep: 3, rel: { Maya: 1 }, flags: { mentorBoundariesRespected: true, independentPlan: true } }, `They cut the schedule without treating it as a failed friendship. Maya marked which problems would test the same idea in a different form. Jonah would bring the attempts next week. Less contact meant more responsibility on his side, not less access to learning.`),
o('Acknowledge an earlier overstep and show the changed schedule.', { rel: { Maya: 3 }, flags: { mentorBoundariesRespected: true, apologizedWithAction: true } }, `“I kept asking after the end time,” Jonah said. “I've put the questions in order so I don't do that again.” Maya accepted the practical change without promising instant closeness. An apology could start a repair; keeping the next appointment would continue it.`),
o('Keep the meeting but resist explaining unfinished work aloud.', { prep: 1, rel: { Maya: -2 }, flags: { avoidedPractice: true } }, `Maya let him choose a less exposed format: write the steps, then point to the uncertain one. When he resisted that too, she stopped filling the silence with instruction. The meeting remained available, but it could not supply the part of learning that required an attempt.`)
], { variants: [v(f('missedBoundary'), `The end-time reminder addressed something that had actually happened. Maya checked the clock once when they began, a small sign that trust in the arrangement needed evidence.`),v(f('independentAttempt'), `The latest sheet contained his own crossed-out reasoning. It gave them somewhere more useful to begin than an empty page.`),v(f('flexibleTutorial'), `The shorter Thursday meeting had helped Maya attend her family commitment. She remembered the flexibility without pretending Jonah now owed himself less study time.`)] }),
s('w0402', 'Four notes, one argument', 'Library study table', `The notes concerned an evening help-desk trial. Some belonged in the argument, some belonged in a different study, and some were simply interesting things someone had said. Maya spread them out without arranging them.

Maya: A paragraph isn't a storage cupboard.

Jonah: Mine has been doing a lot of storage.

Maya: Mine too, before I delete half of it.

The supported argument needed a claim, evidence, a limitation and a proportionate proposal. It did not need a decorative anecdote or a sweeping accusation. Jonah would choose the relevant notes and put them in an order a reader could follow. Maya moved her chair back slightly. The change gave him the table without making a ceremony of independence.`, [
o('Explain the sequence in his own words.', { prep: 2, rel: { Maya: 2 }, stats: { Intelligence: 2 }, flags: { explainedArgument: true, learnedPilot: true } }, `He began with the access problem, described the interviews, named the sampling limit and proposed a trial small enough to evaluate. Maya asked what result would make him change the proposal. Jonah added a review date. The argument had become stronger by admitting it could be revised.`),
o('Keep the corrected sequence as a study note and try a second example alone.', { prep: 3, flags: { synthesisPractice: true, learnedPilot: true }, stats: { Intelligence: 1 } }, `His second example concerned bus stops rather than help desks. One note didn't fit as neatly as he expected. He wrote why instead of forcing it into the sequence. The pattern was useful precisely because it did not remove the need to think about the evidence.`)
], { minigame: 'synthesis' }),
s('w0403', 'Her own question', 'Research poster corridor', `Maya's poster had acquired a narrow strip of feedback notes along its lower edge. Jonah recognized one of Hart's questions about recruitment. Maya was reading it with the focused irritation of someone who knew a comment was useful and wished it had arrived yesterday.

Jonah: Is that the commuter project?

Maya: The beginning of it. I want to study access to support, but the people with the least spare time are also the hardest to interview.

Jonah: Could you ask at the bus stop?

Maya: Maybe. Then I need a way for someone to decline without missing their bus.

Her question had no tidy classroom answer. Recruitment was not just a route to enough participants; it shaped whose time the project used and whose absence it ignored. She had a meeting with her lab partner in ten minutes, but for now she seemed willing to think aloud.`, [
o('Ask what kind of recruitment would respect people’s time.', { rel: { Maya: 3 }, prep: 1, flags: { listenedToMaya: true, mayaResearchKnown: true } }, `Maya described short interviews booked around actual travel schedules, with a clear option to leave. Jonah mentioned the evening pantry slot Nia had explained. She wrote down the possibility to investigate, not a plan Jonah had solved for her. His attention had become useful without becoming authority.`),
o('Offer to test the invitation for clarity, if she wants feedback.', { rel: { Maya: 2 }, stats: { Charisma: 2 }, flags: { reciprocalHelp: true, listenedToMaya: true } }, `She accepted one reading. Jonah found a sentence that sounded compulsory even though the study was voluntary. Maya changed it and credited the observation. It was a small contribution, but it shifted their conversation away from the assumption that only one of them could help the other.`),
o('Tell her the project sounds impressive and leave her to the meeting.', { rel: { Maya: 1 }, flags: { respectedMayaWork: true } }, `Maya thanked him and returned to the feedback strip. Jonah didn't prolong the compliment until she had to reassure him about it. He had noticed something that mattered to her, and he had also noticed the appointment approaching. Both were forms of attention.`),
o('Suggest she make the study about his own difficulties instead.', { rel: { Maya: -2 }, flags: { centeredOwnProblem: true } }, `“Your experience matters,” Maya said, “but it isn't the whole research question.” Jonah heard how quickly he had moved from listening to recruiting her work for his story. Her lab partner arrived, and the conversation ended before he could turn the correction into a debate.`)
]),
s('w0404', 'The question he answers', 'Writing seminar', `Hart asked why missing responses should not be entered as zero. The question arrived without warning, and Jonah felt his thoughts briefly arrange themselves around the possibility of embarrassment rather than the problem.

A blank cost entry did not establish that an activity had cost nothing. It established that the value was unknown. An average calculated from recorded costs needed its own denominator and a note about the missing responses. He had seen all the pieces. Now he had to put them together while other people could hear.

Ben was looking down at his notebook, not at Jonah. Sofia's pen hovered above the page. Maya sat two rows away and did not mouth the answer. That, too, was part of their agreement.`, [
o('Explain the difference between zero and unknown, even slowly.', { stats: { Intelligence: 3, Charisma: 2 }, rel: { Hart: 2 }, gradeDelta: { quizzes: 5 }, flags: { answeredOwnQuestion: true, learnedMissing: true } }, `Jonah stopped once to correct the denominator. Hart waited. When he finished, she asked the class to record the missing count alongside the estimate. His answer had not been smooth, but it had survived being explained. Maya gave him a brief nod and kept taking notes.`),
o('Ask to work through a concrete example at the board.', { stats: { Intelligence: 2 }, prep: 2, gradeDelta: { quizzes: 4 }, flags: { answeredOwnQuestion: true, learnedMissing: true } }, `He wrote three known costs and two blanks. Counting the blanks as zero lowered the mean without evidence. The board made the mistake visible. Hart said an example could be a rigorous explanation when its relationship to the general problem was clear.`),
o('State the principle, then invite a correction if he has missed something.', { stats: { Charisma: 3 }, rel: { Sofia: 1 }, gradeDelta: { quizzes: 3 }, flags: { answeredOwnQuestion: true, learnedMissing: true } }, `Sofia added that missingness itself might follow a pattern. Jonah thanked her and preserved the original distinction. Accepting an addition didn't make his answer vanish. The class now had a more complete explanation than either of them had supplied alone.`),
o('Say he needs another minute and write an answer after class.', { prep: 1, flags: { delayedAnswer: true, learnedMissing: true } }, `Hart moved to another student. Jonah wrote the example in the margin and brought it forward afterward. He lost the chance to practice speaking, not the right to learn the concept. Hart asked him to attempt an earlier start next time, before anxiety had an entire minute to organize itself.`)
]),
s('w0405', 'A small invitation', 'Campus courtyard', `The courtyard benches had dried unevenly after rain. Maya checked one with the back of her hand before sitting. She had twelve minutes before a lab meeting; Jonah had a packed meal and no urgent reason to cross campus yet.

Maya: Is that the argument we made about reasonable samples, but in sandwich form?

Jonah: One sandwich cannot represent all lunches.

Maya: Good. The training is taking.

The joke was small enough that neither of them had to decide what it meant. Around them, students crossed the courtyard carrying instruments, folders and one enormous piece of foam board. Maya spoke about her sister's debate club and its ambitious definition of “brief remarks.” Jonah had an opportunity to be a person she ate lunch with, not merely someone whose quiz she had helped repair.`, [
o('Stay for the twelve minutes and ask about her sister’s debate.', { rel: { Maya: 3, affection: 1 }, stats: { Happiness: 3 }, flags: { lunchTogether: true, listenedToMaya: true } }, `The debate concerned whether the school should replace a patch of lawn with gardens. Maya's sister had prepared a speech longer than the gardening season. Jonah laughed, and Maya looked pleased by something that had nothing to do with his grades. When the twelve minutes ended, they both stood.`),
o('Invite Ben to join them as he crosses the courtyard.', { rel: { Ben: 2, Maya: 1 }, stats: { Happiness: 3 }, flags: { quietFriendship: true, peerCircle: true } }, `Ben arrived with an orange and a story about losing an argument to a vending machine. The three of them discussed the unreasonable authority of machines that accepted money. Maya left for her lab on time; Jonah and Ben walked toward seminar together.`),
o('Share a little about home without asking her to reassure him.', { rel: { Maya: 2, affection: 1 }, flags: { sharedFamilyPressure: true, personalConversation: true } }, `He described the tuition receipt and his father's habit of folding paper. Maya said her family celebrated every achievement by immediately asking about the next one. Neither family became a villain in the telling. The conversation made room for affection and pressure to exist together.`),
o('Thank her for the joke and use the remaining time for himself.', { energy: 4, stats: { Happiness: 2 }, flags: { quietFriendship: true } }, `Jonah sat on the next bench with his meal. It was possible to enjoy an acquaintance without extending every encounter. Maya waved when she left. The courtyard remained pleasant after she was gone, which felt like something he should learn to notice.`)
]),
s('w0406', 'A month is not a semester', 'Advising office', `Evans compared the current work with Jonah's first folder. He noticed methods before totals: fewer unsupported claims, or the same gaps appearing under different wording; attempts brought to meetings, or promises that still lacked a page attached.

Evans: The first month isn't a verdict. It's evidence about what happens when you use a particular routine.

Jonah: And if the routine still isn't enough?

Evans: Change it while there's time to observe the result.

The next month would include rent, the group project and the midterm. Academic and practical schedules were about to collide more directly. Evans asked Jonah to choose one adjustment he could actually defend when the week became inconvenient. The question was not which kind of student he wished to be. It was what he would do on a tired Tuesday.`, [
o('Protect three practice blocks and reduce optional commitments.', { prep: 3, energy: 2, flags: { protectedStudy: true }, stats: { Intelligence: 2 } }, `Jonah crossed out an activity he liked rather than pretending the time would appear elsewhere. Evans asked what would replace it; Jonah named two practice problems and a review of feedback. The plan was modest enough to measure and costly enough to be real.`),
o('Use the aid appointment to protect food and rent without extra shifts.', { flags: { aidAppointment: true, helpSeeking: true }, stress: -3 }, `Evans confirmed the appointment and reminded him that applying wasn't the same as receiving an award. Jonah gathered the lease and work estimate. Practical support could make academic effort possible, but it would require paperwork, attendance and a bridge until a decision arrived.`),
o('Coordinate a peer study hour that ends before Priya’s bus.', { prep: 2, rel: { Ben: 2, Sofia: 1 }, flags: { studyCircle: true, socialSupport: true } }, `Sofia agreed on the condition that everyone brought an attempt, not just a request to be taught. Priya supplied the end time. The resulting hour had a shape and a purpose. Jonah would be expected to contribute, which made belonging feel less like a favor.`),
o('Keep the schedule unchanged and hope the next assessments suit him.', { flags: { ignoredFirstReview: true }, stress: 2 }, `Evans recorded that no adjustment had been chosen. He did not argue Jonah into a promise he wouldn't keep. The next review remained on the calendar. Hope could accompany work, but on the form it could not occupy the space intended for a specific action.`)
])]);
