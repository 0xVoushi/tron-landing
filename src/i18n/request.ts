import { hasLocale } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'
import { formats } from './formats'
import { defaultLocale } from './locales'

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  const locale = hasLocale(routing.locales, requested) ? requested : defaultLocale

  const messages = (await import(`../../messages/${locale}.json`)).default
  const fallbackMessages =
    locale === defaultLocale ? messages : (await import(`../../messages/${defaultLocale}.json`)).default

  return {
    locale,
    messages,
    formats,
    getMessageFallback({ namespace, key }) {
      const fullKey = namespace ? `${namespace}.${key}` : key
      const fallback = fullKey.split('.').reduce<unknown>(
        (acc, segment) =>
          acc && typeof acc === 'object' ? (acc as Record<string, unknown>)[segment] : undefined,
        fallbackMessages,
      )
      if (typeof fallback === 'string') return fallback
      if (process.env.NODE_ENV !== 'production') {
        console.warn(`[i18n] Missing message "${fullKey}" in locale "${locale}"`)
      }
      return fullKey
    },
  }
})
