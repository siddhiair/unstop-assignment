import React from 'react'
import Link from 'next/link'

export default function NavLink({href,text,icon,badge,active}) {
  return (
    <li>
      <Link 
				href={href} 
				className={`nav-link flex items-center lg:flex-col lg:text-center text-secondary  lg:gap-y-3 text-sm lg:text-xs font-medium ${active === 'yes' ? 'opaque-bg active' : ''}`}
			>
				<span className="flex items-center lg:flex-col lg:order-2 lg:gap-y-2">
					{icon && icon}
					{text}
				</span>
				{badge &&
					<span className="lg:order-1 relative opaque-bg text-orange rounded-xl px-2 border-current border text-[10px]"> {badge}</span>
				}
			</Link>
    </li>
  )
}
