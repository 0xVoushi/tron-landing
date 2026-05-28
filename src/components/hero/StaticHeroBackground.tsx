/**
 * Always-rendered static hero background. Server component, no JS cost.
 *
 * Solid #161616 floor (bg-dark-hard) with a subtle SVG fractal noise
 * pattern overlaid via mix-blend-screen at 50% opacity. The noise is
 * tinted toward brand red so the hero has a textured feel even on
 * mobile, where PixelBlast doesn't mount.
 *
 * On mobile this is the ONLY background — `HeroVisual` does not mount
 * the WebGL PixelBlast on small viewports, so the three.js +
 * postprocessing chunk (140 KB gz / 560 KB decoded) is never requested.
 *
 * On desktop this renders first (instant), then PixelBlast paints on
 * top via `transparent: true`. The SVG noise + brand tint stays
 * visible through the transparent canvas, giving the WebGL output a
 * slightly richer base texture.
 */
export function StaticHeroBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 bg-dark-hard overflow-hidden">
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
