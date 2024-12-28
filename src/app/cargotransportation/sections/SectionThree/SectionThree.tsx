import Container from "@/components/Container";
import styles from "./SectionThree.module.scss";

export const SectionThree = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.content}>
					<div className={styles.inner}>
						<h1>Работаем с Китаем с 2016 года</h1>
					</div>
					<p>
						В современном мире Китай является центром мировой торговли и
						крупнейшим экспортёром собственной продукции. Товары, произведённые
						в Китае, пользуются большим спросом на рынке различных стран
						благодаря своей приятной стоимости и высокому качеству. Важно
						подчеркнуть, что перевозка грузов в Россию пользуется широкой
						популярностью среди предпринимателей ведущих свой бизнес. Ощутите
						качество комфорт и доступность – станьте партнером Legacy Express.
					</p>
				</div>
			</Container>
		</div>
	);
};
