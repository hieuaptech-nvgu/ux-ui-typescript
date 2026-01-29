import { ReactNode } from 'react'
import Header from 'components/header/Header'
import Footer from 'components/footer/Footer'

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
