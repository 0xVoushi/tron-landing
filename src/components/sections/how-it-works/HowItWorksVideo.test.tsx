import { render, screen, act } from '@testing-library/react'
import { HowItWorksVideo } from './HowItWorksVideo'

class MockIntersectionObserver {
  static instances: MockIntersectionObserver[] = []
  callback: IntersectionObserverCallback
  elements: Element[] = []
  constructor(cb: IntersectionObserverCallback) {
    this.callback = cb
    MockIntersectionObserver.instances.push(this)
  }
  observe(el: Element) {
    this.elements.push(el)
  }
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return []
  }
  trigger(isIntersecting = true) {
    this.callback(
      this.elements.map(
        (target) => ({ isIntersecting, target }) as IntersectionObserverEntry
      ),
      this as unknown as IntersectionObserver
    )
  }
}

function mockMatchMedia(reduced: boolean) {
  return (query: string) =>
    ({
      matches: reduced,
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    }) as unknown as MediaQueryList
}

const lastObserver = () =>
  MockIntersectionObserver.instances[MockIntersectionObserver.instances.length - 1]

beforeEach(() => {
  MockIntersectionObserver.instances = []
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;(globalThis as any).IntersectionObserver = MockIntersectionObserver
  window.matchMedia = mockMatchMedia(false)
})

describe('HowItWorksVideo', () => {
  it('renders a placeholder when no src is provided', () => {
    render(<HowItWorksVideo stepNumber="01" />)
    expect(
      screen.getByRole('img', { name: /step 01 video placeholder/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/video coming soon/i)).toBeInTheDocument()
  })

  it('renders a placeholder when src is an empty string', () => {
    render(<HowItWorksVideo stepNumber="02" src="" />)
    expect(
      screen.getByRole('img', { name: /step 02 video placeholder/i })
    ).toBeInTheDocument()
  })

  it('lazy: video has no src and preload=none before intersection, with a visible poster', () => {
    const { container } = render(
      <HowItWorksVideo stepNumber="03" src="/videos/step-03.mp4" />
    )
    const video = container.querySelector('video')
    expect(video).not.toBeNull()
    expect(video).not.toHaveAttribute('src')
    expect(video).toHaveAttribute('preload', 'none')
    expect(screen.getByTestId('video-poster')).toBeInTheDocument()
  })

  it('attaches src and autoplay once the video intersects (no reduced motion)', () => {
    const { container } = render(
      <HowItWorksVideo stepNumber="03" src="/videos/step-03.mp4" />
    )
    const video = container.querySelector('video') as HTMLVideoElement
    act(() => lastObserver().trigger(true))
    expect(video).toHaveAttribute('src', '/videos/step-03.mp4')
    expect(video).toHaveAttribute('loop')
    expect(video).toHaveAttribute('playsinline')
    expect(video.muted).toBe(true)
    expect(video).toHaveAttribute('autoplay')
    expect(video).toHaveAttribute('aria-label', expect.stringMatching(/step 03 demo/i))
  })

  it('loads the video but does NOT autoplay under prefers-reduced-motion', () => {
    window.matchMedia = mockMatchMedia(true)
    const { container } = render(
      <HowItWorksVideo stepNumber="04" src="/videos/step-04.mp4" />
    )
    const video = container.querySelector('video') as HTMLVideoElement
    act(() => lastObserver().trigger(true))
    expect(video).toHaveAttribute('src', '/videos/step-04.mp4')
    expect(video).not.toHaveAttribute('autoplay')
  })
})
