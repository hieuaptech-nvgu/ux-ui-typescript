import { NavLink } from 'react-router-dom'
import styles from './style.module.css'
import { navigation } from '../../data/nav-mock'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      {navigation.map((section) => (
        <div key={section.key}>
          <h4 className={styles.title}>{section.key}</h4>

          <ul className={styles.list}>
            {section.sidebar.map((item) => (
              <li className={styles.item} key={item.path}>
                <NavLink className={styles.link} to={item.path}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  )
}
