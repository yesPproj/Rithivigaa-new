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
    color: "from-blue-400 to-indigo-500",
  },
  {
    id: "material-analysis",
    name: "Material Analysis",
    description: "Comprehensive analysis and characterization of materials",
    icon: MicroscopeIcon,
    color: "from-green-400 to-teal-500",
  },
  {
    id: "green-chemistry-consulting",
    name: "Green Chemistry Consulting",
    description: "Expert advice on sustainable chemical processes",
    icon: RecycleIcon,
    color: "from-yellow-400 to-green-500",
  },
  {
    id: "molecular-modeling",
    name: "Molecular Modeling",
    description: "Advanced computational chemistry services",
    icon: AtomIcon,
    color: "from-purple-400 to-pink-500",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-gradient"
        >
          Our Specialized Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex items-start space-x-4 bg-gradient-to-br ${service.color} text-white rounded-lg p-6 shadow-lg`}
            >
              <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-white/80 mb-4">{service.description}</p>
                <Link href={`/services/${service.id}`}>
                  <Button variant="outline" className="bg-white/10 text-white hover:bg-white hover:text-primary transition-colors duration-300">
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

