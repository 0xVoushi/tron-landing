# Landing Page Patterns Reference

## Section Patterns

### Hero Section
- **Purpose**: First impression, value proposition, primary CTA
- **Layout**: Centered text, max-w-3xl, generous padding (py-24 lg:py-40)
- **Hierarchy**: H1 (display size) → subheadline (text-lg) → CTA buttons → trust signals
- **Variants**: Text-centered, split (text + image), full-background image/gradient

### Social Proof Bar
- **Purpose**: Build trust immediately after hero
- **Layout**: Logo row (grayscale, small), or stat counters
- **Variants**: Logo wall, stat cards (grid-cols-2 lg:grid-cols-4), brief testimonial quote

### Services Grid
- **Purpose**: Show capabilities, answer "Can they do what I need?"
- **Layout**: Grid (1 → 2 → 3 columns), consistent card styling
- **Card**: Icon → H3 title → 2-3 sentence description
- **Variants**: Icon cards, expandable cards, linked cards (to detail pages)

### Process / How We Work
- **Purpose**: Reduce anxiety, show professionalism
- **Layout**: Numbered steps (horizontal on desktop, vertical on mobile)
- **Step**: Number → title → description
- **Variants**: Timeline, numbered cards, alternating left/right

### Case Studies / Portfolio
- **Purpose**: Prove results with evidence
- **Layout**: Featured cards with image + metrics + description
- **Variants**: Full-width showcase, grid of thumbnails, carousel (use sparingly)

### Testimonials
- **Purpose**: Social proof from real clients
- **Layout**: Grid of quote cards (lg:grid-cols-3), or single featured quote
- **Card**: Quote text → name, role, company → optional photo
- **Variants**: Simple cards, cards with ratings, featured + supporting

### FAQ Section
- **Purpose**: Overcome objections, capture long-tail SEO keywords
- **Layout**: Centered, max-w-3xl, accordion pattern
- **Item**: Question (bold, clickable) → Answer (hidden until expanded)
- **Schema**: FAQPage JSON-LD for rich results

### CTA Section (Final)
- **Purpose**: Last conversion opportunity
- **Layout**: Full-width brand color background, centered text
- **Content**: H2 + supporting text + single button (inverted colors)
- **Contrast**: White text on brand-500, white button on brand background

### Footer
- **Purpose**: Navigation, legal, contact info
- **Layout**: Multi-column grid (links organized by category)
- **Content**: Logo, nav links, social links, copyright, legal links
- **Tone**: Subdued — muted colors, smaller text

## Navigation Pattern

### Desktop
```
┌──────────────────────────────────────────────────────┐
│  Logo    Services   Process   Work   FAQ   [CTA]     │
└──────────────────────────────────────────────────────┘
```
- Sticky, compact header with blur background on scroll
- 5-7 items max, CTA button visually distinct

### Mobile
```
┌──────────────────────┐
│  Logo         [☰]    │
└──────────────────────┘
```
- Hamburger → full-screen overlay
- Same links + CTA button
- Close on: X, Escape, overlay click

## Section Order (Recommended)

```
1. Navigation (sticky)
2. Hero (value prop + CTA)
3. Social Proof (logos/stats)
4. Services (capabilities)
5. Process (how we work)
6. Case Studies (evidence)
7. Testimonials (voices)
8. FAQ (objections)
9. CTA (final push)
10. Footer (navigation + legal)
```

This order follows the natural persuasion funnel: Attract → Trust → Inform → Prove → Convert.
