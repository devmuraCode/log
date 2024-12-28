import Container from "@/components/Container"
import styles from "./SectionThree.module.scss"
import { CardMain } from "@/components/CardMain/CardMain";
import img1 from "@/assets/plane.svg"
import img2 from "@/assets/train.svg"
import img3 from '@/assets/bus.svg'
import img4 from '@/assets/ship.svg'
export const SectionThree = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div>
          <h1>Основные виды доставки</h1>
          <div className={styles.cardGroup}>
            <CardMain
              title="Авиаперевозки грузов"
              kilogram="от 15 кг, от 5 дней"
              price="от 4.5$ за кг"
              image={img1}
            />
            <CardMain
              title="Ж/Д перевозки"
              kilogram="от 15 кг, от 15 дней"
              price="от 4$ за кг"
              image={img2}
            />
            <CardMain
              title="Ж/Д перевозки"
              kilogram="от 15 кг, от 15 дней"
              price="от 4$ за кг"
              image={img3}
            />
            <CardMain
              title="Ж/Д перевозки"
              kilogram="от 15 кг, от 15 дней"
              price="от 4$ за кг"
              image={img4}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
