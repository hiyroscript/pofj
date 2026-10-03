import { chapter, scene as s, option as o, variant as v, flag as f } from '../helpers.js';
export default chapter(10, 'The Hours Between', [
s('w1001', 'Another due date', 'Above Vale’s shop', `Mrs. Vale's reminder contained the amount, the grace date and the payment method. It did not vanish because Jonah had a research milestone in the same week. The second rent period had reached its agreed grace week, and any earlier shortfall remained part of the account.

Downstairs, the shop received a delivery. Jonah heard the scrape of crates and a brief argument about where one box belonged. Practical problems existed at every scale, apparently. Some could be solved by moving a box; others required income, assistance and a calendar that acknowledged travel time.

Luca could offer two shifts. Nia's office could review an existing award or begin a new application. The research submission required a claim-source table, not merely a polished paragraph. Jonah needed to decide which hours would belong to which necessity before other people's schedules decided for him.`, [
o('Use approved support and a limited work schedule.', { flags: { workBalanced: true, practicalRoute: true }, energy: 3 }, `He gathered the current lease and the last award record. Support required a check-in, and work required an accurate availability sheet. Neither was glamorous. Together they could protect the research time without asking Jonah to prove commitment by becoming too tired to use it.`),
o('Ask Luca for more hours and tell Hart about the tighter schedule.', { flags: { workHeavy: true, workDisclosed: true }, stats: { Charisma: 2 }, energy: -3 }, `Hart could help him prioritize the research task and point out the deadline; she could not make every hour equally usable. Luca offered the shifts. Jonah wrote a short study block before work rather than a heroic one after closing, when he knew concentration would be worse.`),
o('Negotiate the payment dates and cut avoidable costs.', { flags: { paymentArrangement: true, practicalRoute: true }, stats: { Intelligence: 2 } }, `Mrs. Vale wanted specific dates, not the assurance that college would eventually lead to a good job. Jonah listed expected income and retained a food budget. The negotiation reduced the immediate pressure without erasing the debt or making deprivation the proof of seriousness.`),
o('Ignore the reminder until the research submission is finished.', { flags: { ignoredRentNotice: true }, stress: 4 }, `The quiet lasted until another reminder arrived. Jonah still had the same research task, now accompanied by a more urgent practical conversation. Concentrating on one problem could be sensible; pretending the other had no deadline made the sequence harder to defend.`)
], { variants: [v(f('aidApproved'),`His award had been reviewed once already. The next one hundred eighty dollars could be claimed through the scheduled check-in; it was limited support, not a recurring windfall without paperwork.`),v(f('paymentArrangement'),`The installment agreement gave him a person to contact and a date to discuss. It did not authorize him to let either pass without a message.`),v(f('regularWork'),`Luca's regular rota made part of the income predictable. It also made any last-minute change affect coworkers who had built plans around his availability.`)] }),
s('w1002', 'A budget with a body in it', 'Kitchen table', `Jonah could make the account balance by writing enough shifts into the week. He could also make a paper schedule in which no one shopped, cooked, rested or traveled between buildings. The second plan looked more efficient because it omitted the person expected to carry it out.

The rent payment was two hundred forty dollars, groceries forty-five or twenty with pantry support, travel twelve. A previously approved award contributed one hundred eighty for this period. A new application would need a bridge while the review happened.

He placed a blank line below the money calculation and wrote “time left for research.” It was not a currency the landlord accepted. It was still part of the cost of every option.`, [
o('Follow the budget and protect one complete research block.', { prep: 2, flags: { protectedResearchTime: true }, stress: -2 }, `He entered the research block before accepting another task. It would not guarantee a good submission; it would give the work a real place to happen. The account ledger stayed visible beside the schedule so that neither could pretend the other was merely an inconvenience.`),
o('Ask Nia to review the bridge between this week and the aid decision.', { flags: { aidFollowthrough: true, paymentArrangement: true }, stats: { Charisma: 2 } }, `They wrote who needed to be contacted and when. Nia did not call the landlord on Jonah's behalf without being asked. She helped him prepare a clear account so that he could make the conversation himself.`)
], { minigame: 'laterBudget' }),
s('w1003', 'A claim and its source', 'Research lab', `The research table had four claims and four possible sources. One claim described interviewees' experience; another counted appointments; a third stated opening hours. The fourth claimed that early closing caused students to fail.

Amir: That last sentence is carrying a lot of luggage.

Jonah: We don't have a source for all of it.

Amir: Then don't make the source pretend.

The task was to connect each claim to the evidence that could support it and qualify the broadest claim. The project could still recommend a careful trial. It could not transform a plausible concern into an established causal finding because the stronger version sounded more urgent.

Jonah would submit the table as required core research work. This was one of the pieces that had to be completed for retention, regardless of the final average.`, [
o('Submit the bounded claim and keep the limitations visible.', { flags: { researchSubmitted: true, researchIntegrity: true }, rel: { Hart: 1 }, prep: 2 }, `The final table made the unsupported causal leap explicit and replaced it with a narrower statement about reported barriers. Jonah included the limitations in the submission, not in a private note he hoped nobody would request. The argument could now be evaluated for what it actually established.`),
o('Ask for feedback on the weakest link before the revision window.', { flags: { researchSubmitted: true, revisionRequested: true }, prep: 3 }, `Hart marked the distinction between evidence of a scheduling clash and evidence of an effect on grades. Jonah had improved the claim, but the explanation could still become clearer. He booked the feedback into his revision plan while there was time to use it.`)
], { minigame: 'research' }),
s('w1004', 'The extra hour', 'Café closing time', `The last customer had left, but the dishwasher was unfinished and a coworker was waiting for a delayed bus. Luca asked whether Jonah could stay an extra paid hour. It was a reasonable request, not an order disguised as a test of loyalty.

Jonah knew what the hour would displace. A research check, a meal, a planned call, or some of the sleep he had been treating as an adjustable margin. Twelve dollars was neither nothing nor enough to make the tradeoff disappear.

Luca: Tell me what you can actually do. I can finish it if you can't.

The offer of an alternative made the decision less dramatic. It also removed the excuse that Jonah had no choice at all.`, [
o('Stay for the paid hour and explicitly move one nonessential task.', { cash: 12, energy: -2, flags: { deliberateWorkTradeoff: true } }, `He moved a casual meeting with notice and kept the research check where it was. The decision earned twelve dollars and cost an hour he would have enjoyed. Making the cost specific kept it from spreading invisibly into every other part of the night.`),
o('Decline because the protected research block starts soon.', { prep: 2, flags: { workBoundary: true }, rel: { Hart: 1 } }, `Luca nodded and began the dishwasher. Jonah left on time without supplying a long defense. The boundary would matter only if he used the protected hour as intended. At home he opened the claim-source table before opening his messages.`),
o('Offer half an hour and preserve time for food and sleep.', { cash: 6, energy: 1, flags: { workBalanced: true }, stats: { Happiness: 1 } }, `They agreed on the half hour before Jonah began. When it ended, he left even though another task remained. A negotiated limit was not a promise to finish every problem in the building. Luca thanked him for being clear.`),
o('Stay without limit because stopping feels selfish.', { cash: 24, energy: -8, stress: 4, flags: { overworkedWeek10: true } }, `Two hours became twenty-four dollars. Jonah ate too late and read the same source paragraph four times without retaining it. The wage was real; so was the diminished usefulness of the hours that followed. A kind intention had not removed the body's part in the schedule.`)
]),
s('w1005', 'Not a performance review', 'Student-services quiet room', `The quiet room contained two chairs, a water jug and no motivational posters. Nia explained that counseling appointments could be booked separately if Jonah wanted one. Today he could use the room for ten minutes or ask a practical question; neither required him to describe his entire emotional life.

Nia: Low mood isn't an assessment result. You don't have to demonstrate improvement before you're allowed support.

Jonah: I keep thinking I should have adjusted by now.

Nia: “By now” is doing a lot of work in that sentence.

She had other students to see. Jonah could take an offered next step without treating it as either a confession of failure or a promise that one appointment would solve everything.`, [
o('Book a counseling appointment and protect the time.', { stress: -6, stats: { Happiness: 3 }, flags: { counselingBooked: true, helpSeeking: true } }, `The appointment went into the same calendar as classes and work. Jonah would decide what to discuss when he arrived. Booking it did not change his grades or make the rent account positive. It added a place where those pressures did not have to be carried without conversation.`),
o('Ask for practical help stabilizing meals and sleep first.', { energy: 5, food: 3, flags: { wellbeingPlan: true }, stats: { Happiness: 2 } }, `They chose two repeatable meals and a stopping time for work messages. The plan was small enough to test. Jonah didn't need to believe it would transform his mood before he could try removing some avoidable strain.`),
o('Use the quiet room, then contact a friend for a short walk.', { stress: -4, rel: { Ben: 2 }, flags: { socialSupport: true }, stats: { Happiness: 3 } }, `Ben could manage twenty minutes between classes. They walked without requiring the conversation to become profound. Jonah returned with the same deadlines and a less complete sense of being alone inside them.`),
o('Thank Nia and choose a private rest period at home.', { energy: 5, stress: -2, flags: { privateRestChosen: true } }, `Nia gave him the appointment information in case his preference changed. He did not have to accept every offered form of help for the offer to remain valid. At home he rested without trying to turn the hour into another task he could fail.`)
]),
s('w1006', 'The smaller promise', 'Library doorway', `Maya's project had reached its own difficult milestone. Their contact had become warmer, more cautious, or simply less frequent depending on the weeks behind them. None of those histories could be erased by a particularly well-worded message tonight.

Jonah saw her leaving the library with Imani. Maya stopped long enough to ask how the research table had gone. The question was specific. It did not invite an unlimited account of the semester or imply that every previous disagreement had been resolved.

He could answer it, ask a question in return, and notice whether the conversation had room to continue. Small reliable exchanges had become more important than the dramatic version of making things right.`, [
o('Answer plainly and ask whether her recruitment revision worked.', { rel: { Maya: 3 }, flags: { listenedToMaya: true, steadyContact: true } }, `Maya described one improvement and one unresolved problem. Jonah remembered the issue about busy commuters and asked a follow-up that fit it. The conversation lasted four minutes. Its usefulness came partly from not trying to become a referendum on their entire relationship.`),
o('Offer the completed attribution record if she wants it, without pressing.', { rel: { Maya: 2 }, flags: { repairFollowthrough: true, trustRupture: false }, availability: {all:[f('correctedPublicRecord'),f('respectedSpace'),f('laterCreditKept')] } }, `Maya said she had seen the later credit note. “I noticed,” she said. “Let's keep things straightforward for a while.” Jonah agreed. The repair did not recreate an earlier version of trust exactly; it allowed a more careful version to begin growing.`, { availability: {all:[f('correctedPublicRecord'),f('respectedSpace'),f('laterCreditKept')]} }),
o('Keep the greeting friendly and preserve the distance she requested.', { rel: { Maya: 1 }, flags: { respectedSpace: true, quietFriendship: true } }, `He wished them luck with the project and continued toward the return desk. A brief conversation could end without becoming a rejection. Jonah had other work, other people and a room in which he was learning to live.`),
o('Ask why things cannot go back to normal immediately.', { rel: { Maya: -3 }, flags: { trustRupture: true, pressuredRepair: true } }, `Maya said that normal was not a place she could return to on demand. Imani waited a few steps away. Jonah let them leave, but the question had made the limits clearer: missing the old ease did not entitle him to skip the work of rebuilding it.`)
])]);
