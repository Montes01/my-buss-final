"use server"
import { Paradero } from "@/lib/constants/declarations"
import { paradasMock } from "@/lib/constants/mocks"
import "./stops.scss"
import NavButton from "@/system-design/atoms/NavButton"
import { UseGet } from "@/lib/hooks/fetchHook"
import { ENDPOINTS, SERVER_URL } from "@/lib/constants/constants"
import { parseStopList } from "@/lib/constants/utils"

export default async function Stops() {
    let stops: Paradero[] = []
    try {
        const data = await UseGet(SERVER_URL + ENDPOINTS.STOP.LIST)
        const parsedStops = parseStopList(data.Data)
        stops = parsedStops
    } catch (error) {
        console.error(error)
        stops = []
    }

    return (
      <main className="stops-page">
  <div className="section-header">
    <h2 className="title">Paraderos de la ciudad</h2>
    <p className="subtitle">Explora los paraderos disponibles en nuestra ciudad</p>
  </div>
  <section className="stop-list">
    {stops.map(({ ID_Paradero, Nombre, Descripcion, Contacto }) => (
      <section key={ID_Paradero} className="stop">
        <div className="map-container">
          {/* Mostrar un mapa estático en lugar de un mapa interactivo */}
          <img
            src={`https://maps.googleapis.com/maps/api/staticmap?center=${Nombre}&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7Clabel:P%7C${Nombre}`}
            alt={Nombre}
            className="map"
          />
        </div>
        <div className="content">
          <h3>{Nombre}</h3>
          <p>{Descripcion}</p>
          <p><strong>Horarios:</strong> Lunes a Viernes: 7am - 10pm, Sábados y Domingos: 9am - 8pm</p>
          <p><strong>Servicios:</strong> Wi-Fi gratuito, Baños, Asientos cómodos</p>
          <p><strong>Contacto:</strong> {Contacto}</p>
          {/* Agrega íconos de servicios */}
          <div className="services-icons">
            {/* Aquí coloca los íconos según los servicios disponibles */}
          </div>
          <NavButton to={`/home/stops/${ID_Paradero}`} content="Ver paradero" className="button" />
        </div>
      </section>
    ))}
  </section>
</main>


      //         <main className="stops-page">
//   <div className="section-header">
//     <h2 className="title">Paraderos de la ciudad</h2>
//     <p className="subtitle">Explora los paraderos disponibles en nuestra ciudad</p>
//   </div>
//   <section className="stop-list">
//     {stops.map(({ ID_Paradero, Nombre, Foto }) => (
//       <section key={ID_Paradero} className="stop">
//         <img src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg" alt="" className="stop-location" />
//         <div className="content">
//           <h3>{Nombre}</h3>
//           <img src={Foto} alt="" className="stop-image" />
//           <NavButton to={`/home/stops/${ID_Paradero}`} content="Ver paradero" className="button" />
//         </div>
//       </section>
//     ))}
//   </section>
// </main>

    )
}   