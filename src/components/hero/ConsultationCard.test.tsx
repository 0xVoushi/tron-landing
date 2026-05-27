import { screen } from '@testing-library/react'
import { renderWithIntl } from '@/test/render'
import { ConsultationCard } from './ConsultationCard'

describe('ConsultationCard', () => {
  it('renders the Verified label', () => {
    renderWithIntl(<ConsultationCard />)
    expect(screen.getByText(/Verified/i)).toBeInTheDocument()
  })

  it('renders TRON Multisender text', () => {
    renderWithIntl(<ConsultationCard />)
    expect(screen.getByText(/TRON Multisender/i)).toBeInTheDocument()
  })

  it('renders the shield icon container', () => {
    renderWithIntl(<ConsultationCard />)
    expect(screen.getByTestId('shield-icon')).toBeInTheDocument()
  })

  it('renders Launch dApp link to the dApp', () => {
    renderWithIntl(<ConsultationCard />)
    const link = screen.getByRole('link', { name: /Launch dApp/i })
    expect(link).toHaveAttribute('href', expect.stringContaining('tron.multisender.app'))
    expect(link).toHaveAttribute('href', expect.stringContaining('utm_content=consultation'))
  })
})
