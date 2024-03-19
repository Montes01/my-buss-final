"use client"
import UserActions from "@/lib/context/hooks/userActions"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { isUserAuthenticated } from "@/lib/constants/utils"
import { Usuario } from "@/lib/constants/declarations"
import "./profile.scss"
import Button from "@/system-design/atoms/Button"
import Input from "@/system-design/atoms/Input"
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

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
    const imageRef = useRef<HTMLImageElement>(null)


    const handleEditProfileClick = () => {
        setCanEdit(!canEdit)
    }

    return (
        <>
  <section  className="contenedro-perfil">

      <h3 className="profile-title">Perfil y visibilidad</h3>
         <main className="main-profile">
      <p className="profile-text">Administra tu información personal y controla a qué información pueden acceder otras personas y aplicaciones.</p>
      <section className="image-name">
        <h4 className="username-display">{user?.Nombre}</h4>
        <img ref={imageRef} src={user?.FotoPerfil ? user.FotoPerfil : "/Images/user.png"} onError={() => {
          if (!imageRef.current) return;
          imageRef.current.src = "https://th.bing.com/th/id/R.8dff49985d0d8afa53751d9ba8907aed?rik=7clxEmBk65lU2A&pid=ImgRaw&r=0"
        }} width={75} height={75} alt="Foto de perfil" />
        <Button action={handleEditProfileClick} content="Editar perfil" className="edit-profile" />
      </section>

      <form className="profile-form">
  <div className="profile-input-container">
    <FaMapMarkerAlt className="input-icon" />
    <Input
      readonly={!canEdit}
      type="text"
      label="Dirección"
      className="profile-input"
      defaultValue={user.Dirección}
      />
  </div>
  <div className="profile-input-container">
    <FaEnvelope className="input-icon" />
    <Input
      readonly={!canEdit}
      type="email"
      label="Correo electrónico"
      className="profile-input"
      defaultValue={user.CorreoElectronico}
    />
  </div>
  <div className="profile-input-container">
    <FaPhoneAlt className="input-icon" />
    <Input
      readonly={!canEdit}
      type="tel"
      label="Teléfono"
      className="profile-input"
      defaultValue={user.Teléfono}
    />
  </div>
  <div className="profile-input-container">
    <FaMapMarkerAlt className="input-icon" />
    <Input
      readonly={!canEdit}
      type="text"
      label="Rol"
      className="profile-input"
      defaultValue={user.Rol}
      />
  </div>
  <div className="profile-input-container">
    <FaMapMarkerAlt className="input-icon" />
    <Input
      readonly={!canEdit}
      type="text"
      label="Nombre"
      className="profile-input"
      defaultValue={user.Nombre}
    />
  </div>
  {canEdit && <Button content="Guardar" className="save-profile-btn" />}
</form>


      <section className="delete-account">
        <Button action={() => dialogRef.current?.showModal()} content="Eliminar cuenta" className="delete-account-button" />
      </section>
    </main>

    <div className="dialog-background">
  <dialog ref={dialogRef} className="dialog-content">
    <h3>Eliminar cuenta</h3>
    <p>¿Estás seguro de que quieres eliminar tu cuenta?</p>
    <div className="dialog-buttons">
      <Button action={() => dialogRef.current?.close()} content="Cancelar" className="cancel-delete" />
      <Button content="Eliminar" className="confirm-delete" />
    </div>
  </dialog>
</div>

      </section>
        </>
    )

}