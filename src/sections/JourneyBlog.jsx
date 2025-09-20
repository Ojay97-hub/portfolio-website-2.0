import { motion } from 'framer-motion'
import { useState } from 'react'
import Card from '../components/Card'
import Icons from '../lib/icons'

const timeline = [
  {
    period: '2017–2021',
    title: 'BSc Events Management (1st Class)',
    description: [
      'Built delivery habits: planning, supplier coordination, H&S, marketing, law',
      'Boca Raton placement cut short by COVID-19 → recognised industry fragility',
      'Outcome: 1st class degree; strong organisation and follow-through'
    ],
    icon: 'Building'
  },
  {
    period: '2021–2022',
    title: 'MSc International Events Management (Merit)',
    description: [
      'Focused on experiential marketing, brand/experience transfer, and strategy',
      'Outcome: sharper critical thinking and research; clear written comms'
    ],
    icon: 'BookOpen'
  },
  {
    period: 'Jan–Aug 2023',
    title: 'Travel (LA → Australia → Bali)',
    description: [
      'Saw venue-dependent work was restrictive; inspired by remote/digital-nomad setups',
      'Built strong well-being habits (travel goals, weekly journaling)',
      'Surviving independent travel, experiencing the highs and lows of being on my own',
      'Outcome: ownership, perseverance, and a clear plan for a stable, remote-friendly career'
    ],
    icon: 'Globe'
  },
  {
    period: 'Sep 2023–Aug 2025',
    title: 'M&S (early shifts) + learning rhythm',
    description: [
      '04:30 wake-ups; trying to figure out a way I could turn my vision into a reality',
      'Outcome: proven grit, time management, and consistency under fatigue'
    ],
    icon: 'Coffee'
  },
  {
    period: 'Jan 2024–Feb 2025',
    title: 'Code Institute (Full-Stack)',
    description: [
      'Found my ticket to achieving my vision, fullstack web development',
      'HTML, CSS, JavaScript, Python, Django; e-commerce specialism',
      'Delivered end-to-end features (models, forms, Stripe, validation, error handling)',
      'Outcome: can turn an idea → into a shipped product; works in sprints with user stories'
    ],
    icon: 'Code'
  },
  {
    period: 'May 2025',
    title: 'UI Design course (started)',
    description: [
      'Found I enjoyed the design process and wanted to hone my skills further',
      'Solidifying design systems, mood-boards, layout, typography, branding, colour palettes, accessibility and usability',
      'Outcome: developer first, but with a solid design understanding'
    ],
    icon: 'Palette'
  },
  {
    period: 'End of May 2025',
    title: 'Marathon completed',
    description: [
      '15-week plan (Runna); stuck to schedule alongside work and study',
      'Outcome: disciplined execution and long-horizon commitment'
    ],
    icon: 'Target'
  },
  {
    period: 'Aug 2025',
    title: 'Resigned from M&S (reset for tech)',
    description: [
      'Took a short reset to focus fully on tech applications and portfolio quality',
      'Outcome: energy redirected into landing a first junior role'
    ],
    icon: 'RefreshCw'
  },
  {
    period: 'Autumn 2025',
    title: 'Goals include: Portfolio, assessments, applications',
    description: [
      'Complete the UI design course; refine Code Institute portfolio',
      'Continue ongoing work on my custom portfolio',
      'Targeted job hunting and applying to roles',
      'Outcome: job-ready materials prepared for interviews and securing a role'
    ],
    icon: 'Briefcase'
  }
]

const transferableSkills = [
  'Operations → Delivery: realistic plans, tidy repos, clear runbooks, predictable releases',
  'Stakeholder comms → Team clarity: concise updates, expectation-setting, and decision logs that unblock engineers',
  'Scheduling → Sprint cadence: roadmaps, time-boxes, and on-time delivery without drama',
  'Hackathons & jams: rapid prototyping, pairing, and demo storytelling—shipping in 24–48 hours'
]

const JourneyBlog = () => {
  const [activeCard, setActiveCard] = useState(null)

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index)
  }

  return (
    <>
      {/* Blog Section - Constrained width with sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 py-16">
        <div className="grid lg:grid-cols-[1fr,300px] gap-8 lg:gap-16 mb-24">
          {/* Main blog content */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <header className="mb-12">
              <div className="w-16 h-1 bg-accent mb-8"></div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">From physical spaces to digital experiences</h1>
              <p className="text-lg sm:text-xl text-muted font-light max-w-2xl">
                A reflective blog on the pivots, places, and people that shaped my career change from a potential events manager to web development and UI design.
              </p>
            </header>

            <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-muted leading-relaxed">
               <p>
                 Before I ever opened a code editor, I was studying Events Management (2017–2022) 
                 and getting hands-on wherever I could supporting builds for music festivals and 
                 spending a placement period in Boca Raton, Florida. I wasn't running big teams, 
                 but I did learn the nuts and bolts of planning: keeping suppliers aligned, reading 
                 a schedule, and making sure the small things happen on time. That sense of order 
                 and having forward planning has turned out to be very transferable in other areas of my life.
               </p>
               
               <p>
                 When COVID-19 hit, live events went quiet and university lectures were taught through a computer screen. 
                 This was a massive wake up call and this pause gave me room to think about 
                 work that could carry on regardless of macro-events happening around the world. I wanted to build 
                 experiences that didn't depend on a venue being available; then I realised that 
                 experiences can still be had through digital means and this really peaked my interest.
               </p>
               
               <p>
                 After university, I travelled, with this idea still bouncing around in my head. Time in Los Angeles, then Australia and Bali, 
                 brought me into contact with people who were working remotely, using tech to create more 
                 freedom in where and how they live. It made the path feel practical, not just 
                 aspirational and I realised that I could do the same.
               </p>
               
               <p>
                 From my travelling epiphany, I was excited to get back to the UK and start a new chapter. 
                 Back in the UK, I channelled this momentum into Code Institute. HTML, CSS, 
                 JavaScript, and Python became my new toolkit, and I became well-adjusted to the agile methodology, approaching projects 
                 with a well-thought and structured plan. Events planning was a similar process, like show days, 
                 prepare well, iterate, and ship on time.
                </p> 
                 
                <p>
                 To try and make my vision become a reality. I moved back in with my parents and took the early shift at M&S. 
                 Waking up at 4:30am whilst everyone else was still in bed, I was starting work, finishing by lunchtime, 
                 then swapping my hi-vis for VS Code and problem-solving. This approach to life 
                 lasted for two years and I feel it has made me a more resilient and determined 
                 individual. Never giving up, always turning up and completing work on time, with a strong will to succeed.
               </p>
               
               <p>
               Now studying UI Design with the UX Design Institute, refining a craft I discovered during web development and events: 
               turning wireframes into clear, accessible, and safe human-centred interfaces. As in events, designing the venue for a 
               fantastic attendee experience, with not a single piece of detail left unturned.
               It's the same principles and desires but applied to a digital space. 
               So, I feel like it's about time I take on my next big challenge and start my tech career.
               </p>
             </div>
          </motion.article>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 sm:gap-12"
          >
            <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-none backdrop-blur-sm">
              <div className="p-6 sm:p-8">
                <p className="text-sm uppercase tracking-wider text-accent font-semibold mb-4">The Why</p>
                <h3 className="text-lg sm:text-xl font-semibold text-text mb-4">From one experience to another</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Whether I am hosting a live event or shipping a web app, my mission is the same: design thoughtful experiences that make people feel seen.
                  Technology is now the stage, but empathy remains the spotlight.
                </p>
              </div>
            </Card>

            <Card className="backdrop-blur-sm">
              <div className="p-6 sm:p-8">
                <p className="text-sm uppercase tracking-wider text-accent font-semibold mb-4">What I bring forward</p>
                <ul className="space-y-3">
                  {transferableSkills.map((skill) => (
                    <li key={skill} className="text-sm text-muted pl-4 relative">
                      <span className="absolute left-0 text-accent">•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.aside>
        </div>
      </div>

      {/* Timeline Section - Responsive layout */}
      <div className="bg-black/20 border-t border-white/10 py-8 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-6 h-6 bg-accent rounded flex items-center justify-center text-background font-bold text-sm">
                ⚡
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold">2017–2025: Employer-ready highlights</h2>
            </div>
            
            {/* Desktop timeline header */}
            <div className="hidden lg:flex items-center justify-between text-sm text-muted">
              <span className="font-semibold">2017</span>
              <div className="flex-1 mx-4 h-px bg-gradient-to-r from-accent/20 via-accent/40 to-accent/20"></div>
              <span className="font-semibold">Present Day</span>
            </div>
            
            {/* Mobile timeline header */}
            <div className="lg:hidden text-sm text-muted text-center">
              <p>Tap any milestone to explore details</p>
            </div>
          </motion.header>

          {/* Desktop Timeline - Horizontal */}
          <div className="relative hidden lg:block">
            {/* Curved Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 transform -translate-y-1/2">
              <svg width="100%" height="4" viewBox="0 0 1000 4" className="overflow-visible">
                <path
                  d="M 0 2 Q 250 0 500 2 T 1000 2"
                  stroke="url(#timelineGradient)"
                  strokeWidth="4"
                  fill="none"
                  className="drop-shadow-sm"
                />
                <defs>
                  <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgb(255, 215, 0)" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="rgb(255, 215, 0)" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="rgb(255, 215, 0)" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            {/* Timeline Cards */}
            <div className="flex justify-between items-center relative py-20">
              {timeline.map((entry, index) => {
                const Icon = Icons[entry.icon] || Icons.Circle
                const isEven = index % 2 === 0
                const isActive = activeCard === index
                const isMajorMilestone = index === 0 || index === 4 || index === 8
                const dotSize = isMajorMilestone ? 'w-6 h-6' : 'w-4 h-4'
                const dotBorderSize = isMajorMilestone ? 'border-[3px]' : 'border-2'

                return (
                  <motion.div
                    key={entry.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative group flex-1 flex justify-center cursor-pointer"
                    onClick={() => handleCardClick(index)}
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${dotSize} rounded-full ${dotBorderSize} border-background z-20 transition-all duration-300 ${
                      isActive 
                        ? 'bg-accent scale-150 shadow-lg shadow-accent/50' 
                        : 'bg-accent group-hover:scale-125 group-hover:shadow-md group-hover:shadow-accent/30'
                    }`}></div>
                    
                    {/* Card */}
                    <motion.div
                      className={`absolute transition-all duration-500 ease-out ${
                        isEven 
                          ? `bottom-0 ${isActive ? '-translate-y-4' : 'group-hover:-translate-y-4'}` 
                          : `top-0 ${isActive ? 'translate-y-4' : 'group-hover:translate-y-4'}`
                      }`}
                      whileHover={!isActive ? { scale: 1.05 } : {}}
                    >
                      <Card className={`w-80 bg-gradient-to-br from-white/8 to-white/2 border-white/10 backdrop-blur-sm transition-all duration-500 shadow-xl ${
                        isActive 
                          ? 'opacity-100 border-accent/50 shadow-accent/20' 
                          : 'opacity-0 group-hover:opacity-100'
                      }`}>
                        <div className="p-6">
                          <div className="flex items-start gap-3 mb-4">
                            <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Icon size={18} className="text-accent" />
                            </div>
                            <div className="flex-1">
                              <p className="text-xs uppercase tracking-wider text-accent font-semibold mb-1">{entry.period}</p>
                              <h3 className="text-lg font-bold leading-tight">{entry.title}</h3>
                            </div>
                          </div>
                          <ul className="space-y-2">
                            {entry.description.map((item, itemIndex) => (
                              <li key={itemIndex} className="text-sm text-muted leading-relaxed flex items-start">
                                <span className="text-accent mr-2 mt-1 flex-shrink-0">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Card>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Mobile Timeline - Vertical */}
          <div className="relative lg:hidden">
            {/* Vertical Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-accent/20 via-accent/60 to-accent/20 rounded-full"></div>
            
            {/* Mobile Timeline Items */}
            <div className="space-y-6">
              {timeline.map((entry, index) => {
                const Icon = Icons[entry.icon] || Icons.Circle
                const isActive = activeCard === index
                const isMajorMilestone = index === 0 || index === 4 || index === 8
                const dotSize = isMajorMilestone ? 'w-6 h-6' : 'w-4 h-4'

                return (
                  <motion.div
                    key={entry.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative flex items-start gap-6"
                  >
                    {/* Timeline Dot */}
                    <div className="relative flex-shrink-0">
                      <div className={`${dotSize} rounded-full border-2 border-background bg-accent transition-all duration-300 ${
                        isActive 
                          ? 'scale-150 shadow-lg shadow-accent/50' 
                          : 'hover:scale-125 hover:shadow-md hover:shadow-accent/30'
                      }`}></div>
                    </div>
                    
                    {/* Mobile Card */}
                    <motion.div
                      className="flex-1 cursor-pointer"
                      onClick={() => handleCardClick(index)}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Collapsed View */}
                      <div className={`transition-all duration-300 ${isActive ? 'mb-4' : ''}`}>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon size={14} className="text-accent" />
                          </div>
                          <div className="flex-1">
                            <p className="text-xs uppercase tracking-wider text-accent font-semibold">{entry.period}</p>
                            <h3 className="text-base sm:text-lg font-bold leading-tight">{entry.title}</h3>
                          </div>
                          <div className={`transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}>
                            <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Expanded View */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: isActive ? "auto" : 0,
                          opacity: isActive ? 1 : 0
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <Card className="bg-gradient-to-br from-white/8 to-white/2 border-white/10 backdrop-blur-sm shadow-lg">
                          <div className="p-4 sm:p-6">
                            <ul className="space-y-3">
                              {entry.description.map((item, itemIndex) => (
                                <motion.li
                                  key={itemIndex}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: itemIndex * 0.1 }}
                                  className="text-sm text-muted leading-relaxed flex items-start"
                                >
                                  <span className="text-accent mr-2 mt-1 flex-shrink-0">•</span>
                                  <span>{item}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </Card>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default JourneyBlog