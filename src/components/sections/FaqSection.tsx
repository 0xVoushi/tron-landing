'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQ_ITEMS } from '@/data/faq'

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-black py-16 md:py-24 px-8 md:px-10 lg:px-12"
    >
      <div className="max-w-3xl mx-auto">
        <p className="font-rubik font-semibold text-[11px] text-brand-red uppercase tracking-[3px] mb-3 text-center">
          Got Questions?
        </p>
        <h2
          id="faq-heading"
          className="font-rubik font-extrabold text-[32px] md:text-[40px] text-white uppercase tracking-[-0.02em] mb-12 md:mb-16 text-center"
        >
          Frequently Asked Questions
        </h2>

        <div className="space-y-2">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="relative overflow-hidden glass-card rounded-xl">
              <button
                type="button"
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="font-rubik font-semibold text-[14px] md:text-[15px] text-white pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  size={18}
                  aria-hidden="true"
                  className={[
                    'text-white/40 flex-shrink-0 transition-transform duration-200',
                    openIndex === i ? 'rotate-180' : '',
                  ].join(' ')}
                />
              </button>

              {openIndex === i && (
                <div id={`faq-answer-${i}`} className="px-5 pb-5">
                  <p className="font-rubik text-[13px] md:text-[14px] text-white/55 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
