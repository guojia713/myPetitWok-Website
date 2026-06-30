# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MyPetitWok is a landing page for a multilingual Asian recipe mobile app. It is a static site built with Astro 6, Tailwind CSS 4, and TypeScript (strict mode).

## Commands

- `npm run dev` — dev server at localhost:4321
- `npm run build` — production build to `./dist/`
- `npm run preview` — preview production build locally

No test runner or linter is configured.

## Architecture

**Pages** — `src/pages/[lang]/` holds the per-language routes: the landing page (`[lang].astro`) plus recipes, ingredients, articles, about, support, and legal pages. The root `src/pages/index.astro` redirects `/` to `/en`.

**i18n** — Language is part of the URL path (`/en`, `/fr`, `/zh`), served by the `src/pages/[lang]/` routes. All translatable strings live in `src/i18n/content.ts`, which exports a typed `t(lang)` function returning the full translation object. The `Lang` type is derived from the `languages` const array.

**Canonical URLs** — The static build and sitemap serve every route with a **trailing slash** (`/en/`, `/en/recipes/`). `Layout.astro` normalizes canonical, hreflang, `og:url`, and JSON-LD URLs to that same trailing-slash form via a `withSlash()` helper — they must match the served/sitemap URL exactly, or Google reports the crawled URL as a "duplicate page with proper canonical tag." Page `alternates` props may be passed without trailing slashes; the Layout adds them.

**Styling** — Tailwind CSS 4 is integrated as a Vite plugin (not PostCSS). Design tokens (brand colors, font) are defined as `@theme` variables in `src/styles/global.css` and referenced throughout as `var(--color-*)`. The font is Inter via Google Fonts.

**Layout** — `src/layouts/Layout.astro` provides the HTML shell, meta tags, Google Analytics snippet, and imports global CSS.

## Key Conventions

- Node >= 22.12.0 required
- All inline SVG icons are defined directly in `index.astro` (no icon library)
- GA4 tracking ID is placeholder `G-XXXXXXXXXX` in Layout.astro