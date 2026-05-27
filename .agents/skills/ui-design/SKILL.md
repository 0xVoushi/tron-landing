---
name: ui-design
description: Apply visual design principles for creating effective landing pages. Use when establishing visual hierarchy, organizing layout composition, choosing spacing systems, implementing typography scales, or applying Gestalt principles. Complements tailwind-system (code implementation), ux-design (user experience strategy), and seo-content (content structure). Trigger keywords: visual hierarchy, composition, layout, spacing, typography scale, visual weight, Gestalt, whitespace, alignment, balance, emphasis, visual flow, grid system, design system.
license: MIT
---

# UI Design Skill

## Overview

Visual design fundamentals for landing pages. This skill provides framework-agnostic design principles — the "why" behind layout decisions — while `tailwind-system` provides the "how" (Tailwind implementation).

**Tech Context**: Next.js 15, Tailwind CSS, TypeScript, SSG Landing Page
**Project Type**: Marketing landing page for a development studio — balancing visual appeal with performance and SEO.

## Core Principles

### 1. Visual Hierarchy (3 Levels)

Every screen has exactly three levels of visual importance:

| Level | Purpose | Landing Page Example | Tailwind Scale |
|---|---|---|---|
| Primary | First thing the eye hits | Hero H1, primary CTA | `text-4xl+`, `font-bold`, brand color |
| Secondary | Supporting context | Section H2s, subheadlines | `text-2xl-3xl`, `font-semibold`, gray-900 |
| Tertiary | Details and navigation | Body text, links, meta | `text-base-lg`, `font-normal`, gray-600 |

**Rule**: If everything is bold, nothing is bold. Maintain clear hierarchy.

### 2. Spacing Composition

Tailwind uses a 4px base grid. Key spacing decisions:

**Micro spacing** (within components): `gap-1` to `gap-3` (4-12px)
- Between icon and label, badge text and border, line height

**Meso spacing** (between components): `gap-4` to `gap-8` (16-32px)
- Between cards, between heading and body, between form fields

**Macro spacing** (between sections): `py-16` to `py-24` (64-96px)
- Between page sections, hero padding, footer separation

**Rule**: Larger gaps = less related. Smaller gaps = more related (Gestalt: Proximity).

### 3. Gestalt Principles

**Proximity**: Elements close together are perceived as related.
**Similarity**: Elements that look alike are perceived as equal importance.
**Common Region**: Elements within a boundary (card, section) are perceived as a group.
**Closure**: The mind completes incomplete shapes (consistent grids feel complete).

### 4. Typography Hierarchy

**Landing page typography scale** (Tailwind):

```
Display (Hero H1):     text-4xl sm:text-5xl lg:text-6xl  font-bold    tracking-tight
Section heading (H2):  text-3xl sm:text-4xl              font-bold    tracking-tight
Card heading (H3):     text-xl sm:text-2xl               font-semibold
Body (large):          text-lg                            font-normal  leading-8
Body (standard):       text-base                          font-normal  leading-7
Caption/meta:          text-sm                            font-medium  text-gray-500
```

**Rules**: Max 2 font families. Use `tracking-tight` on large headings. Use `leading-relaxed` on body. Never skip more than 2 text sizes between levels.

### 5. Color Composition

| Role | Usage | Proportion |
|---|---|---|
| Neutral (60%) | Backgrounds, text, borders | `white`, `gray-50`, `gray-900` |
| Secondary (30%) | Supporting elements, cards | `gray-100`, `gray-600` |
| Brand accent (10%) | CTAs, key highlights | `brand-500`, `brand-600` |

**Rules**: Brand color on CTAs only. Dark mode: invert neutrals, keep brand. WCAG AA contrast 4.5:1 minimum.

### 6. Layout Grids

**Centered content** (hero, CTA): `max-w-3xl mx-auto text-center`
**Content grid** (services): `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8`
**Two-column** (feature): `grid grid-cols-1 lg:grid-cols-2 items-center gap-12`
**Stats row**: `grid grid-cols-2 lg:grid-cols-4 gap-8`

## Landing Page Visual Patterns

### Eye Scanning Patterns

**F-Pattern** (text-heavy sections): Headline → first body line → vertical scan down left column.
**Z-Pattern** (hero): Top-left logo → Top-right nav CTA → Diagonal to headline → Bottom-right CTA.

### Section Rhythm

Alternate between light (`bg-white`) and subtle (`bg-gray-50`) backgrounds for visual separation without borders.

### Component Visual Weight (heaviest → lightest)

1. Full-color CTA section (`bg-brand-500`)
2. Hero section (large text, prominent CTA)
3. Cards with shadows
4. Cards with borders only
5. Text sections without containers
6. Footer (muted, small text)

## References

- `references/visual-hierarchy.md` — Detailed visual hierarchy guide
- `references/gestalt-principles.md` — Gestalt laws applied to UI
- `references/spacing-composition.md` — Spacing system deep dive
- `references/color-composition.md` — Color theory for interfaces
- `references/typography-hierarchy.md` — Typography scale and pairing
- `references/layout-grids.md` — Grid system patterns
- `references/visual-attention.md` — Eye tracking and attention patterns
- `references/landing-page-patterns.md` — Landing page section patterns

## How This Complements Other Skills

- **tailwind-system**: Implementation (Tailwind classes) for these visual principles
- **ux-design**: UX strategy — ui-design provides visual execution
- **design-and-refine**: Uses these principles to generate and evaluate design variants
- **seo-content**: Content structure aligns with visual hierarchy (H1 = primary, H2 = secondary)
