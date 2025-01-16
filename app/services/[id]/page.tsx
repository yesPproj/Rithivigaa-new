"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AtomIcon, FlaskConicalIcon, MicroscopeIcon, RecycleIcon, ArrowLeft } from 'lucide-react'

import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"

const services = [
  {
    id: "custom-synthesis",
    name: "Custom Synthesis",
    description: "Tailored chemical solutions for your specific needs",
    icon: FlaskConicalIcon,
    color: "from-blue-400 to-indigo-500",
    details: "Our Custom Synthesis service provides bespoke chemical solutions tailored to your exact specifications. Our team of expert chemists works closely with you to understand your requirements and develop unique compounds or optimize existing ones. Whether you need small quantities for research or large-scale production, our state-of-the-art facilities and experienced team can deliver high-quality, custom-synthesized chemicals to meet your needs.",
    features: [
      "Tailored chemical synthesis",
      "Optimization of existing compounds",
      "Scalable from research quantities to industrial production",
      "Rigorous quality control",
      "Confidentiality and IP protection"
    ],
    applications: [
      "Pharmaceutical research and development",
      "Materials science innovation",
      "Specialty chemicals for industrial processes",
      "Academic research support",
      "Prototype development for new products"
    ]
  },
  {
    id: "material-analysis",
    name: "Material Analysis",
    description: "Comprehensive analysis and characterization of materials",
    icon: MicroscopeIcon,
    color: "from-green-400 to-teal-500",
    details: "Our Material Analysis service offers in-depth characterization and testing of a wide range of materials. Using cutting-edge analytical techniques and equipment, we provide detailed insights into the composition, structure, and properties of your materials. This service is crucial for quality control, research and development, and troubleshooting in various industries.",
    features: [
      "Comprehensive material characterization",
      "State-of-the-art analytical techniques",
      "Detailed reporting and interpretation of results",
      "Customized testing protocols",
      "Fast turnaround times"
    ],
    applications: [
      "Quality control in manufacturing",
      "Failure analysis and troubleshooting",
      "New material development",
      "Environmental testing",
      "Forensic analysis"
    ]
  },
  {
    id: "green-chemistry-consulting",
    name: "Green Chemistry Consulting",
    description: "Expert advice on sustainable chemical processes",
    icon: RecycleIcon,
    color: "from-yellow-400 to-green-500",
    details: "Our Green Chemistry Consulting service helps businesses transition to more sustainable and environmentally friendly chemical processes. Our experts provide guidance on reducing environmental impact, improving energy efficiency, and developing eco-friendly products. We help you navigate regulations, implement best practices, and innovate for a greener future.",
    features: [
      "Sustainable process design",
      "Environmental impact assessment",
      "Regulatory compliance guidance",
      "Green product development",
      "Waste reduction strategies"
    ],
    applications: [
      "Chemical manufacturing optimization",
      "Sustainable product formulation",
      "Waste management improvements",
      "Energy efficiency in chemical processes",
      "Eco-friendly packaging solutions"
    ]
  },
  {
    id: "molecular-modeling",
    name: "Molecular Modeling",
    description: "Advanced computational chemistry services",
    icon: AtomIcon,
    color: "from-purple-400 to-pink-500",
    details: "Our Molecular Modeling service utilizes advanced computational techniques to simulate and predict molecular behavior. This powerful tool aids in understanding chemical reactions, designing new molecules, and optimizing formulations. By leveraging high-performance computing and sophisticated algorithms, we help accelerate research and development processes across various scientific disciplines.",
    features: [
      "Quantum mechanical calculations",
      "Molecular dynamics simulations",
      "Structure-activity relationship studies",
      "Virtual screening for drug discovery",
      "Customized modeling solutions"
    ],
    applications: [
      "Drug design and discovery",
      "Materials science research",
      "Catalysis optimization",
      "Protein-ligand interaction studies",
      "Predictive toxicology"
    ]
  },
]

export default function ServiceDetail() {
  const router = useRouter()
  const { id } = useParams()
  const service = services.find(s => s.id === id)

  if (!service) {
    return <div>Service not found</div>
  }

  const ServiceIcon = service.icon

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
          <Card className={`bg-gradient-to-r ${service.color} text-white`}>
            <CardHeader>
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 backdrop-blur-sm">
                <ServiceIcon className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-3xl">{service.name}</CardTitle>
              <CardDescription className="text-white/80 text-lg">{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-6">{service.details}</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Applications</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {service.applications.map((application, index) => (
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

