import { motion } from 'framer-motion'
import { GraduationCap, Trophy, Code, Award, Calendar, Users } from 'lucide-react'
import Section from '../components/Section'
import Card from '../components/Card'
import Badge from '../components/Badge'
import { education } from '../data/profile'

const Education = () => {
  return (
    <Section
      id="education"
      title="Education & Learning Journey"
      description="Recent graduate with hands-on experience from comprehensive training programs and real-world projects."
      titleAlign="center"
      className="bg-surface/30"
    >
      {/* Education Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {education.map((edu, index) => (
          <motion.div
            key={edu.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <div className="mb-4 flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={24} className="text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-text mb-1">
                    {edu.title}
                  </h3>
                  <p className="text-accent font-medium mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{edu.completion}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award size={14} />
                      <span>{edu.credentials}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-muted mb-4">
                {edu.description}
              </p>

              {/* Projects & Skills */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-text mb-2 flex items-center gap-2">
                    <Code size={14} />
                    {edu.projects}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="default" size="sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Achievements & Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold text-text mb-8 text-center">
          Achievements & Highlights
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center">
                <Trophy size={28} className="text-accent" />
              </div>
            </div>
            <h4 className="text-lg font-semibold text-text mb-2">
              Hackathon Achievement
            </h4>
            <p className="text-muted text-sm mb-2">
              3rd Place - SheCanGitIt Hackathon
            </p>
            <p className="text-muted text-xs">
              Team collaboration and rapid development skills
            </p>
          </Card>

          <Card className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center">
                <Code size={28} className="text-accent" />
              </div>
            </div>
            <h4 className="text-lg font-semibold text-text mb-2">
              Portfolio Projects
            </h4>
            <p className="text-muted text-sm mb-2">
              6 Completed Projects
            </p>
            <p className="text-muted text-xs">
              From basic HTML to full-stack e-commerce
            </p>
          </Card>

          <Card className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center">
                <Users size={28} className="text-accent" />
              </div>
            </div>
            <h4 className="text-lg font-semibold text-text mb-2">
              Collaboration Ready
            </h4>
            <p className="text-muted text-sm mb-2">
              Team-Based Learning
            </p>
            <p className="text-muted text-xs">
              Experience with Git, GitHub, and agile methodologies
            </p>
          </Card>
        </div>
      </motion.div>

      {/* Learning Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Card className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-text mb-4">
            Continuous Learning Mindset
          </h3>
          <p className="text-muted mb-6 text-balance">
            As a recent graduate, I bring fresh knowledge of modern development practices, 
            enthusiasm for learning new technologies, and a strong foundation built through 
            hands-on project experience. I'm excited to contribute to a team while continuing 
            to grow as a developer.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Code Institute Graduate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>UI/UX Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>React Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Hackathon Participant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>First Role Ready</span>
            </div>
          </div>
        </Card>
      </motion.div>
    </Section>
  )
}

export default Education
