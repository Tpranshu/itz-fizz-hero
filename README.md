# Welcome ItzFizz - Scroll Driven Hero

Hero section where a car drives across the screen as you scroll and reveals the headline behind it.

Stack: React (Vite), Tailwind CSS, GSAP + ScrollTrigger.

## Run locally

```bash
npm install
npm run dev
```

## How it works

- `Hero.jsx` has two GSAP timelines: an intro on load, and a scrubbed one tied to scroll.
- The car moves with `xPercent` and the headline reveal uses `clip-path`, so only transforms and paint are touched, no layout.
- The hero is `position: sticky` inside a 300vh wrapper, so it stays on screen while you scroll.

## Deploy

Push to `main`, then in the repo go to Settings > Pages > Source > GitHub Actions. The workflow in `.github/workflows` builds and publishes it.
