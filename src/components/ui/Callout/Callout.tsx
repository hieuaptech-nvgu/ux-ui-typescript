import { ReactNode } from 'react'
import styles from './Callout.module.css'
import clsx from 'clsx'
import { LucideIcon, FileText, BadgeInfo, CircleAlert, TriangleAlert, CircleCheck } from 'lucide-react'

export type CalloutVariant = 'note' | 'info' | 'warning' | 'danger' | 'success'

type CalloutProps = {
  variant?: CalloutVariant
  title?: string
  children: ReactNode
  className?: string
}

const ICON_MAP: Record<CalloutVariant, LucideIcon> = {
  note: FileText,
  info: BadgeInfo,
  warning: CircleAlert,
  danger: TriangleAlert,
  success: CircleCheck
}

export default function Callout({ variant = 'note', title, children, className }: CalloutProps) {
  const Icon = ICON_MAP[variant]
  return (
    <div className={clsx(styles.callout, styles[variant], className)} role='note'>
      <div className={styles.callout_header}>
        <Icon className={styles.callout_icon} />
        <span className={styles.callout_title}>{title ?? variant.toUpperCase()}</span>
      </div>
      <div className={styles.callout_content}>{children}</div>
    </div>
  )
}
