import { render, screen } from '@testing-library/react'
import { HeroContent } from './HeroContent'

describe('HeroContent', () => {
  it('renders the eyebrow text', () => {
    render(<HeroContent />)
    expect(screen.getByText('Logistics & Transport')).toBeInTheDocument()
  })

  it('renders the headline as h1', () => {
    render(<HeroContent />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Swift and Simple Transport')
  })

  it('renders the Get Started CTA button', () => {
    render(<HeroContent />)
    expect(screen.getByRole('button', { name: 'Get Started' })).toBeInTheDocument()
  })
})
