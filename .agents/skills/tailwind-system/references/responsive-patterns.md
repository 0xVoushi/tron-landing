# Responsive Patterns Reference

Mobile-first responsive design patterns for the landing page.

## Core Principle

**Mobile-first**: Write base styles for mobile, add complexity at larger breakpoints.

```tsx
// Correct: mobile-first
className="text-2xl sm:text-3xl lg:text-4xl"

// Wrong: desktop-first (overriding down)
className="text-4xl max-lg:text-3xl max-sm:text-2xl"
```

## Breakpoint Usage

| Breakpoint | Width | Typical Changes |
|---|---|---|
| Base (mobile) | < 640px | Single column, stacked layout, compact spacing |
| `sm:` | 640px | 2-column grids, slightly larger text |
| `md:` | 768px | Show desktop nav, hide mobile menu |
| `lg:` | 1024px | 3-column grids, full layout, larger spacing |
| `xl:` | 1280px | Max-width container, fine-tuning |

## Common Responsive Patterns

### Typography Scaling
```tsx
// Hero H1
className="text-3xl font-bold sm:text-4xl lg:text-5xl xl:text-6xl"

// Section H2
className="text-2xl font-bold sm:text-3xl lg:text-4xl"

// Body text
className="text-base sm:text-lg"
```

### Section Padding
```tsx
// Standard section
className="py-16 sm:py-20 lg:py-24"

// Hero (more breathing room)
className="py-20 sm:py-28 lg:py-36"

// Compact section
className="py-12 sm:py-16"
```

### Container Padding
```tsx
className="px-4 sm:px-6 lg:px-8"
```

### Grid Layouts
```tsx
// 1 → 2 → 3 columns
className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"

// 1 → 2 → 4 columns
className="grid grid-cols-2 gap-6 lg:grid-cols-4"

// Two-column with image (stack on mobile)
className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
```

### Navigation
```tsx
// Desktop links: hidden on mobile
className="hidden md:flex"

// Mobile menu button: hidden on desktop
className="md:hidden"
```

### CTA Layout
```tsx
// Stack on mobile, row on tablet+
className="flex flex-col gap-4 sm:flex-row"
```

### Image Sizing
```tsx
// Full width on mobile, constrained on desktop
className="w-full max-w-md lg:max-w-lg"

// Aspect ratio maintained
className="aspect-video w-full rounded-2xl object-cover"
```

## Testing Checklist

- [ ] No horizontal scroll at any viewport
- [ ] Touch targets minimum 44x44px on mobile
- [ ] Text readable without zooming on mobile
- [ ] Images don't overflow container
- [ ] Navigation accessible on all viewports
- [ ] CTA buttons full-width on mobile, auto-width on desktop
- [ ] Cards stack cleanly in single column on mobile
