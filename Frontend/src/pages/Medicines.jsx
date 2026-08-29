import React from 'react'
import Header from '../components/Header.jsx'
import Navbar from '../components/Navbar.jsx'

export const Medicines = () => {
  return (
    <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSirPGlfqVqJUI3X-t2VrQ8ov-abS_U7-XJSVtbo94YEg&s=10"})` }}>
        <Header/>
        <div className="text-5xl font-bold text-teal-600 italic flex justify-center items-center mt-5"> Real medicines,Trusted advice</div>
        <div className=" mt-15 flex flex-col gap-2 justify-center items-center ">
        <form className="flex flex-col gap-1.5 px-3 border-rounded-md">
            <div className="text-4xl font-semibold">Enter the details below!</div>
            <div className="font-bold text-xl mt-3">Enter the name of the Medicine</div>
            <input
            type="text"
            placeholder="  Eg-Cheston cold"
            className=" w-[300px] border-1 py-2 mt-1 rounded-xl" />
              <div className="font-bold text-xl mt-5">Enter the dosage of the medicine</div>
            <input
            type="text"
            placeholder="  Eg-500mg"
            className=" w-[300px] border-1 py-2 mt-1 rounded-xl" />
            <div className="font-bold text-xl mt-5">Enter your age</div>
            <input
            type="text"
            placeholder="  Eg-20"
            className="w-[300px] border-1 py-2 mt-1 rounded-xl"
            />
            <div className="font-bold text-xl mt-5">Enter the food relation</div>
            <input
            type="text"
            placeholder="  Eg-Empty stomach, with food or no preference"
            className=" w-[300px] border-1 py-2 mt-1 rounded-xl" />
            <div className="flex flex-col gap-3">
              <label className="font-bold text-xl mt-5"> Enter the Time of the medicine</label>
              <div className="flex flex-row gap-6 ml-1 mr-1">
            <button className="rounded-2xl border-2 px-3 bg-amber-200 hover:bg-amber-400"> Morning</button>
            <button className="rounded-2xl border-2 px-3 bg-amber-200 hover:bg-amber-400">Afternoon</button>
            <button className="rounded-2xl border-2 px-3 bg-amber-200 hover:bg-amber-400">Night</button>
            </div>
            </div>
            
        </form>
        </div>
        <div className=" flex items-center justify-center mt-6 mb-4">
        <button className=" text-xl bg-amber-400 rounded-2xl hover:bg-green-500 italic px-2">Check Result</button>
        </div>
        <Navbar/>
    </div>
  )
}
export default Medicines
