import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown, Search, Github, Linkedin, Mail, X, ChevronDown, ChevronUp } from '../lib/icons'
import Button from '../components/Button'
import { profile } from '../data/profile'
import { scrollToSection } from '../lib/utils'

const Hero = () => {
  const [showCV, setShowCV] = useState(false)

  const socialLinks = [
    { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
    { icon: Linkedin, href: profile.socials.linkedin, label: 'LinkedIn' },
    { icon: Github, href: profile.socials.github, label: 'GitHub' },
  ]

  /* 
   * NOTE: We are using the local PDF file now. 
   * The base path '/portfolio-website-2.0' corresponds to the repository name/GitHub Pages base.
   */
  const cvUrl = '/portfolio-website-2.0/project-pics/cv/UI%20DESIGN%20CV%202026.pdf'

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-24 md:pt-20 pb-20">
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
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
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
              onClick={() => setShowCV(!showCV)}
              className="w-full sm:w-auto"
              aria-label="View CV"
              aria-expanded={showCV}
            >
              <Search size={20} className="mr-2" />
              {showCV ? 'Hide CV' : 'View CV'}
              {showCV ? (
                <ChevronUp size={18} className="ml-2" />
              ) : (
                <ChevronDown size={18} className="ml-2" />
              )}
            </Button>
          </motion.div>

          {/* CV Dropdown Iframe */}
          <AnimatePresence>
            {showCV && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="overflow-hidden mb-8"
              >
                <motion.div
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  exit={{ y: -20 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="relative bg-white rounded-2xl shadow-2xl border border-border overflow-hidden"
                >
                  {/* CV Header Bar */}
                  <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-primary to-primary/80 text-white">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <span className="text-sm font-medium">Owen Cotter - CV</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href={cvUrl.replace('?embedded=true', '')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs bg-white/20 hover:bg-white/30 px-3 py-1 rounded-lg transition-colors"
                      >
                        Open Full Screen
                      </a>
                      <button
                        onClick={() => setShowCV(false)}
                        className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                        aria-label="Close CV"
                      >
                        <X size={18} />
                      </button>
                    </div>
                  </div>

                  {/* CV Iframe Container - A4 Aspect Ratio */}
                  <div className="bg-gray-100 p-4">
                    <div className="relative w-full mx-auto" style={{ maxWidth: '800px' }}>
                      {/* A4 aspect ratio container (1:1.414) */}
                      <div className="relative w-full" style={{ paddingBottom: '141.4%' }}>
                        <iframe
                          src={cvUrl}
                          title="Owen Cotter CV"
                          className="absolute inset-0 w-full h-full bg-white rounded-lg shadow-lg"
                          style={{ border: 'none' }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

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
