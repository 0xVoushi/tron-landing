# Targo Landing — Agent Documentation

**Last Updated**: 2026-04-08 (onboarding guide rewritten for Next.js/React stack)

## Project

Landing page for **Targo** (logistics/transport brand). Single-page hero section with video background.
Tech: Next.js 16.2.2 (App Router) + React 19 + Tailwind v4 + TypeScript 5.

## Documentation Index

### System
- [Architecture](System/architecture.md) — Tech stack, project structure, Tailwind v4 config, component conventions, patterns

### SOP
- [Agents & Skills Guide](SOP/agents-and-skills-guide.md) — How to create Claude agents and skills
- [Onboarding Guide](SOP/onboarding-guide.md) — Claude Code setup walkthrough

## Quick Reference

| What | Where |
|------|-------|
| Homepage | `src/app/page.tsx` |
| Root layout + font | `src/app/layout.tsx` |
| Tailwind config + tokens | `src/app/globals.css` |
| Hero components | `src/components/hero/` |
| Shared UI primitives | `src/components/ui/` |
| Path alias | `@/*` → `src/*` |

## Key Commands

```bash
npm run dev    # Dev server
npm run build  # Production build
npm test       # Jest + RTL
npm run lint   # ESLint
```
