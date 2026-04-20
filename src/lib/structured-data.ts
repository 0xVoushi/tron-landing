import { getTranslations } from 'next-intl/server'
import type { Locale } from '@/i18n/locales'
import { FAQ_ITEM_KEYS } from '@/data/faq'
import { absoluteUrl, localizedUrl } from './site'

export async function buildStructuredData(locale: Locale) {
  const t = await getTranslations({ locale })

  const organization = {
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

  const software = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'TRON Multisender',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web Browser',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: t('structuredData.software.description'),
  }

  const howToStepKeys = ['connect', 'recipients', 'amounts', 'send'] as const
  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: t('structuredData.howTo.name'),
    description: t('structuredData.howTo.description'),
    step: howToStepKeys.map((key, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: t(`structuredData.howTo.steps.${key}.name`),
      text: t(`structuredData.howTo.steps.${key}.text`),
    })),
  }

  const webSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TRON Multisender',
    url: localizedUrl(locale, '/'),
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${localizedUrl(locale, '/')}?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const faqPage = {
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

  return [organization, software, howTo, webSite, faqPage]
}
