"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import Container from "../Container";
import UserMenu from "./UserMenu";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styles from "./Navbar.module.scss";
import useRegisterModal from "@/hooks/useRegisterModal";
import Link from "next/link";
import ellipse from "@/assets/ellipse.svg";

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
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const registerModal = useRegisterModal();
  const contactModal = useContactModal();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setNavbarVisible(false);
      } else {
        setNavbarVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div
      className={`${styles.wrapper} ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      } transition-transform duration-300 fixed top-0 w-full z-40 bg-white`}
    >
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
                <div className="flex flex-col gap-5 md:flex-row md:gap-12 z-50">
                  <Link
                    href="/"
                    className={pathname === "/" ? styles.active : ""}
                  >
                    <MenuItem label="Главное" />
                  </Link>

                  <DropdownMenu
                    open={isDropdownOpen}
                    onOpenChange={setDropdownOpen}
                  >
                    <DropdownMenuTrigger
                      asChild
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      <div className="flex items-center cursor-pointer">
                        <MenuItem label="Услуги" />
                        <IoIosArrowDown className="ml-0.5 text-lg" />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="p-4 md:w-max"
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="flex flex-col gap-2">
                          <div className={styles.dropdownOne}>
                            <div className="flex items-center gap-2">
                              <Image
                                src={ellipse}
                                alt="ellipse"
                                width={20}
                                height={20}
                                className={styles.ellipseImage}
                              />
                              <DropdownMenuItem asChild>
                                <Link
                                  href="/cargotransportation"
                                  className={
                                    pathname === "/cargotransportation"
                                      ? styles.active
                                      : ""
                                  }
                                >
                                  Перевозка грузов
                                </Link>
                              </DropdownMenuItem>
                            </div>
                            <div className={styles.dropdownMenuItem1}>
                              <DropdownMenuItem asChild>
                                <Link
                                  href="/ciscountries"
                                  className={
                                    pathname === "/ciscountries"
                                      ? styles.active
                                      : ""
                                  }
                                >
                                  Доставка сборных грузов
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild>
                                <Link
                                  href="/containershipping"
                                  className={
                                    pathname === "/containershipping"
                                      ? styles.active
                                      : ""
                                  }
                                >
                                  Контейнерные перевозки
                                </Link>
                              </DropdownMenuItem>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Image
                              src={ellipse}
                              alt="ellipse"
                              width={20}
                              height={20}
                              className={styles.ellipseImage}
                            />
                            <DropdownMenuItem asChild>
                              <Link
                                href="/commission"
                                className={
                                  pathname === "/commission"
                                    ? styles.active
                                    : ""
                                }
                              >
                                Выкуп товаров с китайских сайтов
                              </Link>
                            </DropdownMenuItem>
                          </div>
                          <div className="flex items-center columns-1 gap-2">
                            <Image
                              src={ellipse}
                              alt="ellipse"
                              width={20}
                              height={20}
                              className={styles.ellipseImage}
                            />
                            <DropdownMenuItem asChild>
                              <Link
                                href="/marketplace"
                                className={
                                  pathname === "/marketplace"
                                    ? styles.active
                                    : ""
                                }
                              >
                                Доставка товаров из Китая для маркетплейсов
                              </Link>
                            </DropdownMenuItem>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className={styles.dropdownMenuItem}>
                            <div className="flex items-center gap-2">
                              <Image
                                src={ellipse}
                                alt="ellipse"
                                width={20}
                                height={20}
                                className={styles.ellipseImage}
                              />
                              <DropdownMenuItem asChild>
                                <Link
                                  href="/representative"
                                  className={
                                    pathname === "/representative"
                                      ? styles.active
                                      : ""
                                  }
                                >
                                  Представитель в Китае
                                </Link>
                              </DropdownMenuItem>
                            </div>
                          </div>

                          <div className={styles.dropdownMenuItem1}>
                            <DropdownMenuItem asChild>
                              <Link
                                href="/searchsuppliers"
                                className={
                                  pathname === "/searchsuppliers"
                                    ? styles.active
                                    : ""
                                }
                              >
                                Поиск поставщиков в Китае
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link
                                href="/manufactured"
                                className={
                                  pathname === "/manufactured"
                                    ? styles.active
                                    : ""
                                }
                              >
                                Производство в Китае (OEM, ODM)
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link
                                href="/supplierverification"
                                className={
                                  pathname === "/supplierverification"
                                    ? styles.active
                                    : ""
                                }
                              >
                                Проверка поставщиков в Китае
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link
                                href="/supplierverification#payment-section"
                                scroll={false}
                                className={
                                  pathname ===
                                  "/supplierverification#payment-section"
                                    ? styles.active
                                    : ""
                                }
                              >
                                Перевод денежных средств
                              </Link>
                            </DropdownMenuItem>
                          </div>
                        </div>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Link
                    href="/about"
                    className={pathname === "/about" ? styles.active : ""}
                  >
                    <MenuItem label="О Нас" />
                  </Link>

                  <DropdownMenu
                    open={isUserMenuOpen}
                    onOpenChange={setUserMenuOpen}
                  >
                    <DropdownMenuTrigger
                      asChild
                      onMouseEnter={() => setUserMenuOpen(true)}
                      onMouseLeave={() => setUserMenuOpen(false)}
                    >
                      <div className="flex items-center cursor-pointer">
                        <MenuItem label="Помощь" />
                        <IoIosArrowDown className="ml-0.5 text-lg" />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="p-4 md:w-max"
                      onMouseEnter={() => setUserMenuOpen(true)}
                      onMouseLeave={() => setUserMenuOpen(false)}
                    >
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
                        <div className={styles.dropdownMenuItem}>
                          <div className="flex items-center gap-2">
                            <Image
                              src={ellipse}
                              alt="ellipse"
                              width={20}
                              height={20}
                              className={styles.ellipseImage}
                            />
                            <DropdownMenuItem asChild>
                              <Link
                                href="/contacts"
                                className={
                                  pathname === "/contacts" ? styles.active : ""
                                }
                              >
                                Контакты
                              </Link>
                            </DropdownMenuItem>
                          </div>
                        </div>
                        <div className={styles.dropdownMenuItem}>
                          <div className="flex items-center gap-2">
                            <Image
                              src={ellipse}
                              alt="ellipse"
                              width={20}
                              height={20}
                              className={styles.ellipseImage}
                            />
                            <DropdownMenuItem asChild>
                              <Link
                                href="/documents"
                                className={
                                  pathname === "/documents" ? styles.active : ""
                                }
                              >
                                Документы
                              </Link>
                            </DropdownMenuItem>
                          </div>
                        </div>
                        <div className={styles.dropdownMenuItem}>
                          <div className="flex items-center gap-2">
                            <Image
                              src={ellipse}
                              alt="ellipse"
                              width={20}
                              height={20}
                              className={styles.ellipseImage}
                            />
                            <DropdownMenuItem asChild>
                              <Link
                                href="/news"
                                className={
                                  pathname === "/news" ? styles.active : ""
                                }
                              >
                                Новости
                              </Link>
                            </DropdownMenuItem>
                          </div>
                        </div>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Link
                    href="/transportation"
                    className={
                      pathname === "/transportation" ? styles.active : ""
                    }
                  >
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
                <button
                  className={styles.contactButton}
                  onClick={contactModal.onOpen}
                >
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
