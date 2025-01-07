import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Header />
      <main className="relative">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#111111] to-[#0A0A0A] pointer-events-none"></div>
        
        {/* Content */}
        <div className="relative">
          <Hero />
          <Services />
          <Portfolio />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}

