import React from 'react'
import Header from '../components/Header.jsx'
import Navbar from '../components/Navbar.jsx'
import {ScanHeart} from 'lucide-react'

export const Help = () => {
  return (
    <div>
        <Header/>
        <div className=" mt-8 flex flex-col justify-center items-center w-[850px] mx-auto">
        <label className="text-2xl text-teal-700 font-semibold  mt-2"> Please reach the below mentioned Contact Number and Email for assistance.</label>
        <label className="text-2xl mt-4 text-teal-700 font-bold  "> Thankyou for using and trusting Medimind AI</label>
        </div>
        <div className="flex justify-center items-center w-60 mx-auto mt-1 h-60">
        <ScanHeart className="text-blue-300 w-40 h-40 flex justify-center items-center"></ScanHeart>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
        <div className=" mt-1 mb-9 flex flex-col  w-[300px] bg-gray-100">
            <label className="font-semibold"> Call us at: </label>
            <label>9027328564</label>
            <label className="font-semibold"> Email: </label>
            <label>aayushi1754@gmail.com</label>
        </div>
        </div>
        <Navbar/>
    </div>
  )
}
export default Help