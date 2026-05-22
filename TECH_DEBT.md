# TECH_DEBT.md
> Tracked technical debt for the Yatin Kande Portfolio.
> Last updated: 2026-05-21

---

## ACTIVE DEBT

### TD-01 — Skills.tsx duplicates skill data; doesn't consume lib/data.ts
- **File:** `components/Skills.tsx`
- **Impact:** Updating skills requires editing two places. lib/data.ts has numeric levels; Skills.tsx has its own typed SkillItem[] array with Expert/Proficient/Familiar. Different formats, but still a source-of-truth split.
- **Action:** Accept current divergence (formats genuinely differ) or refactor lib/data.ts skills to match the new proficiency tier system.
- **Priority:** Low

---

### TD-02 — aboutPageContent in lib/data.ts is a dead export
- **File:** `lib/data.ts:403–462`
- **Impact:** Exported but never imported. About.tsx uses hardcoded content.
- **Action:** Delete it or refactor About.tsx to consume it.
- **Priority:** Low

---

### TD-03 — /analytics page built but unreachable
- **File:** `app/analytics/page.tsx`
- **Impact:** KPI tiles, ProgressChart, CareerTimeline fully built. Not linked in nav.
- **Action:** Wire into nav or delete. `/dashboard` is now linked from footer.
- **Priority:** Medium

---

### TD-04 — project-backgrounds/ directory at project root not served
- **File:** `project-backgrounds/` (root, not /public)
- **Impact:** 9 PNG images not accessible to Next.js. Possibly duplicates of `/public/projects/`.
- **Action:** Compare with `/public/projects/`, delete duplicates.
- **Priority:** Low

---

### TD-05 — ProjectModal has no keyboard focus trap
- **File:** `components/ProjectModal.tsx`
- **Impact:** Tab loops outside the modal. No `role="dialog"` or `aria-modal`.
- **Action:** Add Escape key handler + focus trap + ARIA roles.
- **Priority:** Medium

---

## RESOLVED DEBT

### [2026-05-21] TD-R06 — No SEO metadata
- **Fix:** Full OG tags, Twitter card, favicon (app/icon.tsx), OG image (app/opengraph-image.tsx), metadataBase in layout.tsx. Commit `81cfc59`.

### [2026-05-21] TD-R07 — Resume PDF no download link
- **Fix:** Resume download button in Hero CTA row + Navbar desktop pill + mobile drawer. Commit `81cfc59`.

### [2026-05-21] TD-R08 — Mobile navigation broken
- **Fix:** Full AnimatePresence mobile drawer with nav links + resume button. Commit `81cfc59`.

### [2026-05-21] TD-R09 — `any` types throughout Projects/ProjectModal
- **Fix:** Exported `Project` and `TechDetail` types from lib/data.ts. All `any` replaced with proper types. Commit `81cfc59`.

### [2026-05-21] TD-R10 — ~8 orphaned components never rendered
- **Fix:** Deleted: ConsoleLog, InsightTicker, LoadingStatus, TypewriterQuote, SkillWheel, ComprehensiveSkills, BackgroundWatermarks, Footer, BackButton, ui/Background. Commit `81cfc59`.

### [2026-05-21] TD-R11 — Tab-based Experience/Education hides content
- **Fix:** Replaced tab toggle with permanent two-column layout (Experience left, Education right). Both always visible. Commit `454e519`.

### [2026-05-21] TD-R12 — No proficiency signal in Skills cards
- **Fix:** Expert/Proficient/Familiar tags added to every skill item. Legend row explains tiers. Commit `454e519`.

### [2026-05-21] TD-R13 — "In Progress" certifications lack context
- **Fix:** Animated progress bars + "Expected Aug/Sep 2026" dates added. Commit `454e519`.
