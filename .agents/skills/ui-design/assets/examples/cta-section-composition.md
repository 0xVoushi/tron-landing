# CTA Section Composition Example

## Visual Hierarchy

```
┌─────────────────────────────────────────────────────┐
│  ████████████████████████████████████████████████   │  ← Full-width color block
│  ████████████████████████████████████████████████   │     bg-brand-500
│  ████                                        ████   │
│  ████     H2: "Ready to Build Something?"    ████   │  ← Contrasting text (white)
│  ████     text-3xl font-bold text-white      ████   │
│  ████                                        ████   │
│  ████     Supporting line of text            ████   │  ← Softer white
│  ████     text-lg text-brand-100             ████   │
│  ████                                        ████   │
│  ████           [  CTA Button  ]             ████   │  ← Inverted CTA
│  ████           bg-white text-brand-600      ████   │     (white on brand)
│  ████                                        ████   │
│  ████████████████████████████████████████████████   │
│  ████████████████████████████████████████████████   │
└─────────────────────────────────────────────────────┘
```

## Key Principles Applied

- **Visual break**: Colored background creates strong section separation
- **Contrast inversion**: White text on brand color, inverted CTA button
- **Single focus**: One CTA button, no distractions
- **Urgency through simplicity**: Short, direct copy
- **Centered layout**: `text-center max-w-7xl mx-auto`
- **Generous padding**: `py-16 sm:py-20` for visual weight
