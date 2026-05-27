# Spacing & Composition Systems

Spacing creates visual relationships, breathing room, and professional polish. This reference provides comprehensive guidance on the Studio spacing system and composition principles.

## Studio Spacing Scale

**REM-based scale** (1rem = 10px):
- `xs: 0.4rem` (4px) - Tight spacing within components
- `sm: 0.8rem` (8px) - Related elements, icon + text
- `md: 1.6rem` (16px) - Default spacing, paragraph spacing
- `lg: 2.4rem` (24px) - Section spacing, form field spacing
- `xl: 3.2rem` (32px) - Major section spacing, card spacing
- `xxl: 4.8rem` (48px) - Page-level spacing, hero sections

## Padding vs Margin

**Padding** (interior spacing):
- Creates "hit area" and interior comfort
- Defines the inside space of an element
- Use for: Button interior, card content area, input fields

**Margin** (exterior spacing):
- Creates separation between elements
- Defines the outside space around an element
- Use for: Element separation, section breaks, list items

**Example**:
```typescript
const Card = styled.div`
  // Padding: Interior comfort
  padding: ${({ theme }) => theme.spacing.lg}; // 2.4rem inside

  // Margin: Exterior separation
  margin-bottom: ${({ theme }) => theme.spacing.xl}; // 3.2rem between cards
`;
```

## Semantic Spacing Patterns

### Micro Spacing (xs, sm)

**Use for**: Tight relationships within a single component

- Icon + text: `sm` (0.8rem)
- Label + input: `xs` (0.4rem)
- Button padding: `sm` vertical, `md` horizontal
- Badge interior: `xs` (0.4rem)

```typescript
const Badge = styled.span`
  padding: ${({ theme }) => theme.spacing.xs}; // Tight interior
  gap: ${({ theme }) => theme.spacing.xs}; // Icon + text
`;
```

### Medium Spacing (md, lg)

**Use for**: Related but distinct elements

- Paragraph spacing: `md` (1.6rem)
- Form field spacing: `lg` (2.4rem)
- Card content spacing: `md` to `lg`
- List item spacing: `sm` to `md`

```typescript
const Form = styled.form`
  .form-field {
    margin-bottom: ${({ theme }) => theme.spacing.lg}; // 2.4rem between fields

    label {
      margin-bottom: ${({ theme }) => theme.spacing.xs}; // 0.4rem label-to-input
    }

    .help-text {
      margin-top: ${({ theme }) => theme.spacing.xs}; // 0.4rem input-to-help
    }
  }
`;
```

### Macro Spacing (xl, xxl)

**Use for**: Major sections and page-level breathing room

- Section spacing: `xl` (3.2rem)
- Page padding: `xxl` (4.8rem)
- Hero spacing: `xxl` (4.8rem)
- Card grid gaps: `lg` to `xl`

```typescript
const Page = styled.div`
  padding: ${({ theme }) => theme.spacing.xxl}; // Page breathing room

  section {
    margin-bottom: ${({ theme }) => theme.spacing.xl}; // Section separation
  }
`;
```

## Optical vs Mathematical Spacing

**Mathematical spacing**: Exact measurements from spacing scale
**Optical spacing**: Adjusted for visual balance

**When to use optical spacing**:

1. **Icons with text** (icons have visual weight):
```typescript
// Mathematical: 0.8rem
<IconText gap="0.8rem">
  <Icon />
  <Text>Label</Text>
</IconText>

// Optical: 0.6rem (feels more balanced)
<IconText gap="0.6rem">
  <Icon />
  <Text>Label</Text>
</IconText>
```

2. **Button groups** (outer buttons need more padding):
```typescript
const ButtonGroup = styled.div`
  button {
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};

    &:first-child {
      padding-left: ${({ theme }) => theme.spacing.lg}; // Optical adjustment
    }

    &:last-child {
      padding-right: ${({ theme }) => theme.spacing.lg}; // Optical adjustment
    }
  }
`;
```

3. **Headings with descenders** (adjust for visual balance):
```typescript
h1 {
  line-height: 1.2; // Tight for large text
  margin-bottom: ${({ theme }) => theme.spacing.lg}; // Standard

  // If heading has descenders (g, j, p, q, y), may need adjustment
  padding-bottom: 0.2rem; // Optical correction
}
```

## Composition Rules

### Rule of Thirds

**Principle**: Divide space into 3×3 grid, place important elements at intersection points

**Application**:
```typescript
const HeroSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  height: 60rem;

  .hero-content {
    // Place at intersection point (2/3 horizontal, 1/3 vertical)
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
`;
```

### Golden Ratio (1:1.618)

**Principle**: Divide space using φ (phi) for natural-feeling proportions

**Common applications**:
- Sidebar width vs content width: 1:1.618
- Card sections: 1.618:1 (content:actions)
- Image aspect ratios: 1.618:1

**Implementation**:
```typescript
const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.618fr; // Sidebar : Content
  // 38.2% : 61.8% ratio
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;

  .card-content {
    flex: 1.618; // 61.8% of height
  }

  .card-actions {
    flex: 1; // 38.2% of height
  }
`;
```

## Negative Space Principles

**Negative space** (whitespace) is an active design element that:
- Reduces cognitive load
- Groups related elements (proximity)
- Emphasizes important elements (isolation)
- Improves readability

### Types of Negative Space

**Micro whitespace**:
- Within components
- Icon + text spacing
- Button padding
- Line spacing (line-height)

**Macro whitespace**:
- Between components
- Section spacing
- Page margins
- Card gaps

### Asymmetric Whitespace

**Principle**: Unequal spacing creates visual interest and hierarchy

**Example**:
```typescript
const AsymmetricCard = styled.div`
  // More space on top (emphasis on content below)
  padding: ${({ theme }) => theme.spacing.xxl} // top
           ${({ theme }) => theme.spacing.lg}  // right
           ${({ theme }) => theme.spacing.lg}  // bottom
           ${({ theme }) => theme.spacing.lg}; // left

  // Creates visual hierarchy: top space pushes content down
`;
```

## 8-Point Grid System

**Principle**: All spacing values are multiples of 8px (0.8rem)

**Studio alignment**:
- `xs: 0.4rem` = 4px (0.5 × 8)
- `sm: 0.8rem` = 8px (1 × 8)
- `md: 1.6rem` = 16px (2 × 8)
- `lg: 2.4rem` = 24px (3 × 8)
- `xl: 3.2rem` = 32px (4 × 8)
- `xxl: 4.8rem` = 48px (6 × 8)

**Why 8-point grid**:
- Divisible by 2 and 4 (flexibility)
- Works with most screen densities
- Creates consistent, harmonious spacing
- Easy to calculate and remember

## Common Spacing Mistakes

### Mistake 1: Random Spacing Values

**Problem**: Arbitrary padding/margin values
```typescript
// ❌ Bad: Random values
.card {
  padding: 17px; // Why 17?
  margin-bottom: 23px; // Why 23?
}
```

**Solution**: Use theme spacing tokens
```typescript
// ✅ Good: Semantic spacing
.card {
  padding: ${({ theme }) => theme.spacing.lg}; // 2.4rem
  margin-bottom: ${({ theme }) => theme.spacing.xl}; // 3.2rem
}
```

### Mistake 2: Inconsistent Element Spacing

**Problem**: Different spacing for similar elements
```typescript
// ❌ Bad: Inconsistent form field spacing
.field-1 { margin-bottom: 16px; }
.field-2 { margin-bottom: 24px; }
.field-3 { margin-bottom: 20px; }
```

**Solution**: Consistent spacing for similar elements
```typescript
// ✅ Good: All fields use same spacing
.form-field {
  margin-bottom: ${({ theme }) => theme.spacing.lg}; // Always 2.4rem
}
```

### Mistake 3: No Breathing Room

**Problem**: Cramped layouts with insufficient whitespace
```typescript
// ❌ Bad: No breathing room
.section {
  padding: 8px; // Too tight

  .content {
    margin: 4px; // Cramped
  }
}
```

**Solution**: Generous macro spacing
```typescript
// ✅ Good: Adequate breathing room
.section {
  padding: ${({ theme }) => theme.spacing.xl}; // 3.2rem

  .content {
    margin-bottom: ${({ theme }) => theme.spacing.lg}; // 2.4rem
  }
}
```

## Responsive Spacing

**Principle**: Reduce spacing on smaller screens

```typescript
const ResponsiveContainer = styled.div`
  // Desktop: xxl (4.8rem) padding
  padding: ${({ theme }) => theme.spacing.xxl};

  // Tablet: xl (3.2rem) padding
  @media (max-width: 1024px) {
    padding: ${({ theme }) => theme.spacing.xl};
  }

  // Mobile: lg (2.4rem) padding
  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;
```

## Spacing Decision Tree

**Question 1**: What's the relationship?
- Same component → Micro (xs, sm)
- Related elements → Medium (md, lg)
- Separate sections → Macro (xl, xxl)

**Question 2**: Interior or exterior?
- Interior → Padding
- Exterior → Margin

**Question 3**: Horizontal or vertical?
- Horizontal → Usually smaller (sm, md)
- Vertical → Usually larger (md, lg, xl)

**Example workflow**:
```
Goal: Space between form fields
→ Separate but related → Medium spacing
→ Exterior (between elements) → Margin
→ Vertical stacking → lg (2.4rem)

Result: margin-bottom: ${({ theme }) => theme.spacing.lg};
```

## Summary

**Key principles**:
1. Use semantic spacing tokens (xs → xxl)
2. Padding = interior, Margin = exterior
3. Micro (xs, sm) for tight relationships
4. Medium (md, lg) for related elements
5. Macro (xl, xxl) for sections and pages
6. Optical spacing for visual balance
7. 8-point grid for harmony
8. Negative space is active, not empty
9. Responsive spacing on mobile
10. Consistent spacing = professional polish
