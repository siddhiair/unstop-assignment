import React from 'react'

export default function PageTitle({tag,text,className}) {
  const HeadingTag = tag ? tag : 'h1';
  return (
    <HeadingTag className={`text-base md:text-lg lg:text-xl text-secondary font-semibold ${className && className}`}>{text}</HeadingTag>
  )
}
