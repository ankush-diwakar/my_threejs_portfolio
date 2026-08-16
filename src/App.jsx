import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Testimonials from './sections/Testimonials'
import ContactMe from './sections/ContactMe'
import Footer from './sections/Footer'
import Experience from './sections/Experience'

const App = () => {
  return (
    <div>
      <main className='mx-auto max-w-7xl'>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Testimonials />
        <Experience />
        <ContactMe />
        <br /><br /><br /><br />
        <Footer />
      </main>
    </div>
  )
}

export default App
