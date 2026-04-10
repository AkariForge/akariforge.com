# Milestone 2 - Core pages and navigation

## Last Session

**Date:** 2026-04-10
**Was working on:** Section 1. Shared layout
**Stopped because:** Completed Section 1
**Next immediate step:** Start section 2 by deciding all the fields on the project type
**Open question / gotcha:**

---

## Goal

Build all core pages and shared layout components so the site is fully navigable and content-complete. When this milestone is done, every route in the routing structure returns a real page, the `nav` and `footer` are present on all of them, and project data is driven by `lib/projects.ts` - not a single piece of content is hardcoded in `JSX`.

## Sections

### 1. Shared layout (Nav + footer)

- [x] Create `components/nav/Nav.tsx` with site links and theme toggle
- [x] Create `components/footer/Footer.tsx`
- [x] Wire both into `app/layout.tsx` around `{children}`
- [x] Wrap `{children}` in `<main className="flex-1">` so footer sticks to bottom on short pages

### 2. Project data layer

- [x] Decide and document all fields an the Project type (`slug`, `title`, `category`, `description`, `status`, `tags`, `links`, etc.)
- [x] Define the Project type in `lib/types.ts`
- [x] Define the `ProjectStatus` union type (e.g. `"active"` | `"available"` | `"in-development"`)
- [x] Populate `lib/projects.ts` with the three real projects: `ContextLoop`, `USB Deploy Suite`, `Dev ToolBox`
- [x] Verify each project object satisfies the type with no TypeScript errors

### 3. Homepage

- [ ] Build hero section
- [ ] Build project grid driven by `lib/projects.ts`
- [ ] Build about strip

### 4. /work page

- [ ] Build page header with title and project count
- [ ] Build project list layout (one item per row, more detail that the homepage card)
- [ ] Render all projects from `lib/projects.ts`
- [ ] Show category, status badge, and stack tags per project

### 5. /about page

- [ ] Build header block (name, role, availability status, location)
- [ ] Build experience timeline from static data
- [ ] Build education timeline from static data
- [ ] Build contact links footer (email, GitHub, LinkedIn)

### 6. /store placeholder

- [ ] Build store placeholder with a clear heading and one-line description of what's coming
- [ ] Add an email capture or a "notify me" prompt so earlt visitors aren't just hitting a dead end

## Definition of Done

- [ ] Nav renders on every page with working links and the theme toggle
- [ ] Footer renders on every page
- [ ] `lib/types.ts` defines the Project type
- [ ] `lib/projects.ts` contains at least three project entries
- [ ] `/` renders hero, project grid from data, and about strip
- [ ] `/work` renderes a full project list from data
- [ ] `/about` renders the about page
- [ ] `/store` renders a placeholder page
- [ ] `npm run lint` returns no errors
- [ ] Netlify deployment succeeds with all routes
