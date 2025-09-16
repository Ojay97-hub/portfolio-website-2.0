import { motion } from 'framer-motion'
import { Code, Server, Palette, ShoppingCart } from '../lib/icons'
import Section from '../components/Section'
import Card from '../components/Card'
import { featuresList } from '../data/profile'

const iconMap = {
  Code,
  Server,
  Palette,
  ShoppingCart
}

const WorkTypes = () => {
  return (
    <Section
      id="work-types"
      title="What I Do"
      description="Explore the different types of projects and services I offer to help bring your digital vision to life."
      titleAlign="center"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuresList.map((feature, index) => {
          const Icon = iconMap[feature.icon] || Code
          
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center">
                    <Icon size={28} className="text-accent" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-text mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-muted text-sm">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}

export default WorkTypes
