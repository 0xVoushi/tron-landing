# Design Memory Archive

This directory stores design exploration history from `/design-and-refine` sessions.

## What's Stored Here

Each completed design session creates a memory file:
- Filename format: `[component-name]-[YYYY-MM-DD].md`
- Contains: User feedback, design decisions, chosen variants, final direction

## Purpose

Design memory helps:
- **Reference past decisions** - "Why did we choose this layout?"
- **Track design evolution** - See how designs improved over time
- **Inform future work** - Learn from previous exploration patterns
- **Document rationale** - Explain design choices to stakeholders

## Example

```
memory/
├── project-dashboard-2026-01-16.md
├── login-form-2026-01-10.md
└── user-profile-2025-12-28.md
```

## Privacy Note

Memory files contain only design decisions and feedback, no sensitive data.
Safe to commit to version control.

## Cleanup

Memory files accumulate over time. Archive or remove old entries periodically:
```bash
# Keep last 6 months, remove older
find . -name "*.md" -mtime +180 -delete
```
