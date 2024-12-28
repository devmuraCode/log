import Container from '@/components/Container'
import styles from './SectionFor.module.scss'

export const SectionFor = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <div className={styles.inner}>
            <h1>Минимальный вес от 15 кг!</h1>
          </div>
          <p>
            Минимальный вес принимаемый для перевозки составляет 15 кг. При
            транспортировке места весом менее 15 кг, стоимость доставки
            увеличивается от установленной ставки на 1 доллар США за каждый
            килограмм груза. Стоимость доставки зависит от типа товара, веса и
            объема груза, сложности с документами и удаленности от склада.
          </p>
        </div>
      </Container>
    </div>
  );
}
