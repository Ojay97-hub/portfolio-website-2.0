import { motion } from 'framer-motion'
import { Heart, Mail, Linkedin, Github, ArrowUp } from '../lib/icons'
import { profile } from '../data/profile'
import { scrollToSection } from '../lib/utils'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const baseUrl = import.meta.env.BASE_URL || '/'
  
  // Check if we're on the journey page
  const isJourneyPage = window.location.pathname.includes('/journey')
  
  const socialLinks = [
    { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
    { icon: Linkedin, href: profile.socials.linkedin, label: 'LinkedIn' },
    { icon: Github, href: profile.socials.github, label: 'GitHub' },
  ]

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work-types' },
    { label: 'Contact', href: '#contact-form' },
  ]

  const handleLinkClick = (href) => {
    if (isJourneyPage) {
      // If on journey page, navigate to main page with hash
      window.location.href = `${baseUrl}${href}`
    } else {
      // If on main page, use smooth scroll
      const sectionId = href.slice(1)
      scrollToSection(sectionId)
    }
  }

  const handleBackToTop = () => {
    if (isJourneyPage) {
      // On journey page, just scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      // On main page, scroll to hero section
      scrollToSection('hero')
    }
  }

  return (
    <footer className="bg-surface/50 border-t border-border">
      <div className="container">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand & Description */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-text mb-4">
                  {profile.name}
                </h3>
                <p className="text-muted mb-6 max-w-md">
                  {profile.shortBio}
                </p>
                
                {/* Social Links */}
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon
                    return (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                        rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                        className="w-10 h-10 bg-primary/20 hover:bg-accent/20 text-muted hover:text-accent rounded-xl flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
                        aria-label={link.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon size={18} />
                      </motion.a>
                    )
                  })}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-text mb-4">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => handleLinkClick(link.href)}
                        className="text-muted hover:text-accent transition-colors text-sm"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-text mb-4">Get In Touch</h4>
                <div className="space-y-3 text-sm">
                  <p className="text-muted">
                    Ready to start your project?
                  </p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-accent hover:text-accentSoft transition-colors block"
                  >
                    {profile.email}
                  </a>
                  <p className="text-muted">
                    Based in {profile.location}
                  </p>
                  <p className="text-muted">
                    Seeking first entry-level role
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-sm text-muted"
            >
              <span>© {currentYear} {profile.name}. Made with</span>
              <Heart size={16} className="text-accent fill-accent" />
              <span>using React & TailwindCSS</span>
            </motion.div>

            {/* Back to top */}
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              onClick={handleBackToTop}
              className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors group focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded-md px-2 py-1"
              aria-label="Back to top"
            >
              Back to top
              <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
