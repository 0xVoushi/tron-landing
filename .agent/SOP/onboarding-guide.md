# Onboarding: Setting Up Claude for Multisender Landing

> **Time**: ~30 minutes
> **Requirements**: Claude subscription with Claude Code access, Node.js 20+, git, pnpm
> **Result**: A fully configured environment with agents, skills, and MCP

---

## Step 0: Prerequisites

- [ ] **Claude subscription** -- any plan with Claude Code access (Pro, Max, or Team)
- [ ] **Node.js 20+** -- `node --version`
- [ ] **pnpm** -- `pnpm --version` (if not installed: `npm install -g pnpm`)
- [ ] **git** -- `git --version`
- [ ] **Project cloned** -- agents and settings live in `.claude/` inside the repo

---

## Step 1: Installing Claude Code (CLI)

```bash
npm install -g @anthropic-ai/claude-code
claude login      # Opens browser for auth
claude --version  # Verify
```

> **Tip**: If you use `nvm`, install in the default Node version: `nvm use default && npm install -g @anthropic-ai/claude-code`

---

## Step 2: Installing Claude Desktop + Cowork

1. Download **Claude Desktop** -- [claude.ai/download](https://claude.ai/download)
2. Log in with the same account
3. Enable **Cowork mode** -- Settings -> Features -> Cowork (if available)

> Claude Code and Cowork are two interfaces to the same subscription. Agents run in Code, skills work everywhere.

---

## Step 3: Project Setup

```bash
cd /path/to/multisender-landing
pnpm install
pnpm dev          # Verify the project runs
```

### Project-specific context

This is a **Nuxt 3 / Vue 3** project, NOT Next.js/React. Key differences for agents:
- Components use `<script setup lang="ts">` (Vue 3 Composition API)
- Styling: SCSS with `<style scoped lang="scss">`, not styled-components
- Responsive: SCSS mixins (`@include vw-sm { ... }`), not JS breakpoints
- i18n: `$t('key')` / `useI18n()`, 7 languages
- Routing: file-based via `pages/` directory (Nuxt convention)

---

## Step 4: .claude/ Structure

```
multisender-landing/
├── CLAUDE.md                    # Project context (ALWAYS read by Claude)
├── .claude/
│   ├── settings.json            # MCP servers (shared, in git)
│   ├── settings.local.json      # Personal settings (in .gitignore)
│   ├── agents/                  # Roles for Claude Code
│   │   ├── nuxt-developer.md    # Nuxt 3 + Vue 3 development
│   │   ├── product-manager.md
│   │   ├── refactoring-specialist.md
│   │   └── testing-engineer.md
│   └── commands/                # Slash commands
│       ├── code-review.md
│       └── update-doc.md
├── .agent/                      # Agent documentation
│   ├── README.md                # Documentation index
│   ├── System/
│   │   └── architecture.md      # Full architecture reference
│   └── SOP/
│       ├── onboarding-guide.md  # This file
│       └── agents-and-skills-guide.md
```

### settings.json vs settings.local.json

| File | In git? | Contains |
|------|---------|----------|
| `settings.json` | Yes | MCP servers shared across the team |
| `settings.local.json` | No | Personal permissions, tokens |

---

## Step 5: Creating an Agent

An agent is an `.md` file in `.claude/agents/` that defines a role.

### Quick Start

Create `.claude/agents/developer.md`:

```yaml
---
name: developer
description: "Nuxt 3 + Vue 3 developer. Use for writing components, pages, and features."
tools:
  - read_files
  - write_files
  - edit_files
  - bash
  - grep
  - glob
model: claude-sonnet
---

# Developer -- Multisender Landing

You are a Nuxt 3 / Vue 3 developer on the Multisender landing page.

## Required Reading Before Starting

**ALWAYS** read these files first:
1. `.agent/README.md` -- Documentation index
2. `.agent/System/architecture.md` -- Full architecture

## Tech Stack

- **Framework**: Nuxt 3 (^3.11.2) + Vue 3 Composition API
- **Language**: TypeScript 5
- **Styling**: SCSS (scoped) + CSS custom properties
- **i18n**: @nuxtjs/i18n (7 languages)

## Do

- Use `<script setup lang="ts">` for all components
- Use scoped SCSS with design tokens from `_variables.scss`
- Use responsive mixins from `styles/media.scss`
- Add all user-facing strings to `locales/*.json`
- Follow existing section component patterns

## Don't

- Hardcode user-facing text (use i18n)
- Use raw `@media` queries (use SCSS mixins)
- Use unscoped styles in components
- Import React or Next.js patterns
```

### Invoke

```bash
claude
> /agent developer
> Add a new "Partners" section to the homepage
```

---

## Step 6: Creating a Skill

```bash
mkdir -p .claude/.skills/multisender-conventions
```

Create `.claude/.skills/multisender-conventions/SKILL.md`:

```yaml
---
name: multisender-conventions
description: >
  Multisender Landing coding conventions and patterns. Activates when
  creating components, sections, or pages. Ensures Nuxt 3 / Vue 3 /
  SCSS consistency. Trigger keywords: component, section, page, style.
---

# Multisender Conventions

## Component Pattern

- `<script setup lang="ts">` -- always
- `<style scoped lang="scss">` -- always
- Props: `defineProps<{ ... }>()`
- Emits: `defineEmits<{ ... }>()`

## Responsive

Use SCSS mixins (desktop-down breakpoints):
- `@include vw-xl` -- <= 1440px
- `@include vw-lg` -- <= 1224px
- `@include vw-md` -- <= 1024px
- `@include vw-sm` -- <= 768px
- `@include vw-xsm` -- <= 520px
- `@include vw-xs` -- <= 360px

## i18n

All text via `$t('section.key')`. Update all 7 locale files.

## Naming

- Components: PascalCase
- Composables: `useCamelCase.ts`
- Constants: camelCase files, UPPER_SNAKE for values
- CSS vars: `--networks-kebab-case`
```

---

## Step 7: Connecting MCP Servers

### settings.json Format

```json
{
  "mcpServers": {
    "server-name": {
      "command": "npx",
      "args": ["-y", "package-name@latest"],
      "env": { "API_KEY": "your-key" }
    }
  }
}
```

### Verification

```bash
claude
> /mcp        # Shows connected servers
```

---

## Step 8: First Workflow

```bash
cd /path/to/multisender-landing
claude

# Invoke agent
> /agent developer

# Give a task
> Add a "Supported Wallets" section to the networks page.
> Follow the existing section component pattern in components/section/.

# Claude will:
#   1. Read CLAUDE.md and architecture docs
#   2. Study existing section components
#   3. Create the section following conventions
#   4. Add i18n keys to all 7 locale files
```

---

## Step 9: Readiness Checklist

### Infrastructure
- [ ] Claude Code installed and authenticated
- [ ] `pnpm dev` runs without errors
- [ ] `CLAUDE.md` exists in the project root

### Project Structure
- [ ] `.claude/agents/` -- at least one agent exists
- [ ] `.claude/commands/` -- at least one command exists
- [ ] `.claude/settings.json` -- MCP servers configured
- [ ] `.claude/settings.local.json` added to `.gitignore`

### Verification
- [ ] `/agent [name]` -- agent loads
- [ ] `/code-review` -- command works
- [ ] MCP tools available

---

## What's Next

1. **Read the agents guide**: `.agent/SOP/agents-and-skills-guide.md`
2. **Study the architecture**: `.agent/System/architecture.md`
3. **Add project-specific agents** using templates from the guide
