'use client'
import Container from "@/components/Container";
import styles from "./SectionTwo.module.scss";
import Image from "next/image";
import image from "@/assets/5246753.svg";
import { useEffect } from "react";

export const SectionTwo = () => {

	useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
     
      }
    }
  }, []);

	return (
    <div className={styles.wrapper} id="payment-section">
      <Container>
        <div className={styles.box}>
          <div className={styles.content}>
            <div className={styles.title}>
              <h2>
                Перевод денег в Китай !
                <br />
                <span>
                  Что необходимо для оформления перевода ? <br /> Каким способом
                  осуществляется перевод в Китай ?
                </span>
              </h2>
            </div>
            <div>
              <p>Пользуйтесь наиболее удобным для вас способом оплаты:</p>
              <ul>
                <li>- переводы от физических лиц поставщикам;</li>
                <li>
                  {" "}
                  - переводы от физических лиц китайским компаниям в долларах
                  США или юанях;
                </li>
                <li>- переводы от юридических лиц поставщикам;</li>
                <li>
                  - переводы от юридических лиц китайским компаниям в долларах
                  США или юанях.
                </li>
              </ul>
            </div>
            <p>
                Практика показывает, что основные сложности возникают не в
              процессе выбора товаров и размещения заказов, а в осуществлении
              переводов денежных средств в Китай. В сети Интернет представлено
              множество вариантов для отправки денежных средств, однако
              рекомендуется выбирать только надежные способы.
            </p>
          </div>
          <Image src={image} alt="" className={styles.image} />
        </div>
      </Container>
    </div>
  );
};
