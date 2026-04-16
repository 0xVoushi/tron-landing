import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import { FAQ_ITEMS } from '@/data/faq'
import { MobileLaunchButton } from '@/components/ui/MobileLaunchButton'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-rubik',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tron Multisender — Official TRX & TRC-20 Batch Transfer Tool',
  description:
    'Send TRX and TRC-20 tokens to 1,000+ addresses in one TRON transaction. Official non-custodial batch transfer tool. No registration required.',
  keywords: [
    'tron multisender',
    'trc20 multisender',
    'trx batch send',
    'tron batch transfer',
    'send trc20 multiple addresses',
    'tron bulk transfer',
  ],
  openGraph: {
    title: 'Tron Multisender — Official Batch Transfer Tool',
    description:
      'Send TRX and TRC-20 tokens to 1,000+ addresses in one transaction. Non-custodial.',
    type: 'website',
    url: 'https://tronmultisender.io',
    siteName: 'Tron Multisender',
    images: [
      {
        url: 'https://tronmultisender.io/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tron Multisender — Official Batch Transfer Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tron Multisender',
    description: 'Official batch transfer tool for TRON. Send to 1,000+ addresses in one tx.',
    images: ['https://tronmultisender.io/og-image.png'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://tronmultisender.io' },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Tron Multisender',
  url: 'https://tronmultisender.io',
  logo: 'https://tronmultisender.io/logo.svg',
  sameAs: [
    'https://x.com/multi_sender',
    'https://t.me/MultiSender',
    'https://medium.com/@MultiSenderApp',
  ],
}

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Tron Multisender',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description:
    'Batch send TRX and TRC-20 tokens to multiple addresses on the TRON blockchain in a single transaction.',
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Batch Send TRX and TRC-20 Tokens with Tron Multisender',
  description:
    'Step-by-step guide to sending TRX or TRC-20 tokens to multiple addresses in one TRON transaction.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Connect Wallet',
      text: 'Connect TronLink or any compatible TRON wallet in one click. No account needed.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Add Recipients',
      text: 'Paste addresses manually or upload a CSV file with addresses and amounts.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Set Amounts',
      text: 'Assign the same amount to all recipients or set custom amounts per address.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Send',
      text: "Review and confirm. All recipients receive funds within 3–5 minutes via TRON's fast block time.",
    },
  ],
}

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Tron Multisender',
  url: 'https://tronmultisender.io',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://tronmultisender.io/?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

function getFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${rubik.variable} scroll-smooth`}>
      <body className="bg-grey-light font-rubik antialiased text-dark">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        {children}
        <MobileLaunchButton />
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  )
}
