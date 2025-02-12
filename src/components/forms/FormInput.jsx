import React from 'react';
import { EyeIcon, EyeOffIcon } from 'lucide-react'; // Install lucide-react if you haven't

function FormInput({ name, placeholder, value, onChange, className = "", type, showPasswordToggle, togglePassword }) {
  return (
    <div className="relative w-80">
      <input 
        name={name} 
        type={type} 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
        className={`${className} h-9 w-full px-3 pr-10 text-start rounded-md bg-offwhite text-disabled border border-gray-300`}
      />
      
      {showPasswordToggle && (
        <button 
          type="button" 
          onClick={togglePassword} 
          className="absolute inset-y-0 right-2 flex items-center"
        >
          {type === "password" ? <EyeIcon size={20} /> : <EyeOffIcon size={20} />}
        </button>
      )}
    </div>
  );
}

export default FormInput;
