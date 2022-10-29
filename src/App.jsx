import React from 'react'
import {Routes,Route} from 'react-router-dom'

import Combine from './components/Combine/combine'
import Error_page from './404_error'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Combine/>} />
      <Route path="*" element={<Error_page/>} />

    </Routes>
  )
}

export default App