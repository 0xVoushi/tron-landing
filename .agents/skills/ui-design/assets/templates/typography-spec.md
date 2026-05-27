# Typography Specification Template

Use this template to document typography decisions for components or pages.

## Component/Page Information

- **Name**: _____________________
- **File Path**: _____________________
- **Date**: _____________________
- **Designer/Developer**: _____________________

## Studio Typography Scale Reference

| Token | Size | Line Height | Use Case |
|-------|------|-------------|----------|
| xxxl  | 4.8rem (48px) | 1.1  | Hero headings, page titles |
| xxl   | 3.6rem (36px) | 1.15 | Section headings |
| xl    | 2.4rem (24px) | 1.2  | Subsection headings |
| lg    | 1.8rem (18px) | 1.3  | Card titles, labels |
| md    | 1.6rem (16px) | 1.5  | Body text, primary content |
| sm    | 1.4rem (14px) | 1.4  | Secondary text, captions |
| xs    | 1.2rem (12px) | 1.3  | Tertiary text, metadata |

## Typography Assignments

### Headings

| Element | Size Token | Weight | Color | Line Height | Letter Spacing |
|---------|------------|--------|-------|-------------|----------------|
| h1      |            |        |       |             |                |
| h2      |            |        |       |             |                |
| h3      |            |        |       |             |                |
| h4      |            |        |       |             |                |

**Heading Hierarchy Validation**:
- [ ] No skipped levels (h1 → h2 → h3, not h1 → h3)
- [ ] Size decreases with level (h1 > h2 > h3)
- [ ] Clear visual distinction between levels

### Body Text

| Element | Size Token | Weight | Color | Line Height |
|---------|------------|--------|-------|-------------|
| Paragraph |          |        |       |             |
| List item |          |        |       |             |
| Blockquote |         |        |       |             |

**Body Text Validation**:
- [ ] Line height 1.4-1.6 for readability
- [ ] Line length 45-75 characters
- [ ] Sufficient contrast (4.5:1 minimum)

### UI Text

| Element | Size Token | Weight | Color | Notes |
|---------|------------|--------|-------|-------|
| Button  |            |        |       |       |
| Link    |            |        |       |       |
| Label   |            |        |       |       |
| Input   |            |        |       |       |
| Badge   |            |        |       |       |

### Metadata & Captions

| Element | Size Token | Weight | Color | Notes |
|---------|------------|--------|-------|-------|
| Caption |            |        |       |       |
| Timestamp |          |        |       |       |
| Help text |          |        |       |       |

## Weight Scale Usage

| Weight | Usage | Example Elements |
|--------|-------|------------------|
| 300    | Light (rare) |                  |
| 400    | Regular (body) |                |
| 500    | Medium (emphasis) |            |
| 600    | Semibold (headings) |          |
| 700    | Bold (strong emphasis) |       |

## Color Assignments

| Purpose | Color Token | Hex Value | Contrast Ratio |
|---------|-------------|-----------|----------------|
| Primary text | text.primary |  | ____:1 |
| Secondary text | text.secondary |  | ____:1 |
| Tertiary text | text.tertiary |  | ____:1 |
| Link text | primary |  | ____:1 |
| Error text | error |  | ____:1 |

**Contrast Validation**:
- [ ] All text meets WCAG 2.1 AA (4.5:1 for normal, 3:1 for large)
- [ ] Tested in light and dark modes

## Special Typography Patterns

### All-Caps Text

| Element | Size | Weight | Letter Spacing | Justification |
|---------|------|--------|----------------|---------------|
|         |      |        | +0.05em - +0.15em |           |

### Monospace/Code

| Element | Font Family | Size | Use Case |
|---------|-------------|------|----------|
|         |             |      |          |

## Responsive Typography

| Breakpoint | Adjustments | Rationale |
|------------|-------------|-----------|
| Mobile (<768px) |          |           |
| Tablet (768-1024px) |     |           |
| Desktop (>1024px) |       |           |

**Strategy**:
- [ ] Fluid typography (clamp)
- [ ] Breakpoint-based
- [ ] No adjustment needed

## Accessibility Checklist

- [ ] Minimum font size: 12px (1.2rem)
- [ ] Body text: 16px (1.6rem) minimum
- [ ] Line height appropriate for size
- [ ] Sufficient color contrast (WCAG 2.1 AA)
- [ ] Text scales to 200% without breaking layout
- [ ] No information conveyed by typography alone

## Validation

### Hierarchy Test
- [ ] Squint test passes (hierarchy clear when blurred)
- [ ] Primary text seen first
- [ ] Secondary text seen second
- [ ] Tertiary text seen last

### Consistency Test
- [ ] All sizes from typography scale
- [ ] All weights from standard set (300, 400, 500, 600, 700)
- [ ] Consistent patterns across similar elements
- [ ] No random px values

### Readability Test
- [ ] Comfortable reading experience
- [ ] Appropriate line length
- [ ] Sufficient line height
- [ ] No walls of text

## Implementation Notes

```
Key decisions:
-
-
-

Challenges:
-
-
-

Special considerations:
-
-
-
```

## Sign-off

- [ ] Typography specification approved
- [ ] Accessibility validated
- [ ] Ready for implementation

**Approved by**: _____________________
**Date**: _____________________
