import Container from "@/components/Container";
import styles from "./SectionThree.module.scss";
import support from "@/assets/support.svg";
import yuan from '@/assets/yuan.svg'
import check from '@/assets/check-.svg'
import fff from '@/assets/fff.svg'
import year from "@/assets/year.svg";
import cart from "@/assets/cart.svg";
import money from "@/assets/money.svg";
import bus from "@/assets/lupa.svg";

import Image from "next/image";
import bank from "@/assets/bank.svg";
import cam from "@/assets/cam.svg";
import s337 from "@/assets/337.svg";
export const SectionThree = () => {

  
	return (
    <div className={styles.wrapper} >
      <Container>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1 className={styles.h1}>
              Какими способами осуществляются переводы в Китай?
            </h1>
            <p>
              Вам важно, чтобы оплата поставщикам в Китай была надежной? Хотите
              уберечь себя от мошенников? Мы с удовольствием окажем вам свои
              услуги!
            </p>
          </div>
          <div className={styles.card_outline}>
            <div className={styles.card}>
              <Image src={bank} alt="" />
              <div className={styles.text}>
                <h3>Банковский перевод</h3>
                <p>
                  Денежные переводы между юридическими лицами с возможностью
                  оплаты доллара или юаня на юридическое или физическое лицо в
                  Китае.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <Image src={cam} alt="" />
              <div className={styles.text}>
                <h3>Наличные</h3>
                <p>
                  Примем наличные рубли или доллары США и выдадим юань
                  поставщику в Китае
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <Image src={s337} alt="" />
              <div className={styles.text}>
                <h3>Переводы от Физ-х лиц</h3>
                <p>
                  
                  Примем деньги от физического лица и выдадим юань поставщику в
                  Китае
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.text_2}>
            <h1 className={styles.title}>
              Какие шаги нужно выполнить для отправки денег в Китай?
            </h1>
            <div className={styles.steps}>
              <div className={styles.step}>
                <Image src={support} alt="" />
                <div>
                  <span>Связаться с нашим менеджером</span>
                </div>
              </div>
              <div className={styles.step}>
                <Image src={yuan} alt="" />
                <div>
                  <span>Уточнить какой курс юаня в день оплаты</span>
                </div>
              </div>
              <div className={styles.step}>
                <Image src={check} alt="" />
                <div>
                  <span>
                    Обсудить, какая сумма перевода и банковские реквизиты
                    партнеров
                  </span>
                </div>
              </div>
              <div className={styles.step}>
                <Image src={fff} alt="" />
                <div>
                  <span>
                    Обсудить, какая сумма перевода и банковские реквизиты
                    партнеров
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className={styles.title}>Сопутствующие услуги</h1>
            <div className={styles.cardGroup}>
              <div className={`${styles.card} ${styles.topLeft}`}>
                <div className={styles.topAccent}></div>
                <div className={styles.icon}>
                  <Image src={year} alt="Icon" />
                </div>
                <div>
                  Производство в Китае под собственным брендом (OEM, ODM){" "}
                </div>
              </div>
              <div className={`${styles.card} ${styles.bottomRight}`}>
                <div className={styles.topAccent}></div>
                <div className={styles.icon}>
                  <Image src={cart} alt="Icon" />
                </div>
                <div className={styles.title}>Консолидация товаров</div>
              </div>
              <div className={`${styles.card} ${styles.topRight}`}>
                <div className={styles.topAccent}></div>
                <div className={styles.icon}>
                  <Image src={money} alt="Icon" />
                </div>
                <div className={styles.title}>Перевод денег в Китай</div>
              </div>
              <div className={`${styles.card} ${styles.bottomLeft}`}>
                <div className={styles.topAccent}></div>
                <div className={styles.icon}>
                  <Image src={bus} alt="Icon" />
                </div>
                <div className={styles.title}>Проверка поставщиков в Китае</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
