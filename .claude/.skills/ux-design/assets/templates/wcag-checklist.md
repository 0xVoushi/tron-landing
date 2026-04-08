# WCAG 2.1 Level AA Accessibility Checklist

**Page/Feature**: [What you're auditing]
**Date**: [Date]
**Auditor**: [Your name]

---

## Perceivable

### 1.1 Text Alternatives

- [ ] **1.1.1 Non-text Content (A)**: All images have alt text or aria-label

---

### 1.2 Time-based Media

- [ ] **1.2.1 Audio-only and Video-only (A)**: Transcripts provided
- [ ] **1.2.2 Captions (A)**: Pre-recorded video has captions
- [ ] **1.2.4 Captions (Live) (AA)**: Live video has captions
- [ ] **1.2.5 Audio Description (AA)**: Pre-recorded video has audio description

---

### 1.3 Adaptable

- [ ] **1.3.1 Info and Relationships (A)**: Semantic HTML used (headings, labels, tables)
- [ ] **1.3.2 Meaningful Sequence (A)**: Reading order is logical
- [ ] **1.3.3 Sensory Characteristics (A)**: Instructions don't rely solely on shape/color/position
- [ ] **1.3.4 Orientation (AA)**: Works in portrait and landscape

---

### 1.4 Distinguishable

- [ ] **1.4.1 Use of Color (A)**: Color not sole indicator (use icons + color)
- [ ] **1.4.2 Audio Control (A)**: Can pause/stop/control audio that plays automatically
- [ ] **1.4.3 Contrast (Minimum) (AA)**: 4.5:1 for normal text, 3:1 for large text ⭐
- [ ] **1.4.4 Resize Text (AA)**: Works at 200% zoom
- [ ] **1.4.5 Images of Text (AA)**: Use real text instead of images
- [ ] **1.4.10 Reflow (AA)**: Content reflows at 320px width (no horizontal scroll)
- [ ] **1.4.11 Non-text Contrast (AA)**: UI components have 3:1 contrast ⭐
- [ ] **1.4.12 Text Spacing (AA)**: Works with increased spacing
- [ ] **1.4.13 Content on Hover or Focus (AA)**: Can dismiss, hoverable, persistent

---

## Operable

### 2.1 Keyboard Accessible

- [ ] **2.1.1 Keyboard (A)**: All functionality available via keyboard ⭐
- [ ] **2.1.2 No Keyboard Trap (A)**: Focus can always move away
- [ ] **2.1.4 Character Key Shortcuts (A)**: Single-key shortcuts can be turned off/remapped

---

### 2.2 Enough Time

- [ ] **2.2.1 Timing Adjustable (A)**: User can adjust or disable time limits
- [ ] **2.2.2 Pause, Stop, Hide (A)**: Can pause moving/blinking content (5+ seconds)

---

### 2.3 Seizures

- [ ] **2.3.1 Three Flashes or Below Threshold (A)**: No content flashes 3+ times/second

---

### 2.4 Navigable

- [ ] **2.4.1 Bypass Blocks (A)**: "Skip to main content" link provided
- [ ] **2.4.2 Page Titled (A)**: Pages have descriptive titles
- [ ] **2.4.3 Focus Order (A)**: Logical tab order ⭐
- [ ] **2.4.4 Link Purpose (In Context) (A)**: Link purpose is clear
- [ ] **2.4.5 Multiple Ways (AA)**: Multiple ways to find pages (nav, search, sitemap)
- [ ] **2.4.6 Headings and Labels (AA)**: Descriptive headings and labels
- [ ] **2.4.7 Focus Visible (AA)**: Visible focus indicator on all elements ⭐

---

### 2.5 Input Modalities

- [ ] **2.5.1 Pointer Gestures (A)**: Multi-point gestures have single-point alternative
- [ ] **2.5.2 Pointer Cancellation (A)**: Can abort or undo pointer actions
- [ ] **2.5.3 Label in Name (A)**: Visible label is part of accessible name
- [ ] **2.5.4 Motion Actuation (A)**: Device motion can be disabled

---

## Understandable

### 3.1 Readable

- [ ] **3.1.1 Language of Page (A)**: `<html lang="en">` set
- [ ] **3.1.2 Language of Parts (AA)**: Language of parts set if different from page

---

### 3.2 Predictable

- [ ] **3.2.1 On Focus (A)**: Focus doesn't cause unexpected change
- [ ] **3.2.2 On Input (A)**: Input change doesn't cause unexpected change
- [ ] **3.2.3 Consistent Navigation (AA)**: Navigation is consistent across pages
- [ ] **3.2.4 Consistent Identification (AA)**: Components identified consistently

---

### 3.3 Input Assistance

- [ ] **3.3.1 Error Identification (A)**: Errors identified and described in text ⭐
- [ ] **3.3.2 Labels or Instructions (A)**: Labels provided for inputs
- [ ] **3.3.3 Error Suggestion (AA)**: Error suggestions provided
- [ ] **3.3.4 Error Prevention (Legal, Financial, Data) (AA)**: Can review/confirm before submitting

---

## Robust

### 4.1 Compatible

- [ ] **4.1.1 Parsing (A)**: Valid HTML (no duplicate IDs) ⭐
- [ ] **4.1.2 Name, Role, Value (A)**: Name and role programmatically determined ⭐
- [ ] **4.1.3 Status Messages (AA)**: Status messages announced (aria-live)

---

## Testing Tools Used

- [ ] Lighthouse accessibility audit
- [ ] axe DevTools browser extension
- [ ] W3C HTML Validator
- [ ] Color contrast checker (`scripts/check-contrast.py` or WebAIM)
- [ ] Screen reader (VoiceOver / NVDA / JAWS)
- [ ] Keyboard navigation (Tab through entire page)

---

## Issues Found

### Critical (Must Fix)

1. **[Issue description]**
   - Criterion: [e.g., 2.4.7 Focus Visible]
   - Impact: [How it affects users]
   - Location: [Where in the interface]
   - Fix: [How to resolve]

---

### High Priority (Should Fix)

1. **[Issue]**
   - Criterion:
   - Impact:
   - Location:
   - Fix:

---

### Medium Priority (Important)

1. **[Issue]**
   - Criterion:
   - Impact:
   - Location:
   - Fix:

---

### Low Priority (Nice to Have)

1. **[Issue]**
   - Criterion:
   - Impact:
   - Location:
   - Fix:

---

## Summary

- **Total WCAG Criteria Checked**: [Number] / 50
- **Passed**: [Number]
- **Failed**: [Number]
- **Not Applicable**: [Number]
- **Issues Found**: [Number total]
  - Critical: [Number]
  - High: [Number]
  - Medium: [Number]
  - Low: [Number]

---

## Compliance Status

- [ ] **WCAG 2.1 Level A**: [Pass / Fail]
- [ ] **WCAG 2.1 Level AA**: [Pass / Fail]

---

## Next Steps

1. [Action item #1]
2. [Action item #2]
3. [Action item #3]

---

## Usage Notes

- **⭐ Critical criteria**: Focus on these first (most common failures)
- **Frequency**: Audit before each major release
- **Tools**: Combine automated tools with manual testing
- **Screen reader testing**: Essential - automated tools miss many issues
- **Real users**: Best validation is testing with users who have disabilities
