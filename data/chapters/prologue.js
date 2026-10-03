import { chapter, scene as s, option as o, variant as v, flag as f } from '../helpers.js';
export default chapter(0, 'What It Cost', [
s('p01', 'The envelope', 'Alderport station', `His father had folded the tuition receipt twice, although there was an envelope large enough to hold it flat. Jonah recognized the habit: make a thing smaller before deciding where it belonged. Around them, passengers were finding platforms, lifting cases, calling people who already knew where they lived.

Mum: The first rent is paid. Four weeks. After that, use the sheet we made.

Dad: And ring us before it becomes an emergency.

Jonah: Before what becomes an emergency?

Dad: Whichever thing you think doesn't count.

His father smiled, but the receipt stayed between his fingers. Their savings had become a semester at Bellwether, a narrow room above a shop, and one hundred eighty-five dollars in Jonah's account. He had known the sum yesterday. At the station it seemed to acquire a different unit: hours his parents had worked when he wasn't looking.

Mum straightened a strap on his bag, then let it go. The departure board clicked to a new row. There was time for one honest sentence before their train made leaving practical.`, [
o('Tell them he is frightened, and glad to be here.', { stats: { Charisma: 2 }, flags: { parentHonesty: 1, honestStart: true } }, `“Both?” Mum asked. “Both,” Jonah said. She nodded as if he had handed her something fragile that she knew how to carry. Dad finally put the receipt away. They did not promise to remove the fear. They agreed on Sunday calls, including the Sundays when there was nothing impressive to report.`),
o('Promise to send a concrete weekly update.', { stats: { Intelligence: 2 }, flags: { parentHonesty: 1, structuredStart: true } }, `Dad asked whether “weekly update” meant a spreadsheet. “Maybe three sentences,” Jonah said. “Then I withdraw my objection.” They settled on money, classes, and one thing Jonah had enjoyed. The last category felt harder than the others, which was probably why Mum insisted it stay.`),
o('Say everything is already under control.', { stats: { Happiness: 1 }, flags: { parentHonesty: -1, concealedStart: true } }, `The relief on their faces arrived so quickly that Jonah couldn't take the sentence back. Dad said he had always been resourceful. Jonah accepted the compliment and watched it turn into an obligation. On the platform after the train left, he rehearsed an update containing no numbers.`),
o('Ask about their journey home instead.', { stats: { Happiness: 2 }, flags: { parentHonesty: 0, quietStart: true } }, `Mum explained the change at Westmere and the sandwich in her bag. Jonah listened carefully. Caring about their small journey let him postpone describing his large one. When they hugged, Dad said, “You can tell us later.” It was an invitation rather than a verdict, and Jonah kept it.`)
], { day: 'Sunday', timeSlot: 'Afternoon' }),
s('p02', 'A key with a blue mark', 'The apartment above Vale’s shop', `Mrs. Vale turned the key once and then lifted the handle. “It catches,” she said. “That doesn't mean it's locked.” The apartment contained a narrow bed, a table with one adjustable leg, and a window overlooking the roof of the bus shelter. Someone had painted a small blue mark on the key. It was the only bright thing Jonah had brought with him that he hadn't chosen himself.

Mrs. Vale: The washing machine is downstairs. Please don't run it after ten.

Jonah: Because of the noise?

Mrs. Vale: Because I go to bed at ten.

There was a welcome sheet on the table: rent two hundred forty dollars every four weeks, due in Weeks Five, Nine and Thirteen, with a short grace period for the latter two payments. Jonah put it beside the college letter. Conditional placement, the letter said. He would have to read the rest soon. First he had to decide what it meant to arrive in a room without anyone watching.`, [
o('Unpack food and write the payment dates on paper.', { food: 2, prep: 1, flags: { rentCalendar: true } }, `Five days of groceries became seven when he counted the rice properly. He wrote the three rent dates in large figures and pinned the page beside the kettle. The numbers did not become kinder. They became visible, which was a kind of improvement he could act on.`),
o('Ask Mrs. Vale where she buys inexpensive groceries.', { stats: { Charisma: 2 }, flags: { knowsMarket: true } }, `“Not here, for a full shop,” she said, surprising him. “Market on Birch Street. After four they discount the bread.” She was willing to sell him a forgotten onion, not an entire expensive week. Jonah wrote the street down. Asking one practical question had not made him seem incapable.`),
o('Walk the route to campus before unpacking.', { energy: -3, stats: { Looks: 1 }, flags: { knowsRoute: true } }, `The walk took twenty-three minutes, including a wrong turn behind the library. He found a public water fountain and the door that stayed open after six. Coming back, he recognized the bus-shelter roof from below. The room above it was still small, but it now occupied a place in a map.`),
o('Lie down and let the room become familiar.', { energy: 5, stress: -3, flags: { quietArrival: true } }, `He kept his shoes on for the first five minutes, then took them off. A delivery trolley rattled downstairs. Someone asked Mrs. Vale whether she had change. Ordinary life was continuing directly beneath him. Resting did not unpack his bag, but it made getting up again possible.`)
]),
s('p03', 'What the letter actually says', 'Kitchen table', `Bellwether called it a foundation semester. Writing seminar, quantitative reasoning, research methods, collaborative design and ethics. The prospectus had made them look like four doors opening. The retention letter described a single threshold behind them: an overall seventy, required core work completed, and no unresolved disqualifying integrity violation after formal review.

The weights were printed plainly: quizzes fifteen percent, assignments twenty-five, group project twenty, midterm fifteen, final examination twenty-five. Early warnings would be followed by an improvement plan, revision opportunities and an advisor meeting. Failure after that process meant loss of enrollment, not merely a disappointing report.

Jonah read the paragraph twice. Beneath it was a name: Dr. Malik Evans, Academic Advising. Beneath the name was a sentence he had overlooked on the train: “Please contact us while a problem is still small.” The sentence sounded reasonable until he imagined being the person who did.`, [
o('Save the advisor’s hours and calculate the weights.', { prep: 2, flags: { knowsPolicy: true, advisorContact: true } }, `The five weights summed to one hundred. A bad quiz would matter without deciding everything; an absent final would matter enormously. Jonah copied the office hours beside the rent dates. For the first time, the word conditional described a set of tasks rather than a judgment already made.`),
o('Write his parents a truthful explanation of the placement.', { flags: { knowsPolicy: true, parentHonesty: 2 }, stats: { Charisma: 1 } }, `Mum replied with a photograph of the same letter on their table. They had read it, too. “We paid for a chance,” she wrote. “We didn't buy a promise that nothing would be difficult.” Jonah had not realized how much he needed the distinction until someone else made it.`),
o('Underline the recovery process and make his own checklist.', { prep: 2, stats: { Intelligence: 1 }, flags: { knowsPolicy: true, independentPlan: true } }, `He listed submission dates, tutorial times and a place for questions he couldn't yet formulate. No person would inspect the checklist tonight. That made it easier to begin. He left a blank line marked ASK rather than pretending independence meant never needing anyone.`),
o('Put the letter in a drawer for tonight.', { stress: -2, flags: { policyDeferred: true } }, `The drawer closed badly because the receipt was caught at its edge. Jonah freed it and tried again. He knew the threshold now, even with the page out of sight. Tomorrow's orientation would repeat it; a closed drawer could delay planning, but it could not alter the agreement.`)
]),
s('p04', 'The first evening', 'Birch Street', `At the market Jonah held a basket whose handle leaned to one side. He had brought a list and immediately discovered that a list could be accurate and still require choices. Rice, eggs, frozen vegetables, soap. A ready-made meal near the till cost almost as much as three breakfasts.

A student in a Bellwether sweatshirt was comparing two tins with the gravity of someone translating a treaty. She caught him looking.

Tessa: Unit price. Tiny print. They hide the useful number where nobody's eyes want to go.

Jonah: Does it get less complicated?

Tessa: Shopping? Yes. This shop's labels? No.

She introduced herself as Tessa Lin, first year, campus newspaper and occasional photography club. She wasn't offering to become his best friend. She was pointing at a number on a shelf, which was exactly the scale of help he could manage.`, [
o('Buy the staples and ask Tessa about the student newspaper.', { cash: -24, food: 6, stats: { Charisma: 2 }, flags: { metTessa: true } }, `Tessa said the paper needed people who could ask a second question after receiving a polished answer. “I can barely ask the first,” Jonah admitted. “Good. You'll notice when somebody dodges it.” She gave him the open-meeting time, then went back to choosing beans. The invitation had no hidden membership fee.`),
o('Buy the staples and head home to cook.', { cash: -24, food: 6, prep: 1, flags: { cookedFirstNight: true } }, `The first meal used too much water and not enough salt. He ate it at the table anyway. Cooking took longer than buying something hot, but tomorrow's portion waited in a container when he finished. The room smelled briefly like somewhere a person had decided to stay.`),
o('Choose the ready meal and soap; conserve his energy.', { cash: -11, food: 1, energy: 4, flags: { convenienceStart: true } }, `Tessa did not inspect his basket. Jonah had been preparing a defense nobody requested. He ate the meal slowly and washed the fork afterward. It solved tonight, not the week, a distinction he wrote on the back of the receipt before throwing the packaging away.`),
o('Keep the remaining food and ask about campus meal support.', { stats: { Charisma: 1 }, flags: { supportLead: true, metTessa: true } }, `Tessa knew the pantry hours because she sometimes photographed events in the same building. “Nia runs the sign-up desk on Mondays. You don't need a speech.” Jonah asked whether students actually used it. “Students are the point,” she said. He saved the address without composing a speech.`)
])]);
