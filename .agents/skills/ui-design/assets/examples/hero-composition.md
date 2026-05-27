# Hero Section Composition Example

## Visual Hierarchy

```
┌─────────────────────────────────────────────────────┐
│  Logo        Nav Links              [CTA Button]    │  ← Navigation (sticky)
├─────────────────────────────────────────────────────┤
│                                                     │
│              H1: Primary Headline                   │  ← Level 1: Largest, boldest
│              text-4xl sm:text-5xl lg:text-6xl       │
│                                                     │
│              Subheadline / Value Proposition         │  ← Level 2: Supporting text
│              text-lg text-gray-600 max-w-2xl        │
│                                                     │
│              [Primary CTA]  [Secondary CTA]         │  ← Level 3: Action buttons
│              bg-brand-500   border border-gray-300  │
│                                                     │
│              Trust: "40+ products | 12 countries"   │  ← Level 4: Social proof
│              text-sm text-gray-500                  │
│                                                     │
└─────────────────────────────────────────────────────┘
```

## Key Principles Applied

- **F-Pattern**: Eye scans left-to-right on headline, then down to CTA
- **Visual weight**: H1 has maximum weight (size + boldness)
- **Progressive disclosure**: Headline → subhead → CTA → proof
- **Whitespace**: `py-24 lg:py-40` gives breathing room
- **Single focus**: One clear primary CTA, secondary is understated
