import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from '../lib/icons'
import Section from '../components/Section'
import Button from '../components/Button'
import { scrollToSection } from '../lib/utils'

const CTA = () => {
  return (
    <Section id="cta" className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Sparkles size={16} />
            Ready to Start My Career?
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-text mb-6">
            Ready to Start My{' '}
            <span className="text-accent">Career</span>{' '}
            Journey
          </h2>
          
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto text-balance mb-8">
            I'm actively seeking my first role as a developer where I can contribute my skills, 
            learn from experienced professionals, and grow into a valuable team member.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => scrollToSection('contact-form')}
            className="w-full sm:w-auto group"
          >
            Let's Connect
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button
            variant="ghost"
            size="lg"
            onClick={() => scrollToSection('contact-info')}
            className="w-full sm:w-auto"
          >
            View My Projects
          </Button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-muted"
        >
          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold text-accent mb-1">2025</div>
            <div>Graduate Year</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold text-accent mb-1">6</div>
            <div>Portfolio Projects</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold text-accent mb-1">3rd</div>
            <div>Hackathon Place</div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  )
}

export default CTA
