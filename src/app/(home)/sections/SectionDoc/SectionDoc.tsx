import Container from "@/components/Container";
import styles from "./SectionDoc.module.scss";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import advage5 from "@/assets/solar_document-linear.svg";

export const SectionDoc = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.big_box}>
          <div className={styles.box}>
            <Image src={advage5} alt="image doc" />
            <p>
              Рассчитать примерную стоимость доставки для физических лиц у наших
              менеджеров
            </p>
            <Button>Оставить запрос</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
