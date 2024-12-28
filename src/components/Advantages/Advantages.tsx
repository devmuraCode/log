import Image from "next/image";
import Container from "../Container";
import styles from "./Advantages.module.scss";
import advage1 from "@/assets/advan1.png";

import { CardMain } from "../CardMain/CardMain";
import advage4 from "@/assets/solar_document-linear.svg";
import advage5 from "@/assets/iconoir_hand-cash.svg";
import advage6 from "@/assets/support.svg";

import bgVector from "@/assets/bgVector.svg";
import noun from "@/assets/noun_parcel.svg";
import noun_world from "@/assets/noun_world.svg";

export const Advantages = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.advantages_title_catd}>
					<div>
						<div className={styles.general_title}>
							<div className={styles.corner}></div>

							<h1>Наши преимущества</h1>
						</div>
						<p>
							Мы привержены работе с крупными объёмами – Юридические лица, имеют
							возможность работать с грузами, начальный вес которых – 100 кг.
							Это позволяет клиентам с малыми объёмами комфортно начать
							партнёрство с Китаем. Оплата за предоставляемые услуги, работа с
							документами, «трекинг» перевозки, а также персональное
							сопровождение менеджера - все эти аспекты гарантируют падежное и
							качественное сотрудничество.
						</p>
					</div>
				</div>
				<div className={styles.tracking}>
					<div className={styles.inner}>
						<div className={styles.content_card}>
							<h2>Отслеживание груза</h2>
							<p>
								В личном кабинете Вы сможете отслеживать даже мелкие грузы из
								Китая на всех этапах доставки
							</p>
						</div>
						<Image src={advage1} alt="" />
					</div>
				</div>
				<div className={styles.img_group}>
					<div className={styles.card}>
						<div className={styles.card_content}>
							<h2 className={styles.card_title}>Надёжность</h2>
							<p className={styles.card_description}>
								Наша компания на рынке с 2016 года. Нам доверяют как физические
								лица, так и крупные компании.
							</p>
						</div>
						<div className={styles.card_icon}>
							<Image src={noun} alt="" />
						</div>
					</div>
					<div className={styles.card}>
						<div className={styles.card_content}>
							<h2 className={styles.card_title}>Лояльность к объёмам</h2>
							<p className={styles.card_description}>
								С юридическими лицами мы работаем от 100 кг веса, что позволяет
								клиенту с малых объемов начать работу с Китаем
							</p>
						</div>
						<div className={styles.card_icon}>
							<Image src={noun_world} alt="" />
						</div>
					</div>
				</div>
				<div className={styles.card_group}>
					<CardMain
						title="Оформление документов"
						description="Мы для вас подготовим закрывающие экспедиторские документы и при необходимости поможем с разрешительной документацией"
						image={advage5}
					/>
					<CardMain
						title="Персональный менеджер"
						description="На всех этапах сделки Вас будет консультировать персональный менеджер"
						image={advage4}
					/>
					<CardMain
						title="Оплата за услуги"
						description="С ИП и ООО мы работаем по договору поставки с возможностью оплаты российским рублями на расчетный счет исполнителя"
						image={advage6}
					/>
				</div>
			</Container>
		</div>
	);
};
