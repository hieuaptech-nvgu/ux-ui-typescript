import { Facebook, Instagram, Github } from 'lucide-react'
import styles from './Footer.module.css'

export default function Socials() {
  return (
    <div className={styles.box_socials}>
      <div className={styles.box_socials_link}>
        <Facebook width={23} height={23} strokeWidth='1.3' />
      </div>

      <div className={styles.box_socials_link}>
        <Instagram width={23} height={23} strokeWidth='1.3' />
      </div>

      <div className={styles.box_socials_link}>
        <Github width={23} height={23} strokeWidth='1.3' />
      </div>
    </div>
  )
}
