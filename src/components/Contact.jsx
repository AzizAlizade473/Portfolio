import useInView from '../hooks/useInView'
import { IconGithub, IconLinkedin, IconMail, IconArrowUpRight } from './icons'

const links = [
  {
    name: 'Email',
    href: 'mailto:aziz.alizade.std@bhos.edu.az',
    icon: IconMail,
    label: 'aziz.alizade.std@bhos.edu.az',
    color: 'hover:border-red-400/40 hover:text-red-400',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aziz-alizade-5567002a1/',
    icon: IconLinkedin,
    label: 'linkedin.com/in/aziz-alizade',
    color: 'hover:border-blue-400/40 hover:text-blue-400',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/AzizAlizade473',
    icon: IconGithub,
    label: 'github.com/AzizAlizade473',
    color: 'hover:border-white/40 hover:text-white',
  },
]

export default function Contact() {
  const [headerRef, headerInView] = useInView({ margin: '-80px' })
  const [linksRef, linksInView] = useInView({ margin: '-40px' })

  return (
    <section id="contact" className="section-padding relative overflow-hidden cv-auto">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[120px]" aria-hidden="true" />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <div ref={headerRef} className={`reveal ${headerInView ? 'revealed' : ''} mb-12`}>
          <span className="text-accent-blue text-sm font-semibold tracking-widest uppercase mb-3 block">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Let's{' '}
            <span className="gradient-text">connect</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-lg mx-auto">
            I'm always open to new opportunities, collaborations, and conversations about AI and technology.
          </p>
        </div>

        <div ref={linksRef} className="space-y-4">
          {links.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              target={link.name !== 'Email' ? '_blank' : undefined}
              rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
              className={`reveal ${linksInView ? 'revealed' : ''} group flex items-center gap-4 p-5 glass rounded-xl border border-white/10 transition-all duration-300 hover:scale-[1.02] ${link.color}`}
              style={{ transitionDelay: linksInView ? `${i * 100}ms` : '0ms' }}
            >
              <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                <link.icon size={22} />
              </div>
              <div className="text-left min-w-0 flex-1">
                <div className="text-sm text-gray-400 font-medium">{link.name}</div>
                <div className="text-white font-semibold truncate">{link.label}</div>
              </div>
              <IconArrowUpRight
                size={20}
                className="text-gray-500 group-hover:text-current shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
