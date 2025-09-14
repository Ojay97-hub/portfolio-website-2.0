import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Section from '../components/Section'
import Card from '../components/Card'
import Button from '../components/Button'
import { services } from '../data/profile'
import { scrollToSection } from '../lib/utils'

const Services = () => {
  return (
    <Section
      id="services"
      title="Skills & Expertise"
      description="Core competencies gained through comprehensive training and hands-on project experience."
      className="bg-surface/30"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full flex flex-col">
              <div className="flex-1">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-text mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted mb-4">
                    {service.description}
                  </p>
                  <div className="text-sm font-medium text-accent mb-6">
                    {service.certificate}
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {service.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-accent" />
                      </div>
                      <span className="text-text text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                variant="outline"
                size="md"
                className="w-full"
                onClick={() => scrollToSection('contact-form')}
              >
                Learn More
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Custom Service CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <Card className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-text mb-4">
            Ready to Contribute?
          </h3>
          <p className="text-muted mb-6">
            I'm actively seeking my first role as a developer where I can apply these skills 
            and continue learning. Let's discuss how I can contribute to your team.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => scrollToSection('contact-form')}
          >
            Get In Touch
          </Button>
        </Card>
      </motion.div>
    </Section>
  )
}

export default Services
