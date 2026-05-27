// Regenerates public/icon-192.png and public/icon-512.png from public/icon.svg.
// Run after editing the SVG:  node scripts/generate-icons.mjs
import { Resvg } from '@resvg/resvg-js'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const svg = readFileSync(join(root, 'public/icon.svg'), 'utf8')

for (const size of [192, 512]) {
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: size } })
    .render()
    .asPng()
  writeFileSync(join(root, `public/icon-${size}.png`), png)
  console.log(`Wrote public/icon-${size}.png (${png.length} bytes)`)
}
