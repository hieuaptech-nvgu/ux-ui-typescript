import { ReactNode } from 'react'
import Header from '../shared/components/Header/Header'
import Footer from '../shared/components/Footer/Footer'
import styles from './style.module.css'
import { Container } from 'react-bootstrap'

interface Props {
  children: ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className={styles.main_content}>
        <Container style={{ padding: '25px 12px' }}>{children}</Container>
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
