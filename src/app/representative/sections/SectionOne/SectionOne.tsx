import Container from "@/components/Container";
import styles from "./SectionOne.module.scss";
import Image from "next/image";
import search from "@/assets/search.svg";
import svgrepo from "@/assets/svgrepo.svg";
import solar_tag from "@/assets/solar_tag.svg";
import user3 from "@/assets/user3.svg";
import veactorusers from "@/assets/veactorusers.svg";
import outline_receipt from "@/assets/outline_receipt.svg";

export const SectionOne = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.header}>
					<h1 className={styles.title}>Представитель в Китае</h1>
				</div>

				<div className={styles.grid_wrapper}>
					<div className={styles.grid}>
						<div className={styles.card}>
							<div className={styles.card_head}>
								<Image src={search} alt="" />
								<h3>Поиск товаров в Китае</h3>
							</div>
							<div className={styles.card_footer}>
								<p>всего за 70$</p>
							</div>
						</div>
						<div className={styles.card}>
							<div className={styles.card_head}>
								<Image src={svgrepo} alt="" />
								<h3>Поиск поставщиков и производителей в Китае</h3>
							</div>
							<div className={styles.card_footer}>
								<p>от 150$</p>
							</div>
						</div>
						<div className={styles.card}>
							<div className={styles.card_head}>
								<Image src={solar_tag} alt="" />
								<h3>Производство в Китае под своим брендом (OEM, ODM)</h3>
							</div>
							<div className={styles.card_footer}>
								<p>от 100 штук</p>
							</div>
						</div>
						<div className={styles.card}>
							<div className={styles.card_head}>
								<Image src={user3} alt="" />
								<h3>Проверка поставщиков в Китае</h3>
							</div>
							<div className={styles.card_footer}>
								<p>от 150$</p>
							</div>
						</div>
						<div className={styles.card}>
							<div className={styles.card_head}>
								<Image src={veactorusers} alt="" />
								<h3>Переговоры с Китайскими производителями</h3>
							</div>
							<div className={styles.card_footer}>
								<p>Бесплатно</p>
							</div>
						</div>
						<div className={styles.card}>
							<div className={styles.card_head}>
								<Image src={outline_receipt} alt="" />
								<h3>Перевод денег в Китай</h3>
							</div>
							<div className={styles.card_footer}>
								<p>Без дополнительных комиссий</p>
							</div>
						</div>
					</div>
					<div className={styles.content}>
						<p className={styles.description}>
							Продажа товаров из Китая - перспективное направление для развития
							собственного бизнеса. Однако успех сотрудничества с китайскими
							партнёрами во многом зависит от компетентной организации
							процессов. Надёжный торговый представитель в Китае может избавить
							от множества рисков, таких как: поиск производителей, организация
							производства и возможные задержки. Обеспечьте гармоничное ведение
							бизнеса.
						</p>
						<p>
							Решать возникающие проблемы удалённо крайне сложно, а иногда и
							вовсе не представляется возможным. Legacy Express поможет найти
							бизнес-представителя в Китае. С помощью опытного агента вы сможете
							уберечь свой бизнес от разнообразных рисков. Представитель в Китае
							не только поможет вам найти качественные товары, но и организует
							переговоры, обсудит ключевые аспекты сделки, согласует цены,
							ассортимент, сроки и обеспечит выполнение договорных обязательств.
						</p>
					</div>
				</div>
			</Container>
		</div>
	);
};
