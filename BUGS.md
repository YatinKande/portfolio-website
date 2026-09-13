# BUGS.md
> Active bugs tracked for the Yatin Kande Portfolio.
> Last updated: 2026-05-21

---

## ACTIVE BUGS

None currently open. All tracked bugs resolved as of 2026-05-21.

---

## RESOLVED BUGS

### [2026-05-21] BUG-R11 — Contact SEND MESSAGE button color mismatch
- **File:** `components/Contact.tsx`
- **Fix:** Changed `bg-[#1a2e28]` to `bg-[#20c997]` with `hover:bg-[#1aad85]`. Now consistent with all other CTAs.
- **Commit:** `454e519`

### [2026-05-21] BUG-R10 — Hero profile photo compressed on <375px screens
- **File:** `components/Hero.tsx`
- **Fix:** Added `min-w-[120px] min-h-[120px]`, responsive sizing `w-[120px] sm:w-[150px] md:w-[200px]`.
- **Commit:** `454e519`

### [2026-05-21] BUG-R09 — GlitchText cycling "Data Analyst" mismatch with bio
- **File:** `components/GlitchText.tsx`
- **Fix:** Roles updated to Data Scientist · ML Engineer · GenAI Engineer.
- **Commit:** `454e519`

### [2026-05-21] BUG-R08 — about-visual.jpg loaded in /public but never used
- **File:** `public/about-visual.jpg`
- **Fix:** Deleted from public/. Commit `81cfc59`.

### [2026-05-21] BUG-R07 — Contact form uses alert()
- **File:** `components/Contact.tsx`
- **Fix:** Replaced both alert() calls with inline errorMessage state + styled banner. Commit `81cfc59`.

### [2026-05-21] BUG-R06 — Font CSS variables undefined
- **File:** `tailwind.config.ts`, `app/layout.tsx`
- **Fix:** Inter now loaded via next/font with `variable: '--font-inter'`; CDN double-load removed. Commit `81cfc59`.

### [2026-05-21] BUG-R05 — Employer name inconsistency (About.tsx vs data.ts)
- **Fix:** DataZymes (Data Analyst Intern AI/ML, Feb 2024–Jul 2024), SmartKnower (ML Intern, Mar 2022–Jun 2022). Both About.tsx and lib/data.ts verified consistent. Commits `bd82735`, `81cfc59`.

### [2026-05-21] BUG-R04 — isSent reset timer never fires
- **File:** `components/Contact.tsx`
- **Fix:** Moved setTimeout into success branch. Commit `81cfc59`.

### [2026-05-21] BUG-R03 — Mobile hamburger non-functional
- **File:** `components/Navbar.tsx`
- **Fix:** Full AnimatePresence drawer with nav links + resume button. Commit `81cfc59`.

### [2026-05-20] BUG-R02 — GlitchText startTime prop missing from interface
- **File:** `components/GlitchText.tsx`
- **Fix:** Added `startTime?: number` to GlitchTextProps interface. Commit `4a90a93`.

### [2026-05-21] BUG-R01 — Resume PDF not downloadable (no links anywhere)
- **Fix:** Resume download button added to Hero CTA row, Navbar desktop pill, and mobile drawer. All link to `/YatinKande_Resume.pdf`. Commit `81cfc59`.
