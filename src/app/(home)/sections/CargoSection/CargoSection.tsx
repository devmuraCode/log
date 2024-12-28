import Container from '@/components/Container'
import styles from './CargoSection.module.scss'

export const CargoSection = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
          <div className={styles.content}>
            <h1>Доставка грузов из китая</h1>
            <div>
            <p>Legacy Express – Команда специалистов своего дела, которая с 2016 года занимается международной доставкой грузов из Китая. Инвестируйте в бизнес грамотно: быстрая доставка, профессионализм и выгодные цены на перевозку из Китая.</p>
            </div>
          </div>
      </Container>
    </div>
  )
}
