import Container from "@/components/Container";
import styles from "./LegasySection.module.scss";
import { CardMain } from "@/components/CardMain/CardMain";
import legasy1 from "@/assets/legasy1.svg";
import legasy2 from "@/assets/legasy2.svg";
import legasy3 from "@/assets/legasy3.svg";
import legasy4 from "@/assets/legasy4.svg";
import legasy5 from "@/assets/legasy5.svg";
import legasy6 from "@/assets/legasy6.svg";

export const LegasySection = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <h1>Комплексные услуги доставки грузов из Китая от Legacy Express</h1>
          <div>
            <p>
               Мы не просто организуем перевозки из Китая, но также
              предоставляем полный спектр сопроводительных услуг, включая поиск
              производителя, ведение переговоров с поставщиком, выкуп и доставку
              товаров из Китая, контроль качества груза,
              транспортно-экспедиторские услуги и консолидацию груза.
            </p>
          </div>
        </div>
        <div className={styles.cardGroup}>
          <CardMain
            image={legasy1}
            description="В соответствии с вашими требованиями и представленной спецификацией"
            title="Поиск производителя"
          />
          <CardMain
            image={legasy2}
            description="Обсуждение деталей сделки, проверка наличия нужного товара, помощь в получении оптовой скидки"
            title="Ведение переговоров с поставщиком"
          />
          <CardMain
            image={legasy3}
            title="Выкуп и доставка товаров из Китая"
            description="Мы доставим товары удобным для Вас способом и в короткие сроки"
          />
          <CardMain
            image={legasy4}
            title="Контроль качества груза"
            description="Инспекция при погрузке: проверка соответствия заказанному размеру, модели, цвету, количеству"
          />
          <CardMain
            image={legasy5}
            title="Транспортно-экспедиторские услуги"
            description="Для юридических лиц мы предоставим экспедирование из Китая по самым доступным ценам"
          />
          <CardMain
            image={legasy6}
            title="Консолидация груза"
            description="Сбор и хранение партий грузов от нескольких поставщиков для их последующей перевозки"
          />
        </div>
      </Container>
    </div>
  );
};
