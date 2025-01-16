import "./globals.css"
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'RITHVIGAA CHEMICALS',
  description: 'Innovating chemical solutions for a sustainable future',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-x-hidden`}>
        <div className="min-h-screen bg-grid-pattern">{children}</div>
      </body>
    </html>
  )
}

