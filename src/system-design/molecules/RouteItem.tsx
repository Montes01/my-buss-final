import { Ruta } from "@/lib/constants/declarations";
import Button from "../atoms/Button";
import { IconEdit, IconTrash } from "@tabler/icons-react"
export default function RouteItem({ ID_Ruta, Nombre }: Ruta) {


    return (
        <article className="route-item">
            <section className="route-state">
                <strong className="route-number">{Nombre}</strong>
            </section>
            <section className="controls">
                <Button content={IconEdit} className="edit-button" />
                <Button content={IconTrash} className="delete-button" />
            </section>
        </article>
    )

}