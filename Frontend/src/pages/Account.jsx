import React from 'react'
import Header from '../components/Header.jsx'
import Navbar from '../components/Navbar.jsx'
import {useNavigate} from 'react-router-dom'

export const Account = () => {
  const navigate = useNavigate();
  return (

    <div className="bg-blue-100 min-h-screen">
         <Header />
         <div className=" h-[250px] w-[700px] flex  items-center justify-center mx-auto">
         <img  className="h-[220px] w-[650px] rounded-3xl" src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIgaLlKsoInNCwk7-FxrlFFJXMNJ3uxR5VWskCpvqCyQ&s=10" />
         </div>
         <h2 className="text-5xl font-semibold text-blue-500 flex items-center justify-center italic"> Welcome to Medimind -AI</h2>
         <h3 className="text-xl font-normal text-gray-600 flex items-center justify-center">
           Peace of mind, one tap away.
         </h3>
         <div className="flex flex-col gap-7 justify-center items-center mt-4 ">
          <button  onClick={() => navigate('/Login') }className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded">
            Login
          </button>
          <button onClick={() => navigate('/Signup')} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-20 rounded mb-14">
            Sign Up
          </button>
         </div>
            <Navbar/>
    </div>
  )
}
export default Account