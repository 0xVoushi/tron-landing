# Visual Hierarchy Checklist

Use this checklist before implementing components to ensure clear visual hierarchy.

## Component Information

- **Component Name**: _____________________
- **File Path**: _____________________
- **Date**: _____________________
- **Designer/Developer**: _____________________

## Size Hierarchy

- [ ] Primary element uses largest size (xxxl, xxl, or xl)
- [ ] Secondary elements are 1-3 levels smaller than primary
- [ ] Tertiary elements are smallest (xs or sm)
- [ ] Size jumps follow scale (no random px values)
- [ ] All font sizes from theme.typography.sizes

**Notes**:
```
Primary size: __________
Secondary size: __________
Tertiary size: __________
```

## Color Hierarchy

- [ ] Primary content uses darkest color (text.primary)
- [ ] Secondary content uses lighter color (text.secondary)
- [ ] Tertiary/metadata uses lightest color (text.tertiary)
- [ ] Contrast ratios meet WCAG 2.1 AA (4.5:1 for normal text)
- [ ] Color reinforces size hierarchy (not conflicts)

**Color Assignments**:
```
Primary: __________
Secondary: __________
Tertiary: __________
```

## Weight Hierarchy

- [ ] Primary headings use bold weight (600-700)
- [ ] Secondary headings use semibold (600)
- [ ] Body text uses regular weight (400)
- [ ] Inline emphasis uses medium or semibold (500-600)
- [ ] All weights from standard set (300, 400, 500, 600, 700)

**Weight Assignments**:
```
Primary: __________
Secondary: __________
Body: __________
```

## Position Hierarchy

- [ ] Most important element in primary optical area (top-left for F-pattern)
- [ ] Visual flow follows natural reading pattern (F or Z)
- [ ] Actions/CTAs at natural endpoint (bottom-right)
- [ ] Related elements grouped by proximity

**Layout Pattern**:
- [ ] F-pattern (content-heavy)
- [ ] Z-pattern (action-oriented)
- [ ] Gutenberg (four quadrants)
- [ ] Other: __________

## Contrast Hierarchy

- [ ] Primary action has highest contrast (saturated background)
- [ ] Secondary actions have medium contrast (borders)
- [ ] Tertiary actions have low contrast (text-only)
- [ ] Disabled states have lowest contrast

**Contrast Validation**:
```
Primary action contrast: __________
Background contrast: __________
Text contrast: __________
```

## Spacing Hierarchy

- [ ] Interior padding creates comfortable hit areas
- [ ] Related elements have tight spacing (xs, sm)
- [ ] Separate sections have large spacing (lg, xl, xxl)
- [ ] All spacing from theme.spacing scale
- [ ] No hardcoded px/rem values

**Spacing Assignments**:
```
Interior padding: __________
Element gaps: __________
Section spacing: __________
```

## Common Mistakes Check

- [ ] Not too many focal points (1 primary + 2-3 secondary max)
- [ ] Not everything centered (left-align for scanability)
- [ ] Not random spacing (consistent scale usage)
- [ ] Not same size/color for everything (clear differentiation)
- [ ] Not competing elements (clear priority)

## Final Validation

- [ ] Squint test passes (blur eyes—hierarchy still clear)
- [ ] Primary element seen first
- [ ] Secondary elements seen second
- [ ] Flow is intuitive
- [ ] Accessibility requirements met

## Implementation Notes

```
Key decisions:
-
-
-

Potential issues:
-
-
-

Next steps:
-
-
-
```

## Sign-off

- [ ] Visual hierarchy approved
- [ ] Ready for implementation

**Approved by**: _____________________
**Date**: _____________________
