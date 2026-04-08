# Next.js Metadata API Reference

Complete reference for implementing SEO metadata in Next.js 15 App Router.

## Static Metadata (Most Pages)

```typescript
// app/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '[Primary Keyword] — [Studio Name]',
  description: '[Value proposition + CTA in under 160 chars]',
  keywords: ['keyword1', 'keyword2', 'keyword3'],

  openGraph: {
    title: '[OG Title — can be slightly different/longer than title]',
    description: '[OG Description]',
    type: 'website',
    url: 'https://[domain]/[path]',
    siteName: '[Studio Name]',
    locale: 'en_US',
    images: [
      {
        url: 'https://[domain]/og/[page].png',
        width: 1200,
        height: 630,
        alt: '[Descriptive alt text for OG image]',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: '[Twitter Title]',
    description: '[Twitter Description]',
    images: ['https://[domain]/og/[page].png'],
  },

  alternates: {
    canonical: 'https://[domain]/[path]',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
```

## Root Layout Metadata (Global Defaults)

```typescript
// app/layout.tsx
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://[domain]'),
  title: {
    default: '[Studio Name] — [Tagline]',
    template: '%s | [Studio Name]',  // Pages override with just their title
  },
  description: '[Default site description]',
  openGraph: {
    type: 'website',
    siteName: '[Studio Name]',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}
```

## Dynamic Metadata (If Needed)

```typescript
// app/blog/[slug]/page.tsx
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  // Fetch data...

  return {
    title: `[Post Title]`,
    description: `[Post excerpt]`,
    openGraph: {
      title: `[Post Title]`,
      description: `[Post excerpt]`,
      type: 'article',
      publishedTime: '[ISO date]',
    },
  }
}
```

## Favicon & App Icons

```typescript
// app/layout.tsx — via metadata
export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}
```

Or via file convention:
```
app/
  favicon.ico          — 32x32
  icon.png             — 512x512
  apple-icon.png       — 180x180
  opengraph-image.png  — 1200x630 (route-level default)
```

## OpenGraph Image Best Practices

- Size: 1200x630px (2:1.05 ratio)
- Include studio name/logo
- Include page-specific headline text
- High contrast, readable at small sizes (shared on social)
- Generate dynamically with `next/og` for blog posts

## Checklist Per Page

- [ ] `title` unique, under 60 chars, contains primary keyword
- [ ] `description` unique, under 160 chars, contains CTA language
- [ ] `openGraph.title` set (can differ from title)
- [ ] `openGraph.description` set
- [ ] `openGraph.image` set with correct dimensions (1200x630)
- [ ] `openGraph.url` set to canonical URL
- [ ] `twitter.card` set to `summary_large_image`
- [ ] `alternates.canonical` set
- [ ] `robots` set to index/follow (unless intentionally noindex)
- [ ] No duplicate titles across pages
- [ ] No duplicate descriptions across pages
