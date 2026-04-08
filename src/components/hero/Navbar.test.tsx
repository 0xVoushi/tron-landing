import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the targo wordmark', () => {
    render(<Navbar />)
    expect(screen.getByText('targo')).toBeInTheDocument()
  })

  it('renders Home nav link', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  it('renders About nav link', () => {
    render(<Navbar />)
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('renders at least one Contact Us element', () => {
    render(<Navbar />)
    expect(screen.getAllByText('Contact Us').length).toBeGreaterThanOrEqual(1)
  })

  it('renders the CTA button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: 'Contact Us' })).toBeInTheDocument()
  })

  it('renders hamburger button on initial load', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('toggles mobile menu open when hamburger is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })
})
