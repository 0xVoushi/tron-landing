/**
 * Always-rendered static hero background. Server component, no JS cost.
 *
 * On mobile this is the ONLY background — `HeroVisual` does not mount the
 * WebGL PixelBlast on small viewports, so the three.js + postprocessing
 * chunk (140 KB gz / 560 KB decoded) is never requested.
 *
 * On desktop this renders first (instant), then PixelBlast paints on top
 * via `transparent: true`. The solid #161616 floor stays visible through
 * the transparent canvas, giving the WebGL output a clean dark base.
 */
export function StaticHeroBackground() {
  return <div aria-hidden="true" className="absolute inset-0 bg-dark-hard" />
}
