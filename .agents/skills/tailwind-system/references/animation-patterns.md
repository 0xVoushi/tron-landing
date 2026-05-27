# Animation Patterns Reference

Lightweight animation patterns for the landing page. CSS-only preferred; JavaScript only when absolutely necessary.

## Core Principles

1. **Performance first** — never animate properties that trigger layout (width, height, top, left). Use `transform` and `opacity` only.
2. **Respect preferences** — always honor `prefers-reduced-motion: reduce`
3. **Subtle over flashy** — this is a professional studio, not a portfolio experiment
4. **Purpose over decoration** — every animation must serve UX (feedback, orientation, attention)

## Tailwind Transition Utilities

### Interactive Element Feedback
```tsx
// Button hover/focus
className="transition-colors duration-200 hover:bg-brand-600"

// Card hover
className="transition-shadow duration-200 hover:shadow-md"

// Link hover
className="transition-colors duration-150 hover:text-brand-500"
```

### Navigation
```tsx
// Mobile menu slide
className="transition-transform duration-300 ease-out"

// Dropdown reveal
className="transition-opacity duration-200"
```

## CSS Scroll Animations (No JS)

### Fade In on Scroll (CSS `animation-timeline`)
```css
/* globals.css */
@media (prefers-reduced-motion: no-preference) {
  .animate-fade-in {
    animation: fade-in linear both;
    animation-timeline: view();
    animation-range: entry 0% entry 30%;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(1rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

@media (prefers-reduced-motion: reduce) {
  .animate-fade-in {
    animation: none;
    opacity: 1;
  }
}
```

### Usage
```tsx
<section className="animate-fade-in">
  {/* Content fades in as it scrolls into view */}
</section>
```

## Intersection Observer (Minimal JS)

When CSS scroll animations lack browser support, use a tiny client component:

```tsx
// components/ui/FadeIn.tsx
'use client'

import { useRef, useEffect, type ReactNode } from 'react'

export function FadeIn({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.opacity = '1'
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{ opacity: 0, transform: 'translateY(1rem)' }}
    >
      {children}
    </div>
  )
}
```

## Timing Guidelines

| Interaction | Duration | Easing |
|---|---|---|
| Hover color change | 150-200ms | ease (default) |
| Hover shadow/scale | 200ms | ease-out |
| Modal appear | 200-300ms | ease-out |
| Modal dismiss | 150-200ms | ease-in |
| Scroll reveal | 500-700ms | ease-out |
| Page transition | 200-300ms | ease-in-out |

## What NOT to Animate

- **No auto-playing carousels** — bad for accessibility and conversion
- **No parallax scrolling** — heavy on mobile, distracting
- **No text animation on load** — delays content visibility (hurts LCP)
- **No infinite animations** — except intentional loading spinners
- **No animation libraries** (GSAP, anime.js) — overkill for a landing page
