import React from 'react'

export default function PageTitle({text}) {
  return (
    <h1 className='text-base md:text-lg lg:text-xl text-secondary font-semibold'>{text}</h1>
  )
}
