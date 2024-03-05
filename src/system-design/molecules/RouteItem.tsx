import { route } from "@/lib/constants/declarations";

export default function RouteItem({ estado, fin, inicio, numeroR }: route) {


    return (
        <article>
            <section className="route-state">
                <strong className="route-number">Ruta {numeroR}</strong>
                <p className="route-status">{estado ? "🟢 Activa" : "🔴 Inactiva"}</p>
            </section>
            <section className="route-dates">
                <p>Inicio: {inicio}</p>
                <p>Fin: {fin}</p>
            </section>
            <section className="controls">
                <button className="edit-button">Editar</button>
                <button className="delete-button">Eliminar</button>
            </section>
        </article>
    )

}