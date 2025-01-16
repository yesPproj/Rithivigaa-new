"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BeakerIcon, FlaskConicalIcon, TestTubesIcon, ArrowLeft } from 'lucide-react'
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"

const products = [
  {
    id: "ecosolv-x",
    name: "EcoSolv-X",
    description: "Eco-friendly industrial solvent",
    icon: BeakerIcon,
    color: "from-green-400 to-blue-500",
    details: "EcoSolv-X is our revolutionary eco-friendly industrial solvent. It's designed to effectively dissolve a wide range of substances while minimizing environmental impact. With its low VOC emissions and biodegradable formula, EcoSolv-X is the perfect choice for industries looking to maintain high performance while meeting strict environmental regulations.",
    features: [
      "Low VOC emissions",
      "Biodegradable formula",
      "High solvency power",
      "Suitable for a wide range of industries",
      "Compliant with environmental regulations"
    ],
    applications: [
      "Industrial cleaning",
      "Paint and coating removal",
      "Degreasing operations",
      "Electronics manufacturing",
      "Pharmaceutical processing"
    ]
  },
  {
    id: "nanocoat-pro",
    name: "NanoCoat-Pro",
    description: "Advanced nanoparticle coating solution",
    icon: FlaskConicalIcon,
    color: "from-purple-400 to-pink-500",
    details: "NanoCoat-Pro is an advanced nanoparticle coating solution that provides unparalleled protection and performance enhancement for various surfaces. Its unique formulation creates an ultra-thin, durable layer that resists scratches, corrosion, and UV damage. Ideal for automotive, aerospace, and electronics industries, NanoCoat-Pro extends the life and maintains the appearance of treated surfaces.",
    features: [
      "Ultra-thin, durable coating",
      "Scratch and corrosion resistance",
      "UV damage protection",
      "Easy application process",
      "Long-lasting performance"
    ],
    applications: [
      "Automotive finishing",
      "Aerospace components",
      "Electronic device protection",
      "Industrial machinery",
      "Marine equipment"
    ]
  },
  {
    id: "bioenzyme-c",
    name: "BioEnzyme-C",
    description: "High-performance biocatalyst for chemical processes",
    icon: TestTubesIcon,
    color: "from-yellow-400 to-orange-500",
    details: "BioEnzyme-C is a high-performance biocatalyst designed to accelerate and optimize various chemical processes. This innovative enzyme blend significantly reduces reaction times, increases yield, and lowers energy consumption in industrial applications. BioEnzyme-C is particularly effective in pharmaceutical manufacturing, food processing, and biofuel production, offering a sustainable alternative to traditional catalysts.",
    features: [
      "Accelerated reaction times",
      "Increased product yield",
      "Reduced energy consumption",
      "Environmentally friendly",
      "Versatile applications"
    ],
    applications: [
      "Pharmaceutical manufacturing",
      "Food processing",
      "Biofuel production",
      "Textile industry",
      "Waste treatment"
    ]
  },
]

export default function ProductDetail() {
  const router = useRouter()
  const { id } = useParams()
  const product = products.find(p => p.id === id)

  if (!product) {
    return <div>Product not found</div>
  }

  const ProductIcon = product.icon

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <Card className={`bg-gradient-to-r ${product.color} text-white`}>
            <CardHeader>
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 backdrop-blur-sm">
                <ProductIcon className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-3xl">{product.name}</CardTitle>
              <CardDescription className="text-white/80 text-lg">{product.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-6">{product.details}</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Applications</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {product.applications.map((application, index) => (
                      <li key={index}>{application}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

