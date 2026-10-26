#!/usr/bin/env node
// Generates resized WebP copies of the homepage's heaviest images into
// public/project-pics/optimized/. Originals are left untouched because the
// storytelling page still uses some of them.
//
// Usage: node scripts/optimize-images.mjs

import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const PUBLIC_DIR = 'public/project-pics'
const OUTPUT_DIR = path.join(PUBLIC_DIR, 'optimized')

// [source (relative to public/project-pics), output name, max width]
// Sources are the highest-quality originals available.
const IMAGES = [
  ['jungle-peaks-portfolio.png', 'jungle-peaks-portfolio.webp', 1600],

  // Desktop screens render in full up to ~1024px wide
  ['figma-exports/spending-desktop.png', 'spending-desktop.webp', 1600],
  ['figma-exports/accounts-desktop.png', 'accounts-desktop.webp', 1600],
  ['figma-exports/current-account-desktop.png', 'current-account-desktop.webp', 1600],

  // Tablet/mobile screens render as ~350px-wide cropped cards
  ['figma-exports/accounts-tablet.png', 'accounts-tablet.webp', 800],
  ['figma-exports/spending-tablet.png', 'spending-tablet.webp', 800],
  ['figma-exports/current-tablet.png', 'current-tablet.webp', 800],
  ['figma-exports/accounts-mobile.png', 'accounts-mobile.webp', 800],
  ['figma-exports/spending-mobile.png', 'spending-mobile.webp', 800],
  ['figma-exports/current-mobile.png', 'current-mobile.webp', 800],
]

fs.mkdirSync(OUTPUT_DIR, { recursive: true })

const kb = (bytes) => `${Math.round(bytes / 1024)} KB`

for (const [source, output, width] of IMAGES) {
  const inputPath = path.join(PUBLIC_DIR, source)
  const outputPath = path.join(OUTPUT_DIR, output)

  // Very tall full-page exports exceed sharp's default pixel limit
  const info = await sharp(inputPath, { limitInputPixels: false })
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 78, effort: 6 })
    .toFile(outputPath)

  console.log(
    `${output.padEnd(30)} ${kb(fs.statSync(inputPath).size).padStart(9)} -> ${kb(info.size).padStart(7)}  (${info.width}x${info.height})`
  )
}
