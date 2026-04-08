# SEO Fundamentals Reference

Comprehensive on-page SEO guide for the studio landing page. Absorbs the core of the `seo-audit` marketing skill, adapted for Next.js.

## On-Page SEO Checklist

### Title Tag (`<title>`)
- Under 60 characters (Google truncates at ~60)
- Primary keyword near the start
- Brand name at the end (separated by ` | ` or ` — `)
- Unique per page
- Format: `[Primary Keyword] — [Brand] | [Modifier]`
- Example: `Web Development Studio — [Name] | AI & Web3`

### Meta Description
- Under 160 characters (Google truncates at ~155-160)
- Contains primary keyword naturally
- Includes a call-to-action or value proposition
- Unique per page
- Think of it as ad copy for the SERP

### Heading Hierarchy
```
H1 — One per page, contains primary keyword
  H2 — Section headings, contain secondary keywords
    H3 — Subsection headings, contain supporting keywords
      H4 — Detail headings (rare on landing pages)
```
- **Never skip levels** (H1 → H3 without H2)
- **Never use headings for styling** — use Tailwind text sizes instead
- H1 should answer "What is this page about?"

### URL Structure
- Short and descriptive: `/services`, `/about`, `/contact`
- Contains primary keyword when natural
- Lowercase, hyphens for spaces
- No parameters, no trailing slashes (configure in Next.js)

### Internal Linking
- Every page links to at least 2 other pages
- Use descriptive anchor text (not "click here")
- Most important pages get the most internal links
- Navigation counts as internal links

### Image Optimization
- Descriptive `alt` text on every image
- Include keywords in `alt` when natural (not forced)
- Use `next/image` for automatic optimization
- `priority={true}` on above-fold images only
- Descriptive file names: `web-development-team.webp` not `IMG_1234.webp`

### Content Quality Signals
- **Keyword density**: 1-2% (natural placement, not forced)
- **Content length**: 300+ words per page minimum
- **Readability**: Short paragraphs (2-3 sentences), bullet points for lists
- **Freshness**: Update date in metadata when content changes
- **E-E-A-T**: Demonstrate Experience, Expertise, Authoritativeness, Trustworthiness

## Technical SEO (Next.js Specific)

### Crawlability
```typescript
// app/robots.ts
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: 'https://[domain]/sitemap.xml',
  }
}
```

### Sitemap
```typescript
// app/sitemap.ts
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://[domain]', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://[domain]/services', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    // ... all pages
  ]
}
```

### Canonical URLs
- Set on every page via `metadata.alternates.canonical`
- Self-referencing canonical (points to itself)
- Prevents duplicate content issues

### Performance as SEO Factor
- Core Web Vitals directly affect rankings
- LCP < 2.5s, CLS < 0.1, INP < 200ms
- Google PageSpeed Insights as verification tool
- Mobile-first indexing — mobile performance is what Google measures

## SERP Features to Target

### FAQ Rich Results
- Requires `FAQPage` JSON-LD schema
- Questions should match real search queries
- Answers should be concise (40-60 words ideal for featured snippets)
- Target long-tail keywords through FAQ questions

### Organization Knowledge Panel
- Requires `Organization` JSON-LD schema
- Include: name, url, logo, description, sameAs (social profiles)
- Consistent NAP (Name, Address, Phone) across web

### Sitelinks
- Clear site structure with descriptive navigation
- Unique `<title>` and `<meta description>` per page
- Proper heading hierarchy
- Google auto-generates sitelinks from clear structure

### Breadcrumbs
- `BreadcrumbList` JSON-LD schema
- Shows navigation path in SERPs
- Improves click-through rate

## Keyword Research Framework

### Intent Categories
| Intent | Example | Content Type |
|---|---|---|
| Informational | "what is web3 development" | Blog post, FAQ answer |
| Commercial | "best web3 development agency" | Landing page, comparison |
| Transactional | "hire AI developers" | Service page, contact |
| Navigational | "[studio name] portfolio" | Portfolio page |

### Keyword Mapping Process
1. List all services offered
2. For each service, identify:
   - Head term (1-2 words, high volume, high competition)
   - Mid-tail (2-3 words, moderate volume)
   - Long-tail (4+ words, low volume, high conversion)
3. Map keywords to pages/sections
4. One primary keyword per page, multiple secondary per section

### Competitive Analysis
- Check competitors' title tags and meta descriptions
- Identify keyword gaps (terms they rank for that you don't target)
- Analyze their structured data (view-source or schema validator)
- Note their content structure and section order
