# Visual Composition Principles

Visual composition is the arrangement of elements to create balance, flow, emphasis, and unity. This reference covers alignment, balance, visual flow, emphasis techniques, and composition patterns for admin interfaces.

## Why Composition Matters

**Good composition solves fundamental usability problems:**
- **Clarity**: Users quickly understand interface structure
- **Flow**: Natural eye movement guides users through content
- **Emphasis**: Important elements stand out appropriately
- **Balance**: Professional, polished appearance
- **Unity**: Cohesive visual language across interface

**Without composition**: Chaotic layouts, unclear hierarchy, poor usability, unprofessional appearance.

## Alignment Principles

Alignment creates order, relationships, and visual structure.

### Types of Alignment

**Left alignment:**
- Most natural for left-to-right languages
- Creates strong vertical edge
- Best for text-heavy content
- Creates easy scanning path

```typescript
const LeftAlignedCard = styled.div`
  text-align: left; // Default alignment
  padding: ${({ theme }) => theme.spacing.lg};

  h2 {
    text-align: left; // Explicit left alignment
  }

  p {
    text-align: left;
  }

  // Buttons also left-aligned for consistency
  .actions {
    display: flex;
    justify-content: flex-start;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;
```

**Center alignment:**
- Formal, balanced appearance
- Good for hero sections, modals
- Use sparingly — harder to scan
- Works for short text only

```typescript
const CenteredModal = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};

  h2 {
    text-align: center;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  .actions {
    display: flex;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.sm};
    margin-top: ${({ theme }) => theme.spacing.xl};
  }
`;
```

**Right alignment:**
- Uncommon in Western interfaces
- Useful for numerical data (decimal alignment)
- Good for opposite-side elements (close buttons)

```typescript
const TableCell = styled.td<{ $align?: 'left' | 'center' | 'right' }>`
  text-align: ${({ $align = 'left' }) => $align};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};

  // Numbers right-aligned for easy comparison
  &.numeric {
    text-align: right;
    font-variant-numeric: tabular-nums; // Fixed-width numbers
  }
`;
```

**Justified alignment:**
- Rarely used in UI
- Can create awkward spacing
- Acceptable for long-form content only

### Edge Alignment

Create invisible lines by aligning elements:

```typescript
const AlignedLayout = styled.div`
  display: grid;
  grid-template-columns: 20rem 1fr;
  gap: ${({ theme }) => theme.spacing.xl};

  // Labels align on right edge
  .label {
    text-align: right;
    padding-right: ${({ theme }) => theme.spacing.md};
  }

  // Inputs align on left edge
  .input {
    // Starts at same vertical line as all inputs
  }
`;
```

**Benefits:**
- Creates strong visual structure
- Easy to scan
- Professional appearance
- Reduces cognitive load

### Grid-Based Alignment

Use CSS Grid to enforce alignment:

```typescript
const GridAlignedForm = styled.form`
  display: grid;
  grid-template-columns: 15rem 1fr; // Label column, input column
  gap: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
  align-items: center; // Vertical alignment

  label {
    // All labels auto-align to right edge of column
    justify-self: end;
  }

  input {
    // All inputs auto-align to left edge of column
    justify-self: start;
    width: 100%;
  }
`;
```

## Balance Principles

Balance creates stability and visual harmony.

### Symmetrical Balance

Equal weight on both sides of central axis:

```typescript
const SymmetricalModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // Center everything

  .header {
    text-align: center;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  .content {
    text-align: center;
    max-width: 50rem;
  }

  .actions {
    display: flex;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.sm};
    margin-top: ${({ theme }) => theme.spacing.xl};
  }
`;
```

**Use for:**
- Modals and dialogs
- Confirmation screens
- Hero sections
- Empty states

**Characteristics:**
- Formal, stable appearance
- Easy to achieve
- Can feel static or boring
- Works well for focused content

### Asymmetrical Balance

Unequal elements balanced through visual weight:

```typescript
const AsymmetricalLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr; // 66.67% : 33.33% (golden ratio-ish)
  gap: ${({ theme }) => theme.spacing.xl};

  .main-content {
    // Larger area, lighter visual weight
    padding: ${({ theme }) => theme.spacing.xl};
  }

  .sidebar {
    // Smaller area, heavier visual weight (darker background, bold text)
    padding: ${({ theme }) => theme.spacing.lg};
    background: ${({ theme }) => theme.colors.background.secondary};
    border-left: 3px solid ${({ theme }) => theme.colors.primary};
  }
`;
```

**Use for:**
- Dashboard layouts
- Content + sidebar
- Two-column layouts
- Complex admin interfaces

**Characteristics:**
- Dynamic, interesting appearance
- More flexible
- Requires careful visual weight balancing
- Works well for information-rich interfaces

### Visual Weight Factors

Elements that increase visual weight:
- **Size**: Larger = heavier
- **Color**: Darker = heavier, saturated = heavier
- **Density**: More elements = heavier
- **Contrast**: Higher contrast = heavier
- **Position**: Center/top = heavier perception
- **Texture**: Detailed = heavier

```typescript
const BalancedCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr; // Asymmetrical layout

  .icon-section {
    // Small area, but heavy visual weight
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.primary}; // Dark, saturated color
    font-size: ${({ theme }) => theme.typography.sizes.xxxl}; // Large icon
  }

  .content-section {
    // Large area, but lighter visual weight
    padding: ${({ theme }) => theme.spacing.lg};
    background: ${({ theme }) => theme.colors.background.primary}; // Light background
    font-size: ${({ theme }) => theme.typography.sizes.md}; // Regular text
    color: ${({ theme }) => theme.colors.text.secondary}; // Lighter text
  }
`;
```

## Visual Flow

Visual flow guides users through interface content.

### F-Pattern (Reading Pattern)

Users scan in F-shaped pattern for text-heavy content:

```typescript
const FPatternLayout = styled.div`
  display: flex;
  flex-direction: column;

  .header {
    // Horizontal bar (top of F)
    display: flex;
    justify-content: space-between;
    padding: ${({ theme }) => theme.spacing.lg};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border.default};
  }

  .content {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
    padding: ${({ theme }) => theme.spacing.xl};

    .sidebar {
      // Vertical bar (left side of F)
      width: 20rem;
    }

    .main {
      // Content area (right side)
      // Users scan top heavily, then less as they go down
    }
  }
`;
```

**Optimize for F-pattern:**
- Place important info top-left
- Use headings to break content
- Left-align text for easy scanning
- Reduce content density as you go down

### Z-Pattern (Action Pattern)

Users follow Z-shaped path for action-oriented interfaces:

```typescript
const ZPatternHero = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "logo nav"        /* Top-left to top-right */
    "headline image"  /* Top-left to middle-right */
    "cta cta";        /* Bottom center */
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.xxl};

  .logo {
    grid-area: logo;
    // Start of Z (top-left)
  }

  .nav {
    grid-area: nav;
    justify-self: end;
    // Top-right corner
  }

  .headline {
    grid-area: headline;
    // Left side, diagonal down
  }

  .image {
    grid-area: image;
    // Right side
  }

  .cta {
    grid-area: cta;
    justify-self: center;
    // End of Z (bottom center)
  }
`;
```

**Optimize for Z-pattern:**
- Place brand/logo top-left
- Navigation/actions top-right
- Value proposition left side
- Visual interest right side
- CTA at bottom

### Gutenberg Diagram

Divides layout into 4 quadrants based on reading gravity:

```
Primary Optical Area     Strong Fallow Area
(Top-left)               (Top-right)
   ↓                          ↓
Weak Fallow Area         Terminal Area
(Bottom-left)            (Bottom-right)
```

```typescript
const GutenbergLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  height: 100vh;

  .primary {
    // Top-left: Most viewed
    // Place: Main heading, key information
    grid-column: 1;
    grid-row: 1;
  }

  .strong-fallow {
    // Top-right: Often skipped unless directed
    // Place: Supporting visuals, secondary info
    grid-column: 2;
    grid-row: 1;
  }

  .weak-fallow {
    // Bottom-left: Least viewed
    // Place: Less important content
    grid-column: 1;
    grid-row: 2;
  }

  .terminal {
    // Bottom-right: End point, good for CTAs
    // Place: Call-to-action, next steps
    grid-column: 2;
    grid-row: 2;
  }
`;
```

### Directional Cues

Guide eye movement with visual cues:

```typescript
const DirectionalCard = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background.primary};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};

  .icon {
    // Arrow or directional icon points to content
    font-size: ${({ theme }) => theme.typography.sizes.xl};
    color: ${({ theme }) => theme.colors.primary};
  }

  .content {
    flex: 1;
  }

  .action {
    // Button or arrow at end continues flow
    font-size: ${({ theme }) => theme.typography.sizes.lg};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
```

**Directional cue types:**
- **Arrows**: Explicit direction
- **Lines**: Connect related elements
- **Gaze direction**: Photos of people looking toward content
- **Whitespace**: Empty space directs attention
- **Color**: Bright colors draw the eye
- **Animation**: Movement attracts attention

## Emphasis Techniques

Emphasis directs attention to important elements.

### Size Emphasis

Larger elements demand attention:

```typescript
const EmphasizedCard = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};

  .title {
    font-size: ${({ theme }) => theme.typography.sizes.xxxl}; // Very large (4.8rem)
    font-weight: 700;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    // Dominates the card visually
  }

  .subtitle {
    font-size: ${({ theme }) => theme.typography.sizes.md}; // Much smaller (1.6rem)
    color: ${({ theme }) => theme.colors.text.secondary};
    // Supports, doesn't compete
  }
`;
```

### Color Emphasis

Color draws attention:

```typescript
const ColorEmphasisCard = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background.primary};

  .primary-action {
    background: ${({ theme }) => theme.colors.primary}; // Saturated color
    color: white;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    font-weight: 600;
    // Stands out dramatically
  }

  .secondary-action {
    background: transparent;
    color: ${({ theme }) => theme.colors.text.secondary}; // Muted
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
    border: 1px solid ${({ theme }) => theme.colors.border.default};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    // Recedes visually
  }
`;
```

### Isolation Emphasis

Surround element with whitespace:

```typescript
const IsolatedCTA = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.xl};

  .cta-button {
    // Isolated by generous whitespace
    margin: ${({ theme }) => theme.spacing.xxl} 0; // Huge vertical margins
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xxl};
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    font-size: ${({ theme }) => theme.typography.sizes.lg};
    font-weight: 600;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    // Whitespace makes it impossible to miss
  }
`;
```

### Contrast Emphasis

High contrast draws attention:

```typescript
const ContrastCard = styled.div`
  background: ${({ theme }) => theme.colors.background.primary}; // Light background

  .alert {
    background: ${({ theme }) => theme.colors.error}; // Bright red
    color: white; // High contrast
    padding: ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    font-weight: 600;
    // Impossible to miss
  }

  .info {
    background: ${({ theme }) => theme.colors.background.secondary}; // Subtle
    color: ${({ theme }) => theme.colors.text.secondary}; // Low contrast
    padding: ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    // Easily ignored
  }
`;
```

### Layering Emphasis

Use z-axis depth:

```typescript
const LayeredModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000; // Above everything

  background: ${({ theme }) => theme.colors.background.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};

  box-shadow:
    0 0.4rem 0.8rem rgba(0, 0, 0, 0.1),
    0 1.6rem 3.2rem rgba(0, 0, 0, 0.15); // Dramatic shadow = elevated
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); // Darkens background
  z-index: 999; // Below modal, above content
`;
```

## Unity and Consistency

Unity creates cohesive visual language.

### Repetition

Repeat visual elements for consistency:

```typescript
const UnifiedCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Card = styled.div`
  // Repeated properties create unity
  background: ${({ theme }) => theme.colors.background.primary};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md}; // Same radius
  padding: ${({ theme }) => theme.spacing.lg}; // Same padding

  .title {
    font-size: ${({ theme }) => theme.typography.sizes.lg}; // Same size
    font-weight: 600; // Same weight
    margin-bottom: ${({ theme }) => theme.spacing.sm}; // Same spacing
    color: ${({ theme }) => theme.colors.text.primary}; // Same color
  }

  .content {
    font-size: ${({ theme }) => theme.typography.sizes.md};
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;
```

### Proximity

Group related elements:

```typescript
const ProximityForm = styled.form`
  .field-group {
    // Related fields grouped together
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xs}; // Tight spacing within group

    margin-bottom: ${({ theme }) => theme.spacing.xl}; // Large spacing between groups
  }

  .label {
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.spacing.xs}; // Very close to input
  }

  .input {
    // Visually connected to label above
  }

  .help-text {
    font-size: ${({ theme }) => theme.typography.sizes.xs};
    color: ${({ theme }) => theme.colors.text.tertiary};
    margin-top: ${({ theme }) => theme.spacing.xs}; // Very close to input
  }
`;
```

### Consistency

Use consistent patterns:

```typescript
// Define button variants ONCE
const ButtonBase = styled.button`
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: 600;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
`;

const PrimaryButton = styled(ButtonBase)`
  background: ${({ theme }) => theme.colors.primary};
  color: white;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;

const SecondaryButton = styled(ButtonBase)`
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.border.default};

  &:hover {
    background: ${({ theme }) => theme.colors.background.secondary};
  }
`;

// Use everywhere for consistency
```

## Composition Patterns for Admin Interfaces

### Dashboard Card Composition

```typescript
const DashboardCard = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background.primary};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.lg};

  // Composition: Header, content, actions
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.spacing.md};

    .title {
      font-size: ${({ theme }) => theme.typography.sizes.lg};
      font-weight: 600;
    }

    .actions {
      display: flex;
      gap: ${({ theme }) => theme.spacing.xs};
    }
  }

  .content {
    flex: 1; // Grows to fill space
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: ${({ theme }) => theme.spacing.md};
    border-top: 1px solid ${({ theme }) => theme.colors.border.light};
  }
`;
```

### Data Table Composition

```typescript
const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};

  // Composition: Toolbar, table, pagination
  .toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${({ theme }) => theme.spacing.md};
    background: ${({ theme }) => theme.colors.background.secondary};
    border-radius: ${({ theme }) => theme.borderRadius.sm};

    .left {
      display: flex;
      gap: ${({ theme }) => theme.spacing.sm};
      align-items: center;
    }

    .right {
      display: flex;
      gap: ${({ theme }) => theme.spacing.sm};
      align-items: center;
    }
  }

  .table-wrapper {
    overflow-x: auto;
    border: 1px solid ${({ theme }) => theme.colors.border.default};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }

  .pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${({ theme }) => theme.spacing.md};
  }
`;
```

### Form Composition

```typescript
const FormComposition = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 60rem;

  // Composition: Sections with semantic grouping
  .form-section {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.lg};

    .section-title {
      font-size: ${({ theme }) => theme.typography.sizes.lg};
      font-weight: 600;
      padding-bottom: ${({ theme }) => theme.spacing.sm};
      border-bottom: 2px solid ${({ theme }) => theme.colors.border.default};
      margin-bottom: ${({ theme }) => theme.spacing.sm};
    }

    .field-group {
      display: flex;
      flex-direction: column;
      gap: ${({ theme }) => theme.spacing.xs};
    }
  }

  .form-actions {
    display: flex;
    justify-content: flex-end;
    gap: ${({ theme }) => theme.spacing.sm};
    padding-top: ${({ theme }) => theme.spacing.lg};
    border-top: 1px solid ${({ theme }) => theme.colors.border.light};
  }
`;
```

## Common Composition Mistakes

### Mistake 1: Everything Centered

**Problem:** Hard to scan, feels indecisive
```typescript
// ❌ Bad: Everything centered
.content {
  text-align: center; // Hard to read
}

.buttons {
  justify-content: center; // Unclear hierarchy
}
```

**Solution:** Use left alignment for scanability
```typescript
// ✅ Good: Left-aligned for easy scanning
const Content = styled.div`
  text-align: left; // Natural reading flow

  .buttons {
    display: flex;
    justify-content: flex-start; // Clear hierarchy
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;
```

### Mistake 2: No Visual Flow

**Problem:** Users don't know where to look
```typescript
// ❌ Bad: Random placement
.content {
  display: flex;
  // No clear flow or hierarchy
}
```

**Solution:** Create clear visual path
```typescript
// ✅ Good: Clear F-pattern flow
const Content = styled.div`
  display: flex;
  flex-direction: column;

  .header {
    // Top: First thing seen
  }

  .main {
    // Left side: Main content
    display: grid;
    grid-template-columns: auto 1fr;
  }

  .actions {
    // Bottom-right: Natural endpoint
    display: flex;
    justify-content: flex-end;
  }
`;
```

### Mistake 3: Too Much Emphasis

**Problem:** Nothing stands out when everything does
```typescript
// ❌ Bad: Everything emphasized
.title { font-size: 48px; font-weight: 700; color: red; }
.subtitle { font-size: 36px; font-weight: 700; color: blue; }
.text { font-size: 24px; font-weight: 700; color: green; }
// Everything screaming for attention
```

**Solution:** Single focal point
```typescript
// ✅ Good: Clear hierarchy
const Card = styled.div`
  .title {
    font-size: ${({ theme }) => theme.typography.sizes.xl}; // Emphasized
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  .subtitle {
    font-size: ${({ theme }) => theme.typography.sizes.md}; // Secondary
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  .text {
    font-size: ${({ theme }) => theme.typography.sizes.md}; // Tertiary
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text.tertiary};
  }
`;
```

### Mistake 4: Ignoring Whitespace

**Problem:** Cramped, overwhelming layout
```typescript
// ❌ Bad: No breathing room
.card {
  padding: 4px;
  margin: 4px;
  gap: 4px;
}
```

**Solution:** Generous whitespace
```typescript
// ✅ Good: Comfortable spacing
const Card = styled.div`
  padding: ${({ theme }) => theme.spacing.xl}; // Generous interior
  margin-bottom: ${({ theme }) => theme.spacing.lg}; // Separation from siblings

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md}; // Breathing room between elements
`;
```

### Mistake 5: Inconsistent Composition

**Problem:** Each card looks different
```typescript
// ❌ Bad: Different patterns everywhere
.card1 { padding: 16px; border-radius: 4px; }
.card2 { padding: 24px; border-radius: 8px; }
.card3 { padding: 12px; border-radius: 16px; }
```

**Solution:** Consistent composition pattern
```typescript
// ✅ Good: Shared base component
const BaseCard = styled.div`
  padding: ${({ theme }) => theme.spacing.lg}; // Always same
  border-radius: ${({ theme }) => theme.borderRadius.md}; // Always same
  background: ${({ theme }) => theme.colors.background.primary};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
`;

// Variants extend the base
const MetricCard = styled(BaseCard)`
  // Specific content, same composition
`;
```

## Summary

**Key principles:**
1. Left-align text for scanability (center for special cases only)
2. Balance through visual weight (symmetrical or asymmetrical)
3. Guide eye flow with F-pattern or Z-pattern
4. Emphasize ONE thing (size, color, isolation, contrast, depth)
5. Create unity through repetition and consistency
6. Group related elements with proximity
7. Use whitespace generously
8. Establish consistent composition patterns
9. Match visual order to importance
10. Test with squint test (blur eyes — does hierarchy work?)

**Quick reference:**
- Alignment: Left for text, right for numbers, center for special cases
- Balance: Asymmetrical (2:1 ratio) for admin interfaces
- Flow: F-pattern for content, Z-pattern for actions
- Emphasis: ONE focal point per section
- Unity: Repeat spacing, colors, typography, patterns
