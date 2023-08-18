import React from 'react'
import NavLink from './NavLink'

export default function NavBar() {
  return (
    <header id="masthead">
			<NavLink 
				text="Dashboard" 
				href="/" 
				icon={<span className="material-icons-outlined">dashboard</span>} 
				className="nav-link"
			/>
			<NavLink 
				text="Assignments" 
				href="/" 
				icon={<span className="material-icons-outlined">note_alt</span>} 
				className="nav-link"
			/>
			<NavLink 
				text="My Library" 
				href="/" 
				icon={<span className="material-icons-outlined">quiz</span>} 
				className="nav-link"
			/>
			<NavLink 
				text="Round Status" 
				href="/" 
				icon={<span className="material-icons-outlined">beenhere</span>} 
				badge="Admin" 
				className="nav-link"
			/>
		</header>
  )
}
