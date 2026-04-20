import { useTranslations } from 'next-intl'
import Image from 'next/image'

type AiService = {
  name: string
  url: (prompt: string) => string
  logo: string
}

export const AI_SERVICES: AiService[] = [
  {
    name: 'Gemini',
    url: (p) => `https://gemini.google.com/app?q=${encodeURIComponent(p)}`,
    logo: '/ai-logos/gemini.svg',
  },
  {
    name: 'Perplexity',
    url: (p) => `https://www.perplexity.ai/?q=${encodeURIComponent(p)}`,
    logo: '/ai-logos/perplexity.svg',
  },
  {
    name: 'ChatGPT',
    url: (p) => `https://chatgpt.com/?q=${encodeURIComponent(p)}`,
    logo: '/ai-logos/chatgpt.svg',
  },
  {
    name: 'Grok',
    url: (p) => `https://grok.com/?q=${encodeURIComponent(p)}`,
    logo: '/ai-logos/grok.svg',
  },
  {
    name: 'Claude',
    url: (p) => `https://claude.ai/new?q=${encodeURIComponent(p)}`,
    logo: '/ai-logos/claude.svg',
  },
]

export function AiRecommendation() {
  const t = useTranslations('aiRecommendation')
  const tBrand = useTranslations('brand')
  const prompt = t('prompt')

  return (
    <section
      id="ask-ai"
      aria-labelledby="ask-ai-heading"
      className="relative bg-white py-16 md:py-24 px-8 md:px-10 lg:px-12"
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-rubik font-normal text-[15px] md:text-[17px] text-dark-hard tracking-[-0.02em] mb-4">
          {tBrand('name')} <span className="text-primary font-light">[ </span>{t('eyebrow')}<span className="text-primary font-light"> ]</span>
        </p>

        <h2
          id="ask-ai-heading"
          className="font-rubik font-light text-[30px] md:text-[40px] text-dark-hard tracking-[-0.04em] mb-10 md:mb-12"
        >
          {t('title')}
        </h2>

        <ul className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {AI_SERVICES.map(({ name, url, logo }) => (
            <li key={name}>
              <a
                href={url(prompt)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('askAria', { name })}
                className={[
                  'group flex h-[68px] w-[68px] md:h-[76px] md:w-[76px] items-center justify-center',
                  'rounded-[18px] bg-grey-light border border-grey-medium',
                  'transition-all duration-200',
                  'hover:border-dark/20 hover:bg-white hover:-translate-y-0.5 hover:shadow-md',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
                ].join(' ')}
              >
                <Image
                  src={logo}
                  alt=""
                  aria-hidden
                  width={76}
                  height={76}
                  className="h-full w-full rounded-[18px] transition-transform duration-200 group-hover:scale-110"
                />
              </a>
            </li>
          ))}
        </ul>

        <p className="font-rubik text-[12px] md:text-[13px] text-grey mt-8">
          {t('note')}
        </p>
      </div>
    </section>
  )
}
