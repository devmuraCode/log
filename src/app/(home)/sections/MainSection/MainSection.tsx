import Container from '@/components/Container'
import styles from './mainSection.module.scss'
import { CardMain } from '@/components/CardMain/CardMain'
import main1 from '@/assets/main1.svg'
import main2 from '@/assets/main2.svg'
import main3 from '@/assets/main3.svg'
import main4 from '@/assets/main4.svg'
import support from '@/assets/support.svg'
import Image from "next/image";
import { Button } from '@/components/ui/button'

export const MainSection = () => {
  return (
    <div className={styles.wrapper}>
        <Container>
            <div>
                <h2>Основные направления работы компании</h2>
                <div className={styles.cardGroup}>
                    <CardMain description='Перевозки для физических лиц' image={main1}/>
                    <CardMain description='Перевозки для юридических лиц' image={main2}/>
                    <CardMain description='Выкуп товаров в Китае' image={main3}/>
                    <CardMain description='Представитель в Китае' image={main4}/>
                </div>

                <div className={styles.support_card}>
                  <div className={styles.content_card}>
                    <Image src={support} alt=''/>
                    <h3>Мы готовы ответить на ваши любые вопросы !</h3>
                    <Button>Оставить запрос</Button>
                  </div>
                </div>
            </div>
        </Container>
    </div>
  )
}
