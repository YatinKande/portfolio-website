# DEPLOYMENT.md
> Deployment reference for the Yatin Kande Portfolio.
> Last updated: 2026-05-21

---

## Platform

**Vercel** — auto-detected as Next.js 14, zero-config deployment.

---

## Local Development

```bash
npm install
npm run dev          # starts on :3000 (or next available port)
```

The dev server uses HMR. If ports 3000–3001 are in use, it tries 3002, etc.

---

## Production Build

```bash
npm run build        # next build — outputs to .next/
npm run start        # serves the production build locally
```

**Always run `npm run build` before pushing major changes** to catch TypeScript errors and missing imports that Next.js enforces at build time. (The GlitchText `startTime` prop bug was caught this way — commit `4a90a93`.)

---

## Vercel Deployment

Deployment is triggered automatically on push to `main`.

```
main branch → Vercel auto-deploy → production URL
```

No staging environment is configured.

---

## Environment Variables

| Variable | Where to set |
|---|---|
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Vercel dashboard → Project Settings → Environment Variables |

**Critical:** Without this key in Vercel, the contact form will silently fail (it falls back to `"YOUR_ACCESS_KEY_HERE"` which the Web3Forms API rejects). No error is surfaced to visitors.

---

## Static Assets

All static assets must live in `/public/`. Files at project root (e.g., `project-backgrounds/`) are NOT served by Next.js.

---

## Rollback

Vercel keeps deployment history. To rollback:
1. Go to Vercel dashboard → Deployments
2. Click the desired previous deployment
3. Click "Promote to Production"

---

## Known Deployment Gotchas

1. **TypeScript errors are build-fatal** — Next.js 14 with strict TS will fail the Vercel build if any type errors exist. Run `npm run build` locally before pushing.
2. **`next/image` requires domains config** — Any external image `src` must be declared in `next.config.js`. Currently all images are local (`/projects/*.png`) so this isn't an issue yet.
3. **No `next.config.js` file found** — The project uses Next.js defaults. If external images or custom headers are needed later, this file must be created.
4. **Web3Forms key is public** — `NEXT_PUBLIC_` prefix means it ships to the client bundle. This is intentional for Web3Forms (their security model is domain-based allowlisting), but the key must be whitelisted in the Web3Forms dashboard for the production Vercel domain.
