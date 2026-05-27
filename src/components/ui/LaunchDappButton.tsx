import { useTranslations } from 'next-intl'
import { PillButton } from './PillButton'

export function LaunchDappButton() {
  const t = useTranslations('nav')

  return (
    <div className="fixed lg:hidden z-50 left-1/2 -translate-x-1/2 bottom-[calc(1rem+env(safe-area-inset-bottom))]">
      <PillButton variant="primary" size="lg" className="shadow-xl shadow-primary/30">
        {t('launchApp')}
      </PillButton>
    </div>
  )
}
