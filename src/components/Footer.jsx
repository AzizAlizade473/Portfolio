import { IconGithub, IconLinkedin, IconHeart } from './icons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5 bg-dark-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 text-sm text-gray-500">
            <span>© {year} Aziz Alizade. Built with</span>
            <IconHeart size={12} className="text-red-400" />
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/AzizAlizade473"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-500 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <IconGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/aziz-alizade-5567002a1/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-500 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <IconLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
