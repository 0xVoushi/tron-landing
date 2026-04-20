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
}

export default withNextIntl(nextConfig)
