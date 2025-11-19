import { motion } from 'framer-motion'
import { 
  Code, 
  Server, 
  Palette, 
  ArrowRight, 
  ExternalLink,
  Database,
  Gamepad2, 
  Beer, 
  Ghost, 
  Layers, 
  Coffee,
  Calendar,
  ShoppingCart
} from '../lib/icons'

import Section from '../components/Section'
import { projects } from '../data/profile'
import { scrollToSection } from '../lib/utils'

const Services = () => {
  // Find projects
  const p1 = projects.find(p => p.title.includes('(P1)')) // Winchester
  const p2 = projects.find(p => p.title.includes('(P2)')) // Dino Quiz
  const p3 = projects.find(p => p.title.includes('(P3)')) // Blackjack
  const p4 = projects.find(p => p.title.includes('(P4)')) // Eventory
  const p5 = projects.find(p => p.title.includes('(P5)')) // Jungle Peaks

  // Assign icons to projects
  const projectIcons = {
    [p1?.title]: Beer,
    [p2?.title]: Ghost,
    [p3?.title]: Gamepad2,
    [p4?.title]: Calendar,
    [p5?.title]: ShoppingCart
  }

  const serviceCategories = [
    {
      title: 'Frontend Development',
      description: 'Modern, responsive websites using HTML, CSS, JavaScript, and React frameworks.',
      icon: Code,
      skills: ['HTML5 & CSS3', 'JavaScript ES6+', 'React', 'Responsive Design'],
      relatedWork: [p1, p2].filter(Boolean),
      workType: 'project'
    },
    {
      title: 'Backend Development',
      description: 'Logic-driven applications with Python and algorithm implementation.',
      icon: Server,
      skills: ['Python', 'Object-Oriented Programming', 'Game Logic', 'Algorithms'],
      relatedWork: [p3].filter(Boolean),
      workType: 'project'
    },
    {
      title: 'Full Stack Development',
      description: 'End-to-end web solutions with Django, databases, and payment integration.',
      icon: Layers,
      skills: ['Django', 'PostgreSQL', 'Stripe', 'Authentication', 'MVC Architecture'],
      relatedWork: [p4, p5].filter(Boolean),
      workType: 'project'
    }
  ]

  // UI Design as a separate full-width card
  const uiDesign = {
    title: 'UI Design',
    description: 'User interface design principles with modern design tools and methodologies.',
    icon: Palette,
    skills: ['Figma', 'Visual Design', 'Wireframing', 'Prototyping', 'Design Systems'],
    workType: 'design'
  }

  return (
    <Section
      id="services"
      title="What I Do"
      description="Specialized services backed by hands-on project experience."
    >
      {/* Grid for Development Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
        {serviceCategories.map((category, index) => {
          const CategoryIcon = category.icon

          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-surface border border-border rounded-3xl p-6 md:p-8 flex flex-col h-full hover:border-accent/50 transition-colors duration-300 group"
            >
              {/* Icon & Title */}
              <div className="mb-6">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 text-accent group-hover:scale-110 transition-transform duration-300">
                  <CategoryIcon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-text mb-2">{category.title}</h3>
                <p className="text-muted text-base leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Skills */}
              <div className="mb-8 flex-grow">
                <h4 className="text-sm font-semibold text-text/80 uppercase tracking-wider mb-3">
                  Core Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-background border border-border text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Related Work */}
              <div className="pt-6 border-t border-border">
                <h4 className="text-sm font-semibold text-text/80 uppercase tracking-wider mb-4 flex items-center justify-between">
                  Featured Work
                  <ArrowRight size={16} className="text-accent" />
                </h4>
                
                <div className="space-y-3">
                  {category.relatedWork.map((project) => {
                    const ProjectIcon = projectIcons[project.title] || Code

                    return (
                      <a
                        key={project.title}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 -mx-2 rounded-xl hover:bg-accent/5 transition-colors group/project"
                      >
                         <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-surface-dark border border-border text-accent">
                            <ProjectIcon size={20} />
                         </div>
                         <div className="flex-grow min-w-0">
                            <div className="font-medium text-text text-sm truncate group-hover/project:text-accent transition-colors">
                              {project.title.split('(')[0].trim()}
                            </div>
                            <div className="text-xs text-muted truncate flex items-center gap-1">
                              View Project <ExternalLink size={10} />
                            </div>
                         </div>
                      </a>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Full Width UI Design Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-surface border border-border rounded-3xl p-6 md:p-8 hover:border-accent/50 transition-colors duration-300 group relative overflow-hidden"
      >
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
             <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 text-accent group-hover:scale-110 transition-transform duration-300">
                <Palette size={28} />
              </div>
              <h3 className="text-2xl font-bold text-text mb-2">{uiDesign.title}</h3>
              <p className="text-muted text-base leading-relaxed mb-6 max-w-2xl">
                {uiDesign.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6 md:mb-0">
                {uiDesign.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-background border border-border text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
          </div>

          <div className="w-full md:w-auto md:min-w-[300px] self-center">
            <button
              onClick={() => scrollToSection('ui-designs')}
              className="w-full group/item flex items-center gap-4 p-4 rounded-2xl bg-background border border-border hover:border-accent/50 transition-all hover:shadow-md text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0 text-purple-500">
                <Palette size={24} />
              </div>
              <div>
                <div className="font-bold text-text text-base group-hover/item:text-accent transition-colors">
                  View Design Portfolio
                </div>
                <div className="text-xs text-muted">
                  Explore Mobile & Web Prototypes
                </div>
              </div>
              <div className="ml-auto">
                 <ArrowRight size={18} className="text-muted group-hover/item:text-accent transition-colors" />
              </div>
            </button>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}

export default Services
