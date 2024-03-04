'use client'
import { ENDPOINTS, PRINCIPAL_MESSAGE, PROJECT_NAME, SERVER_URL, Services } from "@/lib/constants/constants";
import ServiceCard from "@/system-design/molecules/ServiceCard";
import Button from "@/system-design/atoms/Button";
import Carousel from "@/system-design/organisms/Carousel";
import { useEffect, useState } from "react";
import { UseGet } from "@/lib/hooks/fetchHook"
import { company } from "@/lib/constants/declarations";
import CompanyCard from "@/system-design/molecules/CompanyCard";
import NavButton from "@/system-design/atoms/NavButton";
export default function Home() {

  const [companies, setCompanies] = useState<company[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      window.location.href = '/dashboard'
    }
  }, [])

  useEffect(() => {
    UseGet(SERVER_URL + ENDPOINTS.COMPANY.LIST).then(res => {
      setCompanies(res.data)
    })
  }, [])


  return (

    <>
      <main className="main-home">

        <section className="home-main">
          <section className="home-text">

            <section className="text-wrapper">

              <h1>Bienvenido a <br />{PROJECT_NAME.split("", 2)}<span>{PROJECT_NAME.split("").slice(2)}</span></h1>
              <p className="home-message">{PRINCIPAL_MESSAGE}</p>

              <section className="home-options">
                <Button content="Conoce mas" />
                <section className="to-job"> ¿Eres una empresa? <NavButton content="Trabaja con nosotros" to="/job" className="job-link" /></section>
              </section>
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
      <section className="companies-part">
        <aside className="companies-text">
          <h3 className="companies-title">Convenios</h3>
          <p className="companies-pharagraph">Bienvenido a nuestra plataforma de transporte público en Armenia. Aquí, puedes explorar las distintas empresas de transporte que operan en la ciudad. Cada empresa ofrece una variedad de rutas diseñadas para atender las necesidades de nuestros usuarios. Desplázate a través de las opciones a continuación y descubre información detallada sobre cada empresa,</p>
        </aside>
        <section className="companies-content">
          {companies.map((el) => {
            return (
              <CompanyCard
                nombre={el.nombre}
                imagen={undefined}
                key={el.idEmpresa}
                correo_electronico={el.correo_electronico}
                ubicacion={el.ubicacion}
                idEmpresa={el.idEmpresa}
              />
            )

          })}
        </section>
      </section>
    </>
  )
}