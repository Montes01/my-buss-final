
import type { Metadata } from "next";
import { Aleo } from "next/font/google";
import "./globals.scss";
const inter = Aleo({
  subsets: ["latin"],
  weight: "400",
});

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
