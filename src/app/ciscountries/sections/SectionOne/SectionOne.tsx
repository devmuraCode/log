import Container from "@/components/Container";
import styles from "./SectionOne.module.scss";
import house from "@/assets/house.svg";
import train from "@/assets/train.svg";
import ship from "@/assets/ship.svg";
import Image from "next/image";

export const SectionOne = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <h1>
            Сборные грузы из Китая доставляются
            <br /> следующими видами транспорта
          </h1>
        </div>
        <div className={styles.cardGroup}>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Image src={house} alt="Мультимодальная перевозка" />
            </div>
            <h3 className={styles.title}>Мультимодальная перевозка</h3>
            <div className={styles.description}>
              <p>
                Мы осуществляем мультимодальную отправку на условиях EXW — со
                складов в Гуанчжоу, Иу и Пекине, по железной дороге до
                консолидационных складов в Суйфэньхэ и Дунине. Оформление
                таможенных процедур происходит в Уссурийске, после чего
                осуществляется сборная отправка по железной дороге или
                авиатранспортом в города клиентов.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Image src={train} alt="ЖД перевозка" />
            </div>
            <h3 className={styles.title}>ЖД перевозка</h3>
            <div className={styles.description}>
              <p>
                Мы осуществляем отправку товаров на условиях FOR или EXW со
                станций Шэньчжэнь, Сучжоу (Шанхай), Циндао, а также со своих
                складов с последующим таможенным оформлением в Забайкальске,
                Ворсино и Санкт-Петербурге. После этого груз отправляется по
                железной дороге или авиатранспортом в город клиента.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Image src={ship} alt="Морская перевозка" />
            </div>
            <h3 className={styles.title}>Морская перевозка</h3>
            <div className={styles.description}>
              <p>
                Перевозка морем: доставка контейнеров морским транспортом из
                порта Шанхая в порт Владивостока с последующей перевозкой по
                железной дороге до адреса получателя собранной грузовой партии.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
