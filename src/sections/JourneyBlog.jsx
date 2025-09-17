import { motion } from 'framer-motion'
import Section from '../components/Section'
import Card from '../components/Card'
import Badge from '../components/Badge'
import Icons from '../lib/icons'

const timeline = [
  {
    period: 'Before 2020',
    title: 'Events Management Roots',
    description:
      'Spent years curating conferences, festivals, and brand activations—coordinating suppliers, leading teams, and crafting memorable stories for attendees.',
    icon: 'Building'
  },
  {
    period: '2020',
    title: 'When the World Paused',
    description:
      'The pandemic halted the events industry overnight. That sudden stillness made space for reflection and a desire to build things that could thrive online.',
    icon: 'AlertCircle'
  },
  {
    period: '2021',
    title: 'Travel & Digital Nomad Discovery',
    description:
      'From Lisbon co-working hubs to cafés in Chiang Mai and Mexico City, meeting remote creators showed me a lifestyle where curiosity and technology power work.',
    icon: 'Globe'
  },
  {
    period: '2022',
    title: 'Code Institute Journey Begins',
    description:
      'I enrolled in Code Institute to transform curiosity into capability—immersing myself in HTML, CSS, JavaScript, Python, and the logic behind modern web apps.',
    icon: 'BookOpen'
  },
  {
    period: '2023',
    title: 'Balancing Life & Learning',
    description:
      'Living back at home with my parents, I funded my studies with 4:30am shifts at M&S, trading commutes for lectures and rewriting routines around lectures and pair programming.',
    icon: 'Coffee'
  },
  {
    period: 'Now',
    title: 'Designing a Remote-First Career',
    description:
      'Blending hospitality instincts with clean code to build experiences that connect people—this time in pixels. The digital nomad dream feels tangible and purpose-driven.',
    icon: 'Target'
  }
]

const transferableSkills = [
  'Experience design mindset',
  'Logistics & stakeholder choreography',
  'Global perspective from slow travel',
  'Tenacity from early starts and late-night study',
  'Community building across disciplines'
]

const dailyRhythms = [
  {
    title: 'Shift-Study Stack',
    description:
      'On workdays I clocked in before sunrise, studied after lunch, and coded deep into the evening—proof that consistency beats perfect conditions.'
  },
  {
    title: 'Home Support Network',
    description:
      'Living with my parents let me re-invest time into mastering fundamentals while keeping family values and humility at the center of my progress.'
  },
  {
    title: 'Nomad-Inspired Learning',
    description:
      'Virtual meetups with the communities I met abroad kept the travel spark alive and pushed me to build portfolio pieces ready for remote collaboration.'
  }
]

const JourneyBlog = () => {
  const SparklesIcon = Icons.Sparkles

  return (
    <Section
      id="journey"
      title="From Events Stages to Engineering Sprints"
      description="A reflective blog on the pivots, places, and people that transformed my career into a remote-friendly developer journey."
      titleAlign="center"
      className="bg-surface/30"
    >
      <div className="grid lg:grid-cols-[2fr,1fr] gap-12 items-start">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="space-y-6 text-lg text-muted leading-relaxed">
            <p>
              Before I ever opened a code editor, I was backstage orchestrating events—aligning suppliers, calming speakers, and choreographing
              unforgettable experiences for audiences. Events management taught me to anticipate needs, communicate clearly, and engineer the kind of
              atmosphere that makes people feel welcome.
            </p>
            <p>
              When COVID-19 hit, that world fell silent. What felt like loss quickly became a chance to pause and ask bigger questions about impact.
              I realised I wanted to build experiences that were resilient no matter what was happening outside of a venue.
            </p>
            <p>
              So I packed a bag. Travelling through European and Asian hubs introduced me to digital nomads turning curiosity into career freedom.
              Conversations in co-working spaces and hostel rooftops made me see tech as a toolkit for designing the kind of flexible, borderless life I craved.
            </p>
            <p>
              Back home in the UK, I channelled that inspiration into action with Code Institute. Lectures, hackathons, and late-night debugging sessions became
              my new tour schedule. The discipline from years of live events helped me ship projects under pressure and celebrate every iteration.
            </p>
            <p>
              None of it happened in isolation. I moved back in with my parents, setting up a study station next to the family kitchen. To keep momentum,
              I worked the early shift at M&S—starting before dawn, clocking off as others grabbed lunch, and opening my laptop for another round of learning.
              That routine cemented a work ethic that now powers every pull request I raise.
            </p>
            <p>
              Today, I am building software with the same intention I once poured into physical spaces: human-centred, story-led, and ready to travel the globe.
              The journey from events to engineering isn’t a sharp left turn—it’s an evolution of how I host people, now through beautifully functional interfaces.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center">
                <SparklesIcon size={20} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text">Key Moments Along the Way</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {timeline.map((entry, index) => {
                const Icon = Icons[entry.icon] || Icons.Circle

                return (
                  <motion.div
                    key={entry.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Card hover={false} className="h-full">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-accent/15 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <Icon size={22} className="text-accent" />
                        </div>
                        <div className="space-y-2">
                          <p className="text-xs uppercase tracking-wide text-accent font-semibold">{entry.period}</p>
                          <h4 className="text-lg font-semibold text-text">{entry.title}</h4>
                          <p className="text-sm text-muted leading-relaxed">{entry.description}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.article>

        <motion.aside
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-none">
            <div className="flex items-start gap-3">
              <Icons.Quote size={24} className="text-accent" />
              <div>
                <p className="text-sm uppercase tracking-wide text-accent font-semibold">The Why</p>
                <h3 className="text-xl font-semibold text-text mb-3">Hospitality Meets High-Tech</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Whether I am hosting a live event or shipping a web app, my mission is the same: design thoughtful experiences that make people feel seen.
                  Technology is now the stage, but empathy remains the spotlight.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-text mb-3">Transferable Superpowers</h3>
            <div className="flex flex-wrap gap-2">
              {transferableSkills.map((skill) => (
                <Badge key={skill} variant="accent" size="sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="space-y-4">
            <h3 className="text-lg font-semibold text-text">What the Daily Grind Looked Like</h3>
            <div className="space-y-4">
              {dailyRhythms.map((item) => (
                <div key={item.title}>
                  <p className="text-sm font-semibold text-text">{item.title}</p>
                  <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.aside>
      </div>
    </Section>
  )
}

export default JourneyBlog
