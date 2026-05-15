import { Play } from 'lucide-react'

type HowItWorksVideoProps = {
  stepNumber: string
  src?: string
}

export function HowItWorksVideo({ stepNumber, src }: HowItWorksVideoProps) {
  const hasSrc = typeof src === 'string' && src.length > 0

  if (!hasSrc) {
    return (
      <div
        role="img"
        aria-label={`Step ${stepNumber} video placeholder`}
        className="aspect-[16/9] rounded-xl overflow-hidden glass-card border border-primary/10 flex flex-col items-center justify-center gap-3"
      >
        <div className="w-14 h-14 rounded-full bg-primary-ghost flex items-center justify-center">
          <Play size={22} className="text-primary translate-x-[1px]" aria-hidden="true" />
        </div>
        <p className="font-rubik text-[13px] text-grey tracking-[-0.01em]">
          Video coming soon
        </p>
      </div>
    )
  }

  return (
    <div className="aspect-[16/9] rounded-xl overflow-hidden glass-card border border-primary/10">
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={`Step ${stepNumber} demo`}
        className="w-full h-full object-cover"
      />
    </div>
  )
}
