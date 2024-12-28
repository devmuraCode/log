import Container from "@/components/Container";
import styles from "./ReviewSection.module.scss";
import { Button } from "@/components/ui/button";
import rrr from "@/assets/rrr.svg";
import Image from "next/image";

export const ReviewSection = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.content}>
					<div className={styles.reviews}>
						<h1>
							Остались вопросы? <br />
							Свяжитесь с нами
						</h1>
						<Button className={styles.contactButton}>Связаться с нами</Button>
					</div>
					<Image src={rrr} alt="" />
				</div>
			</Container>
		</div>
	);
};
