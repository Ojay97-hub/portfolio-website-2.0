import { motion } from 'framer-motion'
import { User, MapPin, Coffee, Code, BookOpen } from '../lib/icons'
import Section from '../components/Section'
import Badge from '../components/Badge'
import Card from '../components/Card'
import LazyImage from '../components/LazyImage'
import { profile, skills } from '../data/profile'
import { getResponsiveImageProps } from '../lib/imageUtils'
import Button from '../components/Button'

const About = () => {
  const stats = [
    { icon: Code, label: 'Projects Built', value: '5' },
    { icon: Coffee, label: 'Learning Hours', value: '500+' },
    { icon: User, label: 'Hackathon Place', value: '3rd' },
  ]

  const journeyUrl = `${import.meta.env.BASE_URL}journey.html`

  return (
    <Section
      id="about"
      title="About Me"
      description="Get to know more about my background, skills, and what drives my passion for creating exceptional digital experiences."
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-muted">
              <User size={20} />
              <span className="font-medium">About Owen</span>
            </div>
            
            <div className="space-y-4 text-text">
              <p>
                I'm a recent Code Institute graduate and passionate junior developer seeking my first role in the tech industry. 
                Through my comprehensive bootcamp training, I've built a strong foundation in modern web technologies 
                and gained hands-on experience with 5 diverse portfolio projects.
              </p>
              
              <p>
                My journey includes developing everything from interactive JavaScript games to a full-stack e-commerce 
                platform with Django and Stripe integration. I also earned 3rd place in a hackathon, demonstrating 
                my ability to collaborate effectively under pressure and deliver results quickly.
              </p>
              
              <p>
                Combined with my UI design certification, I bring both technical skills and design sensibility 
                to create well-rounded web solutions. I'm eager to contribute to a team and continue learning 
                in a professional development environment.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-6 bg-surface/60 border border-border rounded-2xl shadow-lg shadow-background/30"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                <BookOpen size={20} className="text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text">Explore the Journey Blog</h3>
                <p className="text-sm text-muted">
                  Dive deeper into how events management, world travel, and Code Institute shaped my path into remote-friendly software development.
                </p>
              </div>
            </div>
            <Button
              size="sm"
              onClick={() => {
                window.location.href = journeyUrl
              }}
            >
              Read the full story
            </Button>
          </motion.div>

          {/* Location */}
          <div className="flex items-center gap-2 text-muted">
            <MapPin size={20} />
            <span>Based in {profile.location}</span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2">
                    <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center">
                      <Icon size={20} className="text-accent" />
                    </div>
                  </div>
                  <div className="text-xl font-bold text-text mb-1">{stat.value}</div>
                  <div className="text-xs text-muted">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Skills & Photo */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Profile Image */}
          <Card className="p-8">
            <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
              <LazyImage
                {...getResponsiveImageProps('/owen-profile.webp', 'profile')}
                alt="Owen Cotter with his dogs"
                className="w-full h-full rounded-2xl"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-text mb-2">{profile.name}</h3>
              <p className="text-muted">{profile.title}</p>
            </div>
          </Card>

          {/* Skills */}
          <Card>
            <h3 className="text-lg font-semibold text-text mb-4">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: Math.random() * 4 - 2, // Subtle random tilt
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }} // Faster stagger
                  viewport={{ once: true }}
                >
                  <Badge 
                    variant="default" 
                    className="cursor-default hover:bg-accent hover:text-background hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 border border-transparent hover:border-accent/30 select-none"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  )
}

export default About
