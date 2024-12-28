import styles from "./Header.module.scss";
import { Card } from "@/components/Card/Card";
import Container from "@/components/Container";
import img from "@/assets/supplierverification.jpg";
import Image from "next/image";

const Header = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.header}>
					<div className={styles.content}>
						<Card
							title="Проверка поставщиков в Китае"
							description="Проверка поставщиков в Китае является важным этапом для минимизации рисков, связанных с их деятельностью. Legacy Express предлагает полный комплекс услуг по проверке поставщиков в Китае, чтобы вы могли уверенно размещать заказы, избегая рисков и неприятных сюрпризов. Наши специалисты работают на основе установленной базы данных и также осуществляют оценку новых потенциальных партнёров при личной встрече."
						/>
						<div>
							<Image src={img} alt="" className={styles.img} />
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Header;
