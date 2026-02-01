import bgCardMac from '@/assets/servises/mac.webp'
import bgCardPhone from '@/assets/servises/phone.webp'
import bgCardConsole from '@/assets/servises/console.webp'
import bgCardTV from '@/assets/servises/tv.webp'
import bgCardTablet from '@/assets/servises/tablet.webp'

export type ServiceCard = {
  title: string
  backgroundImg: string
}

export const serviceCards: ServiceCard[] = [
  { title: 'Cellphone service', backgroundImg: bgCardPhone },
  { title: 'Tablet service', backgroundImg: bgCardTablet },
  { title: 'Laptop service', backgroundImg: bgCardMac },
  { title: 'Gaming console service', backgroundImg: bgCardConsole },
  { title: 'TV service', backgroundImg: bgCardTV },
]
