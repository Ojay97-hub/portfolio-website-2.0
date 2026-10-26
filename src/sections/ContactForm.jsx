import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Send, Loader2 } from '../lib/icons'
import Input from '../components/Input'
import Textarea from '../components/Textarea'
import Toast from '../components/Toast'
import Sparkle from '../components/nf/Sparkle'
import { validateEmail, validateRequired } from '../lib/utils'

const STATS = [
  { value: '2025', label: 'Graduate year' },
  { value: '6', label: 'Portfolio projects' },
  { value: '3rd', label: 'Hackathon place' },
]

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const [errors, setErrors] = useState({})
  const [toast, setToast] = useState({ message: '', type: '', isVisible: false })
  const [isSending, setIsSending] = useState(false)

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

  const openMailClient = () => {
    const subject = `Portfolio Contact from ${formData.name}`
    const body = `${formData.message}

From: ${formData.name} (${formData.email})`
    window.location.href = `mailto:owenjames97@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    // Fall back to mailto if EmailJS isn't configured
    if (!serviceId || !templateId || !publicKey) {
      openMailClient()
      return
    }

    setIsSending(true)
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          message: formData.message
        },
        { publicKey }
      )
      setFormData({ name: '', email: '', message: '' })
      setToast({ message: "Message sent! I'll get back to you soon.", type: 'success', isVisible: true })
    } catch (error) {
      console.error('EmailJS send failed:', error)
      setToast({ message: 'Could not send your message. Opening your email client instead.', type: 'error', isVisible: true })
      openMailClient()
    } finally {
      setIsSending(false)
    }
  }

  return (
    <>
      <section id="contact-form" className="dotgrid relative border-t-2 border-ink py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Pitch */}
          <div data-reveal className="relative">
            <p className="eyebrow mb-7">💬 Get in touch</p>
            <h2 className="display-lg font-display font-extrabold text-ink">
              Ready to start my <span className="marker">career journey.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
              I&apos;m looking for my first developer role, somewhere I can contribute, learn from
              experienced people and grow into a valuable member of the team.
            </p>

            <dl className="mt-10 flex flex-wrap gap-3">
              {STATS.map(({ value, label }) => (
                <div key={label} className="card-pop px-5 py-4">
                  <dt className="sr-only">{label}</dt>
                  <dd className="font-display text-3xl font-extrabold text-ink">{value}</dd>
                  <dd className="text-xs font-bold text-ink-soft">{label}</dd>
                </div>
              ))}
            </dl>

            <Sparkle size={40} className="absolute -bottom-6 right-10 hidden text-brand lg:block" />
          </div>

          {/* Form */}
          <div data-reveal style={{ '--reveal-delay': '120ms' }} className="card-pop p-6 sm:p-8">
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
                
                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border-2 border-ink bg-brand px-7 py-4 text-base font-bold text-navy shadow-pop transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-0.5 hover:shadow-pop-lg active:translate-y-0.5 active:shadow-none disabled:cursor-wait disabled:opacity-70"
                >
                  {isSending ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
                  {isSending ? 'Sending…' : 'Send message'}
                </button>
              </div>
            </form>

            <p className="mt-6 flex items-center justify-center gap-2 text-sm font-bold text-ink-soft">
              <span className="h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
              Usually replies within 24 hours
            </p>
          </div>
        </div>
      </section>

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
