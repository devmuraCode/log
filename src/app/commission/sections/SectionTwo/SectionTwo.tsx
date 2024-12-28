import Container from '@/components/Container'
import styles from './SectionTwo.module.scss'
import { Button } from '@/components/ui/button';

export const SectionTwo = () => {
  return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.content}>
					<h1>Размер комиссии за предоставляемые услуги</h1>
					<div className={styles.cardGroup}>
						<div className={styles.bigCard}>
							<div className={styles.card}>
								<div className={styles.number}>5%</div>
								<p>От 800$ до 7000$</p>
							</div>
							<div className={styles.card}>
								<div className={styles.number}>3%</div>
								<p>От 7000$ до 13000$</p>
							</div>
							<div className={styles.card}>
								<div className={styles.number}>2%</div>
								<p>От 13000$ и выше</p>
							</div>
						</div>
						<div className={styles.buttonGroup}>
							<div className={styles.button}>
								<Button>Посмотреть видео</Button>
								<span>Как мы осуществляем выкуп товара</span>
							</div>
							<div className={styles.button}>
								<Button>Скачать бланк</Button>
								<span>На заполнение выкупа товара</span>
							</div>
						</div>
					</div>

					<div className={styles.text}>
						<p>
							Примечания: Рекомендованная минимальная сумма заказа 800$ США. В
							случае если сумма Вашего заказа менее 800$ минимальная комиссия
							составит 80$ США за проделанную нами работу. Комиссия за перевод
							оплачивается за счёт клиента
						</p>
					</div>
				</div>
			</Container>
		</div>
	);
}
