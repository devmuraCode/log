import Container from '@/components/Container';
import styles from './SectionOne.module.scss'
import { Card } from '@/components/Card/Card';
import Image from 'next/image';
import about2 from '@/assets/about2.jpg'
import about3 from '@/assets/about3.jpg'
import { Card2 } from '@/components/Card/Card2';

export const SectionOne = () => {
  return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.headerGroup}>
					<div className={styles.header}>
						<div className={styles.content}>
							<Card
								title="О нашей компании"
								description="Legacy Express - товарно-транспортная компания, с 2016 года осуществляющая международную доставку грузов из Китая в Россию, Казахстан, Беларусь. За эти годы, мы выработали эффективные стратегии деятельности и проявили себя как надежный партнер для предпринимателей."
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
							<Card2
								title="Мы в Китае!"
								description="Предоставляем полный спектр услуг для бизнеса с Китаем, включая доставку грузов для частных и юридических лиц. Используя современные технологии отслеживания и управления грузами, наша компания обеспечивает прозрачность на каждом этапе доставки, что помогает клиентам быть в курсе местонахождения их грузов. Основное внимание уделяется оптимизации сроков и стоимости перевозок, что позволяет выгодно конкурировать на международном рынке."
							/>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}
