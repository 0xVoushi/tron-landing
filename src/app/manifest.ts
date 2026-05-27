import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TRON Multisender',
    short_name: 'Multisender',
    description:
      'Batch send TRX & TRC-20 tokens to 1,000+ addresses in one transaction.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f0f10',
    theme_color: '#c43631',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
