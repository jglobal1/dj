export const siteConfig = {
  title: 'MECAGOTHITS - Electronic Music Artist & DJ',
  description: 'MECAGOTHITS is a Swiss electronic music artist and DJ, delivering cutting-edge techno and electronic music experiences.',
  keywords: 'MECAGOTHITS, DJ, Electronic Music, Techno, Switzerland, Harmlos Techno, Daydance',
  openGraph: {
    type: 'website',
    locale: 'de_CH',
    url: 'https://mecagothits.ch',
    siteName: 'MECAGOTHITS',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MECAGOTHITS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MECAGOTHITS - Electronic Music Artist & DJ',
    description: 'Swiss electronic music artist and DJ, delivering cutting-edge techno and electronic music experiences.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
} 