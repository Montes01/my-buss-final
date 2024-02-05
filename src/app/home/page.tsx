import NavButton from "@/system-design/atoms/NavButton";
import Button from "@/system-design/atoms/Button";
import "./_home.scss";
export default function Home() {


  return (
    <>
      <header className="home-header">
        <picture className="logo">
          <img src="" alt="Logo de la empresa" />
        </picture>
        <section className="header-buttons">
          <NavButton content="Inicio" className="button" to="/home"/>
          <NavButton content="Ingresa" className="button" to="/home/login"/>
          <NavButton content="Registro" className="button"/>
          <NavButton content="Nosotros" className="button"/>
        </section>
        <section className="dark-button-wrapper">
          <Button content="🌙" className="dark-button"/>
        </section>
      </header>
    </>
  )
}