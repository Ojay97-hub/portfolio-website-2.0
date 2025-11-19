import { motion } from 'framer-motion'
import Icons from '../lib/icons'
import Section from '../components/Section'
import Badge from '../components/Badge'
import { education, qualifications } from '../data/profile'

const Education = () => {
  return (
    <Section
      id="education"
      title="Education & Learning Journey"
      description="A timeline of my technical growth and academic achievements."
      titleAlign="center"
      className="bg-surface/20 relative"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-5xl mx-auto">
        {/* Timeline Container */}
        <div className="relative space-y-12 md:space-y-20 pl-8 md:pl-0 mb-24">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />

          {education.map((edu, index) => {
             const isEven = index % 2 === 0
             
             return (
               <motion.div
                 key={edu.title}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: index * 0.1 }}
                 viewport={{ once: true }}
                 className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start ${isEven ? 'md:flex-row-reverse' : ''}`}
               >
                 {/* Timeline Node */}
                 <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-background border-2 border-accent rounded-full transform -translate-x-[calc(50%-0.5px)] md:-translate-x-1/2 mt-6 z-10 shadow-[0_0_0_4px_rgba(0,0,0,1)]" />
                 
                 {/* Content Side */}
                 <div className="w-full md:w-1/2 md:px-12 pl-8">
                    <div className="bg-background/50 backdrop-blur-sm border border-border/50 p-6 rounded-2xl hover:border-accent/30 transition-colors shadow-sm">
                      {/* Header */}
                      <div className="flex flex-col gap-1 mb-4">
                        <span className="text-accent text-sm font-bold tracking-wider uppercase">
                          {edu.completion}
                        </span>
                        <h3 className="text-xl font-bold text-text">
                          {edu.title}
                        </h3>
                        <div className="text-muted font-medium flex items-center gap-2">
                          <Icons.Building size={14} />
                          {edu.institution}
                        </div>
                      </div>

                      <p className="text-muted text-sm leading-relaxed mb-4">
                        {edu.description}
                      </p>

                      {/* Credentials Tag */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-border text-xs font-medium text-text/80 mb-4">
                         <Icons.Award size={14} className="text-accent" />
                         {edu.credentials}
                      </div>

                      {/* Skills */}
                      <div>
                        <div className="text-xs font-semibold text-text/60 mb-2 uppercase">Key Skills</div>
                        <div className="flex flex-wrap gap-2">
                          {edu.skills.slice(0, 4).map((skill, i) => (
                            <Badge key={i} variant="outline" size="sm" className="bg-transparent border-border/50">
                              {skill}
                            </Badge>
                          ))}
                          {edu.skills.length > 4 && (
                             <span className="text-xs text-muted self-center">+{edu.skills.length - 4} more</span>
                          )}
                        </div>
                      </div>
                    </div>
                 </div>

                 {/* Empty Side for Desktop Layout Balance */}
                 <div className="hidden md:block md:w-1/2" />
               </motion.div>
             )
          })}
        </div>

        {/* Bottom Section: Qualifications & Stats - Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
           {/* Academic Column */}
           <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5 }}
             viewport={{ once: true }}
           >
              <h3 className="text-xl font-bold text-text mb-6 flex items-center gap-3">
                <Icons.GraduationCap className="text-accent" />
                Academic Qualifications
              </h3>
              <div className="space-y-4">
                {qualifications.map((qual) => (
                   <div key={qual.title} className="group flex items-start gap-4 p-4 rounded-xl bg-surface/10 hover:bg-surface/30 transition-colors border border-transparent hover:border-border/50">
                      <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center flex-shrink-0 text-accent group-hover:scale-110 transition-transform">
                         <Icons.Award size={20} />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-text">{qual.title}</h4>
                        <p className="text-sm text-accent mb-1">{qual.institution}</p>
                        <p className="text-xs text-muted leading-relaxed">{qual.description}</p>
                      </div>
                   </div>
                ))}
              </div>
           </motion.div>

           {/* Highlights Column */}
           <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             viewport={{ once: true }}
           >
              <h3 className="text-xl font-bold text-text mb-6 flex items-center gap-3">
                <Icons.Star className="text-accent" />
                Key Highlights
              </h3>
              <div className="grid grid-cols-2 gap-4">
                 <div className="col-span-2 p-5 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 relative overflow-hidden">
                    <div className="absolute right-0 top-0 p-3 opacity-10">
                       <Icons.Trophy size={60} />
                    </div>
                    <div className="relative z-10">
                       <div className="text-2xl font-bold text-accent mb-1">3rd Place</div>
                       <div className="text-sm font-medium text-text mb-2">SheCanGitIt Hackathon</div>
                       <p className="text-xs text-muted">Demonstrated rapid prototyping & team collaboration skills.</p>
                    </div>
                 </div>

                 <div className="p-5 rounded-2xl bg-surface/20 border border-border/50 flex flex-col justify-center items-center text-center gap-2">
                    <Icons.Code size={24} className="text-accent" />
                    <div className="text-2xl font-bold text-text">6+</div>
                    <div className="text-xs text-muted">Portfolio Projects</div>
                 </div>

                 <div className="p-5 rounded-2xl bg-surface/20 border border-border/50 flex flex-col justify-center items-center text-center gap-2">
                    <Icons.CheckCircle size={24} className="text-accent" />
                    <div className="text-lg font-bold text-text">Ready</div>
                    <div className="text-xs text-muted">For First Role</div>
                 </div>
              </div>
           </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default Education
