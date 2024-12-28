import Container from "@/components/Container";
import styles from "./SectionOne.module.scss";
import { DocSave } from "@/components/DocSave/DocSave";
import img from "@/assets/docs2.svg";
import icon from "@/assets/save.svg";

export const SectionOne = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.content}>
					<div className={styles.individuals}>
						<h1>Доставка для физических лиц</h1>
						<div className={styles.cardGroup}>
							<DocSave image={img} saveIcon={icon} />
							<DocSave image={img} saveIcon={icon} />
							<DocSave image={img} saveIcon={icon} />
							<DocSave image={img} saveIcon={icon} />
						</div>
					</div>
					<div className={styles.legal}>
						<h1>Доставка для юридических лиц</h1>
						<div className={styles.cardGroup}>
							<DocSave image={img} saveIcon={icon} />
							<DocSave image={img} saveIcon={icon} />
							<DocSave image={img} saveIcon={icon} />
							<DocSave image={img} saveIcon={icon} />
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};
