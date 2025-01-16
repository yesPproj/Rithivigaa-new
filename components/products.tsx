'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BeakerIcon, FlaskConicalIcon, TestTubesIcon, SunIcon, MoonIcon } from 'lucide-react'
import { motion, useScroll, useTransform } from "framer-motion"
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
  const [theme, setTheme] = useState('light')
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black min-h-screen relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/placeholder.svg?height=1080&width=1920")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y
        }}
      />
      <div className="container relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Our Innovative Products
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg border-gray-200 dark:border-gray-700 overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className={`bg-gradient-to-r ${product.color} p-6`}>
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-2xl">{product.name}</CardTitle>
                  <CardDescription className="text-white/80">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow p-6">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {product.details}
                  </p>
                </CardContent>
                <CardFooter className="p-6">
                  <Link href={`/products/${product.id}`} className="w-full">
                    <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-white/20 backdrop-blur-sm text-gray-800 dark:text-white border-gray-300 dark:border-gray-600">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <Button
            onClick={toggleTheme}
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {theme === 'light' ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

