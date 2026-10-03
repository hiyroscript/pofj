# A Golden Semester

**Every choice has a semester behind it.**

**[Play A Golden Semester](https://hiyroscript.github.io/pof/)**

A complete, text-first interactive novel about Jonah Reed’s conditional first semester at Bellwether College. Read fifteen weeks of academic pressure, work, friendship, family conversations and a possible consensual romance with Maya Park. Choices persist; assessments require actual answers; passing without dating is a successful academic ending.

The game uses vanilla HTML, CSS and JavaScript. No build step, account, backend, external fonts, tracking, audio or runtime dependencies. The original requirements in [`max`](max) are unchanged.

## Play locally

From this directory:

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000/>. ES modules need HTTP; double-clicking `index.html` as a local file is not supported. Use a landscape desktop window or portrait phone. Read with touch, mouse or keyboard; A–D / 1–4 choose, arrows move among choices, Enter activates, Escape closes a panel. Assessments have no timers. Course notes are available from Menu.

## Deploy to GitHub Pages

1. Put these files on the repository’s `main` branch, with `index.html` at its root.
2. Open **Settings → Pages → Build and deployment**.
3. Choose **Deploy from a branch**.
4. Select **main** and **/ (root)**, then **Save**.
5. Wait for GitHub’s Pages deployment to finish, then open **https://hiyroscript.github.io/pof/**.

All assets use relative paths and `.nojekyll` is included. Nothing needs to be built or installed for deployment. If the URL returns 404, check that Pages is enabled, the selected branch contains `index.html`, and the Pages build succeeded. The repository connection used to implement this game cannot change Pages administration settings; deployment must be enabled there if it is not already enabled.

The game is deployed at the public URL above. GitHub’s Pages build succeeded, and all nine browser acceptance groups passed against that exact HTTPS project path on 2026-10-03. See the dated [test report](docs/TEST_PLAN.md) and [deployment record](docs/DEPLOYMENT.md).

## Content and outcomes

The measured corpus contains **71,643 unique substantive narrative words**, **450 narrative passages**, **122 events**, **85 conversations with at least four dialogue turns**, **1,116 choices**, **eight minigame mechanics** across eleven configurations, and **24 authored epilogues**. These are whole-corpus counts, not words or scenes encountered in one playthrough. The 65,000-word acceptance floor is met; the aspirational 90,000–130,000-word target is not. A route has roughly 390 decisions; reading time varies and no human playtime study has been conducted.

The mechanics are exams, note ordering, revision, weekly scheduling, budgeting, team negotiation, evidence matching and a multi-round presentation defense. Grades weight quizzes 15%, assignments 25%, project 20%, midterm 15% and final 25%. Retention requires at least 70 overall, completed core work and no disqualifying integrity finding. One star means academic dismissal; two means passing without dating; three additionally requires mutual interest and an explicit voluntary dating agreement. Friendship and independence are viable choices.

The four attributes are Intelligence, Charisma, Looks and Happiness. Finite choices affect them and practical resources. Uncertain approaches use relevant attributes, preparation, energy and stress; actual assessment answers determine grades. No attribute roll determines another person’s consent.

## Saves and privacy

Every choice and assessment input saves locally, including unfinished answers, current passage, flags and random seed. Refreshing does not reroll outcomes or repeat rewards. Menu offers export, validated import, a reading journal, settings and separately confirmed deletion. Starting another semester preserves the ending archive.

Saves are specific to this browser and origin. Clearing browser data removes them; export a copy to move devices. Blocked or full storage shows a visible warning while play remains possible. Damaged saves are retained and can be exported before starting again. The checksum detects accidental damage, not deliberate editing. This is the first released save schema; incompatible versions are rejected with an explanation.

All story data loads with the local modules. Once loaded, gameplay makes no external requests. Offline reload is not guaranteed: there is no service worker or installable app cache.

## Development and verification

Node 22+ is sufficient for the dependency-free logic tests:

```sh
npm test
npm run inventory
node tools/reference.js
```

Browser tests require Playwright and Chromium as development tools only. With Playwright available in Node’s module search path and an installed Chromium:

```sh
# Serve the parent directory so the game has its real /pof/ project prefix.
python3 -m http.server 8765 --directory ..
# In another terminal:
CHROMIUM_PATH=/usr/bin/chromium node tests/browser.cjs
CHROMIUM_PATH=/usr/bin/chromium node tests/walkthrough.cjs
```

Override `GAME_URL` if needed. The walkthrough test clicks through all three principal routes and takes several minutes because it respects the same double-activation guard as players. Reports and screenshots are written under `docs/`.

- [Story bible and authoring conventions](docs/STORY_BIBLE.md)
- [Generated event graph and ending selectors](docs/STORY_GRAPH.md)
- [Persistent branch reference](docs/BRANCHES.md)
- [State, save and scoring schema](docs/STATE_SCHEMA.md)
- [Test report and verification limits](docs/TEST_PLAN.md)
- [Measured inventory](docs/INVENTORY.json)

Narrative events live in `data/chapters`, optional follow-ups in `data/branches`, extended dialogue in `data/conversations`, and intermediate authored decisions in `data/decisions`. `data/story.js` assembles the static graph. `tools/plan-pages.js` and `tools/compile-pages.js` are optional authoring tools; the compiled decision data ships with the game. They do not generate narrative prose at runtime. After changing paragraph boundaries, regenerate the page plan, adjust the authored decision rows, compile, and run graph validation. Stable scene IDs are part of the save contract.
