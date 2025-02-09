import React from 'react'

function FormInput({name,placeholder,value,onChange,className=""}) {
  return (
    <div>
      <input name={name} onChange={onChange} type="text" placeholder={placeholder} value={value} className={`${className} h-9 w-80 px-1 text-start rounded-md bg-offwhite text-disabled `} />
    </div>
  )
}

export default FormInput
