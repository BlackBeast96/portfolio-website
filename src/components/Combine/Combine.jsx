import React from 'react'
import Main from '../main_page/Main_page'
import About from '../about/About'
import Projects from '../projects/Projects'
import Resume from '../resume/Resume'
import Services from '../services/Services'
import Skills from '../skills/Skills'
function Combine() {
  return (
    <>
    <Main/>
    <Projects/>
    <Skills/>
    <Services/>
    <Resume/>
    <About/>
    
    </>
  )
}

export default Combine