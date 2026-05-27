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
        'lg:grid-cols-[2fr_3fr] lg:gap-x-12 lg:gap-y-5',
        "lg:[grid-template-areas:'title_video''description_video']",
      ].join(' ')}
    >
      <div className="lg:[grid-area:title] lg:self-end">
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

      <p className="lg:[grid-area:description] lg:self-start font-rubik text-[15px] md:text-[16px] text-dark leading-relaxed tracking-[-0.01em]">
        {description}
      </p>

      <div className="lg:[grid-area:video]">
        <HowItWorksVideo stepNumber={number} src={videoSrc} />
      </div>
    </article>
  )
}
