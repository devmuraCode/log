import Container from "@/components/Container";
import styles from "./SectionOne.module.scss";

export const SectionOne = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.content}>
					<h1>Выкуп и доставка товаров из Китая</h1>
					<div className={styles.text}>
						<p>
							Мы предлагаем услуги по поиску, выкупу, проверке, доставке и
							получению товаров с китайских платформ, включая 1688, Alibaba,
							Taobao, Tmall и другие сайты производителей и поставщиков. Ваша
							любимая продукция ближе чем кажется. Выкупим и доставим товары с
							китайских площадок. Дешево купить в Китае, организовать
							оперативную доставку - поможет Legacy Express
						</p>
					</div>
				</div>
				<div className={styles.cardGroup}>
					<div className={styles.card}>
						<div className={styles.number}>1</div>
						<div className={styles.title}>Выкуп товаров</div>
					</div>
					<div className={styles.card}>
						<div className={styles.number}>2</div>
						<div className={styles.title}>Проверка</div>
					</div>
					<div className={styles.card}>
						<div className={styles.number}>3</div>
						<div className={styles.title}>Доставка</div>
					</div>
					<div className={styles.card}>
						<div className={styles.number}>4</div>
						<div className={styles.title}>Получение товара</div>
					</div>
				</div>
			</Container>
		</div>
	);
};
