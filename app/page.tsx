import type { Metadata } from 'next'
import { JsonLd } from 'react-schemaorg'
import type { LocalBusiness } from 'schema-dts'
import About from "@/components/about"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Products from "@/components/products"
import Services from "@/components/services"
import Features from "@/components/features"
import CallToAction from "@/components/call-to-action"

export const metadata: Metadata = {
  title: 'Rithvigaa Chemicals | Paper Chemicals in Coimbatore',
  description: 'Rithvigaa Chemicals is a leading supplier of paper chemicals in Coimbatore. We offer high-quality chemicals for the paper industry with excellent service.',
  keywords: ['Rithvigaa Chemicals', 'paper chemicals', 'Coimbatore', 'chemical supplier', 'paper industry'],
  openGraph: {
    title: 'Rithvigaa Chemicals - Top Paper Chemicals Supplier in Coimbatore',
    description: 'Discover high-quality paper chemicals from Rithvigaa Chemicals, the leading supplier in Coimbatore. Enhance your paper production with our innovative solutions.',
    url: 'https://www.rithvigaa.com',
    siteName: 'Rithvigaa Chemicals',
    images: [
      {
        url: 'https://www.rithvigaa.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rithvigaa Chemicals - Paper Chemicals in Coimbatore',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rithvigaa Chemicals - Paper Chemicals Experts in Coimbatore',
    description: 'Leading supplier of paper chemicals in Coimbatore. Rithvigaa Chemicals offers top-quality solutions for the paper industry.',
    images: ['https://www.rithvigaa.com/twitter-image.jpg'],
    creator: '@rithvigaachem',
  },
  alternates: {
    canonical: 'https://www.rithvigaa.com',
  },
}

export default function Home() {
  return (
    <>
      <JsonLd<LocalBusiness>
        item={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Rithvigaa Chemicals",
          description: "Leading supplier of paper chemicals in Coimbatore",
          url: "https://www.rithvigaa.com",
          telephone: "+91-8608003377",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Your Street Address",
            addressLocality: "Coimbatore",
            addressRegion: "Tamil Nadu",
            postalCode: "641042",
            addressCountry: "IN"
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "XX.XXXXXXX",
            longitude: "XX.XXXXXXX"
          },
          areaServed: ["Coimbatore", "Tamil Nadu", "India"],
          sameAs: [
            "https://www.facebook.com/rithvigaachemicals",
            "https://www.linkedin.com/company/rithvigaa-chemicals",
            "https://twitter.com/rithvigaa"
          ]
        }}
      />
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
    </>
  )
}

