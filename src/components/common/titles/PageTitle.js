import React from 'react'

export default function PageTitle({text,className}) {
  return (
    <h1 className={`text-base md:text-lg lg:text-xl text-secondary font-semibold ${className && className}`}>{text}</h1>
  )
}
