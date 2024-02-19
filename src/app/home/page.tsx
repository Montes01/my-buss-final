import { PRINCIPAL_MESSAGE, PROJECT_NAME, SLIDER_MESSAGES, Services } from "@/lib/constants/constants";
import ServiceCard from "@/system-design/molecules/ServiceCard";
import Button from "@/system-design/atoms/Button";
import Carousel from "@/system-design/organisms/Carousel";
export default function Home() {

  return (

    <>
      <main className="main-home">

        <section className="home-main">
          <section className="home-text">

            <section className="text-wrapper">

              <h1>Bienvenido a <br />{PROJECT_NAME.split("", 2)}<span>{PROJECT_NAME.split("").slice(2)}</span></h1>
              <p className="home-message">{PRINCIPAL_MESSAGE}</p>
              <Button content="Conoce mas" />
            </section>

          </section>
        </section>

      </main>
      <Carousel />
      <section className="services">
        <div className="services_text">
          <h3 className="services-title">servicios</h3>
          <strong> Descubre Nuestro Sistema de Transporte</strong>
        </div>
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
      </section>
    </>
  )
}