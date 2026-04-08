# Visual Hierarchy Reference

Visual hierarchy is the most fundamental principle in UI design. It guides users to the most important information first and creates a clear path through complex interfaces.

## Overview

Visual hierarchy uses five primary techniques to establish importance:
1. **Size** - Larger elements appear more important
2. **Color** - Saturated colors draw attention
3. **Weight** - Heavier visual weight stands out
4. **Position** - Top and left are seen first
5. **Contrast** - High contrast elements get noticed

## Size Hierarchy in Detail

### Typography Scale Application

**Studio Typography Scale** (REM-based, 1rem = 10px):
- `xxxl: 4.8rem (48px)` - Hero metrics, splash screens, major announcements
- `xxl: 3.2rem (32px)` - Page headers, primary dashboard metrics, key performance indicators
- `xl: 2.4rem (24px)` - Section headers, page titles, modal titles
- `lg: 1.8rem (18px)` - Subsection headers, card titles, emphasized labels
- `md: 1.6rem (16px)` - **Body text (default), form inputs, table data, descriptions**
- `sm: 1.4rem (14px)` - Secondary text, helper text, captions, metadata
- `xs: 1.2rem (12px)` - Small labels, badges, timestamps, fine print

### Size Jump Principles

**One size jump** (subtle hierarchy):
- Use for: Related but hierarchical content within the same section
- Example: Card title `lg` → Card subtitle `md`
- Ratio: ~1.125x difference
- Effect: Subtle but clear distinction

**Two size jumps** (clear hierarchy):
- Use for: Distinct hierarchy levels, section breaks
- Example: Page title `xxl` → Body text `md`
- Ratio: ~2x difference
- Effect: Strong visual separation

**Three size jumps** (extreme emphasis):
- Use for: Hero elements, critical metrics, dramatic contrast
- Example: Dashboard hero metric `xxxl` → Metric label `xs`
- Ratio: ~4x difference
- Effect: Maximum visual impact

### Component Size Patterns

**Dashboard Cards**:
```typescript
const MetricCard = styled.div`
  .card-title {
    font-size: ${({ theme }) => theme.typography.sizes.md}; // 1.6rem
    // Context header - medium importance
  }

  .card-value {
    font-size: ${({ theme }) => theme.typography.sizes.xxl}; // 3.2rem
    // Primary metric - highest importance (2 size jumps)
  }

  .card-label {
    font-size: ${({ theme }) => theme.typography.sizes.sm}; // 1.4rem
    // Supporting label - lower importance (1 size jump down from title)
  }

  .card-change {
    font-size: ${({ theme }) => theme.typography.sizes.xs}; // 1.2rem
    // Tertiary info - lowest importance
  }
`;
```

**Page Headers**:
```typescript
const PageHeader = styled.header`
  h1 {
    font-size: ${({ theme }) => theme.typography.sizes.xl}; // 2.4rem
    // Main page title - clear hierarchy
  }

  .breadcrumbs {
    font-size: ${({ theme }) => theme.typography.sizes.sm}; // 1.4rem
    // Navigation context - 2 jumps smaller
  }

  .page-actions {
    button {
      font-size: ${({ theme }) => theme.typography.sizes.md}; // 1.6rem
      // Action text - readable, 1 jump smaller than title
    }
  }
`;
```

**Data Tables**:
```typescript
const Table = styled.table`
  thead th {
    font-size: ${({ theme }) => theme.typography.sizes.md}; // 1.6rem
    // Column headers - standard importance
  }

  tbody td {
    &.primary {
      font-size: ${({ theme }) => theme.typography.sizes.md}; // 1.6rem
      // Primary data - same size, differentiate with weight/color
    }

    &.secondary {
      font-size: ${({ theme }) => theme.typography.sizes.sm}; // 1.4rem
      // Secondary data - 1 jump smaller
    }

    &.metadata {
      font-size: ${({ theme }) => theme.typography.sizes.xs}; // 1.2rem
      // Timestamps, IDs - 2 jumps smaller
    }
  }
`;
```

---

## Color Hierarchy in Detail

### Saturation-Based Hierarchy

**Saturation levels** (from highest to lowest attention):

1. **Status colors** (highest saturation):
   - Success: `#52c41a` (light) / `#49aa19` (dark)
   - Warning: `#faad14` (light) / `#d89614` (dark)
   - Error: `#ff4d4f` (light) / `#a61d24` (dark)
   - Info: `#1890ff` (light) / `#177ddc` (dark)
   - Use: Critical states, alerts, important indicators

2. **Primary brand color** (high saturation):
   - Light: `#1890ff` (bright blue)
   - Dark: `#177ddc` (darker blue)
   - Use: Primary actions, key data, active states, links

3. **Text primary** (maximum contrast):
   - Light: `#000000` (black)
   - Dark: `#ffffff` (white)
   - Use: Most important text, headings, primary content

4. **Text secondary** (medium saturation):
   - Light: `rgba(0, 0, 0, 0.65)` (65% black)
   - Dark: `rgba(255, 255, 255, 0.65)` (65% white)
   - Use: Supporting text, labels, secondary information

5. **Text tertiary** (low saturation):
   - Light: `rgba(0, 0, 0, 0.45)` (45% black)
   - Dark: `rgba(255, 255, 255, 0.45)` (45% white)
   - Use: Placeholders, disabled text, timestamps, metadata

6. **Borders** (minimal saturation):
   - Light: `#d9d9d9` / `#f0f0f0`
   - Dark: `#434343` / `#303030`
   - Use: Structural elements, dividers, subtle separation

### Color Application Patterns

**Dashboard Metrics**:
```typescript
// Hierarchy through color saturation
const MetricDisplay = styled.div`
  .metric-value {
    // High saturation - primary color for key metrics
    color: ${({ theme }) => theme.colors.primary}; // #1890ff
    font-size: ${({ theme }) => theme.typography.sizes.xxl};
  }

  .metric-label {
    // Medium saturation - text primary for context
    color: ${({ theme }) => theme.colors.text.primary}; // #000000 / #ffffff
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }

  .metric-change {
    // Conditional saturation - status color for emphasis
    color: ${({ $positive, theme }) =>
      $positive ? theme.colors.success : theme.colors.error};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
  }

  .metric-timestamp {
    // Low saturation - text tertiary recedes
    color: ${({ theme }) => theme.colors.text.tertiary}; // rgba(0,0,0,0.45)
    font-size: ${({ theme }) => theme.typography.sizes.xs};
  }
`;
```

**Form Hierarchy**:
```typescript
const FormField = styled.div`
  label {
    // Medium-high saturation - text primary for labels
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: ${({ theme }) => theme.typography.weights.medium};
  }

  input {
    // Medium saturation - text primary for input
    color: ${({ theme }) => theme.colors.text.primary};

    &::placeholder {
      // Low saturation - text tertiary for placeholders
      color: ${({ theme }) => theme.colors.text.tertiary};
    }

    &:focus {
      // High saturation - primary color for focus state
      border-color: ${({ theme }) => theme.colors.primary};
    }

    &[aria-invalid="true"] {
      // Highest saturation - error color for validation
      border-color: ${({ theme }) => theme.colors.error};
    }
  }

  .help-text {
    // Low saturation - text secondary for helper text
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  .error-message {
    // Highest saturation - error color for errors
    color: ${({ theme }) => theme.colors.error};
  }
`;
```

**Button Hierarchy**:
```typescript
// Primary button - highest saturation
const PrimaryButton = styled.button`
  background: ${({ theme }) => theme.colors.primary}; // High saturation
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover}; // Slightly higher
  }
`;

// Secondary button - medium saturation
const SecondaryButton = styled.button`
  background: transparent; // No background
  color: ${({ theme }) => theme.colors.text.primary}; // Medium saturation
  border: 1px solid ${({ theme }) => theme.colors.border}; // Low saturation border

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary}; // Increase saturation on hover
  }
`;

// Tertiary button - low saturation
const TertiaryButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.text.secondary}; // Lower saturation
  border: none;

  &:hover {
    color: ${({ theme }) => theme.colors.primary}; // Increase saturation on hover
  }
`;
```

---

## Weight Hierarchy in Detail

### Font Weight Scale

**Studio Font Weights**:
- `heavy: 900` - Extremely rare, only for marketing or extreme emphasis
- `bold: 700` - Page titles, primary headers, important labels, active menu items
- `semibold: 600` - Section headers, card titles, emphasized content
- `medium: 500` - Button text, table headers, form labels, secondary headers
- `regular: 400` - **Body text (default), input text, table data, descriptions**

### Weight Application Rules

**Typography weight hierarchy**:
```typescript
// Page structure
const Page = styled.div`
  h1 {
    font-weight: ${({ theme }) => theme.typography.weights.bold}; // 700
    // Page title - highest weight
  }

  h2 {
    font-weight: ${({ theme }) => theme.typography.weights.semibold}; // 600
    // Section header - one step down
  }

  h3 {
    font-weight: ${({ theme }) => theme.typography.weights.medium}; // 500
    // Subsection header - another step down
  }

  p, span {
    font-weight: ${({ theme }) => theme.typography.weights.regular}; // 400
    // Body text - lightest weight
  }

  strong {
    font-weight: ${({ theme }) => theme.typography.weights.semibold}; // 600
    // Emphasized text - medium emphasis
  }
`;
```

**Navigation weight hierarchy**:
```typescript
const NavItem = styled.li<{ $active?: boolean }>`
  font-weight: ${({ $active, theme }) =>
    $active
      ? theme.typography.weights.bold    // 700 - Active: highest weight
      : theme.typography.weights.regular  // 400 - Inactive: lowest weight
  };

  &:hover {
    font-weight: ${({ theme }) => theme.typography.weights.medium}; // 500
    // Hover: medium weight (between active and inactive)
  }
`;
```

### Visual Weight Beyond Typography

**Border weight**:
```typescript
const Card = styled.div<{ $emphasis?: 'high' | 'medium' | 'low' }>`
  border-width: ${({ $emphasis }) => {
    switch ($emphasis) {
      case 'high': return '3px';    // Heavy border - high emphasis
      case 'medium': return '2px';  // Medium border - medium emphasis
      case 'low':
      default: return '1px';        // Thin border - low emphasis (default)
    }
  }};
`;
```

**Icon weight**:
```typescript
// Filled icons have more visual weight
const FilledIcon = styled(Icon)`
  // Use for: Active states, selected items, important indicators
  fill: ${({ theme }) => theme.colors.primary};
`;

// Outlined icons have less visual weight
const OutlinedIcon = styled(Icon)`
  // Use for: Inactive states, unselected items, secondary indicators
  stroke: ${({ theme }) => theme.colors.text.secondary};
  fill: none;
`;
```

**Shadow weight**:
```typescript
// Shadows create perceived weight through depth
const ElevatedCard = styled.div<{ $elevation?: 'sm' | 'md' | 'lg' | 'xl' }>`
  box-shadow: ${({ $elevation = 'sm', theme }) => theme.shadows[$elevation]};
  // sm: 0 1px 2px - Subtle depth, low weight
  // md: 0 4px 6px - Medium depth, medium weight
  // lg: 0 10px 15px - Strong depth, high weight
  // xl: 0 20px 25px - Maximum depth, highest weight
`;
```

---

## Position Hierarchy in Detail

### F-Pattern Reading (Content-Heavy Pages)

**Pattern description**:
1. Users read horizontally across the top (100% attention)
2. Then down the left side (90% attention)
3. Then horizontally again, but shorter (50% attention)
4. Continue down left side (declining attention)

**Optimal placement**:
```typescript
const FPatternLayout = styled.div`
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";

  .header {
    grid-area: header;
    display: flex;
    justify-content: space-between;

    // Top-left: Most important (page title)
    .page-title {
      order: 1;
      font-size: ${({ theme }) => theme.typography.sizes.xl};
    }

    // Top-right: Secondary actions
    .actions {
      order: 2;
    }
  }

  .sidebar {
    grid-area: sidebar;
    // Left column: Navigation, filters (always visible during vertical scan)
  }

  .main {
    grid-area: main;

    h2 {
      // Section headers - caught during horizontal scans
      margin-bottom: ${({ theme }) => theme.spacing.lg};
    }
  }

  .aside {
    grid-area: aside;
    // Right side: Supplementary info (lower priority)
  }
`;
```

**F-Pattern application examples**:

**Data Table**:
```typescript
const DataTable = styled.table`
  thead th {
    // Top row - horizontal scan 1 (high attention)
    // Place most important column headers on the left
    &:first-child {
      // Leftmost column - highest attention
    }
  }

  tbody td {
    &:first-child {
      // Left column - vertical scan (high attention)
      // Place primary identifier (name, ID) here
      font-weight: ${({ theme }) => theme.typography.weights.medium};
    }

    &:last-child {
      // Right column - low attention
      // Place actions or less critical data here
    }
  }
`;
```

**Dashboard Grid**:
```typescript
const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};

  // Top-left card: Highest priority metric
  .card:nth-child(1) {
    grid-column: 1;
    grid-row: 1;
  }

  // Top-center: Second priority
  .card:nth-child(2) {
    grid-column: 2;
    grid-row: 1;
  }

  // Top-right: Third priority
  .card:nth-child(3) {
    grid-column: 3;
    grid-row: 1;
  }

  // Left column: Fourth priority (vertical scan)
  .card:nth-child(4) {
    grid-column: 1;
    grid-row: 2;
  }
`;
```

### Z-Pattern Reading (Simple Pages)

**Pattern description**:
1. Top-left corner (start)
2. Horizontally across to top-right
3. Diagonally down-left
4. Horizontally across to bottom-right

**Optimal placement**:
```typescript
const ZPatternLayout = styled.div`
  // Point 1: Top-left (logo, brand)
  .logo {
    position: absolute;
    top: ${({ theme }) => theme.spacing.lg};
    left: ${({ theme }) => theme.spacing.lg};
  }

  // Point 2: Top-right (primary CTA)
  .primary-cta {
    position: absolute;
    top: ${({ theme }) => theme.spacing.lg};
    right: ${({ theme }) => theme.spacing.lg};
  }

  // Point 3: Diagonal path - center hero content
  .hero-content {
    text-align: center;
    margin: ${({ theme }) => theme.spacing.xxl} auto;
    max-width: 72rem;
  }

  // Point 4: Bottom-right (secondary CTA or next step)
  .secondary-cta {
    position: absolute;
    bottom: ${({ theme }) => theme.spacing.xl};
    right: ${({ theme }) => theme.spacing.xl};
  }
`;
```

### Spatial Priority Rules

**Top vs Bottom**:
- Top 100px: Critical navigation, page title, primary actions
- Middle area: Main content, data, forms
- Bottom 100px: Footer, pagination, secondary actions

**Left vs Right**:
- Left 240px: Navigation, filters, hierarchy indicators
- Center: Primary content, data tables, forms
- Right 320px: Contextual help, related info, secondary actions

**Center vs Edges**:
- Center: Primary focus, modals, important content
- Edges: Navigation, supplementary info, persistent UI

```typescript
const AdminLayout = styled.div`
  display: grid;
  grid-template-columns: 24rem 1fr 32rem;
  grid-template-rows: 6.4rem 1fr 4rem;
  grid-template-areas:
    "nav header header"    // Top: Navigation (left), Actions (right)
    "nav main aside"       // Middle: Filters (left), Content (center), Help (right)
    "nav footer footer";   // Bottom: Pagination, status

  .nav {
    grid-area: nav;
    // Left side - always visible during F-pattern scan
  }

  .header {
    grid-area: header;
    // Top - first horizontal scan
    display: flex;
    justify-content: space-between;
  }

  .main {
    grid-area: main;
    // Center - primary focus area
  }

  .aside {
    grid-area: aside;
    // Right - supplementary information
  }

  .footer {
    grid-area: footer;
    // Bottom - lower priority actions
  }
`;
```

---

## Contrast Hierarchy in Detail

### WCAG 2.1 AA Contrast Requirements

**Minimum ratios**:
- Normal text: 4.5:1 contrast ratio
- Large text (≥24px or ≥19px bold): 3:1 contrast ratio
- UI components and graphical objects: 3:1 contrast ratio

**Studio contrast levels**:

**Maximum contrast** (Text primary on Background):
- Light mode: `#000000` on `#ffffff` = 21:1 ratio
- Dark mode: `#ffffff` on `#141414` = 15.3:1 ratio
- Use: Body text, headings, primary content

**High contrast** (Primary color on Background):
- Light mode: `#1890ff` on `#ffffff` = 4.5:1 ratio
- Dark mode: `#177ddc` on `#141414` = 4.6:1 ratio
- Use: Primary buttons, links, active states

**Medium contrast** (Text secondary):
- Light mode: `rgba(0,0,0,0.65)` on `#ffffff` = 7:1 ratio
- Dark mode: `rgba(255,255,255,0.65)` on `#141414` = 6.8:1 ratio
- Use: Secondary text, labels, helper text

**Low contrast** (Text tertiary):
- Light mode: `rgba(0,0,0,0.45)` on `#ffffff` = 4.6:1 ratio
- Dark mode: `rgba(255,255,255,0.45)` on `#141414` = 4.5:1 ratio
- Use: Placeholders, timestamps (large text only)

**Minimal contrast** (Borders):
- Light mode: `#d9d9d9` on `#f0f2f5` = 1.2:1 ratio
- Dark mode: `#434343` on `#1f1f1f` = 1.5:1 ratio
- Use: Subtle dividers, structural elements (not text)

### Contrast Application Patterns

**Status badges**:
```typescript
// High contrast - Active/Important status
const ActiveBadge = styled.span`
  background: ${({ theme }) => theme.colors.success}; // #52c41a
  color: ${({ theme }) => theme.colors.white}; // #ffffff
  // Contrast ratio: ~3.5:1 (acceptable for large text/UI component)
`;

// Medium contrast - Warning status
const WarningBadge = styled.span`
  background: ${({ theme }) => theme.colors.warning}; // #faad14
  color: ${({ theme }) => theme.colors.white}; // #ffffff (might need darker text)
  // Consider using dark text for better contrast with yellow/orange
`;

// Low contrast - Disabled status
const DisabledBadge = styled.span`
  background: ${({ theme }) => theme.colors.background.tertiary};
  color: ${({ theme }) => theme.colors.text.tertiary};
  // Lower contrast signals "not important"
`;
```

**Card emphasis through contrast**:
```typescript
// Maximum contrast - Primary/Featured card
const FeaturedCard = styled.div`
  background: ${({ theme }) => theme.colors.background.secondary}; // #ffffff / #1f1f1f
  border: 2px solid ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadows.md};
  // High contrast border + shadow = maximum emphasis
`;

// High contrast - Standard card
const Card = styled.div`
  background: ${({ theme }) => theme.colors.background.secondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  // Medium contrast = standard importance
`;

// Low contrast - Subtle card
const SubtleCard = styled.div`
  background: ${({ theme }) => theme.colors.background.tertiary};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  // Low contrast = background element
`;
```

---

## Common Mistakes & Solutions

### Mistake 1: Inconsistent Size Jumps

**Problem**: Random font size choices without consistent scale
```typescript
// ❌ Bad: Inconsistent jumps
h1 { font-size: 2.8rem; }  // Random size
h2 { font-size: 2.1rem; }  // Another random size
h3 { font-size: 1.7rem; }  // Yet another random size
```

**Solution**: Use consistent size jumps from theme scale
```typescript
// ✅ Good: Consistent scale
h1 { font-size: ${({ theme }) => theme.typography.sizes.xl}; }   // 2.4rem
h2 { font-size: ${({ theme }) => theme.typography.sizes.lg}; }   // 1.8rem
h3 { font-size: ${({ theme }) => theme.typography.sizes.md}; }   // 1.6rem
```

### Mistake 2: Over-using High Saturation Colors

**Problem**: Too many elements competing for attention
```typescript
// ❌ Bad: Everything is saturated
<Button color="primary">Save</Button>
<Button color="primary">Cancel</Button>
<Text color="primary">Description text...</Text>
<Badge color="primary">Status</Badge>
```

**Solution**: Reserve high saturation for important elements
```typescript
// ✅ Good: Strategic saturation
<Button variant="primary">Save</Button>  {/* High saturation - primary action */}
<Button variant="secondary">Cancel</Button>  {/* Low saturation - secondary */}
<Text color="text.primary">Description text...</Text>  {/* Medium saturation */}
<Badge color="success">Active</Badge>  {/* High saturation - status indicator */}
```

### Mistake 3: Ignoring Position Hierarchy

**Problem**: Important elements in low-attention areas
```typescript
// ❌ Bad: Primary CTA in bottom-right (Z-pattern start is top-left)
const Page = styled.div`
  .primary-action {
    position: absolute;
    bottom: 2rem;
    right: 2rem;  // Low attention area
  }
`;
```

**Solution**: Place important elements in high-attention areas
```typescript
// ✅ Good: Primary CTA in top-right or after content
const Page = styled.div`
  .primary-action {
    position: absolute;
    top: 2rem;
    right: 2rem;  // High attention area (Z-pattern point 2)
  }
`;
```

### Mistake 4: Insufficient Contrast

**Problem**: Text fails WCAG AA standards
```typescript
// ❌ Bad: Low contrast text (2.5:1 ratio)
const Text = styled.p`
  color: #999999;  // Light gray
  background: #ffffff;  // White
  // Fails WCAG AA (needs 4.5:1 minimum)
`;
```

**Solution**: Use theme colors that meet WCAG AA
```typescript
// ✅ Good: Sufficient contrast (7:1 ratio)
const Text = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};  // rgba(0,0,0,0.65)
  background: ${({ theme }) => theme.colors.background};  // #ffffff
  // Passes WCAG AA
`;
```

### Mistake 5: Mixing Weight Levels Randomly

**Problem**: No clear weight progression
```typescript
// ❌ Bad: Inconsistent weights
h1 { font-weight: 600; }  // Semibold
h2 { font-weight: 700; }  // Bold (heavier than h1!)
h3 { font-weight: 500; }  // Medium
p { font-weight: 600; }   // Semibold (same as h1!)
```

**Solution**: Logical weight progression
```typescript
// ✅ Good: Clear hierarchy
h1 { font-weight: ${({ theme }) => theme.typography.weights.bold}; }      // 700
h2 { font-weight: ${({ theme }) => theme.typography.weights.semibold}; }  // 600
h3 { font-weight: ${({ theme }) => theme.typography.weights.medium}; }    // 500
p { font-weight: ${({ theme }) => theme.typography.weights.regular}; }    // 400
```

---

## Studio Component Examples

### Player Profile Header

**Visual hierarchy analysis**:
```typescript
const PlayerHeader = styled.header`
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.background.secondary};

  .player-name {
    // Highest hierarchy: Size + Weight + Position
    font-size: ${({ theme }) => theme.typography.sizes.xxl};     // Size: xxl
    font-weight: ${({ theme }) => theme.typography.weights.bold}; // Weight: bold
    color: ${({ theme }) => theme.colors.text.primary};          // Color: maximum contrast
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    // Position: Top-left (first element)
  }

  .player-id {
    // Second hierarchy: Size + Color
    font-size: ${({ theme }) => theme.typography.sizes.md};      // Size: md (2 jumps down)
    color: ${({ theme }) => theme.colors.text.secondary};        // Color: medium contrast
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  .player-stats {
    display: flex;
    gap: ${({ theme }) => theme.spacing.xl};

    .stat-value {
      // Third hierarchy: Size + Color emphasis
      font-size: ${({ theme }) => theme.typography.sizes.lg};    // Size: lg
      font-weight: ${({ theme }) => theme.typography.weights.semibold}; // Weight: semibold
      color: ${({ theme }) => theme.colors.primary};             // Color: brand (high saturation)
    }

    .stat-label {
      // Fourth hierarchy: Size + Color
      font-size: ${({ theme }) => theme.typography.sizes.sm};    // Size: sm
      color: ${({ theme }) => theme.colors.text.tertiary};       // Color: low contrast
    }
  }

  .last-active {
    // Lowest hierarchy: Size + Color + Position
    font-size: ${({ theme }) => theme.typography.sizes.xs};      // Size: xs (smallest)
    color: ${({ theme }) => theme.colors.text.tertiary};         // Color: low contrast
    margin-top: ${({ theme }) => theme.spacing.md};
    // Position: Bottom (last element)
  }
`;
```

### Dashboard Metric Card

**Complete hierarchy implementation**:
```typescript
const MetricCard = styled.div`
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  // Hierarchy level 1: Card title (context)
  .card-title {
    font-size: ${({ theme }) => theme.typography.sizes.md};
    font-weight: ${({ theme }) => theme.typography.weights.semibold};
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    // Medium hierarchy: Not the focus, but important context
  }

  // Hierarchy level 2: Primary metric (HIGHEST EMPHASIS)
  .metric-value {
    font-size: ${({ theme }) => theme.typography.sizes.xxxl};    // Size: Maximum
    font-weight: ${({ theme }) => theme.typography.weights.bold}; // Weight: Bold
    color: ${({ theme }) => theme.colors.primary};               // Color: High saturation
    line-height: 1;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    // This is the primary focus of the card
  }

  // Hierarchy level 3: Metric change indicator
  .metric-change {
    display: inline-flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xs};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    font-weight: ${({ theme }) => theme.typography.weights.medium};

    &.positive {
      color: ${({ theme }) => theme.colors.success}; // High saturation for status
    }

    &.negative {
      color: ${({ theme }) => theme.colors.error};   // High saturation for status
    }
  }

  // Hierarchy level 4: Time period (lowest emphasis)
  .metric-period {
    font-size: ${({ theme }) => theme.typography.sizes.xs};
    color: ${({ theme }) => theme.colors.text.tertiary};
    margin-top: ${({ theme }) => theme.spacing.md};
    // Smallest size, lowest contrast
  }

  // Hierarchy level 5: Card actions (contextual)
  .card-actions {
    margin-top: ${({ theme }) => theme.spacing.lg};
    padding-top: ${({ theme }) => theme.spacing.md};
    border-top: 1px solid ${({ theme }) => theme.colors.borderLight};

    button {
      font-size: ${({ theme }) => theme.typography.sizes.sm};
      color: ${({ theme }) => theme.colors.text.secondary};
      // Small, medium contrast - available but not prominent
    }
  }
`;
```

### Data Table Row

**Row-level hierarchy**:
```typescript
const TableRow = styled.tr<{ $featured?: boolean }>`
  // Featured rows: Higher contrast background
  background: ${({ $featured, theme }) =>
    $featured
      ? `rgba(24, 144, 255, 0.08)` // Slight blue tint
      : 'transparent'
  };

  &:hover {
    background: ${({ theme }) => theme.colors.background.tertiary};
  }

  // Cell hierarchy through size, weight, and color
  td {
    padding: ${({ theme }) => theme.spacing.md};

    // Primary identifier (leftmost column)
    &.primary-data {
      font-size: ${({ theme }) => theme.typography.sizes.md};
      font-weight: ${({ theme }) => theme.typography.weights.medium};  // Emphasized
      color: ${({ theme }) => theme.colors.text.primary};
      // Position: Leftmost (F-pattern priority)
    }

    // Standard data
    &.standard-data {
      font-size: ${({ theme }) => theme.typography.sizes.md};
      font-weight: ${({ theme }) => theme.typography.weights.regular};
      color: ${({ theme }) => theme.colors.text.primary};
    }

    // Secondary data
    &.secondary-data {
      font-size: ${({ theme }) => theme.typography.sizes.sm};  // Smaller
      color: ${({ theme }) => theme.colors.text.secondary};    // Lower contrast
    }

    // Metadata (timestamps, IDs)
    &.metadata {
      font-size: ${({ theme }) => theme.typography.sizes.xs};   // Smallest
      color: ${({ theme }) => theme.colors.text.tertiary};     // Lowest contrast
    }

    // Status indicators
    &.status {
      font-size: ${({ theme }) => theme.typography.sizes.sm};
      font-weight: ${({ theme }) => theme.typography.weights.medium};
      // Color depends on status (high saturation for emphasis)
    }

    // Actions (rightmost column)
    &.actions {
      text-align: right;  // Right-aligned
      // Position: Rightmost (lower F-pattern priority)
    }
  }
`;
```

---

## Summary

Visual hierarchy is created through the strategic combination of:

1. **Size**: Use consistent scale jumps (1, 2, or 3 levels)
2. **Color**: Reserve high saturation for important elements
3. **Weight**: Progress from bold to regular
4. **Position**: Top-left for primary, bottom-right for secondary
5. **Contrast**: Higher contrast for higher importance

**Remember**: Apply hierarchy techniques in combination. A small element with high saturation and bold weight can outweigh a large element with low saturation and regular weight. Balance is key.
