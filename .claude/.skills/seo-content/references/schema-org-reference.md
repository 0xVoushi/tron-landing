# Schema.org Structured Data Reference

JSON-LD templates for the studio landing page. All schemas follow schema.org vocabulary and are implemented as Next.js components.

## Implementation Pattern

```tsx
// components/structured-data/[SchemaName].tsx
export function [SchemaName]Schema() {
  const schema = { /* ... */ }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Usage in app/layout.tsx or app/page.tsx
import { OrganizationSchema } from '@/components/structured-data/OrganizationSchema'

export default function Page() {
  return (
    <>
      <OrganizationSchema />
      {/* page content */}
    </>
  )
}
```

## Schema Templates

### Organization / ProfessionalService
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "[Studio Name]",
  "url": "https://[domain]",
  "logo": "https://[domain]/logo.svg",
  "image": "https://[domain]/og/homepage.png",
  "description": "[Studio description — 1-2 sentences]",
  "foundingDate": "[YYYY]",
  "email": "[contact email]",
  "sameAs": [
    "https://github.com/[org]",
    "https://twitter.com/[handle]",
    "https://linkedin.com/company/[slug]"
  ],
  "knowsAbout": [
    "Web Development",
    "AI Integration",
    "Web3 Development",
    "Fullstack Development",
    "Next.js",
    "React",
    "TypeScript",
    "Smart Contracts"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Development Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Development",
          "description": "[Service description]"
        }
      }
    ]
  }
}
```

### WebPage
```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "[Page title]",
  "description": "[Meta description]",
  "url": "https://[domain]/[path]",
  "isPartOf": {
    "@type": "WebSite",
    "@id": "https://[domain]/#website",
    "name": "[Studio Name]",
    "url": "https://[domain]"
  },
  "inLanguage": "en"
}
```

### FAQPage
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Question text — match actual search queries]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Answer text — 40-60 words for featured snippets]"
      }
    }
  ]
}
```

### Service (Individual)
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "[Service name]",
  "description": "[Service description]",
  "provider": {
    "@type": "ProfessionalService",
    "name": "[Studio Name]",
    "url": "https://[domain]"
  },
  "serviceType": "[Category: Web Development, AI Integration, etc.]",
  "areaServed": {
    "@type": "Place",
    "name": "Worldwide"
  }
}
```

### BreadcrumbList
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://[domain]"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "[Page Name]",
      "item": "https://[domain]/[slug]"
    }
  ]
}
```

### Review / Testimonial
```json
{
  "@context": "https://schema.org",
  "@type": "Review",
  "author": {
    "@type": "Person",
    "name": "[Client Name]"
  },
  "reviewBody": "[Testimonial text]",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "itemReviewed": {
    "@type": "ProfessionalService",
    "name": "[Studio Name]"
  }
}
```

## Graph Pattern (Combined)

For pages with multiple schemas, use `@graph`:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "..." : "..." },
    { "@type": "WebPage", "..." : "..." },
    { "@type": "FAQPage", "..." : "..." },
    { "@type": "BreadcrumbList", "..." : "..." }
  ]
}
```

## Validation

- Test with: https://validator.schema.org/
- Also check: https://search.google.com/test/rich-results
- JSON-LD must be valid JSON (no trailing commas, proper escaping)
- All URLs must be absolute (not relative)
