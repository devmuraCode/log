import Container from "@/components/Container";
import styles from "./SectionThree.module.scss";
import year from "@/assets/year.svg";
import cart from "@/assets/cart.svg";
import money from "@/assets/money.svg";
import bus from "@/assets/bus.svg";
import Image from "next/image";

export const SectionThree = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div>
					<h1>Сопутствующие услуги</h1>

					<div className={styles.cardGroup}>
						<div className={`${styles.card} ${styles.topLeft}`}>
							<div className={styles.topAccent}></div>
							<div className={styles.icon}>
								<Image src={year} alt="Icon" />
							</div>
							<div className={styles.title}>
								Производство в Китае под собственным брендом (OEM, ODM){" "}
							</div>
						</div>
						<div className={`${styles.card} ${styles.bottomRight}`}>
							<div className={styles.topAccent}></div>
							<div className={styles.icon}>
								<Image src={cart} alt="Icon" />
							</div>
							<div className={styles.title}>Консолидация товаров</div>
						</div>
						<div className={`${styles.card} ${styles.topRight}`}>
							<div className={styles.topAccent}></div>
							<div className={styles.icon}>
								<Image src={money} alt="Icon" />
							</div>
							<div className={styles.title}>Перевод денег в Китай</div>
						</div>
						<div className={`${styles.card} ${styles.bottomLeft}`}>
							<div className={styles.topAccent}></div>
							<div className={styles.icon}>
								<Image src={bus} alt="Icon" />
							</div>
							<div className={styles.title}>Проверка поставщиков в Китае</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};
