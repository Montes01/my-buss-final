import Button from "@/system-design/atoms/Button";
import NavButton from "@/system-design/atoms/NavButton";

export default function Header() {
  return (
    <header className="home-header">
      <picture className="logo">
        <NavButton to="/home">
          <img src="/Images/logo.png" alt="Logo de la empresa" />
        </NavButton>
      </picture>
      <section className="header-buttons">
        <NavButton children="Inicio" className="button" to="/home" />
        <NavButton children="Ingresa" className="button" to="/home/login" />
        <NavButton children="Registro" className="button" to="/home/register" />
        <NavButton children="Nosotros" className="button" to="/about" />
      </section>
      <section className="dark-button-wrapper">
        <Button content="🌙" className="dark-button" />
      </section>
    </header>
  )
}