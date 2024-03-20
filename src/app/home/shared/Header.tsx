"use client"
import Button from "@/system-design/atoms/Button";
import NavButton from "@/system-design/atoms/NavButton";
import Logo from "@/system-design/molecules/Logo";
import UserActions from "@/lib/context/hooks/userActions";
import "./Header.scss"
import { useEffect } from "react";
import { isUserAuthenticated } from "@/lib/constants/utils";
import { Usuario } from "@/lib/constants/declarations";
import { IconLogout, IconUser } from "@tabler/icons-react";
export default function Header() {
  const { UseLogin, UseGetUser: user } = UserActions()
  useEffect(() => {
    isUserAuthenticated((user: Usuario) => {
      if (user) {
        UseLogin(user)
      }
    })
  }, [])
  const handleLogoutClick = () => {
    localStorage.clear()
    window.location.href = "/home"
  }
  return (
    <header className="home-header">
      <section className="header-logo">
        <Logo to="/home" className="home-logo" />
        <h1 className="my-buss-title">My Buss</h1>
      </section>
      <section className="header-buttons">
        <NavButton content="Inicio" className="header-button" to="/home" />
        <NavButton content="Nosotros" className="header-button" to="/home/about" />
        {!user.ID_Usuario ?
          (<>
            <NavButton content="Ingresa" className="header-button" to="/home/join/login" />
            <NavButton content="Registro" className="header-button" to="/home/join/register" />
          </>
          ) : (
            <>
              <NavButton content={<IconUser color="white" />} className="header-button button" to="/home/profile" />
              <Button action={handleLogoutClick} content={IconLogout} className="header-button" />
            </>
          )
        }
      </section>
    </header>
  )
}