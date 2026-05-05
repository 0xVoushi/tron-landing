import { useTranslations } from 'next-intl'
import { PillButton } from '@/components/ui/PillButton'
import { FeatureCard } from './FeatureCard'
import {
  BatchTrxIllustration,
  CsvUploadIllustration,
  FeesIllustration,
  InstantConfirmationIllustration,
  OnChainIllustration,
  Trc20Illustration,
} from './FeatureIllustrations'

function UsersIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm8 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-8 2c-4 0-7 2-7 4v1h14v-1c0-2-3-4-7-4Zm8 1c-.8 0-1.6.1-2.3.3 1.1.8 1.8 1.9 2.1 2.9h7v-.7c0-1.7-2.3-2.5-6.8-2.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

function BoltIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" fill="currentColor" />
    </svg>
  )
}

function ShieldIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z"
        fill="currentColor"
      />
    </svg>
  )
}

function CircleXIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
      <path d="m9 9 6 6m0-6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function StatsRow({
  recipients,
  transaction,
  onchain,
}: {
  recipients: string
  transaction: string
  onchain: string
}) {
  const stats = [
    { label: recipients, icon: <UsersIcon /> },
    { label: transaction, icon: <BoltIcon /> },
    { label: onchain, icon: <ShieldIcon /> },
  ]
  return (
    <dl className="grid grid-cols-3 gap-4">
      {stats.map(({ label, icon }) => {
        const [value, ...rest] = label.split(' ')
        const suffix = rest.join(' ')
        return (
          <div key={label} className="flex items-center gap-3">
            <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-ghost text-primary">
              {icon}
            </span>
            <div className="flex flex-col leading-tight">
              <dt className="sr-only">{suffix || value}</dt>
              <dd className="font-rubik text-[16px] font-semibold text-dark-hard tracking-[-0.01em]">
                {value}
              </dd>
              {suffix ? (
                <span className="font-rubik text-[11px] text-dark/55 tracking-[0.02em]">
                  {suffix}
                </span>
              ) : null}
            </div>
          </div>
        )
      })}
    </dl>
  )
}

function PillTags({ labels }: { labels: string[] }) {
  return (
    <ul role="list" className="flex flex-wrap gap-2">
      {labels.map((label) => (
        <li
          key={label}
          className="inline-flex items-center gap-1.5 rounded-full border border-[#e6e6e6] bg-[#fafafa] px-3 py-1.5 text-[11.5px] font-rubik font-medium text-dark-hard/80"
        >
          <span className="text-primary">
            <CircleXIcon />
          </span>
          {label}
        </li>
      ))}
    </ul>
  )
}

export function Features() {
  const t = useTranslations('features')
  const tBrand = useTranslations('brand')

  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="relative bg-white py-20 md:py-28 px-6 md:px-10 lg:px-12 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <p className="font-rubik font-normal text-[14px] md:text-[15px] text-dark-hard tracking-[-0.01em] mb-5 text-center">
          {tBrand('name')}{' '}
          <span className="text-primary font-light">[ </span>
          {t('eyebrow')}
          <span className="text-primary font-light"> ]</span>
        </p>
        <h2
          id="features-heading"
          className="font-rubik font-bold text-[36px] md:text-[52px] lg:text-[60px] text-dark-hard tracking-[-0.035em] leading-[1.05] mb-5 text-center"
        >
          {t('title')}
        </h2>
        <p className="font-rubik text-[15px] md:text-[17px] text-dark/70 tracking-[-0.005em] mb-14 md:mb-16 text-center max-w-[52ch] mx-auto">
          {t('subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-fr gap-4 mb-4">
          <FeatureCard
            number="01"
            title={t('items.batchTrx.title')}
            description={t('items.batchTrx.description')}
            illustration={<BatchTrxIllustration />}
            extras={
              <PillButton variant="primary" size="sm">
                {t('items.batchTrx.cta')} ›
              </PillButton>
            }
            footer={
              <StatsRow
                recipients={t('items.batchTrx.stats.recipients')}
                transaction={t('items.batchTrx.stats.transaction')}
                onchain={t('items.batchTrx.stats.onchain')}
              />
            }
            className="md:col-span-2 lg:col-span-2 lg:row-span-2 md:min-h-[420px] lg:min-h-[560px]"
            illustrationClassName="lg:min-h-[280px]"
          />
          <FeatureCard
            number="02"
            title={t('items.trc20.title')}
            description={t('items.trc20.description')}
            illustration={<Trc20Illustration />}
            className="md:col-span-1 h-full"
          />
          <FeatureCard
            number="03"
            title={t('items.onChain.title')}
            description={t('items.onChain.description')}
            illustration={<OnChainIllustration />}
            extras={
              <PillTags
                labels={[
                  t('items.onChain.pills.custody'),
                  t('items.onChain.pills.signup'),
                  t('items.onChain.pills.kyc'),
                ]}
              />
            }
            className="md:col-span-1 h-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <FeatureCard
            number="04"
            title={t('items.csv.title')}
            description={t('items.csv.description')}
            illustration={<CsvUploadIllustration />}
            footer={<ProgressRow />}
            className="md:min-h-[340px]"
          />
          <FeatureCard
            number="05"
            title={t('items.fees.title')}
            description={t('items.fees.description')}
            illustration={<FeesIllustration />}
            className="md:min-h-[340px]"
          />
          <FeatureCard
            number="06"
            title={t('items.instant.title')}
            description={t('items.instant.description')}
            illustration={<InstantConfirmationIllustration />}
            className="md:min-h-[340px]"
          />
        </div>

        <p className="mt-12 md:mt-14 flex items-center justify-center gap-2 text-[13px] md:text-[14px] text-dark/60 font-rubik">
          <ShieldIcon className="text-primary" />
          {t('bottomLine')}
        </p>
      </div>
    </section>
  )
}

function ProgressRow() {
  return (
    <div aria-hidden="true" className="flex items-center gap-3">
      <div className="relative flex-1 h-[6px] rounded-full bg-[#f0f0f0] overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-[72%] rounded-full bg-gradient-to-r from-[#10b981] to-[#34d399]" />
      </div>
      <span className="font-rubik text-[11px] font-semibold tracking-[0.04em] text-dark/55 whitespace-nowrap">
        All rows validated
      </span>
      <span className="font-rubik text-[11px] font-bold tracking-[0.04em] text-[#10b981] whitespace-nowrap">
        100%
      </span>
    </div>
  )
}
