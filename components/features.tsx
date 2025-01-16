"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Zap, Shield, Recycle } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: "High Performance",
    description: "Our products are engineered for maximum efficiency and effectiveness."
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "We prioritize safety in all our chemical solutions and processes."
  },
  {
    icon: Recycle,
    title: "Eco-Friendly",
    description: "Our commitment to sustainability drives our eco-friendly innovations."
  }
]

export default function Features() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-gradient"
        >
          Why Choose RITHVIGAA
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              <ArrowUpRight className="w-6 h-6 text-primary mt-4" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

