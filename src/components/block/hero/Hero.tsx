import styles from './Hero.module.css'
import Button from 'components/ui/Button/Button'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.box_content}>
        <h1 className={styles.hero_title}>Hi there! mình là Hiếu</h1>
        <p className={styles.hero_intro}>Đây là nơi chia sẻ về trải nghiệm và kiến thức của mình về code</p>
        <div className={styles.hero_jump}>
          <Button variant='default' size='lg'>
            Started
          </Button>
        </div>
      </div>
    </section>
  )
}
