"use client"
import { ENDPOINTS, SERVER_URL } from "@/lib/constants/constants"
import { Ticket } from "@/lib/constants/declarations"
import { UseGet } from "@/lib/hooks/fetchHook"
import { useEffect, useState } from "react"

export default function Tickets() {
    const [tickets, setTickets] = useState([] as Ticket[])
    useEffect(() => {
        async function getTickets() {
            const token = localStorage.getItem("user-token")
            try {
                const {Data} = await UseGet(SERVER_URL + ENDPOINTS.ADMIN.LIST_TICKETS, { Authorization: `Bearer ${token}` })
                setTickets(Data)

            } catch (error) {
                console.error(await error);
            }
        }
        getTickets()
    }, [])
    return (
        <main>
            <h1>Tickets</h1>
            <section>
                {tickets.map((ticket) => (
                    <article key={ticket.ID_Ticket}>
                        <h2>{ticket.ID_Usuario}</h2>
                        <p>{ticket.Estado}</p>
                    </article>
                ))}
                {
                    tickets.length === 0 && <p>No hay tickets</p>
                }
            </section>
        </main>
    )

}