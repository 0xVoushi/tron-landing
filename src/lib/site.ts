import { defaultLocale, type Locale } from '@/i18n/locales'

export const SITE_URL = 'https://trxsend.com'
export const SITE_OG_IMAGE = '/og-image.png'

export function absoluteUrl(path: string): string {
  const cleaned = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${cleaned}`
}

export function localizedPath(locale: Locale, path: string): string {
  const normalized = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`
  if (locale === defaultLocale) return normalized || '/'
  return `/${locale}${normalized}`
}

export function localizedUrl(locale: Locale, path: string): string {
  return absoluteUrl(localizedPath(locale, path))
}
