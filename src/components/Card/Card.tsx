import { FC } from 'react';
import styles from './Card.module.scss';

interface IProps {
  title: string;
  description: string;
}

export const Card: FC<IProps> = ({ description, title }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.cornerTopRight}></div>
    </div>
  );
};
