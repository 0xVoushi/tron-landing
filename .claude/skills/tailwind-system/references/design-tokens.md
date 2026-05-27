# Design Tokens Reference

> **Status**: Placeholder — update after brand decisions are finalized.

## Color Palette

### Brand Colors (TBD)
```js
brand: {
  50: '#f0f9ff',
  100: '#e0f2fe',
  200: '#bae6fd',
  300: '#7dd3fc',
  400: '#38bdf8',
  500: '#3b82f6',  // Primary
  600: '#2563eb',  // Primary hover
  700: '#1d4ed8',
  800: '#1e40af',
  900: '#1e3a5f',
  950: '#172554',
}
```

### Neutral Colors
```js
// Using Tailwind's gray scale by default
// Consider: slate (cool), zinc (neutral), stone (warm)
```

### Semantic Colors
```js
success: { light: '#22c55e', dark: '#4ade80' },
warning: { light: '#f59e0b', dark: '#fbbf24' },
error: { light: '#ef4444', dark: '#f87171' },
info: { light: '#3b82f6', dark: '#60a5fa' },
```

### Surface Colors
```js
// Light mode
background: '#ffffff',
surface: '#f9fafb',       // gray-50
surfaceHover: '#f3f4f6',  // gray-100
border: '#e5e7eb',        // gray-200

// Dark mode
background: '#0a0a0a',
surface: '#111827',       // gray-900
surfaceHover: '#1f2937',  // gray-800
border: '#374151',        // gray-700
```

## Typography

### Font Family (TBD)
```js
// Options to evaluate:
// - Inter (safe, universal, excellent readability)
// - Plus Jakarta Sans (modern, friendly, geometric)
// - Outfit (clean, contemporary, slightly rounded)
// - Satoshi (premium feel, good for agencies)

fontFamily: {
  sans: ['var(--font-primary)', 'system-ui', 'sans-serif'],
  mono: ['var(--font-mono)', 'Menlo', 'monospace'],
}
```

### Font Sizes
```js
// Display (hero headings)
'display-lg': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
'display': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
'display-sm': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],

// Standard Tailwind text-xs through text-5xl covers the rest
```

## Spacing

Uses Tailwind 4px base grid. Custom additions if needed:
```js
spacing: {
  '18': '4.5rem',  // 72px — between standard 16 (64px) and 20 (80px)
  '88': '22rem',   // 352px — custom container width
}
```

### Section Spacing Convention
- Between sections: `py-16 sm:py-20 lg:py-24`
- Hero (extra breathing room): `py-24 sm:py-32 lg:py-40`
- Compact sections: `py-12 sm:py-16`

## Border Radius

```js
borderRadius: {
  // Uses Tailwind defaults:
  // 'sm': '0.125rem' (2px)
  // DEFAULT: '0.25rem' (4px)
  // 'md': '0.375rem' (6px)
  // 'lg': '0.5rem' (8px)
  // 'xl': '0.75rem' (12px)
  // '2xl': '1rem' (16px)
  // '3xl': '1.5rem' (24px)

  // Convention:
  // Buttons: rounded-lg (8px)
  // Cards: rounded-2xl (16px)
  // Badges: rounded-full
  // Inputs: rounded-lg (8px)
}
```

## Shadows

```js
boxShadow: {
  // Using Tailwind defaults:
  // 'sm': small subtle shadow (cards at rest)
  // DEFAULT: medium shadow (cards on hover)
  // 'lg': large shadow (modals, dropdowns)

  // Convention:
  // Cards: shadow-sm → hover:shadow-md
  // Modals: shadow-xl
  // Buttons: shadow-sm
}
```

## Breakpoints

Standard Tailwind breakpoints (mobile-first):
```js
screens: {
  'sm': '640px',   // Large phones
  'md': '768px',   // Tablets
  'lg': '1024px',  // Laptops
  'xl': '1280px',  // Desktops
  '2xl': '1536px', // Large desktops
}
```

## Container

```js
// Convention: no Tailwind container plugin
// Use max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pattern
```
