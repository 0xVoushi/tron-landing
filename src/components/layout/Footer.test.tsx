import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<Footer />)
    expect(screen.getAllByText(/TRON MULTISENDER/i).length).toBeGreaterThan(0)
  })

  it('renders navigation links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /How It Works/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Features/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /FAQ/i })).toBeInTheDocument()
  })

  it('renders legal links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Terms of Service/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Privacy Policy/i })).toBeInTheDocument()
  })

  it('renders disclaimer text', () => {
    render(<Footer />)
    expect(screen.getByText(/Not affiliated with TRON Foundation/i)).toBeInTheDocument()
  })

  it('renders copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2026 Tron Multisender/i)).toBeInTheDocument()
  })
})
