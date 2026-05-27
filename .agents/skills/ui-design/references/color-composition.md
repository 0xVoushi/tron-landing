# Color Composition in UI Design

Color composition goes beyond choosing a palette—it's about using color to create hierarchy, relationships, emphasis, and depth. This reference covers color roles, visual weight, contrast, emphasis techniques, and accessibility for admin interfaces.

## Color's Role in Visual Design

**Color serves multiple purposes beyond aesthetics:**
- **Hierarchy**: Size isn't enough—color reinforces importance
- **Categorization**: Group related elements, distinguish types
- **Emphasis**: Draw attention to critical elements
- **Feedback**: Communicate state (success, error, warning)
- **Depth**: Create figure-ground separation
- **Emotion**: Set tone (serious, playful, urgent)

**This reference focuses on visual composition**, not brand color selection (see brand-guidelines for palette).

## Color and Visual Weight

Color directly affects perceived visual weight.

### Dark vs Light

**Darker colors = heavier visual weight**

```typescript
const WeightedLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: ${({ theme }) => theme.spacing.xl};

  .sidebar {
    // Small area, but heavy visual weight
    background: ${({ theme }) => theme.colors.background.inverse}; // Very dark
    color: white;
    padding: ${({ theme }) => theme.spacing.lg};
    // Feels substantial despite small size
  }

  .content {
    // Large area, but lighter visual weight
    background: ${({ theme }) => theme.colors.background.primary}; // White
    color: ${({ theme }) => theme.colors.text.primary};
    padding: ${({ theme }) => theme.spacing.xl};
    // Balances dark sidebar
  }
`;
```

**Effect**: 1:3 ratio layout feels balanced because dark sidebar has more visual weight.

### Saturated vs Desaturated

**Saturated colors = heavier visual weight**

```typescript
const ButtonRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const PrimaryButton = styled.button`
  background: ${({ theme }) => theme.colors.primary}; // Saturated blue (#2563EB)
  color: white;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-weight: 600;
  // High saturation = heavy weight = draws attention
`;

const SecondaryButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.text.secondary}; // Desaturated gray (#737373)
  border: 1px solid ${({ theme }) => theme.colors.border.default}; // #E5E5E5
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-weight: 600;
  // Low saturation = light weight = recedes
`;
```

### Warm vs Cool

**Warm colors (red, orange, yellow) = heavier**
**Cool colors (blue, green, purple) = lighter**

```typescript
const AlertTypes = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const ErrorAlert = styled.div`
  background: ${({ theme }) => theme.colors.error}; // Warm red = heavy
  color: white;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  // Advances toward viewer, demands attention
`;

const InfoAlert = styled.div`
  background: ${({ theme }) => theme.colors.info}; // Cool blue = lighter
  color: white;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  // Recedes slightly, calmer
`;
```

## Color Hierarchy

Use color to reinforce size-based hierarchy.

### Text Hierarchy with Color

```typescript
const TextHierarchy = styled.div`
  .heading {
    font-size: ${({ theme }) => theme.typography.sizes.xxxl}; // 4.8rem (size hierarchy)
    color: ${({ theme }) => theme.colors.text.primary}; // #1A1A1A (darkest = color hierarchy)
    font-weight: 700;
    // Size + color create strongest emphasis
  }

  .subheading {
    font-size: ${({ theme }) => theme.typography.sizes.xl}; // 2.4rem (smaller)
    color: ${({ theme }) => theme.colors.text.primary}; // #1A1A1A (still dark, but smaller)
    font-weight: 600;
    // Size difference is primary hierarchy, color reinforces
  }

  .body {
    font-size: ${({ theme }) => theme.typography.sizes.md}; // 1.6rem (smaller still)
    color: ${({ theme }) => theme.colors.text.primary}; // #1A1A1A (body text)
    font-weight: 400;
    // Standard reading color
  }

  .caption {
    font-size: ${({ theme }) => theme.typography.sizes.sm}; // 1.4rem (small)
    color: ${({ theme }) => theme.colors.text.secondary}; // #737373 (lighter = less important)
    font-weight: 400;
    // Size + lighter color = tertiary importance
  }

  .metadata {
    font-size: ${({ theme }) => theme.typography.sizes.xs}; // 1.2rem (smallest)
    color: ${({ theme }) => theme.colors.text.tertiary}; // #A3A3A3 (lightest = least important)
    font-weight: 400;
    // Size + lightest color = lowest hierarchy
  }
`;
```

**Pattern**: Larger + darker = more important, smaller + lighter = less important.

### Action Hierarchy with Color

```typescript
const ActionRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  justify-content: flex-end;
`;

const PrimaryAction = styled.button`
  // Highest priority: Saturated color
  background: ${({ theme }) => theme.colors.primary}; // #2563EB (saturated)
  color: white;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-weight: 600;
  // Clear visual priority
`;

const SecondaryAction = styled.button`
  // Medium priority: Border only
  background: transparent;
  color: ${({ theme }) => theme.colors.primary}; // #2563EB
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-weight: 600;
  // Less visual weight than primary
`;

const TertiaryAction = styled.button`
  // Lowest priority: Text only
  background: transparent;
  color: ${({ theme }) => theme.colors.text.secondary}; // #737373 (desaturated)
  border: none;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  font-weight: 400; // Regular weight
  // Lightest visual weight
`;
```

### Status Hierarchy with Color

```typescript
const StatusBadge = styled.span<{ $status: 'critical' | 'warning' | 'info' | 'success' }>`
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: 600;

  ${({ theme, $status }) => {
    switch ($status) {
      case 'critical':
        return `
          background: ${theme.colors.error}; // #DC2626 - warm, saturated = highest urgency
          color: white;
        `;
      case 'warning':
        return `
          background: ${theme.colors.warning}; // #F59E0B - warm, medium saturation
          color: ${theme.colors.text.primary};
        `;
      case 'info':
        return `
          background: ${theme.colors.info}; // #3B82F6 - cool, medium saturation
          color: white;
        `;
      case 'success':
        return `
          background: ${theme.colors.success}; // #10B981 - cool, medium saturation
          color: white;
        `;
    }
  }}
`;
```

**Hierarchy through color temperature and saturation:**
1. Critical (red): Warmest, most saturated = highest urgency
2. Warning (yellow): Warm, saturated = medium-high urgency
3. Info (blue): Cool, saturated = medium urgency
4. Success (green): Cool, saturated = low urgency (positive)

## Color Contrast for Emphasis

Contrast creates focal points.

### High Contrast = Emphasis

```typescript
const HighContrastCard = styled.div`
  background: ${({ theme }) => theme.colors.background.primary}; // #FFFFFF

  .emphasized-metric {
    // Very high contrast against white
    background: ${({ theme }) => theme.colors.primary}; // #2563EB (bright blue)
    color: white;
    padding: ${({ theme }) => theme.spacing.lg};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    text-align: center;

    .value {
      font-size: ${({ theme }) => theme.typography.sizes.xxxl};
      font-weight: 700;
      // Impossible to miss
    }
  }

  .secondary-info {
    // Low contrast
    color: ${({ theme }) => theme.colors.text.secondary}; // #737373 (gray on white)
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    margin-top: ${({ theme }) => theme.spacing.md};
    // Easy to ignore
  }
`;
```

### Contrast Ratios

**WCAG 2.1 Requirements:**
- Normal text (< 18px): 4.5:1 minimum (AA), 7:1 enhanced (AAA)
- Large text (≥ 18px or ≥ 14px bold): 3:1 minimum (AA), 4.5:1 enhanced (AAA)
- UI components and graphics: 3:1 minimum

```typescript
// Studio colors with contrast ratios (on white background):

const ContrastExamples = styled.div`
  background: white;

  .highest-contrast {
    color: #000000; // 21:1 - Maximum contrast
  }

  .primary-text {
    color: ${({ theme }) => theme.colors.text.primary}; // #1A1A1A (17.3:1) - High contrast
  }

  .secondary-text {
    color: ${({ theme }) => theme.colors.text.secondary}; // #737373 (4.6:1) - Meets AA
  }

  .tertiary-text {
    color: ${({ theme }) => theme.colors.text.tertiary}; // #A3A3A3 (3.1:1) - Meets AA large text
    font-size: ${({ theme }) => theme.typography.sizes.lg}; // Must be large
  }

  .border {
    border-color: ${({ theme }) => theme.colors.border.default}; // #E5E5E5 (1.2:1) - UI element, not text
  }
`;
```

**Use lower contrast for:**
- Disabled states
- Placeholder text
- Tertiary information
- Subtle borders

**Use higher contrast for:**
- Primary content
- Important actions
- Error messages
- Critical information

## Color Relationships

### Complementary Colors (Opposite on Color Wheel)

High contrast, vibrant when together:

```typescript
const ComplementaryAlert = styled.div`
  // Blue and orange are complementary
  background: ${({ theme }) => theme.colors.primary}; // #2563EB (blue)
  color: white;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};

  .cta-button {
    background: #F59E0B; // Orange (complementary to blue)
    color: white;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    // High contrast = demands attention
  }
`;
```

**Use for**: Call-to-action buttons, emphasis, warnings.
**Caution**: Can be jarring if overused.

### Analogous Colors (Adjacent on Color Wheel)

Harmonious, comfortable:

```typescript
const AnalogousDashboard = styled.div`
  // Blues and teals (analogous)
  background: #EFF6FF; // Very light blue

  .primary-card {
    background: #DBEAFE; // Light blue
    border: 1px solid #93C5FD; // Medium blue
  }

  .secondary-card {
    background: #D1FAE5; // Light teal
    border: 1px solid #6EE7B7; // Medium teal
  }

  // Colors feel related and harmonious
`;
```

**Use for**: Sections, categories, themed areas.

### Monochromatic (Single Hue, Different Shades)

Most harmonious, easiest on eyes:

```typescript
const MonochromaticCard = styled.div`
  // All blues, different lightness
  background: #EFF6FF; // Lightest blue (background)
  border: 1px solid #BFDBFE; // Light blue (border)
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};

  .header {
    background: #DBEAFE; // Light blue (section background)
    padding: ${({ theme }) => theme.spacing.md};
    margin: -${({ theme }) => theme.spacing.lg};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    border-radius: ${({ theme }) => theme.borderRadius.md} ${({ theme }) => theme.borderRadius.md} 0 0;
  }

  .title {
    color: #1E40AF; // Dark blue (text)
    font-size: ${({ theme }) => theme.typography.sizes.lg};
    font-weight: 600;
  }

  .value {
    color: #2563EB; // Medium blue (primary content)
    font-size: ${({ theme }) => theme.typography.sizes.xxxl};
    font-weight: 700;
  }

  .metadata {
    color: #60A5FA; // Medium-light blue (secondary content)
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }
`;
```

**Use for**: Harmonious sections, status-specific areas (error section = all reds).

## Color for Depth and Layering

Use color to create figure-ground separation.

### Layered Backgrounds

```typescript
const LayeredInterface = styled.div`
  // Layer 0: Page background (darkest or most saturated base)
  background: ${({ theme }) => theme.colors.background.default}; // #F5F5F5 (light gray)
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.xl};

  // Layer 1: Primary cards (lightest or least saturated)
  .card {
    background: ${({ theme }) => theme.colors.background.primary}; // #FFFFFF (white)
    border: 1px solid ${({ theme }) => theme.colors.border.default};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    padding: ${({ theme }) => theme.spacing.lg};
    box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.1);
    // Lifts off page background
  }

  // Layer 2: Nested sections (slightly darker than cards)
  .card-section {
    background: ${({ theme }) => theme.colors.background.secondary}; // #FAFAFA (off-white)
    padding: ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    margin-top: ${({ theme }) => theme.spacing.md};
    // Nested depth within card
  }

  // Layer 3: Modal overlay (darkens everything below)
  .modal-overlay {
    background: rgba(0, 0, 0, 0.5); // Dark transparent
    // Pushes content back
  }

  // Layer 4: Modal (brightest, most elevated)
  .modal {
    background: ${({ theme }) => theme.colors.background.primary}; // #FFFFFF
    box-shadow:
      0 0.4rem 0.8rem rgba(0, 0, 0, 0.1),
      0 1.6rem 3.2rem rgba(0, 0, 0, 0.2);
    // Highest elevation
  }
`;
```

**Depth hierarchy:**
1. Page background: Base layer
2. Cards: Elevated (lighter or brighter)
3. Nested sections: Slightly recessed (slightly darker)
4. Overlays: Darkens layers below
5. Modals: Highest elevation (brightest + strongest shadow)

### Dark Mode Depth

In dark mode, depth inversion occurs:

```typescript
const DarkModeInterface = styled.div`
  // In dark mode, lighter = more elevated (opposite of light mode)

  // Layer 0: Page background (darkest)
  background: ${({ theme }) =>
    theme.mode === 'dark'
      ? '#0A0A0A' // Very dark
      : '#F5F5F5'}; // Light gray

  .card {
    // Layer 1: Cards (lighter than background)
    background: ${({ theme }) =>
      theme.mode === 'dark'
        ? '#1A1A1A' // Dark, but lighter than page
        : '#FFFFFF'}; // White
    box-shadow: ${({ theme }) =>
      theme.mode === 'dark'
        ? '0 0.1rem 0.3rem rgba(0, 0, 0, 0.5)' // Stronger shadow in dark
        : '0 0.1rem 0.3rem rgba(0, 0, 0, 0.1)'}; // Subtle shadow in light
  }

  .card-section {
    // Layer 2: Nested (even lighter in dark mode)
    background: ${({ theme }) =>
      theme.mode === 'dark'
        ? '#2A2A2A' // Lighter than card
        : '#FAFAFA'}; // Slightly gray
  }
`;
```

## Color for Categorization

Use color to group and distinguish categories.

### Color-Coded Sections

```typescript
const ColorCodedSections = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};

  .analytics-section {
    border-left: 4px solid #3B82F6; // Blue = analytics
    background: #EFF6FF;
    padding: ${({ theme }) => theme.spacing.lg};
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }

  .users-section {
    border-left: 4px solid #10B981; // Green = users
    background: #ECFDF5;
    padding: ${({ theme }) => theme.spacing.lg};
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }

  .settings-section {
    border-left: 4px solid #F59E0B; // Orange = settings
    background: #FEF3C7;
    padding: ${({ theme }) => theme.spacing.lg};
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }
`;
```

### Color-Coded Data

```typescript
const ColorCodedTable = styled.table`
  width: 100%;

  .priority-critical {
    border-left: 3px solid ${({ theme }) => theme.colors.error}; // Red
    background: ${({ theme }) => theme.colors.errorBackground}; // Light red
  }

  .priority-high {
    border-left: 3px solid ${({ theme }) => theme.colors.warning}; // Orange
    background: ${({ theme }) => theme.colors.warningBackground}; // Light orange
  }

  .priority-medium {
    border-left: 3px solid ${({ theme }) => theme.colors.info}; // Blue
    background: ${({ theme }) => theme.colors.infoBackground}; // Light blue
  }

  .priority-low {
    border-left: 3px solid ${({ theme }) => theme.colors.success}; // Green
    background: ${({ theme }) => theme.colors.successBackground}; // Light green
  }
`;
```

**Pattern**: Use consistent color mapping:
- Red: Error, critical, danger, stop
- Orange/Yellow: Warning, attention, caution
- Blue: Info, primary, neutral
- Green: Success, safe, go
- Purple: Special, premium, feature

## Color Accessibility

### Color-Blind Considerations

**8% of men, 0.5% of women** have color vision deficiency.

**Common types:**
- **Protanopia**: Red-blind (1% of men)
- **Deuteranopia**: Green-blind (1% of men)
- **Tritanopia**: Blue-blind (rare)
- **Achromatopsia**: Totally color-blind (very rare)

**Design strategies:**

```typescript
// ❌ Bad: Color only
const StatusBadOnly = styled.span<{ $status: 'success' | 'error' }>`
  color: ${({ $status }) => ($status === 'success' ? 'green' : 'red')};
  // Color-blind users can't distinguish
`;

// ✅ Good: Color + icon
const StatusBadgeAccessible = styled.span<{ $status: 'success' | 'error' }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ $status, theme }) =>
    $status === 'success' ? theme.colors.success : theme.colors.error};

  &::before {
    content: ${({ $status }) => ($status === 'success' ? '"✓"' : '"✕"')};
    // Icon provides redundant information
  }
`;

// ✅ Good: Color + shape
const StatusIndicatorAccessible = styled.div<{ $status: 'success' | 'error' }>`
  width: 1.2rem;
  height: 1.2rem;
  background: ${({ $status, theme }) =>
    $status === 'success' ? theme.colors.success : theme.colors.error};

  // Different shapes for different states
  border-radius: ${({ $status }) => ($status === 'success' ? '50%' : '0')};
  // Circle = success, square = error
`;

// ✅ Good: Color + pattern
const ChartBarAccessible = styled.div<{ $category: 'A' | 'B' | 'C' }>`
  height: 100%;
  background: ${({ $category }) => {
    switch ($category) {
      case 'A': return '#3B82F6'; // Blue
      case 'B': return '#10B981'; // Green
      case 'C': return '#F59E0B'; // Orange
    }
  }};

  // Different patterns for different categories
  background-image: ${({ $category }) => {
    switch ($category) {
      case 'A': return 'none'; // Solid
      case 'B': return 'repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(255,255,255,.3) 5px, rgba(255,255,255,.3) 10px)'; // Stripes
      case 'C': return 'radial-gradient(circle, rgba(255,255,255,.3) 20%, transparent 20%, transparent 40%, rgba(255,255,255,.3) 40%)'; // Dots
    }
  }};
`;
```

**Key rule**: Never use color alone to convey information.

### Contrast Testing

Tools for checking contrast:
- Chrome DevTools (Lighthouse audit)
- WebAIM Contrast Checker
- Stark plugin (Figma/Chrome)
- Who Can Use (whocanuse.com)

```typescript
// Use CSS variables for easy contrast testing
const Button = styled.button`
  --button-bg: ${({ theme }) => theme.colors.primary};
  --button-text: white;

  background: var(--button-bg);
  color: var(--button-text);

  // Easy to test in DevTools: change --button-bg, check contrast
`;
```

## Common Color Mistakes

### Mistake 1: Too Many Colors

**Problem:** Rainbow interface, no hierarchy
```typescript
// ❌ Bad: Every element different color
.header { background: blue; }
.sidebar { background: green; }
.content { background: yellow; }
.footer { background: purple; }
// Chaotic, no visual hierarchy
```

**Solution:** Limited, intentional palette
```typescript
// ✅ Good: Restrained palette
const Layout = styled.div`
  .header { background: ${({ theme }) => theme.colors.background.primary}; }
  .sidebar { background: ${({ theme }) => theme.colors.background.secondary}; }
  .content { background: ${({ theme }) => theme.colors.background.primary}; }
  .footer { background: ${({ theme }) => theme.colors.background.secondary}; }
  // Subtle, professional
`;
```

### Mistake 2: Low Contrast Text

**Problem:** Unreadable text
```typescript
// ❌ Bad: Insufficient contrast
.text { color: #CCCCCC; } // on white background = 1.6:1 (fails WCAG)
```

**Solution:** Sufficient contrast
```typescript
// ✅ Good: Meets WCAG AA
const Text = styled.p`
  color: ${({ theme }) => theme.colors.text.primary}; // #1A1A1A = 17.3:1
`;
```

### Mistake 3: Color as Only Indicator

**Problem:** Inaccessible to color-blind users
```typescript
// ❌ Bad: Red/green without other cues
.success { color: green; }
.error { color: red; }
```

**Solution:** Color + icon/text
```typescript
// ✅ Good: Multiple indicators
const Status = styled.span<{ $type: 'success' | 'error' }>`
  color: ${({ $type, theme }) =>
    $type === 'success' ? theme.colors.success : theme.colors.error};

  &::before {
    content: ${({ $type }) => ($type === 'success' ? '"Success: "' : '"Error: "')};
    // Text redundant with color
  }
`;
```

### Mistake 4: Ignoring Dark Mode

**Problem:** Assumes light mode only
```typescript
// ❌ Bad: Hard-coded light mode colors
.card {
  background: white;
  color: black;
  border: 1px solid #e0e0e0;
  // Breaks in dark mode
}
```

**Solution:** Theme-aware colors
```typescript
// ✅ Good: Works in both modes
const Card = styled.div`
  background: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  // Adapts to theme
`;
```

## Summary

**Key principles:**
1. **Visual weight**: Darker + saturated = heavier, lighter + desaturated = lighter
2. **Hierarchy**: Reinforce size hierarchy with color (important = darker, less important = lighter)
3. **Contrast**: High contrast = emphasis, low contrast = de-emphasis
4. **Relationships**: Complementary (high contrast), analogous (harmonious), monochromatic (most harmonious)
5. **Depth**: Lighter = elevated (light mode), lighter = elevated (dark mode too, but darker base)
6. **Categorization**: Consistent color mapping (red = error, green = success, etc.)
7. **Accessibility**: Color + icon/text/shape, minimum 4.5:1 contrast (normal text)
8. **Restraint**: Limited palette, intentional use

**Quick reference:**
- Text hierarchy: Primary #1A1A1A, secondary #737373, tertiary #A3A3A3
- Button hierarchy: Primary (saturated), secondary (border), tertiary (text only)
- Status: Red (error), orange (warning), blue (info), green (success)
- Contrast minimums: 4.5:1 (normal text), 3:1 (large text/UI)
- Never use color alone to convey information
- Test in dark mode and with color-blindness simulators
