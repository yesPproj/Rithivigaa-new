"use client"

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
import Link from "next/link"

const products = [
  {
    id: "ecosolv-x",
    name: "EcoSolv-X",
    description: "Eco-friendly industrial solvent",
    icon: BeakerIcon,
    color: "from-green-400 to-blue-500",
    details: "EcoSolv-X is our revolutionary eco-friendly industrial solvent. It's designed to effectively dissolve a wide range of substances while minimizing environmental impact. With its low VOC emissions and biodegradable formula, EcoSolv-X is the perfect choice for industries looking to maintain high performance while meeting strict environmental regulations."
  },
  {
    id: "nanocoat-pro",
    name: "NanoCoat-Pro",
    description: "Advanced nanoparticle coating solution",
    icon: FlaskConicalIcon,
    color: "from-purple-400 to-pink-500",
    details: "NanoCoat-Pro is an advanced nanoparticle coating solution that provides unparalleled protection and performance enhancement for various surfaces. Its unique formulation creates an ultra-thin, durable layer that resists scratches, corrosion, and UV damage. Ideal for automotive, aerospace, and electronics industries, NanoCoat-Pro extends the life and maintains the appearance of treated surfaces."
  },
  {
    id: "bioenzyme-c",
    name: "BioEnzyme-C",
    description: "High-performance biocatalyst for chemical processes",
    icon: TestTubesIcon,
    color: "from-yellow-400 to-orange-500",
    details: "BioEnzyme-C is a high-performance biocatalyst designed to accelerate and optimize various chemical processes. This innovative enzyme blend significantly reduces reaction times, increases yield, and lowers energy consumption in industrial applications. BioEnzyme-C is particularly effective in pharmaceutical manufacturing, food processing, and biofuel production, offering a sustainable alternative to traditional catalysts."
  },
]

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white dark:bg-gray-900">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-gradient"
        >
          Our Innovative Products
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
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
                <br/>
                <CardContent className="flex-grow">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {product.details}
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href={`/products/${product.id}`} className="w-full">
                    <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

