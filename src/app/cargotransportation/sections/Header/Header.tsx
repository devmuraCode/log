import styles from "./Header.module.scss";
import { Card } from "@/components/Card/Card";
import Container from "@/components/Container";
import img from "@/assets/cargotrans.svg";
import Image from "next/image";

const Header = () => {
	return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.header}>
          <div className={styles.content}>
            <Card
              title="Груза перевозки из Китая"
              description="Legacy Express — ваш надежный партнёр в международной доставке из Китая. Благодаря опыту и выстроенной стратегии мы обеспечиваем быстрые и эффективные логистические решения по всему миру."
            />
            <div>
              <Image src={img} alt="" className={styles.img} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
