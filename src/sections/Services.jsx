import { motion } from 'framer-motion'
import { ArrowRight, Check } from '../lib/icons'
import Section from '../components/Section'
import { services } from '../data/profile'
import { scrollToSection } from '../lib/utils'

const Services = () => {
  return (
    <Section
      id="services"
      title="Skills & Expertise"
      description="Core competencies gained through comprehensive training and hands-on project experience."
      className="bg-surface/20"
    >
      <div className="flex flex-col max-w-5xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative border-b border-border last:border-0 py-10 md:py-16 transition-all duration-300"
          >
             {/* Hover Background Gradient */}
             <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

             <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                 {/* Title & Certificate */}
                 <div className="md:w-1/3">
                     <h3 className="text-3xl md:text-4xl font-bold text-text mb-3 group-hover:text-accent transition-colors">
                        {service.title}
                     </h3>
                     <div className="inline-block px-3 py-1 rounded-full bg-surface/50 border border-border/50 text-xs font-mono text-muted group-hover:border-accent/30 transition-colors">
                        {service.certificate}
                     </div>
                 </div>
                 
                 {/* Description & Skills */}
                 <div className="flex-1">
                     <p className="text-muted text-lg leading-relaxed mb-6">
                        {service.description}
                     </p>
                     
                     <div className="flex flex-wrap gap-3">
                        {service.skills.map((skill, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm font-medium text-text/80">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                                {skill}
                            </div>
                        ))}
                     </div>
                 </div>

                 {/* Action Arrow */}
                 <div className="flex md:w-auto justify-end mt-4 md:mt-0">
                    <button 
                        onClick={() => scrollToSection('contact-form')}
                        className="w-14 h-14 rounded-full border border-border flex items-center justify-center text-muted group-hover:bg-accent group-hover:text-background group-hover:border-accent transition-all duration-300 shadow-sm"
                        aria-label="Get started"
                    >
                        <ArrowRight size={24} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </button>
                 </div>
             </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default Services
