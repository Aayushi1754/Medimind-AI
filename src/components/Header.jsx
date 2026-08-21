import React from 'react'
import {HeartPlus} from 'lucide-react'
import {BellPlus} from 'lucide-react'
import {useNavigate} from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className=" py-3 text-white flex gap-7 justify-center items-center">
        <div className='flex item-center '>
            <HeartPlus className='w-15 h-15 text-blue-600'/>
        </div>
        <div className='bg-gray-100 rounded-full w-max mx-auto  flex flex-row justify-center  shadow-md px-3 py-2 ml-80'>
        <button className='text-white rounded-full text-2xl mr-7 bg-black px-3 py-2'>Login</button>
    <button className='text-white rounded-full text-2xl mr-7 py-2 bg-black px-3'>Contact</button>
    <button  onClick={() => navigate('/Services')}className='text-gray rounded-full text-2xl py-2 bg-black px-3 mr-7'>Services</button>
    <button className='text-white rounded-full text-2xl py-2 bg-black px-3'>Help</button>
    <button className='bg-blue-400 text-2xl py-2 rounded-full px-3 ml-7'>Book Appointment</button>
    </div>
    <div className='ml-auto flex items-center gap-1'>
        <BellPlus className='w-12 h-12 text-blue-600'/>
    </div>
    </div>
  )
}
export default Header
