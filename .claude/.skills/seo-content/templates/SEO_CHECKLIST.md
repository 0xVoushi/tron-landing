# SEO Pre-Publish Checklist

Use before deploying any new page or significant content change.

## Metadata

- [ ] `<title>` unique, under 60 chars, contains primary keyword
- [ ] `<meta description>` unique, under 160 chars, includes CTA
- [ ] OpenGraph title, description, image (1200x630) set
- [ ] Twitter Card meta set
- [ ] Canonical URL set (self-referencing)
- [ ] No `noindex` on pages meant to be indexed

## Content

- [ ] Exactly one `<h1>` per page
- [ ] Heading hierarchy: H1 → H2 → H3 (no skips)
- [ ] Primary keyword in H1 and first paragraph
- [ ] Secondary keywords in H2s
- [ ] Keyword density under 2% (natural, not stuffed)
- [ ] Content length 300+ words
- [ ] Short paragraphs (2-3 sentences)
- [ ] Bullet points for lists of 3+ items

## Structured Data

- [ ] JSON-LD present and valid
- [ ] Organization/ProfessionalService schema on homepage
- [ ] WebPage schema on every page
- [ ] FAQPage schema on pages with FAQ
- [ ] BreadcrumbList schema for navigation
- [ ] Validates at schema.org/validator

## Images

- [ ] All images use `next/image`
- [ ] All images have descriptive `alt` text
- [ ] Above-fold images have `priority={true}`
- [ ] OG image exists for the page

## Technical

- [ ] Page appears in `sitemap.ts`
- [ ] `robots.ts` allows crawling
- [ ] Internal links to and from the page
- [ ] No broken links
- [ ] Page is statically generated (check `next build` output)

## Performance

- [ ] Lighthouse Performance 95+
- [ ] Lighthouse SEO 100
- [ ] Lighthouse Accessibility 95+
- [ ] LCP < 2.5s
- [ ] CLS = 0
- [ ] First Load JS < 100KB

## Accessibility

- [ ] Color contrast WCAG AA (4.5:1 text, 3:1 large text)
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Form inputs have labels
- [ ] Language attribute on `<html>`
