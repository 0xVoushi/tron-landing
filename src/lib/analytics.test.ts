import { waitFor } from '@testing-library/react'

jest.mock('posthog-js', () => ({
  __esModule: true,
  default: { capture: jest.fn() },
}))

import posthog from 'posthog-js'
import { trackEvent } from './analytics'

const mockCapture = (posthog as unknown as { capture: jest.Mock }).capture

describe('trackEvent', () => {
  beforeEach(() => {
    process.env.NEXT_PUBLIC_POSTHOG_KEY = 'phc_test'
  })

  afterEach(() => {
    jest.clearAllMocks()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete (window as any).gtag
  })

  it('forwards the event to PostHog and GA gtag', async () => {
    const gtag = jest.fn()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(window as any).gtag = gtag

    trackEvent('launch_dapp_click', { placement: 'hero' })

    await waitFor(() =>
      expect(mockCapture).toHaveBeenCalledWith('launch_dapp_click', { placement: 'hero' })
    )
    expect(gtag).toHaveBeenCalledWith('event', 'launch_dapp_click', { placement: 'hero' })
  })

  it('does not throw when gtag is absent', async () => {
    expect(() => trackEvent('launch_dapp_click', { placement: 'navbar' })).not.toThrow()
    await waitFor(() => expect(mockCapture).toHaveBeenCalledTimes(1))
  })
})
