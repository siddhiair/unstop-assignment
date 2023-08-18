'use client'

import React from 'react'
import NavLink from './NavLink'
import { usePathname  } from 'next/navigation'

export default function NavBar() {
	const pathname = usePathname ();

  return (
    <ul id="menu" className='flex flex-col gap-y-2'>
			<NavLink 
				text="Dashboard" 
				href="/" 
				icon={<span className="material-icons-outlined">dashboard</span>} 
				active={pathname == "/" ? "yes" : "no"}
			/>
			<NavLink 
				text="Assignment" 
				href="/assessment" 
				icon={<span className="material-icons-outlined">note_alt</span>} 
				active={pathname == "/assessment" ? "yes" : "no"}
			/>
			<NavLink 
				text="My Library" 
				href="/my-library" 
				icon={<span className="material-icons-outlined">quiz</span>} 
				active={pathname == "/my-library" ? "yes" : "no"}
			/>
			<NavLink 
				text="Round Status" 
				href="/round-status" 
				icon={<span className="material-icons-outlined">beenhere</span>} 
				active={pathname == "/round-status" ? "yes" : "no"}
				badge="Admin" 
			/>
		</ul>
  )
}
