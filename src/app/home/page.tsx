'use client'
import { ENDPOINTS, PRINCIPAL_MESSAGE, PROJECT_NAME, SERVER_URL, Services } from "@/lib/constants/constants";
import ServiceCard from "@/system-design/molecules/ServiceCard";
import { useEffect, useState } from "react";
import CompanyCard from "@/system-design/molecules/CompanyCard";
import { EmpresasMock } from "@/lib/constants/mocks";
import { Empresa, Response } from "@/lib/constants/declarations";
import { IconBus } from "@tabler/icons-react"
export default function Home() {

  const [companies, setCompanies] = useState<Empresa[] | null>([])

  useEffect(() => {
    const getCompanies = async () => {
      EmpresasMock().then((res: Response) => {
        setCompanies(res.Data as Empresa[])
      }).catch((err) => {
        console.log(err)
        setCompanies(null)
      })
    }
    getCompanies()
  }, [])

  return (

    <>
      <main className="main-home">
        <section className="background">

          <section className="information">
            <h1 className="welcome-message">Bienvenido a {PROJECT_NAME}</h1>
            <p className="welcome-pharagraph">{PRINCIPAL_MESSAGE}</p>
            <section className='logos'>
              <img src="https://cdn-icons-png.flaticon.com/128/2536/2536748.png" alt="" />
              <img src="https://cdn-icons-png.flaticon.com/128/416/416668.png" alt="" />
              <img src="https://cdn-icons-png.flaticon.com/128/3124/3124296.png" alt="" />
              <img src="https://cdn-icons-png.flaticon.com/128/4496/4496927.png" alt="" />
            </section>
          </section>
          <aside className="phone-image">
            <img src="/Images/map-phone.png" alt="phone" />
            <img src="/Images/background-map-phone.png" alt="" className="background-map" />
          </aside>

        </section>
      </main>
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
        <header className="companies-text">
          <IconBus className="companies-icon" />
          <p className="companies-pharagraph">
            ¿Que compañias de buses populares operan en Armenia?
          </p>
        </header>
        <section className="company-list">
          {
            companies?.map((el) => {
              return (
                <CompanyCard
                  Nombre={el.Nombre}
                  Teléfono={el.Teléfono}
                  CorreoElectronico={el.CorreoElectronico}
                  Logo={el.Logo}
                  key={el.ID_Empresa}
                  ID_Empresa={el.ID_Empresa}
                  Contraseña={el.Contraseña}
                />
              )
            }) ?? "Hubo un error al cargar las compañias de buses. Por favor, intente más tarde."
          }
        </section>
      </section>
      <section className="final-info">
        <section className="content">
          <h3>Descubre el Futuro del Transporte con MyBuss</h3>
          <p>En MyBuss, no solo ofrecemos un servicio de transporte, sino una revolución en cada viaje. Con nuestra aplicación, experimentarás una nueva era de movilidad: desde la comodidad de conocer la ubicación exacta de tu autobús hasta acceder a rutas convenientes y exclusivos convenios. En MyBuss, tu viaje se transforma en una experiencia sin complicaciones y llena de beneficios. ¡Descarga la aplicación hoy y haz de cada trayecto una aventura placentera!</p>
        </section>
        <aside className="image">
          <img src="/Images/final-home-image.png" alt="phone" />
        </aside>
      </section>
    </>
  )
}