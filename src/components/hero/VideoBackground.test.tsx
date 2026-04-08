import { render } from '@testing-library/react'
import { VideoBackground } from './VideoBackground'

describe('VideoBackground', () => {
  it('renders a video element', () => {
    const { container } = render(<VideoBackground />)
    expect(container.querySelector('video')).toBeInTheDocument()
  })

  it('video has aria-hidden', () => {
    const { container } = render(<VideoBackground />)
    expect(container.querySelector('video')).toHaveAttribute('aria-hidden', 'true')
  })

  it('video has loop attribute', () => {
    const { container } = render(<VideoBackground />)
    expect(container.querySelector('video')).toHaveAttribute('loop')
  })

  it('video has playsInline attribute', () => {
    const { container } = render(<VideoBackground />)
    expect(container.querySelector('video')).toHaveAttribute('playsInline')
  })
})
