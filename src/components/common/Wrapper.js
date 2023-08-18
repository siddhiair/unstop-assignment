//wrapper for sections within a page

import React from 'react'

export default function Wrapper({children, classes}) {
  return (
    <div className={`wrapper p-4 lg:p-5 ${classes && classes}`}>
			{children}
		</div>
  )
}
