import HeaderLogo from './HeaderLogo'
import HeaderNav from './HeaderNav'
import HeaderActions from './HeaderActions'
import Container from 'components/block/container/Container'
import styles from './Header.module.css'
import { useEffect, useState } from 'react'
import MobileMenu from './MobileMenu'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <Container as='nav' size='wide'>
        <div className={styles.inner}>
          <button className={styles.menu} onClick={handleOpenMenu}>
            {openMenu ? <X width={23} height={23} /> : <Menu width={23} height={23} />}
          </button>
          <HeaderLogo />
          <div className={styles.head_right}>
            <HeaderNav />
            <HeaderActions />
          </div>
        </div>
      </Container>
      {openMenu && <MobileMenu onClose={() => setOpenMenu(false)} />}
    </header>
  )
}
