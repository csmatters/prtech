import React from 'react'
import Hero from '../components/hero'
import Marquee from '../components/Marquee'
import Services from '../components/services'
import Clients from '../components/clients'
import Testimonials from '../components/Testimonials'
import Contact from '../components/contact'
import Projects from '../components/projects'


function Home() {

  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Clients />
      <Testimonials />
      <Projects />
      <Contact />
    </>
    
  )
}

export default Home