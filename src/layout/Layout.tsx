import { ReactNode } from 'react'
import Header from 'components/block/header/Header'
import Footer from 'components/block/footer/Footer'
import styles from './Layout.module.css'
import Container from 'components/block/container/Container'

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main className={styles.main_content}>
        <Container size='wide'>{children}</Container>
      </main>
      <Footer />
    </>
  )
}
