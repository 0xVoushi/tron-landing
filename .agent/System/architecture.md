# Targo Landing — Architecture

**Last Updated**: 2026-04-08

## Overview

Landing page for **Targo** — a logistics and transport brand. Currently a single-page hero section with video background, navbar, headline content, and a consultation CTA card. Built with Next.js App Router and Tailwind v4.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.2.2 (App Router) |
| UI | React 19.2.4 |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind v4 (CSS-only config, no tailwind.config.ts) |
| Icons | lucide-react ^1.7.0 |
| Font | Rubik (via next/font/google) |
| Testing | Jest 30 + React Testing Library 16 |
| Linting | ESLint 9 + eslint-config-next |
| Package manager | npm |

## Project Structure

```
tron-landing/
├── src/
│   ├── app/
│   │   ├── globals.css       # Tailwind import + @theme tokens + @layer utilities
│   │   ├── layout.tsx        # Root layout — Rubik font, metadata
│   │   ├── page.tsx          # Homepage — renders <HeroSection />
│   │   └── favicon.ico
│   └── components/
│       ├── hero/             # Page-specific hero section components
│       │   ├── HeroSection.tsx       # Orchestrator (Server Component)
│       │   ├── Navbar.tsx            # Client Component (useState)
│       │   ├── VideoBackground.tsx   # Client Component (useEffect/useRef)
│       │   ├── HeroContent.tsx       # Server Component
│       │   └── ConsultationCard.tsx  # Server Component
│       └── ui/               # Shared primitives
│           └── ClippedButton.tsx     # Parallelogram-clipped button
├── AGENTS.md                 # Agent rules (authoritative source for conventions)
└── package.json
```

Path alias: `@/*` → `src/*`

## Tailwind v4 Configuration

**No `tailwind.config.ts`** — all config lives in `src/app/globals.css`.

```css
@import "tailwindcss";

@theme inline {
  --color-brand-red: #EE3F2C;   /* → bg-brand-red, text-brand-red, border-brand-red */
  --color-brand-black: #000000; /* → bg-brand-black etc. */
  --font-rubik: var(--font-rubik); /* → font-rubik class */
}
```

### Custom Utility Classes (in `@layer utilities`)

| Class | Description |
|-------|-------------|
| `.btn-clipped-sm` | Parallelogram clip-path (8px offset) |
| `.btn-clipped-md` | Parallelogram clip-path (10px offset) |
| `.btn-clipped-lg` | Parallelogram clip-path (12px offset) |
| `.glass-card` | Glassmorphism effect (blur, gradient border, box-shadow) |
| `.hero-headline-shadow` | Multi-layer text-shadow for headline readability over video |

### Breakpoints (mobile-first)

| Prefix | Min-width |
|--------|-----------|
| (none) | mobile < 768px |
| `md:` | ≥ 768px |
| `lg:` | ≥ 1024px |

Always write default → `md:` → `lg:` (never reverse).

## Component Conventions

- **Named exports only** — no `export default function` on components.
- **One component per file**.
- `<button>` must have `type="button"` unless submitting a form.
- Default is **Server Component** — only add `'use client'` when using hooks or browser APIs.
- No inline `style={}` except for values impossible to express in Tailwind (e.g., complex gradients).

### Server vs Client components

| Component | Type | Reason |
|-----------|------|--------|
| HeroSection | Server | Composition only |
| HeroContent | Server | Static markup |
| ConsultationCard | Server | Static markup |
| Navbar | Client | `useState` for mobile menu |
| VideoBackground | Client | `useEffect`/`useRef` for muted prop |
| ClippedButton | Server | No hooks |

## Key Patterns

1. **Video muted via ref**: React doesn't reliably forward the `muted` prop to the DOM. `VideoBackground` sets `videoRef.current.muted = true` in `useEffect`. Do not remove this.
2. **Section composition**: `HeroSection` is a thin orchestrator that positions child components absolutely within a full-screen `<section>`.
3. **ClippedButton variants**: `variant="red"` (brand red bg) or `variant="white"` (white bg), three sizes via `size="sm|md|lg"`.

## Font Loading

Rubik loaded via `next/font/google` in `src/app/layout.tsx`. Injects `--font-rubik` CSS custom property on `<html>`. Referenced in `@theme inline` → available as `font-rubik` Tailwind class. Do not import fonts anywhere else.

## Testing

- Test files co-located with components: `Foo.tsx` → `Foo.test.tsx`
- Run: `npm test` or `npm test -- path/to/Component.test.tsx --no-coverage`
- jsdom doesn't process media queries — both mobile and desktop DOM branches exist simultaneously. Use `getAllBy*` when multiple matches are expected.
- `data-testid` acceptable when no semantic selector works.

## Commands

```bash
npm run dev      # Dev server
npm run build    # Production build
npm test         # Jest + RTL
npm run lint     # ESLint
```
