import React, { useState } from 'react'
import FormInput from '../components/forms/FormInput'
import BlueButton from '../components/Buttons/BlueButton'
import axios from 'axios'
import { useFormik } from 'formik'
import { basicSchema } from '../schemas'
function Registration() {
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: ""
    }, validationSchema: basicSchema, onSubmit: (values) => {
      console.log("Form values:", values);
      // You can add other frontend logic here if needed
    }
  })
  console.log(formik)
  // const [formData,setFormData] = useState({
  //     email:"",
  //     username:"",
  //     password:""
  // })

  const handleInputChange = (e) => {
    // setFormData({...formData,[e.target.name ]:e.target.value})
    // console.log(formData)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData)
    // try {
    //   const results = await axios.post("http://localhost:3000/api/register",formData)
    //   console.log("User registered:", results.data);

    // } catch (error) {
    //   console.error("Error registering user:", error.response || error.message);
    // }
  }
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='mt-32 font-mulish font-bold text-2xl'>Create Your Account</h1>
      <h2 className='mt-2 font-mulish text-sm font-normal max-w-60 text-center'>Please enter your details to sign up and create your account</h2>


      <form action="" onSubmit={formik.handleSubmit} className='flex flex-col mt-12'>
        <div className='space-y-6 mb-36'>

          {Object.keys(formik.initialValues)
            .map((field) => (
              <div>

                <FormInput
                  key={field}
                  name={field}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)} // Capitalizes first letter
                  value={formik.values[field]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={formik.errors[field] && formik.touched[field] ? "border border-red-500 text-red-500" : null}

                />
                {formik.errors[field] && formik.touched[field] ? <p className='text-red-500 text-xs font-mulish font-light'>{field} format incorrect</p> : null}
              </div>
            ))}

        </div>
        <BlueButton text="submit" className={!!Object.keys(formik.errors).length ? "opacity-50" : null} type="submit" disabled={Object.keys(formik.errors).length > 0 ? true : null} />
      </form>
    </div>
  )
}

export default Registration
