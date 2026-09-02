# personal-site

An opinionated personal homepage for AI / Computer Vision / AIGC research engineers.
Dark, futuristic, particle-driven hero — clean academic content underneath.

## Stack

Vite 5 · React 18 · TypeScript 5 · Tailwind CSS 3 · Framer Motion · tsParticles (slim) · react-pageflip · lucide-react

## Quick start

```bash
pnpm install
pnpm dev          # http://localhost:5173
pnpm build        # production build → dist/
pnpm preview      # serve dist/
```

> Node 18+ recommended. If you don't have pnpm: `npm i -g pnpm` (or use `corepack enable`).

## Edit your content

**All editable copy lives in [`src/data/profile.ts`](src/data/profile.ts)** — name, tagline, bio, socials, interests, skills, current focus, projects, and publications. The shape is enforced by [`src/types/profile.ts`](src/types/profile.ts).

- Replace **`public/cv.pdf`** with your own CV. The hero/contact buttons resolve this through Vite's `BASE_URL`, so it works on both GH Pages and Vercel.
- Replace **`public/favicon.svg`** if you want a different mark.
- Visual tokens (colors, fonts, shadows, grid) live in [`tailwind.config.ts`](tailwind.config.ts).
- Particle density / interaction is in [`src/components/hero/ParticleField.tsx`](src/components/hero/ParticleField.tsx).

## Deploy to GitHub Pages

The repo ships with a workflow that builds and publishes on every push to `main`.

1. **Create a GitHub repo** and push this project to it.
2. In the repo: **Settings → Pages → Build and deployment → Source: `GitHub Actions`**.
3. Push to `main`. The `.github/workflows/deploy.yml` workflow will:
   - Install with pnpm (frozen lockfile)
   - Build with `DEPLOY_TARGET=gh-pages` and `GH_REPO_NAME=<your-repo-name>` so Vite uses `/<your-repo-name>/` as the base path
   - Touch `.nojekyll` so GH Pages doesn't strip `_` prefixed files
   - Deploy via the official Pages actions

Your site will be live at `https://<user>.github.io/<your-repo-name>/`.

**Using a user/organization page (`<user>.github.io`)?**
Edit the env in `.github/workflows/deploy.yml`:

```yaml
env:
  DEPLOY_TARGET: gh-pages
  GH_REPO_NAME: ''   # empty → base becomes '/'
```

**Custom domain?** Add a `public/CNAME` file containing your domain (e.g. `example.com`), and set `GH_REPO_NAME: ''` so the base path stays `/`.

## Deploy to Vercel

Zero config — the included [`vercel.json`](vercel.json) sets framework/build/output.

- **Dashboard**: New Project → Import the repo → Deploy.
- **CLI**: `pnpm dlx vercel` (login first, then accept defaults).

The Vercel build runs with no `DEPLOY_TARGET`, so the base stays `/`.

## Project structure

```
src/
├── App.tsx                      # composes all sections
├── main.tsx
├── index.css                    # Tailwind + fonts + scrollbar
├── data/profile.ts              # ⭐ all editable content
├── types/profile.ts             # data contracts
├── hooks/
│   ├── useIsMobile.ts
│   └── useReducedMotion.ts
└── components/
    ├── layout/{Section,NavBar}.tsx
    ├── hero/{Hero,HeroContent,ParticleField}.tsx
    ├── about/{About,WhoamiTerminal}.tsx
    ├── projects/{Projects,ProjectFlipbook,ProjectStack,ProjectPage}.tsx
    ├── publications/{Publications,PubCard,PubFilter}.tsx
    ├── contact/Contact.tsx
    └── ui/{Tag,IconLink,GlowButton}.tsx
```

## Performance & accessibility

- **Mobile (≤ 768px)**: particle count drops 85 → 28, mouse-grab interaction is disabled, and the Projects book becomes a vertical card stack (`react-pageflip` is heavy and not great with touch).
- **`prefers-reduced-motion`**: tsParticles is replaced with a static SVG grid, Framer Motion respects the user setting (via `<MotionConfig reducedMotion="user">`), and the whoami terminal renders fully instead of typing.
- Fonts are bundled via `@fontsource` so the site works offline and avoids GH Pages CORS quirks.
- No React Three Fiber, no GLTF, no heavy 3D models — keeps the bundle small.

## License

MIT — do whatever, attribution is nice but not required.
