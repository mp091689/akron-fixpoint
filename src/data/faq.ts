export type FaqItem = {
  q: string
  a: string[]
}

export const faqItems: FaqItem[] = [
  {
    q: 'Do you offer diagnostics?',
    a: [
      'Yes! We provide free diagnostics for most devices.',
      'Our technicians will inspect your device, explain the issue, and give you a no-obligation repair quote before any work begins.',
    ],
  },
  {
    q: 'What kind of parts do you use?',
    a: [
      'We use high-quality replacement parts and clearly explain your options.',
      'This includes OEM/original parts when available and premium aftermarket parts that meet strict quality standards.',
      'We never use low-quality components, and you’ll always know which part is being installed.',
    ],
  },
  {
    q: 'Do you provide a warranty?',
    a: [
      'Yes. All repairs come with a warranty ranging from 30 days up to 12 months.',
      'Warranty length depends on the type of repair and part used.',
    ],
  },
  {
    q: 'How much does a repair cost?',
    a: [
      'Pricing depends on the device model and the issue.',
      'We believe in fair, transparent pricing with no hidden fees.',
      'You’ll receive a clear quote before we start any repair.',
    ],
  },
  {
    q: 'How do I check repair status?',
    a: [
      'You can contact us anytime by phone or text.',
      'We’ll also notify you when your device is ready.',
    ],
  },
  {
    q: 'Can I get a consultation before deciding?',
    a: [
      'Absolutely.',
      'We’re happy to answer questions and explain repair options.',
      'No pressure, no obligation.',
    ],
  },
  {
    q: 'Is my data safe during repair?',
    a: [
      'Yes. Your privacy matters.',
      'We do not access personal data unless required for testing and only with your permission.',
      'We recommend backing up your device before repair.',
    ],
  },
  {
    q: 'Do I need an appointment?',
    a: [
      'Yes. All repairs are by appointment only.',
      'This helps us provide faster service and accurate repair times.',
    ],
  },
  {
    q: 'What areas do you serve?',
    a: [
      'We currently serve Akron and surrounding areas.',
      'Availability depends on the type of repair — contact us to confirm service in your location.',
    ],
  },
]
