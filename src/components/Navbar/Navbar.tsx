"use client";

import { useState } from "react";
import Logo from "./Logo";
import Container from "../Container";
import UserMenu from "./UserMenu";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styles from "./Navbar.module.scss";
import useRegisterModal from "@/hooks/useRegisterModal";
import Link from "next/link";

const Navbar: React.FC = () => {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen((prev) => !prev);
	};

	const registerModal = useRegisterModal();
	return (
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
							<UserMenu />
							<div className={styles.loginRegister}>
								<button onClick={registerModal.onOpen} className={styles.loginLink}>
									Вход/Регистрация
								</button>
								<button className={styles.contactButton}>
									Связаться с нами
								</button>
							</div>
						</div>

						<div className="md:hidden">
							<button onClick={toggleMobileMenu} className={styles.menuToggle}>
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
							<button className={styles.contactButton}>Связаться с нами</button>
						</div>
					</div>
				)}
			</div>
		</Container>
	);
};

export default Navbar;
