import { Logo } from '@/components/ui/Logo'
import { SocialLinks } from '@/components/footer/SocialLinks'

export function Footer() {
  return (
    <footer className="bg-white border-t border-grey-medium px-8 md:px-10 lg:px-12 pt-12 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-3">
              <Logo dark />
            </div>
            <p className="font-rubik text-[13px] text-dark leading-relaxed mb-5 max-w-[220px]">
              Batch transfer tool for the TRON blockchain.
            </p>
            <SocialLinks />
          </div>

          {/* Navigation */}
          <div>
            <div className="font-rubik font-semibold text-[11px] text-grey uppercase tracking-[2px] mb-4">
              Navigation
            </div>
            <ul className="space-y-2">
              {[
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Features', href: '#features' },
                { label: 'Perks', href: '#pricing' },
                { label: 'FAQ', href: '#faq' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-rubik text-[13px] text-dark hover:text-brand-red transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="font-rubik font-semibold text-[11px] text-grey uppercase tracking-[2px] mb-4">
              Legal
            </div>
            <ul className="space-y-2">
              {[
                { label: 'Terms of Service', href: '#' },
                { label: 'Privacy Policy', href: '#' },
                { label: 'Documentation', href: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-rubik text-[13px] text-dark hover:text-brand-red transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-grey-medium pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <span className="font-rubik text-[12px] text-grey">
            © 2022-{new Date().getFullYear()} TRON Multisender
          </span>
        </div>
      </div>
    </footer>
  )
}
