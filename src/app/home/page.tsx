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
          <Button content="Inicio" />
          <Button content="Ingresa" />
          <Button content="Registro" />
          <Button content="Nosotros" />
        </section>
        <section className="dark-button-wrapper">
          <Button content="🌙" className="dark-button"/>
        </section>
      </header>
    </>
  )
}