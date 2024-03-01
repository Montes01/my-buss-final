"use client"
import UserActions from "@/lib/context/hooks/userActions"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { readToken } from "@/lib/constants/utils"
import { user } from "@/lib/constants/declarations"
import "./profile.scss"
import Button from "@/system-design/atoms/Button"
import Input from "@/system-design/atoms/Input"
export default function Profile() {
    const router = useRouter()
    const [user, setUser] = useState<user>({} as user)
    const [canEdit, setCanEdit] = useState(false)
    const { UseGetUser, UseLogin } = UserActions()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            return router.push('/home')
        }
        if (!UseGetUser.nombre) {
            UseLogin(readToken(token))
        }
    }, [])

    useEffect(() => {
        setUser(UseGetUser)
    }, [UseGetUser])

    return (
        <main className="main-profile">
            <h3 className="profile-title">Perfil y visibilidad</h3>
            <p className="profile-text">Administra tu información personal y controla a qué información pueden acceder otras personas y aplicaciones.</p>
            <section className="image-name">
                <h4 className="username-display">{user?.nombre}</h4>
                <img src={user?.foto || "/Images/user.png"} width={75} height={75} alt="Foto de perfil" />
                <Button content="Editar perfil" className="edit-profile" />
            </section>

            <form className="profile-camps">

                <Input readonly={!canEdit} label="Nombre" className="profile-input" defaultValue={user.nombre} />
                <Input readonly={!canEdit} label="Apellido" className="profile-input" defaultValue={user.apellido} />


            </form>
        </main>
    )

}