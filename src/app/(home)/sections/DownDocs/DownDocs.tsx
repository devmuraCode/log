import Container from '@/components/Container'
import styles from './DownDocs.module.scss'
import Image from "next/image";
import img from '@/assets/downIcon.svg'
import { Button } from '@/components/ui/button';
export const DownDocs = () => {
  return (
    <div className={styles.wrapper}>
        <Container>
            <div className={styles.content}>
                <h1>Скачать документы для сотрудничества с нами</h1>
                <div className={styles.downcardGroup}>
                    <div className={styles.downcard}>
                        <div className={styles.inner}>
                            <Image src={img} alt=''/>
                            <h3>Договоры и оферта на доставку из Китая </h3>
                        </div>
                        <Button>Скачать файл</Button>
                    </div>
                    <div className={styles.downcard}>
                        <div className={styles.inner}>
                            <Image src={img} alt=''/>
                            <h3>Прайс на Карго досавку</h3>
                        </div>
                        <Button>Скачать файл</Button>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}
