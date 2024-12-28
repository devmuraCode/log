import Container from "@/components/Container";
import styles from "./SectionOne.module.scss";
import so_tag from "@/assets/so_tag.svg";
import Image from "next/image";
import clock from "@/assets/clock.svg";

export const SectionOne = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.content}>
					<div className={styles.card}>
						<div className={styles.inner}>
							<Image src={so_tag} alt="so_tag" />
							<h3> Стоимость услуги</h3>
						</div>
						<div className={styles.body}>
							<div>
								<h3 className={styles.h3}>
									2-10% от инвойсовой стоимости товара
								</h3>
							</div>
							<div>
								Зависит от типа и специфики продукции, объема партии и
								выбранного типа изготовления.
							</div>
						</div>
					</div>

					<div className={styles.card}>
						<div className={styles.inner}>
							<Image src={clock} alt="so_tag" />
							<h3>Сроки организации производства</h3>
						</div>
						<div className={styles.body}>
							<div>
								<h3 className={styles.h3}>
									Весь процесс может занимать от 18 до 30 дней
								</h3>
							</div>
							<div>
								Варьируются в зависимости от выбранного типа производственного
								формата, сложности выполнения заказа, размера партии товара.
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};
