import styles from './Header.module.scss'
import Container from '@/components/Container'
import { CardRoute } from '@/components/CardRoute/CardRoute'
import img from "@/assets/mynaui_telephone.svg";
import about from "@/assets/building.svg";
import docs from '@/assets/docs.svg'
import news from '@/assets/news.svg'



export const Header = () => {

	const routes = [
		{ image: img, text: "Контакты", href: "/contacts" },
		{ image: about, text: "О нас", href: "/about" },
		{ image: docs, text: "Документы", href: "/documents" },
		{ image: news, text: "Новости", href: "/news" },
	];
  return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.cardGroup}>
					{routes.map((route) => (
						<CardRoute key={route.text} {...route} />
					))}
				</div>
			</Container>
		</div>
	);
}
