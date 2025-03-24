import './globals.css'

export const metadata = {
  title: 'Meca Gothits - DJ',
  description: 'Professional DJ services by Meca Gothits',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  )
} 