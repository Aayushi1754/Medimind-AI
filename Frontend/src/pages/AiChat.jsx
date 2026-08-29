import React from 'react'
import Header from '../components/Header.jsx'
import Navbar from '../components/Navbar.jsx'

export const AiChat = () => {
  return (
    <div className=" flex flex-col bg-gray-100 ">
        <Header/>
        <div className="flex items-center justify-center mt-8 text-teal-700 text-5xl font-bold italic"> This is your 24/7 AI wellness companion.</div>
        <div className="flex items-center justify-center mt-2 text-teal-700 text-2xl font-bold italic"> Your personalized path to feeling better.</div>
        <div className="flex flex-col justify-center items-center">
        <div className=" w-full max-w-[800px] border-2 border-gray-400 h-[250px]  rounded-2xl  mt-15 px-7">
            < textarea
            placeholder="Enter your query related to health"
            className="w-full text-xl text-gray-700 outline-none placeholder-gray-400 text-top-left flex justify-center items-center" />
        </div>
        <button className="text-2xl font-semibold mt-7 mb-3 text-amber-800 bg-amber-400 px-3 rounded-2xl hover:bg-green-600"> Submit</button>
        <Navbar/>
        </div>
    </div>
  )
}
export default AiChat
