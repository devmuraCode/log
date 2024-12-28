import styles from "./Header.module.scss";
import { Card } from "@/components/Card/Card";
import Container from "@/components/Container";
import img from "@/assets/cargotrans.jpg";
import Image from "next/image";

const Header = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.header}>
					<div className={styles.content}>
						<Card
							title="Груза перевозки из Китая"
							description="Доставка грузов из Китая, сборные перевозки и контейнерные перевозки; Услуги транспортно-экспедиторской компании с контролем качества и инспекцией при погрузке; Поставка товаров из Китая."
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
