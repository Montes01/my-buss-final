import { PRINCIPAL_MESSAGE, Services } from "@/lib/constants/constants";
import { IconBrandAndroid, IconMap } from "@tabler/icons-react"
import "./_home.scss";
import NavButton from "@/system-design/atoms/NavButton";
import ServiceCard from "@/system-design/molecules/ServiceCard";
export default function Home() {


  return (
    <>
      <section className="slider-content">
        <section className="home-content">
          <p className="principal-message">{PRINCIPAL_MESSAGE}</p>
          <section className="main-buttons">
            <NavButton to="/App" className="button main-button">
              <IconBrandAndroid color="white" />
              <strong>Descarga nuestra aplicación</strong>
            </NavButton>
            <NavButton to="/home" className="button main-button">
              <IconMap color="white" />
              <strong>conoce nuestras rutas</strong>
            </NavButton>
          </section>
        </section>
      </section>
      <section className="info-part">
        {Services.map(({ description, image, href, title }, index) => (
          <ServiceCard
            key={index}
            description={description}
            image={image}
            href={href}
            title={title}
          />
        ))}
      </section>
      <footer className="footer">
        <p className="text-center px-2">
          <strong> &copy; 2023</strong> My Buss. Todos los derechos reservados.
        </p>
        <footer className="footer-buttons">
          <NavButton to="/" className="" children="Inicio" />
          <NavButton to="/Servicios" className="" children="Servicios" />
          <NavButton to="/Contacto" className="" children="Contacto" />
        </footer>
      </footer>
    </>
  )
}