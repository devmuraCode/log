"use client";
import Container from "../Container";
import styles from "./Section.module.scss";
import useContactModal from "@/hooks/useContactModal";



export const Section = () => {
  const contactModal = useContactModal();
  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Остались вопросы? <br />
            Свяжитесь с нами
          </h2>
          <button className={styles.button} onClick={contactModal.onOpen}>
            Связаться с нами
          </button>
        </div>
        <div className={styles.imageWrapper}></div>
      </div>
    </Container>
  );
};
