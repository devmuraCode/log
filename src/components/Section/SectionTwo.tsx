"use client";
import Container from "../Container";
import styles from "./SectionTwo.module.scss";
import useContactModal from "@/hooks/useContactModal";


export const SectionTwo2 = () => {
  const contactModal = useContactModal();
  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className={styles.title}>Ищете ответ? Мы готовы помочь</h2>

          <p>
            С радостью ответим на ваши вопросы и воплотим <br /> ваши пожелания
            в жизнь!
          </p>
          <br />
          <button className={styles.button} onClick={contactModal.onOpen}>
            Связаться с нами
          </button>
        </div>
        <div className={styles.imageWrapper}>
         
        </div>
      </div>
    </Container>
  );
};
