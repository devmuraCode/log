import Navbar from "@/components/Navbar/Navbar";
import "./globals.scss";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Footer } from "@/components/Footer/Footer";
import { RegisterModa } from "@/components/Modal/RegisterModa";
import { ContactModal } from "@/components/Modal/ContactModal";
import logo from '@/assets/logo.svg'
const font = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LE",
  icons: {
    icon: logo.src
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
        <RegisterModa />
        <ContactModal />
      </body>
    </html>
  );
}
