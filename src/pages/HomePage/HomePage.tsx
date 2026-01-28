import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { Container } from 'react-bootstrap'
import Hero from './Hero/Hero'

const HomePage = () => {
  return (
    <MainLayout>
      <Container fluid>
        <Hero />
      </Container>
    </MainLayout>
  )
}

export default HomePage
