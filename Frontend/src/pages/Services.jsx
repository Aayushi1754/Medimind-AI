import React from 'react'
import Card from '../components/Card'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import {Activity} from 'lucide-react'
import {Stethoscope} from 'lucide-react'
import {ClipboardPlus} from 'lucide-react'
import {Syringe} from 'lucide-react'
import {Pill} from 'lucide-react'
import {Bot} from 'lucide-react'
import {HeartPulse} from 'lucide-react'
import {useNavigate} from 'react-router-dom'
export const Services = (props) => {
  const navigate = useNavigate();
  return(
    <div>
      <Header/>
      <div className="bg-orange-200 h-full w-full">
        <div className="flex justify-center items-center">
      <h1 className="text-6xl font-bold flex justify-center">Welcome to Medimind AI</h1>
      <HeartPulse size={60} className="text-red-400 ml-4"/>
      </div>
      <h3 className="text-2xl font-semibold text-gray-500 flex justify-center mt-2">Empowering patients with real-time insights for a healthier tomorrow.</h3>
      <div className='flex flex-row flex-wrap justify-center items-center mt-10 px-16 max-w-8xl mx-auto gap-[59px]'>
        <Card
         img="https://plus.unsplash.com/premium_photo-1679086008296-3b96ebec8ded?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3ltcHRvbSUyMGNoZWNrZXJ8ZW58MHx8MHx8fDA%3D" 
        logo={<Stethoscope size={24} className="text-green-600" />}
         title="Symptoms checker" 
         description="Check your symptoms and get personalized health insights." 
         button="Check Symptoms" 
         onClick={() => navigate('/SymptomChecker')}
         />
         <Card
         img="https://images.unsplash.com/photo-1758691461990-03b49d969495?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVkaWNhbCUyMHJlcG9ydHxlbnwwfHwwfHx8MA%3D%3D"
        logo={<ClipboardPlus size={24}  className="text-blue-600"/>}
         title="Medical Report"
         description="Review your medical reports and test results." 
         button="View Report" 
         onClick={() => navigate('/MedicalReport')}/>
         <Card
         img="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNpbmVzfGVufDB8fDB8fHww" 
         title="Medicines" 
         logo={<Syringe size={24} className="text-amber-500" />}
         description="Find information about your medications and their uses." 
         button="Check Medicine"
         onClick={()=> navigate('/Medicines')} />
         <Card
         img="https://plus.unsplash.com/premium_photo-1661377017395-29704cafd624?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHJ1ZyUyMGludGVyYWN0aW9ufGVufDB8fDB8fHww" 
         title="Drug Interaction" 
         logo={<Pill size={24} className="text-red-600" />}
         description="Check for potential interactions between your medications." 
         button="Check Interactions" 
         onClick={()=> navigate('/DrugInteraction')}/>
         <Card
         img="https://images.unsplash.com/photo-1684369175833-4b445ad6bfb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhdGJvdHxlbnwwfHwwfHx8MA%3D%3D" 
         title="AI Assistant" 
         logo={<Bot size={24} className="text-purple-600" />}
         description="Get personalized health advice and support." 
         button="Chat with AI"
         onClick={()=> navigate('/AiChat')} />
          <Navbar />
          </div>
    </div>
    </div>
  )
}
export default Services
