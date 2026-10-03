import { chapter, scene as s, option as o, variant as v, flag as f } from '../helpers.js';
export default chapter(5, 'The Price of a Tuesday', [
s('w0501', 'The rota and the lease', 'Café back room', `Luca had drawn a line through two shifts on the rota. One barista was ill; another had a family commitment. The empty spaces looked like opportunities until Jonah compared them with the week on his phone.

Luca: I can offer you eight hours. Or sixteen if you really want them. Twelve dollars an hour, same as before.

Jonah: Do you need an answer now?

Luca: By tonight. I need an answer you can keep, not the heroic one.

The first rent after the prepaid month was due: two hundred forty dollars, plus food and travel. Jonah's account was not an abstract score. Every café hour would become money and also cease to be available for something else. Maya's session, the project briefing and the aid appointment occupied different versions of Tuesday afternoon. He could move one with notice. He could not attend all three by regretting the conflict intensely enough.`, [
o('Choose limited shifts and proactively move the tutorial.', { flags: { workBalanced: true, rescheduledHonestly: true }, rel: { Maya: 2 }, stats: { Charisma: 2 } }, `Maya offered Wednesday lunch, and Jonah accepted the shorter session. Luca wrote eight hours in ink. Nobody praised him for having limits; they used the accurate information to make their own plans. That ordinary cooperation was more valuable than a heroic schedule nobody could rely on.`),
o('Offer to cover every available shift.', { flags: { workHeavy: true, heavyWeek5: true }, energy: -5, prep: -2 }, `Luca repeated the hours before entering them. Jonah said yes again. The money would be real, and so would the lost evening before the project briefing. He put the reading in his bag, aware that carrying it to work was not the same as having time to read it.`),
o('Keep the aid appointment and ask Luca for the next available short shift.', { flags: { appliedForAid: true, aidPending: true, helpSeeking: true }, stress: -2 }, `Luca couldn't promise an immediate replacement shift, but he kept Jonah on the regular list. At student services, the receptionist asked for the lease and a realistic income estimate. Applying meant admitting the gap on paper, not proving he had already exhausted every other option.`),
o('Request an installment arrangement and build a low-cost meal plan.', { flags: { paymentArrangement: true, practicalRoute: true }, stats: { Intelligence: 2 }, food: 2 }, `Mrs. Vale agreed to a written schedule rather than a vague assurance that money was coming. Jonah recorded the amount still owed. Reducing food waste helped, but skipping meals was not part of the plan. A smaller weekly payment would need actual income behind it.`)
], { variants: [v(f('rentCalendar'), `The date had been on his wall since arrival. Knowing it was coming had not made the bill smaller, but he had avoided the additional panic of discovering it late.`), v(f('aidAppointment'), `Nia had kept the Week Five appointment he booked at orientation. The early decision now reserved time other applicants were struggling to find.`), v(f('regularWork'), `Because Jonah had recorded his availability honestly, Luca already knew which shifts required negotiation rather than an assumption.`)] }),
s('w0502', 'Put the numbers in the same place', 'Kitchen table', `The lease, grocery receipt and café rota had spent the month in different corners of the room. Jonah put them together. Doing so did not change any number, but it stopped the separate pieces from each pretending to be manageable on their own.

Rent was two hundred forty dollars. Groceries for the next stretch would cost forty-five, or twenty with a pantry collection and some cooking. Travel required twelve. A shift paid forty-eight for four hours. Aid, if approved, would arrive after review rather than at the instant of application.

Jonah could accept a shortfall and arrange how to repay it. He could earn more and protect less time. He could use support and keep a workable schedule. What he could not do was omit a cost from the page and call the remaining sum a plan.`, [
o('Keep the written plan visible and honor its work limit.', { flags: { budgetRecorded: true }, stats: { Intelligence: 2 }, stress: -2 }, `He pinned the ledger beside the rent calendar. Any unpaid amount stayed on the page. The record was not a decoration announcing that he had become responsible; it was a place where next week's income would have to meet this week's promises.`),
o('Show the plan to Nia and ask about its weakest assumption.', { flags: { budgetRecorded: true, knowsNia: true }, stats: { Charisma: 2 } }, `Nia asked when the aid decision would arrive and what happened if a shift was cancelled. Jonah added a contact date and a payment-arrangement note. She didn't seize the pencil. The useful part of the conversation was making the plan less dependent on everything going exactly right.`)
], { minigame: 'firstBudget' }),
s('w0503', 'What they can offer', 'A call from home', `Dad called between shifts. Jonah could hear the workplace door closing behind him and the change in the air when he stepped outside. The call had only ten minutes in it.

Dad: Your mum said rent was this week.

Jonah: It is.

Dad: We can talk about the plan. We can't promise another big payment.

The sentence arrived before Jonah had asked for money. His father sounded ashamed of it, which made Jonah want to say something reassuring even if it wasn't accurate. The tuition receipt was still somewhere in the apartment. It had paid for a beginning, not removed every difficulty that followed.

There were several ways to be loving in this conversation. Pretending neither person was worried was only one, and perhaps not the most useful.`, [
o('Explain the actual balance and the arrangement he has made.', { flags: { parentHonesty: 5, familyKnowsMoney: true }, stats: { Charisma: 2 }, stress: -3 }, `Dad asked two practical questions and listened to the answers. “I wish we could do more,” he said. Jonah told him that knowing the truth was already something they could do together. Neither mistook the sentence for a new source of cash. The call ended with less concealment, not fewer bills.`),
o('Ask for help comparing plans, without requesting another payment.', { flags: { parentHonesty: 4, familyKnowsMoney: true }, prep: 1 }, `His father noticed that Jonah had counted the same evening for work and shopping. They moved the groceries to Sunday. It was the kind of ordinary correction Dad could offer without emptying an account. Jonah thanked him for the actual help rather than the help neither could afford.`),
o('Say the rent is fine even if the ledger says otherwise.', { flags: { parentHonesty: -3, hidMoney: true }, stress: -1 }, `Dad's relief was audible. Jonah let it stand because correcting it would take more than the remaining minutes. After the call, the ledger was exactly as he had left it. Now he also had a future conversation in which “fine” would need to be translated.`),
o('Set a shorter weekly money check-in so neither has to guess.', { flags: { parentHonesty: 3, familyMoneyRoutine: true }, stats: { Happiness: 2 } }, `They agreed on an amount, a due date and any change in the plan—no daily interrogation, no heroic reassurance. Dad said he could manage that. Jonah realized that boundaries could protect a family conversation too, leaving room to discuss something besides whether the investment was safe.`)
]),
s('w0504', 'A bag without a speech', 'Campus pantry', `Nia had placed spare reusable bags beside the collection table. The pantry room smelled faintly of cardboard and oranges. Jonah recognized students from courses he had assumed were full of people with easier lives.

Nia: Take the things you'll actually use. Leaving with ingredients you can't cook doesn't help the stock cupboard either.

Jonah: Is there a limit on questions?

Nia: No. There is a limit on making me explain the strange bean pasta twice.

Ellis was sorting donations at the far table. He greeted Jonah with the same easy recognition he used elsewhere, without lowering his voice as if the room required secrecy. A volunteer slot was open for the campus event in Week Eight. It was an invitation, not repayment for receiving food.`, [
o('Collect useful staples and sign up for a short volunteer slot.', { food: 5, flags: { usedPantry: true, volunteerCommitment: true, ellisAlly: true }, stats: { Happiness: 2 } }, `Ellis wrote Jonah's name under a two-hour slot and emphasized the start and finish. “You don't owe us this,” he said. Jonah said he understood and still wanted to help. The distinction made the commitment feel chosen rather than purchased with a bag of groceries.`),
o('Collect food and keep his limited free time for study.', { food: 5, prep: 1, flags: { usedPantry: true, practicalRoute: true } }, `Nia handed him the bag without asking for a reason he couldn't volunteer. Jonah left with ingredients and the study hour intact. Accepting one kind of support did not require surrendering the right to decide how the rest of his week worked.`),
o('Ask Ellis for recipes that work with one saucepan.', { food: 4, flags: { ellisAlly: true, usedPantry: true }, stats: { Charisma: 2 } }, `Ellis described a lentil recipe with a precision that suggested previous disasters. “Add the tomatoes after the lentils soften. I have conducted the opposite experiment.” Jonah wrote that down. They were discussing dinner, not a moral lesson about resourcefulness.`),
o('Take only the information sheet and use his own food plan.', { flags: { pantryDeferred: true }, stats: { Happiness: 1 } }, `Nia pointed out the next collection date and let him leave. Jonah was allowed to decline without proving that the alternative was better. The sheet included recipes and opening hours. It would remain useful if his plan changed, as plans sometimes did.`)
]),
s('w0505', 'The appointment he keeps', 'Library side room', `Maya had brought her own reading to the revised meeting. When Jonah arrived, she marked her place before looking up. The gesture made it clear that waiting had occupied time she could have used, not a blank interval created for him.

Maya: How much time do we have today?

Jonah: Twenty-five minutes.

Maya: Then show me the question with the most useful mistake.

Jonah put the sheet down. There was a temptation to explain the entire money problem first, as if enough context could substitute for an attempt. There was also a temptation to conceal the pressure completely. Between those options was a brief, accurate account followed by the work they had agreed to do.`, [
o('Explain the schedule change briefly, then work from his attempt.', { prep: 3, rel: { Maya: 3 }, flags: { reliableUnderPressure: true, mentorBoundariesRespected: true } }, `Maya asked whether he had eaten, accepted his answer and moved to the denominator on the page. She did not become his financial advisor. Jonah did not become a person without financial problems. For twenty-five minutes, they did a specific piece of academic work within the lives they actually had.`),
o('Admit he is too tired for new material and review one old concept.', { prep: 1, energy: 3, rel: { Maya: 2 }, flags: { honestFatigue: true } }, `They reviewed correlation and cause. Jonah could explain the distinction with fewer prompts than before. Maya suggested stopping there instead of converting exhaustion into evidence that he had learned nothing. The shorter task produced a truthful picture of his progress.`),
o('Cancel early enough that Maya can use the time, and submit a practice page later.', { prep: 2, rel: { Maya: 1 }, flags: { keptReschedulePromise: true, mentorBoundariesRespected: true } }, `Maya replied that the notice helped. Jonah completed the page alone and sent only the question he couldn't resolve, without expecting an evening answer. The cancelled meeting cost contact, but it didn't have to cost reliability as well.`),
o('Miss the meeting and explain afterward that money has been difficult.', { rel: { Maya: -4 }, prep: -2, flags: { missedTutorial: true, trustRupture: true } }, `Maya said she was sorry about the money and still needed notice. The two statements did not cancel each other. She reduced their next meeting to a short check-in until they could agree on a reliable arrangement. Repair would require more than a persuasive account of why the absence made sense.`)
]),
s('w0506', 'A receipt for time', 'Café closing shift', `Luca showed Jonah how the time sheet matched the pay record. A few minutes spent checking now would prevent a much longer argument later. The till balanced; the floor still needed attention; somebody had left a book beneath a chair.

Luca: You can be good at a job and still give it too many hours.

Jonah: Is that a warning or advice?

Luca: Depends what you write on next week's availability.

The group project would start in earnest on Monday. Maya's research proposal had its own deadline. Ben had been asking who would take the oral section. Jonah could feel the calendar tightening around several people at once. He needed a rule for the next month that did more than explain why this week had been difficult.`, [
o('Record fixed unavailable study periods on the next rota.', { flags: { workBalanced: true, workBoundary: true }, energy: 3, prep: 2 }, `Luca crossed those periods out before offering shifts to anyone else. Jonah would earn less than the maximum available. He would also stop treating every future conflict as an emergency negotiated after other people had planned around him.`),
o('Ask for one regular shift and keep the aid process moving.', { flags: { workBalanced: true, appliedForAid: true, aidPending: true }, stress: -2 }, `The combination was less dramatic than working every evening and more complicated than a single solution. It needed a rota, a form and an appointment. Jonah wrote the next action for each. Sustainable plans, he was discovering, often had several ordinary parts.`),
o('Take the extra shifts through midterm and document the academic conflict.', { cash: 96, energy: -8, prep: -2, flags: { workHeavy: true, alternateMidterm: true, workDisclosed: true } }, `Two additional shifts went onto the schedule, and Jonah emailed Evans before the assessment window closed. The approved alternate sitting would change the day, not the material. The wages helped the ledger while fatigue made the coming week's preparation more expensive.`),
o('Leave his availability open because saying no feels risky.', { flags: { uncertainWorkSchedule: true }, stress: 3 }, `Luca asked once whether the blank spaces meant available. Jonah said yes. The answer would now shape a real rota. He could still renegotiate with notice, but the burden would be larger than if he had described his limits while the page was empty.`)
])]);
