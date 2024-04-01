"use client"
import { Usuario } from "@/lib/constants/declarations"
import { isUserAuthenticated } from "@/lib/constants/utils"
import { UseAppSelector } from "@/lib/context/hooks"
import UserActions from "@/lib/context/hooks/userActions"
import { redirect } from "next/navigation"
import { useEffect } from "react"
import Link from "next/link"
import "./_aside.scss"
import Button from "@/system-design/atoms/Button"
export default function Aside() {
    const user = UseAppSelector(state => state.user)
    const { UseLogin, UseLogout } = UserActions()
    useEffect(() => {
        isUserAuthenticated((userFromToken: Usuario | null) => {
            if (!userFromToken) {
                redirect("/home/join/login")
            } else {
                if (userFromToken.Rol !== "admin") {
                    redirect("/home")
                }
                (!user.ID_Usuario && UseLogin(userFromToken))
            }
        })
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("user-token")
        UseLogout()
        location.href = "/home/join/login"
    }
    return (
        <aside className="admin-aside">
            <section className="profile-info">
                <img className="profile-image" src={user.FotoPerfil} alt="profile" />
                <h2>{user.Nombre}</h2>
                <p>{user.CorreoElectronico}</p>
            </section>
            <section className="dashboard-options">
                <Link className="admin-dashboard-option" href="/admin">
                    Empresas
                </Link>
                <Link className="admin-dashboard-option" href="/admin/users">
                    Usuarios
                </Link>
                <Link className="admin-dashboard-option" href="/admin/tickets">
                    Tickets
                </Link>
            </section>
            <section className="logout">
                <Button className="logout-button" action={handleLogout} content="cerrar sesion"/>
            </section>
        </aside>
    )
}