"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-gradient"
        >
          About RITHVIGAA CHEMICALS
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300">
              RITHVIGAA CHEMICALS is a leading innovator in the chemical industry, dedicated to developing sustainable and cutting-edge solutions for a wide range of applications. With our state-of-the-art research facilities and a team of expert scientists, we are committed to pushing the boundaries of chemical engineering.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Our mission is to create eco-friendly and high-performance chemical products that address the evolving needs of industries worldwide. From advanced materials to green solvents, we are at the forefront of chemical innovation, always striving to make a positive impact on the world around us.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/chemical.jpg?height=400&width=600"
              alt="RITHVIGAA CHEMICALS Lab"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

