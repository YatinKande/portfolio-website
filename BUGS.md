# BUGS.md
> Active bugs tracked for the Yatin Kande Portfolio.
> Last updated: 2026-05-26

---

## ACTIVE BUGS

None currently open. All tracked bugs resolved as of 2026-05-26.

---

## RESOLVED BUGS (2026-05-26)

### [2026-05-26] BUG-R20 — Loader→hero photo re-animates (jank on first visit)
- **File:** `components/Hero.tsx`
- **Root cause:** Hero photo had `initial={{ opacity: 0, scale: 0.88, y: -8 }}` — re-ran entrance animation even though loader already showed the same photo. Position mismatch (loader center vs hero top) made it visually jarring.
- **Fix:** `skipPhotoAnim` lazy state checks `!sessionStorage.getItem('loaderSeen')` at Hero mount. True → `initial={false}` (no entrance animation). False (subsequent visits) → normal spring-in.

### [2026-05-26] BUG-R19 — iOS background-attachment:fixed causes white/broken background
- **File:** `app/globals.css`
- **Fix:** Removed `background-attachment: fixed` from body. iOS Safari does not support it correctly.

### [2026-05-26] BUG-R18 — Global CSS transform transition fights Framer Motion on mobile
- **File:** `app/globals.css`
- **Fix:** Removed `transform` from `* { transition: ... }`. Framer Motion manages its own transform transitions — the CSS override caused sluggish animations.

### [2026-05-26] BUG-R17 — Android tap blue-flash on all interactive elements
- **File:** `app/globals.css`
- **Fix:** Added `-webkit-tap-highlight-color: transparent` to `*`.

### [2026-05-26] BUG-R16 — 300ms double-tap zoom delay on iOS/Android
- **File:** `app/globals.css`
- **Fix:** Added `touch-action: manipulation` to body.

### [2026-05-26] BUG-R15 — Loader content overflows viewport on small phones (iPhone SE etc.)
- **File:** `app/page.tsx`
- **Fix:** All loader spacing responsive (`mb-4 sm:mb-original`), stats `grid-cols-2` on mobile, compact card padding `p-4 sm:p-8`, `overflow-y-auto` safety.

### [2026-05-26] BUG-R14 — Projects bento big card title text-[36px] on 320px mobile cards
- **File:** `components/Projects.tsx`
- **Fix:** `text-[22px] sm:text-[28px] lg:text-[36px]` for title; `text-[13px] lg:text-[17px]` for description.

### [2026-05-26] BUG-R13 — About + Contact double padding on mobile (40px/side)
- **Files:** `components/About.tsx`, `components/Contact.tsx`
- **Fix:** Removed `px-4` from inner containers (parent section already had `px-6`).

### [2026-05-26] BUG-R12 — Mobile menu allows body scroll behind drawer
- **File:** `components/Navbar.tsx`
- **Fix:** `useEffect` sets `document.body.style.overflow = 'hidden'` when `mobileOpen`, clears on close.

### [2026-05-26] BUG-R11b — Email address overflows card on narrow screens
- **File:** `components/Contact.tsx`
- **Fix:** Added `break-all` to email anchor.

### [2026-05-26] BUG-R10b — ProjectModal image header too tall on mobile phones
- **File:** `components/ProjectModal.tsx`
- **Fix:** `min-h-[160px] sm:min-h-[220px] lg:min-h-full`. Modal uses bottom-sheet pattern on mobile.

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
