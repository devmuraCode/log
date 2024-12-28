import Container from "@/components/Container";
import styles from "./SectionTwo.module.scss";
import marketeq_research from "@/assets/marketeq_research.svg";
import mage_id from "@/assets/mag_id.svg";
import Image from "next/image";
import outline_change from "@/assets/outline_change.svg";
import solar_file from "@/assets/solar_file.svg";
import transport from "@/assets/transport.svg";
import paper from "@/assets/paper.svg";
import icon from "@/assets/icon-park-outline_.svg";
import boxes from "@/assets/boxes.svg";
import support from "@/assets/support.svg";
export const SectionTwo = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <h1>Процесс организации производства</h1>
        <div className={styles.grid}>
          <div className={styles.step}>
            <div className={styles.icon}>
              <Image src={marketeq_research} alt="marketeq_research" />
              <h2>1</h2>
            </div>
            <p>Тщательный анализ технического задания</p>
          </div>
          <div className={styles.step}>
            <div className={styles.icon}>
              <Image src={mage_id} alt="marketeq_research" />
              <h2>2</h2>
            </div>
            <p>Поиск подходящих исполнителей для выполнения задачи</p>
          </div>
          <div className={styles.step}>
            <div className={styles.icon}>
              <Image src={outline_change} alt="marketeq_research" />
              <h2>3</h2>
            </div>
            <p>Сопоставление нескольких предложений и выбор оптимального</p>
          </div>
          <div className={styles.step}>
            <div className={styles.icon}>
              <Image src={solar_file} alt="marketeq_research" />
              <h2>6</h2>
            </div>
            <p>Выполнение выходного аудита</p>
          </div>
          <div className={styles.step}>
            <div className={styles.icon}>
              <Image src={transport} alt="marketeq_research" />
              <h2>5</h2>
            </div>
            <p>Предоставление транспортно-экспедиторской услуги</p>
          </div>
          <div className={styles.step}>
            <div className={styles.icon}>
              <Image src={paper} alt="marketeq_research" />
              <h2>4</h2>
            </div>
            <p>Окончательное согласование технического задания</p>
          </div>
          <div className={styles.step}>
            <div className={styles.icon}>
              <Image src={icon} alt="marketeq_research" />
              <h2>7</h2>
            </div>
            <p>
              Проверка соответствия стандартам качества на этапе производства
            </p>
          </div>
          <div className={styles.step}>
            <div className={styles.icon}>
              <Image src={boxes} alt="marketeq_research" />
              <h2>8</h2>
            </div>
            <p>Подготовка и запуск производства первой партии товара</p>
          </div>
          <div className={styles.step}>
            <div className={styles.icon}>
              <Image src={support} alt="marketeq_research" />
              <h2>9</h2>
            </div>
            <p>Обслуживание и консультационная поддержка</p>
          </div>
        </div>
      </Container>
    </div>
  );
};
