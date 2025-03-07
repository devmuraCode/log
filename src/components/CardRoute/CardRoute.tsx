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
  const isDisabled = href === "/news";

  return (
    <Link
      href={isDisabled ? "#" : href}
      className={`${styles.wrapper} ${isActive ? styles.active : ""} ${
        isDisabled ? styles.disabled : ""
      }`}
      aria-disabled={isDisabled}
    >
      <div className={styles.icon}>
        <Image src={image} alt={text} />
      </div>
      <span className={styles.text}>{text}</span>
    </Link>
  );
};
