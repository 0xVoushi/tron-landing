# Targo Hero Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Scaffold a full Next.js 15 project and implement a high-end, dark-themed hero section for the "targo" logistics brand with video background, glassmorphism card, and geometric clip-path buttons.

**Architecture:** Decomposed component structure — `HeroSection` composes five focused child components (`VideoBackground`, `Navbar`, `HeroContent`, `ConsultationCard`) plus a shared `ClippedButton` UI primitive. Custom CSS utilities for clip-path and glassmorphism live in `globals.css`. Tailwind handles all layout and spacing.

**Tech Stack:** Next.js 15 (App Router, TypeScript), Tailwind CSS v3, lucide-react, next/font/google (Rubik), Jest + React Testing Library.

**Spec:** `docs/superpowers/specs/2026-04-07-targo-hero-design.md`

---

## File Map

| File | Action | Purpose |
|------|--------|---------|
| `package.json` | Create (via scaffold) | Dependencies |
| `tailwind.config.ts` | Modify | Brand tokens: `brand.red`, `font-rubik` |
| `app/globals.css` | Modify | Tailwind directives + `.btn-clipped-*` + `.glass-card` |
| `app/layout.tsx` | Modify | Rubik font via `next/font/google`, base metadata |
| `app/page.tsx` | Modify | Renders `<HeroSection />` |
| `components/ui/ClippedButton.tsx` | Create | Shared clipped-corner button, `variant` + `size` props |
| `components/ui/ClippedButton.test.tsx` | Create | TDD tests for button |
| `components/hero/VideoBackground.tsx` | Create | `<video>` element, muted autoplay |
| `components/hero/VideoBackground.test.tsx` | Create | Smoke test |
| `components/hero/Navbar.tsx` | Create | Logo + nav links + hamburger (mobile) |
| `components/hero/Navbar.test.tsx` | Create | TDD tests for navbar |
| `components/hero/HeroContent.tsx` | Create | Eyebrow + headline + CTA |
| `components/hero/HeroContent.test.tsx` | Create | TDD tests for hero content |
| `components/hero/ConsultationCard.tsx` | Create | Glassmorphism card with Phone icon |
| `components/hero/ConsultationCard.test.tsx` | Create | TDD tests for card |
| `components/hero/HeroSection.tsx` | Create | Section wrapper composing all hero components |
| `components/hero/HeroSection.test.tsx` | Create | Smoke test |
| `jest.config.ts` | Create | Jest config for Next.js |
| `jest.setup.ts` | Create | `@testing-library/jest-dom` import |

---

## Task 1: Initialize Next.js 15 project

**Files:**
- Create: all scaffold files (`package.json`, `tsconfig.json`, `next.config.ts`, `tailwind.config.ts`, `app/layout.tsx`, `app/page.tsx`, `app/globals.css`)

- [ ] **Step 1: Run create-next-app in the project directory**

```bash
cd /Users/voushi/Documents/GitHub/Multisender/tron-landing
npx create-next-app@latest . --typescript --tailwind --eslint --app --import-alias "@/*" --yes
```

Expected output: scaffold files created, `node_modules/` installed.
If it warns about existing files, accept overwrite prompts.

- [ ] **Step 2: Verify dev server starts**

```bash
npm run dev
```

Open `http://localhost:3000` — default Next.js welcome page should appear. Stop with `Ctrl+C`.

- [ ] **Step 3: Verify TypeScript build**

```bash
npm run build
```

Expected: build succeeds with no errors.

- [ ] **Step 4: Commit initial scaffold**

```bash
git add -A
git commit -m "feat: init Next.js 15 project scaffold"
```

---

## Task 2: Configure Tailwind brand tokens

**Files:**
- Modify: `tailwind.config.ts`

- [ ] **Step 1: Replace tailwind.config.ts content**

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#EE3F2C',
          black: '#000000',
        },
      },
      fontFamily: {
        rubik: ['var(--font-rubik)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
```

- [ ] **Step 2: Verify Tailwind still compiles**

```bash
npm run build
```

Expected: build succeeds, no Tailwind errors.

- [ ] **Step 3: Commit**

```bash
git add tailwind.config.ts
git commit -m "feat: add brand color and font tokens to tailwind config"
```

---

## Task 3: Root layout — Rubik font + globals.css utilities

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`

- [ ] **Step 1: Replace app/globals.css**

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ── Clip-path button utilities ─────────────────── */
.btn-clipped-sm {
  clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
}
.btn-clipped-md {
  clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
}
.btn-clipped-lg {
  clip-path: polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%);
}

/* ── Glassmorphism card ─────────────────────────── */
.glass-card {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.03) 100%
  );
  backdrop-filter: blur(40px) saturate(180%);
  -webkit-backdrop-filter: blur(40px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.15),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1),
    0 8px 32px rgba(0, 0, 0, 0.3);
}
.glass-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.02) 40%,
    transparent 60%
  );
  pointer-events: none;
}

/* ── Hero headline text-shadow ──────────────────── */
.hero-headline-shadow {
  text-shadow:
    1px 1px 0 rgba(0, 0, 0, 0.5),
    0 0 60px rgba(0, 0, 0, 0.8),
    0 0 120px rgba(0, 0, 0, 0.6);
}
```

- [ ] **Step 2: Replace app/layout.tsx**

```tsx
// app/layout.tsx
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-rubik',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Targo — Swift and Simple Transport',
  description: 'Professional logistics and transport solutions. Book a free consultation today.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={rubik.variable}>
      <body className="bg-black font-rubik antialiased">{children}</body>
    </html>
  )
}
```

- [ ] **Step 3: Verify build**

```bash
npm run build
```

Expected: build succeeds, Rubik font is fetched from Google Fonts during build.

- [ ] **Step 4: Commit**

```bash
git add app/globals.css app/layout.tsx
git commit -m "feat: configure Rubik font, CSS utilities for clip-path and glassmorphism"
```

---

## Task 4: Install testing dependencies

**Files:**
- Create: `jest.config.ts`
- Create: `jest.setup.ts`
- Modify: `package.json` (scripts)

- [ ] **Step 1: Install packages**

```bash
npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event @types/jest
```

- [ ] **Step 2: Create jest.config.ts**

```ts
// jest.config.ts
import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

export default createJestConfig(config)
```

**Note:** `next/jest` automatically handles Next.js-specific transforms (font mocking, CSS module handling).

- [ ] **Step 3: Create jest.setup.ts**

```ts
// jest.setup.ts
import '@testing-library/jest-dom'
```

- [ ] **Step 4: Add test script to package.json**

In `package.json`, add to the `"scripts"` section:

```json
"test": "jest",
"test:watch": "jest --watch"
```

- [ ] **Step 5: Verify jest runs**

```bash
npm test -- --passWithNoTests
```

Expected: `Test Suites: 0 passed` (no tests yet, exits 0).

- [ ] **Step 6: Commit**

```bash
git add jest.config.ts jest.setup.ts package.json package-lock.json
git commit -m "feat: add Jest + React Testing Library setup"
```

---

## Task 5: ClippedButton component (TDD)

**Files:**
- Create: `components/ui/ClippedButton.tsx`
- Create: `components/ui/ClippedButton.test.tsx`

- [ ] **Step 1: Write the failing tests**

```tsx
// components/ui/ClippedButton.test.tsx
import { render, screen } from '@testing-library/react'
import { ClippedButton } from './ClippedButton'

describe('ClippedButton', () => {
  it('renders children', () => {
    render(<ClippedButton variant="red">Get Started</ClippedButton>)
    expect(screen.getByRole('button', { name: 'Get Started' })).toBeInTheDocument()
  })

  it('applies red variant classes', () => {
    render(<ClippedButton variant="red">Go</ClippedButton>)
    const btn = screen.getByRole('button')
    expect(btn).toHaveClass('bg-brand-red')
    expect(btn).toHaveClass('text-white')
  })

  it('applies white variant classes', () => {
    render(<ClippedButton variant="white">Book</ClippedButton>)
    const btn = screen.getByRole('button')
    expect(btn).toHaveClass('bg-white')
    expect(btn).toHaveClass('text-black')
  })

  it('applies sm clip-path class by default', () => {
    render(<ClippedButton variant="red">Go</ClippedButton>)
    expect(screen.getByRole('button')).toHaveClass('btn-clipped-sm')
  })

  it('applies lg clip-path class when size is lg', () => {
    render(<ClippedButton variant="red" size="lg">Go</ClippedButton>)
    expect(screen.getByRole('button')).toHaveClass('btn-clipped-lg')
  })

  it('applies md clip-path class when size is md', () => {
    render(<ClippedButton variant="red" size="md">Go</ClippedButton>)
    expect(screen.getByRole('button')).toHaveClass('btn-clipped-md')
  })

  it('forwards className prop', () => {
    render(<ClippedButton variant="red" className="custom-class">Go</ClippedButton>)
    expect(screen.getByRole('button')).toHaveClass('custom-class')
  })

  it('calls onClick when clicked', async () => {
    const handleClick = jest.fn()
    render(<ClippedButton variant="red" onClick={handleClick}>Go</ClippedButton>)
    screen.getByRole('button').click()
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
npm test -- components/ui/ClippedButton.test.tsx
```

Expected: FAIL — `Cannot find module './ClippedButton'`.

- [ ] **Step 3: Implement ClippedButton**

```tsx
// components/ui/ClippedButton.tsx
import { ReactNode } from 'react'

type Variant = 'red' | 'white'
type Size = 'sm' | 'md' | 'lg'

interface ClippedButtonProps {
  variant: Variant
  size?: Size
  children: ReactNode
  onClick?: () => void
  className?: string
}

const variantClasses: Record<Variant, string> = {
  red: 'bg-brand-red text-white',
  white: 'bg-white text-black',
}

const sizeClasses: Record<Size, string> = {
  sm: 'btn-clipped-sm py-2 px-4 text-[11px]',
  md: 'btn-clipped-md py-[9px] px-[18px] text-[12px]',
  lg: 'btn-clipped-lg py-[14px] px-[28px] text-[13px]',
}

export function ClippedButton({
  variant,
  size = 'sm',
  children,
  onClick,
  className = '',
}: ClippedButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        font-rubik font-bold uppercase tracking-[0.05em]
        border-none cursor-pointer
        ${className}
      `.trim()}
    >
      {children}
    </button>
  )
}
```

- [ ] **Step 4: Run tests — verify they pass**

```bash
npm test -- components/ui/ClippedButton.test.tsx
```

Expected: `Tests: 8 passed`.

- [ ] **Step 5: Commit**

```bash
git add components/ui/ClippedButton.tsx components/ui/ClippedButton.test.tsx
git commit -m "feat: add ClippedButton shared UI component with TDD"
```

---

## Task 6: VideoBackground component

**Files:**
- Create: `components/hero/VideoBackground.tsx`
- Create: `components/hero/VideoBackground.test.tsx`

- [ ] **Step 1: Write the test**

```tsx
// components/hero/VideoBackground.test.tsx
import { render } from '@testing-library/react'
import { VideoBackground } from './VideoBackground'

describe('VideoBackground', () => {
  it('renders a video element', () => {
    const { container } = render(<VideoBackground />)
    const video = container.querySelector('video')
    expect(video).toBeInTheDocument()
  })

  it('video has aria-hidden', () => {
    const { container } = render(<VideoBackground />)
    const video = container.querySelector('video')
    expect(video).toHaveAttribute('aria-hidden', 'true')
  })

  it('video has loop attribute', () => {
    const { container } = render(<VideoBackground />)
    const video = container.querySelector('video')
    expect(video).toHaveAttribute('loop')
  })

  it('video has playsInline attribute', () => {
    const { container } = render(<VideoBackground />)
    const video = container.querySelector('video')
    expect(video).toHaveAttribute('playsInline')
  })
})
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
npm test -- components/hero/VideoBackground.test.tsx
```

Expected: FAIL — `Cannot find module './VideoBackground'`.

- [ ] **Step 3: Implement VideoBackground**

```tsx
// components/hero/VideoBackground.tsx
'use client'

import { useEffect, useRef } from 'react'

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260227_042027_c4b2f2ea-1c7c-4d6e-9e3d-81a78063703f.mp4'

export function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)

  // React doesn't forward the `muted` prop to the DOM — set it via ref
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
    }
  }, [])

  return (
    <video
      ref={videoRef}
      src={VIDEO_SRC}
      autoPlay
      loop
      playsInline
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover"
    />
  )
}
```

- [ ] **Step 4: Run tests — verify they pass**

```bash
npm test -- components/hero/VideoBackground.test.tsx
```

Expected: `Tests: 4 passed`.

- [ ] **Step 5: Commit**

```bash
git add components/hero/VideoBackground.tsx components/hero/VideoBackground.test.tsx
git commit -m "feat: add VideoBackground component"
```

---

## Task 7: Navbar component (TDD)

**Files:**
- Create: `components/hero/Navbar.tsx`
- Create: `components/hero/Navbar.test.tsx`

- [ ] **Step 1: Write the failing tests**

```tsx
// components/hero/Navbar.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the targo wordmark', () => {
    render(<Navbar />)
    expect(screen.getByText('targo')).toBeInTheDocument()
  })

  it('renders Home nav link', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  it('renders About nav link', () => {
    render(<Navbar />)
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('renders Contact Us nav link', () => {
    render(<Navbar />)
    // There are two "Contact Us" — nav link and CTA button — both should be present
    const contactElements = screen.getAllByText('Contact Us')
    expect(contactElements.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the CTA button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: 'Contact Us' })).toBeInTheDocument()
  })

  it('renders hamburger button on initial load (accessible)', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('toggles mobile menu open when hamburger is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const hamburger = screen.getByRole('button', { name: /open menu/i })
    await user.click(hamburger)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
npm test -- components/hero/Navbar.test.tsx
```

Expected: FAIL — `Cannot find module './Navbar'`.

- [ ] **Step 3: Implement Navbar**

```tsx
// components/hero/Navbar.tsx
'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ClippedButton } from '@/components/ui/ClippedButton'

const NAV_LINKS = ['Home', 'About', 'Contact Us'] as const

function LogoMark() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <path d="M4 8h16l8 8-8 8H4l8-8L4 8z" fill="white" opacity="0.9" />
      <path d="M10 8h10l6 8-6 8H10l6-8-6-8z" fill="white" opacity="0.3" />
    </svg>
  )
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      className="absolute top-0 left-0 right-0 z-20 flex items-center py-[22px] px-12 md:px-10 sm:px-8"
      style={{
        background: 'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, transparent 100%)',
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-[10px] flex-shrink-0">
        <LogoMark />
        <span className="font-rubik font-bold text-[18px] text-white uppercase tracking-[3px]">
          targo
        </span>
      </div>

      {/* Desktop nav links */}
      <div className="hidden md:flex items-center gap-8 ml-12">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href="#"
            className="font-rubik font-medium text-[13px] text-white/75 hover:text-white transition-colors"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Desktop CTA */}
      <div className="hidden md:block ml-auto">
        <ClippedButton variant="red" size="sm">
          Contact Us
        </ClippedButton>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden ml-auto text-white"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm flex flex-col p-6 gap-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="font-rubik font-medium text-[15px] text-white/80 hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
          <div className="pt-2">
            <ClippedButton variant="red" size="md">
              Contact Us
            </ClippedButton>
          </div>
        </div>
      )}
    </nav>
  )
}
```

- [ ] **Step 4: Install lucide-react (needed for Menu/X icons)**

```bash
npm install lucide-react
```

- [ ] **Step 5: Run tests — verify they pass**

```bash
npm test -- components/hero/Navbar.test.tsx
```

Expected: `Tests: 7 passed`.

- [ ] **Step 6: Commit**

```bash
git add components/hero/Navbar.tsx components/hero/Navbar.test.tsx package.json package-lock.json
git commit -m "feat: add Navbar component with mobile hamburger menu"
```

---

## Task 8: HeroContent component (TDD)

**Files:**
- Create: `components/hero/HeroContent.tsx`
- Create: `components/hero/HeroContent.test.tsx`

- [ ] **Step 1: Write the failing tests**

```tsx
// components/hero/HeroContent.test.tsx
import { render, screen } from '@testing-library/react'
import { HeroContent } from './HeroContent'

describe('HeroContent', () => {
  it('renders the eyebrow text', () => {
    render(<HeroContent />)
    expect(screen.getByText('Logistics & Transport')).toBeInTheDocument()
  })

  it('renders the headline as h1', () => {
    render(<HeroContent />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Swift and Simple Transport')
  })

  it('renders the Get Started CTA button', () => {
    render(<HeroContent />)
    expect(screen.getByRole('button', { name: 'Get Started' })).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
npm test -- components/hero/HeroContent.test.tsx
```

Expected: FAIL — `Cannot find module './HeroContent'`.

- [ ] **Step 3: Implement HeroContent**

```tsx
// components/hero/HeroContent.tsx
import { ClippedButton } from '@/components/ui/ClippedButton'

export function HeroContent() {
  return (
    <div className="absolute top-[108px] left-12 z-10 max-w-[520px] md:top-[90px] md:left-10 sm:top-[80px] sm:left-8">
      {/* Eyebrow */}
      <p className="font-rubik font-semibold text-[11px] text-brand-red uppercase tracking-[3px] mb-[14px]">
        Logistics &amp; Transport
      </p>

      {/* Headline */}
      <h1
        className={[
          'font-rubik font-extrabold uppercase text-white',
          'text-[64px] md:text-[52px] sm:text-[42px]',
          'leading-[1.0] tracking-[-0.04em]',
          'mb-7',
          'hero-headline-shadow',
        ].join(' ')}
      >
        Swift and Simple Transport
      </h1>

      {/* CTA */}
      <ClippedButton variant="red" size="lg">
        Get Started
      </ClippedButton>
    </div>
  )
}
```

- [ ] **Step 4: Run tests — verify they pass**

```bash
npm test -- components/hero/HeroContent.test.tsx
```

Expected: `Tests: 3 passed`.

- [ ] **Step 5: Commit**

```bash
git add components/hero/HeroContent.tsx components/hero/HeroContent.test.tsx
git commit -m "feat: add HeroContent component with headline and CTA"
```

---

## Task 9: ConsultationCard component (TDD)

**Files:**
- Create: `components/hero/ConsultationCard.tsx`
- Create: `components/hero/ConsultationCard.test.tsx`

- [ ] **Step 1: Write the failing tests**

```tsx
// components/hero/ConsultationCard.test.tsx
import { render, screen } from '@testing-library/react'
import { ConsultationCard } from './ConsultationCard'

describe('ConsultationCard', () => {
  it('renders the "Free" label', () => {
    render(<ConsultationCard />)
    expect(screen.getByText('Free')).toBeInTheDocument()
  })

  it('renders "Book a Consultation" title', () => {
    render(<ConsultationCard />)
    expect(screen.getByText('Book a Consultation')).toBeInTheDocument()
  })

  it('renders the Book a Call button', () => {
    render(<ConsultationCard />)
    expect(screen.getByRole('button', { name: 'Book a Call' })).toBeInTheDocument()
  })

  it('renders the phone icon (lucide)', () => {
    const { container } = render(<ConsultationCard />)
    // lucide-react renders SVGs — check one is present inside the icon wrapper
    const iconWrapper = container.querySelector('[data-testid="phone-icon"]')
    expect(iconWrapper).toBeInTheDocument()
    expect(iconWrapper!.querySelector('svg')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
npm test -- components/hero/ConsultationCard.test.tsx
```

Expected: FAIL — `Cannot find module './ConsultationCard'`.

- [ ] **Step 3: Implement ConsultationCard**

```tsx
// components/hero/ConsultationCard.tsx
import { Phone } from 'lucide-react'
import { ClippedButton } from '@/components/ui/ClippedButton'

export function ConsultationCard() {
  return (
    <div
      className={[
        'absolute bottom-9 left-12 z-20',
        'sm:bottom-6 sm:left-8',
        'flex items-center gap-[14px]',
        'py-[14px] px-[18px]',
        'rounded-[10px]',
        'relative glass-card',
      ].join(' ')}
    >
      {/* Phone icon circle */}
      <div
        data-testid="phone-icon"
        className="w-10 h-10 rounded-full bg-white/92 flex items-center justify-center flex-shrink-0 shadow-md"
      >
        <Phone size={18} stroke="#111" strokeWidth={2} />
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <span className="font-rubik font-medium text-[10px] text-white/50 uppercase tracking-[1.5px] mb-0.5">
          Free
        </span>
        <span className="font-rubik font-semibold text-[14px] text-white tracking-[-0.2px]">
          Book a Consultation
        </span>
      </div>

      {/* CTA */}
      <ClippedButton variant="white" size="sm" className="ml-2 whitespace-nowrap">
        Book a Call
      </ClippedButton>
    </div>
  )
}
```

- [ ] **Step 4: Run tests — verify they pass**

```bash
npm test -- components/hero/ConsultationCard.test.tsx
```

Expected: `Tests: 4 passed`.

- [ ] **Step 5: Commit**

```bash
git add components/hero/ConsultationCard.tsx components/hero/ConsultationCard.test.tsx
git commit -m "feat: add ConsultationCard with glassmorphism and Phone icon"
```

---

## Task 10: HeroSection assembly + page.tsx

**Files:**
- Create: `components/hero/HeroSection.tsx`
- Create: `components/hero/HeroSection.test.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Write the HeroSection smoke test**

```tsx
// components/hero/HeroSection.test.tsx
import { render } from '@testing-library/react'
import { HeroSection } from './HeroSection'

describe('HeroSection', () => {
  it('renders a section element', () => {
    const { container } = render(<HeroSection />)
    expect(container.querySelector('section')).toBeInTheDocument()
  })

  it('renders without crashing', () => {
    expect(() => render(<HeroSection />)).not.toThrow()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- components/hero/HeroSection.test.tsx
```

Expected: FAIL — `Cannot find module './HeroSection'`.

- [ ] **Step 3: Implement HeroSection**

```tsx
// components/hero/HeroSection.tsx
import { VideoBackground } from './VideoBackground'
import { Navbar } from './Navbar'
import { HeroContent } from './HeroContent'
import { ConsultationCard } from './ConsultationCard'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden w-full h-screen bg-black">
      <VideoBackground />
      <Navbar />
      <HeroContent />
      <ConsultationCard />
    </section>
  )
}
```

- [ ] **Step 4: Run test — verify it passes**

```bash
npm test -- components/hero/HeroSection.test.tsx
```

Expected: `Tests: 2 passed`.

- [ ] **Step 5: Update app/page.tsx**

```tsx
// app/page.tsx
import { HeroSection } from '@/components/hero/HeroSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
    </main>
  )
}
```

- [ ] **Step 6: Run full test suite**

```bash
npm test
```

Expected: All tests pass. `Test Suites: 6 passed, Tests: ~22 passed`.

- [ ] **Step 7: Commit**

```bash
git add components/hero/HeroSection.tsx components/hero/HeroSection.test.tsx app/page.tsx
git commit -m "feat: assemble HeroSection and wire to homepage"
```

---

## Task 11: Fix ConsultationCard positioning (absolute vs relative conflict)

The `ConsultationCard` uses `absolute bottom-9 left-12` but also `relative` (needed for `glass-card::before`). The `relative` must be on an inner wrapper, not the outer positioned element.

**Files:**
- Modify: `components/hero/ConsultationCard.tsx`

- [ ] **Step 1: Fix the double-positioning conflict**

The `absolute` class on ConsultationCard conflicts with `relative`. The `::before` pseudo-element needs a positioned ancestor — the `absolute` div itself serves as the positioned ancestor when it has `position: absolute`, so `relative` is unnecessary. Remove `relative` from the class list:

```tsx
// components/hero/ConsultationCard.tsx
import { Phone } from 'lucide-react'
import { ClippedButton } from '@/components/ui/ClippedButton'

export function ConsultationCard() {
  return (
    <div
      className={[
        'absolute bottom-9 left-12 z-20',
        'sm:bottom-6 sm:left-8',
        'flex items-center gap-[14px]',
        'py-[14px] px-[18px]',
        'rounded-[10px]',
        'glass-card',
      ].join(' ')}
    >
      {/* Phone icon circle */}
      <div
        data-testid="phone-icon"
        className="w-10 h-10 rounded-full bg-white/[.92] flex items-center justify-center flex-shrink-0 shadow-md"
      >
        <Phone size={18} stroke="#111" strokeWidth={2} />
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <span className="font-rubik font-medium text-[10px] text-white/50 uppercase tracking-[1.5px] mb-0.5">
          Free
        </span>
        <span className="font-rubik font-semibold text-[14px] text-white tracking-[-0.2px]">
          Book a Consultation
        </span>
      </div>

      {/* CTA */}
      <ClippedButton variant="white" size="sm" className="ml-2 whitespace-nowrap">
        Book a Call
      </ClippedButton>
    </div>
  )
}
```

- [ ] **Step 2: Run tests — verify still passing**

```bash
npm test
```

Expected: All tests pass.

- [ ] **Step 3: Commit**

```bash
git add components/hero/ConsultationCard.tsx
git commit -m "fix: remove conflicting relative class from ConsultationCard"
```

---

## Task 12: Final verification

- [ ] **Step 1: Run full test suite one last time**

```bash
npm test
```

Expected: All suites pass, zero failures.

- [ ] **Step 2: Start dev server**

```bash
npm run dev
```

Open `http://localhost:3000`. Verify:
- Hero section fills viewport (100vh)
- Video autoplays, muted, no overlay
- Navbar: logo left, links center, red CTA button right
- Headline "Swift and Simple Transport" — large, uppercase, bold
- Red "Get Started" button with diagonal cut corners (upper-right, lower-left)
- Glassmorphism consultation card bottom-left with blur effect
- All buttons have the clipped-corner polygon shape

- [ ] **Step 3: Verify mobile at 375px**

In browser DevTools, toggle device toolbar to iPhone SE (375px wide). Verify:
- Headline scales down to ~42px
- Nav links hidden, hamburger icon visible
- Tap hamburger → mobile dropdown opens with nav links
- Consultation card repositioned and visible

- [ ] **Step 4: Production build**

```bash
npm run build
```

Expected: Build succeeds. Check output for any TypeScript errors or missing imports.

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "feat: complete targo hero section — video bg, glassmorphism card, clipped buttons"
```
