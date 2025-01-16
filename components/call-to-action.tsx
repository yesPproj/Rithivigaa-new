"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Revolutionize Your Chemical Processes?</h2>
          <p className="text-xl mb-8">Join the RITHVIGAA innovation journey today!</p>
          <Button size="lg" variant="outline" className="bg-white text-purple-600 hover:bg-purple-100 transition-colors duration-300">
            Get Started Now
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

