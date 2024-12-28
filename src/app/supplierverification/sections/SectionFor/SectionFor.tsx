import Container from "@/components/Container";
import styles from "./SectionFor.module.scss";
import Image from "next/image";
import bank from "@/assets/bank.png";
import cam from "@/assets/cam.png";
import { CardMain } from "@/components/CardMain/CardMain";

export const SectionFor = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.content}>
					<div className={styles.text}>
						<h1 className={styles.h1}>
							Какими способами осуществляются переводы в Китай?
						</h1>
						<p>
							Вам важно, чтобы оплата поставщикам в Китай была надежной? Хотите
							уберечь себя от мошенников? Мы с удовольствием окажем вам свои
							услуги!
						</p>
					</div>
					<div className={styles.card_outline}>
						<div className={styles.card}>
							<Image src={bank} alt="" />
							<div className={styles.text}>
								<h3>Банковский перевод</h3>
								<p>
									Денежные переводы между юридическими лицами с возможностью
									оплаты доллара или юаня на юридическое или физическое лицо в
									Китае.
								</p>
							</div>
						</div>
						<div className={styles.card}>
							<Image src={cam} alt="" />
							<div className={styles.text}>
								<h3>Наличные</h3>
								<p>
									Примем наличные рубли или доллары США и выдадим юань
									поставщику в Китае
								</p>
							</div>
						</div>
						<div className={styles.card}>
							<Image src={bank} alt="" />
							<div className={styles.text}>
								<h3>Переводы от Физ-х лиц</h3>
								<p>
									Примем деньги от физического лица и выдадим юань поставщику в
									Китае
								</p>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};
