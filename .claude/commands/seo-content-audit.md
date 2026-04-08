---
name: seo-content-audit
description: Audit existing pages for SEO completeness — meta tags, heading hierarchy, structured data, keyword presence, accessibility, and Core Web Vitals readiness
---

# SEO Content: Audit

You are a technical SEO auditor analyzing a Next.js landing page for search engine optimization completeness and quality.

## Overview

This command audits existing content for SEO health. It checks every page for metadata completeness, heading hierarchy, structured data validation, keyword presence, and accessibility.

## Process

### Step 1: Discover All Pages

```
Scan:
- app/**/page.tsx — all page routes
- app/layout.tsx — root metadata
- app/sitemap.ts — sitemap completeness
- app/robots.ts — crawl configuration
```

Use Glob to find all `page.tsx` files. Use Read to analyze each.

### Step 2: Audit Each Page

For each page, check:

#### Metadata
- [ ] Has `metadata` export or `generateMetadata`
- [ ] `title` present, unique, under 60 chars
- [ ] `description` present, unique, under 160 chars
- [ ] `openGraph.title` set
- [ ] `openGraph.description` set
- [ ] `openGraph.image` set (1200x630)
- [ ] `twitter.card` set
- [ ] `alternates.canonical` set
- [ ] `robots` not blocking indexing

#### Heading Hierarchy
- [ ] Exactly one `<h1>` per page
- [ ] No skipped heading levels (H1 → H3 without H2)
- [ ] H1 contains primary keyword (assess contextually)
- [ ] H2s are descriptive and keyword-relevant

#### Structured Data
- [ ] JSON-LD present
- [ ] `Organization` or `ProfessionalService` on homepage
- [ ] `WebPage` on every page
- [ ] `FAQPage` where FAQ section exists
- [ ] `BreadcrumbList` for navigation
- [ ] Schema is valid JSON

#### Content Quality
- [ ] Content length > 300 words
- [ ] Short paragraphs (scan for long text blocks)
- [ ] Images have `alt` attributes
- [ ] Internal links present
- [ ] CTA present and clear

#### Technical
- [ ] Page listed in `sitemap.ts`
- [ ] Page uses `next/image` (no raw `<img>` tags)
- [ ] No `'use client'` on pages that don't need it
- [ ] Static generation (check `next build` output)

### Step 3: Global Checks

- [ ] `robots.ts` exists and allows crawling
- [ ] `sitemap.ts` exists and lists all pages
- [ ] Root layout has `metadataBase` set
- [ ] Fonts loaded via `next/font`
- [ ] No duplicate titles across pages
- [ ] No duplicate descriptions across pages
- [ ] Favicon and app icons present

### Step 4: Generate Report

```markdown
## SEO Audit Report

### Overall Score: [X/100]

| Category | Score | Issues |
|---|---|---|
| Metadata | X/25 | [count] |
| Headings | X/20 | [count] |
| Structured Data | X/20 | [count] |
| Content Quality | X/15 | [count] |
| Technical | X/20 | [count] |

### Critical Issues (Fix Immediately)
1. [Page]: [Issue] → [Fix]

### Warnings (Fix Soon)
1. [Page]: [Issue] → [Fix]

### Passed Checks
- [List of things that are correct]

### Page-by-Page Summary
| Page | Title | Meta Desc | H1 | Schema | Score |
|---|---|---|---|---|---|

### Recommendations (Priority Order)
1. [Highest impact fix]
2. [Second highest]
...
```

Present the report and offer: "Want me to fix any of these issues now?"

## Quick Mode

If the user just wants a fast check on a specific page:
```
/seo-content-audit [page path]
```
Only audit that single page and report.
