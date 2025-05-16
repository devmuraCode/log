"use client";
import Container from "@/components/Container";
import styles from "./Section.module.scss";
import bg from "@/assets/userad.svg";
import { Button } from "@/components/ui/button";
import useRegisterModal from "@/hooks/useRegisterModal";
import Image from "next/image";
export const Section1 = () => {
  const registerModal = useRegisterModal();
  return (
    <div className={styles.register}>
      <Container>
        <div className={styles.register_content}>
          <h2 className={styles.title}>Преимущества регистрации на сайте</h2>
          <div className={styles.reg}>
            <div>
              <ul>
                <li>
                  Вы получаете личного менеджера, который будет курировать ваши
                  заказы
                </li>
                <li>
                  Групповой чат с менеджером и администратором сайта (на случай
                  разногласий)
                </li>
                <li>
                  Доступ к своим заказам, где вы сможете пересмотреть информацию
                  о заказах, скачать инвойс и товар-транспортную накладную,
                  вернуться к оплате заказа
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
  );
};
