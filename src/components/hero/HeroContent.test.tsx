import { screen } from '@testing-library/react'
import { renderWithIntl } from '@/test/render'
import { HeroContent } from './HeroContent'

describe('HeroContent', () => {
  it('renders eyebrow text', () => {
    renderWithIntl(<HeroContent />)
    expect(screen.getByText(/TRON Multisender/i)).toBeInTheDocument()
  })

  it('renders the main heading', () => {
    renderWithIntl(<HeroContent />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /Batch Send TRX & TRC-20 Tokens/i
    )
  })

  it('renders subheadline copy', () => {
    renderWithIntl(<HeroContent />)
    expect(screen.getByText(/1,000\+ addresses/i)).toBeInTheDocument()
  })

  it('renders Launch dApp button', () => {
    renderWithIntl(<HeroContent />)
    expect(screen.getByRole('button', { name: /Launch dApp/i })).toBeInTheDocument()
  })
})
