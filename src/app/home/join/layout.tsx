'use client'
import "./_join.scss"
import NavButton from "@/system-design/atoms/NavButton"
import { useEffect, useState } from "react"

interface Props {
    children: React.ReactNode
}
export default function Layout({ children }: Props) {

    const [isLogin, setIsLogin] = useState(false)
    useEffect(() => {
        setIsLogin(location.pathname.includes(`/join/login`))
    }, [])

    return (
        <main className="join-home">
            <section className="form-sections">
                <section className="change-join-type">
                    <h2>BIENVENIDO <br /> {isLogin && "Nuevamente"}</h2>
                    <p>{isLogin
                        ? "Si aun no tienes una cuenta, por favor registrate aqui!"
                        : "Si ya tienes una cuenta, ingresa aqui "}</p>
                    <NavButton className="button change-join-button" to={isLogin ? "/join/register" : "/join/login"} children="Registrate" />
                </section>
                {children}
            </section>
        </main>
    )
}