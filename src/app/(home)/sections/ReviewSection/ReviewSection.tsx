import Container from "@/components/Container";
import styles from "./ReviewSection.module.scss";
import { Button } from "@/components/ui/button";
import useContactModal from "@/hooks/useContactModal";

export const ReviewSection = () => {
  const contactModal = useContactModal();
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <div className={styles.reviews}>
            <h1>
              Остались вопросы? <br />
              Свяжитесь с нами
            </h1>
            <Button
              className={styles.contactButton}
              onClick={contactModal.onOpen}
            >
              Связаться с нами
            </Button>
          </div>
          <h1></h1>
        </div>
      </Container>
    </div>
  );
};
