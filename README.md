# Internship Task 2 — Strict Tech Stack Implementation

## Stack
- Templating engine: **Nunjucks**
- Bundler / Task runner: **Vite**

## Folder structure
(see repository root for the exact structure)

## How to install & run
1. `npm install`
2. For development: `npm run dev` (open http://localhost:5173 and edit `src/`).
3. To build production: `npm run build` — final files are in `dist/`.
4. To preview built site: `npm run preview`.

## How the build works
- `build/render.js` renders `src/templates/pages/*.njk` to `dist/*.html` using `data.json`.
- `vite build` bundles JS/CSS into `dist/assets` and preserves `dist/` as final deployable site.

## Personalization
- Edit `src/templates/data.json` to replace the content with exact content from Task 1.
- Use `src/assets/css/style.css` to match the exact styling and emoji positions from Task 1.

## Repo & hosting notes
- Create a separate Git repo for this task (do *not* club tasks).
- Deploy `dist/` to GitHub Pages / Netlify / Vercel.
- For GitHub Pages, create a `gh-pages` branch or use Pages from `dist/` (see steps in the README section below).

## Author
GS Keerthana
