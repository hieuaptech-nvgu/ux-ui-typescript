import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

export interface NavItem {
  label: string
  path: string
  children?: NavItem[]
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Blog',
    path: '/blog'
  },
  {
    label: 'Lập trình',
    path: '/lap-trinh',
    children: [
      {
        label: 'JavaScript',
        path: '/lap-trinh/javascript'
      },
      {
        label: 'TypeScript',
        path: '/lap-trinh/typescript'
      },
      {
        label: 'React',
        path: '/lap-trinh/react'
      },
      {
        label: 'NodeJS',
        path: '/lap-trinh/nodejs'
      }
    ]
  },
  {
    label: 'About',
    path: '/about'
  }
]

export default function HeaderNav() {
  return (
    <nav className={styles.nav}>
      {NAV_ITEMS.map((item) => (
        <div className={styles.nav_item_wrapper}>
          <NavLink className={({ isActive }) => `${styles.nav_item} ${isActive ? styles.active : ''}`} to={item.path}>
            {item.label}
          </NavLink>
        </div>
      ))}
    </nav>
  )
}
