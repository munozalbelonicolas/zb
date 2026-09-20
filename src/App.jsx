import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Services from './components/Services'
import SmartHome from './components/SmartHome'
import IndustrialAutomation from './components/IndustrialAutomation'
import IndustrialShowcase from './components/IndustrialShowcase'
import About from './components/About'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950 font-body">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <SmartHome />
        <IndustrialAutomation />
        <IndustrialShowcase />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
