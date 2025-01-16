"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FlaskRoundIcon as Flask, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email and message to your server
    console.log("Sending message:", { email, message })
    // Reset form fields
    setEmail("")
    setMessage("")
    // You might want to show a success message to the user here
  }

  return (
    <footer id="contact" className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Flask className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-gradient">RITHVIGAA</span>
            </Link>
            <p className="text-sm text-gray-400">
              Innovating chemical solutions for a sustainable future.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-gradient">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-gradient">Contact Us</h3>
            <address className="text-sm text-gray-400 not-italic">
              134 Easwar Nagar<br />
              Kovaipudur, Coimbatore<br />
              TamilNadu, India
            </address>
            <p className="text-sm text-gray-400 mt-2">
              Phone:(+91) 8608003377<br />
              Email: rithivikaaassociates@gmail.com
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-gradient">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 text-white placeholder-gray-400" 
                required
              />
              <Textarea 
                placeholder="Your message" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-white/10 text-white placeholder-gray-400" 
                required
              />
              <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2025 RITHVIGAA CHEMICALS. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

