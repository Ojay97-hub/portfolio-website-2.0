// Utility functions for the portfolio

export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validateRequired = (value) => {
  return value && value.trim().length > 0
}

export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date))
}

// Generate a random delay for staggered animations
export const getStaggerDelay = (index, baseDelay = 0.1) => {
  return index * baseDelay
}
