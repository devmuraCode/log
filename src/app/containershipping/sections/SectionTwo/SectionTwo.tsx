import Container from "@/components/Container";
import styles from "./SectionTwo.module.scss";
import { CardMain } from "@/components/CardMain/CardMain";
import train from "@/assets/train.svg";
import ship from "@/assets/ship.svg";
import city from '@/assets/solar_city.svg'
export const SectionTwo = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.content}>
					<h1>Возможности грузоперевозок нашей компании </h1>
				</div>
				<div>
					<div className={styles.cardGroup}>
						<CardMain
							image={ship}
							title="Морские контейнерные 20HQ и 40HQ"
							description="Доставка морскими линиями из любого порта Китая через порты г. Владивосток и г. Находка с дальнейшей погрузкой на ЖД до города или адреса получателя груза."
						/>
						<CardMain
							image={city}
							title="Контейнерные перевозки 40HQ через Минск"
							description="Доставка 40HQ ЖД линией с растаможкой в Минске для Физических и юридических лиц."
						/>
						<CardMain
							image={train}
							title="Контейнерная перевозка прямым ЖД сервисом"
							description="ЖД доставка грузов с растаможкой в Москве осуществляется прямой линией через Забайкальск."
						/>
					</div>
				</div>
			</Container>
		</div>
	);
};
