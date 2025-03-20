import Container from "@/components/Container";
import styles from "./SectionThree.module.scss";
import year from "@/assets/year.svg";
import cart from "@/assets/cart.svg";
import money from "@/assets/money.svg";
import bus from "@/assets/lupa.svg";
import Image from "next/image";
import Link from "next/link";

export const SectionThree = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div>
          <h1 className={styles.titleh1}>Сопутствующие услуги</h1>

          <div className={styles.cardGroup}>
            <Link
              href={"/manufactured"}
              className={`${styles.card} ${styles.topLeft}`}
            >
              <div className={styles.topAccent}></div>
              <div className={styles.icon}>
                <Image src={year} alt="Icon" />
              </div>
              <div className={styles.title}>
                Производство в Китае под собственным брендом (OEM, ODM){" "}
              </div>
            </Link>
            <Link
              href={"/commission"}
              className={`${styles.card} ${styles.bottomRight}`}
            >
              <div className={styles.topAccent}></div>
              <div className={styles.icon}>
                <Image src={cart} alt="Icon" />
              </div>
              <div className={styles.title}>Выкуп с интернет маркетплейсов</div>
            </Link>
            <Link
              href={"/representative"}
              className={`${styles.card} ${styles.topRight}`}
            >
              <div className={styles.topAccent}></div>
              <div className={styles.icon}>
                <Image src={money} alt="Icon" />
              </div>
              <div className={styles.title}>Перевод денег в Китай</div>
            </Link>
            <Link
              href={"/transportation"}
              className={`${styles.card} ${styles.bottomLeft}`}
            >
              <div className={styles.topAccent}></div>
              <div className={styles.icon}>
                <Image src={bus} alt="Icon" />
              </div>
              <div className={styles.title}>
                Поиск товаров и производителей в Китае
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
