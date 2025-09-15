import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react'
import Section from '../components/Section'
import Card from '../components/Card'
import Badge from '../components/Badge'
import Button from '../components/Button'
import { projects } from '../data/profile'

const FeaturedProjects = () => {
  const featuredProjects = projects.filter(project => project.featured)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || featuredProjects.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProjects.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, featuredProjects.length])

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length)
    setIsAutoPlaying(false)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)
    setIsAutoPlaying(false)
  }

  const goToProject = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  // Touch handlers for swipe functionality
  const handleTouchStart = (e) => {
    setTouchEnd(0) // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe && featuredProjects.length > 0) {
      nextProject()
    }
    if (isRightSwipe && featuredProjects.length > 0) {
      prevProject()
    }
  }

  if (featuredProjects.length === 0) return null

  const currentProject = featuredProjects[currentIndex]

  return (
    <Section
      id="featured-projects"
      title="Featured Projects"
      description="Showcase of my most significant development work, demonstrating full-stack capabilities and problem-solving skills."
      className="bg-surface/30 relative"
    >
      <div className="relative">
        {/* Navigation Arrows - Hidden on Mobile, Visible on Desktop */}
        {featuredProjects.length > 1 && (
          <>
            <button
              onClick={prevProject}
              className="hidden md:flex absolute left-1 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 backdrop-blur-sm border border-border rounded-full items-center justify-center text-text hover:bg-accent/20 hover:border-accent/50 transition-all duration-200 z-50 shadow-lg"
              aria-label="Previous project"
            >
              <ChevronLeft size={30} />
            </button>
            
            <button
              onClick={nextProject}
              className="hidden md:flex absolute right-1 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 backdrop-blur-sm border border-border rounded-full items-center justify-center text-text hover:bg-accent/20 hover:border-accent/50 transition-all duration-200 z-50 shadow-lg"
              aria-label="Next project"
            >
              <ChevronRight size={30} />
            </button>
          </>
        )}
        
        {/* Main Carousel */}
        <div 
          className="relative overflow-hidden rounded-2xl max-w-5xl mx-auto my-12"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full"
            >
              <Card className="p-0 overflow-hidden max-w-5xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-0 min-h-[400px]">
                  {/* Project Image */}
                  <div className="relative h-80 lg:h-[400px] bg-gradient-to-br from-primary/10 to-accent/5 overflow-hidden">
                    {currentProject.image ? (
                      <img
                        src={currentProject.image}
                        alt={`${currentProject.title} preview`}
                        className="w-full h-full object-contain object-center scale-110 hover:scale-115 transition-transform duration-700 p-2"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl mb-4">🚀</div>
                          <p className="text-muted">Project Preview</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Featured Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-accent text-background px-3 py-1.5 text-sm font-medium rounded-full shadow-lg">
                        Featured
                      </div>
                    </div>

                    {/* Project Type Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="bg-background/90 backdrop-blur-sm text-text px-3 py-1.5 text-sm font-medium rounded-full shadow-lg border border-border/50">
                        {currentProject.projectType}
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6 lg:p-8 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-3xl lg:text-4xl font-bold text-text mb-4">
                        {currentProject.title}
                      </h3>
                      
                      <p className="text-lg text-muted mb-6 leading-relaxed">
                        {currentProject.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-8">
                        <h4 className="text-sm font-semibold text-text mb-3 uppercase tracking-wide">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {currentProject.technologies.map((tech, index) => (
                            <Badge key={index} variant="default" size="md">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        {currentProject.liveUrl && currentProject.liveUrl !== '#' && (
                          <a
                            href={currentProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background bg-accent text-background hover:brightness-110 active:brightness-95 px-8 py-4 text-lg rounded-2xl gap-2"
                          >
                            <ExternalLink size={20} />
                            View Live Site
                          </a>
                        )}
                        
                        {currentProject.githubUrl && (
                          <a
                            href={currentProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background border border-border text-text hover:bg-surface active:bg-primary/20 px-8 py-4 text-lg rounded-2xl gap-2"
                          >
                            <Github size={20} />
                            View Code
                          </a>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Dots Navigation */}
        {featuredProjects.length > 1 && (
          <div className="flex justify-center gap-3 mt-8">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-accent scale-125' 
                    : 'bg-border hover:bg-accent/50'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Project Counter */}
        {featuredProjects.length > 1 && (
          <div className="text-center mt-4">
            <span className="text-sm text-muted">
              {currentIndex + 1} of {featuredProjects.length}
            </span>
          </div>
        )}
      </div>

      {/* All Projects Link */}
      {projects.length > featuredProjects.length && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Card className="max-w-md mx-auto">
            <h4 className="text-lg font-semibold text-text mb-3">
              Want to see more?
            </h4>
            <p className="text-muted text-sm mb-4">
              I have {projects.length} total projects showcasing various technologies and skills.
            </p>
            <Button
              variant="outline"
              size="md"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full"
            >
              Get in Touch to Learn More
            </Button>
          </Card>
        </motion.div>
      )}
    </Section>
  )
}

export default FeaturedProjects
