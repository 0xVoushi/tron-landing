import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FaqSection } from './FaqSection'
import { FAQ_ITEMS } from '@/data/faq'

describe('FaqSection', () => {
  it('renders the section heading', () => {
    render(<FaqSection />)
    expect(
      screen.getByRole('heading', { name: /Frequently Asked Questions/i })
    ).toBeInTheDocument()
  })

  it('renders all FAQ questions', () => {
    render(<FaqSection />)
    FAQ_ITEMS.forEach((item) => {
      expect(screen.getByText(item.question)).toBeInTheDocument()
    })
  })

  it('all answers are collapsed initially', () => {
    render(<FaqSection />)
    FAQ_ITEMS.forEach((item) => {
      const button = screen.getByRole('button', { name: item.question })
      expect(button).toHaveAttribute('aria-expanded', 'false')
    })
  })

  it('expands answer when question button is clicked', async () => {
    const user = userEvent.setup()
    render(<FaqSection />)
    const button = screen.getByRole('button', { name: FAQ_ITEMS[0].question })
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(FAQ_ITEMS[0].answer)).toBeInTheDocument()
  })

  it('collapses answer when question is clicked again', async () => {
    const user = userEvent.setup()
    render(<FaqSection />)
    const button = screen.getByRole('button', { name: FAQ_ITEMS[0].question })
    await user.click(button)
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes previous answer when a different question is clicked', async () => {
    const user = userEvent.setup()
    render(<FaqSection />)
    const first = screen.getByRole('button', { name: FAQ_ITEMS[0].question })
    const second = screen.getByRole('button', { name: FAQ_ITEMS[1].question })
    await user.click(first)
    await user.click(second)
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(second).toHaveAttribute('aria-expanded', 'true')
  })
})
