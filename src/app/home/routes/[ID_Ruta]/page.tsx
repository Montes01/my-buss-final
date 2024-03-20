"use client"

import { ENDPOINTS, SERVER_URL } from "@/lib/constants/constants";
import { Paradero, Ruta } from "@/lib/constants/declarations";
import { parseSingularRoute, parseStopList } from "@/lib/constants/utils";
import { UseGet } from "@/lib/hooks/fetchHook";
import StopCard from "@/system-design/molecules/StopCard";
import { useEffect, useState } from "react";
import "./route.scss"
import Link from "next/link";
interface Params {
    ID_Ruta: number;
}

export default function Page({ params }: { params: Params }) {

    const [{ Nombre, Tarifa, Descripción }, setRoute] = useState<Ruta>({} as Ruta);
    const [stops, setStops] = useState<Paradero[]>([]);
    const [selectedStop, setSelectedStop] = useState<Paradero>({} as Paradero);
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
                setSelectedStop(parsedStops[0]);
            } catch (error) {
                console.error(error);
            }
        };
        fetchStops();
    }, []);
    return (
        <main className="route-main">
            <section className="route-info">

                <label className="info-section">Nombre:
                    <p>{Nombre}</p>
                </label>
                <label className="info-section">Descripción:
                    <p>{Descripción}</p>
                </label>
                <label className="info-section">Tarifa:
                    <p>{Tarifa}$</p>
                </label>

            </section>
            <section className="stops-title">
                <h2>Paraderos</h2>
            </section>
            <section className="stops-part">
                <section className="stops-timeline">
                    {
                        stops.map((stop, i) => {

                            return (
                                <label key={stop.Ubicación} className="stop-timeline-item">
                                    {stop.Nombre}
                                    <input type="radio" className="timeline-input"  onChange={(e) => {
                                        if (e.target.checked) {
                                            setSelectedStop(stop);
                                        }
                                    }} defaultChecked={i === 0} name="stop" />
                                </label>
                            )

                        })
                    }
                </section>
                <section className="stop-image">
                    <Link className="stop-image-link" href={`/home/stops/${selectedStop?.ID_Paradero}`}>
                        <img src={selectedStop?.Foto} alt="" />
                    </Link>
                </section>
            </section>
        </main>
    );
}