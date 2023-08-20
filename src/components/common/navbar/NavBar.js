'use client';

import React, { useState } from 'react'
import NavLink from './NavLink'
import { usePathname  } from 'next/navigation'
import PageTitle from '../titles/PageTitle';

export default function NavBar() {
	const [menuShown, setMenuShown] = useState(false)

	const pathname = usePathname ();

	const toggleMenu = () => {
		if(window.matchMedia("max-width:768px")){
			const menu = document.querySelector("#menu")
			menu.classList.toggle("in");
			setMenuShown(!menuShown);
		}
	}

	//set page title for each route
	let pageTitle = "";
	switch(pathname){
		case "/":
			pageTitle = 'Dashboard';
			break;
		case "/assessment":
			pageTitle = "Assessment";
			break;
		default:
			pageTitle="Unstop"
	}

  return (
    <>
			<ul id="menu" className='flex flex-col gap-y-2'>
				<li className='flex justify-between items-center md:hidden'>
					<span className='text-sm lg:text-xs font-medium'>Menu</span>
					<button className='py-1 pl-3' onClick={toggleMenu}>
						<span className="material-icons-outlined">close</span>
					</button>
				</li>
				<NavLink 
					text="Dashboard" 
					href="/" 
					icon={<span className="material-icons-outlined">dashboard</span>} 
					active={pathname == "/" ? "yes" : "no"} 
					handleClick={toggleMenu}
				/>
				<NavLink 
					text="Assignment" 
					href="/assessment" 
					icon={<span className="material-icons-outlined">note_alt</span>} 
					active={pathname == "/assessment" ? "yes" : "no"}
					handleClick={toggleMenu}
				/>
				<NavLink 
					text="My Library" 
					href="/my-library" 
					icon={<span className="material-icons-outlined">quiz</span>} 
					active={pathname == "/my-library" ? "yes" : "no"}
					handleClick={toggleMenu}
				/>
				<li className='my-2 border-t border-dashed border-borderColorLight'></li>
				<NavLink 
					text={<>Round <br className='hidden lg:block'></br>Status</>} 
					href="/round-status" 
					icon={<span className="material-icons-outlined">beenhere</span>} 
					active={pathname == "/round-status" ? "yes" : "no"}
					handleClick={toggleMenu}
					badge="Admin" 
				/>
			</ul>
			
			<div className='flex justify-between items-center md:hidden'>
				<div className='flex items-center gap-x-5'>
					<button className='py-2 leading-none' onClick={toggleMenu}><span className="material-icons-outlined">menu</span></button>					
					<PageTitle text={pageTitle} tag="h2" />
				</div>
			</div>
			{menuShown &&  
				<div className='modal-backdrop' style={{ display: menuShown ? 'block' : 'none' }} onClick={toggleMenu}></div>
			}
		</>
  )
}
