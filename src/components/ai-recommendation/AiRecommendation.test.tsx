import { screen } from '@testing-library/react'
import enMessages from '../../../messages/en.json'
import { renderWithIntl } from '@/test/render'
import { AiRecommendation, AI_SERVICES } from './AiRecommendation'

const PROMPT = enMessages.aiRecommendation.prompt

describe('AiRecommendation', () => {
  it('renders the prompting heading', () => {
    renderWithIntl(<AiRecommendation />)
    expect(
      screen.getByRole('heading', { name: /ask ai if we[’']re right for you/i }),
    ).toBeInTheDocument()
  })

  it('renders exactly 5 AI service links', () => {
    renderWithIntl(<AiRecommendation />)
    expect(screen.getAllByRole('link')).toHaveLength(AI_SERVICES.length)
    expect(AI_SERVICES).toHaveLength(5)
  })

  it('each link opens in a new tab with safe rel attributes', () => {
    renderWithIntl(<AiRecommendation />)
    for (const link of screen.getAllByRole('link')) {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    }
  })

  it('each link embeds the encoded prompt', () => {
    renderWithIntl(<AiRecommendation />)
    const encoded = encodeURIComponent(PROMPT)
    for (const link of screen.getAllByRole('link')) {
      expect(link.getAttribute('href')).toContain(encoded)
    }
  })

  it('each link has an accessible label mentioning the service', () => {
    renderWithIntl(<AiRecommendation />)
    for (const { name } of AI_SERVICES) {
      expect(
        screen.getByRole('link', { name: new RegExp(name, 'i') }),
      ).toBeInTheDocument()
    }
  })
})
