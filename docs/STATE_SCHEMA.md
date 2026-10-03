# State and save schema

Source of truth: `js/state.js`, `js/engine.js`, `js/minigames.js`, `js/save.js`. Schema version **1**, story edition **1.0.0**.

| Field | Meaning |
|---|---|
| `currentNodeId`, `mode` | Exact passage and PLAYING / MINIGAME / ENDING mode. TITLE, PAUSED and ORIENTATION_BLOCKED are derived UI modes; they do not replace the saved underlying scene. |
| `stats` | Intelligence, Charisma, Looks, Happiness; each 0–100. Initial values 34, 29, 43, 28. |
| `cash`, `food`, `energy`, `stress` | Initially $185, five food days, 64 energy, 58 stress. Negative cash represents an outstanding ledger shortfall. Food 0–30; energy/stress 0–100. |
| `week`, `day`, `timeSlot` | Calendar attached to the current event; weeks 0–15. A new week consumes five food days after week one. |
| `grades` | Quiz/assignment start at 54; project, midterm and final are null until assessed. Values 0–100. |
| `completed` | Required-work completion flags, including project, research, midterm and final. |
| `prep`, `attendance` | Preparation and attendance records bounded 0–100. Attendance increments on first entry to an academic event, not each paragraph. |
| `flags` | Named route facts, booleans, numbers or strings; `schedule` and `teamRoles` are structured records. `debt` derives from the cash shortfall. |
| `relationships` | Maya, affection, Ben, Sofia, Hart, bounded −30 to 60. High trust alone never grants dating. |
| `seed` | Unsigned 32-bit persistent pseudo-random state. |
| `pending` | Null, or `{nodeId, answers, step}` for the active assessment, saved after each input and page change. |
| `challenges` | Results keyed by event ID; points, total, grade, feedback, applied effects and submitted answers. |
| `choiceHistory` | Ordered `{nodeId, choiceId, success, probability, roll}` records; used for ending summaries and audit. |
| `journal`, `entered` | Passage IDs already seen; `entered` prevents repeat entry effects. |
| `lastOutcome` | Exact previous choice response and optional explanation. |
| `ending` | Selected epilogue ID after the ending is rendered. |
| `settings` | Narrative text size 16–30px, reduced motion, higher contrast and check explanations. |
| `updatedAt` | ISO timestamp for most recent save attempt; may change on visibility/page-hide events without changing gameplay. |

## Transactions and randomness

A choice is accepted only in PLAYING mode, at its expected passage, and while available. The engine resolves an optional check once, applies effects, records the result and enters the target. The UI saves synchronously afterward. Both stale-node checking and a 420ms UI activation guard prevent accidental duplicate choices.

The seeded generator is `seed = (1664525 × seed + 1013904223) mod 2^32`. A check uses weighted relevant attributes, preparation, any named bonus, low-energy and high-stress penalties; probability is clamped to 10–95%. All inputs and the selected outcome persist. Consent and examination answers are never randomized.

Entering a previously visited passage does not reapply effects. An assessment can submit only once and only with valid complete answers. Completed results replace pending input. Menu access and orientation changes preserve the active scene; rotation makes game and dialog controls inert.

## Grade and outcome calculation

Weights are quizzes .15, assignments .25, project .20, midterm .15, final .25. Interim averages normalize the weights of assessed components; the final average uses every component and rounds to two decimals. Passing requires average ≥70, completed project/research/midterm/final and no `disqualified` finding.

Most graded assessments use `35 + 0.6 × answerPercent + min(5, 0.3 × prep) − max(0,25−energy) × .12`, rounded and clamped 0–100. Correct reasoning dominates the result. Revision replaces the assignment component. Negotiation establishes the project grade; the defense averages it with the defense grade. Published recovery and integrity choices can modify components. No display-only point awards determine retention.

One star: fails the academic rule. Two stars: passes without the full dating gate. Three stars: passes, Maya trust ≥12, boundaries respected, mutual interest, listened to Maya, feelings discussed, no refusal or unresolved trust rupture, and explicit dating agreement. Week 13 records Maya’s answer; Week 15 permits an explicit yes only after the requirements are satisfied. Each category has eight prioritized epilogues.

## Storage envelope and recovery

`golden-semester/save/v1` stores `{format:'golden-semester', checksum, payload}`. Payload is the serialized state. Checksum is FNV-1a over its JavaScript character units; this detects accidental corruption and is not cryptographic authentication. Import has a 2MB limit and validates versions, scene IDs, ranges, settings, history and pending-assessment structure before asking to replace the current playthrough.

`golden-semester/archive/v1` is an independent array of `{id,rating,title,at}`. Unlocks deduplicate by epilogue ID. New Game replaces only the playthrough. Separate explicit delete controls target the playthrough or archive.

All localStorage access is guarded. Failure keeps the in-memory game playable and exposes an export warning. Invalid saves remain untouched until the player confirms replacement or deletion. The title offers a raw recovery export when unreadable data is available. Version mismatches are explained; there is no silently attempted migration from a nonexistent earlier release.
