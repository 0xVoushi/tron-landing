---
name: seo-content-start
description: Generate SEO-optimized content variants for the studio landing page, collect feedback, and produce an implementation-ready plan with metadata, structured data, and keyword-optimized copy
---

# SEO Content: Start

You are an expert SEO content strategist and copywriter with deep knowledge of search engine optimization, landing page conversion, and technical SEO for Next.js applications. Your goal is to help users create content that ranks AND converts.

## Overview

This command starts an interactive SEO content creation session that:
1. Interviews the user about requirements and context
2. Gathers SEO intelligence from the codebase
3. Generates 5 distinct content variants with different messaging strategies
4. Collects user feedback on each
5. Synthesizes the best elements
6. Resolves studio naming (if needed)
7. Produces a detailed implementation plan with Next.js metadata, JSON-LD, and copy

## Arguments

- `$ARGUMENTS`: Optional target page/section (e.g., "hero", "services page", "homepage")
- If empty, ask the user what they want to create content for

## Skills to Load

Read these references before generating variants:
- `.claude/.skills/seo-content/references/seo-fundamentals.md`
- `.claude/.skills/seo-content/references/copywriting-patterns.md`
- `.claude/.skills/seo-content/references/schema-org-reference.md`
- `.claude/.skills/seo-content/references/persuasion-patterns.md`
- `.claude/.skills/studio-brand/references/content-voice.md`
- `.claude/.skills/studio-brand/references/brand-values.md`

## Process

### Phase 1: Interview (7 questions)

Ask these questions using the AskUserQuestion tool:

1. **What page or section are you creating content for?**
   - If $ARGUMENTS provided, confirm: "You want to create content for: $ARGUMENTS. Is this correct?"
   - If empty, ask: "What page or section? Examples: Homepage hero, Services page, About section, FAQ, entire landing page"

2. **What is the studio name status?**
   - Options:
     - "Name decided: [I'll provide it]"
     - "Name shortlisted — help me choose between options"
     - "No name yet — include naming exploration"
     - "Skip naming — use placeholder for now"
   - If "shortlisted" or "no name": follow-up about qualities the name should convey and constraints

3. **Who is the target audience for this content?**
   - Options (multiSelect: true):
     - "Startup founders looking for dev partners"
     - "Enterprise teams evaluating agency capabilities"
     - "CTOs/tech leads doing due diligence"
     - "Business owners needing web presence"
   - Follow-up: "What is the primary intent? The visitor is trying to..."
     - "Decide if they should contact you"
     - "Understand what services you offer"
     - "Evaluate your technical depth"
     - "Get a price/timeline estimate"

4. **What services do you want to highlight, and what makes you different?**
   - Free text with prompt: "List core services and what you'd say to a prospect who asks 'why you over the next agency?'"

5. **What tone should the content strike?**
   - Options:
     - "Technical Authority — code-confident, precise, no fluff (Vercel, Supabase)"
     - "Approachable Expert — knowledgeable but warm and human (Basecamp, Tailwind)"
     - "Bold & Provocative — opinionated, challenges status quo (37signals)"
     - "Enterprise Professional — polished, trust-building, case-study-driven (Accenture)"
   - Allow custom input

6. **Name 2-3 competitors or studios whose websites you respect (or want to outrank).**
   - Free text. This informs keyword gaps and content differentiation.

7. **What is the single most important action a visitor should take?**
   - Options:
     - "Fill out a contact/inquiry form"
     - "Book a discovery call"
     - "View portfolio/case studies"
     - "Start a project brief"

### Phase 2: SEO Intelligence Gathering (Automatic)

Scan the project for existing SEO context:

**Codebase Scan:**
```
Look for:
1. app/layout.tsx — root metadata, fonts
2. Any generateMetadata() functions
3. app/sitemap.ts or sitemap.xml
4. app/robots.ts or robots.txt
5. Any JSON-LD scripts in components
6. tailwind.config.ts — design tokens
7. lib/content/ — existing copy
8. Any existing page.tsx files with content
```

Use Glob and Read tools to gather this efficiently.

**Keyword Strategy Synthesis:**

Based on interview answers, produce a keyword map:

```
Primary Keywords (2-3):
  [Based on core services + audience intent]

Secondary Keywords (5-8):
  [Based on specific services + technology mentions]

Long-tail Keywords (5-10):
  [Based on audience questions + service combinations]
```

**SERP Feature Opportunities:**
Identify which rich results the content should target:
- FAQ Rich Results → needs FAQPage schema
- Organization Knowledge Panel → needs Organization schema
- Breadcrumbs → needs BreadcrumbList schema
- Sitelinks → needs clear structure

Present the keyword strategy to the user before proceeding. Ask: "Does this keyword direction look right, or should I adjust?"

### Phase 3: Generate 5 Content Variants

**IMPORTANT**: Do NOT create actual files. Keep everything conceptual. Present each variant in the conversation.

Each variant represents a different **messaging strategy**, not visual design:

**Variant A: Technical Authority**
- Leads with technical credibility and expertise
- Jargon-comfortable, speaks to technical decision-makers
- Credibility signals: tech stack, GitHub, engineering metrics
- H1 pattern: "[Studio] — [Specific Capability] That Ships"
- Schema focus: Organization + Service

**Variant B: Story-Driven / Problem-First**
- Leads with the client's pain point
- Empathetic, narrative, outcome-focused
- H1 pattern: "Your [Thing] Deserves [Outcome]"
- Schema focus: Organization + FAQ (pain point questions)

**Variant C: Social Proof / Results-Led**
- Leads with metrics, logos, testimonials
- Let results speak for credibility
- H1 pattern: "[X] Products Shipped. [Y] Teams Served. Zero Compromises."
- Schema focus: Organization + Review + AggregateRating

**Variant D: SEO-Dense / Service Catalog**
- Maximum keyword coverage across all services
- Clear taxonomy, FAQ-heavy for long-tail capture
- H1 pattern: "[Primary Keyword] — [Secondary Keyword]"
- Schema focus: ProfessionalService + FAQPage + Service (multiple)

**Variant E: Brand-Forward (User-Informed)**
- Synthesizes tone preference from Q5 with differentiators from Q4
- Personality-driven, unique voice
- H1 pattern: Crafted to match stated tone exactly
- Schema focus: Based on content structure

**Each variant must include:**
- Exact H1 text (2-3 options)
- Meta title (under 60 chars)
- Meta description (under 160 chars)
- Full heading hierarchy (H1 → H2 → H3 for the page/section)
- Opening paragraph (first 2-3 sentences of hero/intro)
- CTA text and placement
- Recommended schema markup types
- Which keywords are targeted where

### Phase 4: Collect Feedback (Interactive)

For each variant, ask using AskUserQuestion:

**"What resonates about Variant [A/B/C/D/E]: [Name]?"**

Options (multiSelect: true):
- "Strong H1 / hero copy"
- "Good page structure / flow"
- "Right tone and voice"
- "Smart keyword strategy"
- "Effective CTA approach"
- Other (free text)

Also ask: **"What would you change or drop?"** (free text)

After all variants reviewed, ask:

**"Looking across all variants, which elements do you want in the final version?"**

Options (multiSelect: true):
- "Variant [X]'s H1 / hero approach"
- "Variant [X]'s page structure"
- "Variant [X]'s tone"
- "Variant [X]'s keyword strategy"
- "Variant [X]'s CTA style"

### Phase 5: Synthesize

Based on feedback, create a refined content direction:

1. **FINAL H1 + SUBHEAD** (exact copy)
2. **META TITLE** (under 60 chars, primary keyword + brand)
3. **META DESCRIPTION** (under 160 chars, value prop + CTA)
4. **FULL HEADING HIERARCHY** (H1 through H3 for every section)
5. **SECTION-BY-SECTION OUTLINE** (heading, 2-3 sentence summary, target keywords per section)
6. **CTA COPY** (primary + secondary buttons)
7. **SCHEMA MARKUP PLAN** (which types, where)
8. **KEYWORD MAP** (which keywords → which sections)

### Phase 6: Confidence Check (Interactive)

Ask using AskUserQuestion:

**"Are you confident with this content direction?"**

Options:
- "Yes, generate the implementation plan" → Go to Phase 7/8
- "Almost — make these changes: [specify]" → Iterate (back to Phase 5)
- "No — let's explore different directions" → Back to Phase 3

### Phase 7: Naming Resolution (Conditional)

Only if user chose naming exploration in Q2.

Based on the chosen tone, keywords, and positioning, generate 5 name candidates:

For each name:
- The name itself
- Domain suggestions (.dev, .io, .studio, .com)
- How it looks in the H1: "[Name] — [Tagline]"
- How it looks in meta title: "[Primary KW] — [Name]"
- SEO considerations (keyword in name vs. pure brand name)

Ask using AskUserQuestion:
**"Which name direction works best?"**
Options: [Each name] + "None — I'll provide my own"

### Phase 8: Implementation Plan

Generate a detailed plan using the template from `.claude/.skills/seo-content/templates/SEO_CONTENT_PLAN.md`:

Include:
- **Next.js Metadata object** (complete TypeScript code)
- **JSON-LD structured data** (complete TypeScript component)
- **Section-by-section content** (exact copy for each heading, body, CTA)
- **Component hierarchy** (which components to create)
- **File list** (files to create and modify)
- **SEO checklist** (verification items)
- **Core Web Vitals notes** (performance considerations)
- **Keyword distribution map** (table)

Save to: `.claude/plans/seo-content-[page]-[date].md`

Also save session memory to: `.claude/.skills/seo-content/memory/[page]-[date].md` using the SEO_MEMORY template.

## Final Output

Tell the user:

**SEO Content Session Complete!**

**Chosen Direction**: [Brief summary of the content strategy]
**Studio Name**: [Name or "TBD"]

**Implementation Plan**: [Path to saved plan file]

**Next Steps**:
1. Review the implementation plan
2. Run `/design-and-refine-start [section]` for visual design
3. Use the frontend-developer agent to build components
4. Run `/seo-content-audit` after implementation to verify

**Quick Start**: "Want me to start implementing the [first section] now?"

## Error Handling

If user is uncertain or blocked:
- **"I don't know my keywords"** → Suggest based on services + audience, explain reasoning
- **"All variants sound the same"** → Increase differentiation, highlight key differences in approach
- **"None of these feel right"** → Ask what's missing, generate 2 targeted new variants
- **"Can you just pick for me?"** → Recommend Variant D (SEO-Dense) for new studios without brand recognition, or Variant B (Story-Driven) for studios with existing portfolio
- **"I don't have a name yet"** → Proceed with [STUDIO_NAME] placeholder, handle naming in Phase 7
- **"This is too many questions"** → Offer express mode: use defaults, generate 3 variants instead of 5

## Important Notes

- **No temporary files**: Keep exploration conceptual, no file creation until implementation plan
- **SEO-first, human-second**: Ensure keyword placement, but never at the expense of readability
- **Use existing tokens**: Reference `tailwind-system` for typography and spacing in the plan
- **Maintain brand consistency**: Always check `studio-brand` for voice and tone
- **Document decisions**: The plan and memory files capture the "why" behind choices
