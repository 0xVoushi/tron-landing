import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'
import { defaultLocale, localeCodes } from './src/i18n/locales'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

const ALIAS_REDIRECTS: Array<{ from: string; to: string }> = [
  { from: '/tutorial', to: '/guide' },
]

function buildLocalizedRedirects() {
  return ALIAS_REDIRECTS.flatMap(({ from, to }) =>
    localeCodes.map((locale) => {
      const prefix = locale === defaultLocale ? '' : `/${locale}`
      return {
        source: `${prefix}${from}`,
        destination: `${prefix}${to}`,
        permanent: true,
      }
    }),
  )
}

const nextConfig: NextConfig = {
  async redirects() {
    return buildLocalizedRedirects()
  },
  images: {
    // Default order in Next 16 puts WebP first; AVIF gives ~15-25% better
    // compression on supported browsers (currently all evergreens).
    formats: ['image/avif', 'image/webp'],
    // Narrowed from the Next defaults [640,750,828,1080,1200,1920,2048,3840]
    // — this site's breakpoints are md=768 and lg=1024, plus retina-2x for
    // the largest hero image. Smaller `_next/image` cache & faster build.
    deviceSizes: [640, 828, 1080, 1920],
  },
}

export default withNextIntl(nextConfig)
