import styles from "./Header.module.scss";
import { Card } from "@/components/Card/Card";
import Container from "@/components/Container";
import img from "@/assets/about3.jpg";
import Image from "next/image";

const Header = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.header}>
					<div className={styles.content}>
						<Card
							title="Доставка товаров из Китая для Маркетплейсов"
							description="Доставка товаров из Китая для маркетплейсов становится все более популярной. Это не только способ заработать деньги, но и создать стабильный бизнес, торгуя товарами через такие маркетплейсы, как Wildberries, OZON и другие. Наши клиенты могут воспользоваться программой лояльности при регистрации на сайте, которая предоставляет скидки на доставку начиная с первой отправки."
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
