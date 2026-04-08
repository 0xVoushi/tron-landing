# Guide to Creating Agents and Skills for Claude

> **Platform**: Claude (claude.ai, Claude Code, Cowork)
> **Version**: March 2026

---

## Table of Contents

- [Part 1: Agents](#part-1-agents)
- [Part 2: Skills](#part-2-skills)
- [Part 3: Best Practices from Official Documentation](#part-3-best-practices)
- [Part 4: Templates](#part-4-templates)
- [Part 5: Quality Checklist](#part-5-quality-checklist)

---

## Part 1: Agents

### What Is an Agent in the Context of Claude Code

An agent is a **specialization profile** for Claude. It is an `.md` file in the `.claude/agents/` folder that defines the role, expertise, available tools, and workflow. When an agent is invoked, Claude loads its instructions and operates within the given context.

With a **Claude subscription** that includes Claude Code, you do not need the Agent SDK — agents already work through Claude Code. In claude.ai/Cowork, skills serve a similar purpose.

### Where Agents Live

```
.claude/agents/
├── nuxt-developer.md        # Nuxt 3 / Vue 3 developer
├── product-manager.md       # Product manager
├── refactoring-specialist.md # Refactoring specialist
├── testing-engineer.md      # Testing engineer
└── my-new-agent.md          # Your new agent
```

### Agent File Structure

```yaml
---
name: agent-name              # kebab-case, no spaces
description: "When to use this agent. Trigger keywords."
tools:                        # Available tools
  - read_files
  - write_files
  - edit_files
  - bash
  - grep
  - glob
model: claude-sonnet           # Model (sonnet/opus/haiku)
---

# Agent Name — Project Context

Brief description of the role (1-2 sentences).

## Required Reading Before Starting

**ALWAYS** read these files first:
1. `.agent/README.md` — Documentation index
2. `.agent/System/architecture.md` — Project architecture

## Expertise

- **Framework**: Nuxt 3 (^3.11.2) + Vue 3 Composition API
- **Language**: TypeScript
- **Styling**: SCSS (scoped) + CSS custom properties

## Workflow

1. **Context**: Read the architecture
2. **Patterns**: Check existing solutions in `components/section/`
3. **Implementation**: Follow the SOP and conventions
4. **Validation**: Run linter, check responsive breakpoints, verify i18n

## Best Practices

- Use `<script setup lang="ts">` for all components
- Use SCSS mixins from `styles/media.scss` for responsive design
- Use CSS custom properties from `styles/networks/_variables.scss`
- All user-facing strings go through i18n (`$t()` / `useI18n()`)
- Never hardcode text, use raw `@media` queries, or create unscoped styles

## Related Documentation

- Links to SOPs and architecture
```

### Agent vs Skill: When to Use Which

| Criterion | Agent | Skill |
|-----------|-------|-------|
| **Where it works** | Claude Code | Claude Code, claude.ai, Cowork |
| **Scope** | Entire role/persona | Specific task/domain |
| **Loading** | On explicit invocation | Automatically by triggers |
| **Size** | Single `.md` file | Folder with `.md` + resources |
| **Best for** | Project work, coding | Repeatable workflows, templates |
| **Sharing** | Via git (file in repo) | zip → Settings, via git |

### Rules for a Good Agent

1. **Start with Required Reading** — the agent should know what to read first
2. **Specify a concrete stack** — not just "frontend" in the abstract, but exact versions
3. **Workflow = step-by-step process** — what to do and in what order
4. **Do/Don't** — explicit rules on what is allowed and what is not
5. **Link to SOPs** — the agent should not duplicate documentation, but reference it
6. **model** — choose deliberately: `haiku` for simple tasks, `sonnet` for balance, `opus` for complex ones

### Pattern: Agent Hierarchy (Orchestration)

When a project uses multiple agents, a **chain of command** becomes necessary — not all agents are equal.

**Three levels of hierarchy:**

```
Human (you)
  └── Coordinator — decomposes tasks, assigns work, collects results
        ├── Supervisor — monitors quality, helps those who are stuck
        └── Workers — execute specific isolated tasks
```

**How this works in practice (Claude Code):**

The Coordinator is an agent that **does not write code itself**, but rather:
1. Receives a high-level assignment from you
2. Decomposes it into atomic tasks
3. Invokes specialized agents via sub-agents (`Task` tool)
4. Collects results and verifies integrity

This reduces cognitive load: you communicate with a single coordinator instead of juggling a dozen sessions.

> **Pattern source:** Gas Town (Steve Yegge) — the "Mayor → Witness → Polecats" system as a prototype of agent hierarchy. See [Maggie Appleton — Gas Town](https://maggieappleton.com/gastown)

### Catalog of Typical Agent Roles

| Role | What It Does | When It Is Needed |
|------|-------------|-------------------|
| **Coordinator** | Decomposes tasks, assigns, collects | When there are 3+ tasks and parallel work is needed |
| **Frontend Developer** | UI, components, styles, responsiveness | Visual part of the project |
| **Code Reviewer** | Reviews diffs, finds bugs, enforces standards | After every major PR |
| **Refactoring Specialist** | Cleans up code, improves architecture | Tech debt, preparing for a new feature |
| **Documentation Writer** | Writes/updates documentation | After changes to API or architecture |
| **Accessibility Auditor** | Checks a11y, WCAG | Before release |
| **Product Manager** | Prioritization, specs, roadmap | Sprint planning |
| **DevOps / CI** | Pipelines, deployment, monitoring | Setting up/debugging CI/CD |

You do not need to create all of them — start with 2-3 roles that cover your daily workflow.

> **For long autonomous sessions** — Harness Engineering patterns (ephemeral sessions, persistent state, progress tracking) are described in a separate guide: `outputs/agent-project-integration.md` → "Harness Engineering" section.

---

## Part 2: Skills

### What Is a Skill

A skill is a **modular package** that extends Claude's capabilities with specialized knowledge, workflows, and tools. Unlike an agent, a skill is triggered automatically when the user's request matches the skill's description.

### Architecture: Progressive Disclosure (Three-Level Loading)

The key idea is **not to waste context unnecessarily**:

```
Level 1: Metadata           → ALWAYS in memory (~100 tokens)
            name + description from YAML

Level 2: Instructions        → When the skill fires (<5k tokens)
            Body of SKILL.md

Level 3: Resources           → On demand (∞)
            scripts/, references/, assets/
```

**Why this matters**: Claude has a limited context window. If you stuff everything into SKILL.md, there will be no room left for other instructions and conversation history. Progressive disclosure ensures that only what is needed right now gets loaded.

### Skill Structure

```
my-skill/
├── SKILL.md              # [required] Main instructions
├── references/           # [optional] Reference materials
│   ├── api-docs.md       #   Claude reads as needed
│   └── schemas.md        #   Does not consume tokens until needed
├── scripts/              # [optional] Executable code
│   ├── validate.py       #   Executed via bash
│   └── process.sh        #   Script output enters context, not the code itself
├── assets/               # [optional] Output files
│   ├── template.pptx     #   Templates, icons, fonts
│   └── logo.png          #   Used in final deliverables
└── examples/             # [optional] Input/output examples
    └── sample.md
```

### SKILL.md Format

```yaml
---
name: my-awesome-skill          # kebab-case, up to 64 characters
description: >                  # up to 1024 characters, third person
  Processes X and generates Y.
  Use when working with Z files or when the user mentions
  keyword1, keyword2, keyword3.
  Trigger keywords: word1, word2, word3.
---

# Skill Name

## Overview

What the skill does (1-3 sentences). Technology context.

## When to Use

- Specific situations when the skill is needed
- Keywords and request patterns

## Workflow

### Step 1: Name
What to do at this step.

### Step 2: Name
What to do next.

## Advanced Features

**Details**: See [references/details.md](references/details.md)
**API**: See [references/api.md](references/api.md)
```

### Where Skills Work on the Max Subscription

| Surface | Pre-built skills | Custom skills | How to install |
|---------|-----------------|---------------|----------------|
| **claude.ai** | Out of the box | Yes | Settings → Features → Upload zip |
| **Claude Code** | No | Yes | Folder in `.claude/skills/` or `~/.claude/skills/` |
| **Cowork** | Out of the box | Yes | Via plugins or zip |

**Important**: on personal plans, skills are per-user — you cannot centrally deploy them to a team (that is only available through API/Enterprise).

---

## Part 3: Best Practices

### 3.1 Description — The Most Important Part

The description is the **only thing** Claude always sees. It uses the description to decide whether to activate the skill or not. Out of potentially 100+ skills, Claude selects based on the description.

**Rules:**

Write in the **third person**: `"Processes Excel files and generates reports"`
Do not use the first person: `"I can help you process Excel files"`
Do not use the second person: `"You can use this to process files"`

Include **what it does + when to use + keywords**:
```yaml
description: >
  Extract text and tables from PDF files, fill forms,
  merge documents. Use when working with PDF files or
  when the user mentions PDFs, forms, or document extraction.
```

Avoid vague descriptions:
```yaml
description: Helps with documents    # Too generic
description: Processes data           # What data?
description: Does stuff with files    # ...
```

### 3.2 SKILL.md Content — Less Is More

**Core principle**: Claude is already smart. Do not explain to it what PDF or Python is.

For every piece of instruction, ask yourself:
- "Does Claude really not know this?"
- "Can this be omitted?"
- "Does this paragraph justify its token cost?"

**Good** (~50 tokens):
```markdown
## Extract PDF text
Use pdfplumber for text extraction:
\```python
import pdfplumber
with pdfplumber.open("file.pdf") as pdf:
    text = pdf.pages[0].extract_text()
\```
```

**Bad** (~150 tokens):
```markdown
## Extract PDF text
PDF (Portable Document Format) files are a common file format
that contains text, images, and other content. To extract text
from a PDF, you'll need to use a library. There are many
libraries available...
```

### 3.3 Degrees of Freedom

Match the level of instruction strictness to the task:

**High freedom** — when there are many paths to the goal:
```markdown
## Code Review
1. Analyze the code structure
2. Check for bugs or edge cases
3. Suggest improvements
4. Verify conventions
```

**Medium freedom** — there is a preferred pattern:
```markdown
## Generate Report
Use this template and customize as needed:
\```python
def generate_report(data, format="markdown"):
    ...
\```
```

**Low freedom** — the operation is fragile, mistakes are costly:
```markdown
## Database Migration
Run exactly this script:
\```bash
python scripts/migrate.py --verify --backup
\```
Do not modify the command or add flags.
```

**Analogy**: Claude is a robot following a route. A bridge over a chasm requires strict guardrails (exact commands). An open field requires only a general direction (flexible instructions).

### 3.4 File References — One Level Deep at Most

Claude may not fully read files if they reference other files that in turn reference yet more files. Chains lead to information loss.

**Bad — deep nesting:**
```
SKILL.md → advanced.md → details.md → actual_info.md
```

**Good — one level:**
```
SKILL.md → advanced.md
SKILL.md → reference.md
SKILL.md → examples.md
```

### 3.5 Feedback Loops

The "do → check → fix → repeat" pattern radically improves quality:

```markdown
## Document editing

1. Make edits to document
2. **Validate immediately**: `python scripts/validate.py output/`
3. If validation fails:
   - Review the error
   - Fix the issue
   - Run validation again
4. **Only proceed when validation passes**
5. Finalize output
```

### 3.6 Checklists for Complex Workflows

For multi-step tasks, provide a checklist that Claude marks as it progresses:

```markdown
## Processing Workflow

Copy this checklist:

\```
Progress:
- [ ] Step 1: Analyze input
- [ ] Step 2: Extract data
- [ ] Step 3: Validate extraction
- [ ] Step 4: Generate output
- [ ] Step 5: Verify output
\```
```

### 3.7 Scripts Are Better Than Code Generation

If Claude writes the same code every time, extract it into a script:

| | Code generation | Script in `scripts/` |
|-|----------------|---------------------|
| Reliability | Can make mistakes | Deterministic |
| Tokens | Spent on generation | Spent only on output |
| Speed | Slower | Faster |
| Consistency | Slightly different each time | Always the same |

**Scripts should handle errors themselves**, not pass them off to Claude:

```python
def process_file(path):
    try:
        with open(path) as f:
            return f.read()
    except FileNotFoundError:
        print(f"File {path} not found, creating default")
        with open(path, "w") as f:
            f.write("")
        return ""
```

### 3.8 Avoid Time-Sensitive Information

```markdown
# Bad — will become outdated:
If you're doing this before August 2025, use the old API.

# Good — legacy section:
## Current method
Use the v2 API endpoint: api.example.com/v2/

## Old patterns (deprecated)
<details>
<summary>Legacy v1 API (deprecated 2025-08)</summary>
The v1 API used: api.example.com/v1/
</details>
```

### 3.9 Consistent Terminology

Pick one term and use it everywhere:

| Consistent | Inconsistent |
|------------|-------------|
| Always "API endpoint" | "API endpoint", "URL", "route", "path" |
| Always "field" | "field", "box", "element", "control" |
| Always "extract" | "extract", "pull", "get", "retrieve" |

### 3.10 Do Not Offer Too Many Options

```markdown
# Bad — Claude will get confused:
"Use pypdf, or pdfplumber, or PyMuPDF, or pdf2image..."

# Good — default + escape hatch:
Use pdfplumber for text extraction.
For scanned PDFs requiring OCR, use pdf2image + pytesseract instead.
```

### 3.11 Design Before Prompting (Lesson from Gas Town)

Agents create an **illusion of progress**: code is generated quickly, files multiply, commits fly — but without design, the result will be chaotic.

**Rule**: the more powerful the agent, the more important the design phase **before** launch.

Before running an agent on a task, make sure:

1. **Architecture is described** — component structure, dependencies, API contracts
2. **Acceptance criteria are defined** — how to know the task is complete
3. **Edge cases are considered** — the agent will not figure out corner cases for you

**Why this is critical**: an agent can generate 2000 lines of code in 10 minutes that "works." Refactoring that afterward is more expensive than spending 30 minutes on design before launch. Generation speed does not equal solution quality.

> **Source:** Gas Town — the conclusion that with the advent of agents, the bottleneck shifted from coding to design.

---

## Part 4: Templates

### Template 4.1: Minimal Skill

```yaml
---
name: my-simple-skill
description: >
  Performs X operation on Y files. Use when the user asks
  to do Z or mentions keywords: keyword1, keyword2, keyword3.
---

# My Simple Skill

## Quick Start

Brief instruction on the main operation:

\```python
# Example code
\```

## Workflow

1. **Step 1**: Description
2. **Step 2**: Description
3. **Step 3**: Validate result
```

### Template 4.2: Skill with Resources (Medium Complexity)

```
my-domain-skill/
├── SKILL.md
├── references/
│   ├── schemas.md
│   └── api-docs.md
└── scripts/
    └── validate.py
```

**SKILL.md:**
```yaml
---
name: my-domain-skill
description: >
  Analyzes domain-specific data using project schemas and
  validates output against business rules. Use when working
  with domain data, generating reports, or querying databases.
  Trigger keywords: domain, report, analytics, query.
---

# My Domain Skill

## Overview

This skill provides domain-specific analysis capabilities
for the project. Tech stack: Python 3.11, PostgreSQL.

## When to Use

- Generating domain reports from raw data
- Querying databases with project-specific schemas
- Validating business logic in outputs

## Available Datasets

**Schemas**: See [references/schemas.md](references/schemas.md)
**API docs**: See [references/api-docs.md](references/api-docs.md)

## Quick Search

Find specific tables using grep:
\```bash
grep -i "table_name" references/schemas.md
\```

## Workflow

### Step 1: Understand the Request
Determine what data the user needs and from which domain.

### Step 2: Load Schema
Read the relevant schema file from `references/`.

### Step 3: Execute Query/Analysis
Write and run the analysis.

### Step 4: Validate
\```bash
python scripts/validate.py output.json
\```
If validation fails, fix issues and re-validate.

### Step 5: Present Results
Format output according to the user's requirements.
```

### Template 4.3: Complex Skill with Workflow and Feedback Loop

```
complex-skill/
├── SKILL.md
├── references/
│   ├── domain-guide.md
│   ├── quality-checklist.md
│   └── examples/
│       ├── input-sample.json
│       └── output-sample.json
├── scripts/
│   ├── analyze.py
│   ├── process.py
│   └── validate.py
└── assets/
    └── template.html
```

**SKILL.md:**
```yaml
---
name: complex-workflow-skill
description: >
  Orchestrates multi-step processing of complex data: analyzes
  input, processes through configurable pipeline, validates
  output against quality rules, and generates final deliverable.
  Use when user needs end-to-end data processing with quality
  guarantees. Trigger keywords: pipeline, process, quality,
  deliverable, report generation.
commands:
  - name: start
    description: Start the full processing pipeline
  - name: validate-only
    description: Run validation on existing output
---

# Complex Workflow Skill

## Overview

End-to-end data processing with built-in quality validation.
Follows a plan-validate-execute pattern to catch errors early.

## Workflow

Copy this checklist and track progress:

\```
Pipeline Progress:
- [ ] Step 1: Analyze input
- [ ] Step 2: Create processing plan
- [ ] Step 3: Validate plan
- [ ] Step 4: Execute pipeline
- [ ] Step 5: Validate output
- [ ] Step 6: Generate deliverable
\```

### Step 1: Analyze Input

Run the analysis script:
\```bash
python scripts/analyze.py input_file.json
\```

Review the output for data shape and quality issues.

### Step 2: Create Processing Plan

Based on analysis, create `plan.json` with:
- Processing steps in order
- Parameters for each step
- Expected output format

See [references/examples/input-sample.json](references/examples/input-sample.json)
for format reference.

### Step 3: Validate Plan

\```bash
python scripts/validate.py plan.json --mode plan
\```

If validation fails:
1. Review specific errors
2. Fix the plan
3. Re-validate
4. **Only proceed when validation passes**

### Step 4: Execute Pipeline

\```bash
python scripts/process.py plan.json --output result.json
\```

### Step 5: Validate Output

\```bash
python scripts/validate.py result.json --mode output
\```

Quality checklist: See [references/quality-checklist.md](references/quality-checklist.md)

### Step 6: Generate Deliverable

Apply template from `assets/template.html` and populate
with validated results.

## Troubleshooting

**Common issues:**
- "Schema mismatch" → Re-check input format against schemas
- "Validation timeout" → Reduce batch size in plan.json
- "Missing fields" → Check references/domain-guide.md for required fields
```

### Template 4.4: Agent (for Claude Code)

```yaml
---
name: your-role-name
description: "Brief description of the role and when to invoke. Keywords: keyword1, keyword2."
tools:
  - read_files
  - write_files
  - edit_files
  - bash
  - grep
  - glob
model: claude-sonnet
---

# Role Name — Project Name

Brief description of the role (1-2 sentences).

## Required Reading Before Starting

**ALWAYS** read these files first:
1. `.agent/README.md` — Documentation index
2. `.agent/System/architecture.md` — Project structure
3. `.agent/SOP/relevant-sop.md` — Standard operating procedures

## Tech Stack

- **Framework**: Nuxt 3 (^3.11.2) + Vue 3 Composition API
- **Language**: TypeScript 5
- **Styling**: SCSS (scoped) + CSS custom properties
- **Key Libraries**: @nuxtjs/i18n, ethers 5, @supabase/supabase-js, @splidejs/splide

## Key Directories

- `components/section/` — Page section components
- `composables/` — Vue 3 composables
- `constants/` — App configuration and chain data
- `services/` — Blockchain and API services
- `types/` — TypeScript types
- `locales/` — i18n JSON files (7 languages)
- `styles/` — SCSS mixins and design tokens

## Workflow

1. **Read context** → Architecture docs and existing patterns
2. **Check existing** → Similar solutions in codebase
3. **Implement** → Follow SOP and conventions
4. **Validate** → Run linter, tests, check responsive
5. **Review** → Self-review against best practices

## Do

- Use `<script setup lang="ts">` and `<style scoped lang="scss">`
- Use SCSS mixins from `styles/media.scss` for responsive design
- Use CSS custom properties from `styles/networks/_variables.scss`
- Add all user-facing strings to all 7 locale files
- Add types for all props/params
- Follow existing section component patterns

## Don't

- Hardcode user-facing strings (use i18n `$t()`)
- Use raw `@media` queries (use SCSS mixins like `@include vw-sm`)
- Use unscoped styles in components
- Import React/Next.js patterns (this is Vue/Nuxt)
- Skip error handling
- Create dead code

## Related Documentation

- Architecture: `.agent/System/architecture.md`
- SOP: `.agent/SOP/relevant.md`
```

### Template 4.5: Coordinator Agent (Orchestrator)

This template is for an agent that **does not write code itself**, but decomposes tasks and delegates to specialized agents. See [Pattern: Agent Hierarchy](#pattern-agent-hierarchy-orchestration) in Part 1.

```yaml
---
name: coordinator
description: "Coordinates execution of complex tasks by decomposing them into subtasks and delegating to specialized agents. Invoke when a task spans 3+ areas (frontend + backend + tests) or requires parallel work."
tools:
  - read_files
  - grep
  - glob
  - task            # ← key tool for invoking sub-agents
model: claude-opus   # the coordinator needs strong planning capabilities
---

# Coordinator — Project Name

You manage task execution but **do not write code yourself**. Your job is to plan, delegate, and verify.

## Required Reading Before Starting

**ALWAYS** read these files first:
1. `.agent/README.md` — Documentation index
2. `.agent/System/architecture.md` — Project architecture

## Workflow

### 1. Receive the Task and Understand Context
- Read the project architecture
- Identify which areas are affected (frontend, backend, tests, docs)

### 2. Decompose
Break the task into atomic subtasks. Each subtask should be:
- **Isolated** — does not depend on others (or dependencies are explicit)
- **Verifiable** — has a "done" criterion
- **Assignable** — it is clear which agent will execute it

### 3. Delegate via Sub-Agents
Use the `Task` tool to invoke specialized agents:
- Provide clear context: what to do, which files are affected, completion criteria
- Launch independent tasks in parallel
- Run dependent tasks sequentially

### 4. Collect and Verify
- Receive results from all sub-agents
- Verify that changes are compatible with each other
- Ensure nothing is broken (linter, tests)

### 5. Report the Result
Compile a brief report: what was done, which files were changed, what needs attention.

## Do

- Plan before launching sub-agents
- Give each sub-agent the minimum necessary context
- Verify compatibility of results

## Don't

- Do not write code yourself — delegate
- Do not launch sub-agents without a plan
- Do not skip compatibility checks
```

---

## Part 5: Quality Checklist

### For a Skill

#### Metadata
- [ ] `name`: kebab-case, up to 64 characters, no "anthropic"/"claude"
- [ ] `description`: third person, what it does + when to use
- [ ] `description`: contains trigger keywords
- [ ] `description`: up to 1024 characters, no XML tags

#### SKILL.md Content
- [ ] Up to 500 lines (otherwise, move content to references/)
- [ ] Does not explain things Claude already knows
- [ ] One recommended approach, not 5 options
- [ ] Input/output examples for critical operations
- [ ] Consistent terminology
- [ ] No time-sensitive information
- [ ] File references go at most one level deep

#### Resources
- [ ] Scripts handle errors themselves (do not pass them off to Claude)
- [ ] No "magic numbers" — all constants are documented
- [ ] Long reference files have a table of contents
- [ ] Paths use forward slashes (unix-style)

#### Workflow
- [ ] Checklist for multi-step tasks
- [ ] Feedback loop (validate → fix → repeat)
- [ ] Explicit "ONLY proceed when..." checkpoints

### For an Agent

- [ ] Required Reading section points to the correct files
- [ ] Tech Stack with specific versions
- [ ] Workflow describes a step-by-step process
- [ ] Do/Don't rules are concrete, not abstract
- [ ] Links to SOPs instead of duplicating documentation
- [ ] Model is chosen deliberately (haiku/sonnet/opus)

---

## Quick Start

### Create a Skill in 5 Minutes

1. Create the folder: `mkdir -p .claude/.skills/my-skill`
2. Create `SKILL.md` using Template 4.1
3. If using Claude Code — done, the skill is picked up automatically
4. If using claude.ai — `zip -r my-skill.zip my-skill/` → Settings → Features → Upload

### Create an Agent in 5 Minutes

1. Create the file: `.claude/agents/my-agent.md`
2. Fill it in using Template 4.4
3. In Claude Code, invoke: `/agent my-agent`

### Iterative Development (Recommended Process)

```
1. Complete a task without a skill — notice what you have to explain repeatedly
2. Extract the repeatable knowledge → write it into SKILL.md
3. Test in a new session (clean context!)
4. Observe how Claude navigates the skill:
   - Does it read files in the expected order?
   - Does it find the right references?
   - Does it avoid reading unnecessary content?
5. Iterate: refine, add, remove what is unnecessary
6. Repeat steps 3-5
```

---

*This guide is based on official Anthropic documentation (platform.claude.com/docs) and real-world experience working with production projects.*
