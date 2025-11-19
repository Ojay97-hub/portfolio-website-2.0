import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github } from '../lib/icons'
import Section from '../components/Section'
import Badge from '../components/Badge'
import LazyImage from '../components/LazyImage'
import { projects } from '../data/profile'
import { getResponsiveImageProps } from '../lib/imageUtils'

const FeaturedProjects = () => {
  const featuredProjects = projects.filter(project => project.featured)
  const [currentIndex, setCurrentIndex] = useState(0)

  if (featuredProjects.length === 0) return null

  const currentProject = featuredProjects[currentIndex]

  return (
    <Section
      id="featured-projects"
      title="Featured Projects"
      description="Showcase of my most significant development work."
      className="bg-background relative overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 min-h-[600px]">
        {/* Project Navigation List */}
        <div className="w-full lg:w-1/3 flex flex-col gap-3">
          {featuredProjects.map((project, index) => (
            <button
              key={project.title}
              onClick={() => setCurrentIndex(index)}
              className={`group text-left p-6 rounded-2xl transition-all duration-300 border relative overflow-hidden ${
                index === currentIndex
                  ? 'bg-surface border-accent/50 shadow-lg'
                  : 'bg-transparent border-transparent hover:bg-surface/30'
              }`}
            >
              {/* Active Indicator */}
              {index === currentIndex && (
                <motion.div
                  layoutId="activeProject"
                  className="absolute left-0 top-0 bottom-0 w-1 bg-accent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
              
              <div className="relative z-10 pl-3">
                <h3 className={`text-xl font-bold mb-2 transition-colors ${
                  index === currentIndex ? 'text-accent' : 'text-text group-hover:text-text'
                }`}>
                  {project.title}
                </h3>
                <p className={`text-sm line-clamp-2 transition-colors ${
                  index === currentIndex ? 'text-text/80' : 'text-muted group-hover:text-text/60'
                }`}>
                  {project.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Project Display Area */}
        <div className="w-full lg:w-2/3 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="h-full"
            >
              <div className="bg-surface/20 border border-border rounded-3xl overflow-hidden p-2 md:p-3 h-full flex flex-col backdrop-blur-sm">
                {/* Image Container */}
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-surface shadow-inner">
                  {currentProject.image ? (
                    <LazyImage
                      {...getResponsiveImageProps(currentProject.image, 'featured')}
                      alt={currentProject.title}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-5xl">
                      🚀
                    </div>
                  )}
                  
                  {/* Floating Type Badge */}
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-text border border-border/50 shadow-lg">
                    {currentProject.projectType}
                  </div>
                </div>
                
                {/* Content Area */}
                <div className="p-4 md:p-6 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {currentProject.technologies.map(tech => (
                      <Badge key={tech} variant="outline" className="bg-surface/50 hover:bg-accent/10 transition-colors cursor-default">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-muted text-lg leading-relaxed">
                      {currentProject.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-border/50">
                    {currentProject.liveUrl && currentProject.liveUrl !== '#' && (
                      <a 
                        href={currentProject.liveUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-background rounded-xl font-bold hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-accent/20"
                      >
                        <ExternalLink size={20} /> View Live Site
                      </a>
                    )}
                    {currentProject.githubUrl && (
                      <a 
                        href={currentProject.githubUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-border text-text rounded-xl font-medium hover:bg-surface hover:border-text/20 active:scale-95 transition-all"
                      >
                        <Github size={20} /> View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  )
}

export default FeaturedProjects
