# Milestone 1 - Project Initialisation

## Last Session

**Date:** 2026-04-07
**Was working on:** Netlify deployment - resolved publish directory config via netlify.toml
**Stopped because:** Milestone 1 complete
**Next immediate step:** Create milestone-2 file and begin core pages and navigation
**Open question / gotcha:**

---

## Goal

Initialise the AkariForge project as a working Next.js 16 application with TypeScript, Tailwind CSS v4, and the correct folder structure in place. When this milestone is complete, the local development server runs without errors, the project structure matches the conventions documented in OVERVIEW.md, and the codebase is ready for core pages to be built in Milestone 2.

## Sections

### 1. Initialise the Next.js project

- [x] Verify Node version
- [x] Run `create-next-app` with TypeScript, Tailwind CSS, ESLint, and App Router
- [x] Verify the dev server runs on `http://localhost:3000`
- [x] Confirm the generated folder structure matches the conventions in OVERVIEW.md
- [x] Remove boilerplate content from `app/page.tsx`

### 2. Establish project structure

- [x] Confirm routing structure matches the plan:
  - [x] `/` Homepage (hero, project cards, about strip)
  - [x] `/work` -> Full project index
  - [x] `/work/[slug]` -> individual project detail page (dynamic route)
  - [x] `/about` -> About page
  - [x] `/store` -> Placeholder only - not built in this milestone
- [x] Confirm folder structure matches conventions:
  - [x] `app/` for route-level components and layouts
  - [x] `components/nav/` and `components/footer/` for site-wide layout pieces
  - [x] `components/ui/` for reusable UI elements
  - [x] `lib/projects.ts` for project data
  - [x] `lib/types.ts` for shared TypeScript types
  - [x] `public/` for static assets

### 3. Configure the design system

- [x] Add `.vscode/settings.json` to disable VS Code's built-in CSS validator (conflicts with Tailwind v4's `@theme` directive)
- [x] Define colour tokens in `globals.css` using the `@theme` directive
  - [x] Amber accent: `#e8a030` (dark mode), `#b07010` (light mode)
  - [x] Dark background: `#0d0d0f`
  - [x] Light background: `#f4f1eb`
- [x] Add Fraunces and JetBrains Mono via Google Fonts in `app/layout.tsx`
- [x] Define font tokens in `global.css` under `@theme`

### 4. Configure project tooling

- [x] Confirm Prettier is active with `formatOnSave` and 2-space indentation
- [x] Confirm ESLint is working (`npm run lint` returns no errors)
- [x] Push the initialised project to GitHub
- [x] Confirm Netlify deployment connects to the GitHub repo and deploys successfully

## Definition of Done

- [x] `npm run dev` starts without errors and the app is visible at `http://localhost:3000`
- [x] `npm run lint` returns no errors
- [x] Folder structure matches the conventions documented in `OVERVIEW.md`
- [x] Design tokens are defined in `globals.css` under `@theme` - no hardcoded colour or font values anywhere
- [x] Fraunces and JetBrains Mono are loading correctly on the browser
- [x] Project is pushed to GitHub and the Netlify deployment succeeds
