import Container from "@/components/Container";
import styles from "./SectionFor.module.scss";
import year from "@/assets/year.svg";
import cart from "@/assets/cart.svg";
import money from "@/assets/money.svg";
import img66 from "@/assets/lo.svg";
import Image from "next/image";
import Link from "next/link";

export const SectionFor = () => {
	return (
    <div className={styles.wrapper}>
      <Container>
        <div>
          <h1>Сопутствующие услуги</h1>

          <div className={styles.cardGroup}>
            <Link
              href="/manufactured"
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
              href="/ciscountries"
              className={`${styles.card} ${styles.bottomRight}`}
            >
              <div className={styles.topAccent}></div>
              <div className={styles.icon}>
                <Image src={cart} alt="Icon" />
              </div>
              <div className={styles.title}>Консолидация товаров</div>
            </Link>
            <Link
              href="/representative"
              className={`${styles.card} ${styles.topRight}`}
            >
              <div className={styles.topAccent}></div>
              <div className={styles.icon}>
                <Image src={money} alt="Icon" />
              </div>
              <div className={styles.title}>Перевод денег в Китай</div>
            </Link>
            <Link
              href="/supplierverification"
              className={`${styles.card} ${styles.bottomLeft}`}
            >
              <div className={styles.topAccent}></div>
              <div className={styles.icon}>
                <Image src={img66} alt="Icon" />
              </div>
              <div className={styles.title}>Проверка поставщиков в Китае</div>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
