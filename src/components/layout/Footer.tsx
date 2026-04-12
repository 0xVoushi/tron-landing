import { GitBranch, Send, Share2 } from 'lucide-react'

function LogoMark() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M14 2L26 14L14 26L2 14L14 2Z" fill="rgba(255,255,255,0.12)" stroke="white" strokeWidth="1.5"/>
      <path d="M14 8L20 14L14 20L8 14L14 8Z" fill="white" opacity="0.85"/>
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.07] px-8 md:px-10 lg:px-12 pt-12 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <LogoMark />
              <span className="font-rubik font-bold text-[13px] text-white uppercase tracking-[2px]">
                TRON MULTISENDER
              </span>
            </div>
            <p className="font-rubik text-[13px] text-white/50 leading-relaxed mb-5 max-w-[220px]">
              The official batch transfer tool for the TRON blockchain.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Twitter / X" className="text-white/30 hover:text-white/70 transition-colors">
                <Share2 size={16} />
              </a>
              <a href="#" aria-label="Telegram" className="text-white/30 hover:text-white/70 transition-colors">
                <Send size={16} />
              </a>
              <a href="#" aria-label="GitHub" className="text-white/30 hover:text-white/70 transition-colors">
                <GitBranch size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-rubik font-semibold text-[11px] text-white/50 uppercase tracking-[2px] mb-4">
              Navigation
            </div>
            <ul className="space-y-2">
              {[
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Features', href: '#features' },
                { label: 'Supported Tokens', href: '#' },
                { label: 'FAQ', href: '#faq' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-rubik text-[13px] text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="font-rubik font-semibold text-[11px] text-white/50 uppercase tracking-[2px] mb-4">
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
                    className="font-rubik text-[13px] text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.07] pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <span className="font-rubik text-[12px] text-white/50">
            © 2026 Tron Multisender
          </span>
          <span className="font-rubik text-[11px] text-white/50 max-w-md md:text-right">
            Not affiliated with TRON Foundation. This tool is provided as-is. Use at your own risk.
          </span>
        </div>
      </div>
    </footer>
  )
}
