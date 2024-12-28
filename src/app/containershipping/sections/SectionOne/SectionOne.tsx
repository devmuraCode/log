import Container from "@/components/Container";
import styles from "./SectionOne.module.scss";
import Image from "next/image";
import container from "@/assets/container.svg";

export const SectionOne = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div>
					<h1>Параметры контейнеров </h1>
					<div className={styles.cardGroup}>
						<div className={styles.card}>
							<div className={styles.title}>
								<Image src={container} alt="" />
								<h3>Доставка 20 футового контейнера из Китая</h3>
							</div>
							<div>
								<ul>
									<li>- длиной 6 метров метра </li>
									<li>- шириной 2,4</li>
									<li>- высотой 2,5 метра</li>
								</ul>
							</div>
						</div>

						<div className={styles.card}>
							<div className={styles.title}>
								<Image src={container} alt="" />
								<h3>Доставка 20 футового контейнера из Китая</h3>
							</div>
							<div>
								<ul>
									<li>- длиной 6 метров метра </li>
									<li>- шириной 2,4</li>
									<li>- высотой 2,5 метра</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};
