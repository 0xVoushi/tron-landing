import { useTranslations } from 'next-intl'
import { Logo } from '@/components/ui/Logo'
import { SocialLinks } from '@/components/footer/SocialLinks'
import { Link } from '@/i18n/routing'

const NAV_LINK_KEYS = [
  { key: 'howItWorks', href: '#how-it-works' },
  { key: 'features', href: '#features' },
  { key: 'perks', href: '#pricing' },
  { key: 'faq', href: '#faq' },
] as const

const LEGAL_LINK_KEYS = [
  { key: 'terms', href: '#' },
  { key: 'privacy', href: '#' },
  { key: 'documentation', href: '#' },
] as const

const START_YEAR = '2022'

export function Footer() {
  const t = useTranslations('footer')
  const currentYear = String(new Date().getFullYear())

  return (
    <footer className="bg-white border-t border-grey-medium px-8 md:px-10 lg:px-12 pt-12 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="mb-3">
              <Logo dark />
            </div>
            <p className="font-rubik text-[13px] text-dark leading-relaxed mb-5 max-w-[220px]">
              {t('brandDescription')}
            </p>
            <SocialLinks />
          </div>

          <div>
            <div className="font-rubik font-semibold text-[11px] text-grey uppercase tracking-[2px] mb-4">
              {t('navigationHeading')}
            </div>
            <ul className="space-y-2">
              {NAV_LINK_KEYS.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="font-rubik text-[13px] text-dark hover:text-brand-red transition-colors"
                  >
                    {t(`links.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-rubik font-semibold text-[11px] text-grey uppercase tracking-[2px] mb-4">
              {t('legalHeading')}
            </div>
            <ul className="space-y-2">
              {LEGAL_LINK_KEYS.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="font-rubik text-[13px] text-dark hover:text-brand-red transition-colors"
                  >
                    {t(`links.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-grey-medium pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <span className="font-rubik text-[12px] text-grey">
            {t('copyright', { startYear: START_YEAR, currentYear })}
          </span>
        </div>
      </div>
    </footer>
  )
}
