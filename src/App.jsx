import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/home.jsx'
import Services from './pages/Services.jsx'

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        
      </Routes>

    </div>
  )
}
export default App