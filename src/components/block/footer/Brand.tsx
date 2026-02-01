import { NavLink } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Brand() {
  return (
    <div>
      <NavLink to='/' className={styles.logo_footer}>
        Hieu.Aptech
      </NavLink>
      <p>Chia sẻ kiến thức & trải nghiệm code</p>
    </div>
  )
}
