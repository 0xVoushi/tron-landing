import { Phone } from 'lucide-react'
import { ClippedButton } from '@/components/ui/ClippedButton'

export function ConsultationCard() {
  return (
    <div
      className={[
        'absolute bottom-6 left-8 z-20',
        'lg:bottom-9 lg:left-12',
        'flex items-center gap-[14px]',
        'py-[14px] px-[18px]',
        'rounded-[10px]',
        'glass-card',
      ].join(' ')}
    >
      {/* Phone icon circle */}
      <div
        data-testid="phone-icon"
        className="w-10 h-10 rounded-full bg-white/[.92] flex items-center justify-center flex-shrink-0 shadow-md"
      >
        <Phone size={18} stroke="#111" strokeWidth={2} />
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <span className="font-rubik font-medium text-[10px] text-white/50 uppercase tracking-[1.5px] mb-0.5">
          Free
        </span>
        <span className="font-rubik font-semibold text-[14px] text-white tracking-[-0.2px]">
          Book a Consultation
        </span>
      </div>

      {/* CTA */}
      <ClippedButton variant="white" size="sm" className="ml-2 whitespace-nowrap">
        Book a Call
      </ClippedButton>
    </div>
  )
}
