import Image from "next/image";
import Container from "../Container";
import styles from "./Section.module.scss";
import people from "@/assets/home.svg";

export const Section = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Остались вопросы? <br />
            Свяжитесь с нами
          </h2>
          <button className={styles.button}>Связаться с нами</button>
        </div>
        <div className={styles.imageWrapper}>
          <Image src={people} alt="People" className={styles.image} />
        </div>
      </div>
    </Container>
  );
};
