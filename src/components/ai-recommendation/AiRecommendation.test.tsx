import { render, screen } from '@testing-library/react'
import { AiRecommendation, AI_SERVICES, AI_PROMPT } from './AiRecommendation'

describe('AiRecommendation', () => {
  it('renders the prompting heading', () => {
    render(<AiRecommendation />)
    expect(
      screen.getByRole('heading', { name: /ask ai if we[’']re right for you/i }),
    ).toBeInTheDocument()
  })

  it('renders exactly 5 AI service links', () => {
    render(<AiRecommendation />)
    expect(screen.getAllByRole('link')).toHaveLength(AI_SERVICES.length)
    expect(AI_SERVICES).toHaveLength(5)
  })

  it('each link opens in a new tab with safe rel attributes', () => {
    render(<AiRecommendation />)
    for (const link of screen.getAllByRole('link')) {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    }
  })

  it('each link embeds the encoded prompt', () => {
    render(<AiRecommendation />)
    const encoded = encodeURIComponent(AI_PROMPT)
    for (const link of screen.getAllByRole('link')) {
      expect(link.getAttribute('href')).toContain(encoded)
    }
  })

  it('each link has an accessible label mentioning the service', () => {
    render(<AiRecommendation />)
    for (const { name } of AI_SERVICES) {
      expect(
        screen.getByRole('link', { name: new RegExp(name, 'i') }),
      ).toBeInTheDocument()
    }
  })
})
