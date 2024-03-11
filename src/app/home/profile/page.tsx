"use client"
import UserActions from "@/lib/context/hooks/userActions"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { isUserAuthenticated } from "@/lib/constants/utils"
import { Usuario } from "@/lib/constants/declarations"
import "./profile.scss"
import Button from "@/system-design/atoms/Button"
import Input from "@/system-design/atoms/Input"
export default function Profile() {
    const router = useRouter()
    const [canEdit, setCanEdit] = useState(false)
    const { UseGetUser: user } = UserActions()
    const dialogRef = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        isUserAuthenticated((user: Usuario) => {
            if (!user) {
                router.push("/home/join/login")
            }
        })
    }, [])



    const handleEditProfileClick = () => {
        setCanEdit(!canEdit)
    }

    return (
        <>
            <main className="main-profile">
                <h3 className="profile-title">Perfil y visibilidad</h3>
                <p className="profile-text">Administra tu información personal y controla a qué información pueden acceder otras personas y aplicaciones.</p>
                <section className="image-name">
                    <h4 className="username-display">{user?.Nombre}</h4>
                    <img src={user?.FotoPerfil ? user.FotoPerfil : "/Images/user.png"} onError={() => {
                        return "/Images/user.png"
                    }} width={75} height={75} alt="Foto de perfil" />
                    <Button action={handleEditProfileClick} content="Editar perfil" className="edit-profile" />
                </section>

                <form className="profile-camps">

                    <Input readonly type="email" label="correo electronico" className="profile-input" defaultValue={user.CorreoElectronico} />
                    <Input readonly label="Rol" className="profile-input" defaultValue={user.Rol} />
                    <Input readonly={!canEdit} label="Nombre" className="profile-input" defaultValue={user.Nombre} />
                    <Input readonly={!canEdit} type="tel" label="Telefono" className="profile-input" defaultValue={user.Teléfono} />

                    {canEdit && <Button content="Guardar" className="save-profile" />}
                </form>
                {/* delete account button */}
                <section className="delete-account">
                    <Button action={() => dialogRef.current?.showModal()} content="Eliminar cuenta" className="delete-account-button" />
                </section>
            </main>

            <dialog ref={dialogRef}>
                <section className="dialog-content">
                    <h3>Eliminar cuenta</h3>
                    <p>¿Estás seguro de que quieres eliminar tu cuenta?</p>
                    <section className="dialog-buttons">
                        <Button action={() => dialogRef.current?.close()} content="Cancelar" className="cancel-delete" />
                        <Button content="Eliminar" className="confirm-delete" />
                    </section>
                </section>
            </dialog>
        </>
    )

}