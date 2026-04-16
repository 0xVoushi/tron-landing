import { render } from '@testing-library/react'
import { HeroSection } from './HeroSection'

jest.mock('./PixelBlast', () => ({
  PixelBlast: () => <div data-testid="pixel-blast" />
}))

describe('HeroSection', () => {
  it('renders a section element', () => {
    const { container } = render(<HeroSection />)
    expect(container.querySelector('section')).toBeInTheDocument()
  })

  it('renders without crashing', () => {
    expect(() => render(<HeroSection />)).not.toThrow()
  })
})
