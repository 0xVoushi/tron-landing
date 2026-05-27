import { act, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithIntl } from '@/test/render'
import { CONSENT_STORAGE_KEY } from '@/lib/consent'

jest.mock('posthog-js', () => ({
  __esModule: true,
  default: { opt_in_capturing: jest.fn() },
  opt_in_capturing: jest.fn(),
}))

import posthog from 'posthog-js'
import { ConsentBanner } from './ConsentBanner'

describe('ConsentBanner', () => {
  beforeEach(() => {
    window.localStorage.clear()
    ;(window as unknown as { gtag?: jest.Mock }).gtag = jest.fn()
    process.env.NEXT_PUBLIC_POSTHOG_KEY = 'phc_test'
    ;(posthog.opt_in_capturing as jest.Mock).mockClear()
  })

  it('renders when consent is not stored', async () => {
    await act(async () => {
      renderWithIntl(<ConsentBanner />, { locale: 'en' })
    })
    expect(screen.getByTestId('consent-banner')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'OK' })).toBeInTheDocument()
  })

  it('does not render when consent is already stored', async () => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, 'granted')
    await act(async () => {
      renderWithIntl(<ConsentBanner />, { locale: 'en' })
    })
    expect(screen.queryByTestId('consent-banner')).not.toBeInTheDocument()
  })

  it('on OK click: persists, dispatches gtag update, opts PostHog in, hides banner', async () => {
    const user = userEvent.setup()
    await act(async () => {
      renderWithIntl(<ConsentBanner />, { locale: 'en' })
    })
    const gtag = (window as unknown as { gtag: jest.Mock }).gtag

    await user.click(screen.getByRole('button', { name: 'OK' }))

    expect(window.localStorage.getItem(CONSENT_STORAGE_KEY)).toBe('granted')
    expect(gtag).toHaveBeenCalledWith(
      'consent',
      'update',
      expect.objectContaining({
        ad_storage: 'granted',
        analytics_storage: 'granted',
      })
    )
    expect(posthog.opt_in_capturing).toHaveBeenCalledTimes(1)
    expect(screen.queryByTestId('consent-banner')).not.toBeInTheDocument()
  })
})
