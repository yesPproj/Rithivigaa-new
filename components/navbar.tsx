"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { FlaskRoundIcon as Flask, Menu } from 'lucide-react'
import Link from "next/link"

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Flask className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-gray-900 dark:text-white">RITHVIGAA</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-foreground transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection('products')} className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-foreground transition-colors">
            Products
          </button>
          <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-foreground transition-colors">
            Services
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-foreground transition-colors">
            Contact
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          <Button onClick={() => scrollToSection('contact')} className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90">Contact Us</Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4">
                <button onClick={() => { scrollToSection('about'); }} className="text-sm font-medium">
                  About
                </button>
                <button onClick={() => { scrollToSection('products'); }} className="text-sm font-medium">
                  Products
                </button>
                <button onClick={() => { scrollToSection('services'); }} className="text-sm font-medium">
                  Services
                </button>
                <button onClick={() => { scrollToSection('contact'); }} className="text-sm font-medium">
                  Contact
                </button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

