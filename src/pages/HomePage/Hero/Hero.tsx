import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styles from './style.module.css'
import HeroImg from '../../../assets/images/handcoding.png'
const Hero = () => {
  return (
    <Row className='justify-content-center'>
      <Col md={7}></Col>
      <Col md={5} className='d-flex justify-content-center'>
        <div className={styles.box_img}>
          <img className={styles.hero_img} src={HeroImg} alt='hero' />
        </div>
      </Col>
    </Row>
  )
}

export default Hero
