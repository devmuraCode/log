import Container from "@/components/Container";
import styles from "./SectionTwo.module.scss";
import Image from "next/image";
import img1 from "@/assets/plane.svg";
import img2 from "@/assets/train.svg";
import img3 from "@/assets/bus.svg";
import img4 from "@/assets/ship.svg";
export const SectionTwo = () => {
	return (
    <div className={styles.wrapper}>
      <Container>
        <div>
          <h1>Основные виды доставки</h1>
          <div className={styles.cardGroup}>
            <div className={styles.card}>
              <Image src={img1} alt="img1" />
              <div className={styles.content}>
                <h3 className={styles.title}>Авиаперевозки грузов</h3>
                <p className={styles.description}>Дорогой, но быстрый</p>
              </div>
              <p className={styles.day}>от 5 дней</p>
            </div>
            <div className={styles.card}>
              <Image src={img2} alt="img2" />
              <div className={styles.content}>
                <h3 className={styles.title}>Ж/Д перевозки</h3>
                <p className={styles.description}>Экономный способ</p>
              </div>
              <p className={styles.day}>от 15 дней</p>
            </div>
            <div className={styles.card}>
              <Image src={img3} alt="img3" />
              <div className={styles.content}>
                <h3 className={styles.title}>Автоперевозки грузов</h3>
                <p className={styles.description}>Средняя стоимость</p>
              </div>
              <p className={styles.day}>от 30 дней</p>
            </div>
            <div className={styles.card}>
              <Image src={img4} alt="img4" />
              <div className={styles.content}>
                <h3 className={styles.title}>Контейнерные перевозки</h3>
                <p className={styles.description}>Самый дешевый</p>
              </div>
              <p className={styles.day}>от 40 дней</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
