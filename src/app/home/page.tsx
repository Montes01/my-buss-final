import { PRINCIPAL_MESSAGE, Services } from "@/lib/constants/constants";
import { IconBrandAndroid, IconMap } from "@tabler/icons-react"
import NavButton from "@/system-design/atoms/NavButton";
import ServiceCard from "@/system-design/molecules/ServiceCard";
import Footer from "./shared/Footer";
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
    </>
  )
}