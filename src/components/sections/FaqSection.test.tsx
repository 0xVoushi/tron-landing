import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import enMessages from '../../../messages/en.json'
import { renderWithIntl } from '@/test/render'
import { FaqSection } from './FaqSection'
import { FAQ_ITEM_KEYS } from '@/data/faq'

const items = enMessages.faq.items as Record<string, { question: string; answer: string }>

describe('FaqSection', () => {
  it('renders the section heading', () => {
    renderWithIntl(<FaqSection />)
    expect(
      screen.getByRole('heading', { name: /Frequently Asked Questions/i })
    ).toBeInTheDocument()
  })

  it('renders all FAQ questions', () => {
    renderWithIntl(<FaqSection />)
    FAQ_ITEM_KEYS.forEach((key) => {
      expect(screen.getByText(items[key].question)).toBeInTheDocument()
    })
  })

  it('all answers are collapsed initially', () => {
    renderWithIntl(<FaqSection />)
    FAQ_ITEM_KEYS.forEach((key) => {
      const button = screen.getByRole('button', { name: items[key].question })
      expect(button).toHaveAttribute('aria-expanded', 'false')
    })
  })

  it('expands answer when question button is clicked', async () => {
    const user = userEvent.setup()
    renderWithIntl(<FaqSection />)
    const firstKey = FAQ_ITEM_KEYS[0]
    const button = screen.getByRole('button', { name: items[firstKey].question })
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(items[firstKey].answer)).toBeInTheDocument()
  })

  it('collapses answer when question is clicked again', async () => {
    const user = userEvent.setup()
    renderWithIntl(<FaqSection />)
    const button = screen.getByRole('button', { name: items[FAQ_ITEM_KEYS[0]].question })
    await user.click(button)
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes previous answer when a different question is clicked', async () => {
    const user = userEvent.setup()
    renderWithIntl(<FaqSection />)
    const first = screen.getByRole('button', { name: items[FAQ_ITEM_KEYS[0]].question })
    const second = screen.getByRole('button', { name: items[FAQ_ITEM_KEYS[1]].question })
    await user.click(first)
    await user.click(second)
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(second).toHaveAttribute('aria-expanded', 'true')
  })
})
