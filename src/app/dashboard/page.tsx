'use client'

import { user } from "@/lib/constants/declarations"
import { useEffect, useState } from "react"

export default function dashboard() {
    const [user, setUser] = useState<user | null>(null)
    useEffect(() => {
        let user = localStorage.getItem('user')
        if (user) {
            setUser(JSON.parse(user))
        } else {
            window.location.href = '/home/join/login'
        }
    
    }, [])
    return (
        <>
            Bienvenido  {user?.nombre}
        </>
    )
}