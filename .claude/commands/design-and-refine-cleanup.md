---
name: design-and-refine-cleanup
description: Clean up temporary design lab files and routes if a design session was interrupted
---

# Design & Refine: Cleanup

This command manually removes any leftover temporary files from an interrupted design-and-refine session.

## What It Does

Checks for and removes:
- `app/__design_lab/` directory and all contents
- Any design lab route references

## Process

### 1. Check for Design Lab Directory

Use Glob or Bash to check if `app/__design_lab/` exists:

```bash
if [ -d "app/__design_lab" ]; then
  echo "Found design lab files at app/__design_lab"
fi
```

### 2. List What Will Be Removed

If found, show the user:
```
Found temporary design lab files:
- app/__design_lab/page.tsx
- app/__design_lab/layout.tsx
- app/__design_lab/variants/

These were created during a design exploration session.
```

### 3. Confirm Removal

Ask using AskUserQuestion:

**"Remove these temporary design lab files?"**

Options:
- "Yes, remove them"
- "No, keep them for now"

### 4. Remove Files

If confirmed, remove the entire `app/__design_lab/` directory.

```bash
rm -rf app/__design_lab
```

### 5. Success Message

```
Cleanup complete!

Removed:
- app/__design_lab/ directory

Design exploration history preserved in:
  .claude/.skills/design-and-refine/memory/

Your codebase is clean. You can safely commit your changes.
```

## When to Use

Use this command when:
- A design-and-refine session was interrupted
- You see leftover `app/__design_lab/` files
- You want to manually verify cleanup
- The automatic cleanup didn't run

## Important Notes

- **Safe operation**: Only removes files in `app/__design_lab/` directory
- **Private folder**: The `__` prefix means Next.js already ignores it as a route, but cleanup keeps things tidy
- **No design memory removed**: Design history in `.claude/.skills/design-and-refine/memory/` is preserved
- **Reversible**: Files can be recovered from git history if needed

## Error Handling

**If directory doesn't exist:**
```
No design lab files found!
Your codebase is already clean.
```

**If removal fails:**
```
Failed to remove design lab files.
Check file permissions and try again.
```
