import { render, screen } from '@testing-library/react'
import { HowItWorksVideo } from './HowItWorksVideo'

describe('HowItWorksVideo', () => {
  it('renders a placeholder when no src is provided', () => {
    render(<HowItWorksVideo stepNumber="01" />)
    const placeholder = screen.getByRole('img', { name: /step 01 video placeholder/i })
    expect(placeholder).toBeInTheDocument()
    expect(screen.getByText(/video coming soon/i)).toBeInTheDocument()
  })

  it('renders a placeholder when src is an empty string', () => {
    render(<HowItWorksVideo stepNumber="02" src="" />)
    expect(screen.getByRole('img', { name: /step 02 video placeholder/i })).toBeInTheDocument()
  })

  it('renders an autoplaying muted looping video when src is provided', () => {
    const { container } = render(<HowItWorksVideo stepNumber="03" src="/videos/step-03.mp4" />)
    const video = container.querySelector('video')
    expect(video).not.toBeNull()
    expect(video).toHaveAttribute('src', '/videos/step-03.mp4')
    expect(video).toHaveAttribute('autoPlay')
    expect(video).toHaveAttribute('loop')
    expect(video).toHaveAttribute('playsInline')
    // `muted` is reflected as a property on HTMLMediaElement; jsdom sets it from the prop
    expect((video as HTMLVideoElement).muted).toBe(true)
    expect(video).toHaveAttribute('aria-label', expect.stringMatching(/step 03 demo/i))
  })
})
