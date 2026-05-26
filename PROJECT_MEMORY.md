# PROJECT_MEMORY.md
> Engineering copilot memory file. Read this first before touching any code.
> Last synced: 2026-05-26 (session 4 — amber theme + photo transition fix + loader upgrades + mobile responsive pass + About rewrite)

---

## 1. PROJECT IDENTITY

| Field | Value |
|---|---|
| Name | Yatin Kande — AI & Data Science Portfolio |
| Owner | Yatin Kande (yatink@umich.edu) |
| Purpose | Personal portfolio to attract ML/AI engineering job offers |
| Live URL | Deployed on Vercel (yatin-portfolio) |
| Version | 3.1.0 (per footer) |
| Status | Active development |

---

## 2. TECH STACK

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 14.1.0 |
| Language | TypeScript | ^5 |
| Styling | Tailwind CSS | ^3.3.0 |
| Animation | Framer Motion | ^11.0.8 |
| Icons | Lucide React | ^0.344.0 |
| Fonts | Google Fonts (Inter, Rajdhani, Orbitron) | CDN |
| Contact form | Web3Forms API | REST |
| Deployment | Vercel | — |
| Node | Next.js 14 requirement | ≥18 |

**Minor deps:** `clsx`, `tailwind-merge` (cn utility), `react-type-animation`, `tailwindcss-animate`

---

## 3. FOLDER STRUCTURE

```
/
├── app/
│   ├── layout.tsx          ← Root layout: metadata, fonts, global CSS
│   ├── page.tsx            ← Main landing page (loader + all sections)
│   ├── globals.css         ← CSS variables (mint/coral palette), base styles
│   ├── projects/
│   │   └── page.tsx        ← All-projects gallery (/projects route)
│   ├── analytics/
│   │   └── page.tsx        ← ORPHANED — KPI dashboard, not linked in nav
│   └── dashboard/
│       └── page.tsx        ← ORPHANED — Full dashboard with NeuralBackground, not linked
│
├── components/
│   ├── Navbar.tsx          ← Fixed nav, scroll-aware active section, glass on scroll
│   ├── Hero.tsx            ← Hero section: photo + name + GlitchText + CTA
│   ├── GlitchText.tsx      ← Cycling role text with scramble animation
│   ├── About.tsx           ← Full-bleed dark section with bio paragraphs + stats
│   ├── Skills.tsx          ← 7 skill category cards (clean grid)
│   ├── BackgroundSection.tsx ← Experience/Education TWO-COLUMN layout (no tabs, both always visible)
│   ├── Projects.tsx        ← Bento grid of 6 featured projects
│   ├── ProjectModal.tsx    ← Click-to-expand project detail modal
│   ├── Certifications.tsx  ← 4 certification cards
│   ├── Contact.tsx         ← Web3Forms contact form + social links
│   │
│   ├── BackButton.tsx      ← Utility back button component
│   ├── Footer.tsx          ← (exists but footer is inline in page.tsx — may be unused)
│   ├── NeuralBackground.tsx ← Canvas neural net animation (used in /dashboard only)
│   ├── ConsoleLog.tsx      ← Dev-style console log UI (orphaned)
│   ├── InsightTicker.tsx   ← Scrolling ticker (orphaned)
│   ├── LoadingStatus.tsx   ← Loading status indicator (orphaned)
│   ├── TypewriterQuote.tsx ← Typewriter effect (orphaned)
│   ├── SkillWheel.tsx      ← Circular skill chart (orphaned)
│   ├── ComprehensiveSkills.tsx ← Extended skills component (orphaned)
│   ├── CareerTimeline.tsx  ← Used in /analytics page
│   ├── DashboardCard.tsx   ← Used in /analytics or /dashboard
│   ├── KPITile.tsx         ← Used in /analytics page
│   ├── ProgressChart.tsx   ← Used in /analytics page
│   └── ui/
│       └── Background.tsx  ← Background utility component
│
├── lib/
│   ├── data.ts             ← SINGLE SOURCE OF TRUTH for all content
│   └── utils.ts            ← cn() utility (clsx + tailwind-merge)
│
├── public/
│   ├── me.jpg              ← Hero circle photo: IMG_2822 (specs, golden hour, cherry blossoms)
│   ├── me_about.jpg        ← About section watermark: IMG_2807 (smiling, daytime, no glasses)
│   ├── YatinKande_Resume.pdf ← Resume PDF (linked from Hero, Navbar, mobile drawer)
│   └── projects/           ← 20+ project screenshot images
│
├── project-backgrounds/    ← Duplicate image set (not in /public, not served)
├── tailwind.config.ts      ← Tailwind theme: CSS var tokens, custom font vars
├── tsconfig.json
├── postcss.config.js
├── .env.local              ← NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
└── package.json
```

---

## 4. DESIGN SYSTEM

> ⚠️ Theme changed to Amber/Gold in session 3 (2026-05-26). Mint/coral palette is retired.

```
Primary bg:        #111318  → main background (dark charcoal)
Alt bg:            #0d0f14  → About, Contact, BackgroundSection
Card bg:           #1c2030  → all cards
Footer bg:         #080a0d
Accent (ONLY):     #F59E0B  → ALL amber accents — buttons, icons, borders, badges
Accent rgba:       rgba(245,158,11,X) → shadows, glows
Muted text:        #94a3b8  → slate-400, body text
Body text:         white
```

CSS variables defined in `globals.css` (`--primary: 38 92% 50%` HSL for Tailwind). Tailwind arbitrary values `[#F59E0B]` used throughout for amber.

---

## 5. PAGE ARCHITECTURE

### `/` — Main Landing (app/page.tsx)
**State managed:** `progress`, `status`, `phase`, `isLoading`, `isHydrated`

**Load sequence:**
1. On first session visit: boot loader runs (2.5s fill + 0.5s delay + 0.8s fade = ~3.8s total)
2. `sessionStorage.loaderSeen` gates the loader — skips on back navigation
3. After loader exits: Navbar + sections fade in
4. Scroll-triggered `whileInView` animations on each section (once, -100px margin)

**Section order:** Hero → About → Skills → BackgroundSection (Exp/Edu) → Projects → Certifications → Contact → Footer

**Key UX detail:** Profile photo uses `skipPhotoAnim` lazy state in Hero.tsx. Checks `!sessionStorage.getItem('loaderSeen')` at mount — if true (loader just ran this page load), photo gets `initial={false}` (Framer Motion starts at animate values immediately, no entrance animation). Prevents the loader→hero re-animation jank. Note: `layoutId` approach was considered but not used — `skipPhotoAnim` is the actual implementation.

### `/projects` — Projects Gallery (app/projects/page.tsx)
- All 9 projects in a 3-col grid
- Same `ProjectModal` as home
- "Back to Portfolio" → `/#projects`

### `/analytics` — ORPHANED (app/analytics/page.tsx)
- KPI tiles, ProgressChart, CareerTimeline
- Not linked anywhere in production nav

### `/dashboard` — ORPHANED (app/dashboard/page.tsx)
- Full dashboard with NeuralBackground canvas, GlitchText, skill stats
- Not linked anywhere in production nav

---

## 6. DATA FLOW

All content lives in `lib/data.ts`. No database, no CMS, no API fetching for portfolio data.

```
lib/data.ts
  ├── personalInfo    → Hero, Contact, Navbar logo, loader stats
  ├── skills          → Used by ComprehensiveSkills, /dashboard (not Skills.tsx which is hardcoded)
  ├── projects        → Projects.tsx (6 featured), /projects (all 9), ProjectModal
  ├── experience      → BackgroundSection, About text, /analytics
  ├── education       → BackgroundSection, /analytics
  ├── certifications  → Certifications.tsx
  └── aboutPageContent → Unused in current About.tsx (hardcoded paragraphs instead)
```

**Note:** `Skills.tsx` has its own hardcoded `skillCategories` array — it does NOT consume `lib/data.ts skills`. This is a duplication.

**Note:** `aboutPageContent` in `lib/data.ts` is defined but never imported by `About.tsx` (which uses hardcoded paragraphs). Dead export.

---

## 7. CONTACT FORM FLOW

```
User fills form → handleSubmit() → POST https://api.web3forms.com/submit
  → { access_key, name, email, message, subject }
  → On success: isSent = true, form cleared
  → On failure: alert() (poor UX)
  → Spinner during submit
```

**Key issue:** `isSent` reset logic has a bug — the `setTimeout` that resets `isSent` after 5s is inside the `finally` block but checks `if (isSent)` before `setIsSent(true)` has re-rendered. The reset never fires.

---

## 8. ENVIRONMENT VARIABLES

| Variable | Purpose | Exposure |
|---|---|---|
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Web3Forms submission key for contact form | Client-side (NEXT_PUBLIC) |

---

## 9. DEPLOYMENT

- Platform: **Vercel**
- Build command: `next build`
- Framework auto-detected as Next.js 14
- No custom `vercel.json` found
- No CI/CD pipeline configured
- Environment variables must be set in Vercel dashboard (mirror of `.env.local`)

---

## 10. KNOWN BUGS

> See BUGS.md for full details

| ID | Component | Description | Severity |
|---|---|---|---|
| BUG-01 | Navbar | Mobile hamburger menu is purely visual — no open/close state, no drawer | High |
| BUG-02 | Contact.tsx | `isSent` reset timer never fires — `if (isSent)` checked before state updates | Medium |
| BUG-03 | About.tsx | Text mentions "DataZymes" as employer; `lib/data.ts` lists only "SmartKnower" | Medium |
| BUG-04 | layout.tsx | Font variables `--font-inter` and `--font-outfit` referenced in tailwind.config.ts but never loaded via `next/font` — using CDN Google Fonts instead (no preload, flash risk) | Medium |
| BUG-05 | Contact.tsx | Error handling uses `alert()` — blocks UI and is inconsistent with design | Low |
| BUG-06 | Hero.tsx | `about-visual.jpg` in /public is loaded but unused anywhere | Low |

---

## 11. TECH DEBT

> See TECH_DEBT.md for full details

| ID | Area | Description |
|---|---|---|
| TD-01 | Components | ~8 orphaned components (ConsoleLog, InsightTicker, LoadingStatus, TypewriterQuote, SkillWheel, ComprehensiveSkills, Footer, ui/Background) never rendered |
| TD-02 | Pages | `/analytics` and `/dashboard` pages built but not wired into navigation |
| TD-03 | Data | `Skills.tsx` duplicates skill data instead of consuming `lib/data.ts skills` |
| TD-04 | Data | `aboutPageContent` in `lib/data.ts` is a dead export — never consumed |
| TD-05 | Images | `project-backgrounds/` directory at root contains duplicate images not served via /public |
| TD-06 | SEO | No favicon, no OG image, no Twitter card meta in `layout.tsx` |
| TD-07 | Resume | `public/Yatin_Kande_Resume.pdf` exists but has no download button anywhere on the site |
| TD-08 | Accessibility | ProjectModal has no keyboard trap or focus management (Escape key closes it, but Tab loops outside) |
| TD-09 | Mobile | No mobile navigation drawer — hamburger button is non-functional |
| TD-10 | Types | `any` used extensively in Projects.tsx and ProjectModal.tsx instead of a typed Project interface |

---

## 12. PERFORMANCE

| Area | Note |
|---|---|
| Fonts | Loaded via CDN `<link>` tags (Font Awesome, Devicons, Google Fonts) — no preconnect, no `next/font`, causes CLS/flash |
| Images | `/me.jpg` loaded 3x (loader, hero, about background) — all use `next/image` with `fill`, `priority` — acceptable |
| Animations | Framer Motion `whileInView` with `once: true` — good, no re-triggering |
| Loader | 3.8s total boot time on first visit — intentional but aggressive |
| Bundle | No code splitting beyond Next.js defaults — `/analytics` and `/dashboard` are included in the build even though unreachable |

---

## 13. KEY BUSINESS LOGIC

- **Loader gating:** `sessionStorage.loaderSeen` — loader fires once per browser session, not once per page visit
- **Hero animation gating:** `sessionStorage.hero_revealed` — prevents hero reveal replay on back-nav
- **Project ordering:** Featured projects on home are hardcoded by title string in `Projects.tsx` — not by the `featured: true` flag in data (inconsistency, but functionally equivalent)
- **Bento grid layout:** CSS Grid positions are hardcoded by index (case 0-5) in `getGridClass()` — changing project order requires updating both the `featuredTitles` array and the grid logic
- **Photo transition:** `skipPhotoAnim = !sessionStorage.getItem('loaderSeen')` in Hero.tsx lazy state. True = loader ran this page load → `initial={false}` on photo motion.div. False = direct navigation → normal spring-in animation
- **Portfolio fade timing:** `loaderRanThisLoad` state in page.tsx. When true → portfolio-content fade delay = 1.2s (ensures loader exits first). When false → delay = 0 (immediate, no loader running)

---

## 14. TOP 10 IMPROVEMENTS & RISKS

### Improvements

1. **Fix mobile nav** — Add hamburger menu state + slide-in drawer. Highest impact UX fix.
2. **Add resume download button** — `public/Yatin_Kande_Resume.pdf` exists but is hidden. Add to Hero and/or Navbar.
3. **SEO / OG metadata** — Add favicon, `og:image`, `og:title`, `twitter:card` to `layout.tsx`. Critical for job recruiters sharing your URL.
4. **Fix isSent reset bug** — Contact form success state never clears. Trivial one-line fix.
5. **Upgrade fonts to next/font** — Eliminate CLS and font flash by replacing CDN Google Fonts with `next/font/google`.
6. **Wire `/dashboard` or `/analytics` into nav** — These pages are fully built. Either ship them or delete them.
7. **Fix employer name inconsistency** — About text says "DataZymes"; data.ts says "SmartKnower". One of these is wrong.
8. **Type-safe Project interface** — Replace `any` in Projects/ProjectModal with a proper `Project` type from data.ts.
9. **Improve contact form error handling** — Replace `alert()` with inline error state styled to match the form.
10. **Add keyboard accessibility to ProjectModal** — Focus trap, Escape key handler, ARIA roles.

### Risks

1. **Web3Forms key is client-exposed** — `NEXT_PUBLIC_` prefix means it's visible in browser. Web3Forms keys are designed for this (rate-limited by domain), but monitor for spam.
2. **No spam protection on contact form** — No honeypot, no reCAPTCHA. Web3Forms provides basic spam filtering but it's not configured.
3. **Vercel env vars not documented** — If the project is re-deployed by a collaborator, the contact form silently fails without the key.
4. **Single point of failure for content** — All text/data in `lib/data.ts`. A typo breaks the whole site. No CMS, no validation layer.
5. **No 404 page** — Next.js default 404 will show, completely breaking the brand experience.

---

## 15. CHANGELOG

### [2026-05-21] — Initial memory sync
- Read full codebase: all app pages, all components, lib/data.ts, tailwind config, globals.css
- Created PROJECT_MEMORY.md, BUGS.md, TECH_DEBT.md, ARCHITECTURE.md, DEPLOYMENT.md
- No code changes made in this session

---

### [2026-05-21] — All 10 engineering improvements implemented
**Commit:** `81cfc59` → pushed to main → Vercel deployed → READY
**Live URL:** https://portfolio-website-yatinkandes-projects.vercel.app

#### Fix 1 — Mobile hamburger menu (components/Navbar.tsx)
- Added `mobileOpen` state + resize listener
- AnimatePresence drawer floats below navbar (not full-screen)
- Animated X/hamburger icon swap on toggle
- Backdrop click closes drawer
- Resume download button included in mobile drawer
- **Risk:** None. Self-contained state, no global side effects.

#### Fix 2 — Resume download button (components/Hero.tsx + components/Navbar.tsx)
- Hero: second CTA button added beside "Contact Me" (outlined style)
- Navbar desktop: pill button in top-right with Download icon
- Navbar mobile: inside drawer with green bg
- Links to `/Yatin_Kande_Resume.pdf` (already in /public)
- **Risk:** None. Static link to existing asset.

#### Fix 3 — SEO metadata + favicon + OG image (app/layout.tsx + app/icon.tsx + app/opengraph-image.tsx)
- `app/icon.tsx` → auto-generates favicon via Next.js ImageResponse (32×32 mint green "Y" tile)
- `app/opengraph-image.tsx` → edge runtime 1200×630 branded card (dark bg, mint/coral accents)
- `layout.tsx` updated with openGraph, twitter card, keywords, authors, metadataBase
- **metadataBase:** https://portfolio-website-yatinkandes-projects.vercel.app
- **Risk:** Low. OG image uses edge runtime; if Vercel edge runtime fails, OG falls back to nothing (same as before).

#### Fix 4 — isSent reset timer bug (components/Contact.tsx)
- Moved `setTimeout(() => setIsSent(false), 5000)` into the `if (result.success)` block
- Was previously in `finally` block checking `if (isSent)` before `setIsSent(true)` ran
- **Risk:** None. Pure logic fix.

#### Fix 5 — Font CLS / double-load (app/layout.tsx + app/globals.css)
- Removed Font Awesome and Devicon CDN links from layout.tsx `<head>` (BackgroundWatermarks deleted)
- Added `next/font/google` Inter with `variable: '--font-inter'` and `display: 'swap'`
- Applied `inter.variable` className to `<html>` tag
- Removed Inter from globals.css `@import` (kept Rajdhani + Orbitron only)
- **Risk:** Low. Font loading path changed; if Inter fails to load, system sans-serif shows instead of blank.

#### Fix 6 — Employer name inconsistency (components/About.tsx)
- Changed "DataZymes and SmartKnower" → "SmartKnower" throughout About.tsx text
- Changed "At DataZymes, I built..." → "As an AI/ML intern, I built..."
- Matches lib/data.ts experience entries (both at SmartKnower)
- **Note:** If Yatin confirms DataZymes was a separate employer, revert this and add DataZymes back to lib/data.ts experience.

#### Fix 7 — Wire /dashboard into footer (app/page.tsx)
- Added subtle "View Dashboard →" monospace link in footer between status and copyright
- Styled to match existing footer aesthetic (dim green, tracks on hover)
- **Risk:** None. Additive link only.

#### Fix 8 — Contact error UX (components/Contact.tsx)
- Replaced both `alert()` calls with `setErrorMessage()` state
- Added `errorMessage` state (string | null)
- Inline error banner renders below submit button with Framer Motion fade-in
- Banner cleared on new submission attempt (`setErrorMessage(null)` at top of handler)
- **Risk:** None.

#### Fix 9 — Type safety (lib/data.ts + 3 components)
- Exported `Project` type and `TechDetail` type from lib/data.ts
- `Projects.tsx`: `useState<Project | null>`, filter with type predicate `(p): p is Project`
- `ProjectModal.tsx`: `project: Project` instead of `project: any`
- `app/projects/page.tsx`: `useState<Project | null>`, removed inline `any` annotations
- **Risk:** None. Compile-time only, zero runtime change.

#### Fix 10 — Deleted orphaned files
- **Deleted components:** ConsoleLog, InsightTicker, LoadingStatus, TypewriterQuote, SkillWheel, ComprehensiveSkills, BackgroundWatermarks, Footer, BackButton, ui/Background
- **Deleted asset:** public/about-visual.jpg (unused)
- **Kept:** NeuralBackground, CareerTimeline, KPITile, ProgressChart, DashboardCard (all used by /dashboard or /analytics)
- **Risk:** Low. All deleted files were verified unused via grep before deletion.

#### Post-deploy fix — metadataBase URL (app/layout.tsx)
- Corrected metadataBase from placeholder `yatinkande.vercel.app` to actual `portfolio-website-yatinkandes-projects.vercel.app`
- Commit: `fix: correct metadataBase to match Vercel production domain`

---

### OPEN ITEMS AFTER INITIAL SESSION
- BUG-03 (employer name) — RESOLVED: DataZymes (Feb 2024–Jul 2024, AI/ML), SmartKnower (Mar 2022–Jun 2022, ML)
- Consider adding a custom domain (e.g. yatinkande.dev) to replace the long vercel subdomain

---

### [2026-05-21] — Resume PDF replacement
**Commit:** `091b1e9`
- Replaced `public/YatinKande_Resume.pdf` with updated PDF from Downloads
- Updated all 4 href references in Navbar.tsx (×2), Hero.tsx, and any other references
- Gitignore updated: `*Resume*` → `resume_draft*` and `*_private_resume*` to allow public asset

---

### [2026-05-21] — Profile photo: specs hero + smiling about watermark
**Commit:** `959fdbc` + `454e519`

**Photos:**
- `public/me.jpg` → IMG_2822: specs/sunglasses on, golden hour cherry blossoms, confident gaze. 3000×3000 crop from top of HEIC, enhanced with ImageMagick unsharp + brightness.
- `public/me_about.jpg` → IMG_2807: no sunglasses, genuine smile, daytime cherry blossom light. Previously used as me.jpg before swap.

Both photos from the same graduation shoot at UMich, cherry blossom backdrop, white double-breasted suit.

---

### [2026-05-21] — 11 UX/content improvements
**Commit:** `454e519` → pushed to main → Vercel auto-deploying

**All changes (TypeScript build passes, clean exit code 0):**

#### 1. GlitchText roles (components/GlitchText.tsx)
- Removed: "Data Analyst", "AI Engineer"
- Now cycles: **Data Scientist → ML Engineer → GenAI Engineer**
- Aligns with bio paragraph and actual skill set

#### 2. Hero credibility line (components/Hero.tsx)
- Added between GlitchText and bio paragraph
- Content: `MS @ UMich · 3.8 GPA · Ex-DataZymes · [pulsing green badge] Open to Full-time`
- Markup: flex-wrap row of small uppercase tracking-widest spans + animated badge

#### 3. Hero mobile min-size (components/Hero.tsx)
- Changed: `w-[150px] h-[150px]` → `w-[120px] h-[120px] sm:w-[150px]`
- Added `min-w-[120px] min-h-[120px]` to prevent compression below 375px

#### 4. About section two-column layout (components/About.tsx)
- Changed from: centred wall of text (3 long paragraphs + highlight box)
- Changed to: md:grid-cols-2 — narrative paragraph left, 4-metric achievement card right
- Left: ~80-word narrative + 3 bullet highlights
- Right card: 2×2 grid of achievement stats (84% retrieval, 40% latency, 81% AUC-ROC, 500+ requests)
- About background: now uses `me_about.jpg` (smiling portrait) instead of `me.jpg`

#### 5. Skills proficiency tags (components/Skills.tsx)
- Converted skillCategories skills from `string[]` to `{ name: string; level: "Expert"|"Proficient"|"Familiar" }[]`
- Expert = mint `#20c997`, Proficient = indigo `#6366f1`, Familiar = amber `#f59e0b`
- Each skill row shows name (left) + level badge (right, shrink-0)
- Legend row above grid explains the three tiers
- R removed from Python/SQL/Bash/R bullet (was never "Expert" level on its own)

#### 6. Project card GitHub links (components/Projects.tsx)
- Added always-visible "Code" badge (GitHub icon + "Code" text) at top-right of each card
- Uses `e.stopPropagation()` so clicking GitHub link doesn't trigger ProjectModal
- Styled: `bg-black/50 backdrop-blur-sm border border-white/20`, 11px font

#### 7. Project impact metrics in data (lib/data.ts)
- Updated `intro` field for all 6 featured project cards:
  - AWS Docs RAG Bot: "84% retrieval precision on AWS documentation Q&A"
  - Automotive Multimodal RAG: "Multimodal RAG across text, images & OBD-II diagnostics"
  - Kinesis Key Entry: "Real-time facial auth via AWS Rekognition & Kinesis streams"
  - Dataset Concierge Bot: "Serverless AWS chatbot handling 500+ daily dataset requests"
  - SmartSoil Crop Recommender: "94% accuracy crop recommendation for Indian farmers"
  - Lip-Read AI: "3D CNN-BiLSTM achieving sub-10% word error rate on GRID dataset"

#### 8. Experience + Education two-column layout (components/BackgroundSection.tsx)
- Removed: tab toggle (AnimatePresence, activeTab state, useEffect hash listener)
- Added: `lg:grid-cols-2` grid, both columns always visible
- Left column: Experience (mint `#20c997` accents, 2 cards)
- Right column: Education (coral `#ff6b6b` accents, 3 cards)
- Each card shows bullets.slice(0,3) for experience, achievements for education

#### 9. Certifications progress bars (components/Certifications.tsx + lib/data.ts)
- Added `expectedCompletion` and `progress` fields to AWS CCP (70%, Aug 2026) and Deep Learning Spec (55%, Sep 2026) in data.ts
- Certifications.tsx: In Progress certs show amber "In Progress" badge + animated `motion.div` progress bar + "Expected {date}" tag
- Completed certs unchanged

#### 10. Contact button color (components/Contact.tsx)
- Changed: `bg-[#1a2e28]` → `bg-[#20c997]` (matches all other CTAs on the site)
- Hover: `hover:bg-[#1aad85]` (darker green on hover)
- Shadow: `shadow-[#20c997]/20 hover:shadow-[#20c997]/40`

#### 11. Footer availability signal (app/page.tsx)
- Changed: "SYSTEM_STATUS: ONLINE | VERSION: 3.1.0"
- Changed to: pulsing dot + "Open to Full-time · Data Scientist / ML Engineer"
- Copyright: "© 2026 YATIN KANDE • DATA SCIENCE ECOSYSTEM" → "© 2026 Yatin Kande · Dearborn, MI"

---

### OPEN ITEMS (post 2026-05-21)
- `/analytics` page still not linked in nav
- No custom domain yet
- `aboutPageContent` in lib/data.ts is a dead export (never consumed)
- ProjectModal: no keyboard focus trap
- Skills.tsx has its own hardcoded skillCategories — does not consume lib/data.ts skills (duplication)

---

### [2026-05-26] — Session 3: Full Amber/Gold theme applied
**Commit:** `95aceb5` — "apply Amber/Gold (#F59E0B) accent — dark charcoal + warm amber"

- All teal (#2dd4bf), orange (#f97316), violet (#a78bfa), coral (#ff6b6b), mint (#20c997) accent colors removed site-wide
- Single accent color: `#F59E0B` (amber/gold), `rgba(245,158,11,X)` for shadows/glows
- Files updated: globals.css, ScrollProgress, GlitchText, Navbar, Hero, About, Skills, BackgroundSection, Projects, ProjectModal, Certifications, Contact, app/page.tsx, app/projects/page.tsx
- Skills proficiency labels (Expert/Proficient/Familiar) removed — clean skill lists only
- ProjectModal converted from light theme to dark theme (`bg-[#111318]`)
- OG image (`app/opengraph-image.tsx`) kept white/monochromatic — no amber (intentional for social cards)
- TypeScript: `npx tsc --noEmit` clean throughout

---

### [2026-05-26] — Session 4a: Photo transition fix + loader upgrades
**Status:** Uncommitted (working tree)

#### Photo transition fix (components/Hero.tsx)
- Root cause: Hero photo had `initial={{ opacity: 0, scale: 0.88, y: -8 }}` causing re-animation even when loader already showed the photo. Combined with position mismatch (loader photo at viewport center, hero photo at ~33% from top), created visible jank.
- Fix: Added `skipPhotoAnim` lazy state — checks `!sessionStorage.getItem('loaderSeen')` at Hero mount time. If true (loader ran this session, loaderSeen not yet written), uses `initial={false}` (Framer Motion starts at animate values, no entrance animation).
- On subsequent same-session visits: `loaderSeen` is set → `skipPhotoAnim = false` → normal spring-in animation.

#### Loader upgrades (app/page.tsx)
- Added `loaderRanThisLoad` boolean state — set true when loader actually runs (not skipped)
- **Phase messages:** New `useEffect` watching `progress` → cycles BOOTING_SYSTEM… → LOADING_NEURAL_NETS… → CALIBRATING_ML_MODELS… → INITIALIZING_PORTFOLIO… → DEPLOYMENT_COMPLETE ✓ (amber + bold)
- **Tech stack pills:** 6 amber pill badges (Python · PyTorch · LangChain · AWS · OpenCV · FastAPI), stagger-animate in at 1.6s, fade out with text on transition
- Loader exit speed: `duration: 0.8` → `duration: 0.4`
- Portfolio-content fade-in: `duration: 1.2` → `duration: 0.7, delay: loaderRanThisLoad ? 1.2 : 0` — loader fully clears before hero appears

---

### [2026-05-26] — Session 4b: Full mobile responsive pass
**Status:** Uncommitted (working tree)
**Files changed:** globals.css, page.tsx, Projects.tsx, About.tsx, Navbar.tsx, Contact.tsx, ProjectModal.tsx

#### globals.css
- `background-attachment: fixed` removed — broken/flickering on iOS Safari
- `transform` removed from `* { transition }` — was fighting Framer Motion transforms on mobile
- `-webkit-tap-highlight-color: transparent` — removes Android blue tap flash on all elements
- `touch-action: manipulation` on body — eliminates 300ms double-tap zoom delay on iOS/Android

#### page.tsx (loader mobile spacing)
- All loader spacing changed to `mb-4 sm:mb-original` pattern — fits on 375px × 667px (iPhone 6/SE 2nd gen)
- Stats grid: `grid-cols-1 md:grid-cols-2` → `grid-cols-2` (was needlessly tall in 1-col on mobile)
- Stats card padding: `p-8` → `p-4 sm:p-8`
- Outer loader container: added `py-6 overflow-y-auto` safety net

#### Projects.tsx
- Big card title: flat `text-[36px]` on all screens → `text-[22px] sm:text-[28px] lg:text-[36px]`
- Big card description: flat `text-[17px]` → `text-[13px] lg:text-[17px]`

#### About.tsx
- Removed redundant `px-4` from inner container (section had `px-6` already; was 40px/side on mobile)
- React fragment key bug fixed: `.map()` used `<>` with keys on children (React ignores them) → replaced with `div className="contents"` wrapper

#### Navbar.tsx
- Added body scroll lock: `useEffect` sets `document.body.style.overflow = 'hidden'` when mobile drawer open, clears on close

#### Contact.tsx
- Info cards grid: removed `px-4` (same double-padding fix)
- Email link: added `break-all` — `yatink@umich.edu` no longer overflows narrow screens
- Form card: `p-8 md:p-10` → `p-5 sm:p-8 md:p-10`

#### ProjectModal.tsx
- Mobile bottom-sheet pattern: `items-end sm:items-center`, `rounded-t-[24px] sm:rounded-[32px]`, outer `p-0 sm:p-4 md:p-8`
- Image header: `min-h-[240px]` → `min-h-[160px] sm:min-h-[220px] lg:min-h-full`
- Content padding: `p-8 md:p-12` → `p-5 sm:p-8 md:p-10`
- Close button: `top-8 right-8` → `top-4 right-4 sm:top-8 sm:right-8`
- Title: added `pt-6 sm:pt-0` to clear close button on mobile, bottom actions gap responsive

---

### [2026-05-26] — Session 4c: About section content rewrite + data.ts update
**Status:** Uncommitted (working tree)

#### components/About.tsx
- Added `Bot` icon import from lucide-react
- **Paragraph 1:** Fixed "pursuing MS" → "completed MS from UMich". Added: AI Agents, multimodal RAG, LLM applications, end-to-end shipping framing.
- **Paragraph 2 (rewritten):** "Right now I'm deep in the agentic AI stack — designing LLM systems that reason, plan, and act. Multi-step AI Agents with tool-use and function calling, LangGraph and LangChain workflows, hybrid RAG + FAISS retrieval." Present tense, active, agent-focused.
- **4th bullet added (Bot icon):** "Building agentic workflows with LangGraph & LangChain tool-use"
- **Bullet 3 updated:** "ML · Deep Learning · GenAI · Cloud Deployment" → "RAG · AI Agents · LLMs · Computer Vision · MLOps"
- **Current-focus tech pills row:** AI Agents · LangGraph · LangChain · RAG + FAISS · LLM APIs · AWS LLMOps · Prompt Engineering
- **Achievement sub-labels** updated with tech context: "Agentic RAG · FAISS + LangChain", "YOLOv5 · Apache Spark CV pipeline", "XGBoost · feature-engineered churn model", "Serverless LLM bot · AWS Lex + Lambda"

#### lib/data.ts
- `personalInfo.bio` rewritten: production AI systems, autonomous agents, LangGraph/LangChain, agentic stack, hybrid vector retrieval, present-tense framing
- `personalInfo.headline` updated: "Building Agentic AI Systems — RAG Pipelines, LLM Agents & Production MLOps"

---

### OPEN ITEMS (post session 4)
- `/analytics` page still not linked in nav
- No custom domain yet
- `aboutPageContent` in lib/data.ts is a dead export (never consumed by About.tsx)
- ProjectModal: no keyboard focus trap (Tab loops outside modal)
- Skills proficiency labels removed in session 3 — may reconsider later
- Session 4 changes uncommitted — commit + push pending
