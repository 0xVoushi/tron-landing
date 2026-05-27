# Figma Integration Guide

Guide to using Figma for design handoff and collaboration in the Studio project.

---

## Design System in Figma

### Component Library Organization

```
Design System (Page 1)
├── Foundations
│   ├── Colors (Light & Dark Mode)
│   ├── Typography Scale
│   ├── Spacing Scale
│   ├── Border Radius
│   └── Shadows
├── Components
│   ├── Buttons (Primary, Secondary, Danger)
│   ├── Inputs (Text, Select, Checkbox, Radio)
│   ├── Cards
│   ├── Tables
│   ├── Modals
│   └── Navigation (Sidebar, Breadcrumbs, Tabs)
└── Patterns
    ├── Page Header
    ├── Data Table
    ├── Form Layout
    └── Empty States
```

### Design Tokens

**Use Figma Variables** to sync with code:

```
Colors:
  - color/primary/500 → #1890ff
  - color/text/primary → #262626 (light) / #ffffff (dark)

Spacing:
  - spacing/xs → 4px
  - spacing/sm → 8px
  - spacing/md → 16px
  - spacing/lg → 24px

Typography:
  - font/size/sm → 1.2rem (12px)
  - font/size/md → 1.4rem (14px)
  - font/weight/regular → 400
```

**Export tokens** to JSON and import into theme system.

---

## Design Handoff

### Component Naming Convention

Match React component names:

```
Figma Component       →  React Component
Button/Primary        →  <Button variant="primary">
Input/Text            →  <Input type="text">
Card/Default          →  <Card>
Modal/Confirmation    →  <Modal variant="confirmation">
```

### Variants and Props

Use Figma variants to show component states:

```
Button Component
├── Variant: Primary, Secondary, Danger
├── Size: Small, Medium, Large
├── State: Default, Hover, Active, Disabled
```

Maps to React props:
```jsx
<Button variant="primary" size="medium" disabled={false}>
  Save
</Button>
```

### Specs and Measurements

Use **Auto Layout** in Figma:
- Padding: 12px 24px (top/bottom left/right)
- Gap: 8px between items
- Alignment: Center

Developers can inspect and copy CSS directly.

---

## Interactive Prototypes

### User Flows

Link frames to show interactions:

```
Login Page → (Click "Login") → Dashboard
            → (Click "Forgot?") → Reset Password
```

### Transition Settings

Use realistic transitions:
- **Instant**: For tabs, dropdowns
- **Dissolve (200ms)**: For overlays, modals
- **Smart Animate (300ms)**: For cards, slides

---

## Design Annotations

### Annotation Examples

```
[Button with note]:
"Shows loading spinner and disables on click.
Re-enables after API response (success or error)."

[Input with note]:
"Validates on blur. Shows error message below field
if email format is invalid."
```

---

## Figma-to-Code Workflow

### 1. Designer: Create mockups
- Use design system components
- Apply design tokens
- Create interactive prototype

### 2. Designer: Prepare handoff
- Add annotations for dynamic behavior
- Link to similar patterns in codebase
- Create specs for spacing, sizing

### 3. Developer: Inspect design
- Use Figma Dev Mode
- Copy CSS values
- Export assets (icons, images)

### 4. Developer: Implement
- Build using React + Tailwind CSS
- Use theme tokens from design system
- Match specs from Figma

### 5. Designer: Review implementation
- Check in browser (light & dark mode)
- Verify responsive behavior
- Provide feedback on details

---

## Figma Plugins for Accessibility

### Stark
- Check color contrast (WCAG AA/AAA)
- Simulate color blindness
- Generate accessibility reports

### A11y - Color Contrast Checker
- Quick WCAG contrast validation
- Highlights failing combinations

### Design Tokens
- Export design tokens to JSON
- Sync with theme system in code

---

## Studio Design File Structure

```
Studio-UI.fig
├── Page 1: Design System
│   └── Component library, tokens, foundations
├── Page 2: Scenarios Feature
│   └── Scenario list, detail, wizard
├── Page 3: Players Feature
│   └── Player list, detail, tabs
├── Page 4: Items Feature
│   └── Item catalog, detail, create modal
└── Page 5: Prototypes
    └── Interactive flows for testing
```

---

## Collaboration Best Practices

### Comments and Feedback

```
Designer → Developer:
"This dropdown shows all available segments.
If list is long (10+), add search within dropdown."

Developer → Designer:
"API returns max 100 items per page.
Should we add a 'Load More' button or pagination?"
```

### Version History

Use Figma version history to track changes:
- Save version before major changes
- Name versions clearly: "v2.1 - Added dark mode"
- Restore previous versions if needed

---

**Recommended Workflow**: Design in Figma, implement in code, review in browser, iterate together.
