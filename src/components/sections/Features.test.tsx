import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: /Why Tron Multisender/i })).toBeInTheDocument()
  })

  it('renders all 6 feature titles', () => {
    render(<Features />)
    expect(screen.getByText('Batch TRX Transfer')).toBeInTheDocument()
    expect(screen.getByText('TRC-20 Token Support')).toBeInTheDocument()
    expect(screen.getByText('CSV Upload')).toBeInTheDocument()
    expect(screen.getByText('Save on Fees')).toBeInTheDocument()
    expect(screen.getByText('Fully On-Chain')).toBeInTheDocument()
    expect(screen.getByText('Instant Confirmation')).toBeInTheDocument()
  })
})
