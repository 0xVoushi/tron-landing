import type { MetadataRoute } from 'next'
import { localeCodes, locales, defaultLocale } from '@/i18n/locales'
import { localizedUrl } from '@/lib/site'

type RouteConfig = {
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}

const ROUTES: RouteConfig[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/guide', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/vip', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/referral', changeFrequency: 'monthly', priority: 0.7 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return ROUTES.flatMap((route) => {
    const languages = Object.fromEntries(
      locales.map((l) => [l.iso, localizedUrl(l.code, route.path)])
    )
    languages['x-default'] = localizedUrl(defaultLocale, route.path)

    return localeCodes.map((locale) => ({
      url: localizedUrl(locale, route.path),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: { languages },
    }))
  })
}
