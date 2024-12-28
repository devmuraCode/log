import Container from "@/components/Container";
import styles from "./SectionOne.module.scss";
import { CardMain } from "@/components/CardMain/CardMain";
import outline_user from "@/assets/paper.svg";
import solar_case from "@/assets/_picture.svg";
import handshake from "@/assets/square.svg";
import huge from "@/assets/mage_id.svg";
import arrow from "@/assets/docs.svg";
import mynaui_cart from "@/assets/hugeicons_product.svg";

export const SectionOne = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div>
					<div className={styles.title}>
						<h1>
							Проверка поставщика в Китае специалистами нашей компании включает:
						</h1>
					</div>
					<div className={styles.cardGroup}>
						<CardMain
							description="Аудит производственной компании."
							image={outline_user}
						/>
						<CardMain
							description="Подготовка фотоотчетов о производственных помещениях и складах."
							image={solar_case}
						/>
						<CardMain
							description="Проверка надежности поставщика и сбор информации."
							image={handshake}
						/>
						<CardMain
							description="Сбор контактной информации о поставщике."
							image={huge}
						/>
						<CardMain
							description="Проверка копий регистрационных документов."
							image={arrow}
						/>
						<CardMain
							description="Запрос на получение образцов товаров."
							image={mynaui_cart}
						/>
					</div>
				</div>
			</Container>
		</div>
	);
};
