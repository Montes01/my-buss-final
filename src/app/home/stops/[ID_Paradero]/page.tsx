"use server"
import "./stop.scss";
import { Paradero, Ruta } from "@/lib/constants/declarations";
import { getParadaPorIdMock, getRutasPorParada } from "@/lib/constants/mocks";
import Link from "next/link";
import { redirect } from "next/navigation";
interface Params {
    ID_Paradero: number;
}
export default async function StopPage({ params }: { params: Params }) {
    let paradero: Paradero = {} as Paradero;
    let rutas: Ruta[] | null = null;
    try {
        const data = await getParadaPorIdMock(params.ID_Paradero);
        paradero = data.Data;
    } catch (error) {
        console.error(error);
        redirect("/home/stops");
    }

    try {
        const rutasData = await getRutasPorParada(params.ID_Paradero);
        rutas = rutasData.Data;
    } catch (error) {
        console.error(error);
    }
    return (
        <main className="single-stop-page">
            <h1>{paradero?.Nombre}</h1>
            <img src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg" alt="" className="stop-location" />
            <section className="routes">
                <h3>Rutas que pasan por aqui</h3>
                <section className="route-list">

                    {
                        rutas?.map(({ ID_Ruta, Nombre, Tarifa, Descripción, Horario, Tipo }) => (
                            <Link key={ID_Ruta} href={`/home/routes/${ID_Ruta}`} className="route">
                                <h3>{Nombre}</h3>
                                <p>{Tipo}</p>
                                <p>{Descripción}</p>
                                <p>{Horario}</p>
                                <p>{Tarifa}$</p>
                            </Link>
                        ))
                    }
                    {rutas === null && <p>Hubo un error al listar las rutas</p>}
                </section>
            </section>
            <section className="description">
                <p>{paradero?.Descripción}</p>
            </section>
        </main>
    );
}