import React from 'react';
import Header from '../components/Header.jsx';
import Navbar from '../components/Navbar.jsx';

export const DrugInteractions = () => {
  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col justify-between"
      style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSli_liPpkg38YSDlUSPWtQk8w5Ip3n-zKb3QCKsJb6Nw&s=10")` }}
    >
      <Header />

      {/* Main Form Content Container */}
      <div className="w-full flex flex-col items-center justify-center flex-grow p-4">
        <div className="w-full max-w-md p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-teal-800 shadow-xl">
          <h1 className="text-5xl font-bold text-teal-900 text-center mb-1">Interaction Checker</h1>
          <p className="text-sm text-teal-700 text-center mb-6 font-medium">Cross-analyze multiple medications for safety conflicts.</p>
          
          <div className="relative mb-6">
            <label className="block text-xs font-bold text-teal-950 uppercase tracking-wider mb-1.5">Add Medication to check:</label>
            <div className="flex gap-2">
              <input 
                type="text"
                placeholder="Type drug name (e.g., Aspirin, Paracetamol)" 
                className="flex-1 border border-gray-300 px-3 py-2 rounded-xl focus:outline-none focus:border-teal-600 bg-white"
              />
              <button className="bg-teal-700 hover:bg-teal-800 text-white font-bold px-4 py-2 rounded-xl transition shadow-sm text-sm">
                Add
              </button>
            </div>
            <p className="text-[10px] text-gray-500 mt-1 italic">Tip: You can add both generic formulas or brand names.</p>
          </div>
          <div className="w-full flex justify-center border-t pt-4">
            <button className="w-full flex items-center justify-center text-lg font-bold bg-amber-400 text-amber-950 rounded-xl hover:bg-amber-500 py-2.5 shadow-md transition tracking-wide">
              Run Interaction Check
            </button>
          </div>
        </div>
      </div>

      <Navbar />
    </div>
  );
};

export default DrugInteractions;
