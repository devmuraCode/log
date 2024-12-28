import Container from "@/components/Container";
import styles from "./SectionOne.module.scss";
import LocationImage from "@/assets/LocationIcon.svg";
import ClockImage from "@/assets/ClockIcon.svg";
import PhoneImage from "@/assets/PhoneIcon.svg";
import EmailImage from "@/assets/EmailIcon.svg";
import WeChatImage from "@/assets/WeChatIcon.svg";
import WhatsAppImage from "@/assets/WhatsAppIcon.svg";
import Image from "next/image";
import adressgirl from "@/assets/adressgirl.jpg";

export const SectionOne = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.section}>
					{/* Address Card */}
					<h3>Наш адрес</h3>
					<div className={styles.adress_card}>
						<div className={styles.card_adress}>
							<div className={styles.icon}>
								<Image src={LocationImage} alt="Location" />
								<p>
									Room 918, Building A, No. 1138, Zhongshan Avenue West, Tianhe
									District, Guangzhou City, Guangdong Province, China
								</p>
							</div>
							<div className={styles.icon}>
								<Image src={ClockImage} alt="Clock" />
								<p>
									Понедельник - Пятница: 12:00 - 17:00 (GMT+8)
									<br />
									Суббота: 12:00 - 17:00 (GMT+8)
								</p>
							</div>
						</div>

						<Image
							src={adressgirl}
							alt="Address girl"
							className={styles.image}
						/>
					</div>

					<div className={styles.cards}>
						{/* Phone Card */}
						<div className={styles.card}>
							<h3>Телефон</h3>
							<div className={styles.icon}>
								<Image src={PhoneImage} alt="Phone" />
								<p>+86 172 6414 4489</p>
							</div>
							<p>Прием звонков: 12:00 - 21:00</p>
						</div>

						{/* Email and Social Media Card */}
						<div className={styles.card}>
							<h3>Почта и наши соц сети</h3>
							<div className={styles.icon}>
								<Image src={EmailImage} alt="Email" />
								<p>info.legacyexpress@yandex.ru</p>
							</div>
							<div className={styles.icon}>
								<Image src={WeChatImage} alt="WeChat" />
								<p>+86 172 6414 4489</p>
							</div>
							<div className={styles.icon}>
								<Image src={WhatsAppImage} alt="WhatsApp" />
								<p>+86 172 6414 4489</p>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};
