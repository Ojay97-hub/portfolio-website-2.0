import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CaseStudy from './pages/CaseStudy'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <CaseStudy />
    </StrictMode>,
)
