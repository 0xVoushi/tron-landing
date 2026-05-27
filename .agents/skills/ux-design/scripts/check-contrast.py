#!/usr/bin/env python3
"""
WCAG 2.1 Color Contrast Checker

Checks if color combinations meet WCAG AA/AAA standards for accessibility.

Usage:
  python check-contrast.py "#1890ff" "#ffffff"
  python check-contrast.py --large "#1890ff" "#ffffff"
  python check-contrast.py "#1890ff" "#ffffff" --large

Examples:
  python check-contrast.py "#333333" "#ffffff"
  python check-contrast.py "rgb(24, 144, 255)" "rgb(255, 255, 255)"
  python check-contrast.py --help
"""

import sys
import argparse
import re
from typing import Tuple


def parse_color(color_str: str) -> Tuple[int, int, int]:
    """
    Parse color string to RGB tuple.
    Supports hex (#RRGGBB) and rgb(R, G, B) formats.
    """
    color_str = color_str.strip()

    # Try hex format
    if color_str.startswith('#'):
        hex_color = color_str.lstrip('#')
        if len(hex_color) == 3:
            # Expand short hex (e.g., #fff -> #ffffff)
            hex_color = ''.join([c*2 for c in hex_color])
        if len(hex_color) != 6:
            raise ValueError(f"Invalid hex color: {color_str}")
        return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

    # Try rgb format
    rgb_match = re.match(r'rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)', color_str, re.IGNORECASE)
    if rgb_match:
        return tuple(int(x) for x in rgb_match.groups())

    raise ValueError(f"Unsupported color format: {color_str}. Use #RRGGBB or rgb(R, G, B)")


def calculate_luminance(rgb: Tuple[int, int, int]) -> float:
    """
    Calculate relative luminance per WCAG formula.
    https://www.w3.org/TR/WCAG21/#dfn-relative-luminance
    """
    def adjust(channel):
        channel = channel / 255.0
        if channel <= 0.03928:
            return channel / 12.92
        return ((channel + 0.055) / 1.055) ** 2.4

    r, g, b = [adjust(c) for c in rgb]
    return 0.2126 * r + 0.7152 * g + 0.0722 * b


def calculate_contrast(foreground: str, background: str) -> float:
    """
    Calculate contrast ratio between two colors.
    https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio
    """
    rgb1 = parse_color(foreground)
    rgb2 = parse_color(background)

    lum1 = calculate_luminance(rgb1)
    lum2 = calculate_luminance(rgb2)

    lighter = max(lum1, lum2)
    darker = min(lum1, lum2)

    return (lighter + 0.05) / (darker + 0.05)


def main():
    parser = argparse.ArgumentParser(
        description='Check WCAG 2.1 color contrast compliance',
        epilog='Examples:\n'
               '  %(prog)s "#1890ff" "#ffffff"\n'
               '  %(prog)s --large "#1890ff" "#ffffff"\n'
               '  %(prog)s "rgb(24,144,255)" "rgb(255,255,255)"',
        formatter_class=argparse.RawDescriptionHelpFormatter
    )
    parser.add_argument('foreground', help='Foreground color (hex or rgb)')
    parser.add_argument('background', help='Background color (hex or rgb)')
    parser.add_argument('--large', action='store_true',
                       help='Large text (18pt+ or 14pt+ bold)')

    args = parser.parse_args()

    try:
        contrast = calculate_contrast(args.foreground, args.background)
    except ValueError as e:
        print(f"\n❌ Error: {e}", file=sys.stderr)
        sys.exit(1)

    # Display results
    print(f"\n{'='*50}")
    print(f"Color Contrast Checker")
    print(f"{'='*50}")
    print(f"\nForeground: {args.foreground}")
    print(f"Background: {args.background}")
    print(f"\nContrast Ratio: {contrast:.2f}:1")
    print(f"{'-'*50}")

    if args.large:
        aa_pass = contrast >= 3.0
        aaa_pass = contrast >= 4.5
        print(f"\n📏 Large Text (18pt+ or 14pt+ bold):")
    else:
        aa_pass = contrast >= 4.5
        aaa_pass = contrast >= 7.0
        print(f"\n📏 Normal Text:")

    print(f"   WCAG AA  (required): {'✅ PASS' if aa_pass else '❌ FAIL'}")
    print(f"   WCAG AAA (enhanced): {'✅ PASS' if aaa_pass else '❌ FAIL'}")

    # Guidance
    print(f"\n{'='*50}")
    if not aa_pass:
        print("⚠️  This combination does NOT meet WCAG AA standards.")
        print("   Consider using colors with higher contrast.")
        if args.large:
            print(f"   Need at least 3.0:1 (currently {contrast:.2f}:1)")
        else:
            print(f"   Need at least 4.5:1 (currently {contrast:.2f}:1)")
    else:
        print("✅ This combination meets WCAG AA standards!")
        if aaa_pass:
            print("   It also meets AAA standards (exceptional)!")

    print(f"{'='*50}\n")

    sys.exit(0 if aa_pass else 1)


if __name__ == '__main__':
    main()
