'use client'
import { useEffect } from "react"
import "./_join.scss"
import { isUserAuthenticated } from "@/lib/constants/utils"
import { Usuario } from "@/lib/constants/declarations"
interface Props {
    children: React.ReactNode
}
export default function Layout({ children }: Props) {
    useEffect(() => {
        isUserAuthenticated((user: Usuario) => {
            if (user) {
                window.location.href = "/home"
            }
        })
    }, [])

    return (
        <main className="join-home">
            <section className="form-sections">
                {children}
            </section>
        </main>
    )
}