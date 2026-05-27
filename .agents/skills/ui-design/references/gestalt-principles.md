# Gestalt Principles in UI Design

Gestalt principles explain how humans perceive and organize visual information. This reference covers proximity, similarity, continuation, closure, figure-ground, common region, and symmetry in admin interface design.

## What Are Gestalt Principles?

**Gestalt psychology** (German: "unified whole") describes how humans naturally perceive visual elements as organized patterns rather than separate components.

**Why Gestalt matters for UI:**
- **Automatic perception**: Users don't need to think — organization happens instantly
- **Reduced cognitive load**: Brain processes grouped information faster
- **Intuitive interfaces**: Leverage natural human perception
- **Clear relationships**: Show connections without explicit labels
- **Professional polish**: Well-organized interfaces feel better

**The fundamental insight**: The whole is greater than the sum of its parts.

## Proximity (Nearness)

**Principle**: Elements close together are perceived as related.

### Basic Proximity

```typescript
const FormWithProximity = styled.form`
  .field-group {
    // Elements within group are close together
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xs}; // 0.4rem - Very tight

    // Large gap between groups shows separation
    margin-bottom: ${({ theme }) => theme.spacing.xl}; // 3.2rem - Much larger
  }

  label {
    // Very close to input (strong relationship)
    margin-bottom: ${({ theme }) => theme.spacing.xs}; // 0.4rem
  }

  .help-text {
    // Very close to input (belongs to this field)
    margin-top: ${({ theme }) => theme.spacing.xs}; // 0.4rem
  }
`;
```

**Effect**: Users instantly see three distinct field groups, with each group containing related elements.

### Proximity in Cards

```typescript
const CardWithProximity = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.lg};

  .metric-group {
    // Title + value are close (strongly related)
    .label {
      margin-bottom: ${({ theme }) => theme.spacing.xs}; // 0.4rem - Tight
      font-size: ${({ theme }) => theme.typography.sizes.sm};
      color: ${({ theme }) => theme.colors.text.secondary};
    }

    .value {
      font-size: ${({ theme }) => theme.typography.sizes.xxxl};
      font-weight: 700;
    }

    // Large gap between metrics (separate concepts)
    margin-bottom: ${({ theme }) => theme.spacing.lg}; // 2.4rem - Much larger
  }
`;
```

### Proximity in Navigation

```typescript
const Navigation = styled.nav`
  .nav-section {
    // Related nav items are grouped
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xs}; // 0.4rem - Tight grouping

    // Sections separated by larger gap
    margin-bottom: ${({ theme }) => theme.spacing.lg}; // 2.4rem

    .nav-item {
      padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
      // Items within section feel related
    }
  }

  // Visual divider reinforces proximity grouping
  .nav-section + .nav-section {
    border-top: 1px solid ${({ theme }) => theme.colors.border.light};
    padding-top: ${({ theme }) => theme.spacing.lg};
  }
`;
```

**Key rule**: Related = close (xs, sm), unrelated = far (lg, xl, xxl).

## Similarity

**Principle**: Elements with similar visual properties are perceived as related or grouped.

### Similarity Through Color

```typescript
const StatusBadges = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const SuccessBadge = styled.span`
  // All success items share green color
  background: ${({ theme }) => theme.colors.success};
  color: white;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: 600;
`;

const ErrorBadge = styled.span`
  // All error items share red color
  background: ${({ theme }) => theme.colors.error};
  color: white;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: 600;
`;

const WarningBadge = styled.span`
  // All warning items share yellow color
  background: ${({ theme }) => theme.colors.warning};
  color: ${({ theme }) => theme.colors.text.primary};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: 600;
`;
```

**Effect**: Users instantly categorize items by color without reading text.

### Similarity Through Shape

```typescript
const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};

  // All buttons share rounded rectangle shape
  button {
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
    border-radius: ${({ theme }) => theme.borderRadius.sm}; // Consistent shape
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    font-weight: 600;
    // Shape similarity groups them as related actions
  }
`;

const LinkGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};

  // All links share text-only appearance
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    // No background, no padding — different category from buttons
  }
`;
```

### Similarity Through Size

```typescript
const Dashboard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};

  // All metric cards same size (perceived as equivalent/related)
  .metric-card {
    height: 16rem; // Consistent height
    padding: ${({ theme }) => theme.spacing.lg};
    background: ${({ theme }) => theme.colors.background.primary};
    border: 1px solid ${({ theme }) => theme.colors.border.default};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    // Size similarity suggests equal importance
  }

  // Larger feature card stands out as different category
  .feature-card {
    grid-column: span 3; // Full width
    height: 24rem; // Taller
    // Size difference signals different type of content
  }
`;
```

### Similarity Through Typography

```typescript
const Article = styled.article`
  // All headings share bold weight and spacing
  h2, h3, h4 {
    font-weight: 600; // Similarity: all bold
    margin-top: ${({ theme }) => theme.spacing.xl};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.text.primary};
    // Typography similarity groups them as "headings" category
  }

  // All body paragraphs share regular weight and line-height
  p {
    font-weight: 400; // Similarity: all regular
    line-height: 1.5;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.text.primary};
    // Typography similarity groups them as "body text" category
  }

  // All captions share small size and muted color
  .caption, figcaption, .meta {
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    color: ${({ theme }) => theme.colors.text.tertiary};
    font-style: italic;
    // Similarity signals "less important metadata"
  }
`;
```

**Key rule**: Same appearance = same category/function.

## Continuation (Continuity)

**Principle**: Eyes follow lines, curves, or sequences of elements. Elements arranged on a line or curve are perceived as related.

### Linear Continuation

```typescript
const Breadcrumbs = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  .breadcrumb-item {
    color: ${({ theme }) => theme.colors.text.secondary};
    // Items arranged in horizontal line create path

    &:not(:last-child)::after {
      content: '›';
      margin-left: ${({ theme }) => theme.spacing.sm};
      color: ${({ theme }) => theme.colors.text.tertiary};
      // Separators reinforce linear continuation
    }
  }

  .breadcrumb-item:last-child {
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: 600;
    // End of the path
  }
`;
```

### Curved Continuation

```typescript
const ProgressSteps = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: ${({ theme }) => theme.spacing.xl} 0;

  // Line connects steps (continuation)
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.border.default};
    transform: translateY(-50%);
    z-index: 0;
    // Line creates visual path
  }

  .step {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};

    .step-circle {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.background.primary};
      border: 2px solid ${({ theme }) => theme.colors.border.default};
      display: flex;
      align-items: center;
      justify-content: center;
      // Circles on the line
    }

    &.active .step-circle {
      background: ${({ theme }) => theme.colors.primary};
      color: white;
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
```

### Table Continuation

```typescript
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  tr {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
    // Horizontal lines create continuation across columns
  }

  tbody tr:hover {
    background: ${({ theme }) => theme.colors.background.secondary};
    // Hover reinforces row continuation
  }

  th, td {
    text-align: left;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    // Alignment creates vertical continuation down columns
  }
`;
```

### List Continuation

```typescript
const List = styled.ul`
  list-style: none;
  padding: 0;

  li {
    position: relative;
    padding-left: ${({ theme }) => theme.spacing.lg};
    margin-bottom: ${({ theme }) => theme.spacing.sm};

    // Bullets aligned vertically create continuation
    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.colors.primary};
      font-size: ${({ theme }) => theme.typography.sizes.lg};
      // Vertical line of bullets creates visual path
    }
  }
`;
```

**Key rule**: Aligned elements create paths that eyes naturally follow.

## Closure

**Principle**: Humans mentally complete incomplete shapes or patterns.

### Incomplete Borders

```typescript
const CardWithClosure = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background.primary};

  // Only top and bottom borders (not complete rectangle)
  border-top: 2px solid ${({ theme }) => theme.colors.primary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};

  // Brain completes the rectangle
  // Feels like a contained card without full border
`;
```

### Dotted Borders (Incomplete Lines)

```typescript
const DashedCard = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background.primary};
  border: 2px dashed ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  // Dashed line is incomplete, but brain perceives complete boundary
  // Feels less "heavy" than solid border
`;
```

### Implicit Grouping

```typescript
const GridWithClosure = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};

  // No visible container, but spacing creates implicit boundary
  .card {
    padding: ${({ theme }) => theme.spacing.lg};
    background: ${({ theme }) => theme.colors.background.primary};
    // Brain perceives 3-column grid structure without explicit container
  }
`;
```

### Loading Skeletons

```typescript
const SkeletonCard = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background.primary};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};

  .skeleton-line {
    height: 1.6rem;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.background.secondary} 25%,
      ${({ theme }) => theme.colors.background.tertiary} 50%,
      ${({ theme }) => theme.colors.background.secondary} 75%
    );
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
    border-radius: ${({ theme }) => theme.borderRadius.xs};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    // Incomplete representation, but brain fills in "text will go here"
  }
`;
```

**Key rule**: Suggest structure — brains complete it.

## Figure-Ground

**Principle**: Humans naturally separate visual elements into foreground (figure) and background (ground).

### Modal Over Page

```typescript
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); // Darkened ground
  z-index: 999;
  // Background becomes less prominent
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.colors.background.primary}; // Bright figure
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow:
    0 0.4rem 0.8rem rgba(0, 0, 0, 0.1),
    0 1.6rem 3.2rem rgba(0, 0, 0, 0.2);
  z-index: 1000;
  // Modal is clearly figure (foreground), page is ground (background)
`;
```

### Card on Page

```typescript
const Page = styled.div`
  background: ${({ theme }) => theme.colors.background.default}; // #F5F5F5 (ground)
  padding: ${({ theme }) => theme.spacing.xl};
  min-height: 100vh;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.background.primary}; // #FFFFFF (figure)
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.1);
  // Card "lifts" off page background
`;
```

### Dropdown Menu

```typescript
const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: ${({ theme }) => theme.spacing.xs};
  background: ${({ theme }) => theme.colors.background.primary}; // Figure
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  box-shadow:
    0 0.4rem 0.8rem rgba(0, 0, 0, 0.1),
    0 0.8rem 1.6rem rgba(0, 0, 0, 0.15);
  min-width: 20rem;
  z-index: 100;
  // Clearly foreground element
`;
```

### Reversible Figure-Ground

```typescript
const ToggleableCard = styled.div<{ $highlighted: boolean }>`
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all 0.2s ease;

  // Normal state: card is figure
  background: ${({ theme, $highlighted }) =>
    $highlighted
      ? theme.colors.primary // Figure becomes background
      : theme.colors.background.primary}; // Figure

  color: ${({ theme, $highlighted }) =>
    $highlighted
      ? 'white' // Content becomes figure
      : theme.colors.text.primary}; // Content

  // Highlighted state: colors invert, figure-ground reverses
`;
```

**Key rule**: Contrast, shadows, and layering create depth perception.

## Common Region (Enclosure)

**Principle**: Elements within a bounded region are perceived as grouped.

### Bordered Regions

```typescript
const RegionCard = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background.primary};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  // Border creates clear region boundary

  .section {
    // Subsections within region
    padding: ${({ theme }) => theme.spacing.md};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    background: ${({ theme }) => theme.colors.background.secondary};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    // Nested region (region within region)
  }
`;
```

### Background Color Regions

```typescript
const Dashboard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};

  .metric-group {
    // Background color defines region (no border needed)
    background: ${({ theme }) => theme.colors.background.secondary};
    padding: ${({ theme }) => theme.spacing.lg};
    border-radius: ${({ theme }) => theme.borderRadius.md};

    .metric {
      // Items within region feel grouped
      margin-bottom: ${({ theme }) => theme.spacing.sm};

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;
```

### Fieldset Regions

```typescript
const FormFieldset = styled.fieldset`
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  legend {
    padding: 0 ${({ theme }) => theme.spacing.sm};
    font-size: ${({ theme }) => theme.typography.sizes.lg};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  // All fields within fieldset feel related
  .field {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;
```

### Shadow Regions

```typescript
const ElevatedCard = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow:
    0 0.1rem 0.3rem rgba(0, 0, 0, 0.1),
    0 0.4rem 0.8rem rgba(0, 0, 0, 0.05);
  // Shadow creates implicit boundary (region without border)

  .content {
    // Content within shadow boundary feels grouped
  }
`;
```

**Key rule**: Boundaries (borders, backgrounds, shadows) create groupings.

## Symmetry and Order

**Principle**: Humans perceive symmetrical, orderly arrangements as harmonious and related.

### Symmetrical Layout

```typescript
const SymmetricalModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // Center axis creates symmetry
  padding: ${({ theme }) => theme.spacing.xxl};
  text-align: center;

  .icon {
    font-size: ${({ theme }) => theme.typography.sizes.xxxl};
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    // Centered = symmetrical
  }

  .title {
    font-size: ${({ theme }) => theme.typography.sizes.xxl};
    font-weight: 700;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    // Centered = symmetrical
  }

  .description {
    max-width: 50rem;
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    // Centered text block = symmetrical
  }

  .actions {
    display: flex;
    gap: ${({ theme }) => theme.spacing.sm};
    // Buttons symmetrical around center
  }
`;
```

### Grid Order

```typescript
const OrderedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); // Even columns = order
  gap: ${({ theme }) => theme.spacing.lg}; // Consistent gaps = order
  // Symmetry and regular spacing create harmony

  .card {
    // All cards same size = order
    height: 20rem;
    padding: ${({ theme }) => theme.spacing.lg};
    background: ${({ theme }) => theme.colors.background.primary};
    border: 1px solid ${({ theme }) => theme.colors.border.default};
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }
`;
```

### Radial Symmetry

```typescript
const RadialMenu = styled.div`
  position: relative;
  width: 20rem;
  height: 20rem;

  .center-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    // Center of radial symmetry
  }

  .menu-item {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    // Items arranged in circle around center = radial symmetry

    &:nth-child(2) {
      transform: translate(-50%, -50%) translateY(-8rem); // Top
    }

    &:nth-child(3) {
      transform: translate(-50%, -50%) translateX(8rem); // Right
    }

    &:nth-child(4) {
      transform: translate(-50%, -50%) translateY(8rem); // Bottom
    }

    &:nth-child(5) {
      transform: translate(-50%, -50%) translateX(-8rem); // Left
    }
  }
`;
```

**Key rule**: Symmetry and regular spacing create perceived order and harmony.

## Combining Gestalt Principles

Most effective interfaces combine multiple principles:

```typescript
const EffectiveDashboard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg}; // Proximity + Symmetry
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.background.default}; // Figure-ground
`;

const MetricCard = styled.div`
  // Common region (border + background)
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background.primary};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.05);

  .metric-label {
    // Proximity (very close to value)
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    color: ${({ theme }) => theme.colors.text.secondary};
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .metric-value {
    font-size: ${({ theme }) => theme.typography.sizes.xxxl};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text.primary};
    line-height: 1.1;
  }

  .metric-change {
    // Proximity (close to value) + Similarity (color coding)
    margin-top: ${({ theme }) => theme.spacing.sm};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    font-weight: 500;

    &.positive {
      color: ${({ theme }) => theme.colors.success};
    }

    &.negative {
      color: ${({ theme }) => theme.colors.error};
    }
  }
`;
```

**Principles at work:**
1. **Proximity**: Label very close to value
2. **Similarity**: All cards same size/shape
3. **Common region**: Border and background define card
4. **Figure-ground**: Cards on page background
5. **Symmetry**: Even grid spacing
6. **Similarity**: Color-coded changes (green/red)

## Common Gestalt Mistakes

### Mistake 1: Inconsistent Spacing Breaks Proximity

**Problem:** Random gaps confuse relationships
```typescript
// ❌ Bad: Inconsistent spacing
.field1 { margin-bottom: 8px; }
.field2 { margin-bottom: 24px; }
.field3 { margin-bottom: 12px; }
// Brain can't determine grouping
```

**Solution:** Consistent proximity groups
```typescript
// ✅ Good: Consistent spacing shows grouping
const Field = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xs}; // Within group: tight (0.4rem)
`;

const FieldGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl}; // Between groups: large (3.2rem)
`;
```

### Mistake 2: Breaking Similarity Breaks Grouping

**Problem:** Inconsistent appearance breaks perceived relationships
```typescript
// ❌ Bad: Buttons look different
.button1 { border-radius: 4px; padding: 8px; background: blue; }
.button2 { border-radius: 16px; padding: 12px; background: green; }
.button3 { border-radius: 0; padding: 6px; background: red; }
// Don't look related despite being similar function
```

**Solution:** Consistent appearance
```typescript
// ✅ Good: Similar buttons look similar
const Button = styled.button`
  border-radius: ${({ theme }) => theme.borderRadius.sm}; // All same
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg}; // All same
  font-weight: 600;
  // Appearance similarity indicates functional similarity
`;
```

### Mistake 3: No Clear Figure-Ground

**Problem:** Everything blends together
```typescript
// ❌ Bad: No depth separation
.page { background: white; }
.card { background: white; border: 1px solid #f0f0f0; }
// Card doesn't "lift" off page
```

**Solution:** Clear depth layers
```typescript
// ✅ Good: Clear figure-ground separation
const Page = styled.div`
  background: ${({ theme }) => theme.colors.background.default}; // #F5F5F5
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.background.primary}; // #FFFFFF
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.1);
  // Clear separation from background
`;
```

### Mistake 4: Weak Common Region

**Problem:** Unclear grouping boundaries
```typescript
// ❌ Bad: No clear boundary
.group {
  // No border, no background, nothing defining region
}
```

**Solution:** Clear region definition
```typescript
// ✅ Good: Clear boundary
const Group = styled.div`
  background: ${({ theme }) => theme.colors.background.secondary};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: ${({ theme }) => theme.spacing.lg};
  // Clear region boundary
`;
```

## Summary

**Key principles:**
1. **Proximity**: Close = related (use xs/sm for related, lg/xl for separate)
2. **Similarity**: Same appearance = same category (color, shape, size, typography)
3. **Continuation**: Aligned elements create visual paths (lines, curves, grids)
4. **Closure**: Brain completes incomplete shapes (use partial borders, dashed lines)
5. **Figure-ground**: Contrast creates depth (cards on backgrounds, modals with overlays)
6. **Common region**: Boundaries group elements (borders, backgrounds, shadows)
7. **Symmetry**: Order creates harmony (even grids, centered layouts, radial patterns)

**Quick reference:**
- Related items: 0.4-0.8rem gap (xs-sm)
- Separate groups: 2.4-3.2rem gap (lg-xl)
- Same function: Same color, shape, size
- Create path: Align elements horizontally or vertically
- Define region: Border, background, or shadow
- Add depth: Light background with white cards + subtle shadows
- Show order: Even spacing, symmetrical layout

**Gestalt in practice:**
Use multiple principles together for strongest effect. A well-designed card uses proximity (tight internal spacing), common region (border/background), figure-ground (shadow), and similarity (consistent typography) simultaneously.
