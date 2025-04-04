import Container from '../Container'
import Logo from '../Navbar/Logo'
import styles from './Footer.module.scss'
import Image from 'next/image'
import location from '@/assets/location.svg'
import phone from '@/assets/telephone.svg'
import navigation from '@/assets/navigation.svg'
import support from '@/assets/support.svg'
import Link from 'next/link'

export const Footer = () => {
  return (
    <div className={styles.wrapper}>

        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.content}>
          <div>
            <div className={styles.title}>
              <Image src={location} alt="" />
              <h3>Наш адрес</h3>
            </div>
            <p>
              Room 918, Building A, No. 1138, Zhongshan Avenue West, Tianhe
              District, Guangzhou City, Guangdong Province, China
            </p>
          </div>
          <div>
            <div className={styles.title}>
              <Image src={phone} alt="" />
              <h3>Контакты</h3>
            </div>
            <p>China +86 172 6414 4489</p>
            <p>Uzbekistan +9989 50 585 88 18</p>
          </div>
          <div>
            <div className={styles.title}>
              <Image src={navigation} alt="" />
              <h3>Навигация</h3>
            </div>
            <ul>
              <Link href="/">Главная</Link>
              <Link href="/about">О нас</Link>
              {/* <Link href="/help">Помощь</Link> */}
              <Link href="/cargotransportation">Карго доставка из Китая</Link>
              <Link href="/transportation">Перевозка товаров </Link>
              <Link href="/ciscountries">Представитель в Китае</Link>
              <Link href="/commission">Выкуп товаров с китайских сайтов</Link>
              <Link href="/ciscountries">Доставка товаров из Китая для маркетплейсов</Link>
            </ul>
          </div>
          <div>
            <div className={styles.title}>
              <Image src={support} alt="" />
              <h3>Тех поддержка</h3>
            </div>
            <p>+86 172 6414 4489</p>
          </div>
        </div>
        <p className={styles.copyright}>Все права защищены © 2024 - Legacy Express</p>

    </div>
  );
}
