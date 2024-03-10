"use server"
import { Paradero } from "@/lib/constants/declarations"
import { paradasMock } from "@/lib/constants/mocks"
import "./stops.scss"
import NavButton from "@/system-design/atoms/NavButton"

export default async function Stops() {
    let stops: Paradero[] = []
    const data = await paradasMock()
    stops = data.Data

    return (
        <main className="stops-page">
            <h2 className="title">Paraderos de la ciudad</h2>
            <section className="stop-list">
                {stops.map(({ ID_Paradero, Nombre, Foto }) => (
                    <section key={ID_Paradero} className="stop">
                        <img src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg" alt="" className="stop-location" />
                        <section className="content">
                            <h3>{Nombre}</h3>
                            <img src={Foto} alt="" className="stop-image" />
                            <NavButton to={`/home/stops/${ID_Paradero}`} content="Ver paradero" className="button" />
                        </section>
                    </section>
                ))}
            </section>
        </main>
    )
}   