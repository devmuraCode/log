import Image from "next/image";
import Container from "@/components/Container"; // Adjust the path if necessary
import styles from "./SectionThree.module.scss";
import bus from '@/assets/bus.svg'
import year from '@/assets/globus.svg'
import cheir from '@/assets/cheir.svg'
import people from '@/assets/people.svg'
export const SectionThree = () => {
	const services = [
		{
			icon: bus,
			title: "Доставка грузов из Китая в Россию, Казахстан, Беларусь",
			description: "От 15 кг для физических лиц, от 100 кг для юридических лиц",
		},
		{
			icon: year,
			title: "Поиск товаров, поставщиков, производителей в Китае",
			description: "А также выкуп необходимых товаров с любых китайских сайтов",
		},
		{
			icon: cheir,
			title: "Организация персональных мебельных туров",
			description: "В китайские города",
		},
		{
			icon: people,
			title: "Услуга представителя в Китае",
			description:
				"Включает проверку поставщиков в Китае, переговоры с производителями, организацию OEM/ODM производства и помощь в оплате",
		},
	];

	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.header}>
					<h2 className={styles.title}>Мы предоставляем такие услуги как</h2>
				</div>
				<div className={styles.grid}>
					{services.map((service, index) => (
						<div className={styles.card} key={index}>
							<div className={styles.iconWrapper}>
								<Image
									src={service.icon}
									alt={service.title}
									width={40}
									height={40}
									className={styles.icon}
								/>
							</div>
							<h3 className={styles.cardTitle}>{service.title}</h3>
							<p className={styles.description}>{service.description}</p>
						</div>
					))}
				</div>
			</Container>
		</div>
	);
};
