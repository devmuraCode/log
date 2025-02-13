import Container from "@/components/Container";
import styles from "./SectionFive.module.scss";
import year from "@/assets/year.svg";
import cart from "@/assets/cart.svg";
import money from "@/assets/money.svg";
import bus from "@/assets/bus.svg";
import Image from "next/image";
import Link from "next/link";

export const SectionFive = () => {
	return (
    <div className={styles.wrapper}>
      <Container>
        <div>
          <h1 className={styles.titleh1}>Сопутствующие услуги</h1>

          <div className={styles.cardGroup}>
            <Link
              href={"/commission"}
              className={`${styles.card} ${styles.topLeft}`}
            >
              <div className={styles.topAccent}></div>
              <div className={styles.icon}>
                <Image src={year} alt="Icon" />
              </div>
              <div className={styles.title}>Выкуп с 1688</div>
            </Link>
            <Link
              href={"/marketplace"}
              className={`${styles.card} ${styles.bottomRight}`}
            >
              <div className={styles.topAccent}></div>
              <div className={styles.icon}>
                <Image src={cart} alt="Icon" />
              </div>
              <div className={styles.title}>Продажа на маркетплейсах</div>
            </Link>
            <Link
              href={"/ciscountries"}
              className={`${styles.card} ${styles.topRight}`}
            >
              <div className={styles.topAccent}></div>
              <div className={styles.icon}>
                <Image src={money} alt="Icon" />
              </div>
              <div className={styles.title}>Перевод денежных средств</div>
            </Link>
            <Link
              href={"/transportation"}
              className={`${styles.card} ${styles.bottomLeft}`}
            >
              <div className={styles.topAccent}></div>
              <div className={styles.icon}>
                <Image src={bus} alt="Icon" />
              </div>
              <div className={styles.title}>Перевозка товаров </div>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
