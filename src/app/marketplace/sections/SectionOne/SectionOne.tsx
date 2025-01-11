import Container from "@/components/Container";
import styles from "./SectionOne.module.scss";
import Image from "next/image";
import ozon from "@/assets/ozon.png";
import wildberries from '@/assets/wildberries.png'
import Link from "next/link";
export const SectionOne = () => {
	return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.header}>
            <div className={styles.general_title}>
              <div className={styles.corner}></div>

              <h1>Как мы работаем</h1>
            </div>
          </div>
          <div className={styles.content}>
            <p className={styles.description}>
              Наша компания предоставляет полный спектр услуг по организации
              бизнеса с Китаем. Предоставляем услуги: поиска товаров,
              поставщиков и производителей. Осуществляем проверку китайских
              поставщиков (в том числе выездные проверки), а также можем
              организовать производство товаров в Китае под вашим брендом и
              доставить грузы в нужный вам город. Работаем как «под ключ», так и
              по каждой услуге отдельно. Если вы только начинаете работу с
              маркетплейсами, мы можем предложить вам доставку товаров для
              физических лиц от 15 кг. Если же вам необходимо доставить товары с
              полным пакетом разрешительных документов, то у нас есть услуга
              доставки для юридических лиц. Услуги для юридических лиц
              предоставляет наш генеральный партнер, компания «Ми-Лан
            </p>
          </div>
          <div className={styles.images}>
            <div className={styles.card}>
              <Image src={ozon} alt="Image" />
              {/* <div>
                <Link href={'/marketplace/ozon'}>Ознакомиться полностью</Link>
              </div> */}
            </div>
            <div className={styles.card}>
              <Image src={wildberries} alt="Image" />
              {/* <div>
                <Link href={'/marketplace/wildberries'}>Ознакомиться полностью</Link>
              </div> */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
