import React from 'react'
import { Sidebar } from '../../layouts/Sidebar/Sidebar'
import MainLayout from '../../layouts/MainLayout'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './style.module.css'

const AboutPage = () => {
  return (
    <MainLayout>
      <Container fluid>
        <Row>
          <Col md={2} className={styles.sidebar_left}>
            <Sidebar />
          </Col>
          <Col md={8} className={styles.content}></Col>
          <Col md={2} className={styles.sidebar_right}></Col>
        </Row>
      </Container>
    </MainLayout>
  )
}

export default AboutPage
