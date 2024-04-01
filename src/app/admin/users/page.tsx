"use client"
import { ENDPOINTS, SERVER_URL } from "@/lib/constants/constants"
import { Usuario } from "@/lib/constants/declarations"
import { parseUserList } from "@/lib/constants/utils"
import { UseGet } from "@/lib/hooks/fetchHook"
import { useEffect, useState } from "react"

export default function Users() {
    const [users, setUsers] = useState([] as Usuario[])
    useEffect(() => {
        async function getUsers() {
            const token = localStorage.getItem("user-token")
            try {
                const { Data } = await UseGet(SERVER_URL + ENDPOINTS.ADMIN.LIST_USERS, { Authorization: `Bearer ${token}` })
                const parsedUsers = parseUserList(Data)
                setUsers(parsedUsers)
            } catch (error) {
                console.error(await error);
            }
        }
        getUsers()
    }, [])
    return (
        <main>
            <h1>Usuarios</h1>
            <section>
                {users.map((user) => (
                    <article key={user.ID_Usuario}>
                        <h2>{user.Nombre}</h2>
                        <p>{user.CorreoElectronico}</p>
                    </article>
                ))}
            </section>
        </main>
    )
}   