---
name: tailwind-system
description: Apply project-specific Tailwind CSS design tokens, component patterns, responsive strategies, and animation patterns for the studio landing page. Use when building UI components, implementing designs, or checking style consistency. Trigger keywords: tailwind, styling, design tokens, component pattern, responsive, animation, dark mode, theme.
license: MIT
---

# Tailwind System Skill

## Overview

Project-specific styling guide for the studio landing page. Defines design tokens, component patterns, responsive strategies, and animation guidelines — all implemented via Tailwind CSS with zero runtime overhead.

**Tech Context**: Next.js 15, Tailwind CSS, TypeScript, SSG Landing Page

## When to Use This Skill

- Building new sections or components
- Checking if a color, spacing, or font value exists as a token
- Implementing responsive layouts
- Adding animations or transitions
- Ensuring dark mode support

## Design Tokens

> **Note**: These are placeholder tokens. Update after brand/design decisions are finalized via `/design-and-refine-start`.

See: `references/design-tokens.md`

### Color System (Placeholder)
```js
// tailwind.config.ts — to be populated
colors: {
  brand: {
    50: '#f0f9ff',   // lightest
    500: '#3b82f6',  // primary
    600: '#2563eb',  // primary hover
    900: '#1e3a5f',  // darkest
  },
  surface: {
    light: '#ffffff',
    dark: '#0a0a0a',
  }
}
```

### Typography Scale
```js
fontFamily: {
  sans: ['var(--font-primary)', 'system-ui', 'sans-serif'],
  mono: ['var(--font-mono)', 'monospace'],
},
fontSize: {
  // Uses Tailwind defaults + custom display sizes
  'display-lg': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
  'display': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
  'display-sm': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
}
```

### Spacing System
Uses Tailwind defaults (4px base). Key values:
- Section padding: `py-16 sm:py-20 lg:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 sm:p-8`
- Element gaps: `gap-4` (16px), `gap-6` (24px), `gap-8` (32px)

## Component Patterns

See: `references/component-patterns.md`

### Section Wrapper
```tsx
<section aria-label="[Section Name]" className="py-16 sm:py-20 lg:py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Section content */}
  </div>
</section>
```

### Section Header
```tsx
<div className="mx-auto max-w-2xl text-center">
  <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
    {title}
  </h2>
  <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
    {description}
  </p>
</div>
```

### Card
```tsx
<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900 sm:p-8">
  {/* Card content */}
</div>
```

### CTA Button (Primary)
```tsx
<a
  href="#contact"
  className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
>
  {label}
</a>
```

### CTA Button (Secondary)
```tsx
<a
  href="#services"
  className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
>
  {label}
</a>
```

## Responsive Strategy

See: `references/responsive-patterns.md`

Mobile-first approach using Tailwind breakpoints:
- `sm:` (640px) — larger phones, small tablets
- `md:` (768px) — tablets
- `lg:` (1024px) — laptops
- `xl:` (1280px) — desktops

### Grid Patterns
```tsx
// Services grid: 1 → 2 → 3 columns
<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

// Two-column feature: stack on mobile
<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

// Stats row: 2 → 4 columns
<div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
```

## Animation Guidelines

See: `references/animation-patterns.md`

- **Prefer CSS transitions** over JavaScript animations
- **Respect `prefers-reduced-motion`** — always
- **Subtle over flashy** — landing page, not a portfolio piece

### Hover Effects
```css
/* Tailwind utilities */
transition-colors    /* color changes */
transition-shadow    /* shadow changes */
transition-transform /* scale/translate */
duration-200         /* default duration */
```

### Scroll Animations (if needed)
Use CSS `@keyframes` + Intersection Observer in a tiny client component. Keep animation library-free if possible.

## Dark Mode

Strategy: `class` mode in Tailwind config, system preference detection in root layout.

```tsx
// Every color utility needs a dark: counterpart
className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white"
className="border-gray-200 dark:border-gray-800"
className="text-gray-600 dark:text-gray-400"
```

## How This Complements Other Skills

- **ui-design**: Provides visual hierarchy principles → tailwind-system provides the implementation tokens
- **design-and-refine**: Produces design specs → tailwind-system translates to Tailwind utilities
- **seo-content**: Provides heading hierarchy → tailwind-system provides the typography scale
