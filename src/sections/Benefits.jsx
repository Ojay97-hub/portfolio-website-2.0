import { motion } from 'framer-motion'
import { Eye, BookOpen, Building, Code, Palette, Users, ArrowRight, CheckCircle } from '../lib/icons'
import Section from '../components/Section'
import Button from '../components/Button'
import { benefits } from '../data/profile'
import { scrollToSection } from '../lib/utils'

const iconMap = {
  Eye,
  BookOpen,
  Building,
  Code,
  Palette,
  Users
}

const Benefits = () => {
  return (
    <Section
      id="benefits"
      title="Why Hire Me"
      description="The unique value and perspective I bring to your engineering team."
      titleAlign="center"
      className="bg-background"
    >
      {/* Grid Layout with Dividers - No Cards */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-border/40 rounded-3xl overflow-hidden bg-surface/5">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon] || Code
            
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 lg:p-10 flex flex-col items-center text-center hover:bg-surface/50 transition-colors duration-300 border-b md:border-b-0 md:odd:border-r lg:border-b-0 lg:border-r border-border/40 last:border-0"
              >
                {/* Manual Border Logic for Grid */}
                <div className={`absolute inset-0 pointer-events-none border-border/40
                  ${/* Mobile: Bottom border on all except last */ ''}
                  md:[&:nth-child(odd)]:border-r md:[&:nth-last-child(2)]:border-b-0 md:[&:nth-child(-n+4)]:border-b
                  lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(-n+3)]:border-b
                `} />

                <div className="w-16 h-16 mb-6 rounded-2xl bg-surface flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-inner">
                  <Icon size={32} className="text-accent" />
                </div>

                <h3 className="text-lg font-bold text-text mb-3 group-hover:text-accent transition-colors font-heading">
                  {benefit.title}
                </h3>
                
                <p className="text-muted text-sm leading-relaxed max-w-xs">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
      
      {/* CTA Section - Subtle Design */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl bg-accent/5 border border-accent/20 max-w-4xl mx-auto p-8 md:p-12 text-center"
      >
        {/* Subtle Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0" />
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold text-text mb-4 font-heading">
            Ready to Add Me to Your Team?
          </h3>
          <p className="text-muted mb-8 max-w-2xl mx-auto text-lg">
            I'm eager to bring fresh energy and modern development practices to your organization. 
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
             <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('contact-form')}
              className="w-full sm:w-auto min-w-[200px]"
            >
              Let's Connect <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium text-muted">
            {['Agile Development', 'Modern Tech', 'Clean Code', 'Best Practices'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle size={14} className="text-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  )
}

export default Benefits
