import { chapter, scene as s, option as o, variant as v, flag as f } from '../helpers.js';
export default chapter(11, 'Revision', [
s('w1101', 'The first draft survives', 'Writing seminar', `Hart asked Jonah to bring the first draft as well as the latest version. He had wanted to arrive with only the improved work, as if the earlier page might contaminate it by remaining visible.

Hart: A revision is a claim about what changed. Keep the evidence.

Jonah: Some of the evidence is embarrassing.

Hart: Most first drafts are not written for their future public relations.

The original paragraph confused interview accounts with a campus-wide measure. The conclusion introduced an unsupported cost estimate. The citation pointed toward a source without establishing whether its use matched the participant's consent. These were different problems, not one general shortage of sophistication.

The revision window was part of the documented recovery process. A sound new submission could replace the earlier assignment result. It would require actual changes to reasoning, attribution and structure, rather than a more impressive vocabulary laid over the same mistakes.`, [
o('Sort the feedback into reasoning, evidence, structure and attribution.', { prep: 3, flags: { targetedRevision: true }, stats: { Intelligence: 2 } }, `The categories made the task larger for a moment because each problem became visible. Then they made it manageable. Jonah could revise a claim, check a source and move an explanation; “be better at writing” had never told him where to put the next sentence.`),
o('Ask Hart which weakness most limits the argument.', { rel: { Hart: 2 }, prep: 2, flags: { targetedRevision: true, officeHours: true } }, `Hart pointed to the claim about all students. Until its scope changed, the later paragraphs were defending something the evidence couldn't support. Jonah revised the first sentence before polishing the last one. The order of work mattered as much as the amount.`),
o('Exchange questions with Sofia while keeping authorship separate.', { rel: { Sofia: 2 }, prep: 2, flags: { targetedRevision: true, fairRivalry: true } }, `Sofia asked where a skeptical reader would stop believing the argument. Jonah asked whether her cost estimate needed a clearer assumption. They recorded the peer feedback and revised their own prose. Rivalry had become useful because it no longer required either person to remain unimproved.`),
o('Focus on making the draft sound more academic.', { prep: 1, flags: { surfaceRevision: true } }, `He replaced short words with longer ones until the paragraph became harder to read without becoming easier to defend. Hart's margin question remained unchanged: what does the evidence establish? Jonah still had the workshop ahead of him, where the distinction would need an answer.`)
], { variants: [v(f('recoveryPlan'),`The revision appointment had been in his calendar since the midterm review. He arrived with the failed attempts Evans had asked him to keep.`),v(f('deferredRecovery'),`Waiting for the final had left less practice behind him, but this revision window was still open. Taking it seriously now would be a change of course rather than an admission that change was too late.`),v(f('laterCreditKept'),`The assistance note was already accurate. One part of the task had become ordinary through repetition, leaving more attention for the argument itself.`)] }),
s('w1102', 'The workshop', 'Writing lab', `The workshop presented four passages from a student draft like Jonah's. Each needed a different kind of correction: a bounded claim, legitimate attribution, a supported conclusion, and a serious response to a counterargument.

Hart: Improvement is not always adding. Sometimes it is removing a certainty you didn't earn.

Jonah read the first sentence and recognized how it had been assembled: urgency, confidence, a vague subject called everyone. He had written sentences like it. He also knew more now about why they failed.

There was no time limit. He could compare the alternatives and consult his notes. The submitted answers would determine the revised assignment result through the same transparent scoring used elsewhere. The opportunity was real, and so was the work required to use it.`, [
o('Submit the revision record and keep both versions.', { flags: { revisionComplete: true, improvementRecord: true }, rel: { Hart: 2 } }, `The new draft did not erase the old one. Placed together, they showed which decisions had changed: a smaller claim, a traceable source, an earlier explanation of cost, a counterargument allowed to improve the proposal. Hart could now evaluate progress without relying on Jonah's description of it.`),
o('Write a short explanation of the correction he found hardest.', { flags: { revisionComplete: true, reflectiveRevision: true }, prep: 2, stats: { Intelligence: 1 } }, `Jonah chose the correction that had initially looked least impressive. Explaining why it worked revealed how much he had once confused forceful wording with a strong argument. The note would be useful before the final because it recorded a method, not just the right option.`)
], { minigame: 'revision' }),
s('w1103', 'A sentence he can defend', 'Seminar roundtable', `Hart asked for volunteers to read one revised sentence and explain the change. Jonah recognized the old sensation of wanting to be ready in private before becoming visible in public. He also recognized that public explanation was one of the things he needed practice doing, not a prize reserved for after he had become perfect.

Sofia read a qualification she had added to her cost estimate. Ben described a paragraph he had shortened so the actual claim could be found. The room contained capable people discussing errors without treating the errors as secret evidence against their right to attend.

Jonah had a sentence. He could also ask a question, or choose a smaller format in which to practice the explanation.`, [
o('Read the sentence and explain why its narrower claim is stronger.', { stats: { Charisma: 3, Intelligence: 2 }, rel: { Hart: 2 }, flags: { publicExplanation: true } }, `He described what the interviews supported and what they didn't measure. Someone asked whether the narrower claim weakened the proposal. Jonah explained the limited trial and its review criteria. His answer was not flawless, but it was his, and it connected ideas that had once lived in separate notes.`),
o('Present the change as a before-and-after example.', { stats: { Looks: 2, Charisma: 2 }, flags: { presentationStructure: true }, prep: 1 }, `He placed the sentences on separate lines and underlined the change in scope. The clear layout helped listeners see the reasoning before he explained it. Presentation mattered because it made the argument accessible, not because neatness could make an unsupported claim true.`),
o('Ask Sofia to challenge the revised claim with a counterexample.', { rel: { Sofia: 3 }, stats: { Intelligence: 2 }, flags: { fairRivalry: true } }, `Sofia proposed a commuter whose problem was transport rather than opening hours. Jonah adjusted the recommendation's scope instead of pretending the counterexample disproved every interview. Their disagreement improved the proposal while leaving both of them recognizable as its critics.`),
o('Practice the explanation privately with Hart after class.', { prep: 2, rel: { Hart: 1 }, flags: { quietAcademicGrowth: true } }, `Hart listened, asked one follow-up and suggested Jonah try a shorter public contribution next time. Private practice was legitimate, but it did not have to become a permanent hiding place. He left with a specific next step rather than a label about being the kind of person who couldn't speak.`)
]),
s('w1104', 'A different kind of neatness', 'Career center practice desk', `The career center offered a brief practice session for academic presentations: organize the materials, make the first slide readable, check the room and dress in something comfortable enough not to demand attention. No one asked Jonah to become more attractive. The task concerned whether he could arrive able to focus and help others follow the work.

A volunteer named Daniel Cho pointed to Jonah's cluttered slide. Daniel was another foundation student, precise about layout and happily untidy about his own handwriting.

Daniel: If the audience has to choose between reading and listening, you'll lose half the explanation.

Jonah: Which half?

Daniel: Whichever one they needed.

There were three practical ways to prepare and one tempting way to pretend preparation meant buying confidence.`, [
o('Reformat the slide and rehearse with his own ordinary clothes.', { stats: { Looks: 4 }, prep: 2, flags: { presentationPrepared: true, danielAlly: true } }, `Jonah increased the type, removed a redundant chart and checked that he could find the source note without searching. His shirt was clean, his shoes familiar, and his material easier to follow. The improvement came from reducing distractions, not purchasing a different person to present it.`),
o('Borrow a suitable jacket and spend the saved money on groceries.', { stats: { Looks: 3 }, food: 2, cash: -8, flags: { presentationPrepared: true, practicalRoute: true } }, `The center's clothing rail existed for interviews and formal presentations. Jonah borrowed a plain jacket and checked that it fit comfortably while sitting. He wrote down the return date. Useful support could include a hanger and a calendar reminder without becoming a judgment about his appearance.`),
o('Practice the opening with Daniel and accept precise feedback.', { stats: { Charisma: 3, Looks: 1 }, flags: { presentationPrepared: true, danielAlly: true }, prep: 2 }, `Daniel noticed that Jonah introduced the graph before stating the question it answered. They reversed the order. The room became easier to imagine when the opening no longer depended on a burst of confidence arriving at exactly the right moment.`),
o('Buy an expensive accessory and postpone the rehearsal.', { cash: -35, stats: { Looks: 1 }, flags: { presentationAvoidance: true } }, `The purchase was real and the rehearsal still hadn't happened. Jonah looked slightly more prepared while remaining uncertain about the first slide. The distinction would become visible as soon as somebody asked what the project actually proposed.`)
]),
s('w1105', 'Another person’s work', 'Research corridor', `Maya's revised recruitment plan was pinned beside Imani's notes. Several phrases had been changed, and a block of interviews had been removed from the proposed schedule. Jonah could see that reducing the project had required work rather than a simple loss of ambition.

Maya: I thought I was protecting the question by refusing to change anything around it.

Jonah: Was it working?

Maya: It was producing a very well-defended timetable nobody could use.

She smiled at the description, though not entirely happily. Jonah knew that feeling from his own plans. If their relationship had become cautious, he could keep the conversation respectful and brief. If trust had grown, there might be room to acknowledge what they had each learned without making one person's progress the explanation for the other's.`, [
o('Notice the specific revision and ask how she feels about it.', { rel: { Maya: 3, affection: 1 }, flags: { listenedToMaya: true, sawMayaEffort: true } }, `Maya said she was relieved and disappointed, sometimes within the same minute. Jonah didn't insist she choose the more positive answer. The revised plan protected the question she cared about, and it also required letting go of a version of herself who could accomplish everything on the first schedule.`),
o('Share his own before-and-after draft if she wants to see it.', { rel: { Maya: 2 }, flags: { reciprocalGrowth: true }, stats: { Happiness: 2 } }, `She read one paragraph and recognized a distinction they had practiced weeks earlier. “That connection is yours now,” she said. Jonah liked the sentence because it acknowledged her help without keeping the understanding permanently attached to her presence.`),
o('Congratulate the team and leave them time to finish.', { rel: { Maya: 1 }, flags: { respectedMayaWork: true, quietFriendship: true } }, `Imani thanked him on behalf of both authors. Jonah noticed the shared work and used both names. It was a small habit, and precisely the sort of habit that made a larger claim about respect believable.`),
o('Use her setback to argue that his own earlier mistakes were harmless.', { rel: { Maya: -4 }, flags: { trustRupture: true, comparedToExcuse: true } }, `Maya's expression closed. “My revision isn't an argument about what happened between us.” Jonah had taken a vulnerable account and tried to use it as evidence for his defense. She returned to the poster. The work on the wall was still worth respecting, whether or not it helped his case.`)
]),
s('w1106', 'The second warning, or its absence', 'Advising office', `The review letter now contained more completed work and fewer estimates. Evans explained which components could still change. The final and defense remained ahead. The required research submission had to be recorded. Any integrity review would have its own written finding and response process before the retention decision.

Evans: Improvement matters because it changes the record. It doesn't create a separate secret standard.

Jonah: So seventy still means seventy.

Evans: Yes. And required work still means required work. You deserve rules you can understand before the result arrives.

Jonah could use the remaining weeks in several legitimate ways. What he needed to avoid was treating the existence of recovery opportunities as if it were the same thing as having completed them.`, [
o('Verify each requirement and schedule the unfinished work.', { prep: 3, flags: { finalChecklist: true, improvementRecord: true }, stress: -2 }, `They checked the project, research, midterm and final separately. Jonah marked the upcoming dates and kept the earlier results visible. Knowing what remained made the semester look finite. It did not make the remaining work optional.`),
o('Build a peer preparation plan with room for everyone’s deadlines.', { prep: 3, flags: { socialSupport: true, finalStudyCircle: true }, rel: { Ben: 1, Sofia: 1 } }, `The group chose short sessions with specific topics and firm endings. Priya's travel, Ben's speaking practice and Sofia's scholarship deadline appeared on the same calendar. Jonah was becoming capable of helping make a plan that did not quietly spend other people's time.`),
o('Use independent worked examples and one targeted office-hour visit.', { prep: 4, flags: { independentPlan: true, finalChecklist: true }, stats: { Intelligence: 2 } }, `He selected examples with different wording from the notes and explained why each method applied. The office-hour visit would address the attempts that failed. Independence had become a way of taking responsibility for preparation, not a rule against consulting another person.`),
o('Assume the revised assignment has solved enough of the problem.', { flags: { prematureRelief: true }, prep: -1 }, `Evans asked him to check the weighted calculation before relying on that assumption. Jonah could see the numbers and still feel the appeal of stopping. Relief was understandable. Whether it became a pause or a new form of avoidance would depend on the next weeks.`)
])]);
