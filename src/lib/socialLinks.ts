export type SocialLink = {
  id: 'x' | 'telegram' | 'medium' | 'youtube'
  title: string
  icon: string
  url: string
}

export const socialLinks: SocialLink[] = [
  { id: 'x',        title: 'X',        icon: '/icons/social/x.svg',        url: 'https://x.com/multi_sender' },
  { id: 'telegram', title: 'Telegram', icon: '/icons/social/telegram.svg', url: 'https://t.me/MultiSender' },
  { id: 'medium',   title: 'Medium',   icon: '/icons/social/medium.svg',   url: 'https://medium.com/@MultiSenderApp' },
  { id: 'youtube',  title: 'YouTube',  icon: '/icons/social/youtube.svg',  url: 'https://youtube.com/@MultiSenderApp' },
]
