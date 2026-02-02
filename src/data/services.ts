import bgCardMac from '@/assets/services/mac.webp'
import bgCardPhone from '@/assets/services/phone.webp'
import bgCardConsole from '@/assets/services/console.webp'
import bgCardTV from '@/assets/services/tv.webp'
import bgCardTablet from '@/assets/services/tablet.webp'

export type ServiceCard = {
  title: string
  backgroundImg: string
}

export const serviceCards: ServiceCard[] = [
  { title: 'Cellphone service', backgroundImg: bgCardPhone },
  { title: 'Tablet service', backgroundImg: bgCardTablet },
  { title: 'Laptop service', backgroundImg: bgCardMac },
  { title: 'Gaming console service', backgroundImg: bgCardConsole },
]
