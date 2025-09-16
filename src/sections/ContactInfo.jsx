import { motion } from 'framer-motion'
import { Mail, MapPin, Linkedin, Github, ExternalLink } from '../lib/icons'
import Section from '../components/Section'
import Card from '../components/Card'
import { profile } from '../data/profile'

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      description: 'Send me an email anytime'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: profile.location,
      href: null,
      description: `Based in ${profile.location}`
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Connect with me',
      href: profile.socials.linkedin,
      description: 'Professional network'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'View my code',
      href: profile.socials.github,
      description: 'Open source projects'
    }
  ]


  return (
    <Section
      id="contact-info"
      title="Let's Connect"
      description="Get in touch to discuss your next project or potential collaboration opportunities."
    >
      <div className="space-y-16">
        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            const isClickable = method.href !== null
            
            const content = (
              <>
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center">
                    <Icon size={24} className="text-accent" />
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-text mb-2">
                  {method.title}
                </h3>
                
                <div className="text-muted text-sm mb-2">
                  {method.description}
                </div>
                
                <div className={`text-sm font-medium ${isClickable ? 'text-accent flex items-center gap-1' : 'text-text'}`}>
                  {method.value}
                  {isClickable && <ExternalLink size={14} />}
                </div>
              </>
            )

            return (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {isClickable ? (
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-surface border border-border rounded-2xl p-6 shadow-soft transition card-hover text-center h-full block hover:border-accent/50 transition-colors cursor-pointer"
                  >
                    {content}
                  </a>
                ) : (
                  <Card className="text-center h-full">
                    {content}
                  </Card>
                )}
              </motion.div>
            )
          })}
        </div>

      </div>
    </Section>
  )
}

export default ContactInfo
