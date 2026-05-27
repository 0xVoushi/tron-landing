# tron-landing — Architecture

**Last Updated**: 2026-04-20

## Overview

Marketing / brand-defense site for **TRON Multisender** (`trxsend.com`). Multi-page Next.js App Router app, localized into 8 languages via `next-intl` v4, served on a warm-light brand palette with editorial typography. Homepage composes hero → how-it-works → features → supported-tokens → pricing → FAQ → AI recommendation → footer. Additional landing pages for `/guide`, `/vip`, and `/referral`.

Canonical coding rules: [../../AGENTS.md](../../AGENTS.md). Canonical i18n reference: [../../docs/i18n.md](../../docs/i18n.md). This file is the map; those two are the rulebooks.

## Tech Stack

| Layer | Tech | Notes |
|-------|------|-------|
| Framework | Next.js 16.2.2 (App Router) | `src/app/[locale]/…` — every route is locale-scoped |
| UI | React 19.2.4 | Server components by default |
| i18n | next-intl ^4.9.1 | `localePrefix: 'as-needed'`, cookie `ms_locale` |
| Styling | Tailwind v4 | CSS-only config in `src/app/globals.css` (no `tailwind.config.ts`) |
| Language | TypeScript 5 (strict) | `@/*` → `src/*` |
| Icons | lucide-react | |
| 3D / effects | three, postprocessing | Used by hero `PixelBlast` component |
| Analytics | `@next/third-parties/google` | `GoogleAnalytics` loaded in locale layout when `NEXT_PUBLIC_GA_ID` is set |
| Font | Rubik via `next/font/google` | subsets: `latin`, `cyrillic`. CJK falls back to system. |
| Testing | Jest 30 + RTL 16 + jsdom 30 | Use `renderWithIntl` helper |
| Linting | ESLint 9 + `eslint-config-next` | Blocks `next/link` and locale-unaware `next/navigation` helpers |

## Project Structure

```
tron-landing/
├── AGENTS.md                          # Coding rules (authoritative)
├── docs/i18n.md                       # i18n authoring + deploy reference (authoritative)
├── messages/<code>.json               # 8 locales: en, ru, zh, ko, pt, es, fr, de
├── scripts/i18n-check.ts              # key-parity validator (npm run i18n:check)
├── src/
│   ├── middleware.ts                  # next-intl locale routing
│   ├── app/
│   │   ├── globals.css                # Tailwind import + @theme tokens + @layer utilities
│   │   ├── sitemap.ts                 # per-locale sitemap with hreflang alternates
│   │   ├── robots.ts
│   │   └── [locale]/
│   │       ├── layout.tsx             # Root HTML, fonts, NextIntlClientProvider, GA, JSON-LD
│   │       ├── page.tsx               # Homepage composition
│   │       ├── guide/page.tsx
│   │       ├── vip/page.tsx
│   │       └── referral/page.tsx
│   ├── i18n/
│   │   ├── locales.ts                 # single source of truth for supported locales
│   │   ├── routing.ts                 # defineRouting + createNavigation helpers
│   │   ├── request.ts                 # getRequestConfig (message loading + fallback)
│   │   └── formats.ts                 # Intl number/date format presets
│   ├── lib/
│   │   ├── site.ts                    # SITE_URL, absoluteUrl, localizedPath/Url
│   │   ├── metadata.ts                # buildMetadata() for generateMetadata in every page
│   │   └── structured-data.ts         # JSON-LD: Organization, SoftwareApplication, HowTo, WebSite, FAQPage
│   ├── components/
│   │   ├── hero/                      # HeroSection, HeroContent, Navbar, ConsultationCard, VideoBackground, PixelBlast
│   │   ├── sections/                  # HowItWorks, Features, SupportedTokens, PricingSection, FaqSection, StatsBar
│   │   ├── ai-recommendation/         # AiRecommendation
│   │   ├── locale-switcher/           # LocaleSwitcher (client, used in Navbar)
│   │   ├── footer/                    # SocialLinks, icons
│   │   ├── layout/                    # Footer
│   │   └── ui/                        # Logo, MobileLaunchButton, PillButton
│   ├── data/                          # faq.ts, guide.ts — *_KEYS tuples lock ordering in code
│   └── test/render.tsx                # renderWithIntl helper (wraps RTL with NextIntlClientProvider)
└── .agent/                            # This directory — agent-facing docs
```

## Internationalization

Full playbook in [../../docs/i18n.md](../../docs/i18n.md). The short version:

- 8 locales defined once in [../../src/i18n/locales.ts](../../src/i18n/locales.ts). Everything else (middleware, sitemap, hreflang, switcher, `generateStaticParams`) reads from that registry.
- Default locale `en` is unprefixed; others are served under `/<code>/…`.
- All pages live under `src/app/[locale]/…`. Every page must `setRequestLocale(locale)` at the top of its default export.
- Copy lives in `messages/<code>.json`. `npm run i18n:check` fails the build on missing keys vs `en.json`.
- **Never** use `next/link` or `next/navigation`'s `usePathname`/`useRouter`/`redirect` for internal navigation — import locale-aware versions from `@/i18n/routing`. ESLint enforces this.
- Tests import `renderWithIntl` from `@/test/render` — not plain RTL `render`.

## SEO & metadata

- Per-page `generateMetadata` calls `buildMetadata({ locale, titleKey, descriptionKey, path, … })` from [../../src/lib/metadata.ts](../../src/lib/metadata.ts). It injects canonical, hreflang alternates (including `x-default`), Open Graph, Twitter, and robots in one shot.
- JSON-LD is rebuilt per locale by `buildStructuredData(locale)` and rendered as `<script type="application/ld+json">` in the locale layout.
- Sitemap emits one entry per `(route × locale)` with cross-locale `alternates.languages`.
- Shared site constants (`SITE_URL`, `SITE_OG_IMAGE`, URL helpers) live in [../../src/lib/site.ts](../../src/lib/site.ts). Never hard-code URLs.

## Tailwind v4 Configuration

All config in `src/app/globals.css`:

```css
@import "tailwindcss";

@theme inline {
  --color-primary: hsla(2, 60%, 48%, 1);       /* warm brand red */
  --color-primary-light / -medium / -pale / -dark / -heavy / -ghost
  --color-success / -warning
  --color-dark / -dark-hard / -grey / -grey-light / -grey-medium
  --color-white-3 … -white-80                   /* white alpha ramps */
  --color-black-4  … -black-80                  /* black alpha ramps */
  --color-brand-red / --color-brand-black       /* legacy aliases, still in use */
  --font-rubik: var(--font-rubik);
}
```

The palette was flipped from dark-hero to a warm-light base in March–April 2026; several legacy token aliases (`brand-red`, `brand-black`) are kept so older components don't break. New work should prefer the `primary-*` / `dark` / `grey-*` tokens.

Custom utilities (defined in `@layer utilities`):

| Class | Purpose |
|-------|---------|
| `.glass-card` | Light card: white bg, hairline border, soft shadow |
| `.glass-card-dark` | Dark-mode variant (blur + dark alpha) |
| `.btn-shimmer` | Hover sweep highlight for CTA buttons |
| `.hero-headline-shadow` | Multi-layer text shadow (legacy, pre-light-theme) |
| `.animate-saturate-pulse` | Hero background breathe |
| `.animate-float-slow` / `.animate-float-medium` | Decorative float loops |

### Breakpoints (mobile-first — CRITICAL)

Default (no prefix) = mobile. `md:` ≥ 768px. `lg:` ≥ 1024px. Always write **default → md: → lg:**, never reverse. See `AGENTS.md` for examples.

## Component conventions

- **Named exports only** (`export function Foo`). No `export default function` on components.
- One component per file. Tests co-located: `Foo.tsx` → `Foo.test.tsx`.
- Default is **Server Component**. Add `'use client'` only for hooks (`useState`, `useEffect`, `useRef`, …) or browser APIs.
- `<button>` must have `type="button"` unless submitting a form.
- Avoid inline `style={}` unless the value can't be expressed in Tailwind.
- Ordered content lists (FAQ items, guide steps, pricing plans) keep their order in a `*_KEYS` tuple in `src/data/…`; JSON only stores the translated values.

### Notable components

| Component | Type | Why |
|-----------|------|-----|
| `Navbar` | Client | `useState` for mobile menu, scroll-driven style |
| `VideoBackground` | Client | `useEffect`/`useRef` to set `muted` — do **not** remove |
| `PixelBlast` | Client | three.js shader backdrop |
| `LocaleSwitcher` | Client | Reads current locale + path from next-intl |
| `AiRecommendation` | Client | Interactive quiz / form |
| All hero/section/footer composition | Server | Static markup |

## Testing

- Run: `npm test` or `npm test -- path/to/Component.test.tsx --no-coverage`
- Use `renderWithIntl` from `@/test/render` so components that call `useTranslations()` get a message provider. Plain RTL `render` will throw at runtime.
- jsdom doesn't evaluate media queries — both mobile and desktop DOM branches render simultaneously. Use `getAllBy*` when multiple matches are expected.
- `data-testid` is acceptable when no semantic selector fits.

## Commands

```bash
npm run dev          # Next dev server
npm run build        # Production build (runs TS + lint)
npm run start        # Serve the production build
npm run lint         # ESLint
npm run typecheck    # tsc --noEmit
npm test             # Jest + RTL
npm run i18n:check   # Verify key parity across messages/*.json vs en.json
```

## Related docs

- [../../AGENTS.md](../../AGENTS.md) — coding rules (authoritative)
- [../../docs/i18n.md](../../docs/i18n.md) — i18n deep dive
- [../SOP/i18n-and-seo.md](../SOP/i18n-and-seo.md) — how to ship a new page correctly
- [../SOP/onboarding-guide.md](../SOP/onboarding-guide.md) — dev environment setup
