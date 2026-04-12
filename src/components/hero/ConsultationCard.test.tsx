import { render, screen } from '@testing-library/react'
import { ConsultationCard } from './ConsultationCard'

describe('ConsultationCard', () => {
  it('renders the Verified label', () => {
    render(<ConsultationCard />)
    expect(screen.getByText(/Verified/i)).toBeInTheDocument()
  })

  it('renders Official Tron Multisender text', () => {
    render(<ConsultationCard />)
    expect(screen.getByText(/Official Tron Multisender/i)).toBeInTheDocument()
  })

  it('renders the shield icon container', () => {
    render(<ConsultationCard />)
    expect(screen.getByTestId('shield-icon')).toBeInTheDocument()
  })

  it('renders Launch dApp button', () => {
    render(<ConsultationCard />)
    expect(screen.getByRole('button', { name: /Launch dApp/i })).toBeInTheDocument()
  })
})
