import { HowItWorksVideo } from './HowItWorksVideo'

type HowItWorksStepProps = {
  number: string
  title: string
  description: string
  videoSrc?: string
}

export function HowItWorksStep({ number, title, description, videoSrc }: HowItWorksStepProps) {
  const titleId = `how-it-works-step-${number}-title`

  return (
    <article
      aria-labelledby={titleId}
      className={[
        'grid grid-cols-1 gap-6',
        'md:grid-cols-[2fr_3fr] md:gap-x-12 md:gap-y-5',
        "md:[grid-template-areas:'title_video''description_video']",
      ].join(' ')}
    >
      <div className="md:[grid-area:title] md:self-end">
        <span
          aria-hidden="true"
          className="block font-rubik font-extrabold text-[72px] md:text-[96px] text-primary leading-none tracking-[-0.04em] mb-3 md:mb-4"
        >
          {number}
        </span>
        <h3
          id={titleId}
          className="font-rubik font-light text-[24px] md:text-[32px] tracking-[-0.03em] text-dark-hard"
        >
          {title}
        </h3>
      </div>

      <div className="md:[grid-area:video]">
        <HowItWorksVideo stepNumber={number} src={videoSrc} />
      </div>

      <p className="md:[grid-area:description] md:self-start font-rubik text-[15px] md:text-[16px] text-dark leading-relaxed tracking-[-0.01em]">
        {description}
      </p>
    </article>
  )
}
