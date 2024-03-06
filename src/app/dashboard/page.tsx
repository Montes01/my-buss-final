'use client'

import { ENDPOINTS, SERVER_URL } from "@/lib/constants/constants"
import { readToken } from "@/lib/constants/utils"
import userActions from "@/lib/context/hooks/userActions"
import { UseGet } from "@/lib/hooks/fetchHook"
import { useEffect, useState } from "react"
import ChatBot from "./components/ChatBot"

export default function Dashboard() {
    // const { UseGetUser, UseLogin } = userActions()
    // let user = UseGetUser
    // const [routes, setRoutes] = useState([])
    // useEffect(() => {
    //     const token = localStorage.getItem('token')
    //     if (token) {
    //         try {
    //             const userFromToken = readToken(token)
    //             UseLogin(userFromToken)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     } else {
    //         window.location.href = '/home'
    //     }
    // }, [])

    // useEffect(() => {
    //     const url = SERVER_URL + ENDPOINTS.ROUTE.LIST
    //     UseGet(url).then(res => {
    //         console.log(res)
    //         setRoutes(res.data)
    //     })
    // }, [])
    return (
        <main>


            <ChatBot />
        </main>
    )
}