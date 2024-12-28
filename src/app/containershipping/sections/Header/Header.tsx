import styles from "./Header.module.scss";
import { Card } from "@/components/Card/Card";
import Container from "@/components/Container";
import img from "@/assets/containershipping.jpg";
import Image from "next/image";

const Header = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.header}>
					<div className={styles.content}>
						<Card
							title="Контейнерная перевозка"
							description="Cпособ удобно и экономично доставить свои товары:

Экономьте на логистике: платите меньше за транспортировку и имейте возможность размещения 1 или 2 контейнеров на одной платформе.

 Сокращение затрат на упаковку: перегрузка осуществляется более бережно.

Контейнерная перевозка чаще всего сопровождается пакетом документов на товар."
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
