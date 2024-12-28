import Container from "@/components/Container"
import styles from "./SectionTwo.module.scss"
import img from '@/assets/srok.jpg'
import Image from "next/image";

export const SectionTwo = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <div className={styles.inner}>
            <h1>Карго доставка из Китая: Сколько стоит и какие сроки?</h1>
            <ul>
              <li>
                Случаются ситуации, когда необходима срочная транспортировка
                товаров из Китая. Это может быть связано со многими факторами:
                сжатые сроки, продукция относится к категории новинок. В любом
                из случаев мы организуем максимально быструю транспортировку
                требуемых вещей в конечный пункт.
              </li>
              <li>
                Цена карго грузоперевозки из Китая во многом будет зависеть от
                объемов груза, удаленности конечного объекта и, в следствии,
                выбранного способа доставки.
              </li>
            </ul>
          </div>
          <Image src={img} alt=""/>
        </div>
      </Container>
    </div>
  );
}
