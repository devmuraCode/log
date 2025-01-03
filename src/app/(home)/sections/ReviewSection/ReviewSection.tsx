import Container from "@/components/Container";
import styles from "./ReviewSection.module.scss";
import { Button } from "@/components/ui/button";

export const ReviewSection = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <div className={styles.reviews}>
            <h1>
              Остались вопросы? <br />
              Свяжитесь с нами
            </h1>
            <Button className={styles.contactButton}>Связаться с нами</Button>
          </div>
          <h1></h1>
        </div>
      </Container>
    </div>
  );
};
