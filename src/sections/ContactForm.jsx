import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Loader2, Sparkles } from '../lib/icons'
import Section from '../components/Section'
import Card from '../components/Card'
import Input from '../components/Input'
import Textarea from '../components/Textarea'
import Button from '../components/Button'
import Toast from '../components/Toast'
import { validateEmail, validateRequired } from '../lib/utils'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const [errors, setErrors] = useState({})
  const [toast, setToast] = useState({ message: '', type: '', isVisible: false })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!validateRequired(formData.name)) {
      newErrors.name = 'Name is required'
    }

    // Email is optional for mailto but good for validation feedback
    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!validateRequired(formData.message)) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const hideToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    // Construct mailto link
    const subject = `Portfolio Contact from ${formData.name}`
    const body = `${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    const mailtoLink = `mailto:owenjames97@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    // Open user's email client
    window.location.href = mailtoLink
    
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <>
      <Section
        id="contact-form"
        className="bg-background"
      >
         <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 text-center max-w-4xl mx-auto mb-12"
        >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-accent text-sm font-bold mb-4"
            >
              <Sparkles size={16} />
              Ready to Start My Career?
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-text mb-6 leading-tight font-heading">
              Ready to Start My{' '}
              <span className="text-accent">
                 Career
              </span>{' '}
              Journey
            </h2>
            
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto text-balance mb-8">
              I'm actively seeking my first role as a developer where I can contribute my skills, 
              learn from experienced professionals, and grow into a valuable team member.
            </p>

            {/* Trust indicators - Simplified */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center text-muted text-sm font-medium uppercase tracking-wider">
               <div className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-bold text-accent mb-1 font-heading">2025</span>
                <span>Graduate Year</span>
              </div>
              <div className="w-px h-12 bg-border hidden md:block"></div>
              <div className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-bold text-accent mb-1 font-heading">6</span>
                <span>Portfolio Projects</span>
              </div>
              <div className="w-px h-12 bg-border hidden md:block"></div>
              <div className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-bold text-accent mb-1 font-heading">3rd</span>
                <span>Hackathon Place</span>
              </div>
            </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Card className="shadow-lg border-border bg-surface">
            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    name="name"
                    type="text"
                    id="full-name"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    error={errors.name}
                    required
                  />
                  
                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    error={errors.email}
                    required
                  />
                </div>
                
                <Textarea
                  label="Message"
                  name="message"
                  id="message"
                  placeholder="Hi Owen, I'd love to discuss a potential role..."
                  autoComplete="off"
                  value={formData.message}
                  onChange={handleInputChange}
                  error={errors.message}
                  required
                  rows={6}
                />
                
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full text-lg py-4 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
                >
                  <Send size={20} className="mr-2" />
                  Open Email Client
                </Button>
              </div>
            </form>
            
            <div className="mt-6 text-center text-sm text-muted flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <p>Usually respond within 24 hours</p>
            </div>
          </Card>
        </motion.div>
      </Section>

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </>
  )
}

export default ContactForm
