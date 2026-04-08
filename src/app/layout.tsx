import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-rubik',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Targo — Swift and Simple Transport',
  description: 'Professional logistics and transport solutions. Book a free consultation today.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={rubik.variable}>
      <body className="bg-black font-rubik antialiased">{children}</body>
    </html>
  )
}
