import { Ruta } from "@/lib/constants/declarations";
import Button from "../atoms/Button";
import { IconEdit, IconTrash } from "@tabler/icons-react"
import { useRef } from "react";
import { UseDelete } from "@/lib/hooks/fetchHook";
import { ENDPOINTS, SERVER_URL } from "@/lib/constants/constants";
export default function RouteItem({ ID_Ruta, Nombre, Descripción, Horario, Tarifa }: Ruta) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const handleRemoveButton = () => {
        const headers = {
            Authorization: `Bearer ${localStorage.getItem("company-token")}`
        }
        try {
            UseDelete(SERVER_URL + ENDPOINTS.ROUTE.DELETE + "?ID_Ruta=" + ID_Ruta, headers).then(res => {
                console.log(res)
                dialogRef.current?.close()
            })

        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
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
                    <Button content={IconTrash} className="delete-button" action={() => dialogRef.current?.showModal()} />
                </section>
            </article>
            <dialog ref={dialogRef}>
                <h2>Eliminar ruta</h2>
                <p>¿Estás seguro de que deseas eliminar la ruta?</p>
                <section>
                    <Button content="Cancelar" action={() => dialogRef.current?.close()} />
                    <Button content="Eliminar" action={handleRemoveButton} />
                </section>
            </dialog>
        </>
    );
}
