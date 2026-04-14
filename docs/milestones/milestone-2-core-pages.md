# Milestone 2 - Core pages and navigation

## Last Session

**Date:** 2026-04-14
**Was working on:** Section 5 - /about page
**Stopped because:** Section 5 complete. Moving to Section 6 - /store placeholder.
**Next immediate step:** Build /store placeholder page with heading, description, and email capture or notify prompt.
**Open question / gotcha:** None.

---

## Goal

Build all core pages and shared layout components so the site is fully navigable and content-complete. When this milestone is done, every route in the routing structure returns a real page, the `nav` and `footer` are present on all of them, and project data is driven by `lib/projects.ts` - not a single piece of content is hardcoded in `JSX`.

## Sections

### 1. Shared layout (Nav + footer)

- [x] Create `components/nav/Nav.tsx` with site links and theme toggle
- [x] Create `components/footer/Footer.tsx`
- [x] Wire both into `app/layout.tsx` around `{children}`
- [x] Wrap `{children}` in `<main className="flex-1">` so footer sticks to bottom on short pages
- [x] Migrate all components from Tailwind CSS v4 to CSS Modules (`Nav.module.css`, `ThemeToggle.module.css`, `Footer.module.css`, `Button.module.css`, `page.module.css`)

### 2. Project data layer

- [x] Decide and document all fields an the Project type (`slug`, `title`, `category`, `description`, `status`, `tags`, `links`, etc.)
- [x] Define the Project type in `lib/types.ts`
- [x] Define the `ProjectStatus` union type (e.g. `"active"` | `"available"` | `"in-development"`)
- [x] Populate `lib/projects.ts` with the three real projects: `ContextLoop`, `USB Deploy Suite`, `Dev ToolBox`
- [x] Verify each project object satisfies the type with no TypeScript errors

### 3. Homepage

- [x] Build hero section
- [x] Build project grid driven by `lib/projects.ts`
- [x] Build about strip

### 4. /work page

- [x] Build page header with title and project count
- [x] Build `ProjectRow` component in `components/ui/`
- [x] Build project list layout (one item per row, more detail than the homepage card)
- [x] Render all projects from `lib/projects.ts`
- [x] Show category, status badge, and stack tags per project

**Architectural decision - use a separate ProjectRow component**
The /work page uses a horizontal list layout that is structurally different
from the vertical grid card on the homepage. A `layout` prop on `ProjectCard`
was considered and rejected - it would give one component two reasons to
change, violating the Single Responsibility Principle. The correct approach
is a separate `ProjectRow` component in `components/ui/` that accepts the
same `project: Project` prop but renders a layout optimised for the list
view. Presentation duplication across two components is acceptable; logic
duplication is not. Both components pull from the same `lib/projects.ts`
source of truth.

### 5. /about page

**Types (`lib/types.ts`)**

- [x] Add `TimelineEntry` type with fields: `period`, `title`, `organisation`, `description`, and optional `badge`
- [x] Add `ContactLink` type with fields: `label`, `href`, and `icon`

**Data (`lib/about.ts`)**

- [x] Export `isAvailableForWork` boolean
- [x] Export `experience` array typed as `TimelineEntry[]`
- [x] Export `education` array typed as `TimelineEntry[]`
- [x] Export `contactLinks` array typed as `ContactLink[]`

**Page (`app/about/`)**

- [x] Create `page.tsx` skeleton and co-located `about.module.css`
- [x] Build header block consuming `isAvailableForWork`
- [x] Build experience timeline consuming `experience`
- [x] Build education timeline consuming `education`
- [x] Build contact links section consuming `contactLinks`

### 6. /store placeholder

- [ ] Build store placeholder with a clear heading and one-line description of what's coming
- [ ] Add an email capture or a "notify me" prompt so earlt visitors aren't just hitting a dead end

## Definition of Done

- [ ] Nav renders on every page with working links and the theme toggle
- [ ] Footer renders on every page
- [x] `lib/types.ts` defines the Project type
- [x] `lib/projects.ts` contains at least three project entries
- [x] `/` renders hero, project grid from data, and about strip
- [x] `/work` renderes a full project list from data
- [ ] `/about` renders the about page
- [ ] `/store` renders a placeholder page
- [ ] `npm run lint` returns no errors
- [ ] Netlify deployment succeeds with all routes
