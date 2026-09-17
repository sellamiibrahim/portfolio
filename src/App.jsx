import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Services from './components/Services.jsx'
import CTA from './components/CTA.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="relative bg-background min-h-screen overflow-x-hidden">
      {/* Subtle fixed background: grid + soft glow, purely decorative */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
        <div className="absolute inset-0 grid-backdrop" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/10 blur-[130px] rounded-full" />
        <div className="absolute top-3/4 left-1/4 w-[500px] h-[300px] bg-secondary/10 blur-[110px] rounded-full" />
      </div>

      <Navbar />
      <main className="relative z-10 pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
