"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100"
        >
          About RITHVIGAA CHEMICALS
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              <span className="font-semibold text-blue-600">RITHVIGAA CHEMICALS</span> is a leading innovator in the chemical industry, dedicated to developing sustainable and cutting-edge solutions for a wide range of applications.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Our mission is to create environmentally friendly products without compromising on quality or performance. We strive to drive positive change and create a sustainable future for industries worldwide.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Through collaboration with industry leaders and research institutions, we continue to push the boundaries of innovation, addressing global sustainability goals while solving pressing industry challenges.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <Image
              src="/chemical.jpg"
              alt="RITHVIGAA CHEMICALS Lab"
              width={500}
              height={300}
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

