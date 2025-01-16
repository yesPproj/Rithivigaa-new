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

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-12"
        >
          <p>
            <span className="font-semibold text-blue-600">RITHVIGAA CHEMICALS</span> is a leading innovator in the chemical industry, dedicated to developing sustainable and cutting-edge solutions for a wide range of applications. We utilize advanced research facilities and an experienced team of scientists to ensure we remain at the forefront of innovation. Our products help industries across the globe become more efficient, eco-friendly, and technologically advanced.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300">
            At RITHVIGAA CHEMICALS, we believe in the power of collaboration and knowledge sharing. By partnering with industry leaders, research institutions, and environmental organizations, we continue to push the boundaries of what's possible. Our goal is to not only meet the needs of today's industries but to anticipate future challenges and deliver solutions that create a positive and lasting impact on both business and the planet.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Our mission is clear: We strive to create environmentally friendly products without compromising on quality or performance. Whether developing new chemical formulations or improving existing solutions, we are committed to driving positive change and creating a sustainable future for industries around the world.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Our vision goes beyond just creating products; we aim to create long-lasting value for our customers by continuously innovating. By embracing new technologies and optimizing our processes, we help industries solve their most pressing challenges, while also addressing global sustainability goals.
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
