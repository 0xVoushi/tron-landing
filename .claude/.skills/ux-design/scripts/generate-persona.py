#!/usr/bin/env python3
"""
User Persona Template Generator

Generates a new persona file from template with pre-filled role.

Usage:
  python generate-persona.py "Game Designer" personas/designer.md
  python generate-persona.py "Studio Manager" output/manager-persona.md

Examples:
  python generate-persona.py "Game Designer" personas/designer.md
  python generate-persona.py "Product Manager" ./pm-persona.md
  python generate-persona.py --help
"""

import sys
import argparse
from pathlib import Path
from datetime import datetime


PERSONA_TEMPLATE = """# User Persona: [Name]

## Demographics

- **Role**: {role}
- **Experience**: [Years in role]
- **Company Size**: [Indie, Mid-size, Enterprise]
- **Technical Skill**: [Beginner, Intermediate, Advanced]

## Goals

- [Primary goal - What they want to accomplish]
- [Secondary goal]
- [Tertiary goal]

## Pain Points

- [Current frustration #1]
- [Current frustration #2]
- [Current frustration #3]

## User Story

"As a {role}, I want to [goal] so that [benefit]."

## Behaviors

- **Frequency of use**: [Daily, Weekly, Monthly]
- **Primary tasks**: [List top 3-5 tasks they perform]
- **Preferred workflow**: [Description of how they work]
- **Tools used**: [Other tools/platforms they use]

## Technical Environment

- **Device**: [Desktop, Tablet, Mobile]
- **Browser**: [Chrome, Safari, Firefox, Edge]
- **Screen resolution**: [Common resolution they use]
- **Operating System**: [macOS, Windows, Linux]

## Motivations

- [What drives them in their work]
- [What success looks like for them]

## Frustrations

- [Specific frustrations with current tools]
- [Workflow blockers]

## Quote

"[A quote that represents this persona's mindset and approach to their work]"

---

*Generated: {timestamp}*
*Template: UX Design Skill - User Persona Template*

## Next Steps

1. Fill in the persona name (replace [Name] above)
2. Complete demographics section
3. Add 2-3 specific goals
4. Document 2-3 main pain points
5. Write a clear user story
6. Detail their typical behaviors and workflows
7. Add a memorable quote that captures their perspective

## Usage Notes

This persona should be based on user research, interviews, or data analysis.
Use it when making design decisions to ensure the product meets real user needs.

For more information, see:
- `.claude/.skills/ux-design/assets/templates/user-persona-template.md`
- `.claude/.skills/ux-design/assets/examples/player-persona.md`
"""


def generate_persona(role: str, output_path: str) -> None:
    """Generate persona file from template."""

    # Prepare template
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    content = PERSONA_TEMPLATE.format(role=role, timestamp=timestamp)

    # Ensure output directory exists
    output_file = Path(output_path)
    output_file.parent.mkdir(parents=True, exist_ok=True)

    # Write file
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(content)
    except Exception as e:
        print(f"\n❌ Error writing file: {e}", file=sys.stderr)
        sys.exit(1)

    # Success message
    print(f"\n{'='*60}")
    print(f"✅ Persona Template Generated")
    print(f"{'='*60}")
    print(f"\n📄 File: {output_path}")
    print(f"👤 Role: {role}")
    print(f"\n{'='*60}")
    print(f"Next Steps:")
    print(f"{'='*60}")
    print(f"   1. Open {output_path}")
    print(f"   2. Replace [Name] with actual persona name")
    print(f"   3. Fill in demographics section")
    print(f"   4. Add specific goals and pain points")
    print(f"   5. Complete behavioral details")
    print(f"   6. Add a memorable quote")
    print(f"\n💡 Pro Tip:")
    print(f"   Base personas on real user research, interviews, or")
    print(f"   data analysis for maximum accuracy and usefulness.")
    print(f"\n📚 Resources:")
    print(f"   Template: .claude/.skills/ux-design/assets/templates/user-persona-template.md")
    print(f"   Example:  .claude/.skills/ux-design/assets/examples/player-persona.md")
    print(f"{'='*60}\n")


def main():
    parser = argparse.ArgumentParser(
        description='Generate a user persona template with pre-filled role',
        epilog='Examples:\n'
               '  %(prog)s "Game Designer" personas/designer.md\n'
               '  %(prog)s "Studio Manager" output/manager.md\n'
               '  %(prog)s "Product Manager" ./pm-persona.md',
        formatter_class=argparse.RawDescriptionHelpFormatter
    )
    parser.add_argument('role', help='Role for this persona (e.g., "Game Designer")')
    parser.add_argument('output_path', help='Output file path (e.g., personas/designer.md)')

    args = parser.parse_args()

    generate_persona(args.role, args.output_path)


if __name__ == '__main__':
    main()
