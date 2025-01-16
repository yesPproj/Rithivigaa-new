'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="container relative z-10 flex min-h-screen flex-col justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block"
            >
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                Revolutionizing Chemistry
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight"
            >
              Innovating
              <span className="text-blue-600 dark:text-blue-400 ml-2">Chemical</span>
              <br/>
              Solutions for Tomorrow
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-[600px] text-gray-600 dark:text-gray-300 text-lg sm:text-xl"
            >
              At RITHVIGAA CHEMICALS, we&apos;re at the forefront of sustainable chemical manufacturing and cutting-edge research. Discover our comprehensive range of high-quality products and services.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="w-full sm:w-auto font-medium">
                Explore Products
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Our Services
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full mt-8 lg:mt-0"
          >
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Chemical Innovation"
              fill
              className="rounded-lg shadow-xl object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

