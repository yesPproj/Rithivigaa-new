"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Zap, Shield, Recycle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Zap,
    title: "High Performance",
    description: "Our products are engineered for maximum efficiency and effectiveness in various industrial applications.",
    color: "text-yellow-500"
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "We prioritize safety in all our chemical solutions and processes, ensuring the well-being of our clients and the environment.",
    color: "text-blue-500"
  },
  {
    icon: Recycle,
    title: "Eco-Friendly",
    description: "Our commitment to sustainability drives our eco-friendly innovations, reducing environmental impact without compromising performance.",
    color: "text-green-500"
  }
]

export default function Features() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white"
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
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mb-4">
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{feature.description}</p>
                  <ArrowUpRight className={`w-6 h-6 ${feature.color}`} />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

