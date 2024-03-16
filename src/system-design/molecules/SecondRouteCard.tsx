import { Ruta } from "@/lib/constants/declarations";
import Link from "next/link";

/*
{routes.map((route) => (
          <div key={route.ID_Ruta} className="alternative-route">
            <h2>{route.Nombre}</h2>
            <p>{route.Descripción}</p>
            <div className="route-details">
              <span>- {route.Tarifa}$ </span>
              <span>- {route.Tipo}</span>
            </div>
            <button className="route-button">Ver Ruta</button>
          </div>
        ))}

*/
export default function SecondRouteCard({ ID_Empresa, ID_Ruta, Nombre, Tarifa, Descripción, Horario, Tipo }: Ruta) {
    return (
        <div key={ID_Ruta} className="alternative-route">
            <h2>{Nombre}</h2>
            <p>{Descripción}</p>
            <div className="route-details">
                <span>- {Tarifa}$ </span>
                <span>- {Tipo}</span>
                <span>- {Horario}</span>
            </div>
            <Link href={`/home/routes/${ID_Ruta}`} className="route-button">Ver Ruta</Link>
        </div>
    )
}