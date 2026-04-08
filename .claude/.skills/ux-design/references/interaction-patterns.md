# Interaction Design Patterns

Complete pattern library for admin dashboard interactions in the Studio platform.

---

## Table of Contents

1. [Data Table Patterns](#data-table-patterns)
2. [Form Patterns](#form-patterns)
3. [Modal Patterns](#modal-patterns)
4. [Feedback Patterns](#feedback-patterns)
5. [Navigation Patterns](#navigation-patterns)
6. [Search Patterns](#search-patterns)
7. [Drag & Drop Patterns](#drag--drop-patterns)
8. [Keyboard Shortcuts](#keyboard-shortcuts)

---

## Data Table Patterns

### Column Sorting

**Pattern**: Clickable column headers toggle sort direction

```
┌────────────────┬──────────────┬────────────┐
│ Name ↑         │ Level        │ Last Active │
├────────────────┼──────────────┼────────────┤
│ Alice          │ 42           │ 2 mins ago  │
│ Bob            │ 38           │ 5 mins ago  │
│ Charlie        │ 35           │ 1 hour ago  │
└────────────────┴──────────────┴────────────┘
```

**Behavior**:
- Click header: Sort ascending (↑)
- Click again: Sort descending (↓)
- Click again: Remove sort (back to default)
- Visual indicator: Arrow icon in header
- Only one column sorted at a time (unless advanced mode)

**Accessibility**:
- Header is `<button>` or has `role="button"`
- `aria-sort="ascending"` or `aria-sort="descending"`
- Keyboard: Tab to header, Enter/Space to sort

---

### Pagination

**Pattern**: Controls at bottom of table

```
Showing 1-25 of 342 items

[← Prev]  1  [2]  3  4  5  ...  14  [Next →]

Page size: [25 ▾]  10 | 25 | 50 | 100
```

**Components**:
- Page info: "Showing X-Y of Z items"
- Previous/Next buttons (disabled at ends)
- Page numbers (current page highlighted)
- Page size selector (dropdown)

**Behavior**:
- Default: 25 items per page
- Remember page size in URL or user preference
- Preserve sort/filter when changing pages
- "Go to page" input for large datasets

---

### Row Selection

**Pattern**: Checkbox in first column

```
┌───┬────────────────┬──────┬────────┐
│ ☑ │ Name           │ Lv   │ Actions│
├───┼────────────────┼──────┼────────┤
│ ☑ │ Alice          │ 42   │ [•••]  │
│ ☐ │ Bob            │ 38   │ [•••]  │
│ ☑ │ Charlie        │ 35   │ [•••]  │
└───┴────────────────┴──────┴────────┘

2 selected  [Delete] [Export] [Change Status ▾]
```

**Behavior**:
- Header checkbox: Select/Deselect all on page
- Individual checkboxes: Select/Deselect row
- Bulk action bar appears when 1+ selected
- Show selection count
- Clear selection after bulk action

**Keyboard**:
- Space: Toggle checkbox
- Shift + Click: Select range

---

### Inline Editing

**Pattern**: Double-click row or cell to edit

```
Normal:
│ Alice          │ alice@example.com │ Active │

Editing:
│ [Alice        ]│ [alice@example.com]│ [Active ▾]│
  [✓ Save] [✗ Cancel]
```

**Behavior**:
- Double-click cell: Enter edit mode
- Show Save and Cancel buttons
- Escape: Cancel editing
- Enter: Save changes
- Click outside: Prompt to save or discard
- Optimistic update: Show changes immediately, rollback on error

---

### Row Actions

**Pattern**: Actions menu in last column

```
│ Name    │ Status  │ Actions │
│ Alice   │ Active  │  [•••]  │ <- Click opens menu
                        ↓
                    ┌───────────────┐
                    │ Edit          │
                    │ View Details  │
                    │ ─────────────│
                    │ Delete        │
                    └───────────────┘
```

**Behavior**:
- Dropdown menu with 3-7 actions
- Common actions: Edit, View, Duplicate, Delete
- Destructive actions at bottom, separated
- Click outside to close
- Escape key to close

---

### Loading State

**Pattern**: Skeleton rows while loading

```
┌────────────────────────────────────┐
│ Name              Level    Status  │
├────────────────────────────────────┤
│ ░░░░░░░░          ░░░░     ░░░░   │
│ ░░░░░░░░          ░░░░     ░░░░   │
│ ░░░░░░░░          ░░░░     ░░░░   │
└────────────────────────────────────┘
```

**Alternatives**:
- Spinner over table (for small datasets)
- Progress bar (for large datasets with progress)
- "Loading..." text (minimal)

---

### Empty State

**Pattern**: Helpful message + CTA

```
┌────────────────────────────────────┐
│                                    │
│         📦                         │
│    No players found                │
│                                    │
│ Try adjusting your filters or      │
│ search terms.                      │
│                                    │
│    [Create Player]  [Clear Filters]│
│                                    │
└────────────────────────────────────┘
```

**When to show**:
- No data exists: "No players yet. Create your first player."
- No search results: "No players match your search."
- Filtered out all: "No players match your filters. Try adjusting them."

---

## Form Patterns

### Field Validation

**Pattern**: Validate on blur, show errors inline

```
Email *
[alice@example                    ]
❌ Please enter a valid email address

Password *
[••••••••                         ]
✅ Strong password
```

**Validation timing**:
- **On blur** (recommended): After user leaves field
- **On submit**: Validate all fields when form submitted
- **Real-time** (optional): As user types (for password strength, username availability)

**Error display**:
- Red text below field
- Red border on field
- Error icon
- `aria-invalid="true"` and `aria-describedby="error-id"`

---

### Required Fields

**Pattern**: Asterisk (*) in label

```
Email *
[                                  ]

Optional: Biography
[                                  ]
```

**Accessibility**:
- Asterisk has `aria-label="required"`
- Input has `aria-required="true"` and `required` attribute
- Don't rely on color alone

---

### Multi-Step Forms

**Pattern**: Progress indicator + Back/Next buttons

```
Step 2 of 4: Target Audience
●━━●━━○━━○

[Select player segment or build custom criteria]

Segment: [VIP Players                      ▾]
Matches: ~2,450 players

[← Back]                          [Next →]
```

**Features**:
- Progress indicator (filled dots or steps)
- Back button preserves data from all steps
- Next button validates current step
- Save draft button (for long forms)
- Exit confirmation if unsaved changes

---

### Auto-Save

**Pattern**: Save draft automatically, show status

```
Status: Saved 2 minutes ago  [Publish]

[Form fields...]

Saving...  <- Shows while saving
Saved ✓    <- Shows after success
```

**Behavior**:
- Save every 30-60 seconds of inactivity
- Show "Saving..." indicator
- Show "Saved" with timestamp
- Don't auto-save on every keystroke (throttle)

---

### Field Dependencies

**Pattern**: Show/hide fields based on selection

```
Item Type
[Weapon ▾]

Weapon Type (shows because Item Type = Weapon)
[Sword ▾]

Damage (shows because Weapon Type selected)
[50      ]
```

**Behavior**:
- Hide dependent fields until trigger field filled
- Smooth animation (slide down, fade in)
- Clear dependent field values if trigger changes

---

## Modal Patterns

### Confirmation Dialog (Destructive Actions)

**Pattern**: Simple dialog with clear warning

```
┌─────────────────────────────────────┐
│  Delete Player?                     │
├─────────────────────────────────────┤
│                                     │
│  Are you sure you want to delete    │
│  Alice? This action cannot be       │
│  undone.                            │
│                                     │
│  [Cancel]         [Delete Player]   │
│                      ↑ Red button   │
└─────────────────────────────────────┘
```

**Features**:
- Clear title (action + object)
- Explain consequences
- Destructive button styled as danger (red)
- Cancel button is secondary (gray)
- Escape key closes without action
- Focus on Cancel by default (safe choice)

---

### Create/Edit Form Modal

**Pattern**: Modal with form fields

```
┌─────────────────────────────────────┐
│  Create Item                    [×] │
├─────────────────────────────────────┤
│                                     │
│  Name *                             │
│  [Magic Sword                     ] │
│                                     │
│  Type *                             │
│  [Weapon                          ▾]│
│                                     │
│  Rarity                             │
│  [Legendary                       ▾]│
│                                     │
│  [Cancel]              [Create]     │
│                                     │
└─────────────────────────────────────┘
```

**When to use modal**:
- Simple forms (3-7 fields)
- Quick actions (don't need full page)
- User context is important (can see data behind modal)

**When to use full page**:
- Complex forms (8+ fields)
- Multi-step wizards
- Need full screen for visual editor

---

### Full-Screen Modal

**Pattern**: Modal that takes entire viewport

```
┌──────────────────────────────────────┐
│ [← Back]  Scenario Editor       [×]  │
├──────────────────────────────────────┤
│                                      │
│         [Visual workflow editor]     │
│         [Full canvas area]           │
│                                      │
│                                      │
│                                      │
│                          [Save Draft]│
│                          [Publish]   │
└──────────────────────────────────────┘
```

**When to use**:
- Complex tools (visual editors, advanced config)
- Need maximum screen space
- Immersive experience

---

### Focus Trap

**Pattern**: Tab cycles within modal, Escape closes

**Behavior**:
- When modal opens, focus moves to first focusable element (usually close button or first input)
- Tab: Next element within modal
- Shift + Tab: Previous element within modal
- When reaching last element, Tab wraps to first
- Escape: Close modal
- Click backdrop: Close modal (optional, depends on context)

**Accessibility**:
- `role="dialog"` on modal container
- `aria-modal="true"` (hides background from screen readers)
- `aria-labelledby` points to modal title

---

## Feedback Patterns

### Toast Notifications

**Pattern**: Temporary message in corner

```
                     ┌────────────────────────┐
                     │ ✓ Player created       │
                     │   successfully         │
                     └────────────────────────┘
```

**Types**:
- **Success** (green): "Player created successfully"
- **Error** (red): "Failed to delete item"
- **Info** (blue): "Exporting data..."
- **Warning** (yellow): "You have unsaved changes"

**Behavior**:
- Appear in top-right or bottom-right corner
- Auto-dismiss after 3-5 seconds (except errors)
- Can manually dismiss with X button
- Max 3 toasts visible at once (stack vertically)
- Click toast for more details (optional)

---

### Inline Messages

**Pattern**: Message within content area

```
┌─────────────────────────────────────┐
│ ⚠️  Warning                         │
│ This player has pending transactions.│
│ Deleting will cancel all pending    │
│ transactions.                       │
└─────────────────────────────────────┘
```

**When to use**:
- Contextual warnings
- Field-level errors (below input)
- Section-level messages

---

### Loading Indicators

**Pattern**: Visual feedback during async operations

**Spinner** (for unknown duration):
```
[  ⟳  Loading... ]
```

**Progress Bar** (for known duration):
```
Exporting data... 45%
[████████░░░░░░░░░░░░]
```

**Skeleton Screen** (for initial page load):
```
┌────────────────────┐
│ ░░░░░░             │
│ ░░░░░░░░░░░        │
│ ░░░░               │
└────────────────────┘
```

**Button Loading State**:
```
Normal:  [Save]
Loading: [⟳ Saving...]
Success: [✓ Saved]
```

---

### Error Pages

**Pattern**: Full page error with helpful message

```
┌─────────────────────────────────────┐
│                                     │
│              404                    │
│         Page Not Found              │
│                                     │
│  The page you're looking for        │
│  doesn't exist.                     │
│                                     │
│  [← Go Back]  [Home]                │
│                                     │
└─────────────────────────────────────┘
```

**Common error pages**:
- **404**: Page not found
- **403**: No permission
- **500**: Server error

---

## Navigation Patterns

### Active State

**Pattern**: Highlight current page in navigation

```
Sidebar
│ 🏠 Dashboard      │
│ 👥 Players        │ <- Active (bold, background)
│ 🎮 Items          │
│ 🏆 Leaderboards   │
```

**Visual indicators**:
- Background color (subtle)
- Bold text
- Left border or icon highlight
- Distinct enough to be obvious

---

### Hover State

**Pattern**: Preview on hover

```
│ 🏠 Dashboard      │
│ 👥 Players  ───────────────┐
│ 🎮 Items          │        │
│                   │ Tooltip│
│                   │ "View and manage"
│                   │ "all players"
│                   └────────┘
```

**Behavior**:
- Subtle background change
- Optional tooltip with description
- Cursor changes to pointer

---

### Submenu Patterns

**Expandable Submenu**:
```
│ ⚙️  Configuration    [▾]│
    │ • Remote Config       │
    │ • Feature Flags       │
    │ • Settings            │
```

**Flyout Submenu**:
```
│ ⚙️  Configuration ─────────────┐
│ 👤 Profile                    │
│                    │ • Remote Config │
│                    │ • Feature Flags │
│                    │ • Settings      │
│                    └─────────────────┘
```

---

## Search Patterns

### Autocomplete

**Pattern**: Suggest results as user types

```
[john                               ]
┌─────────────────────────────────┐
│ Players                         │
│ • John Doe (ID: 12345)          │
│ • Johnny Smith (ID: 67890)      │
│ Items                           │
│ • John's Sword                  │
└─────────────────────────────────┘
```

**Behavior**:
- Show suggestions after 2-3 characters
- Group by entity type
- Highlight matching text
- Arrow keys to navigate
- Enter to select
- Escape to close

---

### Recent Searches

**Pattern**: Show recent searches when focused

```
[                                   ]
┌─────────────────────────────────┐
│ Recent Searches                 │
│ • VIP players active last week  │
│ • Items with rarity Legendary   │
│ • john@example.com              │
└─────────────────────────────────┘
```

**Behavior**:
- Show when search input focused (before typing)
- Click to repeat search
- X to remove from history
- Max 5-10 recent searches

---

## Drag & Drop Patterns

### Sortable List

**Pattern**: Drag handle to reorder

```
┌────────────────────┐
│ ⋮⋮ Item 1          │ <- Drag handle
│ ⋮⋮ Item 2 [dragging]│
│ ⋮⋮ Item 3          │
│    ─────────────── │ <- Drop zone
│ ⋮⋮ Item 4          │
└────────────────────┘
```

**Visual feedback**:
- Drag handle icon (⋮⋮ or ☰)
- Item becomes semi-transparent when dragging
- Drop zone highlighted
- Cursor changes to grabbing hand

---

### Draggable Nodes (Scenario Editor)

**Pattern**: Drag nodes onto canvas

```
Sidebar                Canvas
┌───────────┐         ┌────────────────┐
│ Nodes     │         │                │
│ • Start   │ ─────>  │  [Start]       │
│ • Action  │         │    ↓           │
│ • End     │         │  [Action]      │
│           │         │    ↓           │
│           │         │  [End]         │
└───────────┘         └────────────────┘
```

---

## Keyboard Shortcuts

### Common Shortcuts

**Global**:
- `Cmd/Ctrl + K`: Open global search
- `Cmd/Ctrl + S`: Save (forms, editors)
- `Escape`: Close modal, dropdown, or cancel
- `Cmd/Ctrl + /`: Show keyboard shortcuts

**Navigation**:
- `Tab`: Next element
- `Shift + Tab`: Previous element
- `Arrow keys`: Navigate menus, tabs, lists
- `Enter`: Activate link/button
- `Space`: Toggle checkbox, activate button

**Tables**:
- `j` / `↓`: Next row
- `k` / `↑`: Previous row
- `x`: Select row

**Forms**:
- `Cmd/Ctrl + Enter`: Submit form
- `Escape`: Cancel/close

---

### Shortcut Discovery

**Pattern**: Show shortcuts in UI

```
Button with shortcut:
[Save]  Cmd+S

Tooltip on hover:
Save (Cmd+S)
```

**Help menu**:
- `?` or `Cmd+/`: Show keyboard shortcuts modal
- List all shortcuts by category

---

**Remember**: Interaction patterns should be consistent across the entire dashboard. Users learn once, apply everywhere.
