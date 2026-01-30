import HeaderLogo from './HeaderLogo'
import HeaderNav from './HeaderNav'
import HeaderActions from './HeaderActions'
import Container from 'components/container/Container'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
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
