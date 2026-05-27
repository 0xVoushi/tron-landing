import { act, render } from '@testing-library/react'
import {
  CONSENT_CHANGED_EVENT,
  CONSENT_GRANTED,
  CONSENT_STORAGE_KEY,
} from '@/lib/consent'

jest.mock('posthog-js', () => ({
  __esModule: true,
  default: {
    init: jest.fn(),
    capture: jest.fn(),
    opt_in_capturing: jest.fn(),
    has_opted_out_capturing: jest.fn(() => true),
  },
}))

// Relative path resolves to the same file as the component's '@/i18n/routing'
// import, so the mock intercepts it (jest.mock doesn't honor the @/ alias).
jest.mock('../../i18n/routing', () => ({ usePathname: () => '/' }))

import posthog from 'posthog-js'
import { PostHogProvider } from './PostHogProvider'

const mockPosthog = posthog as unknown as {
  init: jest.Mock
  capture: jest.Mock
  opt_in_capturing: jest.Mock
  has_opted_out_capturing: jest.Mock
}

function grantConsent() {
  window.localStorage.setItem(CONSENT_STORAGE_KEY, CONSENT_GRANTED)
  act(() => {
    window.dispatchEvent(new Event(CONSENT_CHANGED_EVENT))
  })
}

const pageviews = () =>
  mockPosthog.capture.mock.calls.filter((c) => c[0] === '$pageview')

describe('PostHogProvider — consent pageview', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    window.localStorage.clear()
    window.history.replaceState(null, '', '/')
    process.env.NEXT_PUBLIC_POSTHOG_KEY = 'phc_test'
    mockPosthog.has_opted_out_capturing.mockReturnValue(true)
  })

  it('captures one immediate $pageview (with query string) when consent is granted on the current page', () => {
    window.history.replaceState(null, '', '/?x=1')
    render(<PostHogProvider>child</PostHogProvider>)

    // Opted out at mount → no pageview yet.
    expect(pageviews()).toHaveLength(0)

    grantConsent()

    expect(mockPosthog.opt_in_capturing).toHaveBeenCalledWith({ captureEventName: false })
    const pvs = pageviews()
    expect(pvs).toHaveLength(1)
    expect(pvs[0][1]).toEqual({ $current_url: '/?x=1' })
  })

  it('does not opt in again when already opted in, but still captures the pageview once', () => {
    render(<PostHogProvider>child</PostHogProvider>)

    // Simulate ConsentBanner having already opted in before our handler runs.
    mockPosthog.has_opted_out_capturing.mockReturnValue(false)
    grantConsent()

    expect(mockPosthog.opt_in_capturing).not.toHaveBeenCalled()
    expect(pageviews()).toHaveLength(1)
  })
})
