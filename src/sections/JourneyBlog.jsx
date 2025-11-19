import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Card from '../components/Card'
import Icons from '../lib/icons'
import { ChevronRight, X } from '../lib/icons'

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
    title: 'Active iteration: Portfolio refinement & job prep',
    description: [
      'Complete the UI design course; refine Code Institute portfolio projects',
      'Updated Jungle Peaks Brewing based on assessor feedback—responsive fixes, accessibility improvements',
      'Continue ongoing work on custom portfolio with journey timeline',
      'Targeted job hunting and applications with polished, employer-ready materials',
      'Outcome: demonstrating receptiveness to feedback and continuous improvement'
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
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-6 leading-tight">From physical spaces to digital experiences</h1>
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
            <Card className="bg-surface border-border shadow-soft">
              <div className="p-6 sm:p-8">
                <p className="text-sm uppercase tracking-wider text-accent font-semibold mb-4">The Why</p>
                <h3 className="text-lg sm:text-xl font-semibold text-text mb-4">From one experience to another</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Whether I am hosting a live event or shipping a web app, my mission is the same: design thoughtful experiences that make people feel seen.
                  Technology is now the stage, but empathy remains the spotlight.
                </p>
              </div>
            </Card>

            <Card className="bg-surface border-border shadow-soft">
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
      <div className="bg-surface border-t border-border py-8 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent font-bold text-lg">
                ⚡
              </div>
              <h2 className="text-xl sm:text-3xl font-bold text-text">2017–2025: Employer-ready highlights</h2>
            </div>
            
            <p className="text-muted mb-8 max-w-2xl">
                Click on any milestone to see the details of my journey.
            </p>
            
            {/* Desktop timeline header */}
            <div className="hidden lg:flex items-center justify-between text-sm text-muted/60 uppercase tracking-wider font-medium">
              <span>2017</span>
              <div className="flex-1 mx-6 h-px bg-border dashed-line"></div>
              <span>Present Day</span>
            </div>
          </motion.header>

          {/* Desktop Timeline - Horizontal */}
          <div className="relative hidden lg:block py-12">
            {/* Horizontal Line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />
            
            {/* Timeline Nodes */}
            <div className="relative grid grid-cols-9 gap-4">
              {timeline.map((entry, index) => {
                const Icon = Icons[entry.icon] || Icons.Circle
                const isActive = activeCard === index
                
                return (
                  <div key={entry.title} className="relative flex flex-col items-center justify-center group">
                     {/* Node Button */}
                     <button
                        onClick={() => handleCardClick(index)}
                        className={`relative z-10 w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                            isActive 
                                ? 'bg-accent border-accent text-background scale-125 shadow-lg shadow-accent/30' 
                                : 'bg-background border-border text-muted hover:border-accent hover:text-accent'
                        }`}
                     >
                        <Icon size={16} />
                     </button>

                     {/* Floating Card Overlay */}
                     <AnimatePresence>
                        {isActive && (
                             <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                className={`absolute z-50 w-[320px] ${
                                    index % 2 === 0 ? 'top-full mt-6' : 'bottom-full mb-6'
                                }`}
                                style={{
                                    left: index === 0 ? '0' : index === timeline.length - 1 ? 'auto' : '50%',
                                    right: index === timeline.length - 1 ? '0' : 'auto',
                                    translateX: index === 0 || index === timeline.length - 1 ? '0' : '-50%'
                                }}
                             >
                                <div className="bg-background border border-border shadow-soft p-6 rounded-2xl relative">
                                    {/* Arrow Pointer */}
                                    <div className={`absolute w-4 h-4 bg-background border-l border-t border-border transform rotate-45 ${
                                        index % 2 === 0 
                                            ? '-top-2.5 border-b-0 border-r-0' + (index === 0 ? ' left-4' : index === timeline.length - 1 ? ' right-4' : ' left-1/2 -ml-2')
                                            : '-bottom-2.5 border-t-0 border-l-0' + (index === 0 ? ' left-4' : index === timeline.length - 1 ? ' right-4' : ' left-1/2 -ml-2')
                                    }`}></div>

                                    <div className="flex justify-between items-start mb-3">
                                        <div className="bg-accent/10 text-accent px-2 py-1 rounded text-xs font-bold uppercase tracking-wide">
                                            {entry.period}
                                        </div>
                                        <button 
                                            onClick={(e) => { e.stopPropagation(); setActiveCard(null); }}
                                            className="text-muted hover:text-text"
                                        >
                                            <X size={16} />
                                        </button>
                                    </div>
                                    
                                    <h3 className="text-lg font-bold text-text mb-4 leading-tight">
                                        {entry.title}
                                    </h3>
                                    
                                    <ul className="space-y-2">
                                        {entry.description.map((item, i) => (
                                            <li key={i} className="flex items-start text-sm text-muted gap-2">
                                                <span className="mt-1.5 w-1 h-1 bg-accent rounded-full flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                             </motion.div>
                        )}
                     </AnimatePresence>
                     
                     {/* Default Label (Always Visible if not active) */}
                     {!isActive && (
                         <div className={`absolute w-32 text-center text-xs font-medium text-muted transition-opacity duration-300 ${
                             index % 2 === 0 ? 'top-full mt-4' : 'bottom-full mb-4'
                         } ${activeCard !== null ? 'opacity-30' : 'opacity-100'}`}>
                            {entry.period}
                         </div>
                     )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Mobile Timeline - Vertical Accordion */}
          <div className="relative lg:hidden space-y-4">
              {/* Vertical Line */}
             <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border" />

              {timeline.map((entry, index) => {
                const Icon = Icons[entry.icon] || Icons.Circle
                const isActive = activeCard === index

                return (
                  <motion.div
                    key={entry.title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="relative pl-12"
                  >
                    {/* Node on Line */}
                    <button 
                        onClick={() => handleCardClick(index)}
                        className={`absolute left-0 top-0 w-10 h-10 rounded-full border-2 flex items-center justify-center z-10 transition-colors ${
                            isActive 
                                ? 'bg-accent border-accent text-background shadow-lg' 
                                : 'bg-background border-border text-muted'
                        }`}
                    >
                        <Icon size={18} />
                    </button>

                    {/* Content Card */}
                    <div 
                        className={`bg-background border transition-all duration-300 rounded-2xl overflow-hidden ${
                            isActive ? 'border-accent/50 shadow-md' : 'border-border'
                        }`}
                    >
                        <button 
                            onClick={() => handleCardClick(index)}
                            className="w-full flex items-center justify-between p-4 text-left"
                        >
                            <div>
                                <div className="text-xs font-bold text-accent uppercase tracking-wider mb-1">
                                    {entry.period}
                                </div>
                                <h3 className={`font-bold text-text ${isActive ? 'text-lg' : 'text-base'}`}>
                                    {entry.title}
                                </h3>
                            </div>
                            <ChevronRight 
                                size={20} 
                                className={`text-muted transition-transform duration-300 ${isActive ? 'rotate-90' : ''}`} 
                            />
                        </button>

                        <AnimatePresence>
                            {isActive && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="px-4 pb-4 pt-0 border-t border-dashed border-border mt-2">
                                        <ul className="space-y-3 mt-4">
                                            {entry.description.map((item, i) => (
                                                <li key={i} className="flex items-start text-sm text-muted gap-3">
                                                    <span className="mt-1.5 w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                                                    <span className="leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                  </motion.div>
                )
              })}
          </div>
        </div>
      </div>
    </>
  )
}

export default JourneyBlog
