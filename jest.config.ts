import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

export default async () => {
  const baseConfig = await createJestConfig(config)()
  return {
    ...baseConfig,
    transformIgnorePatterns: [
      // Allow Jest to transform ESM-only packages used by next-intl
      '/node_modules/(?!(next-intl|use-intl|@formatjs|intl-messageformat)/)',
      '^.+\\.module\\.(css|sass|scss)$',
    ],
  }
}
