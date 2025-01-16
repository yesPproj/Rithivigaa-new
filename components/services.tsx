"use client"

import { Button } from "@/components/ui/button"
import { AtomIcon, FlaskConicalIcon, MicroscopeIcon, RecycleIcon } from 'lucide-react'
import { motion } from "framer-motion"
import Link from "next/link"

const services = [
  {
    id: "custom-synthesis",
    name: "Custom Synthesis",
    description: "Tailored chemical solutions for your specific needs",
    icon: FlaskConicalIcon,
    color: "bg-blue-600",
  },
  {
    id: "material-analysis",
    name: "Material Analysis",
    description: "Comprehensive analysis and characterization of materials",
    icon: MicroscopeIcon,
    color: "bg-green-600",
  },
  {
    id: "green-chemistry-consulting",
    name: "Green Chemistry Consulting",
    description: "Expert advice on sustainable chemical processes",
    icon: RecycleIcon,
    color: "bg-yellow-600",
  },
  {
    id: "molecular-modeling",
    name: "Molecular Modeling",
    description: "Advanced computational chemistry services",
    icon: AtomIcon,
    color: "bg-purple-600",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white"
        >
          Our Specialized Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className={`${service.color} p-6`}>
                <service.icon className="w-12 h-12 text-white mx-auto" />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{service.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
              </div>
              <div className="px-6 pb-6">
                <Link href={`/services/${service.id}`} className="block">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

