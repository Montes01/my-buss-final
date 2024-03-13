"use client"
import { ENDPOINTS, SERVER_URL } from "@/lib/constants/constants";
import companyActions from "@/lib/context/hooks/companyActions";
import { UsePost } from "@/lib/hooks/fetchHook";
import Button from "@/system-design/atoms/Button";
import Input from "@/system-design/atoms/Input";
export default function AddRoute() {
    const company = companyActions().UseGetCompany
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        const NumeroR = data.get("NumeroR")
        const InicioR = data.get("InicioR")
        const FinR = data.get("FinR")
        const EstadoR = false
        const url = SERVER_URL + ENDPOINTS.ROUTE.ADD
        const headers = {
            "Authorization": `Bearer ${localStorage.getItem("company-token")}`
        }
        console.log(headers)
        const body = { NumeroR, InicioR, FinR, EstadoR, FkIdEmpresa: company.iD_Empresa }
        UsePost(url, body, headers).then(res => {
            console.log(res)
            if (res.Message === "OK") {
                alert("Ruta registrada")
            } else {
                alert("Error al registrar la ruta")
            }
        })
    }
    return (
        <form onSubmit={handleSubmit} className="route-form">
            
            <Button content="Registrar" submit />


        </form>
    )

}