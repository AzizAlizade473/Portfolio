import { motion } from 'framer-motion'
import {
  SiPython, SiCplusplus, SiReact, SiTypescript,
  SiHtml5, SiJavascript, SiTensorflow,
} from 'react-icons/si'
import { FaJava, FaChartBar } from 'react-icons/fa'
import { HiAcademicCap } from 'react-icons/hi'

const skills = [
  { name: 'Python', icon: SiPython, color: '#3776ab' },
  { name: 'C++', icon: SiCplusplus, color: '#00599c' },
  { name: 'React', icon: SiReact, color: '#61dafb' },
  { name: 'React Native', icon: SiReact, color: '#61dafb' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
  { name: 'HTML/CSS', icon: SiHtml5, color: '#e34f26' },
  { name: 'Java', icon: FaJava, color: '#ed8b00' },
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
  { name: 'Machine Learning', icon: SiTensorflow, color: '#ff6f00' },
  { name: 'Data Analytics', icon: FaChartBar, color: '#22d3ee' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.05, ease: 'easeOut' },
  }),
}

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="mb-16"
        >
          <span className="text-accent-blue text-sm font-semibold tracking-widest uppercase mb-3 block">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Turning ideas into{' '}
            <span className="gradient-text">reality</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Bio */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            className="lg:col-span-3 space-y-6"
          >
            <div className="glass rounded-2xl p-6 sm:p-8 space-y-4">
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                I'm a <span className="text-white font-semibold">2nd year Computer Science student</span> at{' '}
                <span className="text-white font-semibold">Baku Higher Oil School</span>, also studying at{' '}
                <span className="text-white font-semibold">Holberton School Azerbaijan</span>. I'm the co-founder of{' '}
                <span className="gradient-text font-semibold">Epsilon</span>, a retail intelligence platform that's
                already partnering with major retail chains.
              </p>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                I'm passionate about <span className="text-white font-semibold">AI/ML</span>,{' '}
                <span className="text-white font-semibold">retail intelligence</span>, and building technology
                that solves real-world problems. With an{' '}
                <span className="text-accent-blue font-semibold">IELTS score of 8.0</span> and a background as a{' '}
                <span className="text-accent-purple font-semibold">National Math Olympiad winner</span>,
                I combine strong analytical skills with a founder's mindset.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { value: '5+', label: 'Hackathons Won' },
                { value: '6+', label: 'Projects Built' },
                { value: '8.0', label: 'IELTS Score' },
                { value: '4', label: 'Languages' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className="glass rounded-xl p-4 text-center hover:bg-white/[0.06] transition-colors duration-300"
                >
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Languages */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <HiAcademicCap className="text-accent-blue" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { lang: 'Azerbaijani', level: 'Native' },
                  { lang: 'Turkish', level: 'Fluent' },
                  { lang: 'English', level: 'C1 (IELTS 8.0)' },
                  { lang: 'Russian', level: 'B2' },
                ].map((l) => (
                  <span
                    key={l.lang}
                    className="px-3 py-1.5 rounded-full text-sm bg-white/5 border border-white/10 text-gray-300"
                  >
                    {l.lang} – <span className="text-white font-medium">{l.level}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-2"
          >
            <h3 className="text-white font-semibold text-lg mb-6">Tech Stack</h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  custom={i}
                  variants={fadeUp}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="glass rounded-xl p-4 flex items-center gap-3 cursor-default hover:bg-white/[0.06] transition-colors duration-300 group"
                >
                  <skill.icon
                    size={22}
                    style={{ color: skill.color }}
                    className="shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors font-medium">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
