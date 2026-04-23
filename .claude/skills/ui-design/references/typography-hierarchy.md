# Typography Hierarchy & Scale

Typography hierarchy creates visual structure through font size, weight, color, and spacing. This reference covers type scale systems, vertical rhythm, readability principles, and admin-specific typography patterns.

## Why Typography Hierarchy Matters

**Typography hierarchy solves fundamental readability problems:**
- **Scanability**: Users quickly understand content structure
- **Emphasis**: Important information stands out
- **Readability**: Comfortable reading experience at all sizes
- **Professional polish**: Consistent, harmonious type relationships
- **Accessibility**: Clear contrast and sizing for all users

**Without hierarchy**: Wall of text, unclear structure, poor usability, unprofessional appearance.

## Studio Typography Scale

**Current scale** (1rem = 10px):

```typescript
// theme.typography.sizes
const typographyScale = {
  xxxl: '4.8rem',  // 48px - Hero headings, page titles
  xxl: '3.6rem',   // 36px - Section headings
  xl: '2.4rem',    // 24px - Subsection headings
  lg: '1.8rem',    // 18px - Card titles, labels
  md: '1.6rem',    // 16px - Body text, primary content
  sm: '1.4rem',    // 14px - Secondary text, captions
  xs: '1.2rem',    // 12px - Tertiary text, metadata
};
```

**Scale ratio**: ~1.333 (perfect fourth)
- xxxl → xxl: 48 / 36 = 1.333
- xxl → xl: 36 / 24 = 1.5 (slightly larger jump)
- xl → lg: 24 / 18 = 1.333
- lg → md: 18 / 16 = 1.125 (smaller jump for proximity)
- md → sm: 16 / 14 = 1.143
- sm → xs: 14 / 12 = 1.167

**Why this scale works:**
- Based on musical intervals (perfect fourth = harmonious)
- Large enough jumps to create clear hierarchy
- Not too large to feel jarring or disconnected
- Works well for data-heavy admin interfaces

## Type Scale Ratios

Different ratios create different feels:

### Common Scale Ratios

**Minor Second (1.067):**
- Subtle, understated hierarchy
- Good for: Dense interfaces, data tables
- Example: 16px → 17px → 18.1px → 19.3px

**Major Second (1.125):**
- Gentle, refined hierarchy
- Good for: Content-heavy applications
- Example: 16px → 18px → 20.25px → 22.78px

**Minor Third (1.2):**
- Balanced, professional hierarchy
- Good for: General admin interfaces
- Example: 16px → 19.2px → 23.04px → 27.65px

**Major Third (1.25):**
- Clear, confident hierarchy
- Good for: Marketing pages, dashboards
- Example: 16px → 20px → 25px → 31.25px

**Perfect Fourth (1.333):** ← **Studio uses this**
- Strong, clear hierarchy
- Good for: Admin interfaces with clear structure
- Example: 16px → 21.33px → 28.44px → 37.9px

**Augmented Fourth (1.414):**
- Bold, dramatic hierarchy
- Good for: Landing pages, hero sections
- Example: 16px → 22.6px → 32px → 45.25px

**Perfect Fifth (1.5):**
- Very strong hierarchy
- Good for: Simple interfaces with few type sizes
- Example: 16px → 24px → 36px → 54px

**Golden Ratio (1.618):**
- Natural, organic hierarchy
- Good for: Content-focused interfaces
- Example: 16px → 25.9px → 41.9px → 67.8px

### Choosing a Scale Ratio

**Consider:**
1. **Interface density**: Denser interfaces need subtler scales (1.125-1.2)
2. **Content type**: Data-heavy needs subtle, marketing needs bold
3. **Number of levels**: More levels need larger ratios (1.333-1.5)
4. **Brand personality**: Formal = subtle, bold = dramatic

**Studio rationale:**
- Admin interface with clear sections
- Data-heavy but needs clear hierarchy
- Perfect fourth (1.333) balances clarity and professionalism
- 7 size levels (xxxl to xs) need strong differentiation

## Implementing Typography Scale

### Basic Typography System

```typescript
const Typography = styled.p<{ $size?: keyof typeof theme.typography.sizes }>`
  font-size: ${({ theme, $size = 'md' }) => theme.typography.sizes[$size]};
  line-height: ${({ $size }) => {
    // Larger text = tighter line-height
    switch ($size) {
      case 'xxxl': return 1.1; // 110%
      case 'xxl': return 1.15;
      case 'xl': return 1.2;
      case 'lg': return 1.3;
      case 'md': return 1.5;  // Body text sweet spot
      case 'sm': return 1.4;
      case 'xs': return 1.3;
      default: return 1.5;
    }
  }};
  color: ${({ theme }) => theme.colors.text.primary};
`;

// Usage:
<Typography $size="xxxl">Hero Heading</Typography>
<Typography $size="md">Body text paragraph</Typography>
<Typography $size="sm">Caption or metadata</Typography>
```

### Semantic Typography Components

```typescript
const H1 = styled.h1`
  font-size: ${({ theme }) => theme.typography.sizes.xxxl}; // 4.8rem
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em; // Slightly tighter for large text
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const H2 = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes.xxl}; // 3.6rem
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const H3 = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes.xl}; // 2.4rem
  font-weight: 600;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const H4 = styled.h4`
  font-size: ${({ theme }) => theme.typography.sizes.lg}; // 1.8rem
  font-weight: 600;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Body = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.md}; // 1.6rem
  font-weight: 400;
  line-height: 1.5; // 24px line-height for 16px text
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Caption = styled.span`
  font-size: ${({ theme }) => theme.typography.sizes.sm}; // 1.4rem
  font-weight: 400;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const Small = styled.small`
  font-size: ${({ theme }) => theme.typography.sizes.xs}; // 1.2rem
  font-weight: 400;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.text.tertiary};
`;
```

## Line Height (Leading)

Line height affects readability and visual density.

### Line Height Guidelines

**Body text (md):** 1.5 (150%)
- Optimal for paragraph reading
- 16px text → 24px line height
- Comfortable, not cramped or loose

**Large headings (xxxl, xxl, xl):** 1.1 - 1.2 (110-120%)
- Tighter for visual impact
- Prevents excessive vertical space
- Creates strong visual blocks

**Small text (sm, xs):** 1.3 - 1.4 (130-140%)
- More generous to aid readability
- Compensates for small font size
- Prevents text from running together

**Data tables:** 1.2 - 1.3 (120-130%)
- Compact for information density
- Still readable at small sizes
- Allows more rows on screen

### Implementing Line Height

```typescript
const lineHeights = {
  tight: 1.1,   // xxxl, xxl headings
  snug: 1.2,    // xl, lg headings
  normal: 1.5,  // Body text (md)
  relaxed: 1.6, // Long-form content
  loose: 1.8,   // Very spacious reading
};

const Heading = styled.h1<{ $level: 1 | 2 | 3 }>`
  line-height: ${({ $level }) => {
    switch ($level) {
      case 1: return lineHeights.tight;   // h1: 1.1
      case 2: return lineHeights.snug;    // h2: 1.2
      case 3: return lineHeights.normal;  // h3: 1.5
    }
  }};
`;
```

## Vertical Rhythm

Vertical rhythm creates consistent spacing between text elements using a baseline grid.

### Baseline Grid

**Concept:** All vertical spacing is a multiple of a base unit.

**Studio baseline:** 0.8rem (8px) — matches spacing system

```typescript
const baselineUnit = 0.8; // rem (8px)

const VerticalRhythm = styled.div`
  // All vertical margins/padding are multiples of 0.8rem
  h1 {
    margin-bottom: ${baselineUnit * 3}rem; // 2.4rem (24px) = 3 units
    line-height: ${baselineUnit * 6}rem;   // 4.8rem (48px) = 6 units
  }

  h2 {
    margin-bottom: ${baselineUnit * 2}rem; // 1.6rem (16px) = 2 units
    line-height: ${baselineUnit * 5}rem;   // 4rem (40px) = 5 units
  }

  p {
    margin-bottom: ${baselineUnit * 2}rem; // 1.6rem (16px) = 2 units
    line-height: ${baselineUnit * 3}rem;   // 2.4rem (24px) = 3 units
  }
`;
```

### Practical Vertical Rhythm

For admin interfaces, strict baseline grids can be rigid. Instead:

**Use semantic spacing:**
```typescript
const ContentBlock = styled.div`
  h2 {
    margin-bottom: ${({ theme }) => theme.spacing.md}; // 1.6rem
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md}; // 1.6rem
  }

  ul {
    margin-bottom: ${({ theme }) => theme.spacing.lg}; // 2.4rem
  }

  // Last element: no bottom margin
  > *:last-child {
    margin-bottom: 0;
  }
`;
```

**Benefits:**
- Consistent vertical spacing
- Easier to maintain
- Flexible for varying content
- Works with spacing system

## Font Weight Hierarchy

Font weight creates emphasis without changing size.

### Weight Scale

**Studio weights:**
```typescript
const fontWeights = {
  light: 300,    // Rarely used
  regular: 400,  // Body text, default
  medium: 500,   // Emphasis, labels
  semibold: 600, // Headings, strong emphasis
  bold: 700,     // Strongest emphasis, h1
};
```

### Weight Hierarchy Patterns

**Pattern 1: Size + Weight**
```typescript
const Heading1 = styled.h1`
  font-size: ${({ theme }) => theme.typography.sizes.xxxl}; // 4.8rem
  font-weight: 700; // Bold
`;

const Heading2 = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes.xxl}; // 3.6rem
  font-weight: 600; // Semibold
`;

const Heading3 = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes.xl}; // 2.4rem
  font-weight: 600; // Semibold
`;

const Body = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.md}; // 1.6rem
  font-weight: 400; // Regular
`;
```

**Pattern 2: Same Size, Different Weight**
```typescript
const Label = styled.label`
  font-size: ${({ theme }) => theme.typography.sizes.sm}; // 1.4rem
  font-weight: 600; // Semibold for labels
  color: ${({ theme }) => theme.colors.text.primary};
`;

const HelpText = styled.span`
  font-size: ${({ theme }) => theme.typography.sizes.sm}; // 1.4rem (same as label)
  font-weight: 400; // Regular for help text
  color: ${({ theme }) => theme.colors.text.secondary};
`;
```

**Pattern 3: Inline Emphasis**
```typescript
const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.md};
  font-weight: 400;
  line-height: 1.5;

  strong {
    font-weight: 600; // Medium emphasis
  }

  b {
    font-weight: 700; // Strong emphasis
  }
`;
```

## Letter Spacing (Tracking)

Letter spacing affects readability and visual impact.

### Letter Spacing Guidelines

**Large headings:** -0.02em to -0.01em (tighter)
- Improves visual cohesion
- Prevents text from feeling too loose
- Creates stronger visual impact

**Body text:** 0em (normal)
- Default spacing is optimal for 14-18px
- No adjustment needed

**Small text:** +0.01em to +0.02em (looser)
- Improves legibility at small sizes
- Prevents characters from running together
- Especially important for uppercase

**All-caps text:** +0.05em to +0.15em (much looser)
- Uppercase is denser visually
- More spacing improves readability
- Creates professional appearance

### Implementing Letter Spacing

```typescript
const H1 = styled.h1`
  font-size: ${({ theme }) => theme.typography.sizes.xxxl};
  letter-spacing: -0.02em; // Tighter for large text
`;

const H2 = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes.xxl};
  letter-spacing: -0.01em; // Slightly tighter
`;

const Body = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.md};
  letter-spacing: 0em; // Normal
`;

const Caption = styled.span`
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  letter-spacing: 0.01em; // Slightly looser for small text
`;

const AllCaps = styled.span`
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  text-transform: uppercase;
  letter-spacing: 0.1em; // Much looser for all-caps
  font-weight: 600;
`;
```

## Line Length (Measure)

Optimal line length improves readability.

### Line Length Guidelines

**Body text:** 45-75 characters per line (CPL)
- Optimal: 60-65 CPL
- Too short: Choppy reading, frequent line breaks
- Too long: Difficult to track to next line

**Data tables:** No limit
- Horizontal scrolling is acceptable
- Full data visibility is priority

**Narrow columns:** 40-50 CPL
- Sidebars, cards, mobile
- Shorter lines feel natural in constrained spaces

### Implementing Line Length

```typescript
const ArticleContent = styled.div`
  // Limit line length for readability
  max-width: 65ch; // 65 characters (optimal)
  margin: 0 auto; // Center the content

  p {
    font-size: ${({ theme }) => theme.typography.sizes.md};
    line-height: 1.5;
  }
`;

const WideContent = styled.div`
  // No width limit for data-heavy content
  width: 100%;

  // Tables can scroll horizontally
  table {
    min-width: 100%;
  }
`;

const SidebarContent = styled.aside`
  // Narrower for sidebar
  max-width: 50ch; // 50 characters

  p {
    font-size: ${({ theme }) => theme.typography.sizes.sm}; // Smaller text
    line-height: 1.4;
  }
`;
```

## Typography in Admin Interfaces

### Dashboard Metrics

```typescript
const MetricCard = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background.primary};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

const MetricLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.sm}; // 1.4rem
  font-weight: 500; // Medium
  color: ${({ theme }) => theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 0.05em; // Looser for uppercase
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const MetricValue = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.xxxl}; // 4.8rem
  font-weight: 700; // Bold
  line-height: 1.1; // Tight
  color: ${({ theme }) => theme.colors.text.primary};
  letter-spacing: -0.02em; // Tighter for large numbers
`;

const MetricChange = styled.div<{ $positive: boolean }>`
  font-size: ${({ theme }) => theme.typography.sizes.sm}; // 1.4rem
  font-weight: 500;
  color: ${({ $positive, theme }) =>
    $positive ? theme.colors.success : theme.colors.error};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;
```

### Data Tables

```typescript
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  font-size: ${({ theme }) => theme.typography.sizes.sm}; // 1.4rem
  font-weight: 600; // Semibold
  text-align: left;
  color: ${({ theme }) => theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.background.secondary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.border.default};
`;

const TableCell = styled.td`
  font-size: ${({ theme }) => theme.typography.sizes.md}; // 1.6rem
  font-weight: 400; // Regular
  line-height: 1.3; // Compact for density
  color: ${({ theme }) => theme.colors.text.primary};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
`;

const TableCellSecondary = styled(TableCell)`
  font-size: ${({ theme }) => theme.typography.sizes.sm}; // 1.4rem
  color: ${({ theme }) => theme.colors.text.secondary};
`;
```

### Forms

```typescript
const FormLabel = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.typography.sizes.sm}; // 1.4rem
  font-weight: 600; // Semibold
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xs}; // 0.4rem
`;

const FormInput = styled.input`
  font-size: ${({ theme }) => theme.typography.sizes.md}; // 1.6rem
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text.primary};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.sm};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.tertiary};
    font-weight: 400;
  }
`;

const FormHelp = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.typography.sizes.xs}; // 1.2rem
  font-weight: 400;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.text.tertiary};
  margin-top: ${({ theme }) => theme.spacing.xs}; // 0.4rem
`;

const FormError = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.typography.sizes.xs}; // 1.2rem
  font-weight: 500; // Medium for emphasis
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.error};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;
```

### Buttons

```typescript
const Button = styled.button<{ $size?: 'sm' | 'md' | 'lg' }>`
  font-size: ${({ theme, $size = 'md' }) => {
    switch ($size) {
      case 'sm': return theme.typography.sizes.xs;  // 1.2rem
      case 'md': return theme.typography.sizes.sm;  // 1.4rem
      case 'lg': return theme.typography.sizes.md;  // 1.6rem
    }
  }};
  font-weight: 600; // Semibold for all buttons
  line-height: 1;
  letter-spacing: 0.01em; // Slightly looser
  text-transform: none; // Sentence case (not uppercase)
  padding: ${({ theme, $size = 'md' }) => {
    switch ($size) {
      case 'sm': return `${theme.spacing.xs} ${theme.spacing.sm}`;   // 0.4rem 0.8rem
      case 'md': return `${theme.spacing.sm} ${theme.spacing.md}`;   // 0.8rem 1.6rem
      case 'lg': return `${theme.spacing.md} ${theme.spacing.lg}`;   // 1.6rem 2.4rem
    }
  }};
`;
```

## Responsive Typography

### Fluid Typography

Scale typography based on viewport width:

```typescript
// Using clamp() for fluid typography
const FluidHeading = styled.h1`
  // font-size: clamp(min, preferred, max)
  font-size: clamp(
    ${({ theme }) => theme.typography.sizes.xxl},  // min: 3.6rem (36px)
    5vw,                                            // preferred: 5% of viewport
    ${({ theme }) => theme.typography.sizes.xxxl}  // max: 4.8rem (48px)
  );
  line-height: 1.1;
`;

const FluidBody = styled.p`
  font-size: clamp(
    ${({ theme }) => theme.typography.sizes.sm},   // min: 1.4rem (14px)
    1.6vw,                                          // preferred: 1.6% of viewport
    ${({ theme }) => theme.typography.sizes.md}    // max: 1.6rem (16px)
  );
  line-height: 1.5;
`;
```

### Breakpoint-Based Typography

```typescript
const ResponsiveHeading = styled.h1`
  // Mobile: smaller
  font-size: ${({ theme }) => theme.typography.sizes.xl}; // 2.4rem
  line-height: 1.2;

  // Tablet: medium
  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.typography.sizes.xxl}; // 3.6rem
    line-height: 1.15;
  }

  // Desktop: largest
  @media (min-width: 1280px) {
    font-size: ${({ theme }) => theme.typography.sizes.xxxl}; // 4.8rem
    line-height: 1.1;
  }
`;

const ResponsiveBody = styled.p`
  // Mobile: 1.4rem
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  line-height: 1.5;

  // Desktop: 1.6rem
  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.typography.sizes.md};
    line-height: 1.5;
  }
`;
```

## Common Typography Mistakes

### Mistake 1: Too Many Font Sizes

**Problem:** Inconsistent, chaotic hierarchy
```typescript
// ❌ Bad: Random font sizes
.title1 { font-size: 42px; }
.title2 { font-size: 38px; }
.title3 { font-size: 32px; }
.title4 { font-size: 28px; }
.title5 { font-size: 24px; }
// ... 10 more sizes
```

**Solution:** Stick to 5-7 sizes from scale
```typescript
// ✅ Good: Use scale consistently
const H1 = styled.h1`
  font-size: ${({ theme }) => theme.typography.sizes.xxxl}; // 4.8rem
`;

const H2 = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes.xxl}; // 3.6rem
`;

const H3 = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes.xl}; // 2.4rem
`;
```

### Mistake 2: Poor Line Height

**Problem:** Cramped or loose text
```typescript
// ❌ Bad: Same line-height for all sizes
h1, p, small {
  line-height: 1.5; // Too loose for h1, maybe ok for p, too tight for small
}
```

**Solution:** Adjust line-height by size
```typescript
// ✅ Good: Size-appropriate line-heights
const H1 = styled.h1`
  font-size: ${({ theme }) => theme.typography.sizes.xxxl};
  line-height: 1.1; // Tight for large text
`;

const Body = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.md};
  line-height: 1.5; // Comfortable for reading
`;

const Small = styled.small`
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  line-height: 1.4; // More generous for small text
`;
```

### Mistake 3: Ignoring Hierarchy

**Problem:** All text looks the same
```typescript
// ❌ Bad: No visual distinction
.title, .body, .caption {
  font-size: 16px;
  font-weight: 400;
  color: #333;
}
```

**Solution:** Use size, weight, and color
```typescript
// ✅ Good: Clear hierarchy
const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes.xl}; // 2.4rem (larger)
  font-weight: 600; // Semibold (heavier)
  color: ${({ theme }) => theme.colors.text.primary}; // Darker
`;

const Body = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.md}; // 1.6rem (medium)
  font-weight: 400; // Regular
  color: ${({ theme }) => theme.colors.text.primary};
`;

const Caption = styled.span`
  font-size: ${({ theme }) => theme.typography.sizes.sm}; // 1.4rem (smaller)
  font-weight: 400; // Regular
  color: ${({ theme }) => theme.colors.text.secondary}; // Lighter
`;
```

### Mistake 4: Lines Too Long

**Problem:** Hard to read, eye strain
```typescript
// ❌ Bad: No width constraint
.content {
  width: 100%; // Can stretch to 200+ characters per line
}
```

**Solution:** Limit line length
```typescript
// ✅ Good: Optimal line length
const Content = styled.div`
  max-width: 65ch; // 65 characters
  margin: 0 auto;
`;
```

### Mistake 5: Not Testing Small Sizes

**Problem:** Unreadable at small sizes
```typescript
// ❌ Bad: 10px text with tight line-height
.footnote {
  font-size: 10px; // Too small (< 12px)
  line-height: 1.2; // Too tight for small text
}
```

**Solution:** Minimum 12px with generous line-height
```typescript
// ✅ Good: Readable small text
const Footnote = styled.small`
  font-size: ${({ theme }) => theme.typography.sizes.xs}; // 1.2rem (12px minimum)
  line-height: 1.4; // More generous
  color: ${({ theme }) => theme.colors.text.tertiary};
`;
```

## Accessibility Considerations

### Minimum Font Size

**WCAG 2.1:** No minimum font size requirement, but best practices:
- Body text: 16px (1.6rem) minimum
- Small text: 12px (1.2rem) minimum
- Avoid text smaller than 12px

### Contrast Requirements

**WCAG 2.1 AA:**
- Normal text: 4.5:1 contrast ratio minimum
- Large text (18px+ or 14px+ bold): 3:1 minimum

**Example:**
```typescript
const Body = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.md}; // 1.6rem
  color: ${({ theme }) => theme.colors.text.primary}; // #1A1A1A (meets 4.5:1 on white)
`;

const LargeHeading = styled.h1`
  font-size: ${({ theme }) => theme.typography.sizes.xxxl}; // 4.8rem (large text)
  color: ${({ theme }) => theme.colors.text.secondary}; // #666666 (can be 3:1 ratio)
`;
```

### Zoom and Reflow

Support text zoom up to 200%:
```typescript
const ResponsiveText = styled.p`
  // Use rem for scalability
  font-size: ${({ theme }) => theme.typography.sizes.md}; // 1.6rem

  // Reflow at small viewports
  max-width: 100%;
  overflow-wrap: break-word; // Break long words
`;
```

## Summary

**Key principles:**
1. Use a consistent type scale (Studio: 1.333 ratio, perfect fourth)
2. 5-7 font sizes maximum (xxxl to xs)
3. Adjust line-height by size (1.1 for large, 1.5 for body, 1.4 for small)
4. Limit line length to 45-75 characters
5. Use font weight for hierarchy (700 bold, 600 semibold, 400 regular)
6. Adjust letter-spacing (tighter for large, looser for small/all-caps)
7. Vertical rhythm with semantic spacing
8. Responsive typography (fluid or breakpoint-based)
9. WCAG 2.1 AA compliance (4.5:1 contrast, 12px minimum)
10. Test at all sizes and zoom levels

**Quick reference:**
- Body text: 1.6rem (16px), line-height 1.5, 400 weight
- Headings: 2.4-4.8rem, line-height 1.1-1.2, 600-700 weight
- Small text: 1.2-1.4rem, line-height 1.4, 400-500 weight
- Line length: 65 characters max for reading
- Scale ratio: 1.333 (perfect fourth)
