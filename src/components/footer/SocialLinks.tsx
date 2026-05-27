'use client'

import type { CSSProperties } from 'react'
import { socialLinks, type SocialLink } from '@/lib/socialLinks'
import { trackEvent } from '@/lib/analytics'
import styles from './SocialLinks.module.css'

export function SocialLinks() {
  function handleClick(link: SocialLink) {
    trackEvent('social_link_clicked', { platform: link.id })
    if (link.id === 'telegram') {
      trackEvent('telegram_support_clicked', { source: 'footer' })
    }
  }

  return (
    <ul className={styles.socialList}>
      {socialLinks.map((link) => (
        <li key={link.id} className={styles.socialItem}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.title}
            title={link.title}
            className={styles.socialLink}
            onClick={() => handleClick(link)}
          >
            <span
              aria-hidden="true"
              className={styles.socialIcon}
              style={{ ['--icon-url' as keyof CSSProperties]: `url(${link.icon})` } as CSSProperties}
            />
          </a>
        </li>
      ))}
    </ul>
  )
}
