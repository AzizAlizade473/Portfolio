import useInView from '../hooks/useInView'

const experiences = [
  {
    role: 'Co-Founder & Head of Corporate Relations',
    company: 'Epsilon',
    period: 'Sept 2025 – Present',
    highlights: [
      'Pitched to CEO of OBA Market and Veysəloğlu Group executives, secured corporate sponsorship and incubation',
      'Built cross-platform mobile app with React Native (Expo) + TypeScript',
      "Leading integration of Epsilon module into OBA Market's official app",
      "On-site collaboration with OBA's IT department for production rollout",
    ],
    tags: ['React Native', 'Expo', 'TypeScript', 'Corporate Strategy'],
  },
]

export default function Experience() {
  const [headerRef, headerInView] = useInView({ margin: '-80px' })
  const [cardRef, cardInView] = useInView({ margin: '-40px' })

  return (
    <section id="experience" className="section-padding relative overflow-hidden cv-auto">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-accent-blue/5 rounded-full blur-[100px]" aria-hidden="true" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div ref={headerRef} className={`reveal ${headerInView ? 'revealed' : ''} mb-16`}>
          <span className="text-accent-blue text-sm font-semibold tracking-widest uppercase mb-3 block">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Where I've{' '}
            <span className="gradient-text">worked</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-5 lg:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue/50 via-accent-purple/30 to-transparent" aria-hidden="true" />

          {experiences.map((exp) => (
            <div
              key={exp.company}
              ref={cardRef}
              className={`reveal-left ${cardInView ? 'revealed' : ''} relative pl-14 lg:pl-20 pb-12 last:pb-0`}
            >
              <div className="absolute left-2.5 lg:left-5 top-0 w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center">
                <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-dark-900" />
              </div>

              <div className="glass rounded-2xl p-6 sm:p-8 hover:bg-white/[0.06] transition-all duration-300 group">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-accent-blue font-semibold mt-1">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-400 font-medium whitespace-nowrap px-3 py-1 rounded-full bg-white/5">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.highlights.map((h, j) => (
                    <li
                      key={j}
                      className={`reveal ${cardInView ? 'revealed' : ''} flex items-start gap-3 text-gray-300 text-sm sm:text-base`}
                      style={{ transitionDelay: cardInView ? `${(j + 1) * 100}ms` : '0ms' }}
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-purple shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
