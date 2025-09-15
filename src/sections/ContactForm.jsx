import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'
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
  const [isSubmitting, setIsSubmitting] = useState(false)
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

    if (!validateRequired(formData.email)) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!validateRequired(formData.message)) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const showToast = (message, type) => {
    setToast({ message, type, isVisible: true })
  }

  const hideToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // EmailJS configuration - you'll need to replace these with your actual values
      const emailJSConfig = {
        serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id',
        templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id',
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key'
      }


      // Check if EmailJS is properly configured
      if (emailJSConfig.serviceId === 'your_service_id' || 
          emailJSConfig.templateId === 'your_template_id' || 
          emailJSConfig.publicKey === 'your_public_key') {
        throw new Error('EmailJS not configured. Please set up your environment variables.')
      }
      
      await emailjs.send(
        emailJSConfig.serviceId,
        emailJSConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Owen Cotter', // Your name
          reply_to: formData.email
        },
        emailJSConfig.publicKey
      )

      showToast('Message sent successfully! I\'ll get back to you soon.', 'success')
      setFormData({ name: '', email: '', message: '' })
      
    } catch (error) {
      console.error('Form submission error:', error)
      if (error.message.includes('EmailJS not configured')) {
        showToast('Contact form is not yet configured. Please email me directly.', 'error')
      } else {
        showToast('Failed to send message. Please try again later.', 'error')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Section
        id="contact-form"
        title="Get In Touch"
        description="Ready to hire a passionate junior developer? Send me a message and let's discuss how I can contribute to your team."
        titleAlign="center"
        className="bg-surface/30"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Card>
            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    error={errors.name}
                    required
                    disabled={isSubmitting}
                  />
                  
                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    error={errors.email}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <Textarea
                  label="Message"
                  name="message"
                  placeholder="Please hire me, I want to get started! Tell me about the role and how I can contribute..."
                  value={formData.message}
                  onChange={handleInputChange}
                  error={errors.message}
                  required
                  rows={6}
                  disabled={isSubmitting}
                />
                
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="mr-2 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
            
            <div className="mt-6 text-center text-sm text-muted">
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
