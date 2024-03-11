"use server"
import "./route.scss"
import { Empresa, Paradero, Ruta } from "@/lib/constants/declarations";
import { getEmpresaPorIdMock, getParaderosPorRutaMock, getRutaMock } from "@/lib/constants/mocks";
import Link from "next/link";
import { redirect } from "next/navigation";
interface Params {
    ID_Ruta: number;
}
export default async function RoutePage({ params }: { params: Params }) {
    let ruta: Ruta | null = null;
    let empresa: Empresa | null = null;
    let paraderos: Paradero[] | null = null;
    try {
        ruta = (await getRutaMock(params.ID_Ruta)).Data;
    } catch (error) {
        console.error(error);
        redirect("/home/routes");
    }

    try {
        if (ruta) {
            empresa = (await getEmpresaPorIdMock(ruta.ID_Empresa)).Data;
        }
    } catch (error) {
        console.error(error);
    }

    try {
        if (ruta) {
            paraderos = (await getParaderosPorRutaMock(ruta.ID_Ruta)).Data;
        }
    } catch (error) {
        console.error(error);
    }




    return (
        <main className="single-route-page">
            <Link href={`/home/companies/${empresa?.iD_Empresa}`} className="company-wrapper">
                <img src={empresa?.logo} alt="" className="company-logo" />
            </Link>
            <section className="route-map">
                <img src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg" alt="" className="map" />
            </section>
            <section className="route-information">
                <h1 className="route-title">{ruta?.Nombre}</h1>
                <p className="route-description">{ruta?.Descripción}</p>
                <p>Horario: {ruta?.Horario}</p>
                <p>Tarifa: {ruta?.Tarifa}$</p>
            </section>

            <section className="route-stops">
                <h3>Paraderos</h3>
                <section className="stop-list">
                    {paraderos?.map(({ ID_Paradero, Nombre, Foto }) => (
                        <Link href={`/home/stops/${ID_Paradero}`} key={ID_Paradero} className="stop">
                            <h3>{Nombre}</h3>
                            <img src={Foto} alt="" className="stop-image" />
                        </Link>
                    ))}
                    {paraderos === null && <p>Hubo un error al listar los paraderos</p>}
                </section>
            </section>


        </main>
    );
}