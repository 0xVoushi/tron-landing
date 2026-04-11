import { FAQ_ITEMS } from './faq'

describe('FAQ_ITEMS', () => {
  it('exports a non-empty array', () => {
    expect(Array.isArray(FAQ_ITEMS)).toBe(true)
    expect(FAQ_ITEMS.length).toBeGreaterThan(0)
  })

  it('every item has a non-empty question and answer', () => {
    FAQ_ITEMS.forEach((item) => {
      expect(typeof item.question).toBe('string')
      expect(item.question.length).toBeGreaterThan(0)
      expect(typeof item.answer).toBe('string')
      expect(item.answer.length).toBeGreaterThan(0)
    })
  })

  it('has exactly 8 items', () => {
    expect(FAQ_ITEMS.length).toBe(8)
  })
})
