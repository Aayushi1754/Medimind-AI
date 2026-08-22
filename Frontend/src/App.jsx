import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/home.jsx'
import Services from './pages/Services.jsx'
import Account from './pages/Account.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import SymptomChecker from  './pages/SymptomChecker'
import MedicalReport from './pages/MedicalReport'
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Account" element= {<Account /> } />
        <Route path="/Login" element ={<Login />} />
        <Route path="/Signup" element ={<Signup />} />
        <Route path="/SymptomChecker" element={<SymptomChecker/>}/>
        <Route path ="/MedicalReport" element= {<MedicalReport />} />
      </Routes>

    </div>
  )
}
export default App