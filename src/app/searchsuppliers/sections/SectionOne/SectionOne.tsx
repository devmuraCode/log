import Container from "@/components/Container";
import styles from "./SectionOne.module.scss";
import { CardMain } from "@/components/CardMain/CardMain";
import outline_user from "@/assets/outline_user.svg";
import solar_case from "@/assets/solar_case.svg";
import handshake from "@/assets/handshake.svg";
import huge from "@/assets/huge.svg";
import arrow from "@/assets/arrow.svg";
import mynaui_cart from "@/assets/mynaui_cart.svg";

export const SectionOne = () => {
  return (
		<div className={styles.wrapper}>
			<Container>
				<div>
					<h1 className={styles.h1}>Кому полезны услуги по поиску поставщиков в Китае</h1>
					<div className={styles.cardGroup}>
						<CardMain
							description="Начинающим предпринимателям"
							image={outline_user}
						/>
						<CardMain
							description="Давно занимающийся бизнесом"
							image={solar_case}
						/>
						<CardMain
							description="Планирующим начать сотрудничество с Поднебесной"
							image={handshake}
						/>
						<CardMain
							description="Предпринимателям для расширения существующего бизнеса"
							image={huge}
						/>
						<CardMain
							description="Желающим попробовать себя в новой нише"
							image={arrow}
						/>
						<CardMain
							description="Находящимся в поиске фабрики в Китае по необходимому направлению"
							image={mynaui_cart}
						/>
					</div>
				</div>
			</Container>
		</div>
	);
}
