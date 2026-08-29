import React from 'react'
import {HeartPlus} from 'lucide-react'
import {BellPlus} from 'lucide-react'
import {useNavigate} from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className=" py-3 text-white flex gap-7 justify-center items-center">
        <div className='flex items-center '>
            <HeartPlus className='w-15 h-15 text-blue-600'/>
        </div>
        <div className='bg-gray-100 rounded-full w-max flex flex-row justify-center items-center shadow-md px-3 py-2 ml-50'>
        <button  onClick={() => navigate('/Account')}className='text-white rounded-full text-2xl mr-7 bg-black px-3 py-2'>Account</button>
    <button  onClick={()=>navigate('/')}className='text-white rounded-full text-2xl mr-7 py-2 bg-black px-3'>Home</button>
    <button  onClick={() => navigate('/Services')}className='text-gray rounded-full text-2xl py-2 bg-black px-3 mr-7'>Services</button>
    <button onClick={() => navigate('/Help')}className='text-white rounded-full text-2xl py-2 bg-black px-3'>Help</button>
    <button onClick={() => navigate('/Login')} className='bg-blue-400 text-2xl py-2 rounded-full px-3 ml-7'>Book Appointment</button>
    </div>
    <div className='ml-auto flex items-center gap-1'>
        <BellPlus className='w-12 h-12 text-blue-600'/>
    </div>
    </div>
  )
}
export default Header
