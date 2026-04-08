---
name: ui-audit
description: Visual UI audit for the landing page — Lighthouse-based checks, contrast validation, responsive layout, image optimization, heading hierarchy, structured data, and CTA visibility. Run after UI changes to catch visual and SEO issues. Trigger with /ui-audit or when reviewing visual quality.
license: MIT
---

# UI Audit Skill

## Overview

Visual and technical quality audit for the studio landing page. Combines automated checks with a manual review checklist to catch issues that dev testing alone misses:

- Color contrast (WCAG AA compliance)
- Responsive layout breaks
- Image optimization issues
- Heading hierarchy violations
- CTA visibility and accessibility
- SEO element completeness
- Dark mode consistency

## When to Use

- After changing any UI component (`components/sections/`, `components/ui/`)
- After Tailwind config changes (`tailwind.config.ts`)
- After content updates (headings, meta tags)
- Before deploying to production
- When reviewing visual quality

## How It Works

### Step 1: Build and Analyze

```bash
# Build the project and check output
next build

# Look for:
# - Page sizes (First Load JS)
# - Static vs Dynamic pages
# - Warnings about images or fonts
```

### Step 2: Automated Checks

Run these checks programmatically or via Lighthouse:

```bash
# If using Chrome DevTools MCP, run Lighthouse
# Otherwise, build and serve locally:
npx next start &
# Then use Chrome DevTools or manual Lighthouse
```

### Step 3: Page-by-Page Screenshots

Navigate to each page/section and capture screenshots:

| Page | URL | Key Checks |
|---|---|---|
| Homepage | `/` | Hero contrast, CTA visibility, section flow |
| Services | `/#services` | Card consistency, icon alignment |
| About | `/#about` | Image quality, text readability |
| FAQ | `/#faq` | Accordion interaction, heading hierarchy |
| Contact | `/#contact` | Form labels, validation states, submit button |
| Footer | (bottom) | Link visibility, layout balance |

### Step 4: Report Findings

For each issue, report:
1. **Section** — which section has the issue
2. **Problem** — what's wrong (contrast, overflow, CLS, etc.)
3. **Impact** — Lighthouse score impact or UX severity
4. **Fix** — proposed Tailwind classes or code change

## Audit Checklists

### Contrast & Readability
- [ ] Hero heading readable over background (light + dark mode)
- [ ] CTA buttons have 4.5:1 contrast ratio (text vs background)
- [ ] Body text readable: gray-600 on white, gray-400 on dark
- [ ] Subtle text (captions, meta) still readable: gray-500 on white, gray-500 on dark
- [ ] Form labels visible against their background
- [ ] Error states clearly visible (red on both modes)

### Layout & Responsive
- [ ] No horizontal scroll at any viewport (320px to 2560px)
- [ ] Hero section looks good on mobile (text wraps cleanly)
- [ ] Service cards stack properly in single column on mobile
- [ ] Navigation collapses to mobile menu on small screens
- [ ] Touch targets minimum 44x44px on mobile
- [ ] Text doesn't require zooming on mobile
- [ ] Images don't overflow container

### Images
- [ ] All images use `next/image` (no raw `<img>` tags)
- [ ] Above-fold images have `priority={true}`
- [ ] All images have descriptive `alt` text
- [ ] SVG used for icons and logos
- [ ] No images larger than 200KB in source
- [ ] OG image exists and is 1200x630px

### Typography & Headings
- [ ] Exactly one `<h1>` per page
- [ ] No skipped heading levels (H1 → H3 without H2)
- [ ] Headings use proper Tailwind text sizes (consistent scale)
- [ ] Body text uses `text-base` or `text-lg` (readable at default size)
- [ ] Font loaded via `next/font` (no external CSS links)
- [ ] No font flash on load (FOIT/FOUT)

### CTA Visibility
- [ ] Primary CTA visible without scrolling (in hero)
- [ ] CTA button has clear hover/focus states
- [ ] CTA text is action-oriented ("Start Your Project" not "Submit")
- [ ] At least one CTA per scroll-length of content
- [ ] Focus ring visible on CTA buttons (keyboard navigation)

### Dark Mode
- [ ] All text readable in dark mode
- [ ] Borders visible in dark mode (`dark:border-gray-800`)
- [ ] Cards distinguishable from background in dark mode
- [ ] Images don't look jarring against dark background
- [ ] CTA buttons maintain contrast in dark mode

### SEO Elements
- [ ] `<title>` present, unique, under 60 chars
- [ ] `<meta description>` present, under 160 chars
- [ ] OpenGraph meta tags present
- [ ] JSON-LD structured data present and valid
- [ ] Canonical URL set
- [ ] `sitemap.ts` lists all pages
- [ ] `robots.ts` allows crawling

### Performance
- [ ] First Load JS < 100KB (check `next build` output)
- [ ] All pages statically generated
- [ ] No unnecessary `'use client'` directives
- [ ] CSS purged properly (no unused Tailwind utilities in production)

## Report Template

```markdown
## UI Audit Report: [Date]

### Score Summary
| Check | Pass | Fail | Notes |
|---|---|---|---|
| Contrast | X/Y | Z | [details] |
| Responsive | X/Y | Z | [details] |
| Images | X/Y | Z | [details] |
| Headings | X/Y | Z | [details] |
| CTA | X/Y | Z | [details] |
| Dark Mode | X/Y | Z | [details] |
| SEO | X/Y | Z | [details] |
| Performance | X/Y | Z | [details] |

### Critical Issues (Fix Immediately)
1. [Issue] → [Fix with Tailwind classes]

### Warnings (Fix Soon)
1. [Issue] → [Fix suggestion]

### Passed Checks
- [List of things that are correct]
```

## Related Skills

- **ui-design**: Visual design principles (hierarchy, spacing, Gestalt)
- **tailwind-system**: Tailwind code patterns, design tokens
- **ux-design**: User experience strategy, accessibility
- **seo-content**: Content SEO checks (headings, keywords, meta)
