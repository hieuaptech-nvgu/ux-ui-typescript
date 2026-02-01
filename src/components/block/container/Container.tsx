import styles from './Container.module.css'
import clsx from 'clsx'

interface ContainerProps {
  children: React.ReactNode
  size?: 'default' | 'wide' | 'narrow'
  as?: React.ElementType
  className?: string
}

export default function Container({ children, size = 'default', as: Component = 'div', className }: ContainerProps) {
  return <Component className={clsx(styles.container, styles[size], className)}>{children}</Component>
}
