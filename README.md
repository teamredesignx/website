# Team Redesign website

The landing page for [Team Redesign](https://x.com/teamredesignx), a website redesign studio in Sydney.
Built with Next.js (App Router), React and TypeScript. Fully static, deployed on Vercel.

## The idea

The logo pairs a narrow-light "team" with a wide-heavy "redesign", split by a bar. The page is built around that bar:

- The headline opens outward from it on load.
- The hero is a draggable before/after of a fictional plumbing site, and the divider is the same bar.
- Section titles repeat the narrow-light, bar, wide-heavy pairing.

## Brand rules (from the logo guide)

- **Colour:** Ink `#15151B` and Paper `#F2F2EF`. Stone `#8B8B95` is for supporting text only, never the logo.
- **Type:** Archivo (variable weight and width) for everything. Martian Mono for small labels, captions and data only, in capitals with 0.06em tracking.
- **Logo:** always one solid colour. The header uses the animated GIF; visitors who prefer reduced motion get the still SVG.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint (Next.js core web vitals and TypeScript rules) |
| `npm run typecheck` | TypeScript, no emit |

## Structure

```
src/
  app/               Routes and metadata files
    layout.tsx         Fonts, metadata, JSON-LD
    page.tsx           The page, composed from section components
    globals.css        Tokens, base styles, type helpers
    not-found.tsx      404
    robots.ts, sitemap.ts, manifest.ts
    opengraph-image.png, twitter-image.png, icon.svg, apple-icon.png, favicon.ico
  components/        One folder or file per section, each with its own CSS module
    compare/           Before/after slider (client) and the two example sites (server)
    ui/                Button, SectionTitle
  lib/
    site.ts            Name, email, socials, URL helpers
    content.ts         All page copy and project data
public/
  brand/             Logo files (animated GIF, lockup and mark SVGs)
  work/              Screenshots of recent redesigns
```

Copy lives in `src/lib/content.ts` and site details in `src/lib/site.ts`, so wording changes do not touch components.

## Configuration

The production URL comes from Vercel's `VERCEL_PROJECT_PRODUCTION_URL`. To use a custom domain, set
`NEXT_PUBLIC_SITE_URL` (see `.env.example`). It feeds the canonical URL, Open Graph tags, sitemap and structured data.

## Accessibility and performance

- Semantic landmarks, one `h1`, a skip link and visible keyboard focus.
- The comparison is a native range input: drag it, or use the arrow keys, Home and End.
- Respects `prefers-reduced-motion` for the headline reveal, the slider sweep, the logo and the hover preview.
- Fonts are self-hosted through `next/font`. Screenshots are served through `next/image`.
- Hover previews only run with a fine pointer. Touch devices show each screenshot inline.
