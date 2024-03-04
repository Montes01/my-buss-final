'use client'

import { readToken } from "@/lib/constants/utils"
import userActions from "@/lib/context/hooks/userActions"
import { useEffect } from "react"

export default function Dashboard() {
    const { UseGetUser, UseLogin } = userActions()
    let user = UseGetUser
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            try {
                const userFromToken = readToken(token)
                UseLogin(userFromToken)
            } catch (error) {
                console.log(error)
            }
        } else {
            window.location.href = '/home'
        }
    }, [])
    return (
        <main className="main-dashboard">
            Bienvenido  {user?.nombre}
        </main>
    )
}