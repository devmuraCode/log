"use client";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import MenuItem from "./MenuList";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
	DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const UserMenu: React.FC = () => {
	return (
		<div className="flex flex-col gap-5 md:flex-row md:gap-7">
			<Link href="/">
				<MenuItem label="Главное" />
			</Link>

			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<div className="flex items-center cursor-pointer">
						<MenuItem label="Услуги" />
						<IoIosArrowDown className="ml-0.5 text-lg" />
					</div>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="p-4 md:w-max">
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
						<div className="flex flex-col gap-2">
							<DropdownMenuItem asChild>
								<Link href="/transportation">Перевозка товаров</Link>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<Link href="/transportation">Доставка сборных товаров</Link>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<Link href="/containershipping">Контейнерные перевозки</Link>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<Link href="/commission">Выкуп товаров с китайских сайтов</Link>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<Link href="/marketplace">
									Доставка товаров из Китая для маркетплейсов
								</Link>
							</DropdownMenuItem>
						</div>
						<div className="flex flex-col gap-2">
							<DropdownMenuItem asChild>
								<Link href="/representative">Представитель в Китае</Link>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<Link href="/searchsuppliers">Поиск поставщиков в Китае</Link>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<Link href="/manufactured">
									Производство в Китае (OEM, ODM)
								</Link>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<Link href="/supplierverification">
									Проверка поставщиков в Китае
								</Link>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<Link href="/ciscountries">
									Перевод денежных средств из России
								</Link>
							</DropdownMenuItem>
						</div>
					</div>
				</DropdownMenuContent>
			</DropdownMenu>

			<Link href="/about">
				<MenuItem label="О Нас" />
			</Link>

			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<div className="flex items-center cursor-pointer">
						<MenuItem label="Помощь" />
						<IoIosArrowDown className="ml-0.5 text-lg" />
					</div>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuSeparator />
					<DropdownMenuItem asChild>
						<Link href="/transportation">
							<MenuItem label="Перевозка товаров" />
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link href="/commission">
							<MenuItem label="Выкуп товаров с китайских сайтов" />
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link href="/marketplace">
							<MenuItem label="Доставка товаров из Китая для маркетплейсов" />
						</Link>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>

			<Link href="/cargotransportation">
				<MenuItem label="Карго доставка из Китая" />
			</Link>
		</div>
	);
};

export default UserMenu;
