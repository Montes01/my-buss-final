"use client"

import { ENDPOINTS, SERVER_URL } from "@/lib/constants/constants";
import { Paradero, Ruta } from "@/lib/constants/declarations";
import { parseSingularRoute, parseStopList } from "@/lib/constants/utils";
import { UseGet } from "@/lib/hooks/fetchHook";
import StopCard from "@/system-design/molecules/StopCard";
import { useEffect, useState } from "react";
import "./route.scss"
interface Params {
    ID_Ruta: number;
}

export default function Page({ params }: { params: Params }) {

    const [{ ID_Empresa, ID_Ruta, Nombre, Tarifa, Descripción, Horario, Tipo }, setRoute] = useState<Ruta>({} as Ruta);
    const [stops, setStops] = useState<Paradero[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await UseGet(SERVER_URL + ENDPOINTS.ROUTE.GET + `?ID_Ruta=${params.ID_Ruta}`);
                const parsedRoute = parseSingularRoute(data.Data);
                setRoute(parsedRoute);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchStops = async () => {
            try {
                const data = await UseGet(SERVER_URL + ENDPOINTS.STOP.LIST_BY_ROUTE + `?ID_Ruta=${params.ID_Ruta}`);
                const parsedStops = parseStopList(data.Data);
                setStops(parsedStops);
            } catch (error) {
                console.error(error);
            }
        };
        fetchStops();
    }, []);
    return (
        <main className="route-main">
            <h1>{Nombre}</h1>
            <section className="route-info">
                <img src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg" alt="" className="stop-location" />
            </section>
            <section className="route-details">
                <h2>Detalles de la ruta</h2>
                <p>{Descripción}</p>
                <div className="route-details">
                    <span><strong>Precio: </strong>{Tarifa}$ </span>
                    <span><strong>Tipo:</strong> {Tipo}</span>
                    <span><strong>Horario: </strong>{Horario}</span>
                </div>
            </section>
            <section className="stops">
                <h2>Paraderos</h2>
                <ul className="stop-list">
                    {stops.map((stop) => (
                        <StopCard
                            key={stop.ID_Paradero}
                            ID_Paradero={stop.ID_Paradero}
                            Nombre={stop.Nombre}
                            Descripción={stop.Descripción}
                            Foto={stop.Foto}
                        />
                    ))}
                </ul>
            </section>
        </main>
    );
}