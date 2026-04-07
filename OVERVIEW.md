# AkariForge - Overview

## Project

This is my personal portfolio and developer website. It shows projects that I have made and spans from small powerful browser
extensions to automation tools. It shows my self-directed approach to how I learn and build. This site will eventually evolve into an online store where developer tools and utilities are sold.

## Stack

- **Runtime:** Node.js 20.9 or higher (currently running v24.14.0)
- **Framework:** Next.js 16 - App Router, TypeScript
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui
- **Hosting:** Netlify Free tier - upgrade when necessary
- **Version control:** GitHub
- **Payment (future):** Lemon Squeezy
- **Distribution:** GitHub Releases (free tools)

## Milestones

- [ ] Milestone 1 - Project initialisation
- [ ] Milestone 2 - Core pages and navigation
- [ ] Milestone 3 - Dynamic project pages
- [ ] Milestone 4 - Store implementation
- [ ] Milestone 5 - Pre-launch hardening (SEO, performance, accessibility)

## Conventions

- Project data lives in `lib/projects.ts` as a typed array - never hardcoded in JSX. Adding a project means adding one object to that array.
- Reusable UI components live in `components/ui`. Route-level components - pages and layouts - live in `app/`.
- All design tokens - colours, fonts, spacing - are defined in `globals.css` using Tailwind v4's `@theme` directive. Never hardcode raw values in components, and never use a separate `tailwind.config.ts`.
- All variables use intention-revealing names that describe purpose, not shape. If you cover the right side of an assignment and only read the variable name, you should be able to make a confident guess about what it holds and why. Booleans are always phrased as yes/no questions using `is`, `has`, or `can` as a prefix.
- Functions use verb + subject naming in simple present tense - `fetchProjects`, `validateEmail`, `toggleNav`.
