import React, { useState } from 'react'
import { navigation } from '../../../../data/nav-mock'
import styles from './style.module.css'
import { NavLink } from 'react-router-dom'

const NavigationMobile = ({ onClose }: { onClose: () => void }) => {
  const [activeKey, setActiveKey] = useState('about')
  const activeParent = navigation.find((i) => i.key === activeKey)
  return (
    <>
      <nav className={styles.nav_mobile}>
        <div className={styles.nav_parents}>
          {navigation.map((item) => (
            <NavLink
              to={item.path}
              end={item.end}
              className={({ isActive }) => `${styles.btn_parent} ${isActive ? styles.active : ''}`}
              onClick={() => setActiveKey(item.key)}
            >
              {item.key}
            </NavLink>
          ))}
        </div>
        <div className={styles.divider}></div>
        <div className={styles.nav_children}>
          {activeParent?.sidebar.map((child) => (
            <NavLink key={child.path} to={child.path} className={styles.child} onClick={onClose}>
              {child.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  )
}

export default NavigationMobile
