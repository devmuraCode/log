import Container from "@/components/Container";
import styles from "./SectionTwo.module.scss";
import Image from "next/image";
import business from "@/assets/business.svg";
import ion_build from "@/assets/ion_build.svg";
import arcticons_translator from "@/assets/arcticons_translator.svg";
import solar_documents from "@/assets/solar_documents.svg";
import svgrepo from "@/assets/svgrepo.svg";

export const SectionTwo = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.content}>
					<div className={styles.title_box}>
						<h1>Услуги представителья которые мы предлагаем</h1>
					</div>
					<div className={styles.card_group}>
						<div className={styles.card}>
							<Image src={svgrepo} alt="" />
							<div className={styles.body}>
								<h3>Представление ваших интересов в Китае</h3>
								<div>
									<p>
										Торговый агент в Китае принимает активное участие на всех
										этапах сделки: согласовывает ключевые моменты, следит за
										соответствием товара спецификациям и решает любые возникшие
										проблемы, если это необходимо.
									</p>
								</div>
							</div>
						</div>

						<div className={styles.card}>
							<Image src={business} alt="" />
							<div className={styles.body}>
								<h3>Ведите бизнес дистанционно</h3>
								<div>
									<p>
										Ознакомления с предложениями различных фабрик и
										заводов-производителей, сравнение ценовой политики, качества
										товаров и уровня предоставляемого сервиса - все эти хлопоты
										возьмёт на себя представитель компании на месте.
									</p>
								</div>
							</div>
						</div>
						<div className={styles.card}>
							<Image src={ion_build} alt="" />
							<div className={styles.body}>
								<h3>Заказы на производство</h3>
								<div>
									<p>
										Китайский закупщик осуществляет поиск фабрик и заводов в
										соответствии с вашими требованиями, проверяет качество
										продукции, согласовывает объем и ассортимент.
									</p>
								</div>
							</div>
						</div>
						<div className={styles.card}>
							<Image src={arcticons_translator} alt="" />
							<div className={styles.body}>
								<h3>Проведение переговоров и услуги переводчика</h3>
								<div>
									<p>
										Языковой барьер - серьезное препятствие на пути к ведению
										успешных переговоров. Вам поможет специалист, который
										разрешит языковые проблемы и облегчит взаимодействие с
										Китаем.
									</p>
								</div>
							</div>
						</div>

						<div className={styles.card}>
							<Image src={solar_documents} alt="" />
							<div className={styles.body}>
								<h3>Аудит производства</h3>
								<div>
									<p>
										Услуга включает контроль качества продукции и своевременную
										отгрузку. Мы проверяем информацию, предоставляемой
										китайскими партнерами, и помогаем решать проблемы, связанные
										с обнаружением брака на производстве.
									</p>
								</div>
							</div>
						</div>

						<div className={styles.card}>
							<Image src={solar_documents} alt="" />
							<div className={styles.body}>
								<h3>Подготовка договоров и сопроводительных документов</h3>
								<div>
									<p>
										Представитель осуществляет контроль за составлением
										контрактов, а также проверку корректности документов. Это
										обеспечивает безопасность вашей сделки и предотвращает
										возможные проблемы при прохождении таможенных процедур.
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
