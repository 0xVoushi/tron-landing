# Warm Light Redesign — Design Spec

## Problem

The current dark-themed site feels too heavy, monotonous, and generic. Every section uses the same glass-card treatment on near-black backgrounds. The extrabold uppercase typography feels like a crypto template rather than a premium product. The user wants to adopt gokite.ai's editorial, airy design philosophy while keeping the red brand colors.

## Direction

Switch from dark (#161616) to warm light (#fafafa) theme. Keep the dark hero section with the background image, then transition to light body. Adopt gokite-inspired editorial typography (lighter weights, negative kerning) and bracketed section labels. Keep existing layouts, content, and component structure.

---

## Color Mapping

All tokens already exist in `globals.css` `@theme inline {}`. No new tokens needed — just different surfaces.

| Surface | Token | Value | Was (dark theme) |
|---------|-------|-------|-----------------|
| Page body | `grey-light` | `#fafafa` | `dark-hard` #161616 |
| Cards | `white` | `#ffffff` | `rgba(255,255,255,0.03)` |
| Card border | `grey-medium` | `#bbbbbb33` | `rgba(255,255,255,0.08)` |
| Card shadow | standard soft | `0 1px 3px rgba(0,0,0,0.06)` | `0 1px 3px rgba(0,0,0,0.3)` |
| Hero | `dark-hard` | `#161616` | same |
| Section alt bg | `white` | `#ffffff` | `dark` #313131 |
| Headlines | `dark-hard` | `#161616` | `grey-light` #fafafa |
| Body text | `dark` | `#313131` | `grey` #aaaaaa |
| Muted text | `grey` | `#aaaaaa` | `white-30` |
| Bracket accent | `primary` | `#C4362F` | n/a |
| Icons | `primary` | `#C4362F` | same |
| Divider lines | `grey-medium` | `#bbbbbb33` | `primary/20` gradient |
| Footer bg | `white` | `#ffffff` | `dark` #313131 |

---

## Typography Changes

### Headlines (h1, h2)

**Before:** `font-extrabold` (800), `uppercase`, `tracking-[-0.02em]`
**After:** `font-light` (300) or `font-normal` (400), **no uppercase**, `tracking-[-0.04em]`

This is the single biggest visual change. Example:

Before: **HOW IT WORKS** (extrabold, uppercase, 40px)
After: How It Works (light, title-case, 44px with tight kerning)

Size scale stays similar but bumps slightly:
- Section h2: `text-[34px] md:text-[44px]` (was 32/40)
- Hero h1: `text-[38px] md:text-[48px] lg:text-[58px]` (stays same)

### Section Labels (Bracketed)

**Before:** `<p class="font-semibold text-[11px] text-primary-medium uppercase tracking-[3px]">Simple Process</p>`

**After:** `<p class="font-normal text-[15px] md:text-[17px] text-dark-hard tracking-[-0.02em]">Kite <span class="text-primary">[ </span>How It Works<span class="text-primary"> ]</span></p>`

Pattern: `Brand [ Section Name ]` or just `[ Section Name ]` — brackets in red accent.

For our site, the format will be:
```tsx
<p className="font-rubik font-normal text-[15px] md:text-[17px] text-dark-hard tracking-[-0.02em] mb-4 text-center">
  Multisender <span className="text-primary font-light">[ </span>How It Works<span className="text-primary font-light"> ]</span>
</p>
```

### Body Text

Add `tracking-[-0.01em]` for tighter feel. Stay at weight 400.

---

## Component Changes

### `globals.css`

1. `:root` variables: `--background: #fafafa`, `--foreground: #161616`
2. `.glass-card` utility — replace dark version with light:
   ```css
   .glass-card {
     background: #ffffff;
     border: 1px solid #bbbbbb33;
     box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.03);
   }
   ```
   Remove `backdrop-filter: blur(12px)` — not needed on light backgrounds.

### `layout.tsx`

Body class: `bg-grey-light font-rubik antialiased text-dark` (was `bg-dark-hard ... text-grey-light`)

### `Navbar.tsx`

- Not scrolled (on dark hero): text stays white, transparent bg — **same as now**
- Scrolled: `bg-white/90 backdrop-blur-xl rounded-full border border-grey-medium shadow-sm` — **light pill**
- Link colors scrolled: `text-dark hover:text-dark-hard`
- On subpages (no dark hero): `alwaysOpaque` shows light pill immediately
- Hamburger icon: white on hero, dark when scrolled

### `HeroSection.tsx` + `HeroContent.tsx` + `VideoBackground.tsx`

- Hero stays `bg-dark-hard` with dark overlay — **unchanged**
- Headline: drop to `font-medium` (500) or `font-normal` (400), keep white, keep shadow
- Overline label: switch to bracket pattern with `text-white-80` brackets
- Body text: `text-white-40` — **unchanged**
- After hero, add a gradient transition div: `bg-gradient-to-b from-dark-hard to-grey-light h-24`

### `ConsultationCard.tsx`

- Stays on dark hero, so keep dark styling: `bg-white-10` border, white text
- No changes needed

### `StatsBar.tsx`

- Section: `bg-white border-y border-grey-medium`
- Cards: `glass-card` (now white/light)
- Values: `text-primary`
- Labels: `text-dark-hard`
- Sublabels: `text-grey`
- Hover: `hover:shadow-md hover:scale-[1.02] transition-all duration-500`

### `HowItWorks.tsx`

- Section: `bg-grey-light`
- Timeline line: `bg-gradient-to-b from-primary/30 via-grey-medium to-primary/30`
- Dots: `bg-primary border-2 border-grey-light` (was `border-dark`)
- Cards: `glass-card` (now white/light)
- Background step numbers: `text-black-4` (was `text-white-5`)
- Title: `text-dark-hard`
- Body: `text-dark`
- Section label: bracket pattern
- Section heading: `font-light text-[34px] md:text-[44px] text-dark-hard tracking-[-0.04em]`

### `Features.tsx`

- Section: `bg-grey-light`
- Cards: `glass-card` with hover lift + shadow increase
- Icon circle: `bg-primary-ghost` (10% red — same token, looks fine on light)
- Title: `text-dark-hard`
- Body: `text-dark`
- Hover: `hover:shadow-md hover:-translate-y-1 hover:scale-[1.01] transition-all duration-500`

### `SupportedTokens.tsx`

- Section: `bg-white`
- Cards: `glass-card`
- Symbol: `text-dark-hard`
- Name: `text-grey`
- Native badge: `bg-primary-ghost text-primary`
- Other badges: `bg-black-4 text-grey`

### `PricingSection.tsx`

- Section: `bg-white`
- Cards: `glass-card`
- Label: bracket pattern with red brackets
- Title: `text-dark-hard`
- Body: `text-dark`
- CTA link: `text-primary hover:text-primary-light`

### `FaqSection.tsx`

- Section: `bg-grey-light`
- Accordion items: `glass-card`
- Question: `text-dark-hard`
- Answer: `text-dark`
- Chevron: `text-grey`

### `Footer.tsx`

- Background: `bg-white border-t border-grey-medium`
- Description: `text-dark`
- Social icons: `text-grey hover:text-primary`
- Headings: `text-grey`
- Links: `text-dark hover:text-dark-hard`
- Copyright: `text-grey`
- Disclaimer: `text-grey`

### `PillButton.tsx`

- `primary`: **unchanged** — red gradient + shimmer works on both dark hero and light body
- `secondary`: `bg-black-4 text-dark-hard border border-grey-medium hover:bg-black-10` (was white-10 for dark)
- `ghost`: `bg-transparent text-dark hover:bg-black-4` (was text-grey-light)

### `MobileLaunchButton.tsx`

- **unchanged** — red gradient pill looks good on any background

### `page.tsx` Section Dividers

- Change from `via-primary/20` to `via-grey-medium` — subtle grey lines instead of red tinted

### Subpages (`guide`, `referral`, `vip`)

All switch from `bg-dark-hard` to `bg-grey-light`:
- Headlines: `text-dark-hard font-light tracking-[-0.04em]` (no uppercase)
- Body: `text-dark`
- Cards: `glass-card` (white/light)
- Overlines: bracket pattern
- `alwaysDark` → `alwaysOpaque` stays for light pill navbar
- CTA buttons and badges: same adjustments as main page sections
- Step number badges: `bg-primary-ghost text-primary`
- Back links: `text-grey hover:text-dark-hard`

---

## What Does NOT Change

- All content, copy, section ordering
- Page structure and routing (/, /guide, /referral, /vip)
- SEO metadata and JSON-LD schemas
- PillButton component API (just class adjustments)
- Timeline layout structure in HowItWorks
- Grid layouts in all sections
- Animations (shimmer, float, saturate-pulse)
- Rubik font family (weights 300-800)
- Hero dark section with background image
- ConsultationCard (stays on dark hero)

---

## Verification

1. `npm run build` — zero TS errors
2. `npm run dev` — visually check all 4 pages
3. `npm test` — all tests pass
4. Check: hero-to-light transition, navbar scroll behavior, card hover effects, bracket labels, typography weights
5. Responsive check: mobile, tablet, desktop
