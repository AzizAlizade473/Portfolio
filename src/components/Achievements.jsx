import { motion } from 'framer-motion'

const achievements = [
  {
    emoji: '🥇',
    title: '1st Place – OBA SID Hackathon',
    date: 'Feb 2026',
    category: 'hackathon',
  },
  {
    emoji: '🥈',
    title: '2nd Place – Vibe Hackathon',
    date: 'Jul 2025',
    category: 'hackathon',
  },
  {
    emoji: '🥈',
    title: '2nd Place – AI4Cyber Hackathon',
    date: 'Jul 2026',
    category: 'hackathon',
  },
  {
    emoji: '🥉',
    title: '3rd Place – Rebuild Karabakh Hackathon',
    date: 'Nov 2025',
    category: 'hackathon',
  },
  {
    emoji: '🥉',
    title: '3rd Place – WaterTech Hackathon',
    date: 'Sep 2025',
    category: 'hackathon',
  },
  {
    emoji: '🏅',
    title: 'National Math Olympiad (RFO) Winner',
    date: 'May 2024',
    category: 'academic',
  },
  {
    emoji: '🎓',
    title: 'Gold Badge & Gold Graduation Diploma',
    date: 'Jun 2024',
    category: 'academic',
  },
  {
    emoji: '📋',
    title: 'IELTS Academic Band 8.0',
    date: 'Apr 2025',
    category: 'academic',
  },
  {
    emoji: '🌍',
    title: 'EuroSchool 2025 – EU Delegation to Azerbaijan',
    date: '2025',
    category: 'international',
  },
  {
    emoji: '🔬',
    title: 'Finalist – "Sabahın alimləri" Competition',
    date: 'Feb 2023',
    category: 'academic',
  },
]

const categoryColors = {
  hackathon: 'from-indigo-500/20 to-purple-500/20',
  academic: 'from-amber-500/20 to-orange-500/20',
  international: 'from-emerald-500/20 to-teal-500/20',
}

const categoryBorders = {
  hackathon: 'border-indigo-500/20 hover:border-indigo-500/40',
  academic: 'border-amber-500/20 hover:border-amber-500/40',
  international: 'border-emerald-500/20 hover:border-emerald-500/40',
}

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/5 rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-accent-blue text-sm font-semibold tracking-widest uppercase mb-3 block">
            Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Awards &{' '}
            <span className="gradient-text">recognition</span>
          </h2>
        </motion.div>

        {/* Achievement Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: 'easeOut' }}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`relative rounded-xl border ${categoryBorders[a.category]} bg-gradient-to-br ${categoryColors[a.category]} backdrop-blur-sm p-5 cursor-default transition-all duration-300 group overflow-hidden`}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent-blue/5 to-accent-purple/5 pointer-events-none" />

              <div className="relative z-10 flex items-start gap-4">
                <div className="text-3xl shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                  {a.emoji}
                </div>
                <div className="min-w-0">
                  <h3 className="text-white font-semibold text-sm sm:text-base leading-tight mb-1.5 group-hover:gradient-text transition-all duration-300">
                    {a.title}
                  </h3>
                  <span className="text-xs text-gray-400 font-medium">
                    {a.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
