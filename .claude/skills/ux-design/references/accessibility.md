# WCAG 2.1 Level AA Accessibility Guide

Complete guide to Web Content Accessibility Guidelines (WCAG) 2.1 Level AA compliance for the Studio admin dashboard.

---

## Table of Contents

1. [Why Accessibility Matters](#why-accessibility-matters)
2. [The Four Principles (POUR)](#the-four-principles-pour)
3. [Level A & AA Criteria](#level-a--aa-criteria)
4. [Testing Checklist](#testing-checklist)
5. [Common ARIA Patterns](#common-aria-patterns)
6. [React-Specific Accessibility](#react-specific-accessibility)
7. [Tools and Resources](#tools-and-resources)

---

## Why Accessibility Matters

### Legal Compliance
- **ADA (Americans with Disabilities Act)**: Applies to US businesses
- **Section 508**: US federal government websites must be accessible
- **EAA (European Accessibility Act)**: EU requirement for digital products
- **AODA (Accessibility for Ontarians with Disabilities Act)**: Canadian provincial law

**Penalties for non-compliance**: Lawsuits, fines up to $75,000-$150,000, negative publicity

### Business Benefits
- **Larger audience**: 15% of global population has some form of disability (1+ billion people)
- **Better UX for all**: Curb-cut effect - features for accessibility help everyone
- **SEO benefits**: Semantic HTML and alt text improve search rankings
- **Reduced support costs**: Clear, accessible interfaces reduce confusion and support tickets

### User Impact
- **Visual impairments**: Blindness, low vision, color blindness (8% of men, 0.5% of women)
- **Motor impairments**: Difficulty using mouse, tremors, limited mobility
- **Cognitive impairments**: Dyslexia, attention disorders, memory issues
- **Hearing impairments**: Deafness or hard of hearing

---

## The Four Principles (POUR)

WCAG 2.1 is organized around four principles. All content must be:

### 1. Perceivable
Users must be able to perceive the information being presented.

**Key requirements**:
- Text alternatives for non-text content (images, icons)
- Captions and transcripts for audio/video
- Content can be presented in different ways without losing meaning
- Sufficient color contrast (4.5:1 for normal text, 3:1 for large text)

### 2. Operable
Users must be able to operate the interface.

**Key requirements**:
- All functionality available via keyboard
- Users have enough time to read and use content
- Content doesn't cause seizures (no flashing more than 3 times per second)
- Users can easily navigate, find content, and determine where they are

### 3. Understandable
Users must be able to understand the information and operation of the interface.

**Key requirements**:
- Text is readable and understandable
- Content appears and operates in predictable ways
- Users are helped to avoid and correct mistakes (form validation, error messages)

### 4. Robust
Content must be robust enough to be interpreted reliably by a wide variety of user agents, including assistive technologies.

**Key requirements**:
- Valid HTML markup
- Name, role, and value are programmatically determined for all UI components
- Status messages can be programmatically determined (aria-live)

---

## Level A & AA Criteria

WCAG has three conformance levels: A (minimum), AA (mid-range, legally required), AAA (highest). We target **Level AA**.

### Perceivable

#### 1.1 Text Alternatives (A)

**1.1.1 Non-text Content (A)**
All non-text content has a text alternative.

```jsx
// ✅ Good
<img src="player-avatar.png" alt="Player avatar showing level 42 warrior" />
<button aria-label="Delete item">
  <TrashIcon />
</button>

// ❌ Bad
<img src="player-avatar.png" /> {/* Missing alt */}
<button><TrashIcon /></button> {/* No accessible name */}
```

**Exceptions**:
- Decorative images: Use `alt=""` (empty, not missing)
- CAPTCHA: Provide alternative forms
- Pure decoration: Can be hidden from screen readers

---

#### 1.2 Time-based Media (A, AA)

For admin dashboards, this rarely applies unless you have tutorial videos or embedded content.

**1.2.1 Audio-only and Video-only (A)**: Provide transcripts
**1.2.2 Captions (A)**: Pre-recorded video needs captions
**1.2.4 Captions (Live) (AA)**: Live video needs captions
**1.2.5 Audio Description (AA)**: Pre-recorded video needs audio description

---

#### 1.3 Adaptable (A)

**1.3.1 Info and Relationships (A)**
Structure, relationships, and sequences can be programmatically determined.

```jsx
// ✅ Good - Semantic HTML
<form>
  <label htmlFor="email">Email</label>
  <input id="email" type="email" />
</form>

<table>
  <thead>
    <tr><th>Name</th><th>Role</th></tr>
  </thead>
  <tbody>
    <tr><td>Alice</td><td>Admin</td></tr>
  </tbody>
</table>

// ❌ Bad - Divs with no semantic meaning
<div className="form">
  <span>Email</span>
  <div className="input">...</div>
</div>
```

**1.3.2 Meaningful Sequence (A)**
Content order is logical when presented sequentially.

- Tab order follows visual order (top to bottom, left to right)
- CSS doesn't reorder content in confusing ways

**1.3.3 Sensory Characteristics (A)**
Don't rely solely on shape, size, location, or color.

```jsx
// ✅ Good
<p>Click the "Save" button below to save changes</p>

// ❌ Bad
<p>Click the green button on the right</p> {/* Color and position only */}
```

**1.3.4 Orientation (AA)**
Content doesn't restrict view to portrait or landscape unless essential.

- Admin dashboards are typically desktop-first, but should work in either orientation if responsive

---

#### 1.4 Distinguishable (A, AA)

**1.4.1 Use of Color (A)**
Color is not the only visual means of conveying information.

```jsx
// ✅ Good - Icon + color
<span style={{ color: 'red' }}>
  <ErrorIcon /> Error: Invalid email
</span>

// ❌ Bad - Color only
<span style={{ color: 'red' }}>Invalid email</span>
```

**1.4.2 Audio Control (A)**
If audio plays automatically for more than 3 seconds, provide pause/stop/volume control.

**1.4.3 Contrast (Minimum) (AA)** ⭐ **CRITICAL**
- Normal text: 4.5:1 contrast ratio
- Large text (18pt+ or 14pt+ bold): 3:1 contrast ratio
- UI components and graphics: 3:1 contrast ratio

**Test with**: `python scripts/check-contrast.py "#1890ff" "#ffffff"`

**1.4.4 Resize Text (AA)**
Text can be resized up to 200% without loss of content or functionality.

- Test: Zoom browser to 200% - everything should still work

**1.4.5 Images of Text (AA)**
Use real text instead of images of text (except logos).

**1.4.10 Reflow (AA)**
Content reflows to single column at 320px width without horizontal scrolling.

**1.4.11 Non-text Contrast (AA)** ⭐ **CRITICAL**
UI components and graphical objects have 3:1 contrast against adjacent colors.

- Buttons, input borders, focus indicators, icons

**1.4.12 Text Spacing (AA)**
No loss of content or functionality when users increase:
- Line height to 1.5x font size
- Paragraph spacing to 2x font size
- Letter spacing to 0.12x font size
- Word spacing to 0.16x font size

**1.4.13 Content on Hover or Focus (AA)**
When content appears on hover or focus:
- Can be dismissed (Escape key)
- Hoverable (pointer can move to content without it disappearing)
- Persistent (doesn't disappear until dismissed or no longer relevant)

---

### Operable

#### 2.1 Keyboard Accessible (A)

**2.1.1 Keyboard (A)** ⭐ **CRITICAL**
All functionality available via keyboard.

**Common keyboard patterns**:
- Tab: Next focusable element
- Shift + Tab: Previous focusable element
- Enter: Activate button or link
- Space: Activate button, check checkbox
- Arrow keys: Navigate menus, tabs, radio groups
- Escape: Close modal or dropdown

```jsx
// ✅ Good - Native button is keyboard accessible
<button onClick={handleClick}>Save</button>

// ❌ Bad - Div with click handler is not keyboard accessible
<div onClick={handleClick}>Save</div>

// ✅ Acceptable - Div with proper keyboard support
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  }}
>
  Save
</div>
```

**2.1.2 No Keyboard Trap (A)**
Keyboard focus can always move away from a component.

- Exception: Modals (intentional focus trap)
- Provide Escape key to exit modals

**2.1.4 Character Key Shortcuts (A)**
If single-key shortcuts exist, user can turn them off, remap them, or they only work when component has focus.

---

#### 2.2 Enough Time (A)

**2.2.1 Timing Adjustable (A)**
For time limits, user can turn off, adjust, or extend.

- Exception: Real-time events (live auctions), essential time limits

**2.2.2 Pause, Stop, Hide (A)**
For moving, blinking, scrolling content that lasts more than 5 seconds, provide pause/stop/hide.

---

#### 2.3 Seizures (A)

**2.3.1 Three Flashes or Below Threshold (A)**
No content flashes more than 3 times per second.

---

#### 2.4 Navigable (A, AA)

**2.4.1 Bypass Blocks (A)**
Provide "skip to main content" link.

```jsx
<a href="#main-content" className="skip-link">
  Skip to main content
</a>
<nav>...</nav>
<main id="main-content">...</main>
```

**2.4.2 Page Titled (A)**
Pages have descriptive titles.

```jsx
<Helmet>
  <title>Player Details - John Doe - Studio Dashboard</title>
</Helmet>
```

**2.4.3 Focus Order (A)** ⭐ **CRITICAL**
Focus order is logical and intuitive.

- Tab order matches visual layout (top to bottom, left to right)
- Use `tabIndex={-1}` to remove from tab order, `tabIndex={0}` to add

**2.4.4 Link Purpose (In Context) (A)**
Link purpose is clear from link text or surrounding context.

```jsx
// ✅ Good
<a href="/players/123">View player details</a>

// ❌ Bad
<a href="/players/123">Click here</a>
```

**2.4.5 Multiple Ways (AA)**
Provide multiple ways to find pages (navigation, search, sitemap).

**2.4.6 Headings and Labels (AA)**
Headings and labels describe topic or purpose.

**2.4.7 Focus Visible (AA)** ⭐ **CRITICAL**
Keyboard focus indicator is visible.

```css
/* ✅ Good - Visible focus indicator */
button:focus-visible {
  outline: 2px solid #1890ff;
  outline-offset: 2px;
}

/* ❌ Bad - Removes focus outline */
button:focus {
  outline: none;
}
```

---

#### 2.5 Input Modalities (A)

**2.5.1 Pointer Gestures (A)**
All functionality that uses multi-point or path-based gestures can be operated with single-point pointer.

**2.5.2 Pointer Cancellation (A)**
For functionality using single pointer, at least one is true:
- No down-event: Completion on up-event
- Abort/Undo: Mechanism to abort or undo
- Up reversal: Up-event reverses down-event
- Essential: Down-event is essential

**2.5.3 Label in Name (A)**
For UI components with labels, the visible text is part of the accessible name.

```jsx
// ✅ Good - Label matches accessible name
<button aria-label="Save changes">Save</button>

// ❌ Bad - Label doesn't match accessible name
<button aria-label="Submit">Save</button>
```

**2.5.4 Motion Actuation (A)**
Functionality triggered by device motion can also be operated via UI, and can be disabled.

---

### Understandable

#### 3.1 Readable (A, AA)

**3.1.1 Language of Page (A)**
Page language is programmatically determined.

```html
<html lang="en">
```

**3.1.2 Language of Parts (AA)**
Language of parts is programmatically determined if different from page language.

```jsx
<p lang="es">Hola mundo</p>
```

---

#### 3.2 Predictable (A, AA)

**3.2.1 On Focus (A)**
Receiving focus doesn't initiate change of context.

- Don't auto-submit forms on focus
- Don't change page on focus

**3.2.2 On Input (A)**
Changing input doesn't cause unexpected change of context.

- Don't auto-navigate when selecting dropdown
- Warn before auto-submitting

**3.2.3 Consistent Navigation (AA)**
Repeated navigation is consistent across pages.

**3.2.4 Consistent Identification (AA)**
Components with same functionality are identified consistently.

---

#### 3.3 Input Assistance (A, AA)

**3.3.1 Error Identification (A)** ⭐ **CRITICAL**
Errors are identified and described to user in text.

```jsx
// ✅ Good
<input type="email" aria-invalid="true" aria-describedby="email-error" />
<p id="email-error" role="alert">Email must include @</p>

// ❌ Bad
<input type="email" style={{ borderColor: 'red' }} /> {/* Color only */}
```

**3.3.2 Labels or Instructions (A)**
Labels or instructions provided for user input.

**3.3.3 Error Suggestion (AA)**
If error is detected, suggestions for correction provided.

```jsx
// ✅ Good
<p role="alert">
  Email format is invalid. Example: user@example.com
</p>

// ❌ Bad
<p role="alert">Invalid input</p>
```

**3.3.4 Error Prevention (Legal, Financial, Data) (AA)**
For pages causing legal commitments or financial transactions:
- Reversible: Submissions are reversible
- Checked: Data is checked for errors
- Confirmed: Mechanism to review and confirm before submitting

---

### Robust

#### 4.1 Compatible (A, AA)

**4.1.1 Parsing (A)** ⭐ **CRITICAL**
Content uses valid HTML.

- No duplicate IDs
- Elements have complete start and end tags
- Elements nested according to spec

**4.1.2 Name, Role, Value (A)** ⭐ **CRITICAL**
For all UI components, name and role can be programmatically determined.

```jsx
// ✅ Good - Native elements have built-in roles
<button>Save</button>
<input type="checkbox" aria-label="Accept terms" />

// ✅ Good - Custom elements with explicit roles
<div role="button" tabIndex={0} aria-label="Save">
  <SaveIcon />
</div>
```

**4.1.3 Status Messages (AA)**
Status messages can be programmatically determined through role or properties.

```jsx
// ✅ Good - aria-live announces changes
<div role="status" aria-live="polite">
  Saved successfully
</div>

// For errors
<div role="alert" aria-live="assertive">
  Error: Failed to save
</div>
```

---

## Testing Checklist

### Automated Tests (5 minutes)

- [ ] Run Lighthouse accessibility audit (Chrome DevTools)
- [ ] Run axe DevTools browser extension
- [ ] Validate HTML (W3C Validator)
- [ ] Check color contrast with `scripts/check-contrast.py`

### Keyboard Navigation (10 minutes)

- [ ] Tab through entire page - all interactive elements reachable
- [ ] Focus order is logical (top to bottom, left to right)
- [ ] All buttons/links activatable with Enter
- [ ] Forms submittable with Enter
- [ ] Modals closeable with Escape
- [ ] Dropdowns navigable with arrow keys
- [ ] No keyboard traps (focus can always move)

### Focus Indicators (5 minutes)

- [ ] All interactive elements show visible focus indicator
- [ ] Focus indicator has sufficient contrast (3:1)
- [ ] Focus indicator at least 2px thick

### Screen Reader (15 minutes)

**Test with VoiceOver (Mac) or NVDA (Windows)**:

- [ ] All images have appropriate alt text
- [ ] Form fields have labels
- [ ] Error messages are announced
- [ ] Button purpose is clear ("Delete item" not just "Delete")
- [ ] Headings provide structure (h1, h2, h3)
- [ ] Tables have headers
- [ ] Dynamic content changes are announced (aria-live)

**VoiceOver shortcuts** (Mac):
- Cmd + F5: Turn on VoiceOver
- VO + Right Arrow: Next item (VO = Ctrl + Option)
- VO + Space: Activate button/link
- VO + U: Open rotor (headings, links, form controls)

### Color and Contrast (5 minutes)

- [ ] All text meets 4.5:1 contrast (normal) or 3:1 (large)
- [ ] UI components meet 3:1 contrast
- [ ] Information not conveyed by color alone (icons + color)
- [ ] Works in grayscale (simulate color blindness)

### Zoom and Reflow (5 minutes)

- [ ] Page works at 200% zoom (Chrome: Cmd/Ctrl + +)
- [ ] No horizontal scrolling at 320px width (mobile)
- [ ] Text doesn't overlap or get cut off

---

## Common ARIA Patterns

### When to Use ARIA

**First rule of ARIA**: Don't use ARIA if native HTML works.

- Use `<button>` instead of `<div role="button">`
- Use `<a href>` for navigation, `<button>` for actions
- Use `<input>`, `<select>`, `<textarea>` for form controls

**Use ARIA when**:
- Native element doesn't exist (tabs, accordions)
- Need to enhance semantics (landmarks, live regions)
- Complex widgets (tree view, date picker, autocomplete)

---

### ARIA Attributes

#### Labeling

**aria-label**: Provides accessible name

```jsx
<button aria-label="Close dialog">
  <CloseIcon />
</button>
```

**aria-labelledby**: References element(s) that label this

```jsx
<div role="dialog" aria-labelledby="dialog-title">
  <h2 id="dialog-title">Confirm Delete</h2>
  ...
</div>
```

**aria-describedby**: References element(s) that describe this

```jsx
<input
  type="password"
  aria-describedby="password-requirements"
/>
<p id="password-requirements">
  Must be 8+ characters with numbers and symbols
</p>
```

#### States

**aria-expanded**: Whether element is expanded

```jsx
<button aria-expanded={isOpen} onClick={toggleMenu}>
  Menu
</button>
```

**aria-selected**: Whether option is selected (tabs, lists)

```jsx
<div role="tab" aria-selected={isActive}>
  Players
</div>
```

**aria-checked**: Checkbox or radio state (if not using native input)

```jsx
<div role="checkbox" aria-checked={isChecked}>
  Accept terms
</div>
```

**aria-disabled**: Whether element is disabled

```jsx
<button aria-disabled="true" disabled>
  Save
</button>
```

**aria-hidden**: Hides element from screen readers

```jsx
<span aria-hidden="true">
  <DecorativeIcon />
</span>
```

**aria-invalid**: Whether input value is invalid

```jsx
<input
  type="email"
  aria-invalid={hasError}
  aria-describedby="email-error"
/>
{hasError && (
  <p id="email-error" role="alert">Invalid email</p>
)}
```

#### Relationships

**aria-controls**: ID of element controlled by this

```jsx
<button
  aria-expanded={isOpen}
  aria-controls="dropdown-menu"
>
  Options
</button>
<div id="dropdown-menu" hidden={!isOpen}>
  ...
</div>
```

**aria-owns**: Defines parent-child relationship

**aria-activedescendant**: ID of currently active child (for composite widgets like listbox)

#### Live Regions

**aria-live**: Announces dynamic content changes

```jsx
// Polite: Announces when screen reader finishes current task
<div role="status" aria-live="polite">
  Loading...
</div>

// Assertive: Interrupts to announce immediately
<div role="alert" aria-live="assertive">
  Error: Connection lost
</div>
```

---

### Common Widget Patterns

#### Dropdown Menu

```jsx
<button
  aria-haspopup="true"
  aria-expanded={isOpen}
  onClick={toggleMenu}
>
  Actions
</button>
{isOpen && (
  <ul role="menu">
    <li role="menuitem">
      <button onClick={handleEdit}>Edit</button>
    </li>
    <li role="menuitem">
      <button onClick={handleDelete}>Delete</button>
    </li>
  </ul>
)}
```

#### Tabs

```jsx
<div role="tablist">
  <button role="tab" aria-selected={activeTab === 'overview'}>
    Overview
  </button>
  <button role="tab" aria-selected={activeTab === 'details'}>
    Details
  </button>
</div>
<div role="tabpanel" aria-labelledby="overview-tab">
  {/* Overview content */}
</div>
```

#### Modal Dialog

```jsx
<div
  role="dialog"
  aria-labelledby="dialog-title"
  aria-modal="true"
>
  <h2 id="dialog-title">Confirm Action</h2>
  <p>Are you sure?</p>
  <button onClick={handleConfirm}>Confirm</button>
  <button onClick={handleCancel}>Cancel</button>
</div>
```

---

## React-Specific Accessibility

### Focus Management

```jsx
import { useRef, useEffect } from 'react';

function Modal({ isOpen, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Focus close button when modal opens
      closeButtonRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <div role="dialog" aria-modal="true">
      <button ref={closeButtonRef} onClick={onClose}>
        Close
      </button>
      {/* Modal content */}
    </div>
  );
}
```

### Semantic HTML

```jsx
// ✅ Good
<main>
  <header>
    <h1>Dashboard</h1>
  </header>
  <nav aria-label="Main navigation">
    <ul>
      <li><a href="/players">Players</a></li>
    </ul>
  </nav>
  <section>
    <h2>Recent Activity</h2>
    {/* Content */}
  </section>
</main>

// ❌ Bad
<div className="main">
  <div className="header">
    <div className="title">Dashboard</div>
  </div>
  {/* No semantic structure */}
</div>
```

### Forms

```jsx
<form onSubmit={handleSubmit}>
  <label htmlFor="email">
    Email <span aria-label="required">*</span>
  </label>
  <input
    id="email"
    type="email"
    required
    aria-required="true"
    aria-invalid={hasError}
    aria-describedby={hasError ? "email-error" : undefined}
  />
  {hasError && (
    <p id="email-error" role="alert">
      Please enter a valid email address
    </p>
  )}
  <button type="submit">Submit</button>
</form>
```

---

## Tools and Resources

### Browser Extensions

- **axe DevTools** (free, recommended) - Automated accessibility testing
- **WAVE** - Visual feedback about accessibility
- **Lighthouse** (built into Chrome) - Performance + accessibility audit

### Screen Readers

- **VoiceOver** (Mac) - Built-in, Cmd + F5 to enable
- **NVDA** (Windows) - Free, open-source
- **JAWS** (Windows) - Commercial, most popular

### Testing Tools

- **Contrast checker**: `scripts/check-contrast.py` or WebAIM Contrast Checker
- **Color blindness simulator**: Chrome DevTools > Rendering > Emulate vision deficiencies
- **HTML validator**: W3C Markup Validation Service

### Learning Resources

- **WebAIM**: https://webaim.org/ - Comprehensive guides and articles
- **The A11y Project**: https://www.a11yproject.com/ - Checklist and resources
- **WCAG 2.1 official**: https://www.w3.org/TR/WCAG21/
- **MDN Accessibility**: https://developer.mozilla.org/en-US/docs/Web/Accessibility

---

**Remember**: Accessibility is not a one-time checklist. Test with real users, iterate, and keep learning.
