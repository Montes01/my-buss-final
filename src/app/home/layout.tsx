import Button from "@/system-design/atoms/Button"
import "./_home.scss";
import NavButton from "@/system-design/atoms/NavButton"

interface Props {
  children: React.ReactNode
}
export default function HomeLayout({ children }: Props) {

  return (

    <>
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
          <NavButton children="Nosotros" className="button" />
        </section>
        <section className="dark-button-wrapper">
          <Button content="🌙" className="dark-button" />
        </section>
      </header>
      <main className="main-home">
        <section className="slider">
          <img className="slider-image" src="/Images/bus1.jpeg" />
          <img className="slider-image" src="/Images/bus2.jpeg" />
          <img className="slider-image" src="/Images/bus3.jpeg" />
          <img className="slider-image" src="/Images/bus4.jpeg" />
          <img className="slider-image" src="/Images/bus5.jpeg" />
          <img className="slider-image" src="/Images/bus6.jpeg" />
        </section>

        {children}

      </main>
    </>
  )
}