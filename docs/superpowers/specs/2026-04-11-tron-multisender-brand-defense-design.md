# Tron Multisender — Brand Defense Site Design Spec

**Date:** 2026-04-11  
**Goal:** Convert tron-landing into a full brand defense site for Tron Multisender  
**Reference:** playfina.org (structure and SEO pattern analysis)

---

## Context

The existing site is a single hero section with video background, navbar, headline, and a consultation card. The goal is to expand it into a complete brand defense landing page that:

1. Ranks in top search results for "tron multisender", "trc20 batch transfer", "tron batch send" and related queries
2. Appears in AI-powered search engines (ChatGPT, Perplexity, Gemini) as the authoritative source
3. Protects the brand from phishing/scam clones by owning the brand search results
4. Drives users to the actual dApp (CTA link — placeholder for now, redirect to be configured later)

### Design constraints

- Keep existing design: black background, `#EE3F2C` brand red, Rubik font, clipped buttons, glassmorphism cards, video background
- Stack: Next.js 16 App Router, React 19, Tailwind v4, TypeScript strict
- Logo: SVG placeholder (stylized "TM" mark) — to be replaced later
- All social/external links: `#` placeholders

---

## Architecture

### File structure additions

```
src/
  app/
    layout.tsx          ← Update: title, meta, OG, JSON-LD schemas, lang="en"
    page.tsx            ← Update: add all new sections below HeroSection
    sitemap.ts          ← NEW: next.js sitemap generator
    robots.ts           ← NEW: next.js robots.txt generator
  data/
    faq.ts              ← NEW: single source of truth for FAQ Q&A (used by FaqSection UI + JSON-LD schema)
  components/
    hero/               ← EXISTING (update copy + navbar brand)
      Navbar.tsx        ← Update brand name + nav links
      HeroContent.tsx   ← Update headline + subheadline + CTA
      ConsultationCard.tsx ← Replace with "Official Tool" badge card
    sections/           ← NEW directory
      StatsBar.tsx
      HowItWorks.tsx
      Features.tsx
      SupportedTokens.tsx
      FaqSection.tsx
    layout/             ← NEW directory
      Footer.tsx
```

### Page composition (`page.tsx`)

```tsx
<main>
  <HeroSection />       {/* existing, updated copy */}
  <StatsBar />
  <HowItWorks />
  <Features />
  <SupportedTokens />
  <FaqSection />
  <Footer />
</main>
```

---

## Section Specifications

### 1. Navbar (update existing)

**File:** `src/components/hero/Navbar.tsx`

- Logo: SVG placeholder — stylized "TM" diamond shape in white, with text "TRON MULTISENDER" uppercase tracking-widest
- Nav links: `Home`, `How It Works`, `Features`, `FAQ`
- CTA button: `Launch App` (red, clipped-sm) → href `#` (placeholder)
- Mobile menu: same links

### 2. Hero Section (update copy)

**Files:** `HeroContent.tsx`, `ConsultationCard.tsx`

**HeroContent changes:**
- Eyebrow: `Tron Blockchain Tool` (keep red uppercase style)
- H1: `Batch Send TRX & TRC-20 Tokens` (keep extrabold uppercase style)
- Sub-copy (new `<p>` below H1, before button): `"Send to 1,000+ addresses in a single on-chain transaction. Save time and fees."`  
  Style: `font-rubik text-white/70 text-[14px] md:text-[16px] mb-7 max-w-[420px]`
- Button: `Launch App` → href `#`

**ConsultationCard changes:**
- Replace phone icon with shield/checkmark icon (Lucide `ShieldCheck`)
- Label: `Verified`
- Title: `Official Tron Multisender`
- Button: `Launch App` (white, clipped-sm) → href `#`

### 3. StatsBar (new section)

**File:** `src/components/sections/StatsBar.tsx`  
**Type:** Server Component

Layout: full-width dark section (`bg-black/80 border-y border-white/10`), 4 stat cards in a row (2×2 on mobile).

Stats:
| Stat | Value | Label |
|------|-------|-------|
| Recipients | 1,000+ | Per Transaction |
| Token Types | 3 | TRX / TRC-20 / TRC-10 |
| Fee Savings | ~90% | vs Manual Sending |
| Custody | Zero | Fully On-Chain |

Each card: glass-card style, stat value in large `text-brand-red font-extrabold`, label in `text-white/50 text-[11px] uppercase tracking-widest`.

### 4. HowItWorks (new section)

**File:** `src/components/sections/HowItWorks.tsx`  
**Type:** Server Component

Dark section with section title: `How It Works` (H2, white, uppercase, rubik extrabold).

4 step cards in a horizontal row (vertical on mobile), each with:
- Step number (large, `text-brand-red`, extrabold)
- Icon (Lucide)
- Title
- Short description

Steps:
1. **Connect Wallet** — `Wallet` icon — "Connect TronLink or any compatible TRON wallet in one click."
2. **Add Recipients** — `Upload` icon — "Paste addresses manually or upload a CSV file with addresses and amounts."
3. **Set Amounts** — `SlidersHorizontal` icon — "Assign the same amount to all or custom amounts per address."
4. **Send** — `Zap` icon — "One transaction. One confirmation. All recipients receive funds instantly."

Card style: glass-card, rounded-xl, padding generous. Step number is decorative large text behind the icon area.

### 5. Features (new section)

**File:** `src/components/sections/Features.tsx`  
**Type:** Server Component

Section title: `Why Tron Multisender` (H2).
6-card grid (3×2 desktop, 2×3 tablet, 1×6 mobile).

Features:
1. **Batch TRX Transfer** — `ArrowRightLeft` — "Send TRX to hundreds of wallets in a single transaction."
2. **TRC-20 Token Support** — `Coins` — "USDT, USDC, WTRX, BTT and any TRC-20 token."
3. **CSV Upload** — `FileSpreadsheet` — "Import recipient list and amounts directly from a spreadsheet."
4. **Save on Fees** — `TrendingDown` — "Batch transactions use significantly less bandwidth and energy."
5. **Fully On-Chain** — `Shield` — "No custody, no registration. Your keys, your funds."
6. **Instant Confirmation** — `Zap` — "TRON's 3-second block time means near-instant delivery."

Card style: glass-card, icon in `text-brand-red`, title white semibold, description `text-white/60`.

### 6. SupportedTokens (new section)

**File:** `src/components/sections/SupportedTokens.tsx`  
**Type:** Server Component

Section title: `Supported Tokens` (H2).  
Subtitle: `"Send any TRC-20 token or native TRX to multiple recipients."`

Token grid (horizontal scroll on mobile, 5 columns desktop):

| Token | Symbol | Type |
|-------|--------|------|
| TRON | TRX | Native |
| Tether USD | USDT | TRC-20 |
| USD Coin | USDC | TRC-20 |
| Wrapped TRX | WTRX | TRC-20 |
| BitTorrent | BTT | TRC-10 / TRC-20 |
| + Any TRC-20 | — | TRC-20 |

Each token card: glass-card with token symbol large, name small, type badge (brand-red pill for Native, white/10 for TRC-20).

Below grid: note text `"Any TRC-20 contract address is supported. Paste the contract address to get started."` in `text-white/50 text-sm`.

### 7. FaqSection (new section — critical for SEO)

**File:** `src/components/sections/FaqSection.tsx`  
**Type:** Client Component (accordion state)

Section title: `Frequently Asked Questions` (H2).  
8 accordion items. Closed by default, one open at a time.

Questions and answers:

1. **What is Tron Multisender?**  
   "Tron Multisender is an official on-chain tool that lets you send TRX or TRC-20 tokens to multiple wallet addresses in a single blockchain transaction on the TRON network."

2. **Is Tron Multisender safe to use?**  
   "Yes. Tron Multisender is fully non-custodial — your private keys never leave your wallet. All transfers happen directly on-chain via smart contract. There is no registration or account required."

3. **What tokens does Tron Multisender support?**  
   "Tron Multisender supports TRX (native TRON), TRC-10 tokens, and any TRC-20 token including USDT, USDC, WTRX, and BTT. Any valid TRC-20 contract address can be used."

4. **How many addresses can I send to at once?**  
   "You can send to up to 1,000 addresses in a single transaction. For larger distributions, you can split into multiple batches."

5. **How much does it cost to use Tron Multisender?**  
   "A small service fee applies per transaction. Using batch transfer also significantly reduces the total bandwidth and energy cost compared to sending individually — typically saving around 90% in fees."

6. **How does CSV upload work?**  
   "Prepare a CSV file with two columns: wallet address and amount. Upload it in the app and Tron Multisender will parse and validate all entries before you confirm the transaction."

7. **What wallet do I need?**  
   "You need a TRON-compatible wallet such as TronLink (browser extension or mobile), TokenPocket, or any wallet that supports TronWeb. No new wallet creation is needed."

8. **What is the difference between Tron Multisender and sending manually?**  
   "Sending manually requires one transaction per recipient — time-consuming and expensive. Tron Multisender batches all transfers into one transaction, saving up to 90% in fees and completing in seconds."

Accordion style: glass-card border-b `border-white/10`, question in white semibold, answer in `text-white/60`, chevron rotates on open.

### 8. Footer (new)

**File:** `src/components/layout/Footer.tsx`  
**Type:** Server Component

Three columns + bottom bar:

**Column 1:** Logo + tagline `"The official batch transfer tool for the TRON blockchain."` + social icons (Twitter/X, Telegram, GitHub) → all href `#`

**Column 2:** Links — `How It Works`, `Features`, `Supported Tokens`, `FAQ`

**Column 3:** Legal — `Terms of Service` (#), `Privacy Policy` (#), `Documentation` (#)

**Bottom bar:** `© 2026 Tron Multisender. Not affiliated with TRON Foundation. This tool is provided as-is. Use at your own risk.`

Style: `bg-black border-t border-white/10`, text `text-white/50`.

---

## SEO & AI Optimization

### layout.tsx metadata

```tsx
export const metadata: Metadata = {
  title: 'Tron Multisender — Official TRX & TRC-20 Batch Transfer Tool',
  description: 'Send TRX and TRC-20 tokens to 1,000+ addresses in one TRON transaction. Official non-custodial batch transfer tool. No registration required.',
  keywords: ['tron multisender', 'trc20 multisender', 'trx batch send', 'tron batch transfer', 'send trc20 multiple addresses'],
  openGraph: {
    title: 'Tron Multisender — Official Batch Transfer Tool',
    description: 'Send TRX and TRC-20 tokens to 1,000+ addresses in one transaction.',
    type: 'website',
    url: 'https://tronmultisender.io', // placeholder
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tron Multisender',
    description: 'Official batch transfer tool for TRON. Send to 1,000+ addresses in one tx.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://tronmultisender.io' }, // placeholder
}
```

### JSON-LD Schemas (in layout.tsx via `<script type="application/ld+json">`)

**1. Organization**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Tron Multisender",
  "url": "https://tronmultisender.io",
  "logo": "https://tronmultisender.io/logo.png",
  "sameAs": []
}
```

**2. SoftwareApplication**
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Tron Multisender",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Batch send TRX and TRC-20 tokens to multiple addresses on the TRON blockchain."
}
```

**3. FAQPage** — generated from the `FAQ_ITEMS` array exported by `src/data/faq.ts`. This same array is imported by both `FaqSection.tsx` (UI accordion) and `layout.tsx` (JSON-LD script tag), ensuring they never drift out of sync.

### sitemap.ts

```ts
// app/sitemap.ts — Next.js Metadata API
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://tronmultisender.io', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
  ]
}
```

### robots.ts

```ts
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://tronmultisender.io/sitemap.xml',
  }
}
```

### HTML semantics

- `<html lang="en">`
- `<header>` wraps Navbar
- `<main>` wraps all sections
- `<section>` per content section with `aria-labelledby` pointing to its H2
- `<footer>` wraps Footer
- `<h1>` only in HeroContent, all section titles are `<h2>`
- FAQ uses `<dl>` or ARIA `role="region"` with proper labelling

---

## Testing

Each new component gets a `.test.tsx` file:
- `StatsBar.test.tsx` — renders 4 stats
- `HowItWorks.test.tsx` — renders 4 steps
- `Features.test.tsx` — renders 6 feature cards
- `SupportedTokens.test.tsx` — renders token grid
- `FaqSection.test.tsx` — accordion open/close behaviour
- `Footer.test.tsx` — renders columns and disclaimer

Follow TDD: write failing test → implement → green.

---

## Out of scope

- Actual dApp functionality
- Analytics integration (to be added later)
- i18n / multilingual content
- Blog/documentation pages
- Actual token contract addresses (hardcoded as known values)
- Real social media URLs (all `#` placeholder)
- Real domain URL (all use `https://tronmultisender.io` as placeholder)
