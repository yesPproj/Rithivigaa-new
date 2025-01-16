"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-r from-purple-600 to-indigo-600">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Revolutionize Your Chemical Processes
            </h2>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
              Join RITHVIGAA&apos;s innovation journey and transform your industry with our cutting-edge solutions.
            </p>
            <Button size="lg" className="font-medium px-8 bg-purple-600 hover:bg-purple-700 text-white">
              Get Started Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

