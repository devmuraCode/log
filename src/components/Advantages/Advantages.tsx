"use client"
import Image from "next/image";
import Container from "../Container";
import styles from "./Advantages.module.scss";
import advage1 from "@/assets/advan1.png";

import { CardMain } from "../CardMain/CardMain";
import advage4 from "@/assets/solar_document-linear.svg";
import advage5 from "@/assets/iconoir_hand-cash.svg";
import advage6 from "@/assets/support.svg";

import bgVector from "@/assets/bgVector.svg";
import noun from "@/assets/noun_parcel.svg";
import noun_world from "@/assets/noun_world.svg";
import bg from "@/assets/userad.svg";
import { Button } from "../ui/button";
import useRegisterModal from "@/hooks/useRegisterModal";


export const Advantages = () => {
    const registerModal = useRegisterModal();
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.advantages_title_catd}>
          <div>
            <div className={styles.general_title}>
              <div className={styles.corner}></div>

              <h1>Наши преимущества</h1>
            </div>
            <p>
              Мы привержены работе с крупными объёмами – Юридические лица, имеют
              возможность работать с грузами, начальный вес которых – 100 кг.
              Это позволяет клиентам с малыми объёмами комфортно начать
              партнёрство с Китаем. Оплата за предоставляемые услуги, работа с
              документами, «трекинг» перевозки, а также персональное
              сопровождение менеджера - все эти аспекты гарантируют падежное и
              качественное сотрудничество.
            </p>
          </div>
        </div>
        <div className={styles.tracking}>
          <div className={styles.inner}>
            <div className={styles.content_card}>
              <h2>Отслеживание груза</h2>
              <p>
                В личном кабинете Вы сможете отслеживать даже мелкие грузы из
                Китая на всех этапах доставки
              </p>
            </div>
            <Image src={advage1} alt="" />
          </div>
        </div>
        <div className={styles.img_group}>
          <div className={styles.card}>
            <div className={styles.card_content}>
              <h2 className={styles.card_title}>Надёжность</h2>
              <p className={styles.card_description}>
                Наша компания на рынке с 2016 года. Нам доверяют как физические
                лица, так и крупные компании.
              </p>
            </div>
            <div className={styles.card_icon}>
              <Image src={noun} alt="" />
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_content}>
              <h2 className={styles.card_title}>Лояльность к объёмам</h2>
              <p className={styles.card_description}>
                С юридическими лицами мы работаем от 100 кг веса, что позволяет
                клиенту с малых объемов начать работу с Китаем
              </p>
            </div>
            <div className={styles.card_icon}>
              <Image src={noun_world} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.card_group}>
          <div className={styles.card1}>
            <Image src={advage5} alt="" />
            <div className={styles.cardcontent}>
              <p className={styles.title1}>Оформление документов</p>
              <p className={styles.description1}>
                Мы для вас подготовим закрывающие экспедиторские документы и при
                необходимости поможем с разрешительной документацией
              </p>
            </div>
          </div>
          <div className={styles.card1}>
            <Image src={advage4} alt="" />
            <div className={styles.cardcontent}>
              <p className={styles.title1}>Персональный менеджер</p>
              <p className={styles.description1}>
                На всех этапах сделки Вас будет консультировать персональный
                менеджер
              </p>
            </div>
          </div>
          <div className={styles.card1}>
            <Image src={advage6} alt="" />
            <div className={styles.cardcontent}>
              <p className={styles.title1}>Оплата за услуги</p>
              <p className={styles.description1}>
                С ИП и ООО мы работаем по договору поставки с возможностью
                оплаты российским рублями на расчетный счет исполнителя
              </p>
            </div>
          </div>
        </div>
      </Container>

      <div className={styles.register}>
        <Container>
          <div className={styles.register_content}>
            <h2 className={styles.title}>Преимущества регистрации на сайте</h2>
            <div className={styles.reg}>
              <div>
                <ul>
                  <li>
                    Вы получаете личного менеджера, который будет курировать
                    ваши заказы
                  </li>
                  <li>
                    Групповой чат с менеджером и администратором сайта (на
                    случай разногласий)
                  </li>
                  <li>
                    Доступ к своим заказам, где вы сможете пересмотреть
                    информацию о заказах, скачать инвойс и товар-транспортную
                    накладную, вернуться к оплате заказа
                  </li>
                  <li> Возможность всегда уточнить расположения груза </li>
                </ul>
              </div>
              <div className={styles.regbtn}>
                <Image src={bg} alt="" />
                <Button onClick={registerModal.onOpen} className="px-6">
                  Пройти регистрацию
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
