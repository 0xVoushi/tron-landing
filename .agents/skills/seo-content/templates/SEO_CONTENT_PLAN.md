# SEO Content Plan: [Page/Section Name]

Generated: [YYYY-MM-DD]
Studio: [Name or TBD]
Target: [page/section]
Primary Keywords: [list]
Secondary Keywords: [list]

## Metadata Object (Next.js App Router)

```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '[Under 60 chars — primary keyword + brand]',
  description: '[Under 160 chars — value prop + CTA language]',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  openGraph: {
    title: '[OG title]',
    description: '[OG description]',
    type: 'website',
    url: 'https://[domain]/[path]',
    siteName: '[Studio Name]',
    images: [{
      url: 'https://[domain]/og/[page].png',
      width: 1200,
      height: 630,
      alt: '[Descriptive alt]',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '[Twitter title]',
    description: '[Twitter description]',
  },
  alternates: {
    canonical: 'https://[domain]/[path]',
  },
}
```

## Structured Data (JSON-LD)

```typescript
const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    // List applicable schemas:
    // Organization / ProfessionalService
    // WebPage
    // FAQPage (if FAQ section)
    // Service (per service)
    // BreadcrumbList
  ]
}
```

## Content Map (Section-by-Section)

### Section 1: [Name]
- **Component**: `[ComponentName]`
- **H-tag**: `[h1/h2] — [Exact heading copy]`
- **Body**: [2-3 sentence summary or full copy]
- **CTA**: [Button text] → [Link target]
- **Target Keywords**: [list]
- **Notes**: [Implementation notes]

### Section 2: [Name]
[Repeat structure...]

## Component Hierarchy

```
app/[page]/page.tsx
  <[Page]StructuredData />
  <HeroSection />
  <SocialProofSection />
  <ServicesSection />
  <ProcessSection />
  <CaseStudiesSection />
  <TestimonialsSection />
  <FAQSection />
  <CTASection />
```

## Files to Create

- [ ] `app/[page]/page.tsx` — Page with metadata export
- [ ] `components/sections/[SectionName].tsx` — Per section
- [ ] `components/structured-data/[Page]StructuredData.tsx` — JSON-LD
- [ ] `lib/content/[page]-content.ts` — Content constants

## Files to Modify

- [ ] `app/layout.tsx` — Root metadata (if needed)
- [ ] `app/sitemap.ts` — Add new page
- [ ] `app/robots.ts` — Verify crawlability

## SEO Checklist

- [ ] H1 contains primary keyword, appears once per page
- [ ] H2s contain secondary keywords
- [ ] Meta title under 60 chars, primary keyword near start
- [ ] Meta description under 160 chars, includes CTA language
- [ ] OG image created (1200x630)
- [ ] Canonical URL set
- [ ] JSON-LD validates at schema.org validator
- [ ] Internal links to/from other pages
- [ ] Image alt text includes keywords naturally
- [ ] Keyword density < 2%
- [ ] Content above 300 words per page
- [ ] FAQ section targets long-tail keywords

## Core Web Vitals Considerations

- [ ] Hero image: `next/image` with `priority={true}`
- [ ] Fonts: preload via `next/font`
- [ ] Above-fold: no layout shift (fixed dimensions)
- [ ] LCP element: [Identified element] — load within 2.5s
- [ ] CLS: all images have explicit width/height
- [ ] INP: CTAs immediately interactive

## Keyword Distribution Map

| Section | Primary KW | Secondary KWs | Long-tail KWs |
|---|---|---|---|
| Hero (H1) | [kw] | — | — |
| Services (H2) | — | [kw1], [kw2] | — |
| FAQ | — | — | [kw1], [kw2] |
