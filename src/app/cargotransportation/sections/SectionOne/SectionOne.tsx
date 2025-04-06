import Container from "@/components/Container";
import styles from "./SectionOne.module.scss";
import Image from "next/image";
import rightarrow from "@/assets/right.svg";

export const SectionOne = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <div className={styles.card}>
            <h3>Карго доставки из Китая</h3>
            <div className={styles.button}>
              <Image src={rightarrow} alt="right arrow" />
            </div>
          </div>
          <div className={styles.card}>
            <h3>Сборные перевозки (LCL)</h3>
            <div className={styles.button}>
              <Image src={rightarrow} alt="right arrow" />
            </div>
          </div>
          <div className={styles.card}>
            <h3>Контейнерные перевозки (FCL)</h3>
            <div className={styles.button}>
              <Image src={rightarrow} alt="right arrow" />
            </div>
          </div>
          <div className={styles.card}>
            <h3>Транспортно-экспедиторское услуги</h3>
            <div className={styles.button}>
              <Image src={rightarrow} alt="right arrow" />
            </div>
          </div>
          <div className={styles.card}>
            <h3>Контроль качества при погрузке</h3>
            <div className={styles.button}>
              <Image src={rightarrow} alt="right arrow" />
            </div>
          </div>
          <div className={styles.card}>
            <h3>Инспекция при погрузке товаров</h3>
            <div className={styles.button}>
              <Image src={rightarrow} alt="right arrow" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
