---
name: seo-content
description: SEO-first content creation and optimization for the studio landing page. Generates content variants with different messaging strategies, collects feedback, synthesizes, and produces implementation-ready plans with Next.js metadata, JSON-LD structured data, and keyword-optimized copy. Trigger keywords: seo, content, copy, keywords, meta tags, structured data, schema markup, headlines, cta, landing page copy, seo audit, content optimization.
license: MIT
commands:
  - name: start
    description: Start an SEO content creation session — interview, generate variants, collect feedback, produce plan
  - name: audit
    description: Audit existing content for SEO completeness and quality
---

# SEO Content Skill

## Overview

This skill helps you create **SEO-optimized, conversion-focused content** for the studio landing page. It follows an interactive workflow similar to design-and-refine, but for content/copy instead of visual design.

**Tech Context**: Next.js 15 (App Router), Tailwind CSS, TypeScript, SSG Landing Page

**Project Type**: Marketing landing page for a full-spectrum development studio (web, fullstack, AI, Web3, custom dev). Target audience: startups to enterprise.

## When to Use This Skill

Use `/seo-content-start` when:
- **Creating content for a new page or section** — need copy, meta tags, structured data
- **Optimizing existing content** — improving keyword targeting, heading hierarchy, meta
- **Exploring messaging angles** — not sure which tone or approach works best
- **Adding structured data** — need JSON-LD schemas for search visibility
- **Naming the studio** — the workflow includes optional naming exploration

Use `/seo-content-audit` when:
- **Auditing existing pages** — check meta tags, headings, structured data completeness
- **Pre-launch review** — verify all SEO elements are in place
- **After content changes** — ensure SEO integrity is maintained

**Don't use when:**
- Simple typo fixes or word changes
- Visual/design changes (use `design-and-refine` instead)
- Technical performance issues (use `performance-auditor` agent)

## How It Works

### Workflow Overview

```
1. Interview → 2. SEO Intelligence → 3. Generate 5 Variants →
4. Collect Feedback → 5. Synthesize → 6. Confidence Check →
7. Naming (conditional) → 8. Implementation Plan
```

### Detailed Process

#### Phase 1: Interview (7 questions)
Gather context about the page, audience, services, tone, competitors, and conversion goal.

#### Phase 2: SEO Intelligence Gathering (Automatic)
Scan the codebase for existing metadata, structured data, and content. Synthesize keyword strategy based on services + audience.

#### Phase 3: Generate 5 Content Variants
Create messaging variants with different strategic approaches:
- **Variant A: Technical Authority** — leads with credibility and tech expertise
- **Variant B: Story-Driven** — leads with client pain points and solutions
- **Variant C: Social Proof** — leads with results, metrics, testimonials
- **Variant D: SEO-Dense** — maximum keyword coverage, FAQ-heavy
- **Variant E: Brand-Forward** — personality-driven, synthesized from user preferences

Each variant includes: H1, meta title/description, heading hierarchy, opening copy, CTA, schema recommendation.

#### Phase 4: Collect Feedback (Interactive)
Rate each variant's H1, structure, tone, keyword strategy, and CTA. Cross-variant comparison to pick best elements.

#### Phase 5: Synthesize
Combine the highest-rated elements into a single content direction with full copy, meta tags, and keyword map.

#### Phase 6: Confidence Check
"Yes → plan" / "Almost → iterate" / "No → restart"

#### Phase 7: Naming Resolution (Conditional)
If studio name not yet decided: generate 5 name candidates, evaluate in context (H1, meta title, domain).

#### Phase 8: Implementation Plan
Generate detailed plan with Next.js metadata object, JSON-LD schemas, section-by-section copy, component hierarchy, file list, SEO checklist.

## Commands

### `/seo-content-start [target]`
Start an SEO content creation session.

Arguments:
- `target` (optional): Page or section to create content for (e.g., "hero", "services page", "homepage")

### `/seo-content-audit`
Audit existing content for SEO completeness.

Checks: meta tags, heading hierarchy, structured data, keyword presence, alt text, canonical URLs.

## How This Complements Other Skills

**studio-brand** (Brand identity):
- studio-brand provides tone, voice, positioning
- seo-content applies them to actual copy with SEO optimization
- Use together: seo-content reads brand guidelines for tone calibration

**tailwind-system** (Styling):
- tailwind-system provides typography and component patterns
- seo-content provides the copy that fills those patterns
- Use together: typography scale informs heading hierarchy in copy

**design-and-refine** (Visual design):
- design-and-refine handles visual layout and component design
- seo-content handles the words and metadata
- Use together: run seo-content first (defines content structure), then design-and-refine (designs the visuals)

**ui-design** (Design principles):
- ui-design provides visual hierarchy principles
- seo-content structures copy to match visual scanning patterns

## References

- `references/seo-fundamentals.md` — On-page SEO, Core Web Vitals, crawlability
- `references/copywriting-patterns.md` — AIDA, PAS, FAB, headline formulas
- `references/schema-org-reference.md` — JSON-LD templates for all relevant schema types
- `references/meta-tags-reference.md` — Next.js Metadata API patterns and templates
- `references/persuasion-patterns.md` — Social proof, authority, scarcity, reciprocity

## Templates

- `templates/SEO_CONTENT_PLAN.md` — Output plan structure
- `templates/SEO_MEMORY.md` — Session archive template
- `templates/SEO_CHECKLIST.md` — Pre-publish SEO verification checklist
