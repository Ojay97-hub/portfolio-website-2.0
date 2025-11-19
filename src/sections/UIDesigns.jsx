import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Tablet, Smartphone, Monitor, ArrowRight } from '../lib/icons'
import Section from '../components/Section'
import Badge from '../components/Badge'
import Button from '../components/Button'
import LazyImage from '../components/LazyImage'
import { uiDesigns } from '../data/profile'

const UIDesigns = () => {
  const figmaUrl = 'https://www.figma.com/design/t0se78v9LXEty073PK3dKa/Owen_Cotter_UI_assignment_UXDI?node-id=1616-227&t=9HRmsyrL9al3LMFq-1'

  // 1. Group designs by "Flow" (e.g., "My Accounts", "Current Account")
  const flows = uiDesigns.reduce((acc, design) => {
    // Extract base name: "My Accounts - Mobile" -> "My Accounts"
    const flowName = design.title.split(' - ')[0]
    
    if (!acc[flowName]) {
      acc[flowName] = {
        name: flowName,
        description: design.description, // Use the first description found as the flow description (usually similar)
        designs: {}
      }
    }
    
    // Store by category: { Mobile: {...}, Tablet: {...}, Desktop: {...} }
    acc[flowName].designs[design.category] = design
    return acc
  }, {})

  const flowList = Object.values(flows)

  return (
    <Section
      id="ui-designs"
      title="UI/UX Design Showcase"
      description="A comprehensive banking application designed with a focus on clarity, trust, and user experience across all devices."
      titleAlign="center"
      className="bg-background"
    >
      <div className="space-y-24 md:space-y-32">
        {flowList.map((flow, index) => (
          <DesignFlow key={flow.name} flow={flow} index={index} />
        ))}
      </div>

      {/* Figma CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-24 text-center"
      >
        <div className="inline-flex flex-col items-center gap-4 p-8 rounded-3xl bg-surface border border-border shadow-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text">Explore the Designs</h3>
            <p className="text-muted text-center max-w-md">
                View the complete design system, interactions, and user flows directly in Figma.
            </p>
            <Button
                variant="primary"
                size="lg"
                onClick={() => window.open(figmaUrl, '_blank', 'noopener,noreferrer')}
                className="mt-2"
            >
                <ExternalLink size={18} className="mr-2" />
                View in Figma
            </Button>
        </div>
      </motion.div>
    </Section>
  )
}

const DesignFlow = ({ flow, index }) => {
  const [activeDevice, setActiveDevice] = useState('Desktop')
  const isEven = index % 2 === 0
  const currentDesign = flow.designs[activeDevice] || Object.values(flow.designs)[0]

  // Auto-select an available device if default is missing
  if (!flow.designs[activeDevice] && Object.keys(flow.designs).length > 0) {
     setActiveDevice(Object.keys(flow.designs)[0])
  }

  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
      
      {/* Text Content */}
      <motion.div 
        className="flex-1 space-y-8"
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div>
          <div className="flex items-center gap-3 mb-4">
             <div className="h-px w-12 bg-accent"></div>
             <span className="text-accent font-bold uppercase tracking-widest text-sm">User Flow {index + 1}</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-text mb-6 leading-tight">
            {flow.name}
          </h3>
          <p className="text-lg text-muted leading-relaxed">
            {/* Prefer specific design description if available and different, otherwise generic flow text */}
            {currentDesign.description}
          </p>
        </div>

        {/* Device Toggles */}
        <div className="space-y-4">
            <span className="text-sm font-semibold text-text block">Select Device View:</span>
            <div className="flex flex-wrap gap-3">
                {['Mobile', 'Tablet', 'Desktop'].map(device => {
                    if (!flow.designs[device]) return null
                    
                    const Icon = device === 'Mobile' ? Smartphone : device === 'Tablet' ? Tablet : Monitor
                    const isActive = activeDevice === device
                    
                    return (
                        <button
                            key={device}
                            onClick={() => setActiveDevice(device)}
                            className={`flex items-center gap-2 px-5 py-3 rounded-xl transition-all duration-300 font-medium ${
                                isActive 
                                ? 'bg-text text-background shadow-lg scale-105' 
                                : 'bg-surface border border-border text-muted hover:border-accent/50 hover:text-text'
                            }`}
                        >
                            <Icon size={18} />
                            {device}
                        </button>
                    )
                })}
            </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
             {currentDesign.tools.map((tool, i) => (
                 <Badge key={i} variant="soft" size="sm">
                     {tool}
                 </Badge>
             ))}
        </div>
      </motion.div>

      {/* Image Showcase */}
      <motion.div 
        className="flex-1 w-full flex justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="relative group max-w-full">
            {/* Decorative Background Element */}
            <div className={`absolute -inset-4 md:-inset-8 bg-gradient-to-br ${
                activeDevice === 'Mobile' ? 'from-blue-500/10' : 
                activeDevice === 'Tablet' ? 'from-green-500/10' : 'from-purple-500/10'
            } to-transparent rounded-3xl blur-2xl -z-10 transition-colors duration-500`} />

            <AnimatePresence mode="wait">
              {activeDevice === 'Mobile' ? (
                <motion.div
                  key="mobile-frame"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="relative mx-auto w-[280px] sm:w-[320px]"
                >
                  {/* Mobile Frame */}
                  <div className="relative bg-gray-900 rounded-[3rem] shadow-xl border-4 border-gray-800 overflow-hidden aspect-[9/19.5]">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-black rounded-b-xl z-20" />
                    
                    {/* Content */}
                    <div className="w-full h-full bg-white overflow-hidden relative group-hover:cursor-pointer" onClick={() => window.open(currentDesign.image, '_blank')}>
                      <LazyImage 
                          src={currentDesign.image}
                          alt={`${flow.name} - Mobile View`}
                          className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-bold shadow-sm">View Full</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

              ) : activeDevice === 'Tablet' ? (
                <motion.div
                  key="tablet-frame"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="relative mx-auto w-[90%] max-w-[520px]"
                >
                  {/* Tablet Frame - Sleek Modern Look */}
                  <div className="relative bg-[#121212] rounded-[24px] p-[12px] shadow-2xl aspect-[4/3] ring-1 ring-white/10">
                    {/* Inner Bezel/Border */}
                    <div className="w-full h-full bg-black rounded-[14px] overflow-hidden relative group-hover:cursor-pointer ring-1 ring-black" onClick={() => window.open(currentDesign.image, '_blank')}>
                      <LazyImage 
                          src={currentDesign.image}
                          alt={`${flow.name} - Tablet View`}
                          className="w-full h-full object-cover object-top"
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-bold shadow-sm">View Full</div>
                      </div>
                    </div>
                    
                    {/* Subtle Camera Dot in Bezel (Top Center for Landscape) */}
                    <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#333]" />
                    
                    {/* Side Button Indicators (Subtle) */}
                    <div className="absolute -right-[2px] top-12 w-[2px] h-8 bg-gray-600 rounded-r-sm opacity-50" />
                    <div className="absolute -right-[2px] top-24 w-[2px] h-8 bg-gray-600 rounded-r-sm opacity-50" />
                  </div>
                </motion.div>

              ) : (
                <motion.div
                  key="desktop-frame"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full"
                >
                  {/* Desktop Frame */}
                  <div className="relative bg-surface border border-border rounded-xl shadow-2xl overflow-hidden">
                    {/* Browser Header */}
                    <div className="h-8 bg-surface-dark border-b border-border flex items-center px-4 gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                        </div>
                        <div className="mx-auto text-xs text-muted font-mono opacity-50 truncate max-w-[200px]">
                            owencotter.dev/banking-app
                        </div>
                    </div>

                    <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden group-hover:cursor-pointer" onClick={() => window.open(currentDesign.image, '_blank')}>
                        <LazyImage 
                            src={currentDesign.image}
                            alt={`${flow.name} - Desktop View`}
                            className="w-full h-full object-cover object-top"
                        />
                        {/* Zoom Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <ExternalLink size={14} />
                                View Full Image
                            </div>
                        </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Decorative floating elements relative to device */}
             <motion.div 
                className="absolute -bottom-6 -right-6 bg-surface border border-border p-4 rounded-xl shadow-lg hidden md:block z-20"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
             >
                <div className="flex items-center gap-3">
                   <div className={`p-2 rounded-lg ${
                       activeDevice === 'Mobile' ? 'bg-blue-100 text-blue-600' :
                       activeDevice === 'Tablet' ? 'bg-green-100 text-green-600' : 'bg-purple-100 text-purple-600'
                   }`}>
                       {activeDevice === 'Mobile' ? <Smartphone size={20} /> : 
                        activeDevice === 'Tablet' ? <Tablet size={20} /> : <Monitor size={20} />}
                   </div>
                   <div>
                       <div className="text-xs text-muted uppercase font-bold">Platform</div>
                       <div className="font-bold text-text">{activeDevice} View</div>
                   </div>
                </div>
             </motion.div>
        </div>
      </motion.div>

    </div>
  )
}

export default UIDesigns
