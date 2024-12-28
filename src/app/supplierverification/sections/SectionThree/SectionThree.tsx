import Container from "@/components/Container";
import styles from "./SectionThree.module.scss";
import Image from "next/image";
import support from "@/assets/support.svg";
import yuan from '@/assets/yuan.svg'
import check from '@/assets/check-.svg'
import fff from '@/assets/fff.svg'
import year from "@/assets/year.svg";
import cart from "@/assets/cart.svg";
import money from "@/assets/money.svg";
import bus from "@/assets/bus.svg";
export const SectionThree = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.content}>
					<div className={styles.text_2}>
						<h1 className={styles.title}>
							Какие шаги нужно выполнить для отправки денег в Китай?
						</h1>
						<div className={styles.steps}>
							<div className={styles.step}>
								<Image src={support} alt="" />
								<div>
									<span>Связаться с нашим менеджером</span>
								</div>
							</div>
							<div className={styles.step}>
								<Image src={yuan} alt="" />
								<div>
									<span>Уточнить какой курс юаня в день оплаты</span>
								</div>
							</div>
							<div className={styles.step}>
								<Image src={check} alt="" />
								<div>
									<span>
										Обсудить, какая сумма перевода и банковские реквизиты
										партнеров
									</span>
								</div>
							</div>
							<div className={styles.step}>
								<Image src={fff} alt="" />
								<div>
									<span>
										Обсудить, какая сумма перевода и банковские реквизиты
										партнеров
									</span>
								</div>
							</div>
						</div>
					</div>

					<div>
						<h1 className={styles.title}>Сопутствующие услуги</h1>
						<div className={styles.cardGroup}>
							<div className={`${styles.card} ${styles.topLeft}`}>
								<div className={styles.topAccent}></div>
								<div className={styles.icon}>
									<Image src={year} alt="Icon" />
								</div>
								<div >
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
				</div>
			</Container>
		</div>
	);
};
