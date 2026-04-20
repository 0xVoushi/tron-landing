# Onboarding: Setting Up Claude for tron-landing

> **Time**: ~15 minutes
> **Requirements**: Claude subscription with Claude Code access, Node.js 20+, git, npm
> **Result**: A fully configured dev environment ready to build on the TRON Multisender landing page

---

## Step 0: Prerequisites

- [ ] **Claude subscription** — any plan with Claude Code access (Pro, Max, or Team)
- [ ] **Node.js 20+** — `node --version`
- [ ] **npm** — comes bundled with Node.js (`npm --version`)
- [ ] **git** — `git --version`
- [ ] **Project cloned** — `git clone <repo-url> && cd tron-landing`

---

## Step 1: Install Claude Code CLI

```bash
npm install -g @anthropic-ai/claude-code
claude login      # Opens browser for auth
claude --version  # Verify
```

> **Tip**: If you use `nvm`, install in the default Node version:
> `nvm use default && npm install -g @anthropic-ai/claude-code`

---

## Step 2: Project Setup

```bash
npm install
npm run dev       # Dev server at http://localhost:3000
```

Verify the page loads at `http://localhost:3000` (default `en` locale, unprefixed) and at `http://localhost:3000/ru` (Russian, prefixed) before proceeding. The project is localized via `next-intl` — all routes live under `src/app/[locale]/…`.

---

## Step 3: Understand the Stack

This is a **Next.js 16.2.2 (App Router) + React 19 + next-intl 4 + Tailwind v4** project. Read these before writing any code:

1. `AGENTS.md` — authoritative coding rules (breakpoints, conventions, Tailwind v4 quirks)
2. `.agent/System/architecture.md` — component map, tokens, patterns
3. `docs/i18n.md` — how copy, routing, and hreflang work
4. `.agent/SOP/i18n-and-seo.md` — how to ship a new page correctly

Key things that bite developers coming from other stacks:

| Gotcha | Detail |
|--------|--------|
| Tailwind v4 | No `tailwind.config.ts`. Config lives in `src/app/globals.css` inside `@theme inline {}` |
| Mobile-first breakpoints | Default (no prefix) = mobile. `md:` = ≥768px. Never reverse the order. |
| Server vs Client components | Default is Server. Add `'use client'` only when using hooks or browser APIs. |
| i18n routes | Every page lives under `src/app/[locale]/…`. Root-level `src/app/foo/page.tsx` bypasses locale routing. |
| Locale-aware links | Import `Link`, `usePathname`, `useRouter`, `redirect` from `@/i18n/routing`, never from `next/link` or bare `next/navigation`. ESLint enforces this. |
| Tests with translations | Use `renderWithIntl` from `@/test/render`, not plain RTL `render`, or `useTranslations` will throw. |
| Video `muted` prop | Set via `useEffect` + ref in `VideoBackground.tsx`. Do not "fix" this — it's intentional. |

---

## Step 4: .agent/ Structure

```
tron-landing/
├── AGENTS.md                      # Authoritative coding rules (read this first)
├── docs/i18n.md                   # i18n authoring + deploy reference
├── .agent/
│   ├── README.md                  # Documentation index
│   ├── System/
│   │   └── architecture.md        # Tech stack, directory map, Tailwind tokens, patterns
│   └── SOP/
│       ├── i18n-and-seo.md        # Shipping new pages / locales without breaking SEO
│       ├── onboarding-guide.md    # This file
│       └── agents-and-skills-guide.md
```

---

## Step 5: Creating a Project Agent (Optional)

Agents let you give Claude a scoped role for this project. Create `.claude/agents/developer.md`:

```yaml
---
name: developer
description: "Next.js 16 + React 19 + Tailwind v4 developer. Use for components, pages, styling."
tools:
  - read_files
  - write_files
  - edit_files
  - bash
  - grep
  - glob
model: claude-sonnet
---

# Developer — Targo Landing

You are a Next.js + React developer on the Targo landing page.

## Required Reading Before Starting

ALWAYS read these files first:
1. `AGENTS.md` — coding rules and conventions
2. `.agent/System/architecture.md` — architecture reference

## Do

- Use named exports only (`export function Foo`)
- Add `type="button"` to all `<button>` elements unless submitting a form
- Use Tailwind v4 classes; custom tokens live in `src/app/globals.css`
- Write default → `md:` → `lg:` for responsive classes (mobile-first)
- Follow TDD: write failing test → implement → verify green

## Don't

- Add `'use client'` unless the component uses hooks or browser APIs
- Use `tailwind.config.ts` — it doesn't exist in this project
- Reverse breakpoint order (e.g., `lg:text-sm md:text-base text-lg` is wrong)
- Use inline `style={}` unless the value can't be expressed in Tailwind
```

---

## Step 6: Common Commands

```bash
npm run dev                              # Dev server
npm run build                            # Production build (catches TS/lint errors)
npm run typecheck                        # tsc --noEmit (fast feedback before build)
npm test                                 # All tests
npm test -- src/components/hero/Navbar   # Single file
npm run lint                             # ESLint
npm run i18n:check                       # Verify messages/*.json key parity vs en.json
```

---

## Step 7: Readiness Checklist

- [ ] `npm run dev` runs without errors
- [ ] Homepage loads at `http://localhost:3000` (en) and `http://localhost:3000/ru` (ru)
- [ ] `npm test` — all tests pass
- [ ] `npm run build` — no TypeScript or lint errors
- [ ] `npm run i18n:check` exits clean
- [ ] `AGENTS.md`, `.agent/System/architecture.md`, and `docs/i18n.md` read and understood

---

## What's Next

1. **Architecture deep-dive**: `.agent/System/architecture.md`
2. **i18n & SEO workflow**: `.agent/SOP/i18n-and-seo.md` and `docs/i18n.md`
3. **Agents & Skills**: `.agent/SOP/agents-and-skills-guide.md`
4. **Build something**: Start from `src/app/[locale]/page.tsx` and work outward
