import React from 'react'
import Header from '../components/Header.jsx'
import Navbar from '../components/Navbar.jsx'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div className="bg-blue-200 min-h-screen">
        <Header/>
        <div className="text-6xl font-bold text-black flex flex-col justify-center items-center w-[50px] mx-auto mt-3">
        <h1>Login</h1>
        </div>
        <div className="h-[150px] w-[170px] flex  items-center justify-center mx-auto mt-5">
        <img  className="h-[150px] w-[170px] rounded-3xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSigX9ePK5-Huj3Q5terd_IJF0Kl5hCe044gft1i9MgQw&s" />
        </div >
        <h2 className="text-xl font-bold mt-3 text-black bg-white flex items-center justify-center w-[230px] mx-auto rounded-full">Just One Step Away!</h2>
            <form  autocomplete="off" className=" bg-white border-2 rounded-md flex flex-col gap-4 justify-center items-center mt-4 px-8 py-2 w-[300px] mx-auto mb-16" >
                <h2 className="text-lg font-semibold mr-35">Email</h2>
                <input
                type="text"
                placeholder="Username"
                className="border-1"
                />
                <h2 className="text-lg font-semibold mr-27">Password</h2>
                <input
                type="password"
                placeholder="Password"
                className="border-1"
                />
                <div className="flex flex-row items-center gap-0">
                <input type="checkbox" className="mr-2" />
                <label className="text-gray-600">Remember me</label> </div>
                <button className="border-2 px-3 bg-gray-100 hover:bg-gray-300"type="submit">Login</button>
                <div className="flex items-center justify-center">
                <h2>Dont have an Account?</h2>
                <Link to="/Signup"className="ml-1 text-blue-600 hover:underline" >SignUp</Link>
                </div>
</form>
        < Navbar />
    </div>
  )
}
export default Login
