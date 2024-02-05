import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import "@/lib/style-helpers/_colors.scss"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inicio",
  description: "Bienvenido a my buss",
};
type props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: props) {
  return (
    <html lang="es">
      <body className={`${inter.className} dark-mode`}>{children}</body>
    </html>
  );
}
