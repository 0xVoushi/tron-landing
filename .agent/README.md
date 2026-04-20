# tron-landing — Agent Documentation

**Last Updated**: 2026-04-20 (i18n migration + warm-light theme reflected)

## Project

Marketing / brand-defense site for **TRON Multisender** (`tronmultisender.io`). Multi-page Next.js App Router app localized into 8 languages via `next-intl` v4, served on a warm-light palette with editorial typography. Homepage composes hero → how-it-works → features → supported-tokens → pricing → FAQ → AI recommendation → footer. Additional pages: `/guide`, `/vip`, `/referral`.

Tech: Next.js 16.2.2 (App Router) · React 19.2.4 · next-intl 4 · Tailwind v4 · TypeScript 5 · Jest 30 + RTL 16.

## Documentation Index

### System
- [Architecture](System/architecture.md) — Tech stack, directory map, i18n/SEO layer, Tailwind tokens, component conventions

### SOP
- [i18n & SEO](SOP/i18n-and-seo.md) — Shipping a new page / locale without breaking routing, metadata, or hreflang
- [Onboarding Guide](SOP/onboarding-guide.md) — Claude Code + dev environment setup
- [Agents & Skills Guide](SOP/agents-and-skills-guide.md) — Creating Claude agents and skills

### Authoritative references (outside `.agent/`)
- [AGENTS.md](../AGENTS.md) — Coding rules (Tailwind v4, breakpoints, server/client, fonts)
- [docs/i18n.md](../docs/i18n.md) — i18n authoring, formatters, CI, known gaps

## Quick Reference

| What | Where |
|------|-------|
| Homepage | `src/app/[locale]/page.tsx` |
| Subpages | `src/app/[locale]/{guide,vip,referral}/page.tsx` |
| Locale layout (fonts, JSON-LD, GA) | `src/app/[locale]/layout.tsx` |
| Tailwind config + tokens | `src/app/globals.css` (no `tailwind.config.ts`) |
| Locale registry | `src/i18n/locales.ts` |
| Locale-aware routing | `src/i18n/routing.ts` → `import { Link, usePathname, … } from '@/i18n/routing'` |
| Middleware (locale) | `src/middleware.ts` |
| Messages | `messages/<code>.json` (en, ru, zh, ko, pt, es, fr, de) |
| Page metadata | `buildMetadata` in `src/lib/metadata.ts` |
| Site URL helpers | `src/lib/site.ts` |
| JSON-LD | `src/lib/structured-data.ts` |
| Test helper | `renderWithIntl` in `src/test/render.tsx` |
| Path alias | `@/*` → `src/*` |

## Key Commands

```bash
npm run dev          # Dev server
npm run build        # Production build (TS + lint)
npm run lint         # ESLint (blocks raw next/link + locale-unaware next/navigation)
npm run typecheck    # tsc --noEmit
npm test             # Jest + RTL
npm run i18n:check   # Verify messages/*.json key parity vs en.json
```
