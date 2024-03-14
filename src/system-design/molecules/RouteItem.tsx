import { Ruta } from "@/lib/constants/declarations";
import Button from "../atoms/Button";
import { IconEdit, IconTrash } from "@tabler/icons-react"
export default function RouteItem({ ID_Ruta, Nombre, Descripción, Horario, Tarifa }: Ruta) {
    return (
        <article className="route-item">
            <section className="route-state">
                <h3 className="route-number">{Nombre}</h3>
            </section>
            <section className="route-info">
                <strong>Descripción:</strong>
                <p>{Descripción}</p>
                <strong>Horario:</strong>
                <p>{Horario}</p>
                <strong>Precio:</strong>
                <p>{Tarifa}</p>
            </section>
            <section className="controls">
                <Button content={IconEdit} className="edit-button" />
                <Button content={IconTrash} className="delete-button" />
            </section>
        </article>
    );
}
