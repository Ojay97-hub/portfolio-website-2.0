import { motion } from 'framer-motion'
import { Code, Server, Palette, ShoppingCart } from '../lib/icons'
import Section from '../components/Section'
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
      description="Specialized services tailored to your needs."
      titleAlign="center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/20 border border-border/20 rounded-3xl overflow-hidden shadow-soft">
        {featuresList.map((feature, index) => {
          const Icon = iconMap[feature.icon] || Code
          
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background p-8 lg:p-10 flex flex-col items-center text-center gap-6 hover:bg-surface/40 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-radial-gradient from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative w-20 h-20 rounded-2xl flex items-center justify-center mb-2 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                {/* Icon Background shapes */}
                <div className="absolute inset-0 bg-surface rounded-2xl rotate-0 group-hover:rotate-6 transition-transform duration-300 opacity-50" />
                <div className="absolute inset-0 bg-surface rounded-2xl rotate-0 group-hover:-rotate-3 transition-transform duration-300" />
                
                <Icon size={36} className="relative z-10 text-accent drop-shadow-lg" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-text mb-3 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}

export default WorkTypes
