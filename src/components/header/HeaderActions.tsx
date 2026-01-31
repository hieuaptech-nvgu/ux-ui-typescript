import styles from './Header.module.css'
import { useTheme } from '../../providers/theme-provider'
import { Sun, Moon } from 'lucide-react'

export default function HeaderActions() {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className={styles.actions}>
      <button onClick={toggleTheme} className={styles.themeBtn} aria-label='Toggle theme'>
        {theme === 'dark' ? (
          <Sun className={styles.icon_theme} width={23} height={23} strokeWidth='1.3' />
        ) : (
          <Moon className={styles.icon_theme} width={23} height={23} strokeWidth='1.3' />
        )}
      </button>
    </div>
  )
}
