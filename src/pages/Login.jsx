import React from 'react'
import loginImage from "../assets/login.png"
import FormInput from '../components/forms/FormInput'
import BlueButton from '../components/Buttons/BlueButton'
function Login() {
  return (
    <div className='flex flex-col items-center justify-center mt-32'>
      <img src={loginImage} alt="" className='w-36 mb-9'/>
      <FormInput placeholder="username" className='mb-4'/>
      <FormInput placeholder="password" className='mb-16'/>
      <BlueButton text="Login"/>

      <p className="mt-2 font-mulish font-semibold text-sm">Dont have an account?</p>
      <a href="./register" className=' font-mulish font-semibold text-sm underline'>Register</a>
      
    </div>
  )
}

export default Login
