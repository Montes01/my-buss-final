import Button from "@/system-design/atoms/Button";
import NavButton from "@/system-design/atoms/NavButton";
import Logo from "@/system-design/molecules/Logo";

import "./Header.scss"
export default function Header() {
  return (
    <header className="home-header">
      <Logo to="/home" className="home-logo" />
      <section className="header-buttons">
        <NavButton content="Inicio" className="header-button" to="/home" />
        <NavButton content="Ingresa" className="header-button" to="/home/join/login" />
        <NavButton content="Registro" className="header-button" to="/home/join/register" />
        <NavButton content="Nosotros" className="header-button" to="/home/about" />
      </section>
      <section className="dark-button-wrapper">
        <Button content="🌙" className="dark-button" />
      </section>
    </header>
  )
}