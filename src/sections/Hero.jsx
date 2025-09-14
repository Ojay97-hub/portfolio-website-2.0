import { motion } from 'framer-motion'
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react'
import Button from '../components/Button'
import { profile } from '../data/profile'
import { scrollToSection } from '../lib/utils'

const Hero = () => {
  const socialLinks = [
    { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
    { icon: Linkedin, href: profile.socials.linkedin, label: 'LinkedIn' },
    { icon: Github, href: profile.socials.github, label: 'GitHub' },
  ]

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-accent font-medium mb-4"
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-text mb-6"
            >
              {profile.name}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl md:text-2xl text-accent mb-8"
            >
              {profile.title}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg text-muted max-w-2xl mx-auto text-balance mb-12"
            >
              {profile.shortBio}
            </motion.p>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('contact-form')}
              className="w-full sm:w-auto"
            >
              <Mail size={20} className="mr-2" />
              Hire Me
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('https://docs.google.com/document/d/e/2PACX-1vRV88aRGtEw0lXd1FmHovZtZ_i-VvlK63gXJVnzM6ncy1kT7K-JbRt2wOfwBcWTZaMcT7y9O1akMrgt/pub', '_blank')}
              className="w-full sm:w-auto"
              aria-label="Download CV"
            >
              <Download size={20} className="mr-2" />
              Download CV
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex justify-center items-center gap-6 mb-16"
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="p-3 text-muted hover:text-accent hover:bg-accent/10 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
                  aria-label={link.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.3 + index * 0.1 }}
                >
                  <Icon size={24} />
                </motion.a>
              )
            })}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="flex flex-col items-center"
          >
            <button
              onClick={() => scrollToSection('about')}
              className="flex flex-col items-center text-muted hover:text-accent transition-colors group focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded-md p-2"
              aria-label="Scroll to about section"
            >
              <span className="text-sm font-medium mb-2">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowDown size={20} className="group-hover:text-accent transition-colors" />
              </motion.div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
