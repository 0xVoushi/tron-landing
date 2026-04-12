# Tron Multisender Brand Defense Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand the tron-landing hero-only page into a full brand defense site for Tron Multisender with 8 sections and full SEO/AI optimization.

**Architecture:** All new sections are React Server Components in `src/components/sections/`. FAQ data lives in a single `src/data/faq.ts` file shared between the UI accordion and the JSON-LD schema injected in `layout.tsx`. Page composition happens in `page.tsx` by importing all sections sequentially.

**Tech Stack:** Next.js 16 App Router, React 19, Tailwind v4, TypeScript strict, Lucide React, Jest 30 + RTL 16.

---

## File Map

| Action | Path | Purpose |
|--------|------|---------|
| Create | `src/data/faq.ts` | Single source of truth for FAQ Q&A |
| Modify | `src/app/layout.tsx` | Title, meta, OG, JSON-LD schemas |
| Create | `src/app/sitemap.ts` | Next.js sitemap route |
| Create | `src/app/robots.ts` | Next.js robots.txt route |
| Modify | `src/components/hero/Navbar.tsx` | Brand name, nav links, CTA text |
| Modify | `src/components/hero/Navbar.test.tsx` | Update assertions for new copy |
| Modify | `src/components/hero/HeroContent.tsx` | Eyebrow, H1, subheadline, CTA |
| Modify | `src/components/hero/HeroContent.test.tsx` | Update assertions |
| Modify | `src/components/hero/ConsultationCard.tsx` | Shield icon, "Official Tool" copy |
| Modify | `src/components/hero/ConsultationCard.test.tsx` | Update assertions |
| Create | `src/components/sections/StatsBar.tsx` | 4 key stats |
| Create | `src/components/sections/StatsBar.test.tsx` | |
| Create | `src/components/sections/HowItWorks.tsx` | 4-step process |
| Create | `src/components/sections/HowItWorks.test.tsx` | |
| Create | `src/components/sections/Features.tsx` | 6-card feature grid |
| Create | `src/components/sections/Features.test.tsx` | |
| Create | `src/components/sections/SupportedTokens.tsx` | Token grid |
| Create | `src/components/sections/SupportedTokens.test.tsx` | |
| Create | `src/components/sections/FaqSection.tsx` | Accordion (Client Component) |
| Create | `src/components/sections/FaqSection.test.tsx` | Accordion open/close |
| Create | `src/components/layout/Footer.tsx` | Footer with links |
| Create | `src/components/layout/Footer.test.tsx` | |
| Modify | `src/app/page.tsx` | Compose all sections |

---

## Task 1: FAQ Data Module

**Files:**
- Create: `src/data/faq.ts`
- Create: `src/data/faq.test.ts`

- [ ] **Step 1: Write the failing test**

```ts
// src/data/faq.test.ts
import { FAQ_ITEMS } from './faq'

describe('FAQ_ITEMS', () => {
  it('exports a non-empty array', () => {
    expect(Array.isArray(FAQ_ITEMS)).toBe(true)
    expect(FAQ_ITEMS.length).toBeGreaterThan(0)
  })

  it('every item has a non-empty question and answer', () => {
    FAQ_ITEMS.forEach((item, i) => {
      expect(typeof item.question).toBe('string')
      expect(item.question.length).toBeGreaterThan(0)
      expect(typeof item.answer).toBe('string')
      expect(item.answer.length).toBeGreaterThan(0)
    })
  })

  it('has exactly 8 items', () => {
    expect(FAQ_ITEMS.length).toBe(8)
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
cd /Users/voushi/Documents/GitHub/Multisender/tron-landing
npm test -- src/data/faq.test.ts --no-coverage
```

Expected: FAIL with "Cannot find module './faq'"

- [ ] **Step 3: Implement the data module**

```ts
// src/data/faq.ts
export type FaqItem = {
  question: string
  answer: string
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What is Tron Multisender?',
    answer:
      'Tron Multisender is an official on-chain tool that lets you send TRX or TRC-20 tokens to multiple wallet addresses in a single blockchain transaction on the TRON network.',
  },
  {
    question: 'Is Tron Multisender safe to use?',
    answer:
      'Yes. Tron Multisender is fully non-custodial — your private keys never leave your wallet. All transfers happen directly on-chain via smart contract. There is no registration or account required.',
  },
  {
    question: 'What tokens does Tron Multisender support?',
    answer:
      'Tron Multisender supports TRX (native TRON), TRC-10 tokens, and any TRC-20 token including USDT, USDC, WTRX, and BTT. Any valid TRC-20 contract address can be used.',
  },
  {
    question: 'How many addresses can I send to at once?',
    answer:
      'You can send to up to 1,000 addresses in a single transaction. For larger distributions, you can split into multiple batches.',
  },
  {
    question: 'How much does it cost to use Tron Multisender?',
    answer:
      'A small service fee applies per transaction. Using batch transfer also significantly reduces the total bandwidth and energy cost compared to sending individually — typically saving around 90% in fees.',
  },
  {
    question: 'How does CSV upload work?',
    answer:
      'Prepare a CSV file with two columns: wallet address and amount. Upload it in the app and Tron Multisender will parse and validate all entries before you confirm the transaction.',
  },
  {
    question: 'What wallet do I need?',
    answer:
      'You need a TRON-compatible wallet such as TronLink (browser extension or mobile), TokenPocket, or any wallet that supports TronWeb. No new wallet creation is needed.',
  },
  {
    question: 'What is the difference vs manual sending?',
    answer:
      'Sending manually requires one transaction per recipient — time-consuming and expensive. Tron Multisender batches all transfers into one transaction, saving up to 90% in fees and completing in seconds.',
  },
]
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- src/data/faq.test.ts --no-coverage
```

Expected: PASS (3 tests)

- [ ] **Step 5: Commit**

```bash
git add src/data/faq.ts src/data/faq.test.ts
git commit -m "feat: add FAQ data module"
```

---

## Task 2: SEO — Update layout.tsx

**Files:**
- Modify: `src/app/layout.tsx`

No separate test file — metadata is Next.js config, tested via build/integration. JSON-LD is verified by reading the rendered HTML in the browser.

- [ ] **Step 1: Replace `src/app/layout.tsx` entirely**

```tsx
// src/app/layout.tsx
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import { FAQ_ITEMS } from '@/data/faq'
import './globals.css'

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-rubik',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tron Multisender — Official TRX & TRC-20 Batch Transfer Tool',
  description:
    'Send TRX and TRC-20 tokens to 1,000+ addresses in one TRON transaction. Official non-custodial batch transfer tool. No registration required.',
  keywords: [
    'tron multisender',
    'trc20 multisender',
    'trx batch send',
    'tron batch transfer',
    'send trc20 multiple addresses',
    'tron bulk transfer',
  ],
  openGraph: {
    title: 'Tron Multisender — Official Batch Transfer Tool',
    description:
      'Send TRX and TRC-20 tokens to 1,000+ addresses in one transaction. Non-custodial.',
    type: 'website',
    url: 'https://tronmultisender.io',
    siteName: 'Tron Multisender',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tron Multisender',
    description: 'Official batch transfer tool for TRON. Send to 1,000+ addresses in one tx.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://tronmultisender.io' },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Tron Multisender',
  url: 'https://tronmultisender.io',
  logo: 'https://tronmultisender.io/logo.png',
  sameAs: [] as string[],
}

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Tron Multisender',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description:
    'Batch send TRX and TRC-20 tokens to multiple addresses on the TRON blockchain in a single transaction.',
}

function getFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={rubik.variable}>
      <body className="bg-black font-rubik antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqSchema()) }}
        />
        {children}
      </body>
    </html>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: add SEO metadata and JSON-LD schemas to layout"
```

---

## Task 3: Sitemap & Robots

**Files:**
- Create: `src/app/sitemap.ts`
- Create: `src/app/robots.ts`

- [ ] **Step 1: Create sitemap.ts**

```ts
// src/app/sitemap.ts
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://tronmultisender.io',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
```

- [ ] **Step 2: Create robots.ts**

```ts
// src/app/robots.ts
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://tronmultisender.io/sitemap.xml',
  }
}
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 4: Commit**

```bash
git add src/app/sitemap.ts src/app/robots.ts
git commit -m "feat: add sitemap and robots.txt routes"
```

---

## Task 4: Update Navbar

**Files:**
- Modify: `src/components/hero/Navbar.tsx`
- Modify: `src/components/hero/Navbar.test.tsx`

- [ ] **Step 1: Update Navbar.test.tsx with new expectations first**

```tsx
// src/components/hero/Navbar.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('TRON MULTISENDER')).toBeInTheDocument()
  })

  it('renders desktop nav links', () => {
    render(<Navbar />)
    const links = screen.getAllByRole('link', { name: /Home|How It Works|Features|FAQ/i })
    expect(links.length).toBeGreaterThanOrEqual(4)
  })

  it('renders Launch App button in desktop nav', () => {
    render(<Navbar />)
    const buttons = screen.getAllByRole('button', { name: /Launch App/i })
    expect(buttons.length).toBeGreaterThanOrEqual(1)
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuButton = screen.getByRole('button', { name: /Open menu/i })
    await user.click(menuButton)
    expect(screen.getByRole('button', { name: /Close menu/i })).toBeInTheDocument()
  })

  it('shows mobile nav links when menu is open', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /Open menu/i }))
    const faqLinks = screen.getAllByRole('link', { name: /FAQ/i })
    expect(faqLinks.length).toBeGreaterThan(0)
  })
})
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
npm test -- src/components/hero/Navbar.test.tsx --no-coverage
```

Expected: FAIL ("TRON MULTISENDER" not found, "Launch App" not found)

- [ ] **Step 3: Update Navbar.tsx**

```tsx
// src/components/hero/Navbar.tsx
'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ClippedButton } from '@/components/ui/ClippedButton'

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'FAQ', href: '#faq' },
] as const

function LogoMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M14 2L26 14L14 26L2 14L14 2Z" fill="rgba(255,255,255,0.12)" stroke="white" strokeWidth="1.5"/>
      <path d="M14 8L20 14L14 20L8 14L14 8Z" fill="white" opacity="0.85"/>
    </svg>
  )
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      className="absolute top-0 left-0 right-0 z-20 flex items-center py-4 px-8 md:py-[22px] md:px-10 lg:px-12"
      style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, transparent 100%)' }}
    >
      <div className="flex items-center gap-[10px] flex-shrink-0">
        <LogoMark />
        <span className="font-rubik font-bold text-[14px] text-white uppercase tracking-[3px]">
          TRON MULTISENDER
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 ml-12">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="font-rubik font-medium text-[13px] text-white/75 hover:text-white transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="hidden md:block ml-auto">
        <ClippedButton variant="red" size="sm">Launch App</ClippedButton>
      </div>

      <button
        type="button"
        className="md:hidden ml-auto text-white"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm flex flex-col p-6 gap-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-rubik font-medium text-[15px] text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <ClippedButton variant="red" size="md">Launch App</ClippedButton>
          </div>
        </div>
      )}
    </nav>
  )
}
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npm test -- src/components/hero/Navbar.test.tsx --no-coverage
```

Expected: PASS (5 tests)

- [ ] **Step 5: Commit**

```bash
git add src/components/hero/Navbar.tsx src/components/hero/Navbar.test.tsx
git commit -m "feat: update Navbar for Tron Multisender brand"
```

---

## Task 5: Update HeroContent

**Files:**
- Modify: `src/components/hero/HeroContent.tsx`
- Modify: `src/components/hero/HeroContent.test.tsx`

- [ ] **Step 1: Update HeroContent.test.tsx**

```tsx
// src/components/hero/HeroContent.test.tsx
import { render, screen } from '@testing-library/react'
import { HeroContent } from './HeroContent'

describe('HeroContent', () => {
  it('renders eyebrow text', () => {
    render(<HeroContent />)
    expect(screen.getByText(/Tron Blockchain Tool/i)).toBeInTheDocument()
  })

  it('renders the main heading', () => {
    render(<HeroContent />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /Batch Send TRX & TRC-20 Tokens/i
    )
  })

  it('renders subheadline copy', () => {
    render(<HeroContent />)
    expect(screen.getByText(/1,000\+ addresses/i)).toBeInTheDocument()
  })

  it('renders Launch App button', () => {
    render(<HeroContent />)
    expect(screen.getByRole('button', { name: /Launch App/i })).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
npm test -- src/components/hero/HeroContent.test.tsx --no-coverage
```

Expected: FAIL (old text not matching new expectations)

- [ ] **Step 3: Update HeroContent.tsx**

```tsx
// src/components/hero/HeroContent.tsx
import { ClippedButton } from '@/components/ui/ClippedButton'

export function HeroContent() {
  return (
    <div className="absolute top-[80px] left-8 z-10 max-w-[540px] md:top-[90px] md:left-10 lg:top-[108px] lg:left-12">
      <p className="font-rubik font-semibold text-[11px] text-brand-red uppercase tracking-[3px] mb-[14px]">
        Tron Blockchain Tool
      </p>

      <h1
        className={[
          'font-rubik font-extrabold uppercase text-white',
          'text-[38px] md:text-[48px] lg:text-[58px]',
          'leading-[1.0] tracking-[-0.04em]',
          'mb-5',
          'hero-headline-shadow',
        ].join(' ')}
      >
        Batch Send TRX &amp; TRC-20 Tokens
      </h1>

      <p className="font-rubik text-[14px] md:text-[15px] text-white/65 leading-relaxed mb-7 max-w-[420px]">
        Send to 1,000+ addresses in a single on-chain transaction. Save time and fees.
      </p>

      <ClippedButton variant="red" size="lg">Launch App</ClippedButton>
    </div>
  )
}
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npm test -- src/components/hero/HeroContent.test.tsx --no-coverage
```

Expected: PASS (4 tests)

- [ ] **Step 5: Commit**

```bash
git add src/components/hero/HeroContent.tsx src/components/hero/HeroContent.test.tsx
git commit -m "feat: update HeroContent for Tron Multisender"
```

---

## Task 6: Update ConsultationCard

**Files:**
- Modify: `src/components/hero/ConsultationCard.tsx`
- Modify: `src/components/hero/ConsultationCard.test.tsx`

- [ ] **Step 1: Update ConsultationCard.test.tsx**

```tsx
// src/components/hero/ConsultationCard.test.tsx
import { render, screen } from '@testing-library/react'
import { ConsultationCard } from './ConsultationCard'

describe('ConsultationCard', () => {
  it('renders the Verified label', () => {
    render(<ConsultationCard />)
    expect(screen.getByText(/Verified/i)).toBeInTheDocument()
  })

  it('renders Official Tron Multisender text', () => {
    render(<ConsultationCard />)
    expect(screen.getByText(/Official Tron Multisender/i)).toBeInTheDocument()
  })

  it('renders the shield icon container', () => {
    render(<ConsultationCard />)
    expect(screen.getByTestId('shield-icon')).toBeInTheDocument()
  })

  it('renders Launch App button', () => {
    render(<ConsultationCard />)
    expect(screen.getByRole('button', { name: /Launch App/i })).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
npm test -- src/components/hero/ConsultationCard.test.tsx --no-coverage
```

Expected: FAIL

- [ ] **Step 3: Update ConsultationCard.tsx**

```tsx
// src/components/hero/ConsultationCard.tsx
import { ShieldCheck } from 'lucide-react'
import { ClippedButton } from '@/components/ui/ClippedButton'

export function ConsultationCard() {
  return (
    <div
      className={[
        'absolute bottom-6 left-8 z-20',
        'lg:bottom-9 lg:left-12',
        'flex items-center gap-[14px]',
        'py-[14px] px-[18px]',
        'rounded-[10px]',
        'glass-card',
      ].join(' ')}
    >
      <div
        data-testid="shield-icon"
        className="w-10 h-10 rounded-full bg-white/[.92] flex items-center justify-center flex-shrink-0 shadow-md"
      >
        <ShieldCheck size={18} stroke="#111" strokeWidth={2} />
      </div>

      <div className="flex flex-col">
        <span className="font-rubik font-medium text-[10px] text-white/50 uppercase tracking-[1.5px] mb-0.5">
          Verified
        </span>
        <span className="font-rubik font-semibold text-[14px] text-white tracking-[-0.2px]">
          Official Tron Multisender
        </span>
      </div>

      <ClippedButton variant="white" size="sm" className="ml-2 whitespace-nowrap">
        Launch App
      </ClippedButton>
    </div>
  )
}
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npm test -- src/components/hero/ConsultationCard.test.tsx --no-coverage
```

Expected: PASS (4 tests)

- [ ] **Step 5: Commit**

```bash
git add src/components/hero/ConsultationCard.tsx src/components/hero/ConsultationCard.test.tsx
git commit -m "feat: update ConsultationCard to Official Tron Multisender badge"
```

---

## Task 7: StatsBar Section

**Files:**
- Create: `src/components/sections/StatsBar.tsx`
- Create: `src/components/sections/StatsBar.test.tsx`

- [ ] **Step 1: Write the failing test**

```tsx
// src/components/sections/StatsBar.test.tsx
import { render, screen } from '@testing-library/react'
import { StatsBar } from './StatsBar'

describe('StatsBar', () => {
  it('renders all 4 stat values', () => {
    render(<StatsBar />)
    expect(screen.getByText('1,000+')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('~90%')).toBeInTheDocument()
    expect(screen.getByText('Zero')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<StatsBar />)
    expect(screen.getByText('Recipients per Tx')).toBeInTheDocument()
    expect(screen.getByText('Token Types')).toBeInTheDocument()
    expect(screen.getByText('Fee Savings')).toBeInTheDocument()
    expect(screen.getByText('Custody')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- src/components/sections/StatsBar.test.tsx --no-coverage
```

Expected: FAIL with "Cannot find module './StatsBar'"

- [ ] **Step 3: Implement StatsBar.tsx**

```tsx
// src/components/sections/StatsBar.tsx
const STATS = [
  { value: '1,000+', label: 'Recipients per Tx', sublabel: 'Per transaction' },
  { value: '3', label: 'Token Types', sublabel: 'TRX / TRC-20 / TRC-10' },
  { value: '~90%', label: 'Fee Savings', sublabel: 'vs manual sending' },
  { value: 'Zero', label: 'Custody', sublabel: 'Fully on-chain' },
] as const

export function StatsBar() {
  return (
    <section
      aria-label="Key statistics"
      className="bg-black border-y border-white/[0.07] py-8 px-8 md:px-10 lg:px-12"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="relative overflow-hidden glass-card rounded-xl p-5 text-center"
          >
            <div className="font-rubik font-extrabold text-[34px] md:text-[40px] text-brand-red leading-none mb-2">
              {stat.value}
            </div>
            <div className="font-rubik font-semibold text-[11px] text-white uppercase tracking-[2px] mb-1">
              {stat.label}
            </div>
            <div className="font-rubik text-[11px] text-white/40">
              {stat.sublabel}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npm test -- src/components/sections/StatsBar.test.tsx --no-coverage
```

Expected: PASS (2 tests)

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/StatsBar.tsx src/components/sections/StatsBar.test.tsx
git commit -m "feat: add StatsBar section"
```

---

## Task 8: HowItWorks Section

**Files:**
- Create: `src/components/sections/HowItWorks.tsx`
- Create: `src/components/sections/HowItWorks.test.tsx`

- [ ] **Step 1: Write the failing test**

```tsx
// src/components/sections/HowItWorks.test.tsx
import { render, screen } from '@testing-library/react'
import { HowItWorks } from './HowItWorks'

describe('HowItWorks', () => {
  it('renders the section heading', () => {
    render(<HowItWorks />)
    expect(screen.getByRole('heading', { name: /How It Works/i })).toBeInTheDocument()
  })

  it('renders all 4 step titles', () => {
    render(<HowItWorks />)
    expect(screen.getByText('Connect Wallet')).toBeInTheDocument()
    expect(screen.getByText('Add Recipients')).toBeInTheDocument()
    expect(screen.getByText('Set Amounts')).toBeInTheDocument()
    expect(screen.getByText('Send')).toBeInTheDocument()
  })

  it('renders step numbers 1 through 4', () => {
    render(<HowItWorks />)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()
    expect(screen.getByText('04')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- src/components/sections/HowItWorks.test.tsx --no-coverage
```

Expected: FAIL

- [ ] **Step 3: Implement HowItWorks.tsx**

```tsx
// src/components/sections/HowItWorks.tsx
import { Wallet, Upload, SlidersHorizontal, Zap, type LucideIcon } from 'lucide-react'

type Step = {
  number: string
  icon: LucideIcon
  title: string
  description: string
}

const STEPS: Step[] = [
  {
    number: '01',
    icon: Wallet,
    title: 'Connect Wallet',
    description: 'Connect TronLink or any compatible TRON wallet in one click. No account needed.',
  },
  {
    number: '02',
    icon: Upload,
    title: 'Add Recipients',
    description: 'Paste addresses manually or upload a CSV file with addresses and amounts.',
  },
  {
    number: '03',
    icon: SlidersHorizontal,
    title: 'Set Amounts',
    description: 'Assign the same amount to all recipients or set custom amounts per address.',
  },
  {
    number: '04',
    icon: Zap,
    title: 'Send',
    description: 'One transaction. One confirmation. All recipients receive funds instantly.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="bg-[#050505] py-16 md:py-24 px-8 md:px-10 lg:px-12"
    >
      <div className="max-w-5xl mx-auto">
        <p className="font-rubik font-semibold text-[11px] text-brand-red uppercase tracking-[3px] mb-3 text-center">
          Simple Process
        </p>
        <h2
          id="how-it-works-heading"
          className="font-rubik font-extrabold text-[32px] md:text-[40px] text-white uppercase tracking-[-0.02em] mb-12 md:mb-16 text-center"
        >
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="relative overflow-hidden glass-card rounded-xl p-6"
              >
                <span className="absolute -top-3 -right-1 font-rubik font-extrabold text-[72px] text-white/[0.04] leading-none select-none pointer-events-none">
                  {step.number}
                </span>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-brand-red" />
                  </div>
                  <div className="font-rubik font-bold text-[11px] text-brand-red uppercase tracking-[2px] mb-2">
                    {step.number}
                  </div>
                  <h3 className="font-rubik font-bold text-[16px] text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="font-rubik text-[13px] text-white/55 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npm test -- src/components/sections/HowItWorks.test.tsx --no-coverage
```

Expected: PASS (3 tests)

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/HowItWorks.tsx src/components/sections/HowItWorks.test.tsx
git commit -m "feat: add HowItWorks section"
```

---

## Task 9: Features Section

**Files:**
- Create: `src/components/sections/Features.tsx`
- Create: `src/components/sections/Features.test.tsx`

- [ ] **Step 1: Write the failing test**

```tsx
// src/components/sections/Features.test.tsx
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: /Why Tron Multisender/i })).toBeInTheDocument()
  })

  it('renders all 6 feature titles', () => {
    render(<Features />)
    expect(screen.getByText('Batch TRX Transfer')).toBeInTheDocument()
    expect(screen.getByText('TRC-20 Token Support')).toBeInTheDocument()
    expect(screen.getByText('CSV Upload')).toBeInTheDocument()
    expect(screen.getByText('Save on Fees')).toBeInTheDocument()
    expect(screen.getByText('Fully On-Chain')).toBeInTheDocument()
    expect(screen.getByText('Instant Confirmation')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- src/components/sections/Features.test.tsx --no-coverage
```

Expected: FAIL

- [ ] **Step 3: Implement Features.tsx**

```tsx
// src/components/sections/Features.tsx
import {
  ArrowRightLeft,
  Coins,
  FileSpreadsheet,
  TrendingDown,
  Shield,
  Zap,
  type LucideIcon,
} from 'lucide-react'

type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

const FEATURES: Feature[] = [
  {
    icon: ArrowRightLeft,
    title: 'Batch TRX Transfer',
    description: 'Send TRX to hundreds of wallets in a single transaction. No limit on recipients.',
  },
  {
    icon: Coins,
    title: 'TRC-20 Token Support',
    description: 'USDT, USDC, WTRX, BTT and any TRC-20 token. Just paste the contract address.',
  },
  {
    icon: FileSpreadsheet,
    title: 'CSV Upload',
    description: 'Import your recipient list and amounts directly from a spreadsheet file.',
  },
  {
    icon: TrendingDown,
    title: 'Save on Fees',
    description: 'Batch transactions use significantly less bandwidth and energy than sending one by one.',
  },
  {
    icon: Shield,
    title: 'Fully On-Chain',
    description: 'No custody, no registration. Your keys, your funds. Everything on-chain.',
  },
  {
    icon: Zap,
    title: 'Instant Confirmation',
    description: "TRON's 3-second block time means near-instant delivery to all recipients.",
  },
]

export function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="bg-black py-16 md:py-24 px-8 md:px-10 lg:px-12"
    >
      <div className="max-w-5xl mx-auto">
        <p className="font-rubik font-semibold text-[11px] text-brand-red uppercase tracking-[3px] mb-3 text-center">
          Built for Power Users
        </p>
        <h2
          id="features-heading"
          className="font-rubik font-extrabold text-[32px] md:text-[40px] text-white uppercase tracking-[-0.02em] mb-12 md:mb-16 text-center"
        >
          Why Tron Multisender
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="relative overflow-hidden glass-card rounded-xl p-6"
              >
                <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-brand-red" />
                </div>
                <h3 className="font-rubik font-bold text-[15px] text-white mb-2">
                  {feature.title}
                </h3>
                <p className="font-rubik text-[13px] text-white/55 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npm test -- src/components/sections/Features.test.tsx --no-coverage
```

Expected: PASS (2 tests)

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/Features.tsx src/components/sections/Features.test.tsx
git commit -m "feat: add Features section"
```

---

## Task 10: SupportedTokens Section

**Files:**
- Create: `src/components/sections/SupportedTokens.tsx`
- Create: `src/components/sections/SupportedTokens.test.tsx`

- [ ] **Step 1: Write the failing test**

```tsx
// src/components/sections/SupportedTokens.test.tsx
import { render, screen } from '@testing-library/react'
import { SupportedTokens } from './SupportedTokens'

describe('SupportedTokens', () => {
  it('renders the section heading', () => {
    render(<SupportedTokens />)
    expect(screen.getByRole('heading', { name: /Supported Tokens/i })).toBeInTheDocument()
  })

  it('renders all token symbols', () => {
    render(<SupportedTokens />)
    expect(screen.getByText('TRX')).toBeInTheDocument()
    expect(screen.getByText('USDT')).toBeInTheDocument()
    expect(screen.getByText('USDC')).toBeInTheDocument()
    expect(screen.getByText('WTRX')).toBeInTheDocument()
    expect(screen.getByText('BTT')).toBeInTheDocument()
  })

  it('renders the Native badge for TRX', () => {
    render(<SupportedTokens />)
    expect(screen.getByText('Native')).toBeInTheDocument()
  })

  it('renders the any TRC-20 note', () => {
    render(<SupportedTokens />)
    expect(screen.getByText(/Any TRC-20 contract address is supported/i)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- src/components/sections/SupportedTokens.test.tsx --no-coverage
```

Expected: FAIL

- [ ] **Step 3: Implement SupportedTokens.tsx**

```tsx
// src/components/sections/SupportedTokens.tsx
type Token = {
  symbol: string
  name: string
  type: 'Native' | 'TRC-20' | 'TRC-10'
}

const TOKENS: Token[] = [
  { symbol: 'TRX', name: 'TRON', type: 'Native' },
  { symbol: 'USDT', name: 'Tether USD', type: 'TRC-20' },
  { symbol: 'USDC', name: 'USD Coin', type: 'TRC-20' },
  { symbol: 'WTRX', name: 'Wrapped TRX', type: 'TRC-20' },
  { symbol: 'BTT', name: 'BitTorrent', type: 'TRC-10' },
]

export function SupportedTokens() {
  return (
    <section
      aria-labelledby="tokens-heading"
      className="bg-[#050505] py-16 md:py-24 px-8 md:px-10 lg:px-12"
    >
      <div className="max-w-5xl mx-auto">
        <p className="font-rubik font-semibold text-[11px] text-brand-red uppercase tracking-[3px] mb-3 text-center">
          Multi-Token Support
        </p>
        <h2
          id="tokens-heading"
          className="font-rubik font-extrabold text-[32px] md:text-[40px] text-white uppercase tracking-[-0.02em] mb-4 text-center"
        >
          Supported Tokens
        </h2>
        <p className="font-rubik text-[14px] text-white/50 text-center mb-12 md:mb-16 max-w-lg mx-auto">
          Send any TRC-20 token or native TRX to multiple recipients simultaneously.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {TOKENS.map((token) => (
            <div
              key={token.symbol}
              className="relative overflow-hidden glass-card rounded-xl p-5 text-center"
            >
              <div className="font-rubik font-extrabold text-[22px] text-white mb-1">
                {token.symbol}
              </div>
              <div className="font-rubik text-[11px] text-white/45 mb-3">{token.name}</div>
              <span
                className={[
                  'font-rubik font-semibold text-[10px] uppercase tracking-[1.5px] px-2 py-0.5 rounded-full',
                  token.type === 'Native'
                    ? 'bg-brand-red/20 text-brand-red'
                    : 'bg-white/[0.07] text-white/50',
                ].join(' ')}
              >
                {token.type}
              </span>
            </div>
          ))}
        </div>

        <p className="font-rubik text-[13px] text-white/40 text-center">
          Any TRC-20 contract address is supported. Paste the contract address to get started.
        </p>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npm test -- src/components/sections/SupportedTokens.test.tsx --no-coverage
```

Expected: PASS (4 tests)

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/SupportedTokens.tsx src/components/sections/SupportedTokens.test.tsx
git commit -m "feat: add SupportedTokens section"
```

---

## Task 11: FaqSection (Client Component)

**Files:**
- Create: `src/components/sections/FaqSection.tsx`
- Create: `src/components/sections/FaqSection.test.tsx`

- [ ] **Step 1: Write the failing test**

```tsx
// src/components/sections/FaqSection.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FaqSection } from './FaqSection'
import { FAQ_ITEMS } from '@/data/faq'

describe('FaqSection', () => {
  it('renders the section heading', () => {
    render(<FaqSection />)
    expect(
      screen.getByRole('heading', { name: /Frequently Asked Questions/i })
    ).toBeInTheDocument()
  })

  it('renders all FAQ questions', () => {
    render(<FaqSection />)
    FAQ_ITEMS.forEach((item) => {
      expect(screen.getByText(item.question)).toBeInTheDocument()
    })
  })

  it('all answers are hidden initially', () => {
    render(<FaqSection />)
    FAQ_ITEMS.forEach((item) => {
      expect(screen.queryByText(item.answer)).not.toBeInTheDocument()
    })
  })

  it('shows answer when question button is clicked', async () => {
    const user = userEvent.setup()
    render(<FaqSection />)
    const button = screen.getByRole('button', { name: FAQ_ITEMS[0].question })
    await user.click(button)
    expect(screen.getByText(FAQ_ITEMS[0].answer)).toBeInTheDocument()
  })

  it('hides answer when question is clicked again', async () => {
    const user = userEvent.setup()
    render(<FaqSection />)
    const button = screen.getByRole('button', { name: FAQ_ITEMS[0].question })
    await user.click(button)
    await user.click(button)
    expect(screen.queryByText(FAQ_ITEMS[0].answer)).not.toBeInTheDocument()
  })

  it('closes previous answer when a different question is clicked', async () => {
    const user = userEvent.setup()
    render(<FaqSection />)
    const first = screen.getByRole('button', { name: FAQ_ITEMS[0].question })
    const second = screen.getByRole('button', { name: FAQ_ITEMS[1].question })
    await user.click(first)
    await user.click(second)
    expect(screen.queryByText(FAQ_ITEMS[0].answer)).not.toBeInTheDocument()
    expect(screen.getByText(FAQ_ITEMS[1].answer)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- src/components/sections/FaqSection.test.tsx --no-coverage
```

Expected: FAIL

- [ ] **Step 3: Implement FaqSection.tsx**

```tsx
// src/components/sections/FaqSection.tsx
'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQ_ITEMS } from '@/data/faq'

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-black py-16 md:py-24 px-8 md:px-10 lg:px-12"
    >
      <div className="max-w-3xl mx-auto">
        <p className="font-rubik font-semibold text-[11px] text-brand-red uppercase tracking-[3px] mb-3 text-center">
          Got Questions?
        </p>
        <h2
          id="faq-heading"
          className="font-rubik font-extrabold text-[32px] md:text-[40px] text-white uppercase tracking-[-0.02em] mb-12 md:mb-16 text-center"
        >
          Frequently Asked Questions
        </h2>

        <div className="space-y-2">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="relative overflow-hidden glass-card rounded-xl">
              <button
                type="button"
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="font-rubik font-semibold text-[14px] md:text-[15px] text-white pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  size={18}
                  aria-hidden="true"
                  className={[
                    'text-white/40 flex-shrink-0 transition-transform duration-200',
                    openIndex === i ? 'rotate-180' : '',
                  ].join(' ')}
                />
              </button>

              {openIndex === i && (
                <div id={`faq-answer-${i}`} className="px-5 pb-5">
                  <p className="font-rubik text-[13px] md:text-[14px] text-white/55 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npm test -- src/components/sections/FaqSection.test.tsx --no-coverage
```

Expected: PASS (6 tests)

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/FaqSection.tsx src/components/sections/FaqSection.test.tsx
git commit -m "feat: add FAQ accordion section"
```

---

## Task 12: Footer

**Files:**
- Create: `src/components/layout/Footer.tsx`
- Create: `src/components/layout/Footer.test.tsx`

- [ ] **Step 1: Write the failing test**

```tsx
// src/components/layout/Footer.test.tsx
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<Footer />)
    expect(screen.getAllByText(/TRON MULTISENDER/i).length).toBeGreaterThan(0)
  })

  it('renders navigation links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /How It Works/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Features/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /FAQ/i })).toBeInTheDocument()
  })

  it('renders legal links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Terms of Service/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Privacy Policy/i })).toBeInTheDocument()
  })

  it('renders disclaimer text', () => {
    render(<Footer />)
    expect(screen.getByText(/Not affiliated with TRON Foundation/i)).toBeInTheDocument()
  })

  it('renders copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2026 Tron Multisender/i)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- src/components/layout/Footer.test.tsx --no-coverage
```

Expected: FAIL

- [ ] **Step 3: Implement Footer.tsx**

```tsx
// src/components/layout/Footer.tsx
import { Github, Send, Twitter } from 'lucide-react'

function LogoMark() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M14 2L26 14L14 26L2 14L14 2Z" fill="rgba(255,255,255,0.12)" stroke="white" strokeWidth="1.5"/>
      <path d="M14 8L20 14L14 20L8 14L14 8Z" fill="white" opacity="0.85"/>
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.07] px-8 md:px-10 lg:px-12 pt-12 pb-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <LogoMark />
              <span className="font-rubik font-bold text-[13px] text-white uppercase tracking-[2px]">
                TRON MULTISENDER
              </span>
            </div>
            <p className="font-rubik text-[13px] text-white/40 leading-relaxed mb-5 max-w-[220px]">
              The official batch transfer tool for the TRON blockchain.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Twitter / X" className="text-white/30 hover:text-white/70 transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" aria-label="Telegram" className="text-white/30 hover:text-white/70 transition-colors">
                <Send size={16} />
              </a>
              <a href="#" aria-label="GitHub" className="text-white/30 hover:text-white/70 transition-colors">
                <Github size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-rubik font-semibold text-[11px] text-white/40 uppercase tracking-[2px] mb-4">
              Navigation
            </div>
            <ul className="space-y-2">
              {[
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Features', href: '#features' },
                { label: 'Supported Tokens', href: '#' },
                { label: 'FAQ', href: '#faq' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-rubik text-[13px] text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="font-rubik font-semibold text-[11px] text-white/40 uppercase tracking-[2px] mb-4">
              Legal
            </div>
            <ul className="space-y-2">
              {[
                { label: 'Terms of Service', href: '#' },
                { label: 'Privacy Policy', href: '#' },
                { label: 'Documentation', href: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-rubik text-[13px] text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.07] pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <span className="font-rubik text-[12px] text-white/30">
            © 2026 Tron Multisender
          </span>
          <span className="font-rubik text-[11px] text-white/20 max-w-md text-right">
            Not affiliated with TRON Foundation. This tool is provided as-is. Use at your own risk.
          </span>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npm test -- src/components/layout/Footer.test.tsx --no-coverage
```

Expected: PASS (5 tests)

- [ ] **Step 5: Commit**

```bash
git add src/components/layout/Footer.tsx src/components/layout/Footer.test.tsx
git commit -m "feat: add Footer component"
```

---

## Task 13: Wire Up page.tsx

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Update page.tsx**

```tsx
// src/app/page.tsx
import { HeroSection } from '@/components/hero/HeroSection'
import { StatsBar } from '@/components/sections/StatsBar'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Features } from '@/components/sections/Features'
import { SupportedTokens } from '@/components/sections/SupportedTokens'
import { FaqSection } from '@/components/sections/FaqSection'
import { Footer } from '@/components/layout/Footer'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsBar />
      <HowItWorks />
      <Features />
      <SupportedTokens />
      <FaqSection />
      <Footer />
    </main>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 3: Run all tests**

```bash
npm test -- --no-coverage
```

Expected: all tests PASS

- [ ] **Step 4: Start dev server and visually verify**

```bash
npm run dev
```

Open `http://localhost:3000` and verify:
- Hero section shows "Batch Send TRX & TRC-20 Tokens" headline
- Navbar shows "TRON MULTISENDER" and "Launch App"
- Badge card shows "Official Tron Multisender"
- StatsBar shows 4 stat cards
- "How It Works" section with 4 steps
- Features section with 6 cards
- Supported Tokens section
- FAQ accordion (click to open/close)
- Footer with copyright

- [ ] **Step 5: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: compose full brand defense page"
```

---

## Final Verification

- [ ] **Run full test suite**

```bash
npm test -- --no-coverage
```

Expected: all tests PASS, 0 failures

- [ ] **Build check**

```bash
npm run build
```

Expected: build completes with no errors

- [ ] **Final commit (if anything changed during verification)**

```bash
git add -A
git commit -m "feat: tron multisender brand defense site complete"
```
