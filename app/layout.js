import { Inter } from 'next/font/google'
import './globals.css'
import { siteConfig } from './metadata'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://mecagothits.ch'),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: 'MECAGOTHITS' }],
  creator: 'MECAGOTHITS',
  openGraph: siteConfig.openGraph,
  twitter: siteConfig.twitter,
  robots: siteConfig.robots,
  icons: {
    icon: [
      { url: '/favicon' },
      { url: '/images/logo.jpg' },
    ],
    apple: '/images/logo.jpg',
  },
  manifest: '/site.webmanifest',
  other: {
    'msapplication-TileColor': '#000000',
    'theme-color': '#000000',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={`${inter.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  )
} 