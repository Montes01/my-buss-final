"use client"
import { ENDPOINTS, SERVER_URL } from "@/lib/constants/constants"
import { Usuario } from "@/lib/constants/declarations"
import { parseUserList } from "@/lib/constants/utils"
import { UseGet } from "@/lib/hooks/fetchHook"
import { useEffect, useState } from "react"
import UserCard from "../shared/user-card/UserCard"
import "./users-page.scss"
export default function Users() {
    const [users, setUsers] = useState([] as Usuario[])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function getUsers() {
            const token = localStorage.getItem("user-token")
            try {
                const { Data } = await UseGet(SERVER_URL + ENDPOINTS.ADMIN.LIST_USERS, { Authorization: `Bearer ${token}` })
                console.log(Data)
                const parsedUsers = parseUserList(Data)
                setUsers(parsedUsers)
                setIsLoading(false)
            } catch (error) {
                console.error(await error);
            }
        }
        getUsers()
    }, [])

    return (
        <main className="users-main">
            <h1 className="users-title">Usuarios</h1>
            {isLoading ? (
                <div className="loading-bar">Loading...</div>
            ) : (
                <section className="users-section">
                    {users.map((user) => (
                        <UserCard key={user.ID_Usuario} {...user} />
                    ))}
                </section>
            )}
        </main>
    )
}   