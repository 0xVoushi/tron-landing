'use client'

import { useEffect, useState } from 'react'

export function MobileLaunchButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  if (!visible) return null

  return (
    <a
      href="#"
      className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50 bg-gradient-to-r from-primary to-primary-light text-white rounded-full btn-shimmer py-[14px] px-8 text-[13px] font-rubik font-bold uppercase tracking-[0.05em] shadow-lg shadow-primary/25"
    >
      Launch dApp
    </a>
  )
}
