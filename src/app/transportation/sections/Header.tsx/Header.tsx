import styles from "./Header.module.scss";
import { Card } from "@/components/Card/Card";
import Container from "@/components/Container";
import img from '@/assets/header2.jpg'
import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.header}>
          <div className={styles.content}>
            <Card
              title="Карго доставка грузов из Китая"
              description="Карго доставка: один из самых надежных и широко используемых способов доставки товаров из Китая в Россию. Этот быстрый, удобный, а главное экономичный вид транспортировки. Он идеален для начинающих предпринимателей и малого среднего бизнеса, нуждающихся в регулярных поставках небольших партий. При регистрации на нашем сайте предоставляются скидки на карго доставку с первой отправки."
            />
            <div>
                <Image src={img} alt="" className={styles.img}/>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
