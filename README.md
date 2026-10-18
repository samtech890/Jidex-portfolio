# JIDEX CODER Portfolio

Awwwards-caliber portfolio for **JIDEX CODER** — Creative Developer, Website Builder, Mobile App Builder, AI Automation Engineer, and Full Stack Developer.

## Stack

- **Next.js 15** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS** · **Framer Motion** · **GSAP** · **Lenis**
- **Three.js / React Three Fiber** · **cmdk** · **Embla Carousel**
- SEO: metadata, Open Graph, Twitter cards, JSON-LD, sitemap, robots

## Quick start

```bash
cd jidex-coder-portfolio
npm install --legacy-peer-deps --ignore-scripts
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> On some Windows setups where `next` is not on PATH, scripts already call the Next binary via Node.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server (Turbopack) |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run lint` | ESLint |

## What's included

### Experience
- Immersive dark hero with R3F neural orb, typing roles, floating code
- Glass sticky navbar, custom cursor, scroll progress, noise & spotlight
- Smooth Lenis scrolling + GSAP ScrollTrigger hooks
- Command palette (`Ctrl/Cmd + K`)
- Interactive terminal (`help`, `about`, `projects`, `skills`, `contact`, `resume`)
- Music toggle, theme toggle, achievement badges

### Sections
About · Services (20) · Projects (12) · Tech Stack · Experience · Testimonials · GitHub activity · Latest repos · Blog · Pricing · Contact · Footer

### Pages
- `/` — full landing experience
- `/projects/[slug]` — 12 case studies
- `/blog` + `/blog/[slug]` — 8 articles
- `/sitemap.xml` · `/robots.txt` · OG image

## Customize

1. `src/lib/constants.ts` — name, email, socials, Calendly, WhatsApp
2. `src/data/projects.ts` · `src/data/content.ts` — content
3. Drop images in `public/projects/`
4. Replace `public/resume.pdf.txt` with your real `public/resume.pdf`
5. Wire EmailJS keys from `.env.example` into the contact form
6. Set `SITE.url` before Vercel deploy

## Deploy

Connect the repo to [Vercel](https://vercel.com) — zero config (`vercel.json` included).

## Note on Node

Built and verified on Node 18+. Node 20+ recommended for latest tooling.

## License

Private portfolio. All rights reserved.
