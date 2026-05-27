# Visual Attention & Focus

Visual attention directs users' eyes to the most important elements. This reference covers techniques for controlling where users look, creating focal points, and guiding visual flow in admin interfaces.

## How Visual Attention Works

**Human visual perception is selective:**
- **Pre-attentive processing**: Brain processes visual features (color, motion, contrast) in < 250ms
- **Attentive processing**: Conscious focus on specific elements
- **Selective attention**: Brain filters out most visual information
- **Change blindness**: Fails to notice changes when not directly looking

**Implication**: You control where users look by manipulating pre-attentive features.

## Pre-Attentive Attributes

These features are processed instantly, before conscious attention:

### Color

**Bright, saturated colors draw attention instantly:**

```typescript
const DashboardWithFocus = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};

  .metric-card {
    background: ${({ theme }) => theme.colors.background.primary}; // White - neutral
    padding: ${({ theme }) => theme.spacing.lg};
    border: 1px solid ${({ theme }) => theme.colors.border.default};
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }

  .critical-metric {
    // Color makes this card stand out immediately
    background: ${({ theme }) => theme.colors.error}; // #DC2626 - bright red
    color: white;
    padding: ${({ theme }) => theme.spacing.lg};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    // Pre-attentively processed: User sees red before reading content
  }
`;
```

### Size

**Larger elements attract attention first:**

```typescript
const MetricDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xl};

  .primary-value {
    font-size: ${({ theme }) => theme.typography.sizes.xxxl}; // 4.8rem - massive
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text.primary};
    line-height: 1;
    // Size draws attention immediately
  }

  .secondary-value {
    font-size: ${({ theme }) => theme.typography.sizes.sm}; // 1.4rem - small
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-top: ${({ theme }) => theme.spacing.sm};
    // Recedes, processed later
  }
`;
```

### Motion

**Movement is the strongest attention grabber:**

```typescript
const NotificationBadge = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background: ${({ theme }) => theme.colors.error};
  color: white;
  border-radius: 50%;
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: 600;

  // Pulse animation draws attention
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 ${({ theme }) => theme.colors.error}80;
    }
    70% {
      box-shadow: 0 0 0 1rem ${({ theme }) => theme.colors.error}00;
    }
    100% {
      box-shadow: 0 0 0 0 ${({ theme }) => theme.colors.error}00;
    }
  }
`;
```

**Caution**: Motion is powerful but distracting. Use sparingly.

### Contrast

**High contrast elements stand out:**

```typescript
const ContrastCard = styled.div`
  background: ${({ theme }) => theme.colors.background.default}; // #F5F5F5 - light gray
  padding: ${({ theme }) => theme.spacing.xl};

  .low-contrast-text {
    color: #A3A3A3; // Light gray on light gray - recedes
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }

  .high-contrast-element {
    background: ${({ theme }) => theme.colors.text.primary}; // #1A1A1A - very dark
    color: white;
    padding: ${({ theme }) => theme.spacing.lg};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    // Maximum contrast = immediate attention
  }
`;
```

### Isolation (Whitespace)

**Elements surrounded by space stand out:**

```typescript
const IsolatedCTA = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xxl}; // Huge padding creates isolation

  .cta-button {
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xxl};
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    font-size: ${({ theme }) => theme.typography.sizes.lg};
    font-weight: 600;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.1);

    // Surrounded by empty space = draws attention
    margin: ${({ theme }) => theme.spacing.xxl} 0; // Massive vertical margins
  }

  .supporting-text {
    max-width: 40rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    // Small, low-contrast text recedes
  }
`;
```

### Position

**Top-left gets most attention (F-pattern):**

```typescript
const DashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.xl};

  .hero-metric {
    // Top position = most attention
    grid-row: 1;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    padding: ${({ theme }) => theme.spacing.xxl};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    text-align: center;
    // First thing seen
  }

  .secondary-metrics {
    // Lower position = less immediate attention
    grid-row: 2;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${({ theme }) => theme.spacing.lg};
    // Seen after hero metric
  }
`;
```

## Visual Weight and Attention

Elements with more visual weight attract more attention.

### Factors That Increase Visual Weight

```typescript
const VisualWeightComparison = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};

  .light-element {
    // Low visual weight = less attention
    background: transparent;
    color: ${({ theme }) => theme.colors.text.tertiary}; // Light gray
    font-size: ${({ theme }) => theme.typography.sizes.sm}; // Small
    font-weight: 400; // Regular
    padding: ${({ theme }) => theme.spacing.sm};
    // Recedes into background
  }

  .heavy-element {
    // High visual weight = more attention
    background: ${({ theme }) => theme.colors.primary}; // Saturated color
    color: white;
    font-size: ${({ theme }) => theme.typography.sizes.xl}; // Large
    font-weight: 700; // Bold
    padding: ${({ theme }) => theme.spacing.lg};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.15); // Shadow adds weight
    // Commands attention
  }
`;
```

**Visual weight factors:**
1. Size (larger = heavier)
2. Color (darker/saturated = heavier)
3. Density (more elements = heavier)
4. Texture (detailed = heavier)
5. Position (center/top = heavier)
6. Contrast (higher = heavier)

## Creating Focal Points

A focal point is the primary attention target.

### Single Focal Point

**One dominant element per section:**

```typescript
const FocalCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.background.primary};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};

  .focal-metric {
    // Single focal point: Largest, darkest, centered
    font-size: ${({ theme }) => theme.typography.sizes.xxxl}; // 4.8rem
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary}; // Saturated color
    text-align: center;
    margin: ${({ theme }) => theme.spacing.xl} 0; // Isolated
    // Dominates visual hierarchy
  }

  .supporting-label {
    font-size: ${({ theme }) => theme.typography.sizes.sm}; // Much smaller
    color: ${({ theme }) => theme.colors.text.secondary}; // Muted
    text-align: center;
    // Supports focal point, doesn't compete
  }

  .tertiary-info {
    font-size: ${({ theme }) => theme.typography.sizes.xs}; // Even smaller
    color: ${({ theme }) => theme.colors.text.tertiary}; // Even more muted
    margin-top: ${({ theme }) => theme.spacing.lg};
    // Lowest priority, seen last
  }
`;
```

### Multiple Focal Points (Hierarchy)

**When multiple elements need attention, create clear hierarchy:**

```typescript
const DashboardWithHierarchy = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr; // Asymmetric = primary + secondaries
  gap: ${({ theme }) => theme.spacing.lg};

  .primary-card {
    // Primary focal point (largest, most saturated)
    grid-column: 1;
    grid-row: 1 / 3; // Spans 2 rows
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    padding: ${({ theme }) => theme.spacing.xxl};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    // Seen first
  }

  .secondary-card {
    // Secondary focal points (smaller, less saturated)
    background: ${({ theme }) => theme.colors.background.primary};
    border: 1px solid ${({ theme }) => theme.colors.border.default};
    padding: ${({ theme }) => theme.spacing.lg};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    // Seen after primary
  }
`;
```

**Rule**: One primary focal point + 2-3 secondary focal points maximum per view.

## Directional Cues

Guide attention from one element to another.

### Arrows and Pointers

```typescript
const ArrowCard = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background.primary};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};

  .icon {
    font-size: ${({ theme }) => theme.typography.sizes.xl};
    color: ${({ theme }) => theme.colors.primary};
  }

  .content {
    flex: 1;
  }

  .arrow {
    font-size: ${({ theme }) => theme.typography.sizes.lg};
    color: ${({ theme }) => theme.colors.primary};
    // Arrow directs attention to next element
  }

  // Arrow points to CTA button
  & + .cta-button {
    // User's eye follows arrow to button
  }
`;
```

### Lines and Connections

```typescript
const ConnectedSteps = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: ${({ theme }) => theme.spacing.xl} 0;

  // Line connects steps, guides eye left-to-right
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
    // Directs attention along horizontal path
  }

  .step {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    // Steps positioned on line guide eye
  }
`;
```

### Gaze Direction

**People's eyes follow where other people look:**

```typescript
const TestimonialCard = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.background.primary};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};

  .avatar {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    // If avatar faces right, user's eye follows to content →
  }

  .quote {
    // Content positioned where avatar is "looking"
  }
`;
```

### Gradients and Fades

**Gradients guide eye in gradient direction:**

```typescript
const GradientHero = styled.div`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.primaryDark} 100%
  );
  padding: ${({ theme }) => theme.spacing.xxl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};

  // Gradient flows top-left to bottom-right
  // Eye follows diagonal path

  .title {
    // Positioned at gradient start (top-left)
  }

  .cta {
    align-self: flex-end;
    // Positioned at gradient end (bottom-right)
    // Eye naturally flows from title to CTA
  }
`;
```

## Progressive Disclosure

Control attention by revealing information gradually.

### Collapsed/Expanded States

```typescript
const ExpandableCard = styled.div<{ $expanded: boolean }>`
  background: ${({ theme }) => theme.colors.background.primary};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  transition: all 0.3s ease;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    // Always visible = always draws attention

    .title {
      font-size: ${({ theme }) => theme.typography.sizes.lg};
      font-weight: 600;
    }

    .expand-icon {
      transform: rotate(${({ $expanded }) => ($expanded ? '180deg' : '0deg')});
      transition: transform 0.3s ease;
    }
  }

  .content {
    max-height: ${({ $expanded }) => ($expanded ? '100rem' : '0')};
    opacity: ${({ $expanded }) => ($expanded ? '1' : '0')};
    overflow: hidden;
    transition: max-height 0.3s ease, opacity 0.3s ease;
    // Hidden until needed = doesn't compete for attention
  }
`;
```

### Tooltips and Popovers

```typescript
const TooltipTrigger = styled.button`
  position: relative;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  cursor: help;
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  padding: 0;

  &:hover .tooltip {
    opacity: 1;
    visibility: visible;
    // Information revealed on demand
  }
`;

const Tooltip = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.colors.background.inverse};
  color: white;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease, visibility 0.2s ease;
  z-index: 100;
  // Hidden until needed
`;
```

### Tabs and Navigation

```typescript
const TabbedInterface = styled.div`
  .tab-list {
    display: flex;
    gap: ${({ theme }) => theme.spacing.sm};
    border-bottom: 2px solid ${({ theme }) => theme.colors.border.default};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    // Navigation visible, content hidden
  }

  .tab-button {
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
    background: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;

    &.active {
      color: ${({ theme }) => theme.colors.primary};
      border-bottom-color: ${({ theme }) => theme.colors.primary};
      // Active tab draws attention
    }

    &:hover:not(.active) {
      color: ${({ theme }) => theme.colors.text.primary};
    }
  }

  .tab-panel {
    // Only active panel visible = focused attention
    &:not(.active) {
      display: none;
    }
  }
`;
```

## Attention Patterns for Admin Interfaces

### Dashboard Attention Flow

```typescript
const OptimalDashboard = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.xl};

  // 1. Hero metric (primary focal point)
  .hero-metric {
    grid-column: 1 / -1; // Full width
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    padding: ${({ theme }) => theme.spacing.xxl};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    text-align: center;
    // Seen first, largest visual weight
  }

  // 2. Key metrics (secondary focal points)
  .key-metrics {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${({ theme }) => theme.spacing.lg};
    // Seen second, arranged in scannable row
  }

  // 3. Detailed content (tertiary attention)
  .detailed-content {
    background: ${({ theme }) => theme.colors.background.primary};
    border: 1px solid ${({ theme }) => theme.colors.border.default};
    padding: ${({ theme }) => theme.spacing.lg};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    // Seen third, lower visual weight
  }
`;
```

### Form Attention Flow

```typescript
const OptimalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 60rem;

  .form-section {
    .section-title {
      // Draws attention to section start
      font-size: ${({ theme }) => theme.typography.sizes.lg};
      font-weight: 600;
      color: ${({ theme }) => theme.colors.text.primary};
      margin-bottom: ${({ theme }) => theme.spacing.md};
    }

    .field-group {
      display: flex;
      flex-direction: column;
      gap: ${({ theme }) => theme.spacing.xs};
      margin-bottom: ${({ theme }) => theme.spacing.md};

      label {
        font-weight: 600;
        // Draws attention before input
      }

      input {
        // Attention flows to input
        padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
        font-size: ${({ theme }) => theme.typography.sizes.md};
        border: 2px solid ${({ theme }) => theme.colors.border.default};
        border-radius: ${({ theme }) => theme.borderRadius.sm};
        transition: border-color 0.2s ease;

        &:focus {
          border-color: ${({ theme }) => theme.colors.primary};
          outline: none;
          // Focus state draws attention to active field
        }
      }

      .help-text {
        font-size: ${({ theme }) => theme.typography.sizes.xs};
        color: ${({ theme }) => theme.colors.text.tertiary};
        // Low attention, supportive
      }

      .error-message {
        color: ${({ theme }) => theme.colors.error};
        font-size: ${({ theme }) => theme.typography.sizes.sm};
        font-weight: 500;
        // Error state demands attention
      }
    }
  }

  .form-actions {
    display: flex;
    justify-content: flex-end;
    gap: ${({ theme }) => theme.spacing.sm};
    padding-top: ${({ theme }) => theme.spacing.lg};
    border-top: 1px solid ${({ theme }) => theme.colors.border.light};
    // Final attention target

    .primary-button {
      background: ${({ theme }) => theme.colors.primary};
      // Most visual weight = clear next action
    }
  }
`;
```

### Data Table Attention Flow

```typescript
const OptimalTable = styled.div`
  .table-toolbar {
    // First attention: Controls and filters
    display: flex;
    justify-content: space-between;
    padding: ${({ theme }) => theme.spacing.md};
    background: ${({ theme }) => theme.colors.background.secondary};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  table {
    width: 100%;
    border-collapse: collapse;

    thead {
      th {
        // Second attention: Column headers
        font-size: ${({ theme }) => theme.typography.sizes.sm};
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: ${({ theme }) => theme.colors.text.secondary};
        padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
        background: ${({ theme }) => theme.colors.background.secondary};
        border-bottom: 2px solid ${({ theme }) => theme.colors.border.default};
        // Emphasized headers guide column scanning
      }
    }

    tbody {
      tr {
        &:hover {
          background: ${({ theme }) => theme.colors.background.secondary};
          // Hover state directs attention to current row
        }

        td {
          // Third attention: Cell data
          padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
          border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};

          &.primary-column {
            font-weight: 600;
            color: ${({ theme }) => theme.colors.text.primary};
            // Primary column draws attention first in row
          }

          &.action-column {
            text-align: right;
            // Actions at end of scan path
          }
        }
      }
    }
  }

  .pagination {
    // Final attention: Navigation
    display: flex;
    justify-content: space-between;
    padding: ${({ theme }) => theme.spacing.md};
    margin-top: ${({ theme }) => theme.spacing.md};
  }
`;
```

## Common Attention Mistakes

### Mistake 1: Too Many Focal Points

**Problem:** Everything screams for attention
```typescript
// ❌ Bad: Multiple competing focal points
.card1 { background: red; font-size: 48px; }
.card2 { background: blue; font-size: 48px; }
.card3 { background: green; font-size: 48px; }
// User doesn't know where to look
```

**Solution:** Single primary focal point
```typescript
// ✅ Good: Clear hierarchy
const Dashboard = styled.div`
  .primary-card {
    background: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.typography.sizes.xxxl};
    // Clear primary focal point
  }

  .secondary-card {
    background: ${({ theme }) => theme.colors.background.primary};
    font-size: ${({ theme }) => theme.typography.sizes.md};
    // Supports, doesn't compete
  }
`;
```

### Mistake 2: Excessive Animation

**Problem:** Constant motion is distracting
```typescript
// ❌ Bad: Everything moving
.card { animation: bounce 1s infinite; }
.button { animation: pulse 1s infinite; }
.badge { animation: rotate 2s infinite; }
// Overwhelming, reduces usability
```

**Solution:** Strategic, purposeful animation
```typescript
// ✅ Good: Animation only for important alerts
const AlertBadge = styled.span`
  // Only animate critical notifications
  &.unread {
    animation: pulse 2s infinite;
  }

  // Static otherwise
`;
```

### Mistake 3: Poor Figure-Ground Separation

**Problem:** Elements blend together
```typescript
// ❌ Bad: No contrast
.page { background: white; }
.card { background: white; border: 1px solid #f0f0f0; }
// No depth, no focal point
```

**Solution:** Clear depth layers
```typescript
// ✅ Good: Clear separation
const Page = styled.div`
  background: ${({ theme }) => theme.colors.background.default}; // #F5F5F5
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.background.primary}; // #FFFFFF
  box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.1);
  // Clear figure-ground separation
`;
```

### Mistake 4: Ignoring Visual Flow

**Problem:** Random placement breaks scanning
```typescript
// ❌ Bad: No logical flow
.layout {
  display: grid;
  grid-template-areas:
    "footer header"
    "sidebar content";
  // Confusing, breaks F-pattern
}
```

**Solution:** Follow natural reading patterns
```typescript
// ✅ Good: Natural F-pattern flow
const Layout = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
  // Top-to-bottom, left-to-right
`;
```

## Summary

**Key principles:**
1. **Pre-attentive attributes**: Color, size, motion, contrast, isolation, position
2. **Visual weight**: Darker + larger + saturated = more attention
3. **Focal points**: One primary + 2-3 secondary maximum per view
4. **Directional cues**: Arrows, lines, gaze, gradients guide eye
5. **Progressive disclosure**: Hide complexity, reveal on demand
6. **Natural flow**: F-pattern (content), Z-pattern (action), Gutenberg (hierarchy)
7. **Animation**: Use sparingly, only for critical alerts
8. **Figure-ground**: Clear depth separation guides attention

**Quick reference:**
- Primary focal point: Largest, most saturated, most isolated
- Secondary focal points: Smaller, less saturated, less isolated
- Motion: Only for critical notifications
- F-pattern: Top-left → top-right → left side → scan content
- Z-pattern: Top-left → top-right → diagonal → bottom
- Isolation: Surround with 3.2-4.8rem (xl-xxl) spacing
- Contrast: 4.5:1 minimum for text, higher for emphasis

**Attention hierarchy checklist:**
- ✓ One clear primary focal point per section
- ✓ 2-3 secondary focal points maximum
- ✓ Visual flow follows F or Z pattern
- ✓ Motion used only for critical alerts
- ✓ Progressive disclosure hides complexity
- ✓ Clear figure-ground separation
- ✓ Directional cues guide user journey
