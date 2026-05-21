# TECH_DEBT.md
> Tracked technical debt for the Yatin Kande Portfolio.
> Last updated: 2026-05-21

---

## TD-01 — ~8 orphaned components never rendered
- **Files:** `components/ConsoleLog.tsx`, `components/InsightTicker.tsx`, `components/LoadingStatus.tsx`, `components/TypewriterQuote.tsx`, `components/SkillWheel.tsx`, `components/ComprehensiveSkills.tsx`, `components/Footer.tsx`, `components/ui/Background.tsx`
- **Impact:** Pollutes the component tree, increases bundle size, confuses future devs.
- **Action:** Audit each — either wire into a page or delete. The footer in particular is suspicious since `page.tsx` has an inline footer instead of using this component.
- **Priority:** Low (no runtime impact, cleanup only)

---

## TD-02 — /analytics and /dashboard pages built but unreachable
- **Files:** `app/analytics/page.tsx`, `app/dashboard/page.tsx`
- **Impact:** Significant effort already invested in these pages (KPI tiles, NeuralBackground canvas, CareerTimeline, ProgressChart). Currently wasted.
- **Action options:**
  - Option A: Add `/dashboard` as a secret/easter-egg route linked from the footer or a keyboard shortcut
  - Option B: Wire `/analytics` into the Navbar as a public portfolio metrics page (interesting differentiator)
  - Option C: Delete both if not planned for use
- **Priority:** Medium — decision needed

---

## TD-03 — Skills.tsx duplicates skill data; doesn't consume lib/data.ts
- **File:** `components/Skills.tsx:15-86`
- **Impact:** Updating skills requires editing two places. Already diverged — `lib/data.ts` has 8 categories with 40+ individual skills; `Skills.tsx` has 7 categories with bullet strings.
- **Action:** Either refactor `Skills.tsx` to consume `lib/data.ts skills`, or accept the current split (the visual formats are genuinely different — data.ts has numeric levels, Skills.tsx has prose strings).
- **Priority:** Low (acceptable divergence given the different formats)

---

## TD-04 — aboutPageContent in lib/data.ts is a dead export
- **File:** `lib/data.ts:403-442`
- **Impact:** Exported but never imported. `About.tsx` uses hardcoded paragraph text instead.
- **Action:** Either delete `aboutPageContent` or refactor `About.tsx` to consume it.
- **Priority:** Low

---

## TD-05 — project-backgrounds/ directory at project root not served
- **File:** `project-backgrounds/` (root level, not `/public`)
- **Impact:** 9 PNG images that are not accessible to the Next.js server. Possibly duplicates of `/public/projects/`.
- **Action:** Compare with `/public/projects/`, delete duplicates. Static assets must be in `/public/` to be served.
- **Priority:** Low

---

## TD-06 — No SEO metadata beyond title/description
- **File:** `app/layout.tsx:5-8`
- **Impact:** No favicon (shows browser default), no Open Graph image (link previews are blank), no Twitter Card. Critical for a portfolio — every time a recruiter shares your URL on LinkedIn/Slack, they see no preview.
- **Action:**
  1. Add `/public/favicon.ico` and `/public/favicon.svg`
  2. Add `/public/og-image.png` (1200×630)
  3. Expand `metadata` in `layout.tsx` with `openGraph`, `twitter`, `icons` fields
- **Priority:** High (direct impact on job search effectiveness)

---

## TD-07 — Resume PDF exists but has no download link
- **File:** `public/Yatin_Kande_Resume.pdf`
- **Impact:** A key recruiter action (downloading the resume) is completely hidden. The PDF is in /public and is technically accessible at `/Yatin_Kande_Resume.pdf` but no button or link exists anywhere on the site.
- **Action:** Add a "Download Resume" button in the Hero section and/or Navbar.
- **Priority:** High (direct impact on job search effectiveness)

---

## TD-08 — ProjectModal has no keyboard accessibility
- **File:** `components/ProjectModal.tsx`
- **Impact:** Keyboard-only and screen reader users cannot close the modal with Escape or Tab through it properly. No focus trap means Tab sends focus outside the modal overlay.
- **Action:** Add `useEffect` for Escape key listener + a focus trap library or manual `tabIndex` management. Add `role="dialog"` and `aria-modal="true"`.
- **Priority:** Medium

---

## TD-09 — Mobile navigation is broken
- **File:** `components/Navbar.tsx:93-99`
- **Impact:** On mobile (< md breakpoint), the nav links are hidden and the hamburger button has no behavior. The entire navigation is inaccessible on mobile.
- **Action:** Implement mobile drawer (see BUG-01).
- **Priority:** High

---

## TD-10 — `any` types in Projects.tsx and ProjectModal.tsx
- **File:** `components/Projects.tsx:21`, `components/ProjectModal.tsx:7`, `app/projects/page.tsx:14`
- **Impact:** No type safety on project data. Typos in property names fail silently at runtime.
- **Action:** Export a `Project` type from `lib/data.ts` and replace all `any` usages.
  ```ts
  // lib/data.ts — add this
  export type Project = typeof projects[number];
  ```
- **Priority:** Low (no runtime impact, DX improvement only)
