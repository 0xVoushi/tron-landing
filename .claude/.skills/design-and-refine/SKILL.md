---
name: design-and-refine
description: Generate distinct UI design variations, collect feedback, synthesize the best elements, and produce implementation plans. Use when exploring design options, redesigning components, or when you're unsure about the best visual approach. This skill creates temporary design variations for review, then cleans up and produces a final plan. Trigger keywords: design variations, design options, explore designs, redesign, design alternatives, iterate design, refine design, design feedback, compare designs, A/B design, design exploration, design lab.
license: MIT
commands:
  - name: start
    description: Start a design and refine session - generate variations, collect feedback, and iterate
  - name: cleanup
    description: Clean up temporary design lab files and routes
---

# Design & Refine Skill

## Overview

This skill helps you **explore multiple design directions** before committing to implementation. It generates 5 distinct UI variations based on your requirements, collects your feedback on each, and synthesizes the best elements into a refined design with a complete implementation plan.

**Tech Context**: Next.js 15 (App Router), Tailwind CSS, TypeScript, SSG Landing Page

**Project Type**: High-performance marketing landing page for a development studio — requires balancing visual appeal with performance (Lighthouse 95+, zero runtime CSS).

## When to Use This Skill

Use `/design-and-refine:start` when:
- **Designing new landing page sections** — hero, services, testimonials, CTA blocks
- **Redesigning existing components** — exploring better visual approaches
- **Uncertain about visual direction** — need to see options before deciding
- **High-impact pages** — homepage, key conversion pages
- **Design bottlenecks** — stuck on how something should look/feel

**Don't use when:**
- Simple bug fixes or text changes
- Implementation is already clear
- Content/copy changes only (use `seo-content` instead)
- Just need to follow existing patterns (use `tailwind-system` instead)

## How It Works

### Workflow Overview

```
1. Interview → 2. Style Inference → 3. Generate 5 Variants →
4. Collect Feedback → 5. Synthesize → 6. Refine Loop →
7. Cleanup → 8. Implementation Plan
```

### Detailed Process

#### Phase 1: Interview (Interactive)
Ask the user:
- What component/page/section are you designing?
- What are the pain points with current design (if redesign)?
- What style direction? (tech-forward minimal, bold & confident, warm & approachable, dark & premium)
- Any specific requirements or constraints?
- Which reference apps/styles do you like?

#### Phase 2: Style Inference (Automatic)
Analyze the existing codebase:
- Detect `tailwind.config.ts` — custom colors, fonts, spacing, breakpoints
- Extract existing component patterns from `components/`
- Review `studio-brand` skill for brand direction
- Check `tailwind-system` for established patterns

#### Phase 3: Generate 5 Distinct Variants
Create variations exploring different visual approaches:
- **Variant A: Tech-Forward Minimal** — clean whitespace, monospace accents, subtle gradients (Linear/Vercel)
- **Variant B: Bold & Confident** — strong typography, high contrast, geometric shapes (Stripe)
- **Variant C: Approachable & Warm** — rounded corners, softer colors, friendly spacing (Notion/Airbnb)
- **Variant D: Dark & Premium** — dark-first, gradient accents, sleek agency aesthetic
- **Variant E: Hybrid** — synthesizes user preferences from interview

Each variant uses real Tailwind utilities and project design tokens.

#### Phase 4: Collect Feedback (Interactive)
For each variant, ask:
- What do you like about this one?
- What doesn't work for you?
- Any elements you'd want to keep?

#### Phase 5: Synthesize
Combine the best-rated elements:
- Take highest-rated layout structure
- Incorporate preferred color/typography choices
- Keep well-liked interaction patterns
- Address any concerns raised

#### Phase 6: Refine Loop (Interactive)
Show synthesized design and ask:
- "Are you confident with this direction? (yes/iterate/restart)"
- If iterate: Collect specific changes and regenerate
- If yes: Move to cleanup and planning

#### Phase 7: Cleanup (Automatic)
- Remove `app/__design_lab/` route and components (if created)
- Delete temporary files
- Archive design memory in `.claude/.skills/design-and-refine/memory/`

#### Phase 8: Implementation Plan (Automatic)
Generate detailed plan with:
- Components to create/modify (Next.js App Router conventions)
- Tailwind utility patterns for each component
- Responsive breakpoint strategy
- Dark mode implementation
- Animation/transition approach
- Accessibility checklist

## Commands

### `/design-and-refine:start [target]`
**Start a design exploration session**

Arguments:
- `target` (optional): Component or section to design (e.g., "hero", "services grid")

### `/design-and-refine:cleanup`
**Manually clean up design lab files**

Use when session was interrupted or want to remove temporary files.
Checks for `app/__design_lab/` directory and route references.

## How This Complements Other Skills

**seo-content** (Content strategy):
- Run `seo-content:start` first → get the copy and heading hierarchy
- Then run `design-and-refine:start` → design the visual treatment for that content
- Together: content defines structure, design defines appearance

**tailwind-system** (Styling tokens):
- tailwind-system provides design tokens (colors, spacing, typography)
- design-and-refine generates variants using those tokens
- Final plan references exact Tailwind utilities

**ui-design** (Visual principles):
- ui-design provides visual hierarchy rules, Gestalt principles, composition
- design-and-refine applies those principles to generate actual UI variations

**studio-brand** (Brand identity):
- studio-brand provides brand personality and visual identity direction
- design-and-refine generates designs consistent with the brand

## Design Lab Principles Reference

This skill leverages world-class design principles from:
- Jakob Nielsen's 10 Usability Heuristics
- Don Norman's Design Principles
- Stripe, Linear, Vercel design systems
- WCAG Accessibility Standards
- Mobile-first responsive design

See full reference: `.claude/.skills/design-and-refine/skills/design-lab/DESIGN_PRINCIPLES.md`

## Technical Implementation Notes

### Temporary Routes (if file-based exploration is needed)
Design variants are created in:
```
app/__design_lab/
├── page.tsx               (route with variant navigation)
├── variants/
│   ├── VariantA.tsx
│   ├── VariantB.tsx
│   ├── VariantC.tsx
│   ├── VariantD.tsx
│   └── VariantE.tsx
└── layout.tsx             (isolated layout, no global nav interference)
```

The `__` prefix ensures Next.js treats it as a private folder (not a route).
These files are automatically cleaned up after the session.

### Design Memory
Feedback and decisions are archived in:
```
.claude/.skills/design-and-refine/memory/
└── [component-name]-[date].md
```

## Best Practices

**Do:**
- Use for complex, high-impact UI decisions
- Be specific about pain points in interview
- Provide honest feedback on each variant
- Reference specific design systems you admire
- Iterate until you're truly confident

**Don't:**
- Use for simple text changes or bug fixes
- Rush through feedback — take time to evaluate
- Skip the interview — it informs better variants
- Forget to review the final implementation plan
- Leave design lab files in production code
