# Story bible

## Setting and viewpoint

Alderport is a fictional city; Bellwether College is an elite fictional institution. Jonah Reed, nineteen, lives alone above a convenience shop. His parents have paid initial tuition and four weeks of rent from limited savings. His foundation-semester placement is conditional: the retention threshold, assessed components, warnings and appeal process are introduced before the final decision.

The viewpoint is close third person, centered on Jonah’s observations and fallible interpretations. Emotion comes from specific actions, conversations and remembered details. Academic failure is an institutional outcome, not a measure of human worth. Support does not erase consequences. Passing without romance is a full success; no character owes romance for academic effort.

## Cast

| Character | Role and continuing concerns |
|---|---|
| Jonah Reed, 19 | Protagonist; learns to distinguish recognizing an explanation from being able to produce one. |
| Maya Park, 19 | Willing peer mentor with her own research, family commitments, friendships and boundaries. A potential relationship requires mutual interest and agreement after the tutoring arrangement. |
| Professor Hart | Demanding instructor; offers office hours, explicit assessment standards and documented correction opportunities. |
| Ms. Evans | Academic adviser; explains conditional retention, aid, recovery and next steps. |
| Ben | Friend and teammate working on public speaking; needs participation in decisions, not rescue. |
| Sofia | Analytical teammate; cares about accurate evidence, contribution and credit. |
| Nia | Practical support and routines; helps separate workable plans from aspirational schedules. |
| Luca | Café supervisor; wages, rotas and availability have concrete limits. |
| Mum and Dad | Financially stretched parents whose concern is affected by the accuracy of Jonah’s updates. |
| Priya | Commuter teammate; bus times affect participation and handoffs. |
| Daniel | Peer with visual communication skills; legibility and attribution matter. |
| Tessa | Student newspaper contact; consent, privacy and public correction affect shared work. |
| Imani | Maya’s research collaborator; part of Maya’s life beyond Jonah. |
| Mrs. Vale | Landlady; rent and payment arrangements persist beyond a single conversation. |

## Semester arc

Arrival establishes the family’s sacrifice, the apartment and Jonah’s isolation. Weeks 1–3 introduce demanding coursework, initial weak marks, warnings and the optional mentoring arrangement. Weeks 4–6 build study methods, food/work constraints, rent, negotiated group roles and the first substantial integrity choices. Week 7 assesses learning in a standard or alternate midterm.

Weeks 8–10 open social life beyond tutorials while earlier choices create pressure: source corrections, privacy, credit, relationship boundaries and the second budget. Weeks 11–12 offer revision, rehearsal, family disclosure and conversations that acknowledge accumulated trust or damage. Week 13 separates interest from obligation. Week 14 completes recovery, formal integrity review, defense and finals. Week 15 states the academic result, family response and voluntary relationship decision before a route-selected epilogue.

## Authoring contract

`data/helpers.js` provides paragraph and dialogue blocks, scenes, choices, variants and chapter metadata. A dialogue block names its speaker. Each choice has a stable ID, label, effects, authored response and valid target; uncertain choices also supply failure prose and effects. Conditions are declarative, not evaluated code.

Each event has a primary commitment or assessment. Longer events are divided at authored paragraph boundaries, with two authored decisions between passages. Original event IDs remain the final commitment; `~1`, `~2`, etc. name preceding passages. Incoming edges point to the first passage. Every paragraph appears once in the assembled event. The 450-passage count includes these reading passages, not 450 separate situations; there are 122 distinct events.

Decisions must fit what has just been read, produce distinct immediate responses and change persistent state. Larger commitments carry named flags into conditional dialogue, alternate events, academic records or epilogues. Shared milestones may rejoin only with the established state intact. The graph has no replay loop, so resources cannot be farmed.

Use the generated graph reference to inspect actual routing. Do not change stable IDs or grading semantics in a released edition without an explicit save migration/version decision. No migrations are needed for this first release; unsupported versions fail safely.
