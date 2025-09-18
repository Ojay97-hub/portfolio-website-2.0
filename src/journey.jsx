import React from 'react'
import ReactDOM from 'react-dom/client'
import JourneyPage from './pages/Journey'
import './index.css'

if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
      navigator.serviceWorker.register('/portfolio-website-2.0/sw.js')
        .then(registration => {
          if (process.env.NODE_ENV === 'development') {
            console.log('SW registered:', registration)
          }
        })
        .catch(error => {
          console.error('SW registration failed:', error)
        })
  })
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <JourneyPage />
  </React.StrictMode>,
)
