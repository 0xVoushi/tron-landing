#!/usr/bin/env node
/**
 * Verify key parity across messages/*.json against the default locale (en).
 * Exits non-zero on missing keys; warns on extra keys; reports translation status.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join, resolve } from 'node:path'

const ROOT = resolve(__dirname, '..')
const MESSAGES_DIR = join(ROOT, 'messages')
const DEFAULT_LOCALE = 'en'
const STATUS_KEY = '_translationStatus'

type JsonValue = string | number | boolean | null | JsonObject | JsonValue[]
interface JsonObject {
  [key: string]: JsonValue
}

function loadLocale(file: string): JsonObject {
  const raw = readFileSync(join(MESSAGES_DIR, file), 'utf8')
  return JSON.parse(raw) as JsonObject
}

function collectKeys(obj: JsonValue, prefix = ''): string[] {
  if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
    return prefix ? [prefix] : []
  }
  const out: string[] = []
  for (const [k, v] of Object.entries(obj)) {
    if (k === STATUS_KEY) continue
    const next = prefix ? `${prefix}.${k}` : k
    out.push(...collectKeys(v, next))
  }
  return out
}

function main(): void {
  const files = readdirSync(MESSAGES_DIR).filter((f) => f.endsWith('.json'))
  const referenceFile = `${DEFAULT_LOCALE}.json`
  if (!files.includes(referenceFile)) {
    console.error(`✗ Reference locale ${referenceFile} not found.`)
    process.exit(1)
  }

  const referenceKeys = new Set(collectKeys(loadLocale(referenceFile)))
  let hasErrors = false
  const summary: string[] = []

  for (const file of files) {
    if (file === referenceFile) continue
    const data = loadLocale(file)
    const keys = new Set(collectKeys(data))

    const missing = [...referenceKeys].filter((k) => !keys.has(k))
    const extra = [...keys].filter((k) => !referenceKeys.has(k))
    const status = (data[STATUS_KEY] as string | undefined) ?? 'translated'

    if (missing.length > 0) {
      hasErrors = true
      console.error(`✗ ${file}: missing ${missing.length} key(s):`)
      for (const k of missing.slice(0, 20)) console.error(`    - ${k}`)
      if (missing.length > 20) console.error(`    … and ${missing.length - 20} more`)
    } else {
      console.log(`✓ ${file}: all ${referenceKeys.size} keys present`)
    }

    if (extra.length > 0) {
      console.warn(`⚠ ${file}: ${extra.length} extra key(s) not in reference:`)
      for (const k of extra.slice(0, 10)) console.warn(`    + ${k}`)
    }

    summary.push(`  ${file.padEnd(10)} → status: ${status}`)
  }

  console.log('\nTranslation status:')
  for (const line of summary) console.log(line)

  if (hasErrors) {
    console.error('\n✗ Key parity check failed.')
    process.exit(1)
  }
  console.log('\n✓ Key parity check passed.')
}

main()
