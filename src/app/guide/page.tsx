import type { Metadata } from 'next'
import { GUIDE_SECTIONS } from '@/data/guide'
import { ClippedButton } from '@/components/ui/ClippedButton'
import { Navbar } from '@/components/hero/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'How to Use Tron Multisender — Step-by-Step Guide',
  description:
    'Learn how to batch send TRX and TRC-20 tokens to multiple addresses in one transaction. Step-by-step guide: connect wallet, add recipients, approve and send.',
  alternates: { canonical: 'https://tronmultisender.io/guide' },
  openGraph: {
    title: 'How to Use Tron Multisender — Step-by-Step Guide',
    description:
      'Learn how to batch send TRX and TRC-20 tokens to multiple addresses in one transaction.',
    url: 'https://tronmultisender.io/guide',
    type: 'article',
    images: [
      {
        url: 'https://tronmultisender.io/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tron Multisender Guide',
      },
    ],
  },
}

export default function GuidePage() {
  return (
    <>
      <Navbar />
      <main className="bg-black min-h-screen pt-24 pb-20 px-8 md:px-10 lg:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <p className="font-rubik font-semibold text-[11px] text-brand-red uppercase tracking-[3px] mb-3 text-center">
            Step-by-Step Guide
          </p>
          <h1 className="font-rubik font-extrabold text-[32px] md:text-[42px] text-white uppercase tracking-[-0.02em] mb-4 text-center leading-tight">
            How to Send TRON Tokens to Multiple Addresses
          </h1>
          <p className="font-rubik text-[14px] md:text-[15px] text-white/55 text-center leading-relaxed mb-14 max-w-xl mx-auto">
            Batch send TRX or any TRC-20 token to hundreds of wallets in a single on-chain
            transaction — no registration required.
          </p>

          {/* Sections */}
          <div className="space-y-6">
            {GUIDE_SECTIONS.map((section) => (
              <div
                key={section.title}
                className="relative overflow-hidden glass-card rounded-xl p-6 md:p-8"
              >
                <h2 className="font-rubik font-bold text-[18px] md:text-[20px] text-white mb-5">
                  {section.title}
                </h2>
                <ol className="space-y-3 list-none">
                  {section.steps.map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-red/15 flex items-center justify-center font-rubik font-bold text-[11px] text-brand-red mt-0.5">
                        {i + 1}
                      </span>
                      <p className="font-rubik text-[14px] text-white/70 leading-relaxed">
                        {step.text}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 text-center">
            <div className="inline-block glass-card rounded-xl px-8 py-6 mb-8">
              <p className="font-rubik font-bold text-[20px] text-white mb-2">
                Ready to send?
              </p>
              <p className="font-rubik text-[13px] text-white/50">
                Launch the dApp and complete your first batch transfer in minutes.
              </p>
            </div>
            <div>
              <ClippedButton variant="red" size="lg">Launch dApp</ClippedButton>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
