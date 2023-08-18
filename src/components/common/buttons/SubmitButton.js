import React from 'react'

export default function SubmitButton({text,variant}) {
  return (
    <input 
      type='submit' 
      className="py-3 text-white text-sm font-semibold rounded w-full bg-primary cursor-pointer" 
      value={text} 
    />
  )
}
