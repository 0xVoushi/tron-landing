import { type ReactElement } from 'react'
import { render, type RenderOptions, type RenderResult } from '@testing-library/react'
import { NextIntlClientProvider, type AbstractIntlMessages } from 'next-intl'
import enMessages from '../../messages/en.json'
import { defaultLocale, type Locale } from '@/i18n/locales'
import { formats } from '@/i18n/formats'

type RenderWithIntlOptions = Omit<RenderOptions, 'wrapper'> & {
  locale?: Locale
  messages?: AbstractIntlMessages
}

export function renderWithIntl(
  ui: ReactElement,
  options: RenderWithIntlOptions = {}
): RenderResult {
  const { locale = defaultLocale, messages, ...rest } = options
  const intlMessages = (messages ?? (enMessages as unknown as AbstractIntlMessages))

  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <NextIntlClientProvider
        locale={locale}
        messages={intlMessages}
        formats={formats}
      >
        {children}
      </NextIntlClientProvider>
    )
  }

  return render(ui, { wrapper: Wrapper, ...rest })
}

export * from '@testing-library/react'
