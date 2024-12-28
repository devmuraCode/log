import Image from "next/image";
import Container from "@/components/Container"; // Adjust the path if necessary
import styles from "./SectionThree.module.scss";
import bus from "@/assets/downdocs.jpg";
import year from "@/assets/support.svg";
import cheir from "@/assets/iconoir_hand-cash.svg";
import people from "@/assets/diamond.svg";
import clock from '@/assets/ClockIcon.svg'
import delivery from '@/assets/delivery.svg'
export const SectionThree = () => {
	const services = [
		{
			icon: bus,
			title: `Предоставляем услуги "под ключ"`,
			description:
				"Хотите запустить свое дело? – предоставим консультацию, организацию и логистику.",
		},
		{
			icon: year,
			title: "Персональный менеджер",
			description:
				"Не знаете, что делать? – поможет ваш персональный менеджер.",
		},
		{
			icon: cheir,
			title: "Оплата за услуги",
			description: `Убедитесь, как легко и просто с нами платить – забудьте про "как оплачивать покупки в Китае через 1688"`,
		},
		{
			icon: people,
			title: "Надёжность",
			description:
				" Мы работаем на рынке с 2016 года и благодарны нашей обширной базе партнеров за доверие и выбор.",
		},
		{
			icon: clock,
			title: "Персональный менеджер",
			description:
				"Посвятите время более важным делам - Legacy Express выкупит, оплатит и доставит товар.",
		},
		{
			icon: delivery,
			title: "Доставка груза",
			description:
				"Мы подберём для вас оптимальный маршрут и доставим товар в любой город России, Казахстана или Беларуси.",
		},
	];

	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.header}>
					<h2 className={styles.title}>
						Мы выделили некоторые преимущества сотрудничества
					</h2>
					<p className={styles.description}>
						Обратитесь в LEGACY EXPRESS – заполучите одного из самых надежных
						посредников на платформе 1688. Мы гарантируем высококачественное
						обслуживание и тщательную проверку качества товаров перед их
						отправкой из Китая. Наша основная цель - обеспечить быструю доставку
						вашего товара. В случае выявления дефектов мы обеспечим возврат
						товара поставщику. Доверьтесь опыту специалистов, получите
						комфортные и безопасные услуги доставки товаров от лучших китайских
						производителей на платформе 1688 в Россию.
					</p>
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
