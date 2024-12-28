import Container from "@/components/Container";
import styles from "./SectionOne.module.scss";
import { CardMain } from "@/components/CardMain/CardMain";
import house from '@/assets/house.svg'
import train from '@/assets/train.svg'
import ship from '@/assets/ship.svg'
export const SectionOne = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.content}>
					<h1>
						Сборные грузы из Китая доставляются следующими видами транспорта
					</h1>
				</div>
				<div>
					<div className={styles.cardGroup}>
						<CardMain
							image={house}
							title="Мультимодальная перевозка"
							description="Мы осуществляем мультимодальную отправку на условиях EXW - со складов в Гуанчжоу, Иу и Пекине, по железной дороге до консолидационных складов в Суйфэньхэ и Дунине. Оформление таможенных процедур происходит в Уссурийске, после чего осуществляется сборная отправка по железной дороге или авиадоставка в города клиентов."
						/>
						<CardMain
							image={train}
							title="ЖД перевозка"
							description=" Мы осуществляем отправку товаров на условиях FOR или EXW со станций Шэньчжэнь, Сучжоу (Шанхай), Циндао, а также со своих складов с последующим таможенным оформлением в Забайкальске, Ворсино и Санкт-Петербурге. После этого груз отправляется по железной дороге или авиатранспортом в город нашего клиента."
						/>
						<CardMain
							image={ship}
							title="Морская перевозка"
							description="Перевозка морем: доставка контейнеров морским транспортом из порта Шанхая в порт Владивостока с последующей перевозкой по железной дороге до адреса получателя собранной грузовой партии."
						/>
					</div>
				</div>
			</Container>
		</div>
	);
};
