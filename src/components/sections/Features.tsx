import { useTranslations } from 'next-intl'
import { PillButton } from '@/components/ui/PillButton'
import { launchDappUrl } from '@/lib/dapp'
import { FeatureCard } from './FeatureCard'
import {
  BatchTrxIllustration,
  CsvFileChip,
  CsvUploadIllustration,
  FeesIllustration,
  OnChainIllustration,
  Trc20Illustration,
} from './FeatureIllustrations'

function UsersIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm8 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-8 2c-4 0-7 2-7 4v1h14v-1c0-2-3-4-7-4Zm8 1c-.8 0-1.6.1-2.3.3 1.1.8 1.8 1.9 2.1 2.9h7v-.7c0-1.7-2.3-2.5-6.8-2.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

function BoltIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" fill="currentColor" />
    </svg>
  )
}

function ShieldIcon({ className = '', size = 18 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
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

function ClockIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="13" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 9v4l3 2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 3l-2 2M15 3l2 2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
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

interface Stat {
  value: string
  label: string
}
function StatsRow({
  recipients,
  transaction,
  onchain,
  blockTime,
}: {
  recipients: Stat
  transaction: Stat
  onchain: Stat
  blockTime: Stat
}) {
  const stats = [
    { ...recipients, icon: <UsersIcon size={22} /> },
    { ...transaction, icon: <BoltIcon size={22} /> },
    { ...onchain, icon: <ShieldIcon size={22} /> },
    { ...blockTime, icon: <ClockIcon size={22} /> },
  ]
  return (
    <ul role="list" className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {stats.map(({ value, label, icon }) => (
        <li
          key={label}
          className="flex items-center gap-3 rounded-xl bg-[#fafafa] px-3.5 py-3 transition-colors hover:bg-primary/5"
        >
          <span
            aria-hidden="true"
            className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/8 text-primary"
          >
            {icon}
          </span>
          <div className="flex flex-col leading-tight min-w-0">
            <span className="sr-only">{`${label}: `}</span>
            <span className="font-rubik font-bold text-[20px] md:text-[22px] text-dark-hard tracking-[-0.015em]">
              {value}
            </span>
            <span
              aria-hidden="true"
              className="font-rubik text-[11.5px] font-medium text-dark/70 tracking-[0.005em] mt-0.5 truncate"
            >
              {label}
            </span>
          </div>
        </li>
      ))}
    </ul>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <FeatureCard
            title={t('items.batchTrx.title')}
            description={t('items.batchTrx.description')}
            illustration={
              <BatchTrxIllustration
                recipientsLabel={t('items.batchTrx.illustration.recipients')}
                moreLabel={t('items.batchTrx.illustration.more')}
              />
            }
            extras={
              <PillButton variant="primary" size="sm" href={launchDappUrl('features')} newTab track="features">
                {t('items.batchTrx.cta')} ›
              </PillButton>
            }
            footer={
              <StatsRow
                recipients={{
                  value: t('items.batchTrx.stats.recipients.value'),
                  label: t('items.batchTrx.stats.recipients.label'),
                }}
                transaction={{
                  value: t('items.batchTrx.stats.transaction.value'),
                  label: t('items.batchTrx.stats.transaction.label'),
                }}
                onchain={{
                  value: t('items.batchTrx.stats.onchain.value'),
                  label: t('items.batchTrx.stats.onchain.label'),
                }}
                blockTime={{
                  value: t('items.batchTrx.stats.blockTime.value'),
                  label: t('items.batchTrx.stats.blockTime.label'),
                }}
              />
            }
            className="md:col-span-2 lg:col-span-2 lg:row-span-2"
            bodyClassName="grid grid-cols-1 md:grid-cols-[1.7fr_2.4fr] gap-6 md:gap-8 items-stretch flex-1"
            textColClassName="justify-center"
            titleClassName="text-[20px] md:text-[22px] md:[text-wrap:balance]"
            illustrationClassName="self-stretch"
          />
          <FeatureCard
            title={t('items.trc20.title')}
            titleClassName="text-[20px] md:text-[22px] md:[text-wrap:balance]"
            description={t('items.trc20.description')}
            illustration={<Trc20Illustration anyLabel={t('items.trc20.illustration.any')} />}
            className="md:col-span-1 h-full"
            bodyClassName="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-4 items-center flex-1"
            textColClassName="justify-center"
          />
          <FeatureCard
            title={t('items.onChain.title').replace('. ', '.\n')}
            titleClassName="text-[20px] md:text-[22px] whitespace-pre-line"
            description={t('items.onChain.description')}
            illustration={<OnChainIllustration />}
            footer={
              <PillTags
                labels={[
                  t('items.onChain.pills.custody'),
                  t('items.onChain.pills.signup'),
                  t('items.onChain.pills.kyc'),
                ]}
              />
            }
            bodyClassName="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-4 items-center flex-1"
            textColClassName="justify-center"
            noFooterBorder
            className="md:col-span-1 h-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <FeatureCard
            title={t('items.csv.title')}
            description={t('items.csv.description')}
            illustration={
              <CsvUploadIllustration
                addressLabel={t('items.csv.table.address')}
                amountLabel={t('items.csv.table.amount')}
              />
            }
            extras={
              <CsvFileChip
                name={t('items.csv.file.name')}
                meta={t('items.csv.file.meta')}
              />
            }
            footer={<ProgressRow label={t('progress.validated')} />}
            titleClassName="text-[18px] md:text-[19px]"
            descriptionClassName="text-[12.5px] md:max-w-[24ch]"
            bodyClassName="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4 flex-1 items-start"
            textColClassName="self-stretch"
            illustrationClassName="h-[160px] self-start"
          />
          <FeatureCard
            title={t('items.fees.title')}
            description={t('items.fees.description')}
            illustration={
              <FeesIllustration
                oneByOneLabel={t('items.fees.illustration.oneByOne')}
                batchLabel={t('items.fees.illustration.batch')}
                txCount300={t('items.fees.illustration.txCount300')}
                txCount1={t('items.fees.illustration.txCount1')}
                higherCostLabel={t('items.fees.illustration.higherCost')}
                lowerCostLabel={t('items.fees.illustration.lowerCost')}
              />
            }
            footer={
              <p className="font-rubik text-[12px] text-dark/70 text-center">
                {t('items.fees.subline')}
              </p>
            }
            noFooterBorder
            bodyClassName="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4 flex-1 items-stretch"
            textColClassName="self-center"
            illustrationClassName="h-[200px] self-stretch justify-end"
          />
        </div>

        <p className="mt-4 md:mt-4 flex items-center justify-center gap-2 text-[13px] md:text-[14px] text-dark/70 font-rubik">
          <ShieldIcon className="text-primary" />
          {t('bottomLine')}
        </p>
      </div>
    </section>
  )
}

function ProgressRow({ label }: { label: string }) {
  return (
    <div aria-hidden="true" className="flex flex-col gap-2 w-full">
      <div className="relative w-full h-[8px] rounded-full bg-[#f0f0f0] overflow-hidden">
        <div className="feat-progress-fill absolute inset-y-0 left-0 w-full rounded-full bg-gradient-to-r from-[#10b981] to-[#34d399]" />
      </div>
      <div className="flex items-center justify-between">
        <span className="font-rubik text-[12px] text-dark/70">{label}</span>
        <span className="font-rubik text-[12px] font-bold text-[#047857]">100%</span>
      </div>
    </div>
  )
}
