import React from 'react'
import {Routes,Route} from 'react-router-dom'

import Main from './components/main_page/Main_page'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Resume from './components/resume/Resume'
import Services from './components/services/Services'
import Skills from './components/skills/Skills'
import Error_page from './404_error'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Projects" element={<Projects/>} />
      <Route path="/Resume" element={<Resume/>} />
      <Route path="/Services" element={<Services/>} />
      <Route path="/Skills" element={<Skills/>} />
      <Route path="*" element={<Error_page/>} />

    </Routes>
  )
}

export default App