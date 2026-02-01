import styles from './Footer.module.css'
import Brand from './Brand'
import Socials from './Socials'
import Copyright from './Copyright'
import Container from '../container/Container'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container size='wide'>
        <div className={styles.footer_content}>
          <div className={styles.footer_brand}>
            <Brand />
          </div>
          <div className={styles.footer_links}>
            <Socials />
          </div>
        </div>
        <Copyright />
      </Container>
    </footer>
  )
}
