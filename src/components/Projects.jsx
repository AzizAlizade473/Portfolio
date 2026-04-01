import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiAward } from 'react-icons/fi'

const projects = [
  {
    title: 'Epsilon',
    description:
      'Retail intelligence platform with a gamified receipt-scanning loyalty system integrated into OBA Market. Won 1st place at OBA SID Hackathon.',
    stack: ['React Native', 'Expo', 'TypeScript'],
    github: 'https://github.com/DoubleZero00a19b16/epsilon-public',
    featured: true,
    award: '🥇 1st Place – OBA SID Hackathon',
    gradient: 'from-indigo-500 to-purple-600',
  },
  {
    title: 'MyStyle.AI',
    description:
      'ML-powered fashion assistant that recommends outfits using machine learning models trained on user preferences and style data.',
    stack: ['Python', 'ML', 'HTML/CSS'],
    github: 'https://github.com/AzizAlizade473/MyStyle.AI',
    featured: true,
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    title: 'HydroTile',
    description:
      'Smart sustainable water management system designed for efficient urban water usage. Won 3rd place at WaterTech Hackathon.',
    stack: ['JavaScript'],
    github: 'https://github.com/AzizAlizade473',
    award: '🥉 3rd Place – WaterTech Hackathon',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'AeroMesh',
    description:
      'Drone/aerospace mesh networking project enabling reliable communication between multiple aerial units in real-time.',
    stack: ['JavaScript'],
    github: 'https://github.com/AzizAlizade473/aeromesh',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'FinTrack',
    description:
      'Personal finance tracking application for managing budgets, expenses, and savings goals with visual analytics.',
    stack: ['JavaScript'],
    github: 'https://github.com/AzizAlizade473/FinTrack',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    title: 'PraxisForge',
    description:
      'Practice and skill-forging platform designed to help users build habits and track their learning progress.',
    stack: ['JavaScript'],
    github: 'https://github.com/AzizAlizade473/PraxisForge',
    gradient: 'from-violet-500 to-fuchsia-600',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-[120px]" />

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
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Things I've{' '}
            <span className="gradient-text">built</span>
          </h2>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {projects
            .filter((p) => p.featured)
            .map((project, i) => (
              <motion.div
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                custom={i}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group relative glass rounded-2xl overflow-hidden"
              >
                {/* Gradient top bar */}
                <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />

                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                        {project.title}
                      </h3>
                      {project.award && (
                        <div className="flex items-center gap-1.5 mt-2 text-sm text-amber-400">
                          <FiAward />
                          <span>{project.award}</span>
                        </div>
                      )}
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full glass border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all duration-300 hover:scale-110 shrink-0"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FiGithub size={18} />
                    </a>
                  </div>

                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover glow */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${project.gradient} mix-blend-overlay pointer-events-none`} style={{ opacity: 0 }} />
                <div className={`absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl border border-transparent bg-clip-border pointer-events-none`} style={{
                  background: `linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.1))`,
                  opacity: 0,
                }} />
              </motion.div>
            ))}
        </div>

        {/* Other Projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects
            .filter((p) => !p.featured)
            .map((project, i) => (
              <motion.div
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                custom={i}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group glass rounded-xl overflow-hidden"
              >
                <div className={`h-0.5 bg-gradient-to-r ${project.gradient}`} />
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-white group-hover:gradient-text transition-all">
                      {project.title}
                    </h3>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-white transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FiGithub size={16} />
                    </a>
                  </div>
                  {project.award && (
                    <div className="flex items-center gap-1.5 mb-3 text-xs text-amber-400">
                      <FiAward className="text-[10px]" />
                      <span>{project.award}</span>
                    </div>
                  )}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-medium rounded-full bg-white/5 text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}
