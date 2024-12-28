import styles from "./Header.module.scss";
import { Card } from "@/components/Card/Card";
import Container from "@/components/Container";
import img from "@/assets/searchsuppliers.jpg";
import Image from "next/image";

const Header = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.header}>
					<div className={styles.content}>
						<Card
							title="Поиск поставщиков в Китае"
							description="Поиск товаров и оптовых поставщиков - это целая отрасль деловой деятельности в Китае.
Наша команда поможет оптимизировать ваше дело и избежать рисков на всех этапах работы с поставщиками."
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
