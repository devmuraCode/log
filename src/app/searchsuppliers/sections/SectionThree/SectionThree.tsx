import Image from "next/image";
import Container from "@/components/Container";
import styles from "./SectionThree.module.scss";
import doc from "@/assets/document.svg"
import bus from "@/assets/verifieduser.svg";
import year from "@/assets/support.svg";
import cheir from "@/assets/iconoir_hand-cash.svg";
import people from "@/assets/diamond.svg";
import delivery from "@/assets/thunder.svg";
export const SectionThree = () => {
  const services = [
    {
      icon: doc,
      title: `Предоставляем услуги "под ключ"`,
      description: `Предоставляем комплексные консультационные, организационные и транспортно-экспедиторские услуги "под ключ" с обеспечением переводчика для работы с поставщиками.`,
    },
    {
      icon: year,
      title: "Сопровождение сделки",
      description:
        "Обеспечиваем полное сопровождение сделки на всех этапах: от заключения контракта до поставки товара клиенту.",
    },
    {
      icon: cheir,
      title: "Оплата за услуги",
      description: `Договор, позволяет проводить оплаты в российских рублях на корпоративный счёт для юридических лиц. Для физических лиц есть несколько вариантов оплаты, включая криптовалюту.`,
    },
    {
      icon: people,
      title: "Надёжность",
      description:
        " Мы работаем на рынке с 2016 года. Нам доверяют как частные лица, так и у крупных компаний.",
    },
    {
      icon: bus,
      title: "Доверия производителей",
      description:
        "Мы придерживаемся договорных отношений и принимаем оплату рублях, для корпоративных клиентов. Для частные лица могут выбрать из нескольких вариантов оплаты, включая криптовалюту, чтобы удовлетворить различные потребности нашей аудитории.",
    },
    {
      icon: delivery,
      title: "Молниеносность и высокое качество",
      description:
        "Благодаря многолетнему и плодотворному опыту сотрудничества с производственными предприятиями, мы обеспечим качественный подбор поставщиков в Китае по комфортным ценам.",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.advantages_title_catd}>
          <div>
            <div className={styles.general_title}>
              <div className={styles.corner}></div>

              <h1 className={styles.title}>
                По итогам нашей работы мы предоставляем
              </h1>
            </div>
          </div>
        </div>
        <h2 className={styles.title}></h2>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.iconWrapper}>
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={40}
                  height={40}
                  className={styles.icon}
                />
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
