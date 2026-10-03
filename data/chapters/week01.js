import { chapter, scene as s, option as o, variant as v, flag as f } from '../helpers.js';
export default chapter(1, 'The Empty Room', [
s('w0101', 'A seat near the aisle', 'Main lecture hall', `Orientation began with a microphone that was much louder than the person using it expected. Jonah chose a seat near the aisle, then wondered whether the choice announced something about him. Around him, notebooks appeared on polished desks. He had brought three pens and no idea how much confidence the other students were borrowing.

Ben: Is this seat doing anything?

Jonah: Holding my bag. Badly.

Ben: I can probably outperform the bag.

Ben Flores sat down and drew a rectangle at the top of his page. It was, he said, a space for information he would understand later. On stage, Dr. Evans explained conditional placement without the brochure's soft edges: seventy overall, the required work, and academic integrity. There would be warnings and recovery opportunities. Nobody would be surprised by a secret rule in December.

Ben's pen stopped moving at seventy. He looked toward Jonah, his joke temporarily missing.`, [
o('Ask Ben which part of the program worries him.', { rel: { Ben: 2 }, stats: { Charisma: 2 }, flags: { benSpeakingKnown: true } }, `“The oral defense,” Ben said. “I can talk forever until somebody calls it presenting.” Jonah admitted that numbers without worked examples worried him. They wrote each other's concerns in their rectangles, a small exchange that felt less embarrassing than writing their own.`),
o('Compare the assessment schedule with Ben.', { rel: { Ben: 1 }, prep: 2, flags: { sharedCalendar: true } }, `They found two deadlines on the same Friday. Ben had missed one; Jonah had mistaken a practice session for a graded one. Neither had rescued the other. Together they had a better calendar. Ben photographed it only after asking.`),
o('Introduce himself to the student on his other side.', { stats: { Charisma: 2 }, flags: { metAmir: true } }, `Amir Shah was studying how public services handled queues. He liked systems, he said, until people pretended systems didn't contain people. His orientation notes were mostly questions. Jonah liked the idea that asking questions could count as arriving prepared.`),
o('Listen carefully and leave without exchanging numbers.', { prep: 2, flags: { solitaryOrientation: true, knowsPolicy: true } }, `Jonah stayed through the questions at the end. He learned where to find extensions, how warning letters worked, and why a missing assignment was harder to repair than a weak one. The aisle emptied before he stood. He had useful information and nobody to discuss it with yet.`)
], { variants: [v(f('policyDeferred'), `Hearing the threshold aloud made last night's drawer seem a little absurd. The policy had followed him to campus without needing to be carried.`), v(f('honestStart'), `He could tell his parents about this tonight without first correcting yesterday's story.`), v(f('independentPlan'), `His checklist acquired a new column: evidence that a task was actually finished, not merely intended.`)] }),
s('w0102', 'The service desk', 'Student services', `Nia Brooks had arranged the information leaflets by what someone needed rather than by the office that issued them. Food, rent, access, study, someone to talk to. Jonah stood in front of the display for long enough that she looked up from repairing a stapler.

Nia: You can take them without telling me why.

Jonah: I was trying to work out which office this is.

Nia: Today? The office that tells you which office.

She was a resident advisor in the north halls and a volunteer here on Mondays. Jonah explained that he lived off campus. Nia moved one leaflet aside and found the commuter version. The pantry required a short registration, not proof that he had already run out of food. Emergency aid required an appointment and evidence of costs; it wasn't a machine that dispensed money after a sufficiently sad story.

There was a line forming behind him. Nia gave him time without pretending she had unlimited time.`, [
o('Register for the pantry before the groceries run out.', { food: 5, stress: -3, flags: { usedPantry: true, knowsNia: true } }, `The form asked about allergies, collection times and a bag. Nia pointed out the evening slot for commuters. Jonah had expected questions about deserving help. Instead he had to decide whether he owned a bag large enough for oats. It was an easier and more useful problem.`),
o('Book an aid-information appointment for Week Five.', { flags: { aidAppointment: true, knowsNia: true }, prep: 1 }, `Nia entered the appointment and handed him a list: lease, account balance, expected work hours. “Information first. An award isn't guaranteed.” Jonah repeated the date aloud. An appointment five weeks away felt distant until he compared it with the rent sheet.`),
o('Ask for quiet study spaces and manage food himself.', { prep: 2, flags: { quietRooms: true, knowsNia: true } }, `She marked two rooms and a rule: don't reserve more time than you will use. Jonah appreciated that the practical advice included other people. Independence would be easier in a quiet room whose existence he didn't have to discover by trying every door.`),
o('Take the leaflets to read privately.', { flags: { supportLeaflet: true }, stats: { Happiness: 1 } }, `Nia returned to the stapler without asking whether he would come back. Jonah folded the commuter leaflet into his notebook. It remained available later, even if he couldn't yet imagine walking through the door with a specific request.`)
]),
s('w0103', 'What a number leaves out', 'Quantitative reasoning classroom', `Dr. Hart wrote 40/50 and 30/100 on the board. “Which group responded more often?” A few students answered before she finished the question. Jonah understood the arithmetic. What unsettled him was the speed at which the room seemed to decide what the arithmetic meant.

Hart: Counts and rates answer different questions. If you exchange them carelessly, the calculation can be correct and the argument wrong.

Sofia: We also don't know whether the groups were invited in the same way.

Hart: Good. Correct arithmetic doesn't forgive a weak comparison.

The student who had spoken was Sofia Grant. Her notebook contained more crossed-out lines than Jonah expected from someone so confident. He copied the fractions and then noticed that his own page contained none of the reasoning between them. At school, a worked example had usually meant something he could memorize. Here it appeared to mean something he should be able to question.`, [
o('Ask why the denominator changes the comparison.', { prep: 2, stats: { Intelligence: 3 }, rel: { Hart: 1 }, flags: { learnedRates: true } }, `Hart asked him to describe the two groups in words. Forty out of fifty; thirty out of a hundred. Eighty percent; thirty percent. Saying the denominators aloud made the comparison stop sliding around. Sofia added “recruitment method unknown” beneath her own answer. Understanding did not end the questions.`),
o('Ask Sofia to compare the reasoning after class.', { prep: 1, rel: { Sofia: 2 }, stats: { Charisma: 1 }, flags: { learnedRates: true } }, `Sofia agreed to five minutes before her scholarship meeting. She didn't explain the entire lecture. She asked Jonah which number he was dividing by and why. He could answer the first question immediately; the second took longer. “That's the useful delay,” she said when he got there.`),
o('Work the example again alone, including a written explanation.', { prep: 2, stats: { Intelligence: 2 }, flags: { learnedRates: true, independentStudy: true } }, `He tried replacing students with bus arrivals and found the same denominator problem. Writing the explanation exposed where he had relied on recognizing a familiar shape. The page looked slower than Sofia's. It also contained an answer he could reproduce tomorrow.`),
o('Copy the answer and assume the method will return later.', { stress: -1, flags: { copiedWithoutReasoning: true } }, `Eighty percent and thirty percent fit neatly beneath the fractions. Jonah underlined them and felt the brief relief of a completed page. The missing part was invisible until he tried a different problem that evening and didn't know which number belonged underneath.`)
]),
s('w0104', 'No one is checking', 'Off-campus apartment', `The room was quiet when Jonah returned. At home, being quiet had required other people to cooperate. Here it happened automatically. He ate standing beside the counter and opened the course site, where four separate pages claimed to contain the week's essential reading.

A message from Ben appeared: a few people were going to the library. No pressure. Jonah read the last two words as if they contained a precise social instruction. Did no pressure mean the invitation was real, or that his absence was expected?

Downstairs, Mrs. Vale lowered the shop's outer shutter halfway. The sound divided the evening into before and after without deciding what Jonah should do with either. He had time for one substantial commitment before he needed sleep. The readings would not all fit simply because he wanted them to.`, [
o('Join Ben and bring one question he can name.', { prep: 2, rel: { Ben: 2 }, stats: { Happiness: 2 }, flags: { firstLibrary: true } }, `Ben had brought a question too. Priya Das, who caught the early bus home, suggested each person explain one paragraph rather than pretend to finish the entire reading. They left with fewer pages covered than Jonah had intended and more of those pages understood.`),
o('Read one article carefully and write a short summary.', { prep: 3, stats: { Intelligence: 2 }, flags: { firstSummary: true } }, `The summary was six lines long. Jonah had to reopen the article three times to remove claims the author hadn't made. By the end, he knew what he would ask in seminar. The untouched readings still existed, but one finished piece of work existed beside them.`),
o('Prepare meals and clothes so tomorrow starts more easily.', { food: 2, energy: 3, stats: { Looks: 3 }, flags: { morningRoutine: true } }, `He washed his shirt, packed a container, and found the pen that had disappeared into the lining of his bag. These tasks didn't answer the seminar question. They removed three small reasons he might arrive unable to think about it.`),
o('Keep checking messages until the evening has gone.', { energy: -3, prep: -1, flags: { avoidancePattern: true } }, `Nothing especially bad happened. That made the lost hours harder to explain. At eleven Jonah still had the article open at its first page and a feeling that he had been busy. He moved the phone across the room before sleeping, too late for tonight but not necessarily for tomorrow.`)
]),
s('w0105', 'Twelve spaces', 'Library planning table', `The weekly planner had twelve empty rectangles. Scheduled classes were already printed above them; these were the hours that belonged to meals, work, travel, reading, rest and other people. Jonah had been treating those needs as if they would arrange themselves around his intentions.

Nia: Leave room for being a person who takes time to do things.

Jonah: Is that the official instruction?

Nia: The official version has more nouns.

The café could offer short paid blocks after induction. Meals needed shopping and cooking, not just the moment a fork reached his mouth. Rest meant protected time, not the accidental collapse after everything else. Jonah could make a highly ambitious grid. He could also make one that a tired person might actually follow.

The planner would close the week's open time windows. It was a commitment, not a daily activity he could repeat until all his numbers improved.`, [
o('Use the plan as a promise to himself, and check it Sunday.', { flags: { reviewsSchedule: true }, stats: { Intelligence: 1 } }, `He put a small square beside each block to mark what actually happened. A plan that could record failure might be more useful than one designed only to look convincing. Sunday would supply information, not a verdict on whether he deserved to be here.`),
o('Share the plan with Ben and compare one difficult slot.', { flags: { sharedPlan: true }, rel: { Ben: 1 }, stats: { Charisma: 1 } }, `Ben pointed out that his own Thursday contained two journeys he had counted as one. Jonah found a meal squeezed between rooms twenty minutes apart. They changed the grids without changing their ambitions. It was the first time planning had felt like conversation instead of punishment.`)
], { minigame: 'orientationPlan' }),
s('w0106', 'Three sentences home', 'The apartment window', `On Sunday, the bus shelter roof held a thin layer of rain. Jonah had learned the sound of the last bus braking beneath his window. He had not learned whether the empty room would eventually feel restful instead of unfinished.

Mum answered the call with flour on one sleeve. Dad was somewhere behind her, looking for a lid that apparently had a designated place neither of them could identify. For a moment Jonah could hear the old kitchen without having to perform a new life.

Mum: Classes? Money? One thing you liked?

Jonah: That's a lot of categories.

Mum: Three. We negotiated it down.

There had been no major assessment yet. There were still several versions of the week he could honestly describe, and a polished version he could assemble by leaving out most of the parts that made it his.`, [
o('Tell them the room feels lonely and name one person he met.', { flags: { parentHonesty: 3 }, stats: { Happiness: 3 }, stress: -2 }, `Mum didn't tell him to be grateful. Dad asked about the person, then about the room. By the end they were discussing whether a secondhand lamp might help. They couldn't supply a friend through the phone. They could remain people with whom he didn't have to pretend.`),
o('Explain his schedule and ask how their week went.', { flags: { parentHonesty: 2 }, prep: 1, stats: { Charisma: 1 } }, `Dad described a machine at work that had required the same repair twice. Mum had missed her bus. Their lives were not suspended while Jonah attempted to justify the tuition receipt. Hearing that made his own small practical successes easier to describe without exaggerating them.`),
o('Send a cheerful text instead of talking about the difficult parts.', { flags: { parentHonesty: -1, evasiveCalls: true }, stress: -2 }, `He chose a photograph of the library because the building looked certain of itself. Mum replied that it was beautiful. Jonah agreed. The exchange was affectionate and incomplete; the next honest conversation would have to travel a little farther to reach him.`),
o('Say he needs a quiet evening and arrange a shorter call tomorrow.', { flags: { parentHonesty: 1, familyBoundary: true }, energy: 4 }, `“Tomorrow after supper,” Mum said. She sounded disappointed for a second, then practical. Jonah kept the appointment in his calendar. A boundary became trustworthy when it included what he could offer, and tomorrow he would have to follow through.`)
], { variants: [v(f('firstLibrary'), `Ben had sent a photograph of their disastrous shared diagram. Jonah could show his parents evidence that another person knew his name.`), v(f('avoidancePattern'), `The unstarted article remained on the table within sight of the phone. He turned it face up before deciding what to say.`), v(f('structuredStart'), `The three-sentence agreement from the station had survived its first week. Now it had to contain a week that was more complicated than the plan.`)] })
]);
