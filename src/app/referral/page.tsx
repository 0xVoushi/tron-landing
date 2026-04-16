import type { Metadata } from 'next'
import Link from 'next/link'
import { Share2, Wallet, Zap, ArrowLeft, Gift } from 'lucide-react'
import { Navbar } from '@/components/hero/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Referral Program — TRON Multisender',
  description: 'Invite users to TRON Multisender and earn 10% of the service fee for every referral. Your referrals get a 5% discount.',
}

const STEPS = [
  {
    number: '01',
    icon: Wallet,
    title: 'Connect Your Wallet',
    description: 'Open the dApp and connect your TronLink wallet to access the referral dashboard.',
  },
  {
    number: '02',
    icon: Share2,
    title: 'Create a Referral Code',
    description: 'Generate one or multiple referral codes. Share them with your community, team, or audience.',
  },
  {
    number: '03',
    icon: Zap,
    title: 'Earn on Every Transaction',
    description: 'Each time a referred user sends a batch transaction, you earn 10% of the service fee — automatically.',
  },
]

const STATS = [
  { value: '10%', label: 'You earn', sub: 'of service fee per referral tx' },
  { value: '5%', label: 'Your referral gets', sub: 'discount on service fee' },
  { value: null, label: 'Referral codes', sub: 'create as many as you need' },
]

export default function ReferralPage() {
  return (
    <>
      <Navbar alwaysOpaque />
      <main className="bg-grey-light min-h-screen">
        {/* Page header */}
        <section className="relative bg-grey-light pt-32 md:pt-40 pb-16 md:pb-20 px-8 md:px-10 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-rubik text-[12px] text-grey hover:text-dark-hard transition-colors mb-8 uppercase tracking-[0.05em]"
            >
              <ArrowLeft size={13} />
              Back to Home
            </Link>
            <p className="font-rubik font-normal text-[15px] md:text-[17px] text-dark-hard tracking-[-0.02em] mb-4">
              TRON Multisender <span className="text-primary font-light">[ </span>Referral<span className="text-primary font-light"> ]</span>
            </p>
            <h1 className="font-rubik font-light text-[38px] md:text-[52px] text-dark-hard tracking-[-0.04em] leading-[1.0] mb-5">
              Earn by Sharing.<br />Your Network Pays You.
            </h1>
            <p className="font-rubik text-[15px] text-dark leading-relaxed max-w-lg">
              Invite users to TRON Multisender and earn 10% of the service fee on every transaction they make. Your referrals get a 5% discount.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="relative bg-white py-12 px-8 md:px-10 lg:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
            {STATS.map((stat) => (
              <div key={stat.label} className="relative overflow-hidden glass-card rounded-lg p-6 text-center">
                <div className="h-[52px] flex items-center justify-center mb-2">
                  {stat.value === null ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="40" viewBox="0 0 32 32" aria-hidden="true" className="text-primary">
                      <path fill="currentColor" d="M23 23c-5.656 0-7.858-6.41-7.949-6.684C15.034 16.265 13.208 11 9 11c-2.757 0-5 2.243-5 5s2.243 5 5 5c1.588 0 3.013-.732 4.237-2.176l1.526 1.293C13.164 22.003 11.172 23 9 23c-3.86 0-7-3.14-7-7s3.14-7 7-7c5.656 0 7.858 6.41 7.949 6.684C16.966 15.735 18.792 21 23 21c2.757 0 5-2.243 5-5s-2.243-5-5-5c-1.588 0-3.013.732-4.237 2.176l-1.526-1.293C18.836 9.997 20.828 9 23 9c3.86 0 7 3.14 7 7s-3.14 7-7 7"/>
                    </svg>
                  ) : (
                    <span className="font-rubik font-extrabold text-[42px] text-primary leading-none">{stat.value}</span>
                  )}
                </div>
                <div className="font-rubik font-semibold text-[13px] text-dark-hard mb-1">{stat.label}</div>
                <div className="font-rubik text-[12px] text-grey">{stat.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="relative bg-grey-light py-16 md:py-20 px-8 md:px-10 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <p className="font-rubik font-normal text-[15px] md:text-[17px] text-dark-hard tracking-[-0.02em] mb-4 text-center">
              TRON Multisender <span className="text-primary font-light">[ </span>How It Works<span className="text-primary font-light"> ]</span>
            </p>
            <h2 className="font-rubik font-light text-[30px] md:text-[38px] text-dark-hard tracking-[-0.04em] mb-12 text-center">
              3 Steps to Start Earning
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
              {STEPS.map((step) => {
                const Icon = step.icon
                return (
                  <div key={step.number} className="relative overflow-hidden glass-card rounded-lg p-6 group hover:border-primary/30 hover:scale-[1.02] transition-all duration-500">
                    <span className="absolute -top-3 -right-1 font-rubik font-extrabold text-[72px] text-black-4 leading-none select-none pointer-events-none">
                      {step.number}
                    </span>
                    <div className="relative z-10">
                      <div className="w-10 h-10 rounded-full bg-primary-ghost flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-500">
                        <Icon size={20} className="text-primary" />
                      </div>
                      <div className="font-rubik font-bold text-[11px] text-primary-medium uppercase tracking-[2px] mb-2">
                        {step.number}
                      </div>
                      <h3 className="font-rubik font-bold text-[16px] text-dark-hard mb-2">{step.title}</h3>
                      <p className="font-rubik text-[13px] text-grey leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA */}
            <div className="relative overflow-hidden glass-card rounded-lg p-8 md:p-10 text-center">
              <div className="w-12 h-12 rounded-full bg-primary-ghost flex items-center justify-center mb-4 mx-auto">
                <Gift size={22} className="text-primary" />
              </div>
              <h3 className="font-rubik font-bold text-[22px] text-dark-hard mb-3">Ready to Start Earning?</h3>
              <p className="font-rubik text-[13px] text-dark leading-relaxed mb-6 max-w-md mx-auto">
                Connect your wallet to create your referral codes and start tracking your earnings. Payout is automatic on every referred transaction.
              </p>
              <a
                href="https://tron.multisender.app/referral"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-rubik font-bold text-[12px] uppercase tracking-[0.05em] py-3 px-8 rounded-full bg-gradient-to-r from-primary to-primary-light text-white btn-shimmer hover:scale-105 active:scale-95 transition-all duration-500 shadow-lg shadow-primary/25"
              >
                Open Referral Dashboard
              </a>
              <p className="font-rubik text-[11px] text-grey mt-4">
                * Payout is made for each invited user who completes a transaction via TRON Multisender.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
