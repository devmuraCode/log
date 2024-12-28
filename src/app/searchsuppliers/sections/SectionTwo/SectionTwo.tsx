import Container from "@/components/Container";
import styles from "./SectionTwo.module.scss";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export const SectionTwo = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.title}>
					<h1>Поиск поставщиков в Китае: Цены, сроки, гарантии</h1>
				</div>
				<div className={styles.table_block}>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="font-medium text-blue-500">
									Сложность запроса
								</TableHead>
								<TableHead>Средний</TableHead>
								<TableHead>Сложный</TableHead>
								<TableHead>Очень сложный</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell className="text-blue-500">
									Стоимость услуги
								</TableCell>
								<TableCell>150$</TableCell>
								<TableCell>200$</TableCell>
								<TableCell>300$</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="text-blue-500">
									Срок поиска рабочих дней
								</TableCell>
								<TableCell>1-3 дня</TableCell>
								<TableCell>2-5 дней</TableCell>
								<TableCell>До 10 дней</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="text-blue-500">Отчет</TableCell>
								<TableCell colSpan={3}>
									Отчет с описанием о товаре или производстве, Дополнительная
									полезная информация. Название компании или производителя,
									Контактные данные, Уставные документы.
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</div>
			</Container>
		</div>
	);
};
