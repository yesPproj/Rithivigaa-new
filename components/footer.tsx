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
    console.log("Sending message:", { email, message })
    setEmail("")
    setMessage("")
  }

  return (
    <footer id="contact" className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <Link href="/" className="inline-flex items-center space-x-2 mb-4">
            <Flask className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-white">RITHVIGAA</span>
          </Link>
          <p className="text-gray-400 max-w-md mx-auto">
            Innovating chemical solutions for a sustainable future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto mb-12">
          <div>
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {["About Us", "Products", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-lg">Contact Us</h3>
            <address className="text-gray-400 not-italic">
              134 Easwar Nagar<br />
              Kovaipudur, Coimbatore<br />
              TamilNadu, India
            </address>
            <p className="text-gray-400 mt-2">
              Phone: (+91) 8608003377<br />
              Email: rithivikaaassociates@gmail.com
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-lg">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
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

        <div className="border-t border-gray-800 pt-8 flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
              <Link key={index} href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
          <p className="text-sm text-gray-400">
            © 2025 RITHVIGAA CHEMICALS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

