# Milestone 3 - Dynamic project pages

## Last Session

**Date:** 2026-04-20
**Was working on:** Planning milestone 3
**Stopped because:** Milestone file creation
**Next immediate step:** Add `getProjectBySlug` to `lib/projects.ts`
**Open question / gotcha:** Image paths in `projects.ts` cannot be populated until screenshots are ready. The type and folder structure are in place - defer data population until files exist.

---

## Goal

Build the `/work/[slug]` dynamic route so every project in `lib/projects.ts` has a fully rendered, statically generated detail page. When this milestone is done, each project is reachable at its own URL, has correct page metadata for SEO and social sharing, handles invalid slugs gracefully, and renders all available project data in a logical hierarchy.

## Sections

### 1. Data layer

- [ ] Add `getProjectBySlug(slug: string): Project | undefined` to `lib/projects.ts`
- [ ] Populate `longDescription` and `features` on all three projects in `lib/projects.ts`
- [ ] Populate `images` paths on all three projects once screenshots are ready

### 2. Routing and error handling

- [ ] Create `app/not-found.tsx` - global fallback for all unmatched routes
- [ ] Create `app/work/[slug]/page.tsx` skeleton with `generateStaticParams` pulling from `lib/projects.ts`
- [ ] Add `generateMetadata` to `app/work/[slug]/page.tsx` - sets `title`, `description`, and `og:image` per project
- [ ] Add `notFound()` call when `getProjectBySlug` returns `undefined`

### 3. Components

- [ ] Create `components/ui/FeatureList.tsx` accepting `features: ProjectFeature[]`
- [ ] Create co-located `components/ui/FeatureList.module.css`

### 4. Page sections

All rendered inside `app/work/[slug]/page.tsx`:

- [ ] Header block - title, category, status, primary links (GitHub, download, purchase)
- [ ] Description block - renders `longDescription` with `shortDescription` as fallback
- [ ] Features block - rendered via `FeatureList`
- [ ] Stack block - technology tags
- [ ] Images block - screenshot gallery, only rendered when `images` is populated

### 5. Styles

- [ ] Create `app/work/[slug]/project.module.css`

## Definition of Done

- [ ] `/work/contextloop`, `/work/usbdeploysuite`, and `/work/devtoolbox` each render a complete detail page
- [ ] `/work/a-nonexistent-slug` renders `not-found.tsx` and not a runtime error
- [ ] `generateMetadata` sets a unique `title` and `description` per project
- [ ] `og:image` is set for any project where `ogImage` is populated
- [ ] `FeatureList` renders both label-only and label-with-description feature entries correctly
- [ ] Populate `images` paths on all three projects once screenshots are ready
- [ ] Capture and export screenshots at a consistent resolution to `public/images/projects/[slug]/`
- [ ] `npm run lint` returns no errors
- [ ] Netlify deployment succeeds with all three project routes
