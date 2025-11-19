/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        heading: ['Outfit', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        background: '#F9FAFB', // Very light gray/off-white
        surface: '#FFFFFF',    // Pure white for cards/surfaces
        primary: '#2563EB',    // Vibrant blue
        accent: '#F59E0B',     // Vibrant amber/orange
        accentSoft: '#FCD34D', // Softer amber
        text: '#1F2937',       // Dark gray for main text (not pure black)
        muted: '#6B7280',      // Medium gray for secondary text
        card: '#FFFFFF',       // White for cards
        border: 'rgba(0,0,0,0.08)', // Subtle dark border
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(0, 0, 0, 0.05)', // Softer, lighter shadow
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
        DEFAULT: '#F59E0B',
      },
    },
  },
  plugins: [],
}
