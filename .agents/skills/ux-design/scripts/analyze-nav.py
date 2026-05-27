#!/usr/bin/env python3
"""
Navigation Depth Analyzer

Analyzes navigation structure and reports depth issues.
Helps identify navigation anti-patterns like too many items or deep nesting.

Usage:
  python analyze-nav.py src/layouts/Sidebar.tsx
  python analyze-nav.py src/components/Navigation.jsx

Examples:
  python analyze-nav.py src/layouts/Sidebar.tsx
  python analyze-nav.py --help
"""

import sys
import argparse
import re
from pathlib import Path
from typing import List, Dict


def analyze_navigation(file_path: str) -> Dict:
    """
    Analyze navigation structure for depth and complexity.

    This is a simplified heuristic analyzer that looks for common patterns:
    - MenuItem, NavItem, Link components
    - Nested structures
    - List lengths
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"❌ Error: File not found: {file_path}", file=sys.stderr)
        sys.exit(1)
    except Exception as e:
        print(f"❌ Error reading file: {e}", file=sys.stderr)
        sys.exit(1)

    # Find menu item patterns (common React/JSX patterns)
    menu_patterns = [
        r'<MenuItem',
        r'<NavItem',
        r'<NavLink',
        r'<Link.*to=',
        r'<a\s+href=',
    ]

    total_items = 0
    for pattern in menu_patterns:
        total_items += len(re.findall(pattern, content, re.MULTILINE))

    # Try to detect nesting (very simplified)
    # Look for indented menu items or nested structures
    nested_indicators = [
        r'<ul>.*<ul>',  # Nested lists
        r'<li>.*<li>',  # Nested list items
        r'children:\s*\[',  # Children array in JS/TS
        r'submenu',  # Submenu keyword
        r'SubNav',  # SubNav component
    ]

    nesting_found = False
    nesting_details = []
    for pattern in nested_indicators:
        matches = re.findall(pattern, content, re.DOTALL | re.MULTILINE)
        if matches:
            nesting_found = True
            nesting_details.append(pattern)

    # Look for very long lists (potential anti-pattern)
    # Count items in nav/ul elements
    nav_blocks = re.findall(r'<nav[^>]*>.*?</nav>', content, re.DOTALL)
    ul_blocks = re.findall(r'<ul[^>]*>.*?</ul>', content, re.DOTALL)

    max_block_items = 0
    for block in nav_blocks + ul_blocks:
        block_items = 0
        for pattern in menu_patterns:
            block_items += len(re.findall(pattern, block))
        max_block_items = max(max_block_items, block_items)

    return {
        'total_items': total_items,
        'nesting_found': nesting_found,
        'nesting_details': nesting_details,
        'max_block_items': max_block_items,
    }


def main():
    parser = argparse.ArgumentParser(
        description='Analyze navigation structure and identify potential issues',
        epilog='Example:\n'
               '  %(prog)s src/layouts/Sidebar.tsx',
        formatter_class=argparse.RawDescriptionHelpFormatter
    )
    parser.add_argument('file_path', help='Path to navigation component file')

    args = parser.parse_args()

    print(f"\n{'='*60}")
    print(f"Navigation Structure Analysis")
    print(f"{'='*60}")
    print(f"\nAnalyzing: {args.file_path}")
    print(f"{'-'*60}")

    results = analyze_navigation(args.file_path)

    # Report findings
    print(f"\n📊 Analysis Results:")
    print(f"\n   Total navigation items found: {results['total_items']}")
    print(f"   Largest navigation block: {results['max_block_items']} items")

    # Warnings
    warnings = []
    recommendations = []

    if results['max_block_items'] > 9:
        warnings.append(f"⚠️  Navigation block has {results['max_block_items']} items (optimal: 5-9)")
        recommendations.append("   → Consider grouping related items")
        recommendations.append("   → Move less frequent items to secondary navigation")
        recommendations.append("   → Use visual separators to create groups")
    elif results['max_block_items'] >= 7:
        print(f"\n✅ Item count is good ({results['max_block_items']} items)")
    else:
        print(f"\n✅ Item count is excellent ({results['max_block_items']} items)")

    if results['nesting_found']:
        warnings.append(f"⚠️  Nested navigation detected")
        recommendations.append("   → Avoid deep nesting (max 3 levels)")
        recommendations.append("   → Consider using tabs or breadcrumbs instead")
        recommendations.append("   → Flatten hierarchy if possible")

    # Display warnings
    if warnings:
        print(f"\n{'='*60}")
        print("⚠️  Warnings:")
        print(f"{'='*60}")
        for warning in warnings:
            print(f"\n{warning}")
    else:
        print(f"\n{'='*60}")
        print("✅ Navigation structure looks good!")
        print(f"{'='*60}")

    # Display recommendations
    if recommendations:
        print(f"\n💡 Recommendations:")
        for rec in recommendations:
            print(rec)

    print(f"\n{'='*60}")
    print("Navigation Best Practices:")
    print(f"{'='*60}")
    print("   • 5-9 top-level items (optimal for recognition)")
    print("   • Maximum 3 levels deep (avoid deep nesting)")
    print("   • Group related items with visual separators")
    print("   • Use icons + labels for scannability")
    print("   • Clear active state for current page")
    print(f"{'='*60}\n")

    # Exit with warning code if issues found
    sys.exit(1 if warnings else 0)


if __name__ == '__main__':
    main()
