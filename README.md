# Cybernium

Marketing website for **Cybernium Limited** — business technology, delivered. Built from the
[Site Design Figma file](https://www.figma.com/design/sGnaPVd6uukaZPuB4sPMIm/Site-Design) using
Astro + Tailwind CSS v4, output as a fully static site.

## Stack

- [Astro 5](https://astro.build) — static site generator, `.astro` components
- [Tailwind CSS 4](https://tailwindcss.com) — design tokens from Figma live in `src/styles/global.css` (`@theme`)
- Fonts: Red Hat Display (headings) + Inter (body) via Google Fonts
- No client framework — small vanilla scripts for the mega menu, mobile nav, FAQ accordion, industries carousel, and the quote form

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview
```

## Structure

- `src/pages/` — routes: `/`, `/about`, `/quote`, `/blog`, `/blog/[slug]`, `/services/[slug]`
- `src/layouts/` — `Base.astro` (nav + CTA + footer shell), `ServicePage.astro` (shared service template)
- `src/components/` — Nav (with mega menu + mobile menu), Footer, CtaSection, SpinBadge, BenefitsBanner, ArticleCard
- `src/data/` — services, blog articles, and FAQ content extracted from the Figma file
- `public/assets/` — icons, logos, and photography exported from Figma
