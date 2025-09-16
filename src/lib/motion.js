// Optimized motion variants for better performance
// Centralized motion configuration to reduce bundle size and improve consistency

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

export const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 }
}

export const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 }
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 }
}

// Standard transitions
export const defaultTransition = {
  duration: 0.3,
  ease: "easeOut"
}

export const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30
}

// Viewport settings for animations
export const viewportSettings = {
  once: true,
  margin: "0px 0px -100px 0px"
}

// Stagger children animations
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Simplified motion component wrapper for better performance
export const createMotionProps = (variant, delay = 0) => ({
  initial: variant.initial,
  whileInView: variant.animate,
  viewport: viewportSettings,
  transition: {
    ...defaultTransition,
    delay
  }
})
