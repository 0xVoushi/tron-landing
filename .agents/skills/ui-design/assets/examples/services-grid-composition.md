# Services Grid Composition Example

## Visual Hierarchy

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│              H2: "What We Build"                    │  ← Section heading (centered)
│              text-3xl font-bold sm:text-4xl         │
│                                                     │
│              Supporting description text             │  ← Section description
│              text-lg text-gray-600 max-w-2xl        │
│                                                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐         │
│  │ 🔷 Icon  │  │ 🔷 Icon  │  │ 🔷 Icon  │         │  ← Service cards (equal weight)
│  │          │  │          │  │          │         │
│  │ H3: Web  │  │ H3: AI   │  │ H3: Web3 │         │
│  │ Dev      │  │ Integr.  │  │ & DeFi   │         │
│  │          │  │          │  │          │         │
│  │ Brief    │  │ Brief    │  │ Brief    │         │
│  │ desc.    │  │ desc.    │  │ desc.    │         │
│  └──────────┘  └──────────┘  └──────────┘         │
│                                                     │
│  ┌──────────┐  ┌──────────┐                        │
│  │ H3: Full │  │ H3: Cust │                        │
│  │ stack    │  │ om Dev   │                        │
│  └──────────┘  └──────────┘                        │
│                                                     │
└─────────────────────────────────────────────────────┘
```

## Key Principles Applied

- **Gestalt Proximity**: Cards grouped together = perceived as related
- **Gestalt Similarity**: All cards have identical styling = equal importance
- **Grid consistency**: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8`
- **Icon as anchor**: Each card starts with an icon — visual entry point
- **Heading hierarchy**: H2 section title → H3 per card (SEO-correct)
- **Balanced whitespace**: `p-6 sm:p-8` inside cards, `gap-8` between
