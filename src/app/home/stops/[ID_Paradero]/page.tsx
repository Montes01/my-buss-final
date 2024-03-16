"use client"
import { useEffect, useState } from "react";
import { ENDPOINTS, SERVER_URL } from "@/lib/constants/constants";
import "./stop.scss";
import { Paradero, Ruta } from "@/lib/constants/declarations";
import { getParadaPorIdMock, getRutasPorParada } from "@/lib/constants/mocks";
import { UseGet } from "@/lib/hooks/fetchHook";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { parseRouteList, parseSingleStop } from "@/lib/constants/utils";

interface Params {
    ID_Paradero: number;
}

const StopPage = ({ params }: { params: Params }) => {
    const [paradero, setParadero] = useState<Paradero>({} as Paradero);
    const [rutas, setRutas] = useState<Ruta[] | null>(null);
    const router = useRouter();

    useEffect(() => {

        const fetchData = async () => {
            try {
                const data = await UseGet(
                    SERVER_URL + ENDPOINTS.STOP.GET + `?ID_Paradero=${params.ID_Paradero}`
                );
                const stop = parseSingleStop(data.Data);
                setParadero(stop);
            } catch (error) {
                console.error(error);
                router.push("/home/stops");
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchRutas = async () => {
            try {
                const rutasData = await UseGet(SERVER_URL + ENDPOINTS.ROUTE.LIST_BY_STOP + `?ID_Paradero=${params.ID_Paradero}`);
                const parsedRoutes = parseRouteList(rutasData.Data);
                setRutas(parsedRoutes);
            } catch (error) {
                console.error(error);
            }
        };

        fetchRutas();
    }, []);

    return (
        <main className="single-stop-page">
            <h1>{paradero?.Nombre}</h1>
            <section className="stop-information">
                <img
                    src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"
                    alt=""
                    className="stop-location"
                />
                <img src={paradero?.Foto} alt="" className="stop-image" />
            </section>
            <section className="routes">
                <h3>Rutas que pasan por aquí</h3>
                <section className="route-list">
                    {rutas?.map(({ ID_Ruta, Nombre, Tarifa, Descripción, Horario, Tipo }) => (
                        <Link key={ID_Ruta} href={`/home/routes/${ID_Ruta}`} className="route">
                            <section className="route-info-item">
                                Ruta: <h3>{Nombre}</h3>
                            </section>
                            <section className="route-info-item">
                                Tipo: <p>{Tipo}</p>
                            </section>
                            <section className="route-info-item">
                                Descripcion: <p>{Descripción}</p>
                            </section>
                            <section className="route-info-item">
                                Horario: <p>{Horario}</p>
                            </section>
                            <section className="route-info-item">
                                Precio: <p>{Tarifa}$</p>
                            </section>
                        </Link>
                    ))}
                    {rutas === null && <p>Hubo un error al listar las rutas</p>}
                </section>
            </section>
            <section className="description">
                <p>{paradero?.Descripción}</p>
            </section>
        </main>
    );
};

export default StopPage;