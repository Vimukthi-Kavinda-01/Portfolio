import React from 'react'
import Navbar from './sections/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import AnimatedBackground from './components/AnimatedBackground.jsx'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import Experiences from './sections/Experiences.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'


const App = () => {
  return (
    <>
      <AnimatedBackground />
      <div className="container mx-auto max-w-7xl">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Projects />
      </div>
      <div id="experiences">
        <Experiences />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
      

      
      {/* experience */}
      {/* testimonials */}
      {/* contact */}
      {/* footer */}
    </div>
    </>
  )
}

export default App