# Copilot / AI agent instructions — U CAN FIRE

This repository is a small, static website (HTML/CSS/vanilla JS). The goal
of this file is to give AI coding agents the minimal, concrete context
they need to be productive in this codebase.

Key facts
- Type: Static site — no build system, no package manager. Serve files from
  project root (open `index.html` in browser or run `python3 -m http.server`).
- Entry points: `index.html` (marketing), `start.html` (questionnaire),
  and `stages/stage{1..6}.html` (content pages).
- Core logic: `js/main.js` — the entire questionnaire flow lives here.

Important files to inspect
- `start.html` — contains DOM IDs relied on by `js/main.js`: `question-container`,
  `question-text`, `yes-button`, `no-button`, `result-container`.
- `js/main.js` — questions are defined as an array of objects. Each item
  has `text`, and either `yes/no` branches with `next` (question index) or
  `stage: { id, name }`. Example flow: `showResult` links to
  `stages/stage${stage.id}.html`.
- `stages/stageN.html` — static stage content. New stages must follow the
  naming convention `stage<id>.html` and use relative paths to `../css/styles.css`.
- `css/styles.css` — global styles, theme variable `--accent-color`, and
  styling conventions (classes `btn` and `primary-btn`).

Project-specific conventions and patterns
- Vanilla JS only: avoid introducing a bundler unless requested. Changes
  should work by editing files and refreshing the browser.
- Questions formatting: `js/main.js` stores question text with `\n` newlines;
  `showCurrentQuestion()` replaces `\n` with `<br>` — preserve that behavior.
- Stage navigation: `showResult()` constructs the link `stages/stage${id}.html`.
  Keep stage IDs numeric and page filenames consistent.
- Button classes: use `btn` for base and `primary-btn` for primary actions.
- Responsive layout: follow the CSS in `css/styles.css` and prefer modifying
  existing classes over adding inline styles when possible.

Developer workflows and quick checks
- Local preview: from project root run:

  ```bash
  python3 -m http.server 8000
  # then open http://localhost:8000/start.html
  ```

- To test questionnaire changes: edit `js/main.js`, then open `start.html`.
- To add a stage: create `stages/stageN.html` using the existing stage pages
  as templates, and ensure any `stage.id` referenced in `js/main.js` matches.

What to change cautiously
- Path references: pages under `stages/` use `../` relative links; verify
  paths when moving files.
- IDs in `start.html`: do not rename `question-text`, `yes-button`, `no-button`,
  `question-container`, `result-container` without updating `js/main.js`.
- Styling conventions: prefer CSS variables and classes over inline styles.

If you need more info
- If a requested change requires adding a build step, ask the maintainer
  before introducing tooling (this is a small static site by intent).
- Ask the repo owner if there are additional assets or unpublished docs.

Thanks — please return a short summary of any structural changes you make
and a quick smoke test (which page to open and what to click).
