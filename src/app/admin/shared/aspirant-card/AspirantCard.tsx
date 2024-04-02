import { handleImageError } from "@/lib/constants/utils";
import Button from "@/system-design/atoms/Button";
import "./aspirant-card.scss"
import swal from "sweetalert";
import { SERVER_URL, ENDPOINTS } from "@/lib/constants/constants";
import { UseDelete, UsePut } from "@/lib/hooks/fetchHook";
type Props = {
    CorreoElectronico?: string,
    ID_Conductor?: number,
    ID_Usuario?: number,
    Nombre?: string,
    Teléfono?: string,
    Dirección?: string,
    FotoPerfil?: string,
    Rol?: string
}
export default function AspirantCard({ CorreoElectronico, ID_Conductor, ID_Usuario, Nombre, Teléfono, Dirección, FotoPerfil, Rol }: Props) {
    const handleAccept = async () => {
        swal({
            title: "¿Estás seguro?",
            text: "¿Deseas aceptar a este aspirante?",
            icon: "warning",
            buttons: ["Cancelar", "Aceptar"],
            dangerMode: true,
        }).then(async (willAccept) => {
            if (willAccept) {
                //si el usuario acepta se envia una peticion al servidor para aceptar al aspirante
                const token = localStorage.getItem("user-token")
                try {
                    await UsePut(SERVER_URL + ENDPOINTS.ADMIN.ACEPT_DRIVER + "?ID_Conductor=" + ID_Conductor, {},
                        { Authorization: `Bearer ${token}` })
                    await swal("Aspirante aceptado", "El aspirante ha sido aceptado exitosamente", "success")
                    location?.reload()
                } catch (error) {
                    console.error(await error)
                    swal("Error", "No se pudo aceptar al aspirante", "error")
                }
            }
        });
    }


    const handleReject = async () => {
        swal({
            title: "¿Estás seguro?",
            text: "¿Deseas rechazar a este aspirante?",
            icon: "warning",
            buttons: ["Cancelar", "Aceptar"],
            dangerMode: true,
        }).then(async (willReject) => {
            if (willReject) {
                //si el usuario acepta se envia una peticion al servidor para rechazar al aspirante
                const token = localStorage.getItem("user-token")
                try {
                    await UsePut(SERVER_URL + ENDPOINTS.ADMIN.REJECT_DRIVER + "?ID_Conductor=" + ID_Conductor, {},
                        { Authorization: `Bearer ${token}` })
                    await swal("Aspirante rechazado", "El aspirante ha sido rechazado exitosamente", "success")
                    location?.reload()
                } catch (error) {
                    console.error(await error)
                    swal("Error", "No se pudo rechazar al aspirante", "error")
                }
            }
        });

    }

    return (
        <article className="aspirant-card">
            <section className="licence-image">
                <img src={FotoPerfil} onError={handleImageError} alt="user" />
            </section>
            <section className="licence-info">
                <h2 className="licence-name">{Nombre}</h2>
                <p className="licence-email">{CorreoElectronico}</p>
                <p className="licence-phone">{Teléfono}</p>
                <p className="licence-address">{Dirección}</p>
                <p className="licence-role">{Rol}</p>
            </section>
            <section className="aspirant-buttons">
                <Button content="Aceptar" action={handleAccept} />
                <Button content="Rechazar" action={handleReject} />
            </section>
        </article>
    )


}