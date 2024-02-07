import type { Metadata } from "next";
import { Inter, Monofett, Crushed } from "next/font/google";
import "./globals.scss";
import "@/lib/style-helpers/_colors.scss"
import Head from "next/head";
const inter = Inter({
  subsets: ["latin"]
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
      <Head>
        <link rel="icon" href="/Images/logo.png" />
      </Head>
      <body className={`${inter.className} dark-mode`}>{children}</body>
    </html>
  );
}
