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
    }, [location.pathname])

    return (
        <main className="join-home">
            <section className="form-sections">
                {children}
            </section>
        </main>
    )
}