
import Header from '../components/Header.jsx'
import Navbar from '../components/Navbar.jsx'
import React, { useState } from 'react';

export const MedicalReport = () => {

  return (
    <div>
        <Header/>
        <div className="text-6xl items-center flex flex-col gap-2 justify-center font-bold text-teal-400 px-1 py-3 italics mb-20"> Your Health Data ,Simplified
          <label className="text-gray-400 font-semibold text-2xl">Upload your report to decode your results.</label> </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200 text-center">
            <input type="file"
            id="file-upload"
            accept=".pdf,.png,.jpg,.jpeg"
        className="hidden" />
        <label
        htmlFor="file-upload"
        className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm cursor-pointer transition-colors"
      >
        Choose Medical Report
      </label>
      </div>
      <div className="flex flex-col mt-2 justify-center items-center">
  <button className="font-bold text-teal-600 hover:text-white hover:bg-teal-600 border border-teal-500 mb-10 px-8 py-3 rounded-lg mx-auto transition-colors duration-200 cursor-pointer"> 
    Show Result
  </button>
</div>

        <Navbar/>
    </div>
  )
}
export default MedicalReport