import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

export default function HeaderLogo() {
  return (
    <div className={styles.first_menu}>
      <NavLink to='/' className={styles.logo}>
        Hieu.Aptech
      </NavLink>
    </div>
  )
}
