import styles from "./Header.module.scss";
import { Card } from "@/components/Card/Card";
import Container from "@/components/Container";
import img from "@/assets/hong-kong.jpg";
import Image from "next/image";

const Header = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.header}>
					<div className={styles.content}>
						<Card
							title="Мы находимся в Китае!"
							description="Мы обеспечиваем быструю и безопасную доставку грузов по всему миру, оптимизируя процессы и снижая издержки. Наши услуги включают международные и локальные перевозки, таможенное оформление, складскую логистику и сопровождение на всех этапах."
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
