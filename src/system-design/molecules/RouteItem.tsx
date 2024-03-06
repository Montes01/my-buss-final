import { route } from "@/lib/constants/declarations";
import Button from "../atoms/Button";
import { IconEdit, IconTrash } from "@tabler/icons-react"
export default function RouteItem({ estadoR, finR, inicioR, numeroR }: route) {


    return (
        <article className="route-item">
            <section className="route-state">
                <strong className="route-number">Ruta {numeroR}</strong>
                <p className="route-status">{estadoR ? "🟢 Activa" : "🔴 Inactiva"}</p>
            </section>
            <section className="route-dates">
                <p>Inicio: <span> {inicioR}</span></p>
                <p>Fin: <span>{finR}</span></p>
            </section>
            <section className="controls">
                <Button content={IconEdit} className="edit-button" />
                <Button content={IconTrash} className="delete-button" />
            </section>
        </article>
    )

}