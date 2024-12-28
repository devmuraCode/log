import Image, { StaticImageData } from 'next/image'
import styles from './DocSave.module.scss'
import { FC } from 'react';

interface IProps {
    image: string | StaticImageData;
    saveIcon: string | StaticImageData;
}
export const DocSave:FC<IProps> = ({image, saveIcon}) => {
  return (
    <div className={styles.wrapper}>
        <Image src={image} alt=""/>
        <Image src={saveIcon} alt=""/>
    </div>
  )
}
