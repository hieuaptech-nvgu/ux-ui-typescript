import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import { Menu } from 'lucide-react'

export default function HeaderLogo() {
  return (
    <div className={styles.first_menu}>
      <button className={styles.menu}>
        <Menu width={23} height={23} />
      </button>

      <NavLink to='/' className={styles.logo}>
        HieuAptech
      </NavLink>
    </div>
  )
}
