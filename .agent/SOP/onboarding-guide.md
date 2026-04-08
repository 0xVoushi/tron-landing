# Onboarding: Setting Up Claude for tron-landing

> **Time**: ~15 minutes
> **Requirements**: Claude subscription with Claude Code access, Node.js 20+, git, npm
> **Result**: A fully configured dev environment ready to build on the Targo landing page

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

Verify the page loads with the hero video background before proceeding.

---

## Step 3: Understand the Stack

This is a **Next.js 16.2.2 (App Router) + React 19 + Tailwind v4** project. Read these two files before writing any code:

1. `AGENTS.md` — authoritative coding rules (breakpoints, conventions, Tailwind v4 quirks)
2. `.agent/System/architecture.md` — component map, tokens, patterns

Key things that bite developers coming from other stacks:

| Gotcha | Detail |
|--------|--------|
| Tailwind v4 | No `tailwind.config.ts`. Config lives in `src/app/globals.css` inside `@theme inline {}` |
| Mobile-first breakpoints | Default (no prefix) = mobile. `md:` = ≥768px. Never reverse the order. |
| Server vs Client components | Default is Server. Add `'use client'` only when using hooks or browser APIs. |
| Video `muted` prop | Set via `useEffect` + ref in `VideoBackground.tsx`. Do not "fix" this — it's intentional. |

---

## Step 4: .agent/ Structure

```
tron-landing/
├── AGENTS.md                      # Authoritative coding rules (read this first)
├── .agent/
│   ├── README.md                  # Documentation index
│   ├── System/
│   │   └── architecture.md        # Tech stack, component map, Tailwind config, patterns
│   └── SOP/
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
npm test                                 # All tests
npm test -- src/components/hero/Navbar   # Single file (no --no-coverage flag needed)
npm run lint                             # ESLint
```

---

## Step 7: Readiness Checklist

- [ ] `npm run dev` runs without errors
- [ ] Homepage loads with video background in browser
- [ ] `npm test` — all tests pass
- [ ] `npm run build` — no TypeScript or lint errors
- [ ] `AGENTS.md` and `.agent/System/architecture.md` read and understood

---

## What's Next

1. **Architecture deep-dive**: `.agent/System/architecture.md`
2. **Agents & Skills**: `.agent/SOP/agents-and-skills-guide.md`
3. **Build something**: Start from `src/app/page.tsx` and work outward
