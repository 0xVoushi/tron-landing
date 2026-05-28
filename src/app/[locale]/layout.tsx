import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Rubik } from 'next/font/google'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { GoogleAnalytics } from '@next/third-parties/google'
import { routing } from '@/i18n/routing'
import { getLocaleMeta, localeCodes, type Locale } from '@/i18n/locales'
import { formats } from '@/i18n/formats'
import { buildMetadata } from '@/lib/metadata'
import { getGlobalSchemas } from '@/lib/structured-data'
import { JsonLd } from '@/components/seo/JsonLd'
import { PostHogProvider } from '@/components/analytics/PostHogProvider'
import { AnalyticsResourceHints } from '@/components/analytics/AnalyticsResourceHints'
import '../globals.css'

// next/font can't be invoked dynamically per request, so we define two
// instances and pick by locale in the layout. Only `ru` needs the cyrillic
// subset (zh/ko fall back to the user-agent's system CJK font regardless —
// Rubik doesn't cover CJK), so the other seven locales ship latin-only and
// save ~15 KB per requested weight.
// next/font requires literal option values at build time (Turbopack
// statically extracts them), so weights/variable/display are duplicated
// across both instances instead of being shared from a const.
const rubikLatin = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-rubik',
  display: 'swap',
})
const rubikLatinCyrillic = Rubik({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-rubik',
  display: 'swap',
})

const CYRILLIC_LOCALES = new Set(['ru'])

function rubikFor(locale: string) {
  return CYRILLIC_LOCALES.has(locale) ? rubikLatinCyrillic : rubikLatin
}

export function generateStaticParams() {
  return localeCodes.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) return {}
  return buildMetadata({
    locale: locale as Locale,
    titleKey: 'meta.home.title',
    descriptionKey: 'meta.home.description',
    ogTitleKey: 'meta.home.ogTitle',
    ogDescriptionKey: 'meta.home.ogDescription',
    ogAltKey: 'meta.home.ogAlt',
    twitterDescriptionKey: 'meta.home.twitterDescription',
    path: '/',
  })
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()

  setRequestLocale(locale)
  const messages = await getMessages()
  const meta = getLocaleMeta(locale)
  const schemas = await getGlobalSchemas(locale)

  const rubik = rubikFor(locale)

  return (
    <html lang={locale} dir={meta.dir} className={`${rubik.variable} scroll-smooth`}>
      <body className="bg-grey-light font-rubik antialiased text-dark">
        <AnalyticsResourceHints />
        <JsonLd schemas={schemas} />
        <NextIntlClientProvider messages={messages} locale={locale} formats={formats}>
          <PostHogProvider>{children}</PostHogProvider>
        </NextIntlClientProvider>
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  )
}
