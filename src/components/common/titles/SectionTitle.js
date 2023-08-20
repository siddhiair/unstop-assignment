import React from 'react'

export default function SectionTitle({text, className}) {
  return (
    <h3 className={`text-base lg:text-lg text-secondary font-medium ${className && className}`}>{text}</h3>
  )
}
