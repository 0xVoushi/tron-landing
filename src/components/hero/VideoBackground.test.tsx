import { render } from '@testing-library/react'
import { VideoBackground } from './VideoBackground'

describe('VideoBackground', () => {
  it('renders the hero background image', () => {
    const { container } = render(<VideoBackground />)
    expect(container.querySelector('img')).toBeInTheDocument()
  })

  it('image has aria-hidden', () => {
    const { container } = render(<VideoBackground />)
    expect(container.querySelector('img')).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders dark overlay', () => {
    const { container } = render(<VideoBackground />)
    const overlays = container.querySelectorAll('[aria-hidden="true"]')
    expect(overlays.length).toBeGreaterThanOrEqual(2)
  })
})
