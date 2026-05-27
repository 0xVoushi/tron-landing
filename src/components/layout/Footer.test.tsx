import { screen } from '@testing-library/react'
import { renderWithIntl } from '@/test/render'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand description', () => {
    renderWithIntl(<Footer />)
    expect(screen.getByText(/Batch transfer tool for the TRON blockchain/i)).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    renderWithIntl(<Footer />)
    expect(screen.getByRole('link', { name: /How It Works/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Features/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /FAQ/i })).toBeInTheDocument()
  })

  it('renders legal links', () => {
    renderWithIntl(<Footer />)
    expect(screen.getByRole('link', { name: /Terms of Service/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Privacy Policy/i })).toBeInTheDocument()
  })

  it('renders copyright with current year', () => {
    renderWithIntl(<Footer />)
    const year = new Date().getFullYear()
    expect(
      screen.getByText(new RegExp(`2022.+${year} TRON Multisender`))
    ).toBeInTheDocument()
  })
})
