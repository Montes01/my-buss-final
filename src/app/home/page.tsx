import { PRINCIPAL_MESSAGE, PROJECT_NAME, Services } from "@/lib/constants/constants";
import { IconBrandAndroid, IconMap } from "@tabler/icons-react"
import NavButton from "@/system-design/atoms/NavButton";
import ServiceCard from "@/system-design/molecules/ServiceCard";
import Footer from "./shared/Footer";
import Button from "@/system-design/atoms/Button";
export default function Home() {


  return (
    <>
      <main className="main-home">

        <section className="home-main">
          <section className="home-text">

            <section className="text-wrapper">
              
              <h1>Bienvenido a <br />{PROJECT_NAME.split("",2)}<span>{PROJECT_NAME.split("").slice(2)}</span></h1>
              <p className="home-message">{PRINCIPAL_MESSAGE}</p>
              <Button content="Conoce mas" />
            </section>

          </section>
        </section>

      </main>
      <section className="carousel">
        <h1>this is carousel</h1>
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