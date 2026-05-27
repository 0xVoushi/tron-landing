import { getTranslations } from 'next-intl/server'
import type { Locale } from '@/i18n/locales'
import { FAQ_ITEM_KEYS } from '@/data/faq'
import { GUIDE_SECTION_KEYS, GUIDE_STEP_KEYS } from '@/data/guide'
import { absoluteUrl, localizedUrl } from './site'

type Translator = (key: string) => string
type Schema = Record<string, unknown>

type HowToStepSource = { nameKey: string; textKeys: string[] }
type Crumb = { nameKey: string; path: string }

const HOME_STEP_KEYS = ['connect', 'prepare', 'approve', 'multisend'] as const

// Home HowTo mirrors the visible "How It Works" section steps.
const HOME_HOWTO_STEPS: HowToStepSource[] = HOME_STEP_KEYS.map((key) => ({
  nameKey: `howItWorks.steps.${key}.title`,
  textKeys: [`howItWorks.steps.${key}.description`],
}))

// Guide HowTo mirrors the visible guide sections + their steps.
const GUIDE_HOWTO_STEPS: HowToStepSource[] = GUIDE_SECTION_KEYS.map((section) => ({
  nameKey: `guide.sections.${section}.title`,
  textKeys: GUIDE_STEP_KEYS[section].map(
    (step) => `guide.sections.${section}.steps.${step}`
  ),
}))

/* ----------------------------- pure factories ---------------------------- */

export function organizationSchema(locale: Locale): Schema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TRON Multisender',
    url: localizedUrl(locale, '/'),
    logo: absoluteUrl('/logo.svg'),
    sameAs: [
      'https://x.com/multi_sender',
      'https://t.me/MultiSender',
      'https://medium.com/@MultiSenderApp',
    ],
  }
}

export function softwareSchema(t: Translator): Schema {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'TRON Multisender',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web Browser',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: t('structuredData.software.description'),
  }
}

export function webPageSchema(
  t: Translator,
  locale: Locale,
  opts: { path: string; titleKey: string; descriptionKey: string }
): Schema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: t(opts.titleKey),
    description: t(opts.descriptionKey),
    url: localizedUrl(locale, opts.path),
    inLanguage: locale,
  }
}

export function howToSchema(
  t: Translator,
  opts: { nameKey: string; descriptionKey: string; steps: HowToStepSource[] }
): Schema {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: t(opts.nameKey),
    description: t(opts.descriptionKey),
    step: opts.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: t(step.nameKey),
      text: step.textKeys.map((key) => t(key)).join(' '),
    })),
  }
}

export function breadcrumbSchema(
  t: Translator,
  locale: Locale,
  items: Crumb[]
): Schema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: t(item.nameKey),
      item: localizedUrl(locale, item.path),
    })),
  }
}

export function faqSchema(t: Translator): Schema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEM_KEYS.map((key) => ({
      '@type': 'Question',
      name: t(`faq.items.${key}.question`),
      acceptedAnswer: {
        '@type': 'Answer',
        text: t(`faq.items.${key}.answer`),
      },
    })),
  }
}

/* -------------------------- async composition ----------------------------- */

export async function getGlobalSchemas(locale: Locale): Promise<Schema[]> {
  const t = await getTranslations({ locale })
  return [organizationSchema(locale), softwareSchema(t)]
}

export async function getHomeSchemas(locale: Locale): Promise<Schema[]> {
  const t = await getTranslations({ locale })
  return [
    webPageSchema(t, locale, {
      path: '/',
      titleKey: 'meta.home.title',
      descriptionKey: 'meta.home.description',
    }),
    howToSchema(t, {
      nameKey: 'structuredData.howTo.name',
      descriptionKey: 'structuredData.howTo.description',
      steps: HOME_HOWTO_STEPS,
    }),
    faqSchema(t),
  ]
}

export async function getGuideSchemas(locale: Locale): Promise<Schema[]> {
  const t = await getTranslations({ locale })
  return [
    webPageSchema(t, locale, {
      path: '/guide',
      titleKey: 'meta.guide.title',
      descriptionKey: 'meta.guide.description',
    }),
    howToSchema(t, {
      nameKey: 'guide.title',
      descriptionKey: 'guide.intro',
      steps: GUIDE_HOWTO_STEPS,
    }),
    breadcrumbSchema(t, locale, [
      { nameKey: 'nav.home', path: '/' },
      { nameKey: 'meta.guide.title', path: '/guide' },
    ]),
  ]
}

export async function getVipSchemas(locale: Locale): Promise<Schema[]> {
  const t = await getTranslations({ locale })
  return [
    webPageSchema(t, locale, {
      path: '/vip',
      titleKey: 'meta.vip.title',
      descriptionKey: 'meta.vip.description',
    }),
    breadcrumbSchema(t, locale, [
      { nameKey: 'nav.home', path: '/' },
      { nameKey: 'meta.vip.title', path: '/vip' },
    ]),
  ]
}

export async function getReferralSchemas(locale: Locale): Promise<Schema[]> {
  const t = await getTranslations({ locale })
  return [
    webPageSchema(t, locale, {
      path: '/referral',
      titleKey: 'meta.referral.title',
      descriptionKey: 'meta.referral.description',
    }),
    breadcrumbSchema(t, locale, [
      { nameKey: 'nav.home', path: '/' },
      { nameKey: 'meta.referral.title', path: '/referral' },
    ]),
  ]
}
