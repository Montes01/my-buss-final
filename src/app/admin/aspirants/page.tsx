"use client"
import { ENDPOINTS, SERVER_URL } from "@/lib/constants/constants"
import { Conductor, Usuario } from "@/lib/constants/declarations"
import { parseDriverList, parseUserList } from "@/lib/constants/utils"
import { UseGet } from "@/lib/hooks/fetchHook"
import { useEffect, useState } from "react"
import AspirantCard from "../shared/aspirant-card/AspirantCard"
import "./aspirants.scss"

export default function Aspirants() {

    const [aspirants, setAspirants] = useState([] as Conductor[])
    const [isLoading, setIsLoading] = useState(true)

    const [users, setUsers] = useState([] as Usuario[])

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
    useEffect(() => {

        const getAspirants = async () => {
            let token = localStorage.getItem("user-token")
            try {
                const res = await UseGet(SERVER_URL + ENDPOINTS.ADMIN.LIST_ASPIRANTS, {
                    Authorization: `Bearer ${token}`
                })
                const parsedData = parseDriverList(res.Data)
                setAspirants(parsedData)

            } catch (error) {
                console.error(error)
            } finally {
                setIsLoading(false)
            }
        }
        getAspirants()
    }, [])

    return (
        <main className="aspirants-page">
            <h1 className="aspirants-page__title">Aspirantes</h1>
            {isLoading ? (
                <div className="aspirants-page__loading">Loading...</div>
            ) : (
                <section className="aspirants-page__section">
                    {aspirants.map((aspirant) => (
                        <AspirantCard key={aspirant.ID_Conductor} {...aspirant} {...users.find(el => el.ID_Usuario == aspirant.ID_Usuario)} />
                    ))}
                </section>
            )}
        </main>
    )
}