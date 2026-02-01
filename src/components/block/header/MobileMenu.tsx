import styles from './Header.module.css'
import { NAV_ITEMS } from './HeaderNav'
import { NavLink } from 'react-router-dom'

interface MobileMenuProps {
  onClose: () => void
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className={styles.nav_mobile}>
      {NAV_ITEMS.map((item) => (
        <NavLink
          className={({ isActive }) => `${styles.nav_menu_item} ${isActive ? styles.active : ''}`}
          to={item.path}
          onClick={onClose}
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  )
}
