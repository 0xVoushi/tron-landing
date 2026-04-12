import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('TRON MULTISENDER')).toBeInTheDocument()
  })

  it('renders desktop nav links', () => {
    render(<Navbar />)
    const links = screen.getAllByRole('link', { name: /Home|How It Works|Features|FAQ/i })
    expect(links.length).toBeGreaterThanOrEqual(4)
  })

  it('renders Launch dApp button in desktop nav', () => {
    render(<Navbar />)
    const buttons = screen.getAllByRole('button', { name: /Launch dApp/i })
    expect(buttons.length).toBeGreaterThanOrEqual(1)
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuButton = screen.getByRole('button', { name: /Open menu/i })
    await user.click(menuButton)
    expect(screen.getByRole('button', { name: /Close menu/i })).toBeInTheDocument()
  })

  it('shows mobile nav links when menu is open', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /Open menu/i }))
    const faqLinks = screen.getAllByRole('link', { name: /FAQ/i })
    expect(faqLinks.length).toBeGreaterThan(0)
  })
})
