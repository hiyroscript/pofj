# Deployment record

The game is publicly available at **https://hiyroscript.github.io/pof/**.

- Game implementation commit: [`5373d4a2be68e4a7aef2c738c495269d5b2a3eea`](https://github.com/hiyroscript/pof/commit/5373d4a2be68e4a7aef2c738c495269d5b2a3eea).
- Verified source tree: `c894bfeab5ec1df0e8e39f7f5a39146ac8a7ec5f`, identical to the tested local index before publication.
- [GitHub Pages build and deployment](https://github.com/hiyroscript/pof/actions/runs/37116226814): completed, **success**.
- Public HTML: HTTP 200, expected `A Golden Semester` title.
- `GAME_URL=https://hiyroscript.github.io/pof/ node tests/browser.cjs`: all nine acceptance groups **PASS** on 2026-10-03, no runtime errors or external asset requests. This covers title/continuation, all eight mechanics, save refresh, import/export, corruption/quota/blocked storage, ending archive, desktop and phone layouts, and orientation handling.

- `GAME_URL=https://hiyroscript.github.io/pof/ node tests/walkthrough.cjs`: all three complete public-site routes **PASS**, with 391, 391 and 392 choices respectively; exact final grades and choice histories match the engine simulations, with zero page errors. Recorded in `WALKTHROUGH_RESULTS.json`.

The repository already had Pages enabled. Publishing root `index.html` resolved the prior 404 without changing its administration settings. The game uses repository-relative local assets and no build step. README documents how to enable the same deployment in a new copy.

Subsequent report-only commits record verification results; they do not change the tested game runtime. See `TEST_PLAN.md` for physical-device, assistive-technology and human reading-test limits.
