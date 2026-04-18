# TRON Multisender — Landing Design Brief

> Document for upload to Cloudy Design. Describes the product, brand,
> current landing structure, and visual language so an AI design
> generator can produce **complementary** sections/blocks in the same
> style.

---

## 1. Product essence

**TRON Multisender** is an official on-chain tool for **batch sending
TRX and TRC-20 tokens** to **up to 1,000 addresses in a single
transaction** on the TRON network.

- Non-custodial, no registration, no KYC.
- Works via TronLink / any TronWeb-compatible wallet.
- Supports TRX (native), TRC-20 (USDT, USDC, WTRX and any contract),
  TRC-10 (BTT, etc.).
- Up to **~90% fee savings** vs. manual sending.
- Domain: `tronmultisender.io`. dApp: `tron.multisender.app`.

### Primary user jobs
1. **Crypto payroll** — mass USDT payouts to employees / contractors.
2. **Airdrops / token distribution** — community token drops.
3. **DAO / reward distributions** — payouts to holders, stakers.
4. **Token sales / refunds** — refunds and distributions.

### Target audience
- DeFi / token projects, DAOs, community founders.
- Accountants & ops teams at web3 companies (crypto payroll).
- Large individual holders / marketers running airdrops.

### Value props (repeat these visually)
- 1,000+ recipients per transaction
- ~90% fee savings
- Zero custody / fully on-chain
- 3 token types (TRX / TRC-20 / TRC-10)
- No registration / no KYC
- ~3 second TRON block time

---

## 2. Brand & visual system

### Colors (Tailwind v4 tokens, `src/app/globals.css`)

| Role | Token | Value |
|------|-------|-------|
| Primary (base) | `--color-primary` | `hsla(2, 60%, 48%, 1)` ≈ `#C43631` |
| Primary light | `--color-primary-light` | `hsla(2, 82%, 58%, 1)` |
| Primary medium | `--color-primary-medium` | `hsla(2, 67%, 62%, 1)` |
| Primary pale | `--color-primary-pale` | `hsla(353, 100%, 68%, 1)` |
| Primary dark | `--color-primary-dark` | `hsla(2, 36%, 38%, 1)` |
| Primary heavy | `--color-primary-heavy` | `hsla(2, 60%, 35%, 1)` |
| Primary ghost (bg) | `--color-primary-ghost` | primary @ 10% — `hsla(2, 60%, 48%, 0.1)` |
| Background | `--color-grey-light` | `#fafafa` (warm light) |
| Surface | white `#ffffff` |  |
| Text primary | `--color-dark-hard` | `#161616` |
| Text body | `--color-dark` | `#313131` |
| Text muted | `--color-grey` | `#aaaaaa` |
| Card border | `--color-grey-medium` | `#bbbbbb33` |
| Success | `--color-success` | `hsla(166, 83%, 47%, 1)` |
| Brand legacy | `--color-brand-red` | `#EE3F2C` (TRON logo) |

**Feel:** warm light / editorial, almost print-like. Large typography,
generous whitespace, light cards with a soft shadow. NOT a dark /
"cyberpunk" theme — except the Hero, which uses a dark background with
a PixelBlast WebGL shader.

### Typography
- Single typeface: **Rubik** (Google Fonts), weights 300–800.
- H1/H2: `font-light` (300), large (`text-[34–58px]`),
  `tracking-[-0.04em]`, `leading-[1.0]` — editorial headline feel.
- Section eyebrow: `text-[15–17px]`, normal weight, with the accent
  pattern `[ Section Name ]` — square brackets in `primary` color,
  text itself in dark.
- Tags / labels: uppercase, `tracking-[2px]`, small `text-[11px]`.
- Numbers / KPIs: `font-light` or `font-extrabold` in `primary`, large.
- Body: `text-[13–14px]`, `leading-relaxed`, `tracking-[-0.01em]`.

### Iconography
- `lucide-react` icons inside a circular `bg-primary-ghost` 40×40 chip,
  icon at 20px, `text-primary`.
- Decorative PNG/SVG (crown, percent sign) tucked into card corners.

### Signature utility classes (in `globals.css`)
- `glass-card` — white bg + border `#bbbbbb33` + soft double shadow.
- `glass-card-dark` — dark hero variant with blur.
- `btn-shimmer` — diagonal light sweep on hover for primary buttons.
- `hero-headline-shadow` — heavy 3-layer text shadow over the video bg.
- `animate-saturate-pulse`, `animate-float-slow`, `animate-float-medium`
  — subtle ornamental motion.

### Signature UI patterns (style "signatures")
- **Bracketed eyebrow**: `TRON Multisender [ Section Name ]`
  (red brackets, dark text) — appears on EVERY section.
- **Large translucent number** in a card corner
  (`text-[72px] text-black-4`, `-top-3 -right-1`) as a step number.
- **Red-outlined tags** for features: `[ 02 ]` in a pill.
- **Pill navbar**: on scroll the nav collapses into a white blurred pill.
- **Timeline** in HowItWorks: center vertical line + dots (desktop:
  zig-zag left/right, mobile: single left column).
- **Bento grid** in Features: two "hero" blocks spanning 2 columns,
  remaining cards in a standard grid, one card rendered dark
  (variant `dark`, `bg-dark-hard`).

### Buttons
- `PillButton` — primary CTA. Red gradient primary → primary-light,
  rounded-full, shimmer effect, primary/25 tinted shadow.
- Secondary actions — text links with an arrow (`ArrowRight` rotated
  −45°) in `primary-medium`, uppercase, `tracking-[0.05em]`.

### Breakpoints (mobile-first, Tailwind v4)
- default = `<768px` (mobile)
- `md:` = `≥768px` (tablet)
- `lg:` = `≥1024px` (desktop)

---

## 3. Current page structure (`src/app/page.tsx`)

Section order on home (`/`):

1. **HeroSection** — dark background, `PixelBlast` WebGL shader (red
   pixels, ripples), eyebrow + H1 "Batch Send TRX & TRC-20 Tokens" +
   description pill + CTA Launch dApp + 4-column stats grid (white on
   dark) + fixed `Navbar`.
2. **HowItWorks** — timeline of 4 steps (Connect Wallet → Add
   Recipients → Set Amounts → Send). Desktop: zig-zag with center line.
   Mobile: left-aligned column.
3. **Features** — bento grid, 4 columns. 6 cards, two "wide" hero
   blocks (Batch TRX Transfer, Instant Confirmation), one dark variant
   (Fully On-Chain). Each card has a `[ 02 ]` tag, a `[ visual ]`
   dashed placeholder, and description.
4. **SupportedTokens** — white bg, 5 tokens (TRX, USDT, USDC, WTRX,
   BTT), 48px icons, type badge (Native / TRC-20 / TRC-10) in corner.
5. **PricingSection** ("More Ways To Use") — 3 large cards: VIP Access
   (→ `/vip`), Referral Program (→ `/referral`), Testnet
   (→ tron.multisender.app). Decorative PNG (crown / percent) tucked
   into the top-right on the first two.
6. **FaqSection** — 17 questions, accordion with grid-rows animation
   (0fr↔1fr). Source: `src/data/faq.ts`.
7. **AiRecommendation** — CTA "Ask AI if we're right for you",
   5 square logo buttons (Gemini, Perplexity, ChatGPT, Grok, Claude)
   with a pre-filled prompt.
8. **Footer** — 3 columns (Brand + socials / Navigation / Legal).

### Sub-pages (already built)
- `/guide` — step-by-step usage guide (data in `src/data/guide.ts`).
- `/vip` — 4 plans (Starter / Professional / Business / Enterprise) +
  benefits.
- `/referral` — 10% referral program, 5% discount for invitee, 3 steps.

All sub-pages use `<Navbar alwaysOpaque />` + shared `<Footer />`.

---

## 4. Content & copy tone

- Voice: **confident, utility-first, no marketing fluff**.
- Anchor phrases: "in one transaction", "1,000+ addresses",
  "non-custodial", "no registration", "TRON's fast block time".
- Keep technical terms: TRX, TRC-20, TRC-10, TronLink, TronWeb,
  bandwidth, energy, CSV.
- SEO focus: `tron multisender`, `trc20 multisender`, `trx batch send`,
  `send usdt multiple addresses tron`, `tron bulk transfer`.
- Every section has an eyebrow in the form
  `TRON Multisender [ {Section} ]` — preserve this pattern in new blocks.

---

## 5. Technical stack (respect when generating)

- Next.js 16 App Router + React 19 canary.
- Tailwind **v4** (no `tailwind.config.ts` — tokens in `globals.css`
  inside `@theme inline`). Custom utilities in `@layer utilities`.
- Font: `Rubik` via `next/font/google`, class `font-rubik`.
- Icons: `lucide-react`.
- Hero WebGL: `three` + `postprocessing` (custom PixelBlast component).
- Tests: Jest 30 + React Testing Library 16, `*.test.tsx` files sit next
  to the component.
- Components — named exports, one component per file, Server Component
  by default, `'use client'` only when necessary.

---

## 6. What we want Cloudy Design to help with

We need **complementary sections / blocks** that:

1. **Match the warm-light editorial language** (white / `#fafafa` bg,
   `glass-card`, `font-rubik`, bracketed eyebrow).
2. **Do NOT duplicate** the existing HowItWorks / Features /
   SupportedTokens / Pricing / FAQ / AI-check sections.
3. Can reinforce stories currently missing from the page:
   - **Use cases / industries** — a dedicated section with concrete
     scenarios (crypto payroll, airdrop, DAO payout, refund, token
     sale) with mini-examples and numbers.
   - **Comparison** — TRON Multisender vs. manual vs. competitors
     (fee, speed, recipient cap, custody) — table or bento layout.
   - **Testimonials / social proof** — user quotes, project logos,
     Twitter-style cards.
   - **Security & trust** — audit badges, "keys never leave wallet",
     open-source contracts, Shasta / Nile testnet.
   - **Integration / API block** — for teams wanting to embed batch
     sending (CSV sample, code snippet, webhook).
   - **Live stats / metrics** — total volume sent, unique wallets, tx
     count (large `font-light` primary numbers, like StatsBar).
   - **Final CTA band** — dark variant (`bg-dark-hard`) right before
     the footer with one bold Launch dApp call.
4. **Do not break mobile layout** — mobile-first, `md:` / `lg:`
   breakpoints, section padding `py-16 md:py-24 px-8 md:px-10 lg:px-12`,
   container `max-w-7xl mx-auto` (for narrow sections `max-w-3xl`).

### Design constraints / guardrails
- No neon gradients or bright accents beyond `primary`.
- No round stock avatars / photos of people. Decor = abstract PNG / SVG
  tucked in card corners (like the crown and percent sign today).
- No full-width color illustrations. Illustrative inserts are either the
  `[ visual ]` placeholder in a dashed frame, or small decor in a card
  corner.
- Dark background is used **only** for the Hero and rare accents (1
  feature card today, plus a possible final CTA band).
- Minimal animation: hover-lift `-translate-y-1`, `scale-[1.02]`,
  `shadow-md`, shimmer on buttons. No carousel swipes, no heavy
  parallax scenes.

---

## 7. Useful references inside the repo

| What | Where |
|------|-------|
| Brand tokens | `src/app/globals.css` |
| Page composition | `src/app/page.tsx` |
| Section patterns | `src/components/sections/*` |
| Hero (dark variant) | `src/components/hero/HeroSection.tsx` |
| Shared primitives | `src/components/ui/PillButton.tsx`, `Logo.tsx` |
| Sub-page layout | `src/app/vip/page.tsx`, `src/app/referral/page.tsx` |
| FAQ content | `src/data/faq.ts` |
| Guide content | `src/data/guide.ts` |
| Agent conventions | `AGENTS.md` |

---

## 8. Quick checklist for generated blocks

A new block fits the project if:
- [ ] Uses tokens `primary`, `dark-hard`, `grey-light`, `glass-card`.
- [ ] Has a `TRON Multisender [ {Name} ]` eyebrow with red brackets.
- [ ] H2 is `font-light`, ~34–44px, `tracking-[-0.04em]`.
- [ ] Body text 13–14px, `text-dark`, `leading-relaxed`.
- [ ] Section padding and container: `py-16 md:py-24 px-8 md:px-10
      lg:px-12` + `max-w-7xl mx-auto`.
- [ ] Icons — `lucide-react` inside a 40×40 `bg-primary-ghost` circle.
- [ ] Buttons — `PillButton` primary, or text link with a −45° arrow.
- [ ] Works mobile-first, scales up via `md:grid-cols-*`.
- [ ] Does not duplicate existing sections
      (HowItWorks / Features / Tokens / Pricing / FAQ).
