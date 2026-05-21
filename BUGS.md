# BUGS.md
> Active bugs tracked for the Yatin Kande Portfolio.
> Last updated: 2026-05-21

---

## BUG-01 — Mobile hamburger menu is non-functional
- **File:** `components/Navbar.tsx:93`
- **Severity:** High
- **Description:** The hamburger icon (three lines) renders correctly on mobile but has no state, no handler, and no drawer. Clicking it does nothing. Mobile users have no navigation.
- **Root cause:** `<button>` has no `onClick`, no open/close state, and no associated mobile menu markup.
- **Fix:** Add `const [mobileOpen, setMobileOpen] = useState(false)` + an `AnimatePresence` driven drawer with the nav links.
- **Status:** Open

---

## BUG-02 — Contact form "isSent" reset timer never fires
- **File:** `components/Contact.tsx:52-57`
- **Severity:** Medium
- **Description:** After a successful form submission, the button shows "MESSAGE RECEIVED!" but never resets back to "SEND MESSAGE". The intention was a 5-second reset, but the code checks `if (isSent)` inside the `finally` block before `setIsSent(true)` has caused a re-render, so the condition is always `false`.
- **Root cause:**
  ```ts
  // finally block runs synchronously — isSent is still false here
  if (isSent) {
      setTimeout(() => setIsSent(false), 5000); // never reached
  }
  ```
- **Fix:** Move the reset timer into the `if (result.success)` branch, after `setIsSent(true)`:
  ```ts
  setIsSent(true);
  setTimeout(() => setIsSent(false), 5000);
  ```
- **Status:** Open

---

## BUG-03 — Employer name inconsistency between About text and data.ts
- **File:** `components/About.tsx:70` vs `lib/data.ts:324-350`
- **Severity:** Medium
- **Description:** The About section biography paragraph reads "At DataZymes, I built a YOLOv5 object detection model..." but `lib/data.ts` lists both internships as being at "SmartKnower". Recruiters reading both sections will see conflicting employer names.
- **Fix:** Determine the correct employer name and update either `About.tsx` hardcoded text or `lib/data.ts` experience entries consistently. (Likely: SmartKnower for the Data Science intern role, DataZymes may be a separate employer for the AI/ML intern role — needs verification from Yatin.)
- **Status:** Open — needs owner verification

---

## BUG-04 — Font CSS variables undefined (font flash / CLS risk)
- **File:** `tailwind.config.ts:17-20`, `app/layout.tsx`
- **Severity:** Medium
- **Description:** `tailwind.config.ts` defines `fontFamily.sans: ["var(--font-inter)"]` and `fontFamily.heading: ["var(--font-outfit)"]`, but these CSS variables are never set. The site uses CDN Google Fonts via `<link>` tags instead of `next/font`. The font variable fallback chain fails silently (falls back to system sans-serif until CDN loads), causing a visible font flash on first load.
- **Fix:** Either use `next/font/google` to load Inter + Outfit and inject the CSS vars, or change tailwind.config.ts to reference the font names directly (`["Inter", "sans-serif"]`).
- **Status:** Open

---

## BUG-05 — Contact form uses alert() for error state
- **File:** `components/Contact.tsx:47,52`
- **Severity:** Low
- **Description:** Network or submission errors show a native browser `alert()` dialog which breaks the visual experience and is inconsistent with the design system.
- **Fix:** Add an `errorMessage` state string and render it as an inline styled error banner below the submit button.
- **Status:** Open

---

## BUG-06 — about-visual.jpg loaded in /public but never used
- **File:** `public/about-visual.jpg`
- **Severity:** Low (build bloat)
- **Description:** A secondary about-section image exists in /public but is never referenced in any component. Adds unnecessary asset to the build.
- **Fix:** Delete the file, or if it was intended for use, wire it up.
- **Status:** Open

---

## RESOLVED BUGS

### [2026-05-21] BUG-R06 — about-visual.jpg unused
- **Fix:** Deleted from public/. Commit `81cfc59`.

### [2026-05-21] BUG-R05 — Contact form uses alert()
- **Fix:** Replaced both alert() calls with inline errorMessage state + styled banner. Commit `81cfc59`.

### [2026-05-21] BUG-R04 — Font CSS variables undefined
- **Fix:** Inter now loaded via next/font with `variable: '--font-inter'`; CDN double-load removed. Commit `81cfc59`.

### [2026-05-21] BUG-R03 — Employer name inconsistency (partial)
- **Fix:** Updated About.tsx to reference SmartKnower only, matching lib/data.ts. Needs owner verification. Commit `81cfc59`.

### [2026-05-21] BUG-R02 — isSent reset timer never fires
- **Fix:** Moved setTimeout into success branch. Commit `81cfc59`.

### [2026-05-21] BUG-R01-MOBILE — Mobile hamburger non-functional
- **Fix:** Full AnimatePresence drawer implemented in Navbar.tsx. Commit `81cfc59`.

### [2026-05-20] BUG-R01 — GlitchText startTime prop missing from interface
- **File:** `components/GlitchText.tsx`
- **Fix:** Added `startTime?: number` to `GlitchTextProps` interface.
- **Commit:** `4a90a93`
