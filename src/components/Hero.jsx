import { useState, useEffect, useCallback } from 'react'
import { IconArrowDown, IconGithub, IconLinkedin } from './icons'

const roles = [
  'Software Engineer',
  'AI & ML Enthusiast',
  'Tech Founder',
  'Hackathon Champion',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [hasStartedTyping, setHasStartedTyping] = useState(false)

  useEffect(() => {
    const startTimer = setTimeout(() => setHasStartedTyping(true), 1500)
    return () => clearTimeout(startTimer)
  }, [])

  const tick = useCallback(() => {
    const currentRole = roles[roleIndex]
    if (!isDeleting) {
      setDisplayText(currentRole.substring(0, displayText.length + 1))
      if (displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000)
        return
      }
    } else {
      setDisplayText(currentRole.substring(0, displayText.length - 1))
      if (displayText === '') {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
        return
      }
    }
  }, [displayText, isDeleting, roleIndex])

  useEffect(() => {
    if (!hasStartedTyping) return
    const speed = isDeleting ? 40 : 80
    const timer = setTimeout(tick, speed)
    return () => clearTimeout(timer)
  }, [tick, isDeleting, hasStartedTyping])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden"
    >
      {/* Decorative orbs — pure CSS, no JS animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-accent-blue/[0.07] blur-[100px] animate-float" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-accent-purple/[0.08] blur-[80px] animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent-blue/[0.04] blur-[60px]" />
        {/* CSS-only particles */}
        <div className="particle particle-1" />
        <div className="particle particle-2" />
        <div className="particle particle-3" />
        <div className="particle particle-4" />
        <div className="particle particle-5" />
        <div className="particle particle-6" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Status badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass border border-white/10">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          <span className="text-sm text-gray-300 font-medium">Open to AI Engineering Internships</span>
        </div>

        {/* Name — LCP element */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6">
          <span className="text-white">Aziz </span>
          <span className="gradient-text">Alizade</span>
        </h1>

        {/* Typing effect */}
        <div className="h-12 sm:h-14 flex items-center justify-center mb-8">
          <span className="text-xl sm:text-2xl md:text-3xl font-light text-gray-300">
            {displayText}
          </span>
          <span className="ml-1 w-[3px] h-7 sm:h-8 bg-accent-blue animate-pulse" />
        </div>

        {/* Tagline */}
        <p className="animate-fade-up-delay-2 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          CS Student @ Baku Higher Oil School · Co-Founder of Epsilon ·
          Building AI-powered solutions for real-world problems
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="group relative px-8 py-3.5 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold text-base hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            View My Work
            <IconArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full glass border border-white/10 text-white font-semibold text-base hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            Download CV
          </a>
        </div>

        {/* Social links */}
        <div className="animate-fade-up-delay-2 flex items-center justify-center gap-4">
          <a
            href="https://github.com/AzizAlizade473"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <IconGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/aziz-alizade-5567002a1/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <IconLinkedin size={20} />
          </a>
        </div>
      </div>

      {/* Scroll indicator — CSS only */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up-delay-2">
        <div className="scroll-indicator w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-accent-blue scroll-dot" />
        </div>
      </div>
    </section>
  )
}
