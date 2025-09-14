/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        background: '#000814',
        surface: '#001D3D',
        primary: '#003566',
        accent: '#FFC300',
        accentSoft: '#FFD60A',
        text: '#E6EDF7',
        muted: '#8FA3BF',
        card: '#001A31',
        border: 'rgba(255,255,255,0.08)',
      },
      boxShadow: {
        soft: '0 6px 24px rgba(0,0,0,0.25)',
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
        DEFAULT: '#FFC300',
      },
    },
  },
  plugins: [],
}
