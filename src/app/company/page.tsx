"use client"
import { ENDPOINTS, SERVER_URL } from "@/lib/constants/constants"
import {  route } from "@/lib/constants/declarations"
import { routesMock } from "@/lib/constants/mocks"
import companyActions from "@/lib/context/hooks/companyActions"
import { UseGet } from "@/lib/hooks/fetchHook"
import RouteItem from "@/system-design/molecules/RouteItem"
import { useEffect, useState } from "react"
export default function Company() {
    const { UseGetCompany } = companyActions()
    const [routes, setRoutes] = useState<route[]>([])

    useEffect(() => {
        routesMock().then(res => {
            setRoutes(res as route[])
        })
    }, [])



    return (
        <section className="routes">
            {
                routes.map(({ estadoR, finR, inicioR, numeroR, fkIdEmpresa }) => (

                    <RouteItem
                        key={numeroR}
                        numeroR={numeroR}
                        inicioR={inicioR}
                        finR={finR}
                        estadoR={estadoR}
                        fkIdEmpresa={fkIdEmpresa}
                    />
                ))
            }
        </section>

    )
}