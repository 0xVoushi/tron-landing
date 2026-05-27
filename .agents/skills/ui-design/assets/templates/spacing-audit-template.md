# Spacing Audit Template

Use this template to audit spacing consistency across components or pages.

## Audit Information

- **Component/Page**: _____________________
- **File Path**: _____________________
- **Date**: _____________________
- **Auditor**: _____________________

## Studio Spacing Scale Reference

| Token | Value | Usage |
|-------|-------|-------|
| xs    | 0.4rem (4px)  | Tight spacing within components |
| sm    | 0.8rem (8px)  | Related elements, icon + text |
| md    | 1.6rem (16px) | Default spacing, paragraph spacing |
| lg    | 2.4rem (24px) | Section spacing, form fields |
| xl    | 3.2rem (32px) | Major sections, card spacing |
| xxl   | 4.8rem (48px) | Page-level spacing, hero sections |

## Padding Audit

### Interior Spacing (Padding)

| Element | Padding Value | Uses Scale? | Notes |
|---------|---------------|-------------|-------|
|         |               | [ ] Yes [ ] No |       |
|         |               | [ ] Yes [ ] No |       |
|         |               | [ ] Yes [ ] No |       |
|         |               | [ ] Yes [ ] No |       |
|         |               | [ ] Yes [ ] No |       |

**Issues Found**:
- [ ] Hardcoded px values instead of theme tokens
- [ ] Non-scale rem values
- [ ] Inconsistent padding across similar elements
- [ ] Missing padding (cramped interiors)

## Margin Audit

### Exterior Spacing (Margin)

| Element | Margin Value | Uses Scale? | Notes |
|---------|--------------|-------------|-------|
|         |              | [ ] Yes [ ] No |       |
|         |              | [ ] Yes [ ] No |       |
|         |              | [ ] Yes [ ] No |       |
|         |              | [ ] Yes [ ] No |       |
|         |              | [ ] Yes [ ] No |       |

**Issues Found**:
- [ ] Hardcoded px values instead of theme tokens
- [ ] Non-scale rem values
- [ ] Inconsistent margins between similar sections
- [ ] Negative margins (potential layout issue)

## Proximity Grouping

### Related Elements (Should be close)

| Group | Spacing | Correct? | Recommendation |
|-------|---------|----------|----------------|
|       |         | [ ] Yes [ ] No |                |
|       |         | [ ] Yes [ ] No |                |
|       |         | [ ] Yes [ ] No |                |

**Expected**: xs (0.4rem) or sm (0.8rem) for related elements

### Separate Sections (Should be far)

| Section Boundary | Spacing | Correct? | Recommendation |
|------------------|---------|----------|----------------|
|                  |         | [ ] Yes [ ] No |                |
|                  |         | [ ] Yes [ ] No |                |
|                  |         | [ ] Yes [ ] No |                |

**Expected**: lg (2.4rem), xl (3.2rem), or xxl (4.8rem) for section separation

## Gap Usage (Flexbox/Grid)

| Container | Gap Value | Uses Scale? | Notes |
|-----------|-----------|-------------|-------|
|           |           | [ ] Yes [ ] No |       |
|           |           | [ ] Yes [ ] No |       |
|           |           | [ ] Yes [ ] No |       |

## Responsive Spacing

| Breakpoint | Spacing Adjustments | Appropriate? |
|------------|---------------------|--------------|
| Mobile (<768px) |                 | [ ] Yes [ ] No |
| Tablet (768-1024px) |            | [ ] Yes [ ] No |
| Desktop (>1024px) |               | [ ] Yes [ ] No |

**Expected Pattern**: Reduce spacing on smaller screens (xxl → xl → lg)

## Common Issues Found

- [ ] **Random spacing values**: Not from scale
- [ ] **Inconsistent spacing**: Similar elements have different spacing
- [ ] **No breathing room**: Everything cramped
- [ ] **Too much space**: Excessive whitespace breaks relationships
- [ ] **Wrong spacing type**: Using margin instead of padding (or vice versa)
- [ ] **Not responsive**: Same spacing on all screen sizes

## Recommendations

### High Priority Fixes
1. _______________________________________________________
2. _______________________________________________________
3. _______________________________________________________

### Medium Priority Improvements
1. _______________________________________________________
2. _______________________________________________________
3. _______________________________________________________

### Low Priority Enhancements
1. _______________________________________________________
2. _______________________________________________________
3. _______________________________________________________

## Score

- **Scale Usage**: ___% (theme.spacing tokens / total spacing declarations)
- **Consistency**: [ ] Excellent [ ] Good [ ] Needs Work [ ] Poor
- **Proximity**: [ ] Excellent [ ] Good [ ] Needs Work [ ] Poor
- **Overall**: [ ] Excellent [ ] Good [ ] Needs Work [ ] Poor

## Action Items

- [ ] Replace hardcoded values with theme tokens
- [ ] Fix inconsistent spacing between similar elements
- [ ] Adjust proximity grouping (tighten related, separate unrelated)
- [ ] Implement responsive spacing strategy
- [ ] Document spacing decisions

## Sign-off

**Audit Completed by**: _____________________
**Date**: _____________________
**Re-audit Scheduled**: _____________________
