import React, { useState } from 'react'
import FormInput from '../components/forms/FormInput'
import BlueButton from '../components/Buttons/BlueButton'
import axios from 'axios'
import { useFormik } from 'formik'
import { basicSchema } from '../schemas'
import { toast } from "react-toastify";

import { Eye, EyeOff } from "lucide-react"; // Using lucide-react icons
function Registration() {
  const [showPassword, setShowPassword] = useState(false); // Toggle state
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: ""
    }, validationSchema: basicSchema, onSubmit:async (values,{resetForm}) => {
      console.log("Form values:", values);
       try {
      const results = await axios.post("http://localhost:3000/api/register",values)
      console.log("User registered:", results.data);
      toast.success("Registration successful! you can now login.")
      resetForm()
        

    } catch (error) {
      // console.error("Error registering user:", error.response || error.message);
      
      
      toast.error(error.response.data.message)
    }
      // You can add other frontend logic here if needed
    }
  })
  console.log(formik)
  

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='mt-32 font-mulish font-bold text-2xl'>Create Your Account</h1>
      <h2 className='mt-2 font-mulish text-sm font-normal max-w-60 text-center'>
        Please enter your details to sign up and create your account
      </h2>

      <form onSubmit={formik.handleSubmit} className='flex flex-col mt-12'>
        <div className='space-y-6 mb-36'>
          
          {Object.keys(formik.initialValues).map((field) => (
            <div key={field} className="relative">
              <FormInput
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)} // Capitalizes first letter
                type={field === "password" && !showPassword ? "password" : "text"} // Toggle password type
                value={formik.values[field]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.errors[field] && formik.touched[field] ? 
                  "border border-red-500 text-red-500" : ""
                }
              />
              {/* Password toggle button */}
              {field === "password" && (
                <button
                  type="button"
                  className="absolute inset-y-0 right-2 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              )}
              {formik.errors[field] && formik.touched[field] && (
                <p className='text-red-500 text-xs font-mulish font-light'>
                  {field} format incorrect
                </p>
              )}
            </div>
          ))}
        </div>

        <BlueButton 
          text="Submit" 
          className={!!Object.keys(formik.errors).length ? "opacity-50" : ""} 
          type="submit" 
          disabled={Object.keys(formik.errors).length > 0} 
        />
      </form>
      <a href="./login" className=' font-mulish font-semibold text-sm underline mt-4'>Login</a>
    </div>
  );
}

export default Registration
