import { render, screen } from '@testing-library/react'
import { HeroContent } from './HeroContent'

describe('HeroContent', () => {
  it('renders eyebrow text', () => {
    render(<HeroContent />)
    expect(screen.getByText(/Tron Blockchain Tool/i)).toBeInTheDocument()
  })

  it('renders the main heading', () => {
    render(<HeroContent />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /Batch Send TRX & TRC-20 Tokens/i
    )
  })

  it('renders subheadline copy', () => {
    render(<HeroContent />)
    expect(screen.getByText(/1,000\+ addresses/i)).toBeInTheDocument()
  })

  it('renders Launch App button', () => {
    render(<HeroContent />)
    expect(screen.getByRole('button', { name: /Launch App/i })).toBeInTheDocument()
  })
})
