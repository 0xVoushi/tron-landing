export const locales = [
  { code: 'en', name: 'English',   iso: 'en',      dir: 'ltr' },
  { code: 'ru', name: 'Русский',   iso: 'ru',      dir: 'ltr' },
  { code: 'zh', name: '中文',       iso: 'zh-Hans', dir: 'ltr' },
  { code: 'ko', name: '한국어',      iso: 'ko',      dir: 'ltr' },
  { code: 'pt', name: 'Português', iso: 'pt',      dir: 'ltr' },
  { code: 'es', name: 'Español',   iso: 'es',      dir: 'ltr' },
  { code: 'fr', name: 'Français',  iso: 'fr',      dir: 'ltr' },
  { code: 'de', name: 'Deutsch',   iso: 'de',      dir: 'ltr' },
] as const

export const defaultLocale = 'en' as const

export type Locale = (typeof locales)[number]['code']

export const localeCodes = locales.map((l) => l.code) as Locale[]

export function getLocaleMeta(code: Locale) {
  return locales.find((l) => l.code === code)!
}

export function isLocale(value: string): value is Locale {
  return (localeCodes as readonly string[]).includes(value)
}
