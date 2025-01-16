"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BeakerIcon, FlaskConicalIcon, TestTubesIcon } from 'lucide-react'
import { motion } from "framer-motion"

const products = [
  {
    name: "EcoSolv-X",
    description: "Eco-friendly industrial solvent",
    icon: BeakerIcon,
    color: "from-green-400 to-blue-500",
  },
  {
    name: "NanoCoat-Pro",
    description: "Advanced nanoparticle coating solution",
    icon: FlaskConicalIcon,
    color: "from-purple-400 to-pink-500",
  },
  {
    name: "BioEnzyme-C",
    description: "High-performance biocatalyst for chemical processes",
    icon: TestTubesIcon,
    color: "from-yellow-400 to-orange-500",
  },
]

export default function Products() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null // or a simple loading state
  }

  return (
    <section id="products" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-gradient"
        >
          Our Innovative Products
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 border-gray-200 dark:border-gray-700 overflow-hidden">
                <CardHeader className={`bg-gradient-to-r ${product.color}`}>
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4 backdrop-blur-sm">
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white">{product.name}</CardTitle>
                  <CardDescription className="text-white/80">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

