# Information Architecture Guide

Complete guide to organizing information architecture and navigation for the Studio admin dashboard.

---

## Table of Contents

1. [IA Fundamentals](#ia-fundamentals)
2. [Navigation Patterns](#navigation-patterns)
3. [Grouping Strategies](#grouping-strategies)
4. [Labeling Guidelines](#labeling-guidelines)
5. [Search & Filter Patterns](#search--filter-patterns)
6. [Dashboard IA Pattern](#dashboard-ia-pattern)
7. [Studio Sitemap Example](#studio-sitemap-example)

---

## IA Fundamentals

### What is Information Architecture?

Information Architecture (IA) is the practice of organizing, structuring, and labeling content in an effective and sustainable way. The goal is to help users find information and complete tasks.

### Four Pillars of IA

**1. Organization**: How content is structured and categorized
**2. Labeling**: What we call things (navigation labels, headings, links)
**3. Navigation**: How users move through the system
**4. Search**: How users find specific content

### IA for Admin Dashboards

Admin dashboards have unique IA needs:
- **Task-oriented**: Users come with specific goals (create scenario, find player)
- **Information-dense**: Lots of data, tables, forms
- **Expert users**: Frequent use, less need for discovery, more need for efficiency
- **Complex workflows**: Multi-step processes, related data across pages

---

## Navigation Patterns

### Primary Navigation: Sidebar

**Best for**: Main feature areas, always accessible

```
┌─────────────────┐
│ [Logo]          │
├─────────────────┤
│ 🏠 Dashboard    │ <- Active state
│ 👥 Players      │
│ 🎮 Items        │
│ 🏆 Leaderboards │
│ 📊 Scenarios    │
│ ⚙️  Config      │
├─────────────────┤
│ 👤 Profile      │
│ 🔔 Alerts (3)   │
└─────────────────┘
```

**Characteristics**:
- Always visible on desktop
- 5-9 top-level items (optimal for memorability)
- Icons + labels for scannability
- Clear active state
- Collapses on mobile (hamburger menu)

**Best practices**:
- Order by importance or frequency of use
- Group related items with visual separators
- Use familiar icons (home, users, settings)
- Consistent across all pages

---

### Secondary Navigation: Breadcrumbs

**Best for**: Showing location in hierarchy

```
Home › Players › Player Detail › Edit Profile
```

**Characteristics**:
- Shows path from home to current page
- Each level is clickable (except current)
- Typically 2-5 levels deep
- Located above page title

**When to use**:
- Hierarchy is 3+ levels deep
- Users need to navigate up the hierarchy
- Content is organized hierarchically (not flat)

**When to skip**:
- Flat structure (only 1-2 levels)
- Mobile (space constrained)

---

### Tertiary Navigation: Tabs

**Best for**: Organizing related content within a feature

```
Player Detail
┌────────────┬───────────┬────────────┬─────────┐
│ Overview   │ Wallets   │ Inventory  │ History │
└────────────┴───────────┴────────────┴─────────┘
```

**Characteristics**:
- 3-7 tabs maximum (more = dropdown or vertical tabs)
- Content related to same entity
- All tabs at same level (not nested tabs)
- Active tab visually distinct

**Best practices**:
- Order by importance or workflow sequence
- Load tab content on demand (don't load all upfront)
- Remember selected tab (persist in URL or state)
- Use icons sparingly (only if very clear)

---

### Quaternary Navigation: Sub-tabs or Sections

**Best for**: Further subdividing tab content

```
Scenario Editor
Tabs: Settings | Workflow | Testing
      ↓
Sub-tabs: Basic Info | Advanced | Rewards
```

**When to use**:
- Tab content is too large to show at once
- Logical subdivisions within tab
- Not needed often (prefer flat structure)

**Warning**: Avoid deep nesting (3+ levels of tabs). Consider alternative layouts.

---

## Grouping Strategies

### By Feature (Recommended for Studio)

Group by what users want to do:
- **Players**: Player management, segmentation, player analytics
- **Content**: Items, scenarios, leaderboards
- **Configuration**: Remote config, feature flags, settings
- **Analytics**: Dashboard, reports, insights

**Pros**: Matches user mental models, clear purpose
**Cons**: Some features span multiple groups

---

### By Workflow

Group by stages in a process:
- **Setup**: Project setup, initial configuration
- **Operate**: Day-to-day operations, content management
- **Analyze**: Monitoring, analytics, reports
- **Optimize**: A/B testing, experiments, insights

**Pros**: Guides users through process
**Cons**: Assumes linear workflow (often not true)

---

### By User Role

Group by who uses it:
- **Designer**: Scenarios, items, rewards
- **Analyst**: Analytics, reports, insights
- **Admin**: User management, settings, permissions

**Pros**: Personalized experience
**Cons**: Requires role-based permissions, users often have multiple roles

---

### By Entity

Group by data type:
- **Users**: Players, accounts, profiles
- **Content**: Items, scenarios, configs
- **Data**: Analytics, logs, exports

**Pros**: Mirrors database structure
**Cons**: Not task-oriented (users don't think in entities)

---

## Labeling Guidelines

### Action-Oriented Labels

Use verbs that describe what users will do:

```
✅ Good:
- Create Scenario
- View Players
- Export Data
- Edit Settings

❌ Bad:
- Scenario Creation
- Player Viewing
- Data Exporting
- Settings Modification
```

---

### Consistent Terminology

Don't mix synonyms - pick one term and stick with it:

```
✅ Consistent:
- Delete (always use "delete")

❌ Inconsistent:
- Delete, Remove, Trash (pick one!)
```

**Common Studio terminology**:
- Player (not user, member, customer)
- Scenario (not campaign, event)
- Item (not asset, object, entity)
- Segment (not group, cohort)

---

### User Language, Not Jargon

Use terms users understand:

```
✅ User language:
- Players
- Rewards
- Settings

❌ Internal jargon:
- UserEntities
- LootTables
- ConfigVars
```

---

### Be Specific

Generic labels are confusing:

```
✅ Specific:
- Import CSV
- Export JSON
- Delete Player

❌ Generic:
- Import
- Export
- Delete
```

---

### Sentence Case for Labels

```
✅ Sentence case:
- Create new scenario
- Player management

❌ Title Case:
- Create New Scenario
- Player Management
```

---

## Search & Filter Patterns

### Global Search

**Purpose**: Search across all entities from anywhere

```
Press Cmd+K anywhere
┌────────────────────────────────────┐
│ 🔍 Search players, items...        │
├────────────────────────────────────┤
│ Players                            │
│   • John Doe (ID: 12345)           │
│   • Jane Smith (ID: 67890)         │
│ Items                              │
│   • Magic Sword                    │
│ Scenarios                          │
│   • Welcome Campaign               │
└────────────────────────────────────┘
```

**Features**:
- Keyboard shortcut (Cmd/Ctrl + K)
- Search across all entity types
- Show entity type in results
- Recent searches
- Fuzzy matching (typo-tolerant)

---

### Contextual Search

**Purpose**: Search within current feature

```
Players Page
┌─────────────────────────────────────┐
│ Players               [Create]      │
├─────────────────────────────────────┤
│ 🔍 Search by name, email, ID...    │
├─────────────────────────────────────┤
│ Results...                          │
└─────────────────────────────────────┘
```

**Features**:
- Scoped to current feature (players, items, etc.)
- Real-time results as you type
- Clear search button (X icon)
- Show result count ("142 players found")

---

### Faceted Filters

**Purpose**: Filter by multiple criteria

```
┌─────────────────────────────────────┐
│ Filters                             │
├─────────────────────────────────────┤
│ Status:    [All] Active Inactive    │
│ Segment:   [Select segment ▾]       │
│ Joined:    [Date range picker]      │
│ Level:     [Min] - [Max]            │
│                                      │
│ [Clear all] [Apply filters]         │
└─────────────────────────────────────┘

Active filters: Status: Active, Joined: Last 30 days [x]
```

**Features**:
- Multiple filters can be active
- Show active filters visually
- Clear individual or all filters
- Filter count badge ("Filters (2)")

---

### Saved Searches/Views

**Purpose**: Save commonly used filter combinations

```
┌─────────────────────────────────────┐
│ Saved Views:                        │
│ • All Players                       │
│ • Active in Last 7 Days  [Current]  │
│ • VIP Players                       │
│ • [+ Create new view]               │
└─────────────────────────────────────┘
```

**Features**:
- Save current search + filters as view
- Quick access to common queries
- Share views with team
- Default view (loads on page open)

---

## Dashboard IA Pattern

### Standard Admin Layout

```
┌──────────────────────────────────────────────────────────┐
│  [Logo]  Studio Dashboard           [Search] [User ▾]   │
├─────────┬────────────────────────────────────────────────┤
│         │  Home › Players                                │
│ Sidebar │  ┌──────────────────────────────────────────┐ │
│         │  │ Players                      [Create +]   │ │
│ 🏠 Dash │  └──────────────────────────────────────────┘ │
│ 👥 Play │                                               │
│ 🎮 Item │  ┌──────────────────────────────────────────┐ │
│ 🏆 Lead │  │ [Search box]                             │ │
│ 📊 Scen │  │                                           │ │
│ ⚙️  Conf│  │ [Data table with pagination]             │ │
│         │  │                                           │ │
│ 👤 Prof │  │                                           │ │
└─────────┴────────────────────────────────────────────────┘
```

**Layout zones**:
1. **Top Bar**: Logo, global search, user menu
2. **Sidebar**: Main navigation
3. **Breadcrumbs**: Current location
4. **Page Header**: Page title + primary action
5. **Content Area**: Main content (tables, forms, cards)
6. **Right Panel** (optional): Contextual actions, filters

---

## Studio Sitemap Example

### Complete IA for Studio Dashboard

```
Studio Dashboard
│
├─ 🏠 Dashboard (Home)
│   └─ Overview widgets (active players, revenue, scenarios)
│
├─ 👥 Players
│   ├─ All Players (list + search)
│   ├─ Player Detail
│   │   ├─ Overview
│   │   ├─ Wallets
│   │   ├─ Inventory
│   │   ├─ History
│   │   └─ Segments
│   └─ Segmentation
│       ├─ All Segments
│       └─ Segment Detail
│
├─ 🎮 Items
│   ├─ Item Catalog (list + filters)
│   ├─ Item Detail
│   └─ Create Item
│
├─ 🏆 Leaderboards
│   ├─ All Leaderboards
│   ├─ Leaderboard Detail
│   │   ├─ Overview
│   │   ├─ Entries
│   │   └─ Settings
│   └─ Create Leaderboard
│
├─ 📊 Scenarios
│   ├─ All Scenarios (list + filters)
│   ├─ Scenario Detail
│   │   ├─ Overview
│   │   ├─ Workflow
│   │   ├─ Analytics
│   │   └─ Settings
│   └─ Create Scenario (wizard)
│       ├─ Step 1: Basic Info
│       ├─ Step 2: Target Audience
│       ├─ Step 3: Rewards
│       ├─ Step 4: Workflow
│       └─ Step 5: Review & Publish
│
├─ ⚙️ Remote Config
│   ├─ Config Keys
│   ├─ Environments
│   └─ History
│
├─ 📈 Analytics (future)
│   ├─ Dashboard
│   ├─ Reports
│   └─ Insights
│
└─ Settings (bottom of sidebar)
    ├─ Profile
    ├─ Team
    ├─ Projects
    ├─ Billing
    └─ Security
```

**Depth**: Maximum 3 levels (Home › Players › Player Detail)
**Breadth**: 5-9 items per level (optimal)

---

## IA Anti-Patterns to Avoid

### Too Deep (More than 3 levels)

```
❌ Bad:
Home › Management › Players › Active › Segment › Detail

✅ Good:
Home › Players › Player Detail
```

**Fix**: Flatten hierarchy, use tabs, filters, or search

---

### Too Broad (More than 9 items per level)

```
❌ Bad:
Sidebar with 15 items

✅ Good:
Sidebar with 7 items, grouped with separators
```

**Fix**: Group related items, move less frequent items to secondary nav or settings

---

### Unclear Labels

```
❌ Bad:
"Stuff", "Things", "Misc"

✅ Good:
"Players", "Items", "Scenarios"
```

**Fix**: Use specific, descriptive labels

---

### Duplicate Paths

```
❌ Bad:
- "Players" in sidebar
- "View Players" in Dashboard
- "Player Management" in Settings

✅ Good:
One clear path: "Players" in sidebar
```

**Fix**: Eliminate redundant paths, choose one canonical location

---

## Mobile Considerations

### Collapsed Sidebar

```
Mobile View
┌────────────────────────┐
│ [≡] Studio   [Search] │ <- Hamburger menu
├────────────────────────┤
│                        │
│ Players     [Create +] │
│                        │
│ [Search box]           │
│                        │
│ [Table - horizontal    │
│  scroll]               │
│                        │
└────────────────────────┘
```

**Pattern**:
- Hamburger menu icon (≡) opens sidebar overlay
- Sidebar slides in from left
- Backdrop dims rest of screen
- Tap outside or X to close

---

### Bottom Navigation (Alternative)

```
┌────────────────────────┐
│ Content area           │
│                        │
│                        │
├────────────────────────┤
│ 🏠  👥  🎮  ⚙️         │ <- Bottom tabs
└────────────────────────┘
```

**When to use**: Mobile-first app with 3-5 main sections

---

## Testing Your IA

### Tree Testing

Give users a text-based version of your IA and ask them to find specific items.

**Example task**: "Where would you go to find a specific player by their email?"

**Result**: If users struggle, your labels or structure may be unclear.

---

### Card Sorting

Give users cards with feature names, ask them to group related items.

**Result**: Reveals how users mentally organize information.

---

### Navigation Analysis Script

Use `scripts/analyze-nav.py` to check your navigation structure:

```bash
python scripts/analyze-nav.py src/layouts/Sidebar.tsx
```

**Checks**:
- Total menu items (warns if > 9)
- Nested navigation (warns if too deep)
- Provides recommendations

---

**Remember**: Good IA is invisible. Users should find what they need without thinking about navigation.
