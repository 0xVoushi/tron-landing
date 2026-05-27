# User Flows & Wireframing Guide

Complete guide to planning user flows and creating wireframes for admin dashboard features in the Studio platform.

---

## Table of Contents

1. [User Flow Fundamentals](#user-flow-fundamentals)
2. [Flow Diagram Conventions](#flow-diagram-conventions)
3. [Common Admin Flow Patterns](#common-admin-flow-patterns)
4. [Studio-Specific Flows](#studio-specific-flows)
5. [Wireframing Techniques](#wireframing-techniques)
6. [Tools and Resources](#tools-and-resources)

---

## User Flow Fundamentals

### What is a User Flow?

A user flow is a visual representation of the steps a user takes to complete a task. It shows:
- **Entry points**: Where the user starts
- **Actions**: What the user does at each step
- **Decision points**: Where the flow branches based on conditions
- **Outcomes**: Success, error, or alternative states

### Why Create User Flows?

**Before implementation**:
- Identify all possible paths (happy path, error cases, edge cases)
- Spot missing states or unclear transitions
- Estimate complexity and technical requirements
- Communicate design intent to stakeholders

**During implementation**:
- Reference for developers to understand expected behavior
- Catch gaps in logic or UX

**After implementation**:
- Documentation for future changes
- Onboarding for new team members

### When to Create User Flows

**Always create flows for**:
- New features with multiple steps
- Features with complex logic or branching
- Workflows that span multiple pages
- Features with error handling or validation

**Skip flows for**:
- Simple single-page views (player detail page)
- Minor UI updates (changing button text)
- Styling changes (colors, spacing)

---

## Flow Diagram Conventions

### Standard Flowchart Symbols

```
┌─────────────┐
│   Process   │  Rectangle: Action or process
│   or Step   │
└─────────────┘

     ↓

╱───────────╲
 Decision?    ╱  Diamond: Decision point with Yes/No branches
╲───────────╱

     ↓

┌─────────────┐
│ (i) Display │  Rounded: UI display or page
│   or Page   │
└─────────────┘

     ↓

( Start/End )   Oval: Start or end point
```

### Arrows and Connectors

- **Solid arrow** →: Primary/happy path
- **Dashed arrow** ⤏: Error or alternative path
- **Label arrows**: "Yes", "No", "On success", "On error"

### Color Coding

- **Green**: Success states
- **Red**: Error states
- **Blue**: Information or intermediate states
- **Yellow**: Warning or confirmation states

---

## Common Admin Flow Patterns

### 1. Create Flow (CRUD - Create)

**Pattern**: Entry → Form → Validation → Save → Success/Error

```
Start
  ↓
Click "Create" button
  ↓
Display create form modal/page
  ↓
User fills in fields
  ↓
User clicks "Save"
  ↓
Validate input
  ├─→ [Invalid] Show error messages → Return to form
  └─→ [Valid] Send API request
          ↓
        API Response
          ├─→ [Success] Show success toast → Redirect to detail page or list
          └─→ [Error] Show error message → Return to form with data preserved
```

**Key elements**:
- Validation before API call (client-side)
- Loading state during API call
- Error handling (show specific errors, preserve user input)
- Success confirmation (toast + redirect)

**Example**: Creating a new scenario, adding a player, creating an item

---

### 2. Edit Flow (CRUD - Update)

**Pattern**: View → Edit mode → Form → Validation → Save → Success/Error

```
Start (viewing detail page)
  ↓
Click "Edit" button
  ↓
Enter edit mode (form pre-filled with current data)
  ↓
User modifies fields
  ↓
User clicks "Save" or "Cancel"
  ├─→ [Cancel] Confirmation if unsaved changes
  │     ├─→ [Confirm] Discard changes → Return to view mode
  │     └─→ [Keep editing] Stay in edit mode
  └─→ [Save] Validate input
          ├─→ [Invalid] Show error messages → Stay in edit mode
          └─→ [Valid] Send API request
                  ↓
                API Response
                  ├─→ [Success] Show success toast → Return to view mode with updated data
                  └─→ [Error] Show error message → Stay in edit mode
```

**Key elements**:
- Cancel confirmation if changes were made
- Preserve original data if user cancels
- Optimistic update (show changes immediately, rollback on error)
- Auto-save option for long forms

**Example**: Editing scenario settings, updating player properties, modifying item data

---

### 3. Delete Flow (CRUD - Delete)

**Pattern**: Select → Confirmation → Delete → Success/Error

```
Start (viewing item in list or detail)
  ↓
Click "Delete" button
  ↓
Show confirmation dialog
  ├─→ [Cancel] Close dialog → Return to previous view
  └─→ [Confirm] Send delete API request
          ↓
        API Response
          ├─→ [Success] Show success toast → Remove item from list or redirect to list
          └─→ [Error] Show error message → Item remains, dialog closes
```

**Key elements**:
- Always confirm destructive actions
- Explain consequences ("This cannot be undone", "This will delete X related items")
- Provide undo option if possible (soft delete)
- Handle errors gracefully (item might be in use, permission denied)

**Example**: Deleting a scenario, removing a player, deleting an item

---

### 4. Multi-Step Wizard Flow

**Pattern**: Step 1 → Step 2 → Step 3 → Review → Submit → Success

```
Start
  ↓
Open wizard (Step 1)
  ↓
Fill Step 1 fields → Click "Next"
  ├─→ [Invalid] Show errors → Stay on Step 1
  └─→ [Valid] Move to Step 2
          ↓
        Fill Step 2 fields → Click "Back" or "Next"
          ├─→ [Back] Return to Step 1 (preserve Step 2 data)
          └─→ [Next & Valid] Move to Step 3
                  ↓
                Fill Step 3 → Click "Next"
                  └─→ [Valid] Show Review page (summary of all steps)
                          ↓
                        User reviews → Click "Submit" or "Back"
                          ├─→ [Back] Return to Step 3
                          └─→ [Submit] Send API request
                                  ↓
                                API Response
                                  ├─→ [Success] Show success page → Redirect
                                  └─→ [Error] Show error → Allow retry or edit
```

**Key elements**:
- Progress indicator (Step 1 of 4)
- Save draft functionality (for long wizards)
- Back button preserves data
- Review step before final submission
- Exit confirmation (warn about losing progress)

**Example**: Scenario creation wizard, multi-step configuration, onboarding flow

---

### 5. Search & Filter Flow

**Pattern**: Search → Results → Detail → Actions

```
Start (list page with search bar)
  ↓
User types in search bar
  ↓
[Real-time search] Show filtered results as user types
  OR
[Submit search] User presses Enter or clicks Search button
  ↓
Display results list
  ├─→ [No results] Show empty state with suggestions
  └─→ [Has results] Display paginated list
          ↓
        User applies filters (status, date range, category)
          ↓
        Update results based on filters
          ↓
        User clicks on result item
          ↓
        Navigate to detail page
          ↓
        User can perform actions (Edit, Delete, etc.)
```

**Key elements**:
- Real-time or submit-based search (depends on data size)
- Clear filters button
- Show active filters visually
- Preserve search/filter state when navigating back
- Empty state with helpful suggestions

**Example**: Player search, item catalog search, scenario search

---

### 6. Bulk Operations Flow

**Pattern**: Select multiple → Action → Confirmation → Execute → Success

```
Start (list page with selectable rows)
  ↓
User selects items (checkbox per row)
  ├─→ [None selected] Bulk actions hidden
  └─→ [1+ selected] Show bulk action bar with count ("3 items selected")
          ↓
        User chooses bulk action (Delete, Export, Change Status, etc.)
          ↓
        [Destructive action] Show confirmation
          ├─→ [Cancel] Return to selection
          └─→ [Confirm] Execute bulk operation
                  ↓
                Show progress indicator
                  ↓
                API Response
                  ├─→ [All success] Show success toast → Refresh list → Clear selection
                  ├─→ [Partial success] Show summary ("2 of 3 succeeded", link to errors)
                  └─→ [All failed] Show error message → Allow retry
```

**Key elements**:
- Selection count indicator
- Select all / Deselect all
- Progress indicator for long operations
- Detailed results (which succeeded, which failed)
- Undo option if possible

**Example**: Bulk delete players, bulk export items, bulk status change

---

## Studio-Specific Flows

### Scenario Creation Flow (8-step example)

```
1. Dashboard → Click "Create Scenario"
    ↓
2. Show scenario creation wizard (Step 1: Basic Info)
   - Name, description, start/end dates
   - Validation: Name required, dates valid
    ↓
3. Step 2: Target Audience
   - Select player segments or criteria
   - Preview affected player count
    ↓
4. Step 3: Rewards & Items
   - Add items, currency, or other rewards
   - Set quantities and probabilities
    ↓
5. Step 4: Workflow (Visual Editor)
   - Open node-based editor (React Flow)
   - Add nodes, connect them, configure logic
    ↓
6. Step 5: Testing
   - Run simulation with test data
   - View results and debug
    ↓
7. Review & Publish
   - Summary of all settings
   - Preview before publishing
    ↓
8. Submit
   - [Draft] Save as draft → Redirect to scenario list
   - [Publish] Publish live → Show success → Redirect to scenario detail
```

**Key considerations**:
- Save draft at each step (auto-save)
- Allow skipping back to any step
- Visual preview of workflow
- Validation before publish

---

### Player Management Flow (Search → View → Actions)

```
1. Navigate to Players page
    ↓
2. Search for player
   - Search by ID, email, username
   - Apply filters (status, segment, join date)
    ↓
3. Display results in table
   - Columns: ID, Name, Status, Last Active, Actions
   - Sort by any column
   - Pagination
    ↓
4. Click player row
    ↓
5. Navigate to player detail page
   - Tabs: Overview, Wallets, Inventory, History, Segments
   - Each tab loads data on demand
    ↓
6. Perform action
   - Edit profile → Edit flow
   - Ban player → Confirmation → API call → Success toast
   - View transactions → Navigate to transactions page with player filter
   - Send message → Open message composer modal
```

**Key considerations**:
- Fast search (autocomplete, recent searches)
- Preserve scroll position when navigating back
- Tab state persists (selected tab remembered)

---

### Item Catalog Flow (Create → Configure → Publish)

```
1. Items page → Click "Create Item"
    ↓
2. Show item creation modal
   - Basic fields: Name, type, rarity
    ↓
3. Fill in fields → Click "Create"
    ↓
4. [Success] Navigate to item detail page
   - Shows created item data
    ↓
5. Click "Edit Properties"
    ↓
6. Configure item properties (JSON editor)
   - Custom fields based on item type
   - Validation: JSON schema validation
    ↓
7. Save properties
   - [Valid] Save → Success toast
   - [Invalid] Show validation errors
    ↓
8. Click "Publish"
    ↓
9. Confirmation dialog
   - "This item will become available in-game"
    ↓
10. [Confirm] Publish → API call → Success → Item status changes to "Published"
```

**Key considerations**:
- JSON editor with schema validation
- Preview item in-game (if possible)
- Version history (track changes)

---

## Wireframing Techniques

### Low-Fidelity Wireframes

**Purpose**: Explore structure and flow quickly
**Tools**: Paper, whiteboard, simple boxes in Figma

**Characteristics**:
- Black and white, grayscale only
- Boxes, lines, and labels
- No real content (use Lorem Ipsum or [Content here])
- No styling (colors, fonts, shadows)

**When to use**:
- Initial exploration
- Brainstorming sessions
- Quick iterations with stakeholders

**Example**:
```
┌─────────────────────────────────────┐
│ Header                  [User Menu] │
├──────┬──────────────────────────────┤
│ Nav  │ Page Title         [Action] │
│      ├──────────────────────────────┤
│ • H  │ [Search box]                │
│ • A  │                              │
│ • B  │ ┌─────────────────────────┐ │
│      │ │ Card 1                  │ │
│      │ │ [ Content ]             │ │
│      │ └─────────────────────────┘ │
│      │ ┌─────────────────────────┐ │
│      │ │ Card 2                  │ │
│      │ │ [ Content ]             │ │
│      │ └─────────────────────────┘ │
└──────┴──────────────────────────────┘
```

---

### Mid-Fidelity Wireframes

**Purpose**: Show layout, spacing, hierarchy
**Tools**: Figma, Sketch, Adobe XD

**Characteristics**:
- Grayscale with some shades
- Placeholder content (closer to real length)
- Shows spacing and alignment
- Component types identified (input, button, table)
- Some typography (size differences for hierarchy)

**When to use**:
- After structure is approved
- Handoff to developers (before high-fidelity)
- Usability testing (to focus on flow, not aesthetics)

---

### High-Fidelity Wireframes

**Purpose**: Near-final design with real content and styling
**Tools**: Figma, Sketch, Adobe XD

**Characteristics**:
- Full color, branded styling
- Real or realistic content
- All states shown (default, hover, active, error, loading)
- Interactions specified
- Responsive layouts

**When to use**:
- Stakeholder approval before dev
- Developer handoff
- Design QA reference

---

## Tools and Resources

### Recommended Tools

**Flowchart/Diagram Tools**:
- **FigJam** (by Figma) - Collaborative whiteboard, great for team brainstorming
- **Whimsical** - Simple, fast flowcharts and wireframes
- **Miro** - Collaborative board for flows, wireframes, and workshops
- **Lucidchart** - Professional flowcharts with template library

**Wireframing Tools**:
- **Figma** (recommended) - Full design tool, free for individuals
- **Sketch** - Mac only, popular for UI design
- **Adobe XD** - Free, integrates with Adobe Creative Cloud
- **Balsamiq** - Quick low-fidelity wireframes

**Prototyping Tools**:
- **Figma** - Click-through prototypes, transitions
- **ProtoPie** - Advanced interactions
- **Principle** - Animation-focused prototypes

---

### Best Practices

#### Flow Diagrams

1. **Start with the happy path** - Map the ideal flow first, then add error cases
2. **Keep it simple** - If a flow has more than 10 steps, break it into sub-flows
3. **Label everything** - Make arrows and decisions clear
4. **Show all outcomes** - Every action should have success, error, and edge case paths
5. **Use consistent symbols** - Stick to standard flowchart conventions

#### Wireframes

1. **Start low-fi** - Don't jump to high-fidelity too early
2. **Focus on content hierarchy** - What should the user see first?
3. **Use real content length** - Lorem Ipsum is fine, but use realistic lengths
4. **Show all states** - Default, hover, active, loading, error, empty
5. **Annotate interactions** - Explain what happens on click, hover, etc.
6. **Mobile and desktop** - Design for both if responsive

---

### Common Mistakes to Avoid

**In Flows**:
- ❌ Forgetting error states ("What if API fails?")
- ❌ No back/cancel options
- ❌ Unclear decision criteria ("Valid" - valid how?)
- ❌ Too complex (8+ decision points in one flow)

**In Wireframes**:
- ❌ Too much detail too early (high-fi when low-fi would do)
- ❌ Missing states (only showing default, not error or loading)
- ❌ No annotations (expecting developers to guess interactions)
- ❌ Inconsistent spacing/alignment (looks sloppy)

---

### Example Flow: Complete Scenario Creation

```
START
  ↓
Dashboard page loads
  ↓
User clicks "Create Scenario" button
  ↓
Open scenario wizard (Step 1: Basic Info)
  ↓
User fills in:
  - Scenario name (required, 3-100 chars)
  - Description (optional, max 500 chars)
  - Start date (required, must be future)
  - End date (required, must be after start)
  ↓
User clicks "Next"
  ↓
Validation
  ├─→ [Invalid] Show inline errors → Stay on Step 1
  └─→ [Valid] Auto-save draft → Move to Step 2 (Target Audience)
          ↓
        User selects player segment or builds custom criteria
          - Segment dropdown (pre-defined segments)
          OR
          - Custom criteria builder (level, location, activity)
          ↓
        Real-time player count preview ("~2,450 players match")
          ↓
        User clicks "Next"
          ↓
        Validation
          ├─→ [No target selected] Show error → Stay on Step 2
          └─→ [Valid] Auto-save draft → Move to Step 3 (Rewards)
                  ↓
                User adds rewards
                  - Click "Add Reward"
                  - Select type (Item, Currency, XP)
                  - Set quantity and probability
                  - Can add multiple rewards
                  ↓
                User clicks "Next"
                  ↓
                Validation
                  ├─→ [No rewards] Show warning (optional but recommended) → Can proceed
                  └─→ [Has rewards] Auto-save draft → Move to Step 4 (Workflow)
                          ↓
                        Visual workflow editor opens (React Flow)
                          - Start node already placed
                          - User drags nodes from sidebar
                          - Connects nodes
                          - Configures node settings
                          ↓
                        User clicks "Next"
                          ↓
                        Validation
                          ├─→ [No end node] Show error → Stay on Step 4
                          ├─→ [Disconnected nodes] Show warning → Can fix or proceed
                          └─→ [Valid] Auto-save draft → Move to Step 5 (Review)
                                  ↓
                                Review page shows:
                                  - Basic info summary
                                  - Target audience count
                                  - Rewards list
                                  - Workflow diagram
                                  - [Edit] buttons to jump back to any step
                                  ↓
                                User clicks "Save as Draft" or "Publish"
                                  ├─→ [Save Draft] API call → Success toast → Redirect to Scenarios list
                                  └─→ [Publish] Confirmation dialog
                                          ├─→ [Cancel] Stay on review
                                          └─→ [Confirm] API call
                                                  ↓
                                                API Response
                                                  ├─→ [Success] Success toast → Redirect to Scenario detail page
                                                  └─→ [Error] Show error message → Offer retry or save as draft
END
```

---

This guide provides the foundation for planning effective user flows and wireframes. Use these patterns as starting points, and adapt them to your specific features and user needs.
