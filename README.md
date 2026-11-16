# Addeche Mahdi — Portfolio

[![CI](https://github.com/MehdiR20/portfolio-mehdi/actions/workflows/ci.yml/badge.svg)](https://github.com/MehdiR20/portfolio-mehdi/actions/workflows/ci.yml)

Personal portfolio of **Addeche Mahdi**, Software Engineer (web & AI).
**Live:** https://portfolio-mehdi-one.vercel.app

## Stack
Next.js (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion · react-icons · Vitest · Vercel

## Features
- Light / dark theme with no flash on load
- Experience & education timeline, filterable projects with expandable details
- Skills toolbox with technology icons and an animated marquee
- Downloadable CV, contact section, SEO metadata, Open Graph image, sitemap and robots.txt

## Project structure
```
app/                 # layout, page, OG image, sitemap, robots
components/layout/   # navbar, footer, theme toggle
components/sections/ # hero, experience, projects, skills, contact
components/shared/   # reusable UI (motion, tags, icons)
data/portfolio.ts    # all content lives here
tests/               # Vitest data-integrity tests
```

## Development
```bash
npm install
npm run dev        # http://localhost:3000
npm test           # unit tests
npm run lint
npm run typecheck
npm run build
```

Content (experience, projects, skills, links) is edited in `data/portfolio.ts`; the tests check that every skill has an icon, ids are unique and referenced files exist.

## License
[MIT](LICENSE)
