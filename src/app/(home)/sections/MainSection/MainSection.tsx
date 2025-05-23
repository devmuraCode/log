"use client";
import Container from "@/components/Container";
import styles from "./mainSection.module.scss";
import { CardMain } from "@/components/CardMain/CardMain";
import main1 from "@/assets/main1.svg";
import main2 from "@/assets/main2.svg";
import main3 from "@/assets/main3.svg";
import main4 from "@/assets/main4.svg";
import support from "@/assets/support.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import useContactModal from "@/hooks/useContactModal";
import Link from "next/link";

export const MainSection = () => {
  const contactModal = useContactModal();
  return (
    <div className={styles.wrapper}>
      <Container>
        <div>
          <h2>Основные направления работы компании</h2>
          <div className={styles.cardGroup}>
            <CardMain
              href="/transportation"
              description="Перевозки для физических лиц"
              image={main1}
            />
            <CardMain
              href="/cargotransportation"
              description="Перевозки для юридических лиц"
              image={main2}
            />
            <CardMain
              href="/commission"
              description="Выкуп товаров в Китае"
              image={main3}
            />
            <CardMain
              href="/representative"
              description="Представитель в Китае"
              image={main4}
            />
          </div>

          <div className={styles.support_card}>
            <div className={styles.content_card}>
              <Image src={support} alt="" />
              <h3>Мы готовы ответить на ваши любые вопросы !</h3>
              <Button onClick={contactModal.onOpen} className={styles.button}>
                Оставить запрос
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
