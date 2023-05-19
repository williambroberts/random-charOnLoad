import '../styles/globals.css'
import '../styles/randomChar.css'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'R4nd0m ch4r | William Roberts',
  description: 'A react word scrambler for page onLoad for websites',
  keywords: ['react','word' ,'scrambler', 'random','reveal'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
