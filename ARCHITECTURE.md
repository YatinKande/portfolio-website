# ARCHITECTURE.md
> Architecture reference for the Yatin Kande Portfolio.
> Last updated: 2026-05-21

---

## System Overview

This is a **static portfolio website** with no backend, no database, and no authentication. All data is hardcoded in `lib/data.ts`. The only external service call is the contact form submission to Web3Forms.

```
Browser
  │
  ├── / (Next.js SSR/SSG)
  │     ├── Boot Loader (client state)
  │     ├── Hero
  │     ├── About
  │     ├── Skills
  │     ├── BackgroundSection (Exp/Edu tabs)
  │     ├── Projects (bento grid → ProjectModal)
  │     ├── Certifications
  │     └── Contact ──────────────────────────→ Web3Forms API
  │
  ├── /projects (Next.js SSR/SSG)
  │     └── All projects grid → ProjectModal
  │
  ├── /analytics (ORPHANED — not linked)
  └── /dashboard  (ORPHANED — not linked)
```

---

## Data Architecture

```
lib/data.ts  (single source of truth)
    │
    ├── personalInfo  → Hero, Contact, Navbar, Loader stats
    ├── skills        → /dashboard page, ComprehensiveSkills (orphaned)
    ├── projects      → Projects.tsx (6 featured), /projects (all 9)
    ├── experience    → BackgroundSection, About.tsx (hardcoded - mismatch!)
    ├── education     → BackgroundSection
    ├── certifications → Certifications.tsx
    └── aboutPageContent → DEAD EXPORT (not consumed by About.tsx)
```

There is no runtime data fetching. On build, Next.js statically generates all pages.

---

## Component Hierarchy

```
app/page.tsx (LandingPage)
  ├── [Loader UI]          — inline JSX in page.tsx
  ├── Navbar
  ├── Hero
  │     └── GlitchText
  ├── About
  ├── Skills
  ├── BackgroundSection    — Experience/Education tabs
  ├── Projects
  │     └── ProjectModal
  ├── Certifications
  ├── Contact
  └── [Footer]             — inline JSX in page.tsx
```

---

## Animation Architecture

All animations use **Framer Motion**. Three patterns in use:

### 1. whileInView (scroll reveal)
Used on every section wrapper in `page.tsx`. Fires once (`once: true`) with a `-100px` viewport margin so elements animate in slightly before they fully enter the viewport.

### 2. AnimatePresence (conditional rendering)
- Loader/content swap in `page.tsx`
- Experience/Education tab content in `BackgroundSection.tsx`
- ProjectModal overlay in `Projects.tsx` and `/projects/page.tsx`

### 3. layoutId (shared element transitions)
- `layoutId="profile-photo"` — profile image morphs from loader position → hero position
- `layoutId="activeTab"` — active tab pill slides between Experience/Education buttons
- `layoutId="active-pill"` — navbar active section indicator

### 4. Custom scroll handler (non-Framer)
Hero photo blur/fade effect uses `requestAnimationFrame` + `window.scrollY` directly for performance (Framer Motion's scroll hooks have overhead).

---

## Session State

Two `sessionStorage` keys control animation replay behavior:

| Key | Set in | Purpose |
|---|---|---|
| `loaderSeen` | `app/page.tsx` | Prevents boot loader from replaying on back-nav |
| `hero_revealed` | `components/Hero.tsx` | Prevents hero entrance animation replay |

---

## Routing

Next.js App Router. All routes are client-rendered (`"use client"` on all pages).

| Route | Component | Notes |
|---|---|---|
| `/` | `app/page.tsx` | Main portfolio |
| `/projects` | `app/projects/page.tsx` | All projects |
| `/analytics` | `app/analytics/page.tsx` | Orphaned |
| `/dashboard` | `app/dashboard/page.tsx` | Orphaned |

No dynamic routes, no API routes, no middleware.

---

## Build Output

Next.js 14 with `"use client"` on all pages means these are effectively **client-side rendered** (CSR) with a static HTML shell. The initial HTML will be empty until React hydrates. This is acceptable for a portfolio but not ideal for SEO — a future improvement would be to remove `"use client"` from page.tsx and lift interactive state to leaf components only.
