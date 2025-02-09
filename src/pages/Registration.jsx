import React, { useState } from 'react'
import FormInput from '../components/forms/FormInput'
import BlueButton from '../components/Buttons/BlueButton'
function Registration() {
    const [formData,setFormData] = useState({
        email:"",
        username:"",
        password:""
    })

    const handleInputChange = (e)=>{
        setFormData({...formData,[e.target.name ]:e.target.value})
        console.log(formData)
    }
  return (
    <div className='flex flex-col items-center justify-center'>
    <h1 className='mt-32 font-mulish font-bold text-2xl'>Create Your Account</h1>
    <h2 className='mt-2 font-mulish text-sm font-normal max-w-60 text-center'>Please enter your details to sign up and create your account</h2>


    <form action="" className='flex flex-col mt-12'>
       
        <FormInput name="email" onChange={handleInputChange} placeholder="Email" className="mb-4" value={formData.email}/>
        <FormInput name="username" onChange={handleInputChange} placeholder="Username"className="mb-4" value={formData.username}/>
        <FormInput name="password" onChange={handleInputChange} placeholder="Password"value={formData.password}/>
        <BlueButton text="submit" className="mt-36" type="button"/>
    </form>
    </div>
  )
}

export default Registration
