import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

const roles = [
  'Software Engineer',
  'AI & ML Enthusiast',
  'Tech Founder',
  'Hackathon Champion',
]

// Floating orbs for background decoration
function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large orb top-right */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-accent-blue/[0.07] blur-[100px] animate-float" />
      {/* Medium orb bottom-left */}
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-accent-purple/[0.08] blur-[80px] animate-float-delayed" />
      {/* Small orb center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent-blue/[0.04] blur-[60px] animate-float" />
      {/* Particle dots */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

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
    const speed = isDeleting ? 40 : 80
    const timer = setTimeout(tick, speed)
    return () => clearTimeout(timer)
  }, [tick, isDeleting])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center animated-gradient-bg overflow-hidden"
    >
      <FloatingOrbs />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass border border-white/10"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          <span className="text-sm text-gray-300 font-medium">Open to AI Engineering Internships</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6"
        >
          <span className="text-white">Aziz </span>
          <span className="gradient-text">Alizade</span>
        </motion.h1>

        {/* Typing effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="h-12 sm:h-14 flex items-center justify-center mb-8"
        >
          <span className="text-xl sm:text-2xl md:text-3xl font-light text-gray-300">
            {displayText}
          </span>
          <span className="ml-1 w-[3px] h-7 sm:h-8 bg-accent-blue animate-pulse" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          CS Student @ Baku Higher Oil School · Co-Founder of Epsilon ·
          Building AI-powered solutions for real-world problems
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="group relative px-8 py-3.5 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold text-base hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            View My Work
            <HiArrowDown className="group-hover:translate-y-1 transition-transform" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full glass border border-white/10 text-white font-semibold text-base hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            Download CV
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="https://github.com/AzizAlizade473"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <FiGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/aziz-alizade-5567002a1/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={20} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
        </motion.div>
      </motion.div>
    </section>
  )
}
