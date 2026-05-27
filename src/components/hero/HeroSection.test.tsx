import { renderWithIntl } from '@/test/render'
import { HeroSection } from './HeroSection'

jest.mock('./PixelBlast', () => ({
  PixelBlast: () => <div data-testid="pixel-blast" />
}))

describe('HeroSection', () => {
  it('renders a section element', () => {
    const { container } = renderWithIntl(<HeroSection />)
    expect(container.querySelector('section')).toBeInTheDocument()
  })

  it('renders without crashing', () => {
    expect(() => renderWithIntl(<HeroSection />)).not.toThrow()
  })
})
