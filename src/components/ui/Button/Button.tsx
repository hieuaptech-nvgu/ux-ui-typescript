import { ReactNode } from 'react'
import clsx from 'clsx'
import styles from './Button.module.css'

type ButtonVariant = 'default' | 'outline' | 'secondary' | 'ghost' | 'destructive' | 'link'

type Size = 'default' | 'xs' | 'sm' | 'lg'

interface ButtonProps {
  variant?: ButtonVariant
  size?: Size
  children: ReactNode
  className?: string
}

export default function Button({ variant = 'default', size = 'default', children, className }: ButtonProps) {
  return <button className={clsx(styles.btn, styles[variant], styles[size], className)}>{children}</button>
}
