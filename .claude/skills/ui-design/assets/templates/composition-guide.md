# Layout Composition Guide Template

Use this template to plan and document layout composition decisions.

## Layout Information

- **Component/Page**: _____________________
- **File Path**: _____________________
- **Date**: _____________________
- **Designer/Developer**: _____________________

## Layout System Choice

**Primary Layout System**:
- [ ] CSS Grid (two-dimensional layout)
- [ ] Flexbox (one-dimensional layout)
- [ ] Hybrid (Grid for structure, Flex for components)

**Rationale**: _________________________________________________

## Grid Structure (if using CSS Grid)

### Grid Template

```css
grid-template-columns: ________________
grid-template-rows: ________________
grid-template-areas:
  "_____ _____ _____"
  "_____ _____ _____"
  "_____ _____ _____";
gap: ________________
```

### Grid Areas

| Area Name | Purpose | Span |
|-----------|---------|------|
|           |         |      |
|           |         |      |
|           |         |      |

**Responsive Behavior**:
- Mobile: _____________________________________
- Tablet: _____________________________________
- Desktop: _____________________________________

## Flexbox Structure (if using Flexbox)

### Flex Container

```css
flex-direction: ________________ (row | column)
justify-content: ________________ (flex-start | center | space-between | etc.)
align-items: ________________ (stretch | flex-start | center | etc.)
gap: ________________
```

### Flex Items

| Item | flex-grow | flex-shrink | flex-basis | Notes |
|------|-----------|-------------|------------|-------|
|      |           |             |            |       |
|      |           |             |            |       |
|      |           |             |            |       |

## Alignment Strategy

### Horizontal Alignment
- [ ] Left-aligned (default for text-heavy)
- [ ] Center-aligned (special cases only)
- [ ] Right-aligned (numbers, opposite-side elements)
- [ ] Space-between (toolbars, headers)
- [ ] Space-evenly (equal distribution)

### Vertical Alignment
- [ ] Top-aligned
- [ ] Center-aligned
- [ ] Bottom-aligned
- [ ] Stretch (fill container)
- [ ] Baseline (text alignment)

## Visual Flow Pattern

**Primary Pattern**:
- [ ] F-pattern (content-heavy, reading flow)
- [ ] Z-pattern (action-oriented, CTA focus)
- [ ] Gutenberg Diagram (four quadrants)
- [ ] Custom: _______________________________

### Flow Mapping

```
1. First attention: _________________________ (top-left / center / etc.)
2. Second attention: ________________________
3. Third attention: _________________________
4. Final attention: _________________________ (CTA / next action)
```

### Directional Cues

- [ ] Arrows/icons guide flow
- [ ] Lines connect related elements
- [ ] Whitespace creates paths
- [ ] Color progression guides eye
- [ ] Size hierarchy directs attention

## Balance Strategy

**Balance Type**:
- [ ] Symmetrical (formal, stable)
- [ ] Asymmetrical (dynamic, interesting)

### Visual Weight Distribution

| Area | Content | Visual Weight | Balancing Elements |
|------|---------|---------------|---------------------|
| Top-left |      | Heavy/Light   |                     |
| Top-right |     | Heavy/Light   |                     |
| Bottom-left |   | Heavy/Light   |                     |
| Bottom-right |  | Heavy/Light   |                     |

**Balance Validation**:
- [ ] No single area dominates (unless intentional)
- [ ] Opposing areas balance each other
- [ ] Asymmetry feels intentional, not accidental

## Spacing & Rhythm

### Interior Spacing (Padding)

| Container | Padding | Purpose |
|-----------|---------|---------|
|           |         |         |
|           |         |         |

### Exterior Spacing (Margins/Gaps)

| Between Elements | Spacing | Relationship |
|------------------|---------|--------------|
|                  |         | Related / Separate |
|                  |         | Related / Separate |

### Vertical Rhythm

- [ ] Consistent vertical spacing (multiples of 0.8rem)
- [ ] Spacing reflects content relationships
- [ ] No random gaps

## Responsive Strategy

### Breakpoints

| Breakpoint | Layout Changes | Rationale |
|------------|----------------|-----------|
| Mobile (<768px) |              |           |
| Tablet (768-1024px) |          |           |
| Desktop (>1024px) |            |           |

### Mobile-First Approach

**Mobile Layout**:
```
- Columns: _______
- Stack order: _______
- Hidden elements: _______
```

**Progressive Enhancement**:
```
→ Tablet: _______________________________
→ Desktop: ______________________________
```

## Composition Checklist

### Structure
- [ ] Clear grid or flex system
- [ ] Semantic HTML structure
- [ ] Logical nesting
- [ ] No excessive depth (max 3-4 levels)

### Alignment
- [ ] Consistent edge alignment
- [ ] Elements align to grid/baseline
- [ ] No random positioning
- [ ] Text left-aligned (unless special case)

### Balance
- [ ] Visual weight balanced across layout
- [ ] No awkward empty spaces
- [ ] Intentional asymmetry (if applicable)
- [ ] Comfortable, not cramped

### Flow
- [ ] Natural eye movement path
- [ ] Important elements in primary optical areas
- [ ] Actions at natural endpoints
- [ ] Directional cues support flow

### Spacing
- [ ] Consistent spacing scale usage
- [ ] Related elements close (xs, sm)
- [ ] Separate sections far (lg, xl, xxl)
- [ ] Adequate whitespace/breathing room

### Responsiveness
- [ ] Mobile layout planned
- [ ] Breakpoints defined
- [ ] Content reflows gracefully
- [ ] No horizontal scrolling (except tables)

## Common Mistakes to Avoid

- [ ] Not everything centered (reduces scanability)
- [ ] Not too many focal points (1 primary + 2-3 secondary max)
- [ ] Not random spacing (use consistent scale)
- [ ] Not fixed pixel widths (use flexible units)
- [ ] Not excessive nesting (keep it simple)
- [ ] Not ignoring visual flow (guide the eye)

## Accessibility Considerations

- [ ] Visual order matches DOM order (keyboard navigation)
- [ ] Adequate touch targets (min 44x44px)
- [ ] Responsive reflow at 200% zoom
- [ ] No information conveyed by layout alone

## Implementation Notes

### Technical Approach
```
Layout system: _______________________
Container queries: [ ] Yes [ ] No
Responsive strategy: _______________________
```

### Key Decisions
```
1. _________________________________________
2. _________________________________________
3. _________________________________________
```

### Potential Challenges
```
1. _________________________________________
2. _________________________________________
3. _________________________________________
```

### Dependencies
```
- Theme tokens: _______________________
- Component library: _______________________
- Browser support: _______________________
```

## Validation

- [ ] Squint test (structure clear when blurred)
- [ ] Mobile layout functional
- [ ] Tablet layout functional
- [ ] Desktop layout functional
- [ ] Accessibility requirements met
- [ ] Performance acceptable

## Sign-off

- [ ] Composition approved
- [ ] Responsive strategy validated
- [ ] Ready for implementation

**Approved by**: _____________________
**Date**: _____________________
