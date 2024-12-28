import Image from 'next/image';
import bg1 from '@/assets/headerbg1.jpg'
import bg2 from '@/assets/headerbg2.jpg'
import bg3 from '@/assets/headerbg3.jpg'
import styles from "./Header.module.scss";
import { Card } from "@/components/Card/Card";
import Container from "@/components/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Header = () => {
  return (
		<div className={styles.wrapper}>
			<Container>
				<Carousel className={styles.carousel}>
					<CarouselContent className={styles.content}>
						<CarouselItem>
							<div className={styles.item}>
								<Card
									title="Мы в Китае!"
									description="Изучите глобальный комплекс решений для бизнеса с Китаем, включая грузоперевозки для частных и корпоративных клиентов."
								/>
								<Image src={bg1} alt="" className={styles.image} />
							</div>
						</CarouselItem>
						<CarouselItem>
							<div className={styles.item}>
								<Card
									title="Ваш личный представитель в Китае!"
									description="Мы успешно решаем задачи любой сложности - от поиска нужной модели товара до организации вашего собственного производства в Китае."
								/>
								<Image src={bg2} alt="" className={styles.image} />
							</div>
						</CarouselItem>
						<CarouselItem>
							<div className={styles.item}>
								<Card
									title="Перевод денег китайским поставщикам легко и удобно!"
									description="Изучите услуги по переводу денежных средств в Китай, комфортно и надёжно."
								/>
								<Image src={bg3} alt="" className={styles.image} />
							</div>
						</CarouselItem>
					</CarouselContent>
					<CarouselPrevious className={styles.previous} />
					<CarouselNext className={styles.next} />
				</Carousel>
			</Container>
		</div>
	);
};
