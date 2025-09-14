import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Tablet, Smartphone, Monitor } from 'lucide-react'
import Section from '../components/Section'
import Card from '../components/Card'
import Badge from '../components/Badge'
import Button from '../components/Button'
import { uiDesigns } from '../data/profile'

const UIDesigns = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  
  const categories = ['All', 'Mobile', 'Tablet', 'Desktop']
  
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
      case 'Mobile': return 'bg-blue-500/20 text-blue-400'
      case 'Tablet': return 'bg-green-500/20 text-green-400' 
      case 'Desktop': return 'bg-purple-500/20 text-purple-400'
      default: return 'bg-accent/20 text-accent'
    }
  }

  return (
    <Section
      id="ui-designs"
      title="UI/UX Design Showcase - Work in Progress"
      description="A comprehensive banking application design featuring 9 responsive screens across mobile, tablet, and desktop platforms. Created for a fictional challenger banking brand emphasizing Clear, Playful, and Trustworthy design principles."
      titleAlign="center"
    >
      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {categories.map((category) => {
          const Icon = getCategoryIcon(category)
          return (
            <Button
              key={category}
              variant={activeFilter === category ? 'primary' : 'outline'}
              size="md"
              onClick={() => setActiveFilter(category)}
              className="flex items-center gap-2"
            >
              {category !== 'All' && <Icon size={16} />}
              {category}
            </Button>
          )
        })}
      </motion.div>

      {/* Design Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <Card className="h-full flex flex-col">
                {/* Design Image */}
                <div className="relative mb-4 overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-accent/10">
                  <div className="w-full h-48 flex flex-col items-center justify-center relative">
                    <CategoryIcon size={48} className="text-accent/30 mb-2" />
                    <p className="text-muted text-sm mb-1">Design Preview</p>
                    {design.title.includes('Work in Progress') && (
                      <div className="absolute top-2 right-2 bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full text-xs font-medium">
                        WIP
                      </div>
                    )}
                    {design.title.includes('Banking') && (
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-green-500/10 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-2xl mb-2">🏦</div>
                          <p className="text-xs text-muted">Banking App Design</p>
                        </div>
                      </div>
                    )}
                    {design.title.includes('Portfolio') && (
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-2xl mb-2">💼</div>
                          <p className="text-xs text-muted">Portfolio Design</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 right-3">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getCategoryColor(design.category)}`}>
                      <CategoryIcon size={12} />
                      {design.category}
                    </div>
                  </div>
                </div>

                {/* Design Info */}
                <div className="flex-1 flex flex-col">
                  <div className="mb-3">
                    <h3 className="text-xl font-semibold text-text mb-2">
                      {design.title}
                    </h3>
                    <p className="text-sm text-accent font-medium mb-2">
                      {design.type}
                    </p>
                    <p className="text-muted text-sm flex-1">
                      {design.description}
                    </p>
                  </div>

                  {/* Tools/Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {design.tools.map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="default" size="sm">
                        {tool}
                      </Badge>
                    ))}
                  </div>

                  {/* View Design Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => {
                      // This would open a larger view or external link to the design
                      console.log(`View ${design.title} design`)
                    }}
                    aria-label={`View ${design.title} design`}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Design
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
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
      >
        <div>
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center">
              <Smartphone className="text-blue-400" size={24} />
            </div>
          </div>
          <div className="text-2xl font-bold text-text mb-1">3</div>
          <div className="text-muted text-sm">Mobile Designs</div>
        </div>
        <div>
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center">
              <Tablet className="text-green-400" size={24} />
            </div>
          </div>
          <div className="text-2xl font-bold text-text mb-1">3</div>
          <div className="text-muted text-sm">Tablet Designs</div>
        </div>
        <div>
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center">
              <Monitor className="text-purple-400" size={24} />
            </div>
          </div>
          <div className="text-2xl font-bold text-text mb-1">3</div>
          <div className="text-muted text-sm">Desktop Designs</div>
        </div>
      </motion.div>

      {/* Call to action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <Card className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-text mb-4">
            Interested in My Design Process?
          </h3>
          <p className="text-muted mb-6">
            This banking application demonstrates my ability to create user-centered designs that balance 
            trustworthiness with modern aesthetics. Each screen is thoughtfully crafted to work seamlessly 
            across mobile, tablet, and desktop platforms while maintaining the brand's core values of being 
            Clear, Playful, and Trustworthy.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Discuss Design
          </Button>
        </Card>
      </motion.div>
    </Section>
  )
}

export default UIDesigns
