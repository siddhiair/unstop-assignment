import React from 'react'
import Link from 'next/link'
import styles from './NavLink.module.css'

export default function NavLink({href,text,icon,badge}) {
  return (
    <div>
      <Link href={href} className={styles.link}>
				<span className={styles.link}>
					{icon && icon}
					{text}
				</span>
				<span className={styles.badge}>{badge && badge}</span>
			</Link>
    </div>
  )
}
