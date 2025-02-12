import React from 'react'

function BlueButton({ type, text, className = "", disabled, onClick }) {
  return (
    <>
      <button onClick={onClick} type={type} disabled={disabled} className={`${className} font-mulish font-semibol text-base  bg-default text-white rounded-full py-4 px-28`}>{text}</button>
    </>
  )
}

export default BlueButton
