import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
