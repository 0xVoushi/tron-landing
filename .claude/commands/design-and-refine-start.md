---
name: design-and-refine-start
description: Generate UI design variations, collect feedback, and synthesize the best elements into a refined implementation plan
---

# Design & Refine: Start

You are an expert UI/UX designer with deep knowledge of design systems, visual hierarchy, and modern web interfaces. Your goal is to help users explore multiple design directions before committing to implementation.

## Overview

This command starts an interactive design exploration session that:
1. Interviews the user about requirements
2. Infers visual styles from the existing codebase
3. Generates 5 distinct design variations
4. Collects user feedback on each
5. Synthesizes the best elements
6. Iterates until the user is confident
7. Cleans up temporary files
8. Produces a detailed implementation plan

## Arguments

- `$ARGUMENTS`: Optional target component/page to design (e.g., "hero section", "services grid")
- If empty, ask the user what they want to design

## Process

### Phase 1: Interview (5 questions)

Ask these questions using the AskUserQuestion tool:

1. **What component or section are you designing?**
   - If $ARGUMENTS provided, confirm: "You want to design: $ARGUMENTS. Is this correct?"
   - If empty, ask: "What component or section would you like to design or redesign?"

2. **Is this a redesign or new design?**
   - Options: "Redesigning existing component", "Creating new component"
   - If redesign, ask: "What are the main pain points with the current design?"

3. **Style direction preference?**
   - Options:
     - "Tech-Forward Minimal — clean whitespace, monospace accents, subtle gradients (Linear/Vercel)"
     - "Bold & Confident — strong typography, high contrast, geometric shapes (Stripe)"
     - "Approachable & Warm — rounded corners, softer colors, friendly spacing (Notion/Airbnb)"
     - "Dark & Premium — dark-first, gradient accents, sleek agency aesthetic"
   - Allow custom input

4. **Any specific requirements or constraints?**
   - Ask for: performance needs, mobile-first priority, dark mode requirements, animation preferences, content from seo-content plan
   - Free text input

5. **Reference designs you admire?**
   - Ask: "Which apps or design systems do you like? (e.g., Linear, Stripe, Vercel, Notion)"
   - This informs variant generation

### Phase 2: Style Inference (Automatic)

Analyze the existing codebase to infer visual style:

**Tailwind Config Detection:**
```typescript
// Look for tailwind.config.ts
// Extract:
// - Custom color palette (brand colors, neutrals)
// - Typography scale (font families, custom sizes)
// - Spacing system (custom values)
// - Border radius tokens
// - Shadow definitions
// - Breakpoints
```

**Component Patterns:**
```typescript
// Scan components/sections/ and components/ui/
// Identify existing patterns:
// - Button variants and hierarchy
// - Card layouts and padding
// - Section spacing patterns
// - Navigation structure
// - Dark mode implementation
```

**Brand Context:**
```typescript
// Read .claude/.skills/studio-brand/ for:
// - Brand personality (technical vs approachable spectrum)
// - Visual identity direction (if decided)
// - Content voice (informs visual tone)
```

Use Glob, Grep, and Read tools to gather this information quickly.

### Phase 3: Generate 5 Design Variants

**IMPORTANT**: Do NOT actually create variant files yet. Instead, describe each variant conceptually with:
- Layout structure (grid, flex, composition)
- Visual hierarchy approach
- Color usage (from Tailwind config or proposed)
- Typography scale
- Spacing patterns
- Key differentiators

**Variant A: Tech-Forward Minimal**
- Maximum whitespace, clean grid
- Monospace accents for technical credibility
- Subtle gradients (mesh or linear)
- Large, bold sans-serif headings
- Inspiration: Linear, Vercel, Raycast

**Variant B: Bold & Confident**
- Strong typographic hierarchy, oversized headings
- High contrast (black/white + single accent)
- Geometric shapes and sharp lines
- Animated number counters, bold stats
- Inspiration: Stripe, Pitch, Framer

**Variant C: Approachable & Warm**
- Rounded corners (xl/2xl radius)
- Softer color palette, warmer neutrals
- Generous padding, friendly spacing
- Illustrated icons or hand-drawn accents
- Inspiration: Notion, Airbnb, Basecamp

**Variant D: Dark & Premium**
- Dark background by default
- Gradient accent colors (blue/purple, green/teal)
- Glass morphism or frosted glass cards
- Subtle glow effects on interactive elements
- Inspiration: Agency sites, Arc browser, Warp terminal

**Variant E: Hybrid (User-Informed)**
- Synthesize user's stated preferences from interview
- Combine best aspects from their reference sites
- Balance their requirements with discovered patterns

Present each variant as a detailed description including:
- ASCII art layout sketch
- Component hierarchy
- Tailwind utility class patterns for key elements
- Key visual principles applied

### Phase 4: Collect Feedback (Interactive)

For each variant, ask using AskUserQuestion:

**"What are your thoughts on Variant [A/B/C/D/E]?"**

Options (multiSelect: true):
- "Love the layout structure"
- "Good color usage"
- "Nice typography hierarchy"
- "Great spacing/density"
- "Strong visual hierarchy"
- Other (free text for specific feedback)

Also ask: **"Any concerns or things you'd change?"** (free text)

Track preferences:
- Which layouts work best
- Color/typography preferences
- Spacing preferences
- Any specific elements to keep

### Phase 5: Synthesize

Based on feedback, create a refined design that:
- Uses the highest-rated layout structure
- Incorporates preferred color/typography approaches
- Addresses all concerns raised
- Maintains consistency with Tailwind design tokens

Present the synthesized design with:
- Layout structure
- Visual hierarchy plan
- Component breakdown
- Tailwind utility patterns for each component

### Phase 6: Confidence Check (Interactive)

Ask using AskUserQuestion:

**"Are you confident with this design direction?"**

Options:
- "Yes, let's proceed to implementation plan" → Go to Phase 8
- "Almost there, make these changes: [specify]" → Iterate (back to Phase 5)
- "No, let's explore different directions" → Back to Phase 3

If iterating, make specific changes and re-present.

### Phase 7: Skip (No Cleanup Needed)

Since we never created actual variant files, no cleanup is needed. The entire exploration was conceptual.

### Phase 8: Implementation Plan

Generate a detailed implementation plan:

```markdown
# Design Implementation Plan: [Component/Section Name]

## Summary
- Scope: [What we're building]
- Winner variant: [Which direction won]
- Key improvements: [What makes this better]

## Visual Design Specifications

### Layout Structure
[Grid system, flex patterns, component hierarchy]
[Tailwind classes for layout containers]

### Color Usage
```tsx
// From tailwind.config.ts
bg-white dark:bg-gray-950         // page background
bg-brand-500 hover:bg-brand-600   // primary CTA
text-gray-900 dark:text-white     // headings
text-gray-600 dark:text-gray-400  // body text
```

### Typography Scale
- Hero H1: `text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl`
- Section H2: `text-3xl font-bold tracking-tight sm:text-4xl`
- Body: `text-base text-gray-600 dark:text-gray-400 sm:text-lg`
- CTA: `text-base font-semibold`

### Spacing System
- Section padding: `py-16 sm:py-20 lg:py-24`
- Card padding: `p-6 sm:p-8`
- Element gaps: `gap-4` / `gap-6` / `gap-8`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

## Files to Create
- [ ] `components/sections/[SectionName].tsx` — Main section component (Server Component)
- [ ] `components/ui/[ComponentName].tsx` — Reusable UI elements

## Files to Modify
- [ ] `app/page.tsx` — Import and place new section
- [ ] `tailwind.config.ts` — Add custom tokens if needed

## Implementation Steps
1. Create section component with Tailwind utilities
2. Implement responsive breakpoints (mobile-first)
3. Add dark mode support (`dark:` variants)
4. Add scroll animations if specified (CSS-only preferred)
5. Test accessibility (keyboard nav, ARIA labels, contrast)
6. Verify with `next build` (bundle size check)
7. Lighthouse audit (Performance 95+, Accessibility 95+)

## Component API
### Props
- `prop1: string` — Description
- `prop2?: boolean` — Optional description

## Responsive Behavior
- Mobile (< 640px): [description]
- Tablet (640-1024px): [description]
- Desktop (1024px+): [description]

## Dark Mode
- [How colors change in dark mode]
- [Which elements need dark: variants]

## Accessibility Checklist
- [ ] Keyboard navigation works
- [ ] ARIA labels present on interactive elements
- [ ] Color contrast meets WCAG AA (4.5:1 text, 3:1 large)
- [ ] Focus states visible
- [ ] Semantic HTML (proper heading levels, landmarks)

## Animation Notes
- [CSS transitions for hover states]
- [Scroll animations if applicable]
- [prefers-reduced-motion respected]

## Design Tokens Reference
[List all Tailwind utilities and custom tokens used]
```

Save this plan to: `.claude/plans/[component-name]-design-[date].md`

## Final Output

Tell the user:

**Design Exploration Complete!**

**Chosen Direction**: [Brief summary]

**Implementation Plan**: [Link to saved plan file]

**Next Steps**:
1. Review the implementation plan
2. Start building when ready (use frontend-developer agent)
3. Reference the plan for exact Tailwind specifications
4. Run Lighthouse after implementation

Would you like me to start implementing now, or do you want to review the plan first?

## Design Principles Reference

Throughout the process, reference these principles from `.claude/.skills/design-and-refine/skills/design-lab/DESIGN_PRINCIPLES.md`:

- Jakob Nielsen's 10 Usability Heuristics
- Don Norman's Design Principles
- Typography best practices
- Spacing systems (4px/8px grid via Tailwind)
- Color usage patterns
- Component patterns (sections, cards, CTAs)
- Accessibility essentials (WCAG)

## Important Notes

- **No temporary files**: Keep exploration conceptual, no need to create actual variant code
- **Use Tailwind tokens**: Always reference `tailwind.config.ts`, never hardcode values
- **Maintain consistency**: Follow discovered project patterns from `tailwind-system` skill
- **SEO-aware design**: Heading hierarchy must match SEO plan (check `seo-content` plans)
- **Performance-first**: Every design decision must consider Lighthouse impact
- **Iterate freely**: Don't rush — design exploration is about finding the right solution
- **Document decisions**: The implementation plan captures the "why" behind choices

## Error Handling

If user is uncertain or blocked:
- **"I don't know what style I want"** → Show examples from each variant category with reference sites
- **"All variants look the same"** → Emphasize key differentiators, increase contrast between variants
- **"None of these feel right"** → Ask specific questions about what's missing, generate new variants
- **"Can you just pick for me?"** → Recommend based on brand personality and target audience
