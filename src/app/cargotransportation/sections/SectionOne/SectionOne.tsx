import Container from "@/components/Container";
import styles from "./SectionOne.module.scss";
import Image from "next/image";
import rightarrow from "@/assets/right.svg";
import Link from "next/link";

export const SectionOne = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <Link href={"/transportation"} className={styles.card}>
            <h3>Карго доставки из Китая</h3>
            <div className={styles.button}>
              <Image src={rightarrow} alt="right arrow" />
            </div>
          </Link>
          <Link href={"/ciscountries"} className={styles.card}>
            <h3>Сборные перевозки (LCL)</h3>
            <div className={styles.button}>
              <Image src={rightarrow} alt="right arrow" />
            </div>
          </Link>
          <Link href={"/containershipping"} className={styles.card}>
            <h3>Контейнерные перевозки (FCL)</h3>
            <div className={styles.button}>
              <Image src={rightarrow} alt="right arrow" />
            </div>
          </Link>
          <Link href={"/ciscountries"} className={styles.card}>
            <h3>Транспортно-экспедиторское услуги</h3>
            <div className={styles.button}>
              <Image src={rightarrow} alt="right arrow" />
            </div>
          </Link>
          <Link href={"/supplierverification"} className={styles.card}>
            <h3>Контроль качества при погрузке</h3>
            <div className={styles.button}>
              <Image src={rightarrow} alt="right arrow" />
            </div>
          </Link>
          <Link href={"/representative"} className={styles.card}>
            <h3>Инспекция при погрузке товаров</h3>
            <div className={styles.button}>
              <Image src={rightarrow} alt="right arrow" />
            </div>
          </Link>
        </div>
      </Container>
    </div>
  );
};
