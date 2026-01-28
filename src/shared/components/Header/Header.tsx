import styles from './style.module.css'
import { NavLink } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { useState } from 'react'
import { Github, Menu } from 'lucide-react'
import { X } from 'lucide-react'
import { navigation } from '../../../data/nav-mock'
import NavigationMobile from './Navigation/Navigation-mobile'

const Header = () => {
  const [open, setOpen] = useState(false)

  const handleOpenMenu = () => {
    setOpen(!open)
  }
  return (
    <header className={styles.header}>
      <Container fluid style={{ padding: '0px 25px' }}>
        <div className={styles.header_wrapper}>
          <div className={styles.brand}>
            <div className={styles.toggle_menu} onClick={handleOpenMenu}>
              {open ? <X /> : <Menu />}
            </div>
            <button className={styles.logo}>HieuAptech</button>
          </div>
          <div className={styles.box_nav}>
            <nav className={styles.nav}>
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.end}
                  className={({ isActive }) => `${styles.nav_item} ${isActive ? styles.active : ''}`}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className={styles.socials}>
              <Github />
            </div>
          </div>
        </div>
      </Container>
      {open && <NavigationMobile onClose={() => setOpen(false)} />}
    </header>
  )
}

export default Header
