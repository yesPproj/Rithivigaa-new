"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
      <div className="container relative z-10 flex min-h-screen flex-col justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block"
            >
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-blue-200 text-blue-800">
                Revolutionizing Chemistry
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
            >
              Innovating
              <span className="text-blue-300 ml-2">Chemical</span>
              <br/>
              Solutions for Tomorrow
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-[600px] text-blue-100 text-base sm:text-lg md:text-xl"
            >
              At RITHVIGAA CHEMICALS, we're at the forefront of sustainable chemical manufacturing and cutting-edge research. Discover our comprehensive range of high-quality products and services.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="w-full sm:w-auto font-medium bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300">
                Explore Products
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-blue-300 text-blue-300 hover:bg-blue-800 hover:text-blue-100 transition-all duration-300">
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
              src="/hero.jpg?height=500&width=500"
              alt="Chemical Innovation"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full text-center"
      >
      </motion.div>
    </section>
  )
}
