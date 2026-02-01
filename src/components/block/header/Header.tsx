import HeaderLogo from './HeaderLogo'
import HeaderNav from './HeaderNav'
import HeaderActions from './HeaderActions'
import Container from 'components/block/container/Container'
import styles from './Header.module.css'
import { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

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
          <HeaderLogo />
          <div className={styles.head_right}>
            <HeaderNav />
            <HeaderActions />
          </div>
        </div>
      </Container>
    </header>
  )
}
