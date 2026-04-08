import { render, screen } from '@testing-library/react'
import { ConsultationCard } from './ConsultationCard'

describe('ConsultationCard', () => {
  it('renders the "Free" label', () => {
    render(<ConsultationCard />)
    expect(screen.getByText('Free')).toBeInTheDocument()
  })

  it('renders "Book a Consultation" title', () => {
    render(<ConsultationCard />)
    expect(screen.getByText('Book a Consultation')).toBeInTheDocument()
  })

  it('renders the Book a Call button', () => {
    render(<ConsultationCard />)
    expect(screen.getByRole('button', { name: 'Book a Call' })).toBeInTheDocument()
  })

  it('renders the phone icon wrapper', () => {
    const { container } = render(<ConsultationCard />)
    const iconWrapper = container.querySelector('[data-testid="phone-icon"]')
    expect(iconWrapper).toBeInTheDocument()
    expect(iconWrapper!.querySelector('svg')).toBeInTheDocument()
  })
})
