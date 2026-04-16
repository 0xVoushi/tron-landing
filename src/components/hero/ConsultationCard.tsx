import { ShieldCheck } from 'lucide-react'
import { PillButton } from '@/components/ui/PillButton'

export function ConsultationCard() {
  return (
    <div
      className={[
        'absolute bottom-6 left-1/2 -translate-x-1/2 z-20',
        'lg:bottom-9',
        'flex items-center gap-[14px]',
        'py-[14px] px-[18px]',
        'rounded-lg',
        'glass-card-dark',
      ].join(' ')}
    >
      <div
        data-testid="shield-icon"
        className="w-10 h-10 rounded-full bg-white-10 flex items-center justify-center flex-shrink-0 shadow-md"
      >
        <ShieldCheck size={18} stroke="#fafafa" strokeWidth={2} />
      </div>

      <div className="flex flex-col">
        <span className="font-rubik font-medium text-[10px] text-white-40 uppercase tracking-[1.5px] mb-0.5">
          Verified
        </span>
        <span className="font-rubik font-semibold text-[14px] text-white tracking-[-0.2px]">
          TRON Multisender
        </span>
      </div>

      <PillButton variant="secondary" size="sm" className="ml-2 whitespace-nowrap">
        Launch dApp
      </PillButton>
    </div>
  )
}
