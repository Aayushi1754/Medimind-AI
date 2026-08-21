import React from 'react'
export const Card = (props) => {
  return (
    <div className="w-[300px] h-[420px] overflow-hidden rounded-[40px] shadow-lg bg-orange-100 flex flex-col gap-2">
      <div className="w-full h-[270px] flex justify-center items-center mt-6">
      <img 
      src={props.img} 
      alt={props.title} 
      className="w-[270px] h-[240px] object-cover rounded-md shadow-lg "/>
      </div>
      <div className="flex flex-col gap-2 px-1  justify-between items-center text-center">
        <div className="flex items-center gap-2 justify-center">
      <h1 className="text-2xl font-bold text-gray-800">{props.title} </h1>
      {props.logo}
    
      </div>
      <p className=" text-gray-500 font-semibold w-[250px]">{props.description}</p>
      <div className="bg-black shadow-lg w-[180px] rounded-md text-white flex justify-center items-center py-2 mt-1 mb-5">
      <button>{props.button}</button>
      </div>
      </div>

    </div>
  )
}
export default Card
