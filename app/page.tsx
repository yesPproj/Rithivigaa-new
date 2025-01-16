import type { Metadata } from 'next'
import About from "@/components/about"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Products from "@/components/products"
import Services from "@/components/services"
import Features from "@/components/features"
import CallToAction from "@/components/call-to-action"

export const metadata: Metadata = {
  title: 'RITHVIGAA - Innovative Solutions',
  description: 'RITHVIGAA offers cutting-edge products and services for your business needs. Explore our features, products, and services.',
  keywords: ['RITHVIGAA', 'products', 'services', 'innovation', 'technology'],
  authors: [{ name: 'RITHVIGAA Team' }],
  openGraph: {
    title: 'RITHVIGAA - Innovative Solutions',
    description: 'Discover innovative products and services at RITHVIGAA. Transform your business with our cutting-edge solutions.',
    url: 'https://www.rithvigaa.com',
    siteName: 'RITHVIGAA',
    images: [
      {
        url: 'https://www.rithvigaa.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RITHVIGAA - Innovative Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RITHVIGAA - Innovative Solutions',
    description: 'Explore RITHVIGAA\'s innovative products and services. Transform your business with our cutting-edge solutions.',
    images: ['https://www.rithvigaa.com/twitter-image.jpg'],
    creator: '@rithvigaa',
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  themeColor: '#ffffff',
  viewport: 'width=device-width, initial-scale=1',
  alternates: {
    canonical: 'https://www.rithvigaa.com',
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Products />
        <Services />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

