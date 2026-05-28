/**
 * Mobile-only static hero background. Server component, no JS cost.
 *
 * Solid #161616 floor (bg-dark-hard) with a subtle SVG fractal noise
 * pattern overlaid via mix-blend-screen at 50% opacity, tinted toward
 * brand red so the hero has a textured feel where PixelBlast doesn't
 * mount.
 *
 * Hidden on desktop (`md:hidden`) — there the section's own
 * bg-dark-hard provides the dark floor and PixelBlast paints the red
 * pixel pattern on top. Layering the SVG noise under PixelBlast made
 * the desktop hero look brown/warm instead of clean dark; gating to
 * mobile only keeps the original desktop look while still giving
 * mobile a non-empty hero background.
 */
export function StaticHeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-dark-hard overflow-hidden md:hidden"
    >
      <svg
        className="absolute inset-0 w-full h-full opacity-50 mix-blend-screen"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="hero-bg-noise" x="0" y="0" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="2"
              stitchTiles="stitch"
            />
            {/* Tint noise toward brand red (#c43631 = rgb(196, 54, 49)). */}
            <feColorMatrix
              values="0 0 0 0 0.768
                      0 0 0 0 0.212
                      0 0 0 0 0.192
                      0 0 0 0.55 0"
            />
          </filter>
        </defs>
        <rect width="100%" height="100%" filter="url(#hero-bg-noise)" />
      </svg>
    </div>
  )
}
