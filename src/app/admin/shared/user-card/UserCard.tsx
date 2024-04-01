import { Usuario } from "@/lib/constants/declarations";
import { handleImageError } from "@/lib/constants/utils";
import "./user-card.scss"
import Button from "@/system-design/atoms/Button";
import { IconTrash } from "@tabler/icons-react";
import { ENDPOINTS, SERVER_URL } from "@/lib/constants/constants";
import { UseDelete } from "@/lib/hooks/fetchHook";
import swal from "sweetalert";
export default function UserCard({ CorreoElectronico, ID_Usuario, Nombre, Teléfono, Contraseña, Dirección, FotoPerfil, Rol }: Usuario) {
    const handleDelete = async () => {
        const token = localStorage.getItem("user-token")
        try {
            await UseDelete(SERVER_URL + ENDPOINTS.ADMIN.DELETE_USER + "?userId=" + ID_Usuario,
                { Authorization: `Bearer ${token}` })
            swal("Usuario eliminado", "El usuario ha sido eliminado exitosamente", "success")
        } catch (error) {
            console.error(await error)
            swal("Error", "No se pudo eliminar el usuario", "error")
        }

    }
    return (
        <article className="user-card">
            <section className="user-card-image">
                <img src={FotoPerfil} onError={handleImageError} alt="user" />
            </section>
            <section className="user-card-info">
                <h2 className="user-card-name">{Nombre}</h2>
                <p className="user-card-email">{CorreoElectronico}</p>
                <p className="user-card-phone">{Teléfono}</p>
                <p className="user-card-address">{Dirección}</p>
                <p className="user-card-role">{Rol}</p>
            </section>
            <Button className="user-card-button" content={IconTrash} action={handleDelete} />
        </article>
    )
}