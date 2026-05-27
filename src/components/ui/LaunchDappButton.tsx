import { useTranslations } from 'next-intl'
import { PillButton } from './PillButton'
import { launchDappUrl } from '@/lib/dapp'

export function LaunchDappButton() {
  const t = useTranslations('nav')

  return (
    <div className="fixed lg:hidden z-50 left-1/2 -translate-x-1/2 bottom-[calc(1rem+env(safe-area-inset-bottom))]">
      <PillButton
        variant="primary"
        size="lg"
        className="shadow-xl shadow-primary/30"
        href={launchDappUrl('mobile_fab')}
        newTab
        track="mobile_fab"
      >
        {t('launchApp')}
      </PillButton>
    </div>
  )
}
