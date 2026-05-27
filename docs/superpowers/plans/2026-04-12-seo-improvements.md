# SEO Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix SEO gaps identified by audit: missing OG image meta, incomplete schemas, missing sitemap routes, failing contrast audit, and add a /guide page from tutorial content.

**Architecture:** All changes are in the Next.js App Router project at `tron-landing/`. Metadata lives in `src/app/layout.tsx`. Schemas are inline JSON-LD in the same file. The new `/guide` page follows the same Server Component + Tailwind pattern as other pages.

**Tech Stack:** Next.js 16.2 App Router, React 19, Tailwind v4, TypeScript strict

---

### Task 1: Add OG image meta tags + fix schema issues in layout.tsx

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Add og:image and twitter:image to metadata**

In `src/app/layout.tsx`, update the `metadata` export — add `images` to `openGraph` and `twitter`:

```ts
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
    images: [
      {
        url: 'https://tronmultisender.io/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tron Multisender — Official Batch Transfer Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tron Multisender',
    description: 'Official batch transfer tool for TRON. Send to 1,000+ addresses in one tx.',
    images: ['https://tronmultisender.io/og-image.png'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://tronmultisender.io' },
}
```

- [ ] **Step 2: Fix Organization schema — logo.png → logo.svg, add sameAs**

Update `organizationSchema` in the same file:

```ts
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Tron Multisender',
  url: 'https://tronmultisender.io',
  logo: 'https://tronmultisender.io/logo.svg',
  sameAs: [
    'https://x.com/multi_sender',
    'https://t.me/MultiSender',
    'https://medium.com/@MultiSenderApp',
  ],
}
```

- [ ] **Step 3: Add HowTo schema for the 4-step process**

Add a new schema constant after `softwareSchema`:

```ts
const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Batch Send TRX and TRC-20 Tokens with Tron Multisender',
  description:
    'Step-by-step guide to sending TRX or TRC-20 tokens to multiple addresses in one TRON transaction.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Connect Wallet',
      text: 'Connect TronLink or any compatible TRON wallet in one click. No account needed.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Add Recipients',
      text: 'Paste addresses manually or upload a CSV file with addresses and amounts.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Set Amounts',
      text: 'Assign the same amount to all recipients or set custom amounts per address.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Send',
      text: "Review and confirm. All recipients receive funds within 3–5 minutes via TRON's fast block time.",
    },
  ],
}
```

- [ ] **Step 4: Add WebSite schema with SearchAction**

Add after `howToSchema`:

```ts
const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Tron Multisender',
  url: 'https://tronmultisender.io',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://tronmultisender.io/?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}
```

- [ ] **Step 5: Inject new schemas into the page**

In `RootLayout`, add two more `<script>` blocks after the existing three:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
/>
```

- [ ] **Step 6: Commit**

```bash
cd /Users/voushi/Documents/GitHub/Multisender/tron-landing
git -c commit.gpgsign=false add src/app/layout.tsx
git -c commit.gpgsign=false commit -m "seo: add og:image, fix org schema, add HowTo+WebSite schemas"
```

---

### Task 2: Fix color contrast in PricingSection eyebrow text

**Files:**
- Modify: `src/app/globals.css`

The issue: `--color-brand-red: #DF3424` on `#111111` background gives ~4.07:1 contrast ratio, failing WCAG AA (needs 4.5:1 for small text). `#EE3F2C` gives ~4.84:1 and passes. This also matches the intended brand color per project docs.

- [ ] **Step 1: Update brand-red token in globals.css**

In `src/app/globals.css`, change:

```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-brand-red: #EE3F2C;
  --color-brand-black: #000000;
  --font-rubik: var(--font-rubik);
}
```

(Changed `#DF3424` → `#EE3F2C`)

- [ ] **Step 2: Commit**

```bash
git -c commit.gpgsign=false add src/app/globals.css
git -c commit.gpgsign=false commit -m "fix: brand-red contrast ratio #DF3424 → #EE3F2C, passes WCAG AA"
```

---

### Task 3: Update sitemap to include all pages

**Files:**
- Modify: `src/app/sitemap.ts`

- [ ] **Step 1: Add /vip, /referral, /guide to sitemap**

Replace the entire file content:

```ts
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://tronmultisender.io',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://tronmultisender.io/guide',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://tronmultisender.io/vip',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://tronmultisender.io/referral',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
```

- [ ] **Step 2: Commit**

```bash
git -c commit.gpgsign=false add src/app/sitemap.ts
git -c commit.gpgsign=false commit -m "seo: add /guide, /vip, /referral to sitemap"
```

---

### Task 4: Create /guide page

**Files:**
- Create: `src/app/guide/page.tsx`
- Create: `src/data/guide.ts`

Content sourced from the original `tron-multisender-ui` `/tutorial` page (English locale).

- [ ] **Step 1: Create guide data file**

Create `src/data/guide.ts`:

```ts
export type GuideStep = {
  text: string
}

export type GuideSection = {
  title: string
  steps: GuideStep[]
}

export const GUIDE_SECTIONS: GuideSection[] = [
  {
    title: 'Step 1 — Prepare',
    steps: [
      { text: 'Connect your TRON wallet (TronLink, TokenPocket, or any TronWeb-compatible wallet).' },
      { text: 'Select the network: Mainnet, or Shasta / Nile Testnet for testing.' },
      { text: 'Select the token from the list — TRX, TRC-10, or TRC-20 — or paste the contract address directly.' },
      { text: 'Enter recipient addresses and amounts. You can paste them manually or upload a CSV / XLS / XLSX file with two columns: address and amount.' },
      { text: 'Click the Proceed button to continue.' },
    ],
  },
  {
    title: 'Step 2 — Approve',
    steps: [
      { text: 'Accept the terms of service and click Continue.' },
      { text: 'Approve the token allowance transaction in your wallet. This gives the Multisender contract permission to transfer your tokens.' },
      { text: 'Wait for the approval transaction to confirm. You will be automatically redirected to the final step.' },
    ],
  },
  {
    title: 'Step 3 — Multisend',
    steps: [
      { text: 'Click the MultiSend button to initiate the batch transfer.' },
      { text: 'Confirm the transaction in your wallet.' },
      { text: 'Wait for the transaction to be mined. All recipients will receive their funds within 3–5 minutes thanks to TRON\'s fast block time.' },
    ],
  },
]
```

- [ ] **Step 2: Create the guide page component**

Create `src/app/guide/page.tsx`:

```tsx
import type { Metadata } from 'next'
import { GUIDE_SECTIONS } from '@/data/guide'
import { ClippedButton } from '@/components/ui/ClippedButton'
import { Navbar } from '@/components/hero/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'How to Use Tron Multisender — Step-by-Step Guide',
  description:
    'Learn how to batch send TRX and TRC-20 tokens to multiple addresses in one transaction. Step-by-step guide: connect wallet, add recipients, approve and send.',
  alternates: { canonical: 'https://tronmultisender.io/guide' },
  openGraph: {
    title: 'How to Use Tron Multisender — Step-by-Step Guide',
    description:
      'Learn how to batch send TRX and TRC-20 tokens to multiple addresses in one transaction.',
    url: 'https://tronmultisender.io/guide',
    type: 'article',
    images: [
      {
        url: 'https://tronmultisender.io/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tron Multisender Guide',
      },
    ],
  },
}

export default function GuidePage() {
  return (
    <>
      <Navbar />
      <main className="bg-black min-h-screen pt-24 pb-20 px-8 md:px-10 lg:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <p className="font-rubik font-semibold text-[11px] text-brand-red uppercase tracking-[3px] mb-3 text-center">
            Step-by-Step Guide
          </p>
          <h1 className="font-rubik font-extrabold text-[32px] md:text-[42px] text-white uppercase tracking-[-0.02em] mb-4 text-center leading-tight">
            How to Send TRON Tokens to Multiple Addresses
          </h1>
          <p className="font-rubik text-[14px] md:text-[15px] text-white/55 text-center leading-relaxed mb-14 max-w-xl mx-auto">
            Batch send TRX or any TRC-20 token to hundreds of wallets in a single on-chain
            transaction — no registration required.
          </p>

          {/* Sections */}
          <div className="space-y-10">
            {GUIDE_SECTIONS.map((section) => (
              <div key={section.title} className="relative overflow-hidden glass-card rounded-xl p-6 md:p-8">
                <h2 className="font-rubik font-bold text-[18px] md:text-[20px] text-white mb-5">
                  {section.title}
                </h2>
                <ol className="space-y-3 list-none">
                  {section.steps.map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-red/15 flex items-center justify-center font-rubik font-bold text-[11px] text-brand-red mt-0.5">
                        {i + 1}
                      </span>
                      <p className="font-rubik text-[14px] text-white/70 leading-relaxed">
                        {step.text}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 text-center">
            <div className="inline-block bg-brand-red/10 border border-brand-red/30 rounded-xl px-8 py-6 mb-8">
              <p className="font-rubik font-bold text-[20px] text-white mb-1">
                Ready to send?
              </p>
              <p className="font-rubik text-[13px] text-white/50">
                Launch the dApp and complete your first batch transfer in minutes.
              </p>
            </div>
            <div>
              <ClippedButton variant="red" size="lg">Launch dApp</ClippedButton>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 3: Verify the page renders without errors**

Run the dev server if not already running:
```bash
cd /Users/voushi/Documents/GitHub/Multisender/tron-landing
npm run dev
```
Open `http://localhost:3000/guide` — should render the 3-section guide with Navbar and Footer.

- [ ] **Step 4: Commit**

```bash
git -c commit.gpgsign=false add src/app/guide/page.tsx src/data/guide.ts
git -c commit.gpgsign=false commit -m "feat: add /guide page with step-by-step tutorial content"
```

---

### Task 5: Expand FAQ with long-tail keywords

**Files:**
- Modify: `src/data/faq.ts`

- [ ] **Step 1: Add 4 more FAQ items to the end of FAQ_ITEMS array**

Append to the `FAQ_ITEMS` array in `src/data/faq.ts`:

```ts
  {
    question: 'Can I do a USDT airdrop on TRON?',
    answer:
      'Yes. Tron Multisender is widely used for USDT airdrops on the TRON network. Upload a CSV with recipient wallet addresses and USDT amounts, confirm one transaction, and all airdrop recipients receive their tokens instantly.',
  },
  {
    question: 'How do I batch send TRC-20 tokens to multiple wallets?',
    answer:
      'Connect your TRON wallet, select TRC-20 as the token type and paste the contract address, then add recipient addresses and amounts via manual input or CSV upload. One transaction sends to all wallets simultaneously.',
  },
  {
    question: 'Is there a minimum amount to use Tron Multisender?',
    answer:
      'There is no minimum token amount per recipient. You do need enough TRX in your wallet to cover the TRON network bandwidth and energy costs for the batch transaction.',
  },
  {
    question: 'What is the difference between TRC-10 and TRC-20 tokens?',
    answer:
      'TRC-10 tokens are issued via the TRON protocol itself (like BTT), while TRC-20 tokens run on smart contracts (like USDT, USDC). Tron Multisender supports both types along with native TRX.',
  },
```

- [ ] **Step 2: Commit**

```bash
git -c commit.gpgsign=false add src/data/faq.ts
git -c commit.gpgsign=false commit -m "seo: expand FAQ with long-tail keyword coverage"
```

---

## Self-Review Checklist

- [x] OG image meta (og:image, twitter:image) — Task 1 Step 1
- [x] sameAs in Organization schema — Task 1 Step 2
- [x] logo.png → logo.svg in schema — Task 1 Step 2
- [x] HowTo schema — Task 1 Step 3
- [x] WebSite schema — Task 1 Step 4
- [x] Color contrast fix — Task 2
- [x] Sitemap updated (/guide, /vip, /referral) — Task 3
- [x] /guide page — Task 4
- [x] FAQ expanded — Task 5
- [x] dApp links kept as href="#" (per user instruction) — not in plan
- [x] Canonical domain placeholder kept — not changed yet
