import { act, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithIntl } from '@/test/render'
import { locales } from '@/i18n/locales'
import { LocaleSwitcher } from './LocaleSwitcher'

jest.mock('../../i18n/routing', () => {
  const actual = jest.requireActual('../../i18n/routing')
  return {
    ...actual,
    usePathname: () => '/guide',
  }
})

describe('LocaleSwitcher', () => {
  it('shows the current locale name in the trigger after mount', async () => {
    await act(async () => {
      renderWithIntl(<LocaleSwitcher />, { locale: 'en' })
    })
    expect(screen.getByRole('button', { name: /English/i })).toBeInTheDocument()
  })

  it('opens a list of all locales when clicked, marking current as selected', async () => {
    const user = userEvent.setup()
    await act(async () => {
      renderWithIntl(<LocaleSwitcher />, { locale: 'en' })
    })
    await user.click(screen.getByRole('button', { name: /English/i }))
    const list = screen.getByRole('listbox')
    const options = within(list).getAllByRole('option')
    expect(options).toHaveLength(locales.length)
    const current = options.find((o) => o.getAttribute('aria-selected') === 'true')
    expect(current).toHaveTextContent('English')
  })

  it('renders other locales as locale-prefixed Links', async () => {
    const user = userEvent.setup()
    await act(async () => {
      renderWithIntl(<LocaleSwitcher />, { locale: 'en' })
    })
    await user.click(screen.getByRole('button', { name: /English/i }))
    const ru = screen.getByRole('option', { name: 'Русский' })
    expect(ru.tagName).toBe('A')
    expect(ru.getAttribute('href')).toMatch(/\/ru\/guide/)
  })
})
