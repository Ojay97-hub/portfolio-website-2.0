import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Tablet, Smartphone, Monitor } from '../lib/icons'
import Section from '../components/Section'
import Card from '../components/Card'
import Badge from '../components/Badge'
import Button from '../components/Button'
import LazyImage from '../components/LazyImage'
import { uiDesigns } from '../data/profile'

const UIDesigns = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  
  const categories = ['All', 'Mobile', 'Tablet', 'Desktop']
  const figmaUrl = 'https://www.figma.com/design/t0se78v9LXEty073PK3dKa/Owen_Cotter_UI_assignment_UXDI?node-id=1616-227&t=9HRmsyrL9al3LMFq-1'
  
  const filteredDesigns = activeFilter === 'All' 
    ? uiDesigns 
    : uiDesigns.filter(design => design.category === activeFilter)

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Mobile': return Smartphone
      case 'Tablet': return Tablet
      case 'Desktop': return Monitor
      default: return Monitor
    }
  }

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Mobile': return 'bg-blue-100 text-blue-600'
      case 'Tablet': return 'bg-green-100 text-green-600' 
      case 'Desktop': return 'bg-purple-100 text-purple-600'
      default: return 'bg-accent/10 text-accent'
    }
  }

  return (
    <Section
      id="ui-designs"
      title="UI/UX Design Showcase"
      description="A comprehensive banking application design featuring 9 responsive screens across mobile, tablet, and desktop platforms."
      titleAlign="center"
      className="bg-background"
    >
      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-4 mb-16"
      >
        {categories.map((category) => {
          const Icon = getCategoryIcon(category)
          return (
            <Button
              key={category}
              variant={activeFilter === category ? 'primary' : 'outline'}
              size="md"
              onClick={() => setActiveFilter(category)}
              className={`flex items-center gap-2 ${activeFilter !== category ? 'bg-surface border-gray-200 shadow-sm hover:bg-gray-50' : ''}`}
            >
              {category !== 'All' && <Icon size={16} />}
              {category}
            </Button>
          )
        })}
        
        {/* Figma Button */}
        <Button
          variant="outline"
          size="md"
          onClick={() => window.open(figmaUrl, '_blank', 'noopener,noreferrer')}
          className="flex items-center gap-2 border-accent text-accent hover:bg-accent/5 bg-surface shadow-sm"
        >
          <ExternalLink size={16} />
          View Designs in Figma
        </Button>
      </motion.div>

      {/* Design Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredDesigns.map((design, index) => {
          const CategoryIcon = getCategoryIcon(design.category)
          
          return (
            <motion.div
              key={`${design.title}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              layout
            >
              <Card className="h-full flex flex-col p-8 shadow-lg border-gray-200/80 hover:shadow-xl hover:border-accent/30 transition-all duration-300 group bg-surface">
                {/* Design Image Container */}
                <div className="relative mb-8 overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 shadow-inner group-hover:shadow-none transition-all duration-300">
                  <div className="w-full aspect-[4/3] relative">
                    <LazyImage
                      src={design.image}
                      alt={`${design.title} design preview`}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Floating Category Badge */}
                    <div className="absolute top-4 right-4">
                      <div className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm backdrop-blur-md bg-white/90 ${
                         design.category === 'Mobile' ? 'text-blue-600' : 
                         design.category === 'Tablet' ? 'text-green-600' : 'text-purple-600'
                      }`}>
                        <CategoryIcon size={14} />
                        {design.category}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Design Info */}
                <div className="flex-1 flex flex-col gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-text mb-2 group-hover:text-primary transition-colors">
                      {design.title}
                    </h3>
                    <p className="text-sm font-medium text-accent uppercase tracking-wide mb-3">
                      {design.type}
                    </p>
                    <p className="text-muted leading-relaxed">
                      {design.description}
                    </p>
                  </div>

                  {/* Tools/Technologies */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {design.tools.map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="outline" size="sm" className="bg-gray-50 border-gray-200 text-muted">
                        {tool}
                      </Badge>
                    ))}
                  </div>

                  {/* View Design Button */}
                  <Button
                    variant="outline"
                    size="md"
                    className="w-full mt-6 border-gray-200 hover:border-accent hover:text-accent group-hover:bg-accent/5 transition-all"
                    onClick={() => {
                      window.open(design.image, '_blank', 'noopener,noreferrer')
                    }}
                  >
                    <ExternalLink size={18} className="mr-2" />
                    View Full Design
                  </Button>
                </div>
              </Card>
            </motion.div>
          )
        })}
      </div>

      {/* Design Statistics */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
      >
        <div className="p-6 rounded-2xl bg-surface border border-gray-200 shadow-sm">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
              <Smartphone className="text-blue-600" size={28} />
            </div>
          </div>
          <div className="text-3xl font-bold text-text mb-1">3</div>
          <div className="text-muted font-medium">Mobile Designs</div>
        </div>
        <div className="p-6 rounded-2xl bg-surface border border-gray-200 shadow-sm">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center">
              <Tablet className="text-green-600" size={28} />
            </div>
          </div>
          <div className="text-3xl font-bold text-text mb-1">3</div>
          <div className="text-muted font-medium">Tablet Designs</div>
        </div>
        <div className="p-6 rounded-2xl bg-surface border border-gray-200 shadow-sm">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center">
              <Monitor className="text-purple-600" size={28} />
            </div>
          </div>
          <div className="text-3xl font-bold text-text mb-1">3</div>
          <div className="text-muted font-medium">Desktop Designs</div>
        </div>
      </motion.div>

      {/* Call to action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <div className="max-w-3xl mx-auto bg-surface border border-gray-200 rounded-3xl p-10 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
          
          <h3 className="text-3xl font-bold text-text mb-4">
            Ready to see the full process?
          </h3>
          <p className="text-muted mb-8 text-lg max-w-xl mx-auto">
            From user research and wireframing to high-fidelity prototyping. Let's walk through the design decisions behind this banking application.
          </p>
          <Button
            variant="primary"
            size="lg"
            className="shadow-lg shadow-accent/20"
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discuss My Design Process
          </Button>
        </div>
      </motion.div>
    </Section>
  )
}

export default UIDesigns
