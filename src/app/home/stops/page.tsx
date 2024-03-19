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
    {stops.map(({ ID_Paradero, Nombre, Foto }) => (
      <section key={ID_Paradero} className="stop">
        <img src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg" alt="" className="stop-location" />
        <div className="content">
          <h3>{Nombre}</h3>
          <img src={Foto} alt="" className="stop-image" />
          <NavButton to={`/home/stops/${ID_Paradero}`} content="Ver paradero" className="button" />
        </div>
      </section>
    ))}
  </section>
</main>

    )
}   