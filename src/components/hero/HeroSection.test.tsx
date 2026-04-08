import { render } from '@testing-library/react'
import { HeroSection } from './HeroSection'

describe('HeroSection', () => {
  it('renders a section element', () => {
    const { container } = render(<HeroSection />)
    expect(container.querySelector('section')).toBeInTheDocument()
  })

  it('renders without crashing', () => {
    expect(() => render(<HeroSection />)).not.toThrow()
  })
})
