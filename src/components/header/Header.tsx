import { useTheme } from 'providers/theme-provider'

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  return (
    <>
      <button onClick={toggleTheme}>{theme === 'dark' ? '🌙 Dark' : '☀️ Light'}</button>
    </>
  )
}
