import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { locales, type Locale } from '@/i18n/locales'
import { SITE_OG_IMAGE, absoluteUrl, localizedPath, localizedUrl } from './site'

export type BuildMetadataInput = {
  locale: Locale
  titleKey: string
  descriptionKey: string
  path: string
  vars?: Record<string, string | number>
  ogImage?: string
  ogType?: 'website' | 'article'
  ogTitleKey?: string
  ogDescriptionKey?: string
  ogAltKey?: string
  twitterDescriptionKey?: string
}

export async function buildMetadata({
  locale,
  titleKey,
  descriptionKey,
  path,
  vars,
  ogImage = SITE_OG_IMAGE,
  ogType = 'website',
  ogTitleKey,
  ogDescriptionKey,
  ogAltKey,
  twitterDescriptionKey,
}: BuildMetadataInput): Promise<Metadata> {
  const t = await getTranslations({ locale })

  const title = t(titleKey, vars)
  const description = t(descriptionKey, vars)
  const ogTitle = ogTitleKey ? t(ogTitleKey, vars) : title
  const ogDescription = ogDescriptionKey ? t(ogDescriptionKey, vars) : description
  const ogAlt = ogAltKey ? t(ogAltKey, vars) : title
  const twitterDescription = twitterDescriptionKey
    ? t(twitterDescriptionKey, vars)
    : description

  const canonical = localizedUrl(locale, path)
  const ogImageUrl = ogImage.startsWith('http') ? ogImage : absoluteUrl(ogImage)

  const languages: Record<string, string> = {}
  for (const l of locales) {
    languages[l.iso] = localizedUrl(l.code, path)
  }
  languages['x-default'] = localizedUrl('en', path)

  return {
    title,
    description,
    metadataBase: new URL(absoluteUrl('/')),
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      type: ogType,
      url: canonical,
      siteName: 'TRON Multisender',
      locale: locale,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 720,
          alt: ogAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: twitterDescription,
      images: [ogImageUrl],
    },
    robots: { index: true, follow: true },
  }
}

export function localizedPathFor(locale: Locale, path: string): string {
  return localizedPath(locale, path)
}
