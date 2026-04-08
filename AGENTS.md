# Agent Rules — tron-landing

## Stack

| Layer | Version | Notes |
|-------|---------|-------|
| Next.js | 16.2.2 | App Router only. Read `node_modules/next/dist/docs/` before writing any Next.js code — this version has breaking changes from what you were trained on. |
| React | 19 canary | App Router uses React canary builds. `react-dom` v19.3.0-canary is the actual runtime. |
| Tailwind | v4 | **Not v3.** No `tailwind.config.ts`. Configuration lives in CSS. See below. |
| TypeScript | 5 | Strict mode. |
| Testing | Jest 30 + RTL 16 | `npm test` |

---

## Directory structure

```
src/
  app/
    globals.css       ← Tailwind import + @theme tokens + @layer utilities
    layout.tsx        ← Root layout, Rubik font, metadata
    page.tsx          ← Homepage — renders <HeroSection />
  components/
    hero/             ← Page-specific hero components
      HeroSection.tsx
      Navbar.tsx
      VideoBackground.tsx
      HeroContent.tsx
      ConsultationCard.tsx
    ui/               ← Shared primitives
      ClippedButton.tsx
```

Path alias: `@/*` → `src/*`

---

## Tailwind v4

This is **not** Tailwind v3. Key differences:

- **No `tailwind.config.ts`** — theme tokens go in `src/app/globals.css` inside `@theme inline { }`.
- **Import**: `@import "tailwindcss"` (not `@tailwind base/components/utilities`).
- **Custom tokens** defined in `@theme inline` auto-generate utilities:
  - `--color-brand-red: #EE3F2C` → `bg-brand-red`, `text-brand-red`, `border-brand-red`
  - `--color-brand-black: #000000` → same pattern
  - `--font-rubik: var(--font-rubik)` → `font-rubik` class
- **Custom utilities** go in `@layer utilities { }` blocks in `globals.css`.
- Existing custom classes: `.btn-clipped-sm`, `.btn-clipped-md`, `.btn-clipped-lg`, `.glass-card`, `.hero-headline-shadow`.

### Breakpoints (mobile-first — CRITICAL)

Tailwind applies classes at **minimum** width. Default (no prefix) = smallest screens.

```
default   → mobile (<768px)
md:       → tablet (≥768px)
lg:       → desktop (≥1024px)
```

**Never** write `text-[64px] sm:text-[42px]` — that gives mobile the desktop size. Always:

```tsx
// ✅ correct
className="text-[42px] md:text-[52px] lg:text-[64px]"

// ❌ wrong — default hits mobile, sm: overrides upward
className="text-[64px] md:text-[52px] sm:text-[42px]"
```

---

## Brand tokens

| Token | Value | Tailwind class |
|-------|-------|----------------|
| Brand red | `#EE3F2C` | `bg-brand-red` / `text-brand-red` |
| Brand black | `#000000` | `bg-brand-black` / `text-brand-black` |
| Font | Rubik (Google Fonts) | `font-rubik` |

---

## Font loading

Rubik is loaded via `next/font/google` in `src/app/layout.tsx`. It injects `--font-rubik` as a CSS custom property on `<html>`. The `@theme inline` block in `globals.css` references it, making `font-rubik` a Tailwind utility.

Do not import fonts anywhere else. Do not use `<link>` tags for fonts.

---

## React Server vs Client components

Default is **Server Component**. Only add `'use client'` when the component uses:
- `useState`, `useReducer`, `useContext`
- `useEffect`, `useRef`, `useCallback`
- Browser-only APIs
- Event handlers that need interactivity

`HeroSection`, `HeroContent`, `ConsultationCard` are Server Components.  
`Navbar`, `VideoBackground` are Client Components (`'use client'`).

---

## Component conventions

- Named exports only (no `export default function`).
- One component per file.
- `<button>` elements must have `type="button"` unless they submit a form.
- No inline `style={}` except for values that can't be expressed in Tailwind (e.g., complex gradients).

---

## Testing

- Test files live next to the component: `Foo.tsx` → `Foo.test.tsx`.
- Run: `npm test` or `npm test -- path/to/Component.test.tsx --no-coverage`
- Follow TDD: write failing test → implement → verify green.
- jsdom doesn't process media queries — both mobile and desktop DOM branches are present during tests. Use `getAllBy*` when multiple matches are expected.
- `data-testid` is acceptable when no semantic selector works.

---

## Video background

`VideoBackground` uses `useEffect` to set `muted = true` via ref — this is intentional. React doesn't forward the `muted` prop to the DOM in all versions. Do not remove the `useEffect`.

---

## Known issues (not bugs)

- **Hydration warning in dev**: Caused by the LocatorJS Chrome extension injecting `data-locator-target` into `<html>`. Not a code issue. Disappears in incognito / production.
