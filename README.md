# Muhammad Qasim — Portfolio

Personal portfolio for a full-stack MERN engineer. React 19 + Vite + Tailwind CSS v4, deployed as a static site.

**Live:** https://muhammadqasim.dev

---

## Running it

```bash
npm install
cp .env.example .env.local   # add EmailJS keys for the contact form
npm run dev                  # http://localhost:5173
```

```bash
npm run build     # production bundle in dist/
npm run preview   # serve the build locally
npm run lint      # eslint
```

The contact form needs three EmailJS values in `.env.local`. Without them the
form renders and validates but tells the visitor it is not configured yet,
rather than appearing to send and dropping the message.

## Structure

```
src/
├─ data/portfolio.js     Single source of truth for all content
├─ hooks/                useScrollReveal, useActiveSection, useLockBodyScroll,
│                        usePrefersReducedMotion
├─ components/           Button, AnimatedBorderButton, SectionHeading, Reveal,
│                        Tag, ScrollProgress, BackgroundFX, ErrorBoundary
├─ layout/               Navbar, Footer
├─ sections/             Hero, About, Stack, Projects, Experience,
│                        Testimonials, Contact
├─ utils/cn.js           Class-name joiner
└─ index.css             Design tokens + utilities (Tailwind v4 @theme)
```

Every string a visitor reads lives in `src/data/portfolio.js`. Changing a job
title, adding a project, or updating the stack is a one-file edit — the
sections only decide how content is presented, never what it says.

`@/` resolves to `src/` (configured in `vite.config.js`).

## Design system

Tokens are declared once in `src/index.css` under Tailwind v4's `@theme`, so
they are available as normal utilities (`bg-surface`, `text-primary`).

- **Surfaces** — a four-step ramp: `background` → `card` → `surface` → `elevated`
- **Type** — Geist (UI), Instrument Serif (display accents), JetBrains Mono (code and data labels)
- **Signal colour** — one teal, `--color-primary`. Text on it is near-black for an 8.4:1 contrast ratio
- **Stack colours** — MongoDB green, Express grey, React cyan, Node green, used *only* inside the stack trace so the mapping stays legible

### Quality floor

- Scroll reveals run on `IntersectionObserver`, not fixed page-load delays, so sections animate when they are actually seen
- `prefers-reduced-motion` disables every decorative animation
- Visible focus ring on every interactive element, skip-to-content link, `aria-expanded` on the mobile menu, `aria-live` on form status
- Scroll listeners are `requestAnimationFrame`-throttled and passive
- Images are lazy-loaded with intrinsic dimensions to avoid layout shift
- An `ErrorBoundary` wraps the app so one broken section can't blank the page

## Content checklist

Three things still need real values:

1. **`public/resume.pdf`** — the Download CV button points here
2. **Project links** — `link` and `github` are `null` in `src/data/portfolio.js`; cards show a "Private" badge until they're filled in
3. **`profile.siteUrl`** and the URLs in `index.html` — update after the domain is live, since Open Graph images need absolute URLs

## Deploying

Static output, so any host works. On Vercel or Netlify: build `npm run build`,
publish `dist`. Add the three `VITE_EMAILJS_*` variables in the host's
environment settings.
