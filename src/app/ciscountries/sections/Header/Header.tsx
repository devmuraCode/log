import Container from "@/components/Container";
import styles from "./Header.module.scss";
import { Card } from "@/components/Card/Card";
import Image from "next/image";
import about2 from "@/assets/cis1.jpg";
import about3 from "@/assets/cis2.jpg";

export const Header = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.headerGroup}>
					<div className={styles.header}>
						<div className={styles.content}>
							<Card
								title="Сборные грузы из Китая в Россию и страны СНГ"
								description="Доставка сборных грузов из Китая – экономичное решение, поскольку вы оплачиваете только за необходимый вам объем. Выберите сборную доставку - получите быструю и бюджетную доставку нужного вам количества товара, в нужные сроки."
							/>
							<div>
								<Image src={about2} alt="" className={styles.img} />
							</div>
						</div>
					</div>
					<div className={styles.header}>
						<div className={styles.content}>
							<div>
								<Image src={about3} alt="" className={styles.img} />
							</div>
							<Card
								title="При работе с нами вы получите:"
								description="Договор на оказание услуг или купли - продажи; Универсальный передаточный документ или акт на оказание услуг; Разрешительная документация (сертификаты, декларации соответствия);
 Акт сверки, если необходимо."
							/>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};
