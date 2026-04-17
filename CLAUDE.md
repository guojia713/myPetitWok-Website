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

**Single-page site** — `src/pages/index.astro` is the only page. It renders nav, hero, story, features, download/QR, and footer sections.

**i18n** — Language switching uses a `?lang=` query parameter (en/fr/zh). All translatable strings live in `src/i18n/content.ts`, which exports a typed `t(lang)` function returning the full translation object. The `Lang` type is derived from the `languages` const array.

**Styling** — Tailwind CSS 4 is integrated as a Vite plugin (not PostCSS). Design tokens (brand colors, font) are defined as `@theme` variables in `src/styles/global.css` and referenced throughout as `var(--color-*)`. The font is Inter via Google Fonts.

**Layout** — `src/layouts/Layout.astro` provides the HTML shell, meta tags, Google Analytics snippet, and imports global CSS.

## Key Conventions

- Node >= 22.12.0 required
- All inline SVG icons are defined directly in `index.astro` (no icon library)
- GA4 tracking ID is placeholder `G-XXXXXXXXXX` in Layout.astro