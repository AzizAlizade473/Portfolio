import React, { Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const About = React.lazy(() => import('./components/About'))
const Experience = React.lazy(() => import('./components/Experience'))
const Projects = React.lazy(() => import('./components/Projects'))
const Achievements = React.lazy(() => import('./components/Achievements'))
const Contact = React.lazy(() => import('./components/Contact'))
const Footer = React.lazy(() => import('./components/Footer'))

export default function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white font-sans">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Experience />
          <Projects />
          <Achievements />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}
