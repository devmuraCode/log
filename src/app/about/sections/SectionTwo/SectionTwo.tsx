import React from "react";
import Container from "@/components/Container";
import styles from "./SectionTwo.module.scss";
import about4 from "@/assets/about4.jpg";
import about5 from "@/assets/hugeicons.svg";
import year from "@/assets/year.svg";
import about from "@/assets/linear.svg";
import about2 from "@/assets/docs.svg";
import Image from "next/image";
import support from "@/assets/support.svg";
import money from '@/assets/money.svg'

export const SectionTwo = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<h2 className={styles.title}>Наши преимущества</h2>
				<div className={styles.cardGroup}>
					<div className={styles.content}>
						<div className={styles.list}>
							<div className={styles.item}>
								<Image src={about5} alt="" className={styles.icon} />
								<div>
									<h3 className={styles.itemTitle}>Отслеживание груза</h3>
									<p className={styles.description}>
										В личном кабинете Вы сможете отслеживать даже мелкие грузы
										из Китая на всех этапах доставки
									</p>
								</div>
							</div>
							<div className={styles.item}>
								<Image src={about} alt="" className={styles.icon} />
								<div>
									<h3 className={styles.itemTitle}>Надёжность</h3>
									<p className={styles.description}>
										Наша компания на рынке с 2016 года. Нам доверяют как
										физические лица, так и крупные компании
									</p>
								</div>
							</div>
							<div className={styles.item}>
								<Image src={year} alt="" className={styles.icon} />
								<div>
									<h3 className={styles.itemTitle}>Лояльность к объёмам</h3>
									<p className={styles.description}>
										С юридическими лицами мы работаем от 100 кг веса, что
										позволяет клиенту с малых объемов начать работу с Китаем
									</p>
								</div>
							</div>
							<div className={styles.item}>
								<Image src={about2} alt="" className={styles.icon} />
								<div>
									<h3 className={styles.itemTitle}>Оформление документов</h3>
									<p className={styles.description}>
										Мы для вас подготовим закрывающие экспедиторские документы и
										при необходимости поможем с разрешительной документацией
									</p>
								</div>
							</div>
							<div className={styles.item}>
								<Image src={support} alt="" className={styles.icon} />
								<div>
									<h3 className={styles.itemTitle}>Персональный менеджер</h3>
									<p className={styles.description}>
										На всех этапах сделки Вас будет консультировать персональный
										менеджер
									</p>
								</div>
							</div>
							<div className={styles.item}>
								<Image src={money} alt="" className={styles.icon} />
								<div>
									<h3 className={styles.itemTitle}>Оплата за услуги</h3>
									<p className={styles.description}>
										С ИП и ООО мы работаем по договору поставки с возможностью
										оплаты российским рублями на расчетный счет исполнителя
									</p>
								</div>
							</div>
						</div>
						<div className={styles.imageWrapper}>
							<Image
								src={about4}
								alt="Illustration"
								className={styles.illustration}
							/>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};
