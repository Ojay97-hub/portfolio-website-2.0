import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import Section from '../components/Section'
import Card from '../components/Card'
import Button from '../components/Button'
import { benefits } from '../data/profile'
import { scrollToSection } from '../lib/utils'

const Benefits = () => {
  return (
    <Section
      id="benefits"
      title="Why Hire Me"
      description="Discover the advantages of bringing a dedicated junior developer to your team who's ready to contribute and grow."
      titleAlign="center"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => {
          const Icon = Icons[benefit.icon] || Icons.Circle
          
          return (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <div className="mb-4 flex justify-center">
                  <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center">
                    <Icon size={28} className="text-accent" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-text mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-muted text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            </motion.div>
          )
        })}
      </div>
      
      {/* Additional trust elements */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <Card className="max-w-3xl mx-auto bg-gradient-to-r from-accent/5 to-primary/5 border-accent/20">
          <h3 className="text-2xl font-bold text-text mb-4">
            Ready to Add Me to Your Team?
          </h3>
          <p className="text-muted mb-6 text-balance">
            I'm eager to bring fresh energy and modern development practices to your organization. 
            Let's discuss how I can contribute to your team's success while growing my skills 
            in a professional environment.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('contact-form')}
              className="group"
            >
              Let's Connect
              <Icons.ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Agile Development</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Modern Technologies</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Best Practices</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Clean Code</span>
            </div>
          </div>
        </Card>
      </motion.div>
    </Section>
  )
}

export default Benefits
