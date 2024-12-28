import Container from "@/components/Container";
import styles from "./SectionOne.module.scss";
import Image from "next/image";
import img from "@/assets/plane.svg";
import ship from "@/assets/ship.svg";
import bus from "@/assets/bus.svg";
import train from "@/assets/train.svg";

export const SectionOne = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.content}>
					<div className={styles.title_box}>
						<h1>Виды перевозок</h1>
					</div>
					<div className={styles.card_group}>
						<div className={styles.card}>
							<Image src={img} alt="" />
							<div className={styles.body}>
								<h3>Авиа доставка</h3>
								<div>
									<p>
										Скорейший и надёжный способ транспортировки грузов по
										воздуху. Этот метод идеально подходит для срочных и ценных
										отправлений, а также для доставки в труднодоступные регионы:
										Это обеспечивает оперативную доставку товаров на большие
										расстояния, минимизируя время в пути и гарантируя
										сохранность груза
									</p>
								</div>
							</div>
						</div>

						<div className={styles.card}>
							<Image src={ship} alt="" />
							<div className={styles.body}>
								<h3>Контейнерная перевозка</h3>
								<div>
									<p>
										Основанная на использовании стандартизированных контейнеров.
										Этот метод обеспечивает безопасность, защиту от погодных
										условий и удобство перегрузки между различными видами
										транспорта. Перевозки позволяют оптимизировать логистические
										процессы, сокращать время доставки и снижать расходы на
										логистику.
									</p>
								</div>
							</div>
						</div>
						<div className={styles.card}>
							<Image src={bus} alt="" />
							<div className={styles.body}>
								<h3>Автоперевозки</h3>
								<div>
									<p>
										Наиболее удобный и гибкий способ доставки грузов по дорогам.
										Автоперевозки идеально подходят для маломасштабных или
										частых поставок: Они обеспечивают быструю и точную доставку,
										а также позволяют легко адаптироваться к изменениям в
										логистических планах.
									</p>
								</div>
							</div>
						</div>
						<div className={styles.card}>
							<Image src={train} alt="" />
							<div className={styles.body}>
								<h3>ЖД перевозки</h3>
								<div>
									<p>
										Эффективный и экономичный способ транспортировки грузов по
										железной дороге. Этот метод идеально подходит для
										крупногабаритных и тяжёлых грузов, а также для регулярных и
										массовых поставок: Безопасная и своевременная доставка на
										большие расстояния, благодаря разветвлённой сети железных
										дорог.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};
