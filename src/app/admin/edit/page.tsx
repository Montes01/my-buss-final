"use client"
import { UseAppSelector } from "@/lib/context/hooks"
import "./edit-page.scss"
import Button from "@/system-design/atoms/Button"
import Input from "@/system-design/atoms/Input"
import FireBaseHooks from "@/lib/hooks/fireBaseHooks"
import { UsePost, UsePut } from "@/lib/hooks/fetchHook"
import { ENDPOINTS, SERVER_URL } from "@/lib/constants/constants"
import swal from "sweetalert"
import { useRef } from "react"
import { handleImageError } from "@/lib/constants/utils"
export default function EditProfile() {
    const user = UseAppSelector(state => state.user)
    const { UseUpload } = FireBaseHooks()
    const imageRef = useRef<HTMLImageElement>(null)

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) {
            return
        }
        const reader = new FileReader()
        reader.onload = () => {
            if (imageRef.current) {
                imageRef.current.src = reader.result as string
            }
        }
        reader.readAsDataURL(file)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        // string q = $"EXECUTE ActualizarUsuario {ID_Usuario}, '{request.Nombre}', '{request.CorreoElectronico}', '{request.Contraseña}', '{request.FotoPerfil}', '{request.Dirección}', '{request.Teléfono}'";
        const token = localStorage.getItem("user-token")
        let imageUrl = ""
        const FotoPerfil = formData.get("FotoPerfil") as File
        if (FotoPerfil) {
            try {
                await UseUpload(FotoPerfil, "UsersPhoto", (url, err) => {
                    if (err) {
                        throw new Error(err)
                    }
                    console.log(url)
                    imageUrl = url
                })
            } catch (error) {
                console.error(error)
                return;
            }
        }


        const Nombre = formData.get("Nombre") as string
        const CorreoElectronico = formData.get("CorreoElectronico") as string
        const Contraseña = formData.get("Contraseña") as string
        const Dirección = formData.get("Dirección") as string
        const Teléfono = formData.get("Teléfono") as string
        const request = { Nombre, CorreoElectronico, Contraseña, FotoPerfil: imageUrl, Dirección, Teléfono }
        console.log(request)
        const url = SERVER_URL + ENDPOINTS.USER.UPDATE
        try {
            const response = await UsePut(url, request, {
                "Authorization": `Bearer ${token}`
            })
            await swal("Perfil Actualizado", response.Data + "", "success")
            const relogin = await UsePost(SERVER_URL + ENDPOINTS.USER.LOGIN, { Correo: CorreoElectronico, Contraseña })
            localStorage.setItem("user-token", relogin.Data)


        } catch (error) {
            swal("Error", "No se ha podido actualizar tu perfil", "error")
            console.error(error)
        }


    }

    return (
        <main className="edit-profile-main">
            <h1 className="edit-profile-title">Editar Perfil</h1>
            <section className="edit-profile-section">
                <form onSubmit={handleSubmit} className="edit-profile-form">
                    <picture className="profile-image-wrapper">
                        <img onError={handleImageError} ref={imageRef} src={user?.FotoPerfil} alt={"Foto de Perfil de " + user?.Nombre} className="profile-image" />
                        <input type="file" name="FotoPerfil" onChange={onFileChange} className="edit-profile-file-input" />
                    </picture>
                    <Input name="Nombre" label="Nombre" defaultValue={user?.Nombre} className="edit-profile-input" />
                    <Input name="CorreoElectronico" readonly label="Correo" defaultValue={user?.CorreoElectronico} className="edit-profile-input" />
                    <Input name="Dirección" label="Dirección" defaultValue={user?.Dirección} className="edit-profile-input" />
                    <Input name="Teléfono" label="Teléfono" defaultValue={user?.Teléfono} className="edit-profile-input" />
                    <Input name="Contraseña" label="Contraseña" type="password" className="edit-profile-input" />

                    <Button submit content="Guardar" className="edit-profile-button" />
                </form>
            </section>
        </main>
    )
}