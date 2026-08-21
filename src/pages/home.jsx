import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Header from '../components/Header'
import {useNavigate} from 'react-router-dom'

export const App = () => {
  const navigate = useNavigate();
  return (
    <div className='h-screen w-full'>
      <Header/>
      <div className='bg-teal-600 text-white min-h-screen w-full'>
      <h1 className='justify-center  text-7xl font-bold text-center py-4'> Medimind-AI</h1>

      <section className=' mt-8 flex flex-row justify-center gap-10 py-4 rounded-2xl'>
        <div className='mt-9 text-7xl font-bold text-center text-black'>
        <h1 className='mr-50'> Your Health, </h1>
        <h1 className='ml-20'>Our Priority</h1> 
        <h3 className=' mt-2 px-5 py-5 text-gray-400 text-2xl'> Trusted HealthCare with Advance Solution to support your health and well-being</h3>
        <div className=' flex justify-center flex-row items-centre gap-8'>
        <button  onClick={() => navigate('/Services')}className='bg-white text-black rounded-full px-3 mt-5 text-2xl shadow-lg'> Get Started</button>
        <button className='bg-white text-black rounded-full px-3 mt-5 text-2xl shadow-lg'> Learn More</button>
        </div>
        </div>
        
      <img
        src="https://media.istockphoto.com/id/455237505/photo/doctor-holding-heart.webp?s=1024x1024&w=is&k=20&c=OXxzEzssDr9Ble8O4FhoE7GsbR_ZHW0V7UE33QSxx2o="
        alt="Medical Analysis"
        className="w-1/2 h-96 object-contain rounded-full "
      />
      </section>
      </div>
      <Navbar />
      </div>
  )
}
export default App

