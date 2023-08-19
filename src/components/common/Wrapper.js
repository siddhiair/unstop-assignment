//wrapper for sections within a page

import React from 'react'

export default function Wrapper({children, className}) {
  return (
    <div className={`wrapper p-4 lg:p-5 ${className && className}`}>
			{children}
		</div>
  )
}
