# Verification report

Date: 2026-10-03. Environment: Node 24, system Chromium driven by Playwright, Linux. Game served at `http://127.0.0.1:8765/pof/`; the project prefix matches the intended GitHub Pages path. No production dependencies were installed into the game.

## Automated results

| Check | Result | Reproduce / evidence |
|---|---|---|
| Graph links, reachability, acyclicity, text, 2–4 choices, fallback choices, condition schema, stat effects | PASS | `npm test`; every assembled passage validated. |
| Prologue and all fifteen weeks; all eight mechanics and eleven configurations | PASS | `npm test`, `npm run inventory`. |
| Authored inventory minimums | PASS | `docs/INVENTORY.json`: 71,643 words, 450 passages, 122 events, 85 multi-turn conversations, 1,116 choices, 24 epilogues. Unique narrative block texts counted once; requirements/UI/tooling excluded. Events are original scene situations; passages include authored conversation decisions. |
| Grade boundary, completion, integrity, outcome exclusivity and consent | PASS | Unit tests distinguish 69 from 70, block dating-only academic success and verify a formal integrity finding prevents retention. |
| Diverse complete routes | PASS | Seven routes in `docs/ROUTE_RESULTS.json`; independent/social/balanced styles pass with correct assessment reasoning, can freely choose dating, and the deliberately wrong-answer route fails. |
| Seeded mixed simulation | PASS | 200 complete routes, seeds 1–200; validate state after each transition, assert bounded termination and a selected ending. Every third route deliberately gives wrong graded answers. |
| Twenty-four unique epilogue selectors | PASS | Tests verify distinct prose and reachability from constructed valid category/flag states. Not 24 full manual playthroughs. |
| Save exactness and idempotency | PASS | Introduction, midweek, pre-exam, active assessment and pre-ending roundtrips; repeat entry and stale choice/assessment calls do not grant effects. |
| Save damage and incompatible data | PASS | Invalid JSON, checksum/version failures, missing/damaged internal fields, unavailable and quota-failing storage. No silent deletion. |
| All eight assessment controls | PASS | `node tests/browser.cjs`; real input, ordering, selections and submission. Exact unfinished answers survive refresh; completed results survive refresh. |
| Double click and modal shortcuts | PASS | A double click records one decision; A does nothing during an open modal; Escape closes it. |
| Endings, archive and replay | PASS | Browser renders each category, epilogue focus works, cancel keeps place, confirmed new game preserves all three unlocks. |
| Export/import and deletion | PASS | Real downloaded JSON re-imported after confirmation, state compared excluding only save timestamp. Cancelled deletion preserves data; confirmed playthrough deletion preserves archive. |
| Recovery UI | PASS | Browser contexts inject corrupt JSON, SecurityError on localStorage access, and QuotaExceededError on writes. Recovery export remains available; play continues without uncaught errors. |
| Phone layout | PASS | Portrait 320×568, 360×740, 390×844, 430×932, four choices ≥44px, no horizontal overflow. Landscape blocks; return to portrait resumes. |
| Desktop layout | PASS | Landscape 1024×600, 1366×768, 1920×1080; portrait blocks with inert controls and retains exact passage. |
| Enlarged narrative | PASS | 36px narrative (200% of default) on 1024×600; prose scrolls independently and choices do not overflow. This is enlarged text, not a native browser zoom test. |
| Privacy, sound and runtime errors | PASS | Main-page request log contains only same-origin local assets; zero audio/video elements and zero page errors. No analytics or third-party runtime imports in source. |
| Full browser principal routes | PASS | `docs/WALKTHROUGH_RESULTS.json`: 391 / 391 / 392 decisions; zero page errors. `node tests/walkthrough.cjs` uses real choice and assessment controls through arrival → finals → each of the three star categories, comparing all final grades and choice records to the deterministic engine route. |

The logic suite contains 12 passing tests. `BROWSER_RESULTS.json` records nine passing browser groups. Screenshots under `docs/screenshots` document the rendered title, reading layouts and principal endings. The corpus meets the mandatory 65,000-word floor, not the aspirational 90,000–130,000 target.

## Visual and accessibility review

The title and mobile reading screenshots were visually inspected for hierarchy, contrast, line length and distinct fixed choices. The UI uses semantic buttons, labeled fields, a native modal dialog with focus restoration, visible keyboard focus, a polite scene live region, no timers and no drag-only interactions. CSS respects reduced-motion preferences; settings offer larger narrative text and higher contrast. Viewport metadata permits intentional zoom, interactive elements use `touch-action: manipulation`, and input text is at least 16px.

Automation exercised focus at the epilogue and modal close, keyboard shortcut blocking, orientation inertness and touch target geometry. It does not establish assistive-technology usability on every platform.

## Remaining verification limits

- Native iOS/Android physical pinch zoom, focus zoom and repeated-touch behavior require real-device verification. Chromium device emulation checked metadata/layout, not a physical gesture.
- VoiceOver/NVDA speech output, actual 200% browser zoom and full keyboard-only reading have not been manually audited. Semantic/live-region/focus code is present and relevant portions are automated.
- Full routes are scripted browser walkthroughs, not human multi-hour literary playtests. Reading time and subjective narrative pacing have not been measured with players.
- All 24 selector states are tested, but only the three principal categories receive a complete browser route.
- The public URL `https://hiyroscript.github.io/pof/` returned HTTP 404 before delivery. The repository connection cannot enable Pages administration. Enable `main / (root)` in Settings → Pages, wait for deployment, then repeat the browser suite with `GAME_URL=https://hiyroscript.github.io/pof/`. Do not treat local prefix testing as a live deployment test.

## Manual release procedure

1. Enable Pages and open the exact project URL; confirm the title and no missing assets in Network.
2. On a real phone, begin, scroll a long scene, try a rapid double tap, intentionally pinch, focus each assessment field, rotate both ways and refresh during an assessment.
3. With a screen reader and keyboard, open/close Menu, read a new scene announcement, operate every assessment, increase text and browser zoom, and verify focus remains visible.
4. Follow the three route records with human reading, checking continuity of family disclosures, money, academic feedback and consent. Explore alternative branch pairs on replay.
5. Export a save before clearing data; import it afterward, then finish a different ending and verify both archive entries remain.

No unperformed check is represented as a PASS.
