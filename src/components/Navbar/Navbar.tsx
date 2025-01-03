"use client";

import { useState } from "react";
import Logo from "./Logo";
import Container from "../Container";
import UserMenu from "./UserMenu";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styles from "./Navbar.module.scss";
import useRegisterModal from "@/hooks/useRegisterModal";
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
import useContactModal from "@/hooks/useContactModal";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const registerModal = useRegisterModal();
  const contactModal = useContactModal();
  return (
    <div className={styles.wrapper}>
      <Container>
        <div
          className={`transition duration-300 bg-white text-black ${styles.navbar}`}
        >
          <div className="py-4">
            <div
              className={`flex items-center justify-between ${styles.navbarContent}`}
            >
              <Logo />

              <div className="hidden md:flex gap-6 items-center">
                <div className="flex flex-col gap-5 md:flex-row md:gap-7 z-50">
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
                            <Link href="/transportation">
                              Перевозка товаров
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/ciscountries">
                              Доставка сборных товаров
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/containershipping">
                              Контейнерные перевозки
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/commission">
                              Выкуп товаров с китайских сайтов
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/marketplace">
                              Доставка товаров из Китая для маркетплейсов
                            </Link>
                          </DropdownMenuItem>
                        </div>
                        <div className="flex flex-col gap-2">
                          <DropdownMenuItem asChild>
                            <Link href="/representative">
                              Представитель в Китае
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/searchsuppliers">
                              Поиск поставщиков в Китае
                            </Link>
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
                <div className={styles.loginRegister}>
                  <button
                    onClick={registerModal.onOpen}
                    className={styles.loginLink}
                  >
                    Вход/Регистрация
                  </button>
                  <button
                    onClick={contactModal.onOpen}
                    className={styles.contactButton}
                  >
                    Связаться с нами
                  </button>
                </div>
              </div>

              <div className="md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className={styles.menuToggle}
                >
                  {isMobileMenuOpen ? (
                    <AiOutlineClose className="text-2xl" />
                  ) : (
                    <AiOutlineMenu className="text-2xl" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className={styles.mobileMenu}>
              <UserMenu />
              <div className="flex flex-col gap-3 mt-4">
                <button
                  className={styles.loginLink}
                  onClick={registerModal.onOpen}
                >
                  Вход/Регистрация
                </button>
                <button className={styles.contactButton}>
                  Связаться с нами
                </button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
