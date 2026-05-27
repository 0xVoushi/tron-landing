# Layout Grids & Systems

Layout grids provide structure, consistency, and flexibility for organizing UI components. This reference covers CSS Grid, Flexbox composition, column systems, responsive strategies, and admin-specific layout patterns.

## Why Grids Matter

**Grids solve fundamental layout problems:**
- **Consistency**: Predictable alignment and spacing across pages
- **Flexibility**: Adapt to different content and screen sizes
- **Efficiency**: Faster design decisions with established patterns
- **Visual harmony**: Mathematical relationships create professional polish
- **Responsive design**: Graceful adaptation across devices

**Without grids**: Random alignment, inconsistent spacing, fragile layouts, difficult maintenance.

## CSS Grid Fundamentals

CSS Grid is the most powerful layout system for two-dimensional layouts (rows and columns).

### Grid Basics

```typescript
const GridContainer = styled.div`
  display: grid;

  // Define columns
  grid-template-columns: 1fr 2fr 1fr; // 3 columns (1:2:1 ratio)

  // Define rows
  grid-template-rows: auto 1fr auto; // Header, content, footer

  // Gap between items
  gap: ${({ theme }) => theme.spacing.lg}; // 2.4rem
`;
```

**Grid units:**
- `fr` (fraction): Flexible, proportional sizing (1fr = 1 part of available space)
- `px` / `rem`: Fixed sizing
- `auto`: Content-based sizing
- `minmax(min, max)`: Constrained flexible sizing
- `%`: Percentage of container

### Grid Template Areas

Named grid areas create semantic, readable layouts:

```typescript
const DashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 24rem 1fr; // Sidebar 240px, content fills
  grid-template-rows: 6rem 1fr 4rem; // Header 60px, content, footer 40px
  grid-template-areas:
    "sidebar header"
    "sidebar content"
    "sidebar footer";
  gap: 0; // No gaps for full-bleed layout
  height: 100vh;
`;

const Sidebar = styled.aside`
  grid-area: sidebar;
  background: ${({ theme }) => theme.colors.background.secondary};
  padding: ${({ theme }) => theme.spacing.lg};
`;

const Header = styled.header`
  grid-area: header;
  background: ${({ theme }) => theme.colors.background.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.default};
  padding: 0 ${({ theme }) => theme.spacing.xl};
  display: flex;
  align-items: center;
`;

const Content = styled.main`
  grid-area: content;
  padding: ${({ theme }) => theme.spacing.xl};
  overflow-y: auto;
`;

const Footer = styled.footer`
  grid-area: footer;
  background: ${({ theme }) => theme.colors.background.secondary};
  padding: 0 ${({ theme }) => theme.spacing.xl};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
```

### Responsive Grid

```typescript
const ResponsiveGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};

  // Desktop: 4 columns
  grid-template-columns: repeat(4, 1fr);

  // Tablet: 2 columns
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  // Mobile: 1 column
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
```

### Auto-Fit and Auto-Fill

Create responsive grids that automatically adjust columns:

```typescript
// Auto-fit: Collapses empty columns
const AutoFitGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  // Columns will be at least 250px, but will grow to fill space
  // Empty columns collapse
`;

// Auto-fill: Maintains empty columns
const AutoFillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  // Creates as many 250px columns as will fit
  // Maintains empty columns if content doesn't fill
`;
```

**When to use:**
- `auto-fit`: Content-driven layouts (cards, galleries)
- `auto-fill`: Fixed-width layouts with consistent columns

## Flexbox Fundamentals

Flexbox excels at one-dimensional layouts (rows or columns) and alignment.

### Flex Basics

```typescript
const FlexContainer = styled.div`
  display: flex;

  // Direction
  flex-direction: row; // row | row-reverse | column | column-reverse

  // Wrapping
  flex-wrap: wrap; // nowrap | wrap | wrap-reverse

  // Main axis alignment (horizontal for row)
  justify-content: flex-start; // flex-start | flex-end | center | space-between | space-around | space-evenly

  // Cross axis alignment (vertical for row)
  align-items: stretch; // stretch | flex-start | flex-end | center | baseline

  // Gap between items
  gap: ${({ theme }) => theme.spacing.md};
`;
```

### Flex Item Properties

```typescript
const FlexItem = styled.div`
  // Grow factor (how much to grow relative to siblings)
  flex-grow: 1; // 0 = don't grow, 1 = grow proportionally

  // Shrink factor (how much to shrink relative to siblings)
  flex-shrink: 1; // 0 = don't shrink, 1 = shrink proportionally

  // Base size before growing/shrinking
  flex-basis: auto; // auto | 0 | length

  // Shorthand: flex: [grow] [shrink] [basis]
  flex: 1 1 auto; // Grow and shrink from auto size

  // Alignment override for this item
  align-self: center; // auto | flex-start | flex-end | center | baseline | stretch
`;
```

### Common Flex Patterns

**Horizontal centering:**
```typescript
const CenterHorizontal = styled.div`
  display: flex;
  justify-content: center; // Center on main axis
`;
```

**Vertical centering:**
```typescript
const CenterVertical = styled.div`
  display: flex;
  align-items: center; // Center on cross axis
`;
```

**Center both:**
```typescript
const CenterBoth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
```

**Space between items:**
```typescript
const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between; // First and last items at edges
`;
```

**Equal spacing:**
```typescript
const SpaceEvenly = styled.div`
  display: flex;
  justify-content: space-evenly; // Equal space around all items
  // Or use gap:
  gap: ${({ theme }) => theme.spacing.md};
`;
```

**Grow one item:**
```typescript
const Toolbar = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const LeftSection = styled.div`
  // Fixed size
`;

const MiddleSection = styled.div`
  flex: 1; // Grows to fill available space
`;

const RightSection = styled.div`
  // Fixed size
`;
```

## Column Systems

### 12-Column Grid

The 12-column grid is highly divisible (2, 3, 4, 6 columns) and flexible:

```typescript
const TwelveColumnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
`;

// Span multiple columns
const FullWidth = styled.div`
  grid-column: span 12; // Full width
`;

const HalfWidth = styled.div`
  grid-column: span 6; // Half width (6 of 12)
`;

const ThirdWidth = styled.div`
  grid-column: span 4; // Third width (4 of 12)
`;

const QuarterWidth = styled.div`
  grid-column: span 3; // Quarter width (3 of 12)
`;
```

**Common 12-column layouts:**

**Two-thirds / One-third:**
```typescript
const ContentSidebarLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
`;

const MainContent = styled.main`
  grid-column: span 8; // 8 of 12 = 66.67%
`;

const Sidebar = styled.aside`
  grid-column: span 4; // 4 of 12 = 33.33%
`;
```

**Three equal columns:**
```typescript
const ThreeColumnLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Column = styled.div`
  grid-column: span 4; // 4 of 12 = 33.33%
`;
```

### 8-Column Grid

The 8-column grid is simpler and works well for smaller screens:

```typescript
const EightColumnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
`;

const HalfWidth = styled.div`
  grid-column: span 4; // Half width (4 of 8)
`;

const ThirdWidth = styled.div`
  grid-column: span 2.67; // Can't evenly divide, use 12-column instead
`;
```

**When to use 8-column:**
- Mobile and tablet layouts
- Simpler admin interfaces
- Content-focused pages

## Admin Dashboard Layouts

### Classic Sidebar + Content

The most common admin layout pattern:

```typescript
const AppLayout = styled.div`
  display: grid;
  grid-template-columns: 24rem 1fr; // 240px sidebar, rest content
  grid-template-rows: 6rem 1fr; // 60px header, rest content
  grid-template-areas:
    "sidebar header"
    "sidebar content";
  height: 100vh;
`;

const Sidebar = styled.aside`
  grid-area: sidebar;
  background: ${({ theme }) => theme.colors.background.secondary};
  border-right: 1px solid ${({ theme }) => theme.colors.border.default};
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing.lg};
`;

const Header = styled.header`
  grid-area: header;
  background: ${({ theme }) => theme.colors.background.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.default};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.xl};
`;

const Content = styled.main`
  grid-area: content;
  padding: ${({ theme }) => theme.spacing.xl};
  overflow-y: auto;
  background: ${({ theme }) => theme.colors.background.default};
`;
```

**Responsive sidebar:**
```typescript
const ResponsiveAppLayout = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;

  // Desktop: Sidebar visible
  grid-template-columns: 24rem 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar content";

  // Mobile: Sidebar hidden (toggle with overlay)
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "content";
  }
`;

const Sidebar = styled.aside<{ $isOpen: boolean }>`
  grid-area: sidebar;
  background: ${({ theme }) => theme.colors.background.secondary};
  border-right: 1px solid ${({ theme }) => theme.colors.border.default};

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 24rem;
    z-index: 100;
    transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '-100%')});
    transition: transform 0.3s ease;
  }
`;
```

### Split View Layout

Two equal or proportional panels side by side:

```typescript
const SplitViewLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; // Equal split
  gap: 0;
  height: 100vh;
`;

const LeftPanel = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  overflow-y: auto;
  border-right: 1px solid ${({ theme }) => theme.colors.border.default};
`;

const RightPanel = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  overflow-y: auto;
`;

// Proportional split (1:2 ratio)
const ProportionalSplitView = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr; // 33.33% : 66.67%
  gap: 0;
  height: 100vh;
`;
```

**Use cases:**
- Code editor (file tree + editor)
- Email client (list + message)
- Settings (navigation + content)
- Data comparison (old + new)

### Dashboard Card Grid

Responsive card grid with auto-fit:

```typescript
const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.xl};
`;

const MetricCard = styled.div`
  background: ${({ theme }) => theme.colors.background.primary};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.lg};

  // Minimum height for consistency
  min-height: 16rem;
`;
```

**Fixed column counts:**
```typescript
const ThreeColumnDashboard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
```

### Masonry Layout

Cards with varying heights (like Pinterest):

```typescript
const MasonryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  grid-auto-rows: 1rem; // Small row height for fine-grained control
  gap: ${({ theme }) => theme.spacing.lg};
`;

const MasonryCard = styled.div<{ $rowSpan: number }>`
  background: ${({ theme }) => theme.colors.background.primary};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.lg};

  // Span multiple rows based on content height
  grid-row: span ${({ $rowSpan }) => $rowSpan};
`;
```

**Note:** CSS Grid masonry is experimental. For production, consider:
- JavaScript masonry libraries (Masonry.js, React Masonry)
- Column-based layout with CSS `columns`
- Flexbox with column wrapping

## Nested Grids

Grids within grids for complex layouts:

```typescript
const PageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
`;

const MainSection = styled.section`
  grid-column: span 8; // 8 of 12

  // Nested grid for this section
  display: grid;
  grid-template-columns: repeat(8, 1fr); // 8-column nested grid
  gap: ${({ theme }) => theme.spacing.lg};
`;

const NestedCard = styled.div`
  grid-column: span 4; // 4 of 8 (half of main section)
`;

const Sidebar = styled.aside`
  grid-column: span 4; // 4 of 12

  // Nested grid for sidebar
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  grid-auto-rows: min-content; // Rows size to content
`;
```

## Responsive Strategies

### Mobile-First Approach

Start with mobile layout, add complexity for larger screens:

```typescript
const ResponsiveGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};

  // Mobile: 1 column
  grid-template-columns: 1fr;

  // Tablet: 2 columns (min-width 768px)
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  // Desktop: 4 columns (min-width 1280px)
  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
```

### Breakpoint Strategy

**Studio breakpoints:**
- Mobile: < 768px (1 column)
- Tablet: 768px - 1024px (2 columns)
- Laptop: 1024px - 1280px (3 columns)
- Desktop: > 1280px (4+ columns)

```typescript
const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  laptop: '1280px',
  desktop: '1920px',
};

const ResponsiveLayout = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};

  // Mobile
  grid-template-columns: 1fr;
  padding: ${({ theme }) => theme.spacing.lg};

  // Tablet
  @media (min-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    padding: ${({ theme }) => theme.spacing.xl};
  }

  // Laptop
  @media (min-width: ${breakpoints.laptop}) {
    grid-template-columns: repeat(3, 1fr);
    padding: ${({ theme }) => theme.spacing.xxl};
  }

  // Desktop
  @media (min-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
```

### Container Queries (Modern)

Layout adapts to container size, not viewport size:

```typescript
const ContainerGrid = styled.div`
  container-type: inline-size; // Enable container queries
  container-name: grid-container;
`;

const ResponsiveCard = styled.div`
  // Default: 1 column
  display: grid;
  grid-template-columns: 1fr;

  // Container > 600px: 2 columns
  @container grid-container (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  // Container > 900px: 3 columns
  @container grid-container (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
```

**Benefits:**
- Component responds to its container, not viewport
- More modular and reusable components
- Works in sidebars, modals, nested layouts

**Browser support:** Check [caniuse.com](https://caniuse.com/css-container-queries) - widely supported in modern browsers.

## Common Grid Patterns

### Holy Grail Layout

Header, footer, sidebar, content:

```typescript
const HolyGrailLayout = styled.div`
  display: grid;
  grid-template-columns: 20rem 1fr 20rem; // Left sidebar, content, right sidebar
  grid-template-rows: 6rem 1fr 4rem; // Header, content, footer
  grid-template-areas:
    "header header header"
    "left-sidebar content right-sidebar"
    "footer footer footer";
  height: 100vh;
`;

const Header = styled.header`
  grid-area: header;
`;

const LeftSidebar = styled.aside`
  grid-area: left-sidebar;
`;

const Content = styled.main`
  grid-area: content;
`;

const RightSidebar = styled.aside`
  grid-area: right-sidebar;
`;

const Footer = styled.footer`
  grid-area: footer;
`;
```

### Card with Actions

Card with flexible content and fixed actions footer:

```typescript
const Card = styled.div`
  display: grid;
  grid-template-rows: 1fr auto; // Content grows, actions fixed
  background: ${({ theme }) => theme.colors.background.primary};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
`;

const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  overflow-y: auto;
`;

const CardActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.background.secondary};
  border-top: 1px solid ${({ theme }) => theme.colors.border.default};
`;
```

### Sticky Header + Scrollable Content

```typescript
const LayoutWithStickyHeader = styled.div`
  display: grid;
  grid-template-rows: auto 1fr; // Header auto-sized, content fills
  height: 100vh;
`;

const StickyHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: ${({ theme }) => theme.colors.background.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.default};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
`;

const ScrollableContent = styled.main`
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;
```

### Form with Sidebar

Form fields on left, help content on right:

```typescript
const FormLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr; // 66.67% : 33.33%
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 1024px) {
    grid-template-columns: 1fr; // Stack on tablet/mobile
  }
`;

const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const FormHelp = styled.aside`
  background: ${({ theme }) => theme.colors.background.secondary};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.lg};

  // Sticky within scrollable container
  position: sticky;
  top: ${({ theme }) => theme.spacing.xl};
  align-self: flex-start;
  max-height: calc(100vh - ${({ theme }) => theme.spacing.xxl});
  overflow-y: auto;
`;
```

## Grid vs Flexbox Decision Tree

**Use CSS Grid when:**
- Two-dimensional layout (rows AND columns)
- Fixed structure (known number of rows/columns)
- Complex alignment requirements
- Grid-based design system
- Examples: Dashboard layouts, card grids, page structure

**Use Flexbox when:**
- One-dimensional layout (row OR column)
- Content-driven sizing (unknown number of items)
- Simple alignment (center, space-between)
- Navigation bars, toolbars, button groups
- Examples: Navbar, button groups, form rows, list items

**Use both:**
- Grid for overall page structure
- Flexbox for components within grid cells
- Flexbox for toolbars within grid headers

```typescript
// Grid for page structure
const PageLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: ${({ theme }) => theme.spacing.xl};
`;

// Flexbox for toolbar within grid cell
const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.background.secondary};
`;
```

## Common Layout Mistakes

### Mistake 1: Not Using Semantic Grid Areas

**Problem:** Numeric grid positioning is hard to maintain
```typescript
// ❌ Bad: Numeric positioning
.sidebar {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
}

.header {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}
```

**Solution:** Use named grid areas
```typescript
// ✅ Good: Semantic grid areas
const Layout = styled.div`
  display: grid;
  grid-template-areas:
    "sidebar header"
    "sidebar content";
`;

const Sidebar = styled.aside`
  grid-area: sidebar; // Clear and maintainable
`;
```

### Mistake 2: Fixed Pixel Widths on Grid Columns

**Problem:** Breaks responsive design
```typescript
// ❌ Bad: Fixed pixel widths
.grid {
  display: grid;
  grid-template-columns: 300px 900px; // Breaks on smaller screens
}
```

**Solution:** Use flexible units
```typescript
// ✅ Good: Flexible units
const Grid = styled.div`
  display: grid;
  grid-template-columns: 30rem 1fr; // Fixed sidebar, flexible content
  // Or: minmax for constrained flexibility
  grid-template-columns: minmax(20rem, 30rem) 1fr;
`;
```

### Mistake 3: Not Handling Overflow

**Problem:** Content overflows grid cells
```typescript
// ❌ Bad: No overflow handling
.grid-cell {
  // Content might overflow
}
```

**Solution:** Define overflow behavior
```typescript
// ✅ Good: Explicit overflow handling
const GridCell = styled.div`
  overflow: hidden; // Clip overflow
  // Or:
  overflow-y: auto; // Scrollable if needed
  // Or:
  word-break: break-word; // Break long words
`;
```

### Mistake 4: Too Many Breakpoints

**Problem:** Maintaining many breakpoints is complex
```typescript
// ❌ Bad: Too many breakpoints
@media (max-width: 1536px) { /* ... */ }
@media (max-width: 1440px) { /* ... */ }
@media (max-width: 1366px) { /* ... */ }
@media (max-width: 1280px) { /* ... */ }
// ... 10 more breakpoints
```

**Solution:** Use 3-4 strategic breakpoints
```typescript
// ✅ Good: Strategic breakpoints
@media (max-width: 768px) { /* Mobile */ }
@media (max-width: 1024px) { /* Tablet */ }
@media (max-width: 1280px) { /* Laptop */ }
// Desktop is default
```

### Mistake 5: Ignoring Grid Gap

**Problem:** Spacing between grid items is inconsistent
```typescript
// ❌ Bad: Manual margins on grid items
.grid-item {
  margin-right: 20px;
  margin-bottom: 20px;
}

.grid-item:last-child {
  margin-right: 0; // Edge case handling
}
```

**Solution:** Use grid gap
```typescript
// ✅ Good: Grid gap for consistent spacing
const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg}; // Automatic, consistent spacing
`;
```

## Performance Considerations

### Grid vs Flexbox Performance

- **CSS Grid**: Slightly more complex calculations, but negligible impact
- **Flexbox**: Fast for simple layouts, can be slow with many items and wrapping
- **Both**: Performance is rarely a bottleneck in admin interfaces

**Optimization:**
- Avoid deeply nested grids (3+ levels)
- Use `will-change` sparingly for animated grid layouts
- Prefer CSS Grid/Flexbox over JavaScript layout libraries

### Lazy Loading Grid Items

For large grids, lazy load items:

```typescript
const LazyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

// In component:
// - Render only visible items (virtualization)
// - Load more on scroll (intersection observer)
// - Use React.lazy() for heavy components
```

## Accessibility Considerations

### Grid Order and Focus Order

**Problem:** Visual grid order ≠ DOM order can confuse keyboard users

```typescript
// ❌ Bad: Visual order doesn't match DOM order
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

// DOM order: A, B, C, D
// Visual order: B, A, D, C (reordered with grid-column)
```

**Solution:** Match visual order to DOM order
```typescript
// ✅ Good: DOM order matches visual order
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  // Items appear in grid naturally: A, B, C, D
`;
```

**When reordering is necessary:**
- Use `tabindex` carefully to manage focus order
- Test with keyboard navigation
- Provide skip links for complex layouts

### Responsive Reflow

Ensure content reflows gracefully:

```typescript
const ResponsiveGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  // At 320px (smallest mobile), 300px cards still fit
  // At 768px, 2 cards fit
  // At 1280px, 4 cards fit
  // Smooth, accessible reflow
`;
```

## Summary

**Key principles:**
1. CSS Grid for two-dimensional layouts (rows + columns)
2. Flexbox for one-dimensional layouts (row or column)
3. Use semantic grid areas for maintainability
4. Use flexible units (fr, minmax) for responsive design
5. Define 3-4 strategic breakpoints
6. Mobile-first responsive strategy
7. Use grid gap for consistent spacing
8. Match visual order to DOM order for accessibility
9. Test keyboard navigation in complex grids
10. Combine Grid and Flexbox (Grid for structure, Flex for components)

**Quick reference:**
- Dashboard: Grid with sidebar + content areas
- Card grids: `repeat(auto-fit, minmax(30rem, 1fr))`
- Toolbars: Flexbox with `space-between`
- Forms: Flexbox column for fields
- Page structure: Grid template areas
- Responsive: 768px, 1024px, 1280px breakpoints
