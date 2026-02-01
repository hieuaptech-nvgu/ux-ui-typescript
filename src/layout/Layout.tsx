import { ReactNode } from 'react'
import Header from 'components/block/header/Header'
import Footer from 'components/block/footer/Footer'
import styles from './Layout.module.css'

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main className={styles.main_content}>{children}</main>
      <Footer />
    </>
  )
}
