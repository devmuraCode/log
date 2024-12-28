"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styles from "./CardRoute.module.scss";
import { FC } from "react";

interface IProps {
	image: string | StaticImageData;
	text: string;
	href: string;
}

export const CardRoute: FC<IProps> = ({ image, text, href }) => {
	
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			className={`${styles.wrapper} ${isActive ? styles.active : ""}`}
		>
			<div className={styles.icon}>
				<Image src={image} alt={text} />
			</div>
			<span className={styles.text}>{text}</span>
		</Link>
	);
};
