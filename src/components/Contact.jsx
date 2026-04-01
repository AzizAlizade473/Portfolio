import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from 'react-icons/fi'

const links = [
  {
    name: 'Email',
    href: 'mailto:aziz.alizade.std@bhos.edu.az',
    icon: FiMail,
    label: 'aziz.alizade.std@bhos.edu.az',
    color: 'hover:border-red-400/40 hover:text-red-400',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aziz-alizade-5567002a1/',
    icon: FiLinkedin,
    label: 'linkedin.com/in/aziz-alizade',
    color: 'hover:border-blue-400/40 hover:text-blue-400',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/AzizAlizade473',
    icon: FiGithub,
    label: 'github.com/AzizAlizade473',
    color: 'hover:border-white/40 hover:text-white',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[120px]" />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
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
        </motion.div>

        {/* Contact links */}
        <div className="space-y-4">
          {links.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.name !== 'Email' ? '_blank' : undefined}
              rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className={`group flex items-center gap-4 p-5 glass rounded-xl border border-white/10 transition-all duration-300 ${link.color}`}
            >
              <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                <link.icon size={22} />
              </div>
              <div className="text-left min-w-0 flex-1">
                <div className="text-sm text-gray-400 font-medium">{link.name}</div>
                <div className="text-white font-semibold truncate">{link.label}</div>
              </div>
              <FiArrowUpRight
                size={20}
                className="text-gray-500 group-hover:text-current shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
