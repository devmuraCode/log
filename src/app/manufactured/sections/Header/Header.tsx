import Image from "next/image";
import Container from "@/components/Container";
import styles from "./Header.module.scss";
import manufactured from "@/assets/manufactured.jpg";
import manufactured2 from "@/assets/manufactured2.jpg";

export const Header = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.content}>
					<div className={styles.section}>
						<div className={styles.text}>
							<h2>Производство в Китае под своим брендом OEM и ODM</h2>
							<p>
								Воспользуйтесь нашим многолетним опытом – вместе организуем
								производство в Китае, и успешно решим самые амбициозные задачи и
								технические проблемы.
							</p>
							<p>
								<strong>ODM</strong> (Оригинальный производительный дизайн) –
								это контрактное производство изделий с уникальным дизайном или
								специальными характеристиками. Другими словами, вы
								разрабатываете эскизы моделей, а китайский подрядчик
								осуществляет всю необходимую подготовку для запуска производства
								и сам процесс пошива.
							</p>
							<p>
								<strong>OEM</strong> (Оригинальное оборудование производителя) –
								это контрактное производство существующих продуктов под вашим
								товарным знаком. Фактически, это копирование уже существующих
								товаров в Китае.
							</p>
						</div>
						<div className={styles.image}>
							<Image
								src={manufactured}
								alt="Manufacturing process"
								layout="responsive"
							/>
						</div>
					</div>

					<div className={styles.section}>
						<div className={styles.image}>
							<Image
								src={manufactured2}
								alt="Experience in China"
								layout="responsive"
							/>
						</div>
						<div className={styles.text}>
							<h2>Опыт работы в Китае с 2016 года</h2>
							<p>
								Правильная организация производства в Китае обеспечивает ряд
								существенных преимуществ. В зависимости от потребностей вы
								можете организовать изготовление своих товаров, пользуясь
								производственной базой крупного завода или небольших цехов. Наши
								специалисты помогут вам успешно сотрудничать с китайскими
								производителями, способными выпускать продукцию высокого
								качества, соответствующую требованиям современного конкурентного
								рынка.
							</p>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};
