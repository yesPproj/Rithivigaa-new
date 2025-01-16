import About from "@/components/about"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Products from "@/components/products"
import Services from "@/components/services"
import Features from "@/components/features"
import CallToAction from "@/components/call-to-action"

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

