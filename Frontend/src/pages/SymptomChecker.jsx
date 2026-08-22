import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

export const SymptomChecker = () => {
  return (
    <div >
        <Header/>
        <div className="flex flex-row  gap-6 ">
        <div className=" w-[550px] h-[500px] flex-shrink-0 w-fulll justify-start">
            
        <img  className="h-full w-[550px] "src="https://static.vecteezy.com/system/resources/previews/077/629/251/non_2x/cartoon-boy-feeling-sick-with-fever-and-cold-symptoms-vector.jpg"/>
        </div>
        <div className="flex flex-col flex-1 justify-start mx-auto items-center text-left mt-18 mr-8">
            <h1 className="text-teal-400 text-6xl font-bold" > Feeling unwell?</h1>
            <h3 className="text-teal-400  font-semibold text-2xl mt-2"> Symptom Checker can help you decide what to do next</h3>
            <div className="flex flex-col gap-1.5">
        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-6">
                 Primary Symptom
                    </div>
            <input
                    type="text"
    placeholder="e.g., Stomach ache, Headache, Cough"
    className="w-full px-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all font-medium"
  />
<div className="flex flex-col gap-2 mt-3">
  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
    Severity Level
  </label> 
  <div className="grid grid-cols-3 gap-2">
    
    <button type="button" className="py-2 text-xs font-semibold rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-300 transition-colors text-center">
      Mild
    </button>
    
    <button type="button" className="py-2 text-xs font-semibold rounded-xl border border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-300 transition-colors text-center">
      Moderate
    </button>
    
    <button type="button" className="py-2 text-xs font-semibold rounded-xl border border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-300 transition-colors  text-center">
      Severe
    </button>
    
  </div>
  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-3"> Additional Information
  </label>
  < input type="text"
  placeholder= "Additional information?" 
 className="w-full px-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all font-medium"/>
 <button className="bg-teal-400 hover:bg-teal-700 px-3 py-2 border-1 border-teal-700 mt-2 mb-2 rounded-3xl"> Display Result</button>
  </div>
</div>

        </div>
        </div>
        <Navbar/>

    </div>
  )
}
export default SymptomChecker
