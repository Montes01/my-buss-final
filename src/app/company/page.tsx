"use client"
import { ENDPOINTS, SERVER_URL } from "@/lib/constants/constants"
import { Ruta } from "@/lib/constants/declarations"
import { routesMock } from "@/lib/constants/mocks"
import { parseRouteList } from "@/lib/constants/utils"
import companyActions from "@/lib/context/hooks/companyActions"
import { UseGet } from "@/lib/hooks/fetchHook"
import RouteItem from "@/system-design/molecules/RouteItem"
import { useEffect, useState } from "react"
export default function Company() {
    const { UseGetCompany } = companyActions()
    const [routes, setRoutes] = useState<Ruta[]>([])

    useEffect(() => {
        const companyId = UseGetCompany.iD_Empresa
        if (!companyId) return
        const url = SERVER_URL + ENDPOINTS.ROUTE.LIST_BY_COMPANY + "?ID_Empresa=" + companyId

        UseGet(url).then(res => {
            const routes = res.Data
            const parsedRoutes = parseRouteList(routes)
            setRoutes(parsedRoutes)
        })
    }, [UseGetCompany])



    return (
        <section className="routes">
            {
                routes.map(({ ID_Empresa, ID_Ruta, Nombre, Tarifa, Descripción, Horario, Tipo }) => (

                    <RouteItem
                        key={ID_Ruta}
                        ID_Empresa={ID_Empresa}
                        ID_Ruta={ID_Ruta}
                        Nombre={Nombre}
                        Tarifa={Tarifa}
                        Descripción={Descripción}
                        Horario={Horario}
                        Tipo={Tipo}
                    />
                ))
            }
        </section>

    )
}