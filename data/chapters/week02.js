import { chapter, scene as s, option as o, variant as v, flag as f } from '../helpers.js';
export default chapter(2, 'First Red Mark', [
s('w0201', 'Fifty-four', 'Writing seminar', `The first assessed work returned in a plain folder: fifty-two on the quiz, fifty-six on the short written response. Across the completed components, his standing was fifty-four. Dr. Hart had circled a line in which Jonah moved from two examples to a claim about every student on campus.

Hart: You can identify useful evidence. You're asking it to do more than it can.

Jonah: I thought the conclusion had to be strong.

Hart: It has to be supported. Those are not always the same sentence.

Around him, chairs scraped and bags closed. The room emptied without consulting the number in his folder. Jonah waited for the private explanation that would make the grade stop counting: a marking error, a missed page, some sign that his work had been mistaken for someone else's. There was no such sign. There were comments, specific enough to be useful if he could bear to read them.`, [
o('Ask Hart to walk through two mistakes.', { prep: 3, rel: { Hart: 2 }, stats: { Intelligence: 2 }, flags: { officeHours: true, candidAboutGrades: true } }, `They examined one denominator and one unsupported conclusion. Hart didn't offer a new grade for asking. She offered two questions Jonah could use on the next piece: who is represented, and what does this evidence actually establish? He left late, carrying work rather than a pardon.`),
o('Tell Ben the result and ask to compare feedback.', { rel: { Ben: 3 }, prep: 1, flags: { peerHelp: true, candidAboutGrades: true } }, `Ben turned his own paper over. Sixty-seven. “I was going to imply it was higher,” he admitted. They found different mistakes and one shared one. Neither could tutor the other perfectly, but the papers became discussable objects instead of evidence that one of them didn't belong.`),
o('Go to the café work board before the available shift disappears.', { cash: 48, energy: -6, flags: { earlyShift: true, workHeavy: true } }, `Luca Ortiz needed someone for a short induction shift. He paid for the hours and explained the rota carefully. Jonah's folder stayed under his jacket until closing. The shift solved a small money problem and consumed the time he might have spent understanding the grade; both things were true.`),
o('Hide the folder and go back to the apartment.', { stats: { Happiness: -2 }, flags: { hidFirstGrade: true, avoidancePattern: true } }, `At home he put the folder below the lease. The table looked orderly. He spent the next hour imagining conversations in which someone asked about the grade and he had a better answer. The comments remained readable whenever he chose to take the folder out again.`)
], { entryEffects: { grades: { quizzes: 54, assignments: 54 } }, variants: [v(f('learnedRates'), `The fraction on the quiz wasn't the one from class. Jonah had understood the example, but had not yet learned how to recognize its structure in a new problem.`), v(f('copiedWithoutReasoning'), `The red circle enclosed precisely the step his copied notes had skipped. The missing explanation had become a missing method.`), v(f('firstSummary'), `One paragraph received a small approving tick. Careful summarizing had helped; the weakness lay in the conclusion he built on top of it.`)] }),
s('w0202', 'The available hour', 'Library stairs', `Ben was sitting on the lower stairs because the library's group rooms were full. He made space without asking Jonah to explain why he looked tired. Upstairs someone was arguing with a printer in an extremely polite voice.

Ben: There's a board-game thing Friday. Free. Mostly people pretending they understand rules.

Jonah: I'm already doing that academically.

Ben: Transferable skill.

He also had a study-group invitation from Priya. It overlapped the event, and both overlapped the café's optional induction review. Jonah could attend one. The existence of friendly invitations did not create additional Friday hours. For once he had to disappoint a possibility rather than another person.`, [
o('Study with Priya and ask Ben to join.', { prep: 3, rel: { Ben: 1 }, flags: { metPriya: true, studyCircle: true } }, `Priya insisted they stop at six because her bus wasn't hypothetical. The deadline made them choose three questions instead of vaguely promising to study everything. Ben stayed for two. Jonah walked home knowing why sample size and sample coverage were different problems.`),
o('Go to the free game night and leave at an agreed time.', { stats: { Happiness: 4, Charisma: 2 }, rel: { Ben: 2 }, flags: { metEllis: true, socialSupport: true } }, `Ellis Morgan explained the game through one practice round, then admitted that he had explained a rule backward. His willingness to correct himself made the room easier to enter. Jonah left when he had said he would, carrying an invitation to the volunteer event Ellis helped organize.`),
o('Review the café induction and secure predictable short shifts.', { flags: { regularWork: true, workBalanced: true }, cash: 24, energy: -2 }, `Luca showed him how to read the rota and where to record unavailable hours. “If you say you're free every night, I'll believe you.” Jonah marked two evenings and kept Friday afternoons clear. The limited availability earned less, but it was an agreement he could keep.`),
o('Decline both invitations and rest before studying alone.', { energy: 6, prep: 1, flags: { solitaryRecovery: true } }, `He wrote a specific problem on the table before lying down. When he woke, the question was waiting without the weight of an entire imagined evening. Ben answered his decline with a simple “Another time.” Jonah saved the message instead of searching it for concealed annoyance.`)
]),
s('w0203', 'What counts as evidence', 'Research methods lab', `Amir arranged twelve index cards in a row. Each card represented an interview with someone who had used the library after ten. Their task was to advise whether the opening hours met students' needs.

Amir: The people who couldn't come late aren't here to complain.

Sofia: Exactly. Twelve vivid accounts aren't twelve tickets to a campus-wide conclusion.

Jonah: So what are we allowed to say?

Sofia: Something smaller. It can still matter.

The exercise asked for a claim, evidence, a limitation and a proposed next step. Jonah could feel the old temptation: a broad confident sentence looked more finished than a narrow careful one. On the wall was a timetable showing when the lab closed. Beyond the window, commuters were already hurrying toward the bus stops.`, [
o('Write a bounded claim and propose interviews with commuters.', { prep: 2, stats: { Intelligence: 3 }, flags: { learnedSampling: true } }, `The claim described late-night users rather than all students. The next step deliberately sought people excluded by the first sample. Hart wrote “method follows question” beside it. Jonah didn't receive a triumphant speech, just a phrase he could use to recognize what he had done right.`),
o('Ask Amir to challenge the draft before submitting it.', { prep: 2, stats: { Charisma: 2 }, flags: { learnedSampling: true, amirAlly: true } }, `Amir read the first sentence aloud and stopped at “everyone.” Jonah heard the unsupported leap before Amir explained it. They revised their own drafts separately after exchanging questions. Collaboration changed the quality of the thinking without blurring whose words belonged to whom.`),
o('Argue that a vivid account is enough to recommend a small trial.', { rel: { Sofia: 1 }, prep: 2, flags: { learnedPilot: true } }, `Sofia asked how small and how reversible. Jonah proposed one evening session, with attendance recorded and staff consulted. She nodded only after he specified what would count as failure. They still disagreed about the evidence's strength, but the recommendation now matched its limits.`),
o('Keep the stronger claim because uncertainty sounds weak.', { flags: { overclaimPattern: true }, gradeDelta: { assignments: -2 } }, `The marker underlined “all students” and wrote a question mark. Jonah's argument had gained confidence by spending evidence it didn't possess. The feedback did not say to abandon the issue. It asked him to distinguish the seriousness of a problem from the certainty of his measurement.`)
]),
s('w0204', 'The shirt on the chair', 'The apartment', `The chair had become a place where clothes waited for Jonah to make decisions about them. He needed the chair for work, the clothes for tomorrow, and a meal before either task became easier. His phone displayed a reminder for the seminar response due at noon.

There was no dramatic crisis. That was part of the difficulty. A dozen ordinary tasks could defeat a person without any one of them appearing important enough to ask for help with. Jonah opened the response and found that his first paragraph sounded like someone trying to impress an imagined professor rather than explain a real idea.

The prompt required a distinction between correlation and cause. Workshop attendees had higher grades, but they had chosen to attend. Motivation, prior preparation and available time might matter too. He understood the sentence when he read it. He needed to demonstrate it in his own words.`, [
o('Rewrite the claim, then stop in time for laundry and sleep.', { prep: 2, energy: 3, stats: { Looks: 3 }, gradeDelta: { assignments: 5 }, flags: { learnedCausation: true, timelyDraft: true } }, `He replaced “the workshop improved grades” with “attendance was associated with higher grades.” The second sentence named self-selection. The prose was less grand and more accurate. He submitted it, washed the shirt and slept without pretending all his gaps had disappeared.`),
o('Send Hart one precise question before revising.', { prep: 2, rel: { Hart: 1 }, gradeDelta: { assignments: 4 }, flags: { learnedCausation: true, askedSpecificQuestion: true } }, `Hart's reply arrived during office hours the next morning: “What alternative explanation would your design need to rule out?” Jonah added motivation and prior knowledge, then proposed a comparison with baseline measures. Asking the question hadn't replaced his work. It had shown him where the work belonged.`),
o('Ask Ben to read for clarity, and return the favor.', { prep: 1, rel: { Ben: 2 }, gradeDelta: { assignments: 3 }, stats: { Charisma: 1 }, flags: { learnedCausation: true } }, `Ben could follow the idea until the third sentence, which contained four clauses and no subject either of them could identify. Jonah shortened it. Reading Ben's draft afterward, he recognized a different version of the same mistake. They laughed without turning either paper into a joke.`),
o('Submit the first draft late after trying to perfect every phrase.', { energy: -5, gradeDelta: { assignments: -4 }, flags: { missedDeadline: true } }, `He spent an hour replacing “shows” with “demonstrates” and failed to fix what the sentence claimed. By the time he submitted, the late marker had appeared. The task had looked like a writing problem; it had also been a problem of deciding what mattered before time ran out.`)
]),
s('w0205', 'An official subject line', 'Advising corridor', `The early-warning message used Jonah's full name and a subject line with no room for misunderstanding. His current average was below the conditional-placement standard. The message listed the recovery process and a meeting time, with an option to reschedule within the week.

Dr. Evans's door was open. Inside, he was arranging three folders rather than a stack large enough to make Jonah feel processed.

Evans: This is a warning, not a dismissal decision. We need a plan based on what has actually happened.

Jonah: What if the answer is that I haven't done enough?

Evans: Then we describe “enough” in actions you can perform. Shame isn't a timetable.

Hart had suggested guided peer study. It would be optional, with clear limits, and the mentor had already agreed to participate if Jonah wanted it. Before that offer became a meeting, Evans wanted Jonah's account.`, [
o('Describe preparation gaps and the practical difficulty of living alone.', { rel: { Hart: 2 }, flags: { warningAcknowledged: true, candidAboutGrades: true, helpSeeking: true }, stress: -3 }, `Evans separated the problems on the page: methods, scheduling, food, isolation. None disappeared when named. They stopped masquerading as one enormous personal defect. He explained the revision window in Week Eleven and the final recovery review in Week Fourteen, then asked Jonah to keep the appointments.`),
o('Bring his own schedule and ask for a narrow academic checklist.', { prep: 3, flags: { warningAcknowledged: true, independentPlan: true } }, `Evans marked the difference between reading time and practice time. Jonah's schedule contained plenty of the former and almost none of the latter. They added two worked-problem sessions, a submission check and an optional tutorial. The plan still belonged to Jonah; now it addressed the work being assessed.`),
o('Explain the work conflict and request practical flexibility.', { flags: { warningAcknowledged: true, workDisclosed: true }, stats: { Charisma: 2 } }, `Evans could not remove assessments because Jonah needed income. He could document the conflict, arrange an alternate midterm sitting if necessary, and connect him with aid advice. The distinction mattered. Flexibility would change the route through the requirements, not secretly erase them.`),
o('Say the tests are unfair without bringing a specific example.', { rel: { Hart: -1 }, flags: { warningAcknowledged: true, defensivePlan: true }, stress: 2 }, `Evans asked Jonah to bring one disputed question to Hart. He neither endorsed the accusation nor treated frustration as misconduct. The warning remained active. Jonah left with a date, a task and the uncomfortable possibility that evidence would be required for complaints as well as essays.`)
]),
s('w0206', 'Before the meeting', 'Print station', `The printer delivered Jonah's marked work one sheet at a time. He had decided to bring it to the peer-study meeting because hiding the pages would make the conversation difficult before it began. Bringing them did not yet decide how honestly he would discuss them.

A student beside him retrieved a lab poster with unusually neat diagrams. She checked the margin, frowned at one label and sent a corrected version. Jonah recognized her from Hart's class but didn't know her name.

Maya: Is the stapler yours?

Jonah: No. I was hoping it belonged to the institution.

Maya: Then we're both about to discover its maintenance policy.

It worked on the second attempt. She thanked him for holding the pages and left with the poster. Her own work had apparently required a correction too. The observation was small, but it disturbed Jonah's picture of the people who seemed to arrive already knowing how college worked.`, [
o('Mark the exact questions he wants to understand.', { prep: 2, flags: { tutorialQuestions: true } }, `He wrote three questions in the margin and crossed out a fourth that was really “Am I good enough?” The three remaining questions could receive useful answers. The larger one would have to be answered through a semester, not extracted from a stranger over a stapled quiz.`),
o('Prepare an account of the week, including the hours he wasted.', { flags: { readyForCandor: true }, stats: { Charisma: 2 } }, `He included the shift if there had been one, the household tasks, and the evenings that had dissolved into nothing he could name. The honest account looked neither heroic nor hopeless. It looked like a week someone might help him reorganize.`),
o('Plan to ask how the mentor manages her own workload.', { flags: { curiousAboutMaya: true }, stats: { Charisma: 1, Happiness: 1 } }, `The poster had carried three names. Whoever she was, she had work and collaborators beyond his difficulty. Jonah wrote “Ask what time actually works for her” above his academic questions. It seemed a reasonable place to begin meeting another person.`),
o('Decide to request written guidance rather than regular meetings.', { prep: 1, flags: { checklistPreference: true, independentPlan: true } }, `He could accept the mentor's knowledge without accepting a schedule he wasn't sure he could maintain. The distinction helped. He would ask for a checklist and a way to bring specific questions later, leaving room to revise the arrangement if working alone proved insufficient.`)
])
]);
