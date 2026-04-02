import useInView from '../hooks/useInView'
import { IconGithub, IconAward } from './icons'

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

function ProjectCard({ project, index, featured }) {
  const [ref, isInView] = useInView({ margin: '-40px' })

  if (featured) {
    return (
      <div
        ref={ref}
        className={`reveal ${isInView ? 'revealed' : ''} group relative glass rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300`}
        style={{ transitionDelay: isInView ? `${index * 100}ms` : '0ms' }}
      >
        <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                {project.title}
              </h3>
              {project.award && (
                <div className="flex items-center gap-1.5 mt-2 text-sm text-amber-400">
                  <IconAward size={14} />
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
              <IconGithub size={18} />
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
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className={`reveal ${isInView ? 'revealed' : ''} group glass rounded-xl overflow-hidden hover:-translate-y-1.5 transition-all duration-300`}
      style={{ transitionDelay: isInView ? `${index * 100}ms` : '0ms' }}
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
            <IconGithub size={16} />
          </a>
        </div>
        {project.award && (
          <div className="flex items-center gap-1.5 mb-3 text-xs text-amber-400">
            <IconAward size={12} />
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
    </div>
  )
}

export default function Projects() {
  const [headerRef, headerInView] = useInView({ margin: '-80px' })

  return (
    <section id="projects" className="section-padding relative overflow-hidden cv-auto">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-[120px]" aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={headerRef} className={`reveal ${headerInView ? 'revealed' : ''} mb-16`}>
          <span className="text-accent-blue text-sm font-semibold tracking-widest uppercase mb-3 block">
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Things I've{' '}
            <span className="gradient-text">built</span>
          </h2>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {projects
            .filter((p) => p.featured)
            .map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} featured />
            ))}
        </div>

        {/* Other Projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects
            .filter((p) => !p.featured)
            .map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
        </div>
      </div>
    </section>
  )
}
