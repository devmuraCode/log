"use client";
import Image from "next/image";
import Container from "../Container";
import styles from "./Section.module.scss";
import useContactModal from "@/hooks/useContactModal";

interface SectionProps {
  imageSrc: string;
}

export const Section: React.FC<SectionProps> = ({ imageSrc }) => {
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
        <div className={styles.imageWrapper}>
          <Image
            src={imageSrc}
            alt="People"
            className={styles.image}
            width={500}
            height={500}
          />
        </div>
      </div>
    </Container>
  );
};
