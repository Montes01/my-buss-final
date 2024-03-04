"use client"
import { ENDPOINTS, SERVER_URL } from "@/lib/constants/constants"
import { parseCompany } from "@/lib/constants/utils"
import companyActions from "@/lib/context/hooks/companyActions"
import { UseGet } from "@/lib/hooks/fetchHook"
import RouteCard from "@/system-design/molecules/RouteCard"
import { decode } from "jsonwebtoken"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
export default function Company() {
    const { UseGetCompany, UseSetCompany } = companyActions()
    const company = UseGetCompany
    const router = useRouter()
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) {
            router.push("/job/login")
        }
        else {
            const decoded = decode(token)
            const parsed = parseCompany(decoded)
            UseSetCompany(parsed)
            const url = SERVER_URL + ENDPOINTS.ROUTE.LIST_BY_COMPANY + `?idEmpresa=${parsed.idEmpresa}`
            UseGet(url).then(res => {
                setRoutes(res.data)
            })
        }
    }, [])

    const [routes, setRoutes] = useState([])


    return (
        <section className="routes-wrapper">
            <h1>Rutas de {company?.nombre}</h1>
            <section className="routes">
                {
                    routes.map((route: any) => (
                        <RouteCard Number={route.numeroR} key={route.NumeroR} />
                    ))
                }
            </section>
        </section>

    )
}