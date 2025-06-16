import React from 'react'
import Navbar from './components/Header/Navbar'
import Hero from './components/Header/Hero'
import Services from './components/Services/Services'
import About from './components/About/About'
import EducationSkills from './components/About/EducationSkills'
import Projects from './components/Projects/Projects'

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Services />
    <About />
    <EducationSkills />
    <Projects />
    </>
  )
}

export default App