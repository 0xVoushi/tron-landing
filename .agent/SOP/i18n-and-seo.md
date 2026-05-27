# SOP: i18n & SEO

**Last Updated**: 2026-04-20

Every page in this repo is localized and SEO-instrumented. This SOP is the short "how do I add / modify a page without breaking things" reference. The deep reference for i18n mechanics is [../../docs/i18n.md](../../docs/i18n.md).

## Quick Reference

| Need | Use |
|------|-----|
| Translate a string | Add a key to every file in `messages/*.json`, then `useTranslations()` / `getTranslations()` |
| Internal link | `import { Link } from '@/i18n/routing'` (NOT `next/link`) |
| Read current path / route | `usePathname` / `useRouter` / `redirect` from `@/i18n/routing` |
| Build page metadata | `buildMetadata({ locale, titleKey, descriptionKey, path, … })` from `@/lib/metadata` |
| Get an absolute URL | `absoluteUrl(path)` / `localizedUrl(locale, path)` from `@/lib/site` |
| Add an ordered list (FAQ/steps) | `*_KEYS` tuple in `src/data/…` + matching JSON keys |
| Render a component in a test | `renderWithIntl` from `@/test/render` |
| Verify translations | `npm run i18n:check` |

## Adding a new page

1. **Create the file** under `src/app/[locale]/<route>/page.tsx`. Default export must be async and call `setRequestLocale(locale)` before returning JSX.

   ```tsx
   // src/app/[locale]/foo/page.tsx
   import { setRequestLocale } from 'next-intl/server'
   import type { Metadata } from 'next'
   import type { Locale } from '@/i18n/locales'
   import { buildMetadata } from '@/lib/metadata'

   export async function generateMetadata({
     params,
   }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
     const { locale } = await params
     return buildMetadata({
       locale,
       titleKey: 'meta.foo.title',
       descriptionKey: 'meta.foo.description',
       path: '/foo',
     })
   }

   export default async function FooPage({
     params,
   }: { params: Promise<{ locale: Locale }> }) {
     const { locale } = await params
     setRequestLocale(locale)
     return <main>…</main>
   }
   ```

2. **Add message keys** for every locale in `messages/*.json` — at minimum `meta.foo.title` and `meta.foo.description`. Run `npm run i18n:check` to confirm parity.

3. **Register in `src/app/sitemap.ts`** — append a `RouteConfig` entry so the page appears in the per-locale sitemap with hreflang alternates.

4. **Build** — `npm run build` should succeed with no TS, lint, or i18n errors.

## Adding a new locale

Detailed steps in [../../docs/i18n.md](../../docs/i18n.md#add-a-new-language). Summary:

1. Append the entry to [../../src/i18n/locales.ts](../../src/i18n/locales.ts).
2. `cp messages/en.json messages/<code>.json` and keep `"_translationStatus": "pending"`.
3. `npm run i18n:check` must exit clean.

The middleware, sitemap, hreflang links, locale switcher, and `generateStaticParams` all pick it up automatically.

## Best Practices

✅ **DO**

- Import navigation helpers from `@/i18n/routing`. ESLint will block `next/link` and the wrong `next/navigation` helpers for a reason.
- Pass **key paths** to `buildMetadata` / JSON-LD, never raw strings.
- Put stable proper nouns (TRON, USDT, TRC-20, TronLink) inline in the source string, not in JSON values.
- Lock ordering of lists in TypeScript `*_KEYS` tuples (see [../../src/data/faq.ts](../../src/data/faq.ts), [../../src/data/guide.ts](../../src/data/guide.ts)).
- Use named ICU placeholders: `"© {startYear}–{currentYear} TRON Multisender"`.
- Wrap component tests with `renderWithIntl` from `@/test/render`.

❌ **DON'T**

- Don't hard-code URLs; use `absoluteUrl` / `localizedUrl` from `@/lib/site`.
- Don't write per-locale `if`-branches in components; fix the dictionary instead.
- Don't add raw strings to `generateMetadata` — go through `buildMetadata`.
- Don't import `next/link` or bare `next/navigation` helpers for internal routing.
- Don't use positional ICU placeholders (`{0}`).

## Common Mistakes

**Mistake**: A test fails with `useTranslations is not a function` or `IntlProvider missing`.
**Solution**: Replace `render(…)` with `renderWithIntl(…)` from `@/test/render`.
**Learning**: Any component using `useTranslations` / `useFormatter` needs an `NextIntlClientProvider` in test trees. The helper wires it up with the English dictionary.

**Mistake**: A new page 404s on `/de/foo` but works on `/foo`.
**Solution**: Confirm the file is at `src/app/[locale]/foo/page.tsx` — not `src/app/foo/page.tsx`. The middleware only rewrites under the `[locale]` segment.
**Learning**: The App Router folder is `[locale]`; the root-level `src/app/foo` would bypass locale routing and hreflang emission entirely.

**Mistake**: `npm run i18n:check` passes locally but prod displays a `namespace.key` string instead of a translation.
**Solution**: The message key exists in `en.json` but not in the viewer's locale. The request-config fallback returns the English text; if you see the raw key, it's missing everywhere. Add it.
**Learning**: `getMessageFallback` in `src/i18n/request.ts` falls back to the English value when a non-default locale is missing a key — it logs a warning in dev. Raw keys in production means English was missing too.

**Mistake**: `<Link href="/guide">` sends Russian users to the English page.
**Solution**: Import `Link` from `@/i18n/routing`, not `next/link`. ESLint will catch this, so the usual cause is an intentional disable — don't.
**Learning**: `next/link` has no concept of the current locale. The locale-aware `Link` prepends the correct prefix automatically and respects `localePrefix: 'as-needed'`.

## Related Documentation

- [../../docs/i18n.md](../../docs/i18n.md) — i18n authoring, formatters, and deploy guide
- [../../AGENTS.md](../../AGENTS.md) — project coding rules
- [../System/architecture.md](../System/architecture.md) — overall architecture map
- [../../src/lib/metadata.ts](../../src/lib/metadata.ts) — `buildMetadata` implementation
- [../../src/lib/structured-data.ts](../../src/lib/structured-data.ts) — JSON-LD builder
