import { chapter, scene as s, option as o, variant as v, flag as f } from '../helpers.js';
export default chapter(6, 'Four Names on a Page', [
s('w0601', 'A project with other people in it', 'Group-study room', `Sofia had written the project question at the top of a large sheet: could a small evening help-desk pilot improve access without creating an unreasonable burden for staff? Beneath it were empty spaces for evidence, costs, limitations and responsibilities.

Sofia: We need decisions we can finish, not a meeting about how much we all care.

Ben: I can care on a strict timetable.

Priya: Good. My bus leaves at six twelve.

Jonah put his notebook beside theirs. Maya was advising a different group's methods section today; she had agreed to exchange a short peer critique later, not join every task Jonah found difficult. The four names on this page would carry the responsibility for this project.

They needed to collect evidence, analyze it, and present a defensible proposal. Assigning the jobs would reveal what they knew about one another—and what they had merely assumed from who spoke first.`, [
o('Start by asking each person about constraints and strengths.', { rel: { Ben: 2, Sofia: 2 }, flags: { listenedToTeam: true }, stats: { Charisma: 2 } }, `Priya needed an early handoff; Sofia wanted analysis; Ben could collect accounts but needed preparation to speak. Jonah named his own methods gaps without offering to disappear. The roles would be negotiated among actual people rather than assigned to the loudest versions of them.`),
o('Propose a contribution ledger and shared intermediate deadlines.', { prep: 2, rel: { Sofia: 2 }, flags: { contributionLedger: true, researchIntegrity: true } }, `Sofia drew a narrow column for who had done what and where the evidence lived. Ben called it bureaucracy until the first task acquired an owner and a realistic date. The record would protect credit later, including work that didn't appear in the final speaking order.`),
o('Offer to coordinate the presentation and learn from the others’ methods.', { stats: { Charisma: 3 }, flags: { projectCoordinator: true }, rel: { Ben: 1 } }, `Sofia accepted on the condition that coordination included checking sources, not just making slides attractive. Jonah agreed. The role would use his growing communication skills while requiring him to understand the evidence well enough to notice when the slides claimed too much.`),
o('Let Sofia assign everything because she seems most capable.', { rel: { Sofia: -1 }, flags: { passiveTeamMember: true } }, `Sofia asked Jonah to choose one task himself. She had not volunteered to carry the cognitive work of assigning everyone's labor. The silence was uncomfortable but useful. Being less prepared did not make him exempt from giving the team accurate information about what he could do.`)
], { variants: [v(f('studyCircle'), `Their previous study hour meant the group already knew how Priya's departure time worked. Nobody proposed “just another twenty minutes” as if it were a free resource.`),v(f('heavyWeek5'), `Jonah's café hours occupied two of the obvious meeting slots. Naming that early would be inconvenient; concealing it would be worse.`),v(f('fairRivalry'), `Sofia remembered that Jonah had asked how to investigate the outlier rather than delete it. She was willing to trust him with the source record if he wanted it.`)] }),
s('w0602', 'Who does what', 'Group-study room', `The project board had three responsibilities and four people. Not every contribution had to be a headline role, but no one should vanish behind the heading “miscellaneous.” Ben studied the presentation box as if it might become less threatening if he did not look directly at it.

Ben: I can do the opening if we actually rehearse it.

Priya: I can prepare the collection materials by Wednesday. Thursday afternoon is impossible.

Sofia: I'd like analysis. I'll show the working, including anything uncertain.

Jonah had to allocate distinct owners and choose how to resolve the main scheduling conflict. A fair agreement could use different arrangements. What mattered was whether it acknowledged the constraints people had named. They would receive a project grade for the resulting work, and the final defense would later improve or expose it.`, [
o('Read the agreement back and invite corrections before it becomes final.', { rel: { Sofia: 2, Ben: 1 }, flags: { teamAgreement: true } }, `Priya corrected the handoff time by half an hour. Ben asked where the rehearsal would happen. Sofia attached the analysis file location. The agreement became more precise through interruption. Jonah learned to recognize that kind of interruption as contribution rather than resistance.`),
o('Write the agreement into the shared project record.', { prep: 2, flags: { teamAgreement: true, contributionLedger: true } }, `He recorded roles, dates and the unresolved question about staff costs. A record was not proof that nobody would make a mistake. It gave them something more useful than memory to return to when the work changed.`)
], { minigame: 'team' }),
s('w0603', 'The inconvenient cell', 'Research lab', `The spreadsheet contained a count that did not match the interview log. Twelve had become twenty-one. It looked like a transposed pair of digits, but the larger number made the proposal seem better supported. The first slides had already been shared with the group.

Sofia: Which file did this come from?

Jonah knew. He had typed it from a paper note after work. Correcting it would mean admitting an error and revising the figure before rehearsal. Concealing it would preserve the appearance of readiness while placing a false number beneath everyone else's names.

Ben wasn't in the room yet. Priya had sent her materials early as promised. Their completed work made the temptation sharper: Jonah could imagine telling himself that the team deserved a smooth rehearsal more than it needed an awkward correction. The thought lasted just long enough to become a choice.`, [
o('Correct the number openly and update everyone who received the slide.', { rel: { Sofia: 3, Hart: 1 }, flags: { correctedGroupError: true, researchIntegrity: true }, prep: 1 }, `Sofia checked the source and helped revise the denominator. Ben replied “Thanks for catching it.” Priya asked that the old slide be marked obsolete. The correction took half an hour and spared them a much larger claim they couldn't defend. Nobody enjoyed the delay; everyone could use the truth.`),
o('Ask Sofia to audit the table with him before sending a correction.', { rel: { Sofia: 2 }, flags: { correctedGroupError: true, researchIntegrity: true, sharedAudit: true }, energy: -2 }, `They found the transposition and one missing label. The message to the group named both changes and Jonah's role in the error. Checking together improved the record without spreading responsibility so thinly that nobody owned the original mistake.`),
o('Hide the mismatch and hope the panel never asks.', { rel: { Sofia: -2 }, flags: { hidGroupError: true, researchIntegrity: false, integrityWarning: true }, stress: 3 }, `Jonah changed the source note instead of the slide. The new version looked consistent until someone compared it with the original log. He knew that comparison remained possible. For the first time, the project contained a deliberate falsehood rather than an ordinary mistake.`),
o('Tell the team the figure is uncertain and remove it until verified.', { flags: { cautiousEvidence: true, researchIntegrity: true }, rel: { Sofia: 1 }, gradeDelta: { project: -2 } }, `The recommendation became narrower without the count. Sofia wanted the figure restored after checking; Ben preferred the less crowded slide. Jonah recorded the omission and its reason. The immediate presentation lost some detail, but it would not ask an unsupported number to earn their grade.`)
]),
s('w0604', 'An opening sentence', 'Empty lecture hall', `Ben could explain the project in the corridor without losing a word. At the front of the empty lecture hall, his first sentence acquired three false starts. He laughed each time, as if making the problem entertaining might keep anyone from recognizing it as a problem.

Ben: I appear to have forgotten how nouns work.

Jonah: We can start with verbs.

Ben: That's an alarming educational policy.

Sofia was checking the projector; Priya had already left for her bus. They had twenty minutes, enough for one focused rehearsal but not enough to remake Ben into an entirely different person. He needed to know whether the team saw a manageable speaking task or an obstacle that should be removed from view.`, [
o('Practice only the first thirty seconds, with a pause built in.', { rel: { Ben: 4 }, stats: { Charisma: 2 }, flags: { helpedBen: true }, gradeDelta: { project: 3 } }, `They reduced the opening to the question, the reason it mattered and one breath before the first figure. Ben tried it three times. The third wasn't effortless; it was usable. Jonah stopped there instead of turning the rehearsal into a test of whether Ben could become fearless.`),
o('Offer a shared opening so Ben can enter after the first question.', { rel: { Ben: 3 }, flags: { helpedBen: true, sharedPresentation: true }, gradeDelta: { project: 2 } }, `Ben asked to take the second sentence rather than disappear into operating the slides. They agreed on a handoff and practiced it until both could recognize the cue. Sharing the role gave Ben a way into the task without announcing that someone else had rescued it.`),
o('Ask whether Ben would prefer an equally credited non-speaking role.', { rel: { Ben: 2 }, flags: { respectedBenChoice: true, fairCredit: true } }, `Ben thought before answering. He chose the question-handling notes and asked to try one short explanation during the defense. The contribution ledger made the change visible. The team could redistribute speaking without pretending the research and preparation had redistributed themselves.`),
o('Take the opening away from Ben to make the rehearsal smoother.', { rel: { Ben: -3 }, flags: { benSidelined: true }, gradeDelta: { project: 1 } }, `The next run was smoother. Ben stopped making jokes and operated the slides. Jonah could point to the improved timing, but the gain came with a cost the timer didn't measure. Repair would require offering Ben a real say in the next presentation, not complimenting his clicking.`)
]),
s('w0605', 'The name under the paragraph', 'Peer critique table', `Maya read the project's methods paragraph and marked two questions beside its most confident sentence. She did not rewrite it. Jonah had to decide whether the sample supported the claim and whether the interview invitation had made refusal clear.

Maya: I can tell you where I lose the thread. I can't write the thread and then have you present it as yours.

Jonah: I know.

Maya: I think you do. I also want the distinction written down.

The peer-critique form had a space for assistance received. It looked minor compared with the grade rubric, but the entry would later matter if anyone asked how the paragraph had changed. Credit could be precise without turning a useful conversation into ownership of the whole project.`, [
o('Record Maya’s feedback accurately and make his own revision.', { rel: { Maya: 3, Sofia: 1 }, flags: { creditedMaya: true, researchIntegrity: true }, gradeDelta: { assignments: 3 } }, `He wrote “peer questions about sampling and consent” in the assistance field. Maya checked the description and nodded. Jonah revised the sentence himself. The record now distinguished between a question that improved the work and authorship of the words that answered it.`),
o('Ask for a second critique from another peer to compare perspectives.', { prep: 2, flags: { creditedMaya: true, diversifiedSupport: true }, rel: { Maya: 1 } }, `Amir noticed a different weakness in the table caption. Jonah recorded both contributions. More feedback did not mean collecting enough approval to avoid deciding. He still had to choose the revision and explain why it fit the evidence.`),
o('Tell Ben casually that Maya fixed the draft.', { flags: { misattributedDraft: true }, rel: { Maya: -2 }, stats: { Charisma: -1 } }, `Ben understood “fixed” as a larger contribution than Maya had made. Jonah noticed the ambiguity and let it pass because correcting it felt fussy. The phrase would travel more easily than the careful account of two questions in a margin.`),
o('Leave assistance blank because the form feels unimportant.', { flags: { missingCredit: true }, rel: { Sofia: -1 } }, `The paragraph improved, but its trail of help became less visible. Sofia asked whether the blank field was deliberate. Jonah said he would return to it. A form did not create academic integrity by itself; ignoring it could still make a later truthful explanation unnecessarily difficult.`)
]),
s('w0606', 'The first real review', 'Advising corridor', `Nia was waiting outside Evans's office with a folder for the aid review. The decision would depend on Jonah's documented costs and available work, not on whether he looked sufficiently discouraged. If he had already applied, the review could now conclude. If he hadn't, she could arrange a later appointment, but the missed lead time could not be invented.

Nia: There are two separate questions. Is the semester financially workable? And what does the academic record need next?

Jonah: I keep answering whichever one is less frightening.

Nia: That makes them take turns being emergencies.

The midterm was a week away. Jonah needed to leave this corridor with one immediate action and a truthful record of any support being used.`, [
o('Complete the documented aid review and reduce the next rota.', { cash: 180, flags: { aidApproved: true, aidPending: false, helpSeeking: true, workBalanced: true }, energy: 4 }, `The award was one hundred eighty dollars for this rent period, with the next period subject to a brief check-in. It was not enough to ignore the ledger. It was enough to remove a shift before the midterm. Jonah recorded the payment and told Luca which hours he was releasing.`, { availability: { any: [f('appliedForAid'),f('aidAppointment')] } }),
o('Review the installment plan and reserve the next wages for the balance.', { flags: { paymentArrangement: true, practicalRoute: true }, prep: 2 }, `Nia helped him write the next payment date beside the amount due. She could not declare the debt gone. Jonah could make the plan more reliable by reserving earnings before treating them as spare cash. He left with the midterm study hour still protected.`),
o('Focus on the midterm plan and book aid advice for next week.', { flags: { appliedForAid: true, aidPending: true }, prep: 3 }, `The later appointment preserved a route to support without pretending it had arrived today. Jonah named the two topics he would practice before the exam and the money conversation he would have after it. Sequencing the tasks was different from concealing one of them.`),
o('Take a paid weekend shift and accept the smaller preparation window.', { cash: 72, energy: -6, prep: -1, flags: { workHeavy: true } }, `Six hours of work became seventy-two dollars. Jonah put it toward the account balance and carried a concise study sheet on the bus. The plan was possible, but less forgiving. He would need to use the remaining study time deliberately rather than expect wages to repair a grade.`)
])]);
