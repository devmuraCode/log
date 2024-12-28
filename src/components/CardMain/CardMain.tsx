import { FC } from 'react'
import styles from './CardMain.module.scss'
import Image, { StaticImageData } from "next/image";

interface IProps {
    image: string | StaticImageData;
    title?: string;
    description?: string;
    kilogram?: string;
    price?: string;
}
export const CardMain:FC<IProps> = ({ title, description, kilogram, price, image }) => {
  return (
    <div className={styles.wrapper}>
        <Image src={image} alt=""/>
        <div className={styles.content}>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
            <p className={styles.kilogram}>{kilogram}</p>
            <p className={styles.price}>{price}</p>
        </div>
    </div>
  )
}
