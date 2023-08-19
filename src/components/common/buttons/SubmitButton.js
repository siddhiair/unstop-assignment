import React from 'react'

export default function SubmitButton({text,disabled}) {
  return (
    <input 
      type='submit' 
      className="btn py-3 text-white text-sm font-semibold rounded w-full bg-primary cursor-pointer" 
      value={text} 
      disabled={disabled}
    />
  )
}
