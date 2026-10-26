// Brand colour backed by an "R G B" CSS variable, keeping opacity modifiers working
const nfColor = (name) => `rgb(var(${name}) / <alpha-value>)`

/** @type {import('tailwindcss').Config} */
export default {
  // Dark mode is only toggled on the homepage (class on <html>)
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        heading: ['Outfit', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        // Nova Forma brand fonts (homepage)
        display: ['Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.18em',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      colors: {
        background: '#F9FAFB', // Very light gray/off-white
        surface: '#FFFFFF',    // Pure white for cards/surfaces
        primary: '#2563EB',    // Vibrant blue
        accent: '#0D9488',     // Teal 600 - Strong, accessible Teal
        accentSoft: '#99F6E4', // Teal 200 - Soft background Teal
        accentDark: '#0F766E', // Teal 700 - Dark accessible Teal
        text: '#1F2937',       // Dark gray for main text (not pure black)
        muted: '#6B7280',      // Medium gray for secondary text
        card: '#FFFFFF',       // White for cards
        border: 'rgba(0,0,0,0.08)', // Subtle dark border

        // Nova Forma brand tokens (homepage) - navy ink, white canvas, teal accents.
        // Values are CSS variables (index.css) so they flip in dark mode.
        cream: nfColor('--nf-cream'),
        ivory: nfColor('--nf-ivory'),
        ink: {
          DEFAULT: nfColor('--nf-ink'),
          soft: nfColor('--nf-ink-soft'),
          faint: nfColor('--nf-ink-faint'),
        },
        navy: {
          DEFAULT: '#0F2233',
          mist: nfColor('--nf-navy-mist'),
        },
        brand: {
          DEFAULT: '#3FD2C6',
          soft: nfColor('--nf-brand-soft'),
          deep: nfColor('--nf-brand-deep'),
        },
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(0, 0, 0, 0.05)', // Softer, lighter shadow
        // Chunky offset shadows from the Nova Forma brand
        pop: '0 4px 0 0 rgb(var(--nf-shadow))',
        'pop-lg': '0 8px 0 0 rgb(var(--nf-shadow))',
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1200px',
        },
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        '2xl': '1rem',
      },
      spacing: {
        '8': '2rem',
      },
      ringWidth: {
        DEFAULT: '2px',
      },
      ringColor: {
        DEFAULT: '#0D9488',
      },
    },
  },
  plugins: [],
}
