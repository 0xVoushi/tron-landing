import fs from 'fs'
import path from 'path'
import { FAQ_ITEM_KEYS } from './faq'

describe('FAQ_ITEM_KEYS', () => {
  it('exports a non-empty, unique array of keys', () => {
    expect(FAQ_ITEM_KEYS.length).toBeGreaterThan(0)
    expect(new Set(FAQ_ITEM_KEYS).size).toBe(FAQ_ITEM_KEYS.length)
  })

  it('every key has a question and answer in messages/en.json', () => {
    const messagesPath = path.resolve(__dirname, '../../messages/en.json')
    const messages = JSON.parse(fs.readFileSync(messagesPath, 'utf8'))
    const items = messages.faq?.items ?? {}

    FAQ_ITEM_KEYS.forEach((key) => {
      expect(typeof items[key]?.question).toBe('string')
      expect(items[key].question.length).toBeGreaterThan(0)
      expect(typeof items[key]?.answer).toBe('string')
      expect(items[key].answer.length).toBeGreaterThan(0)
    })
  })

  it('has exactly 16 items', () => {
    expect(FAQ_ITEM_KEYS.length).toBe(16)
  })
})
