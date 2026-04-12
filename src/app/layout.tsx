import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import { FAQ_ITEMS } from '@/data/faq'
import { MobileLaunchButton } from '@/components/ui/MobileLaunchButton'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tron Multisender',
    description: 'Official batch transfer tool for TRON. Send to 1,000+ addresses in one tx.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://tronmultisender.io' },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Tron Multisender',
  url: 'https://tronmultisender.io',
  logo: 'https://tronmultisender.io/logo.png',
  sameAs: [] as string[],
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
      <body className="bg-black font-rubik antialiased">
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
        {children}
        <MobileLaunchButton />
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  )
}
