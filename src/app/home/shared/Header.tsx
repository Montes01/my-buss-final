import Button from "@/system-design/atoms/Button";
import NavButton from "@/system-design/atoms/NavButton";
import Logo from "@/system-design/molecules/Logo";

export default function Header() {
  return (
    <header className="home-header">
      <Logo to="/home" className="home-logo" />
      <section className="header-buttons">
        <NavButton children="Inicio" className="header-button" to="/home" />
        <NavButton children="Ingresa" className="header-button" to="/home/join/login" />
        <NavButton children="Registro" className="header-button" to="/home/join/register" />
        <NavButton children="Nosotros" className="header-button" to="/home/about" />
      </section>
      <section className="dark-button-wrapper">
        <Button content="🌙" className="dark-button" />
      </section>
    </header>
  )
}