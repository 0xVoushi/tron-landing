# Targo Hero Section — Design Spec

**Date:** 2026-04-07  
**Status:** Approved  
**Project:** tron-landing (Next.js 15 + Tailwind CSS + TypeScript)

---

## 1. Context

This is the initial build for the `tron-landing` project — a greenfield Next.js 15 site with no existing source code. The deliverable is a full project scaffold plus a high-end hero section for "targo", a logistics brand. The hero section is the only page at launch.

---

## 2. Brand Tokens

| Token | Value |
|-------|-------|
| Primary background | `#000000` |
| Brand red | `#EE3F2C` |
| Primary text | `#ffffff` |
| Font family | Rubik (Google Fonts) |
| Font weights used | 400, 500, 600, 700, 800 |

---

## 3. Project Scaffold

Full Next.js 15 project initialized from scratch:

```
tron-landing/
├── app/
│   ├── layout.tsx          # Root layout — Rubik via next/font/google, metadata
│   ├── page.tsx            # Homepage — renders <HeroSection />
│   └── globals.css         # Tailwind directives + .btn-clipped + .glass-card utilities
├── components/
│   ├── hero/
│   │   ├── HeroSection.tsx       # Section wrapper, relative positioning container
│   │   ├── Navbar.tsx            # Logo + nav links + ClippedButton nav CTA
│   │   ├── VideoBackground.tsx   # <video> element, autoPlay muted loop playsInline
│   │   ├── HeroContent.tsx       # Eyebrow + headline + ClippedButton CTA
│   │   └── ConsultationCard.tsx  # Glassmorphism card — phone icon + text + button
│   └── ui/
│       └── ClippedButton.tsx     # Shared button, variant prop: "red" | "white"
├── public/                 # Static assets
├── tailwind.config.ts      # Brand color tokens + Rubik font family
├── tsconfig.json
├── next.config.ts
└── package.json
```

---

## 4. Component Specifications

### 4.1 `HeroSection.tsx`
- `<section>` tag, `relative overflow-hidden w-full h-screen` (100vh)
- Renders: `VideoBackground`, `Navbar`, `HeroContent`, `ConsultationCard` in z-order
- No overlay, no dark tint on video

### 4.2 `VideoBackground.tsx`
- `<video>` element: `autoPlay muted loop playsInline`
- `src`: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260227_042027_c4b2f2ea-1c7c-4d6e-9e3d-81a78063703f.mp4`
- Positioned `absolute inset-0`, `object-cover w-full h-full`
- `aria-hidden="true"`
- No overlay element, no dark gradient — video at 100% opacity

### 4.3 `Navbar.tsx`
- `absolute top-0 left-0 right-0 z-20`
- Padding: `py-[22px] px-12` (desktop), `py-4 px-8` (mobile)
- Background: `linear-gradient(180deg, rgba(0,0,0,0.25) 0%, transparent 100%)` — keeps nav readable without blocking video
- **Left:** SVG logo mark (abstract arrow/chevron shape, white) + "targo" wordmark in Rubik 700, uppercase, letter-spacing 3px
- **Center:** Nav links — "Home", "About", "Contact Us" — Rubik 500, 13px, `rgba(255,255,255,0.75)`
- **Right:** `<ClippedButton variant="red">Contact Us</ClippedButton>` — small, 12px text
- **Mobile:** nav links hidden, hamburger icon replaces them (toggle with `useState`)

### 4.4 `HeroContent.tsx`
- `absolute top-[108px] left-12 z-10 max-w-[520px]`
- Mobile: `top-[80px] left-8`
- **Eyebrow:** "Logistics & Transport" — 11px, Rubik 600, `#EE3F2C`, letter-spacing 3px, uppercase
- **Headline:** "Swift and Simple Transport" — Rubik 800, 64px desktop / 42px mobile, uppercase, letter-spacing `-0.04em`, line-height `1.0`, white, heavy `text-shadow` for video legibility:
  ```css
  text-shadow: 1px 1px 0 rgba(0,0,0,0.5), 0 0 60px rgba(0,0,0,0.8), 0 0 120px rgba(0,0,0,0.6);
  ```
- **CTA:** `<ClippedButton variant="red" size="lg">Get Started</ClippedButton>`

### 4.5 `ConsultationCard.tsx`
- `absolute bottom-9 left-12 z-20`
- Mobile: `bottom-6 left-8`
- Layout: horizontal flex, `items-center gap-[14px]`, `py-[14px] px-[18px]`
- **Icon:** white circle `w-10 h-10`, `Phone` icon from `lucide-react` (18px, stroke `#111`)
- **Text:** small label "Free" (10px, uppercase, 50% opacity) + "Book a Consultation" (Rubik 600, 14px)
- **Button:** `<ClippedButton variant="white">Book a Call</ClippedButton>`
- **Glassmorphism styles** (in `globals.css` as `.glass-card` utility):
  ```css
  .glass-card {
    background: linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.03) 100%);
    backdrop-filter: blur(40px) saturate(180%);
    -webkit-backdrop-filter: blur(40px) saturate(180%);
    border: 1px solid rgba(255,255,255,0.12);
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.15),
      inset 0 -1px 0 rgba(0,0,0,0.10),
      0 8px 32px rgba(0,0,0,0.30);
  }
  .glass-card::before {
    content: '';
    position: absolute; inset: 0;
    border-radius: inherit;
    background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 40%, transparent 60%);
    pointer-events: none;
  }
  ```

### 4.6 `ClippedButton.tsx`
- Props: `variant: "red" | "white"`, `size?: "sm" | "md" | "lg"`, `children`, `onClick?`, `className?`
- Clip-path utility in `globals.css`:
  ```css
  .btn-clipped-sm  { clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%); }
  .btn-clipped-md  { clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%); }
  .btn-clipped-lg  { clip-path: polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%); }
  ```
- Variant styles:
  - `red`: `bg-[#EE3F2C] text-white`
  - `white`: `bg-white text-black`
- Size → padding mapping: `sm` = `py-2 px-4 text-[11px]`, `md` = `py-[9px] px-[18px] text-[12px]`, `lg` = `py-[14px] px-[28px] text-[13px]`
- Font: Rubik 700, uppercase, letter-spacing 0.05em
- `border-none cursor-pointer` — no hover state change (clip-path breaks standard border/outline)

---

## 5. Tailwind Config

```ts
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      brand: {
        red: '#EE3F2C',
        black: '#000000',
      }
    },
    fontFamily: {
      rubik: ['var(--font-rubik)', 'sans-serif'],
    },
  }
}
```

---

## 6. Font Setup

```tsx
// app/layout.tsx
import { Rubik } from 'next/font/google'

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-rubik',
  display: 'swap',
})
```

Applied via `className={rubik.variable}` on `<html>`.

---

## 7. Responsiveness

| Breakpoint | Headline | Padding | Notes |
|------------|----------|---------|-------|
| Desktop (≥1024px) | 64px | px-12 (48px) | Full layout |
| Tablet (768–1023px) | 52px | px-10 (40px) | Nav links still visible |
| Mobile (<768px) | 42px | px-8 (32px) | Nav links hidden → hamburger |

---

## 8. Decisions Made

| Decision | Choice | Reason |
|----------|--------|--------|
| Text legibility | Text-shadow only, no overlay | User requested Option A (strict — no overlay) |
| Component structure | Decomposed (5 components + 1 shared UI) | User chose Option B |
| Project scope | Full Next.js 15 scaffold | User confirmed full project init |
| Font loading | `next/font/google` | Follows frontend-developer.md agent pattern |

---

## 9. Verification

After implementation:

1. `npm run dev` — dev server starts, no TypeScript errors
2. Open `http://localhost:3000` — hero section visible, video autoplays, muted
3. Resize to mobile (375px) — headline scales to ~42px, nav hamburger appears
4. Check clip-path buttons in all three instances (nav CTA, Get Started, Book a Call)
5. Verify glassmorphism card backdrop-filter (requires browser that supports it — Chrome/Safari)
6. `npm run build` — static build completes, no errors
