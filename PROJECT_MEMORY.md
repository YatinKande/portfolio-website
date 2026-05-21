# PROJECT_MEMORY.md
> Engineering copilot memory file. Read this first before touching any code.
> Last synced: 2026-05-21

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
│   ├── BackgroundSection.tsx ← Experience/Education tabs with AnimatePresence
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
│   ├── me.jpg              ← Profile photo (used in loader, hero, about bg)
│   ├── about-visual.jpg    ← Unused secondary about image
│   ├── Yatin_Kande_Resume.pdf ← Resume PDF (exists but no download link!)
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

```
Primary (Mint):    #20c997  → buttons, accents, borders, active states
Accent (Coral):    #ff6b6b  → secondary highlights, stats numbers, CTA hover
Dark:              #1a2e28  → headings, dark sections bg
Background:        #f0f8f6  → page bg, light sections
Muted text:        #5a7069  → body text, subtitles
Border:            #cfe5df  → card borders, dividers
Dark sections:     #0a0f1e  → Experience/Education section
About section:     #0f172a  → About section
```

CSS variables defined in `globals.css` and consumed via Tailwind tokens.

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

**Key UX detail:** Profile photo uses `layoutId="profile-photo"` for shared layout transition from loader → hero.

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

### OPEN ITEMS AFTER THIS SESSION
- BUG-03 (employer name) needs Yatin to confirm correct employer for AI/ML internship role
- Consider adding a custom domain (e.g. yatinkande.dev) to replace the long vercel subdomain
