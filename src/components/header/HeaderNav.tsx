import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

export default function HeaderNav() {
  return (
    <nav className={styles.nav}>
      <NavLink className={({ isActive }) => `${styles.nav_item} ${isActive ? styles.active : ''}`} to='/blog'>
        Blog
      </NavLink>
      <NavLink className={({ isActive }) => `${styles.nav_item} ${isActive ? styles.active : ''}`} to='/about'>
        About
      </NavLink>
    </nav>
  )
}
