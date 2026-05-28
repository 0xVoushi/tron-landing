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

const LINK_CLASS = 'font-rubik text-[13px] text-dark hover:text-brand-red transition-colors'

const START_YEAR = '2022'

type FooterLink = { key: string; href: string }

/**
 * Render the footer link list. On home pages, hash-only hrefs are emitted as
 * plain <a href="#anchor"> so they scroll the existing page and don't trigger
 * a next-intl RSC prefetch. On inner pages (/guide, /vip, /referral) they
 * become locale-aware <Link href="/#anchor" prefetch={false}> so clicking
 * navigates back to the home document and scrolls to the right section while
 * preserving the current locale (routing is `localePrefix: 'as-needed'`).
 *
 * `prefetch={false}` keeps client-side navigation working but skips the
 * speculative viewport-prefetch that would re-fetch the home RSC tree.
 */
function renderFooterLink(link: FooterLink, label: string, isHome: boolean) {
  if (isHome) {
    return (
      <a href={link.href} className={LINK_CLASS}>
        {label}
      </a>
    )
  }
  return (
    <Link href={`/${link.href}`} prefetch={false} className={LINK_CLASS}>
      {label}
    </Link>
  )
}

export function Footer({ isHome = false }: { isHome?: boolean }) {
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
                <li key={link.key}>{renderFooterLink(link, t(`links.${link.key}`), isHome)}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-rubik font-semibold text-[11px] text-grey uppercase tracking-[2px] mb-4">
              {t('legalHeading')}
            </div>
            <ul className="space-y-2">
              {LEGAL_LINK_KEYS.map((link) => (
                <li key={link.key}>{renderFooterLink(link, t(`links.${link.key}`), isHome)}</li>
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
