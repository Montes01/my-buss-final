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
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
        console.log(headers)
        const body = { NumeroR, InicioR, FinR, EstadoR, FkIdEmpresa: company.idEmpresa }
        UsePost(url, body, headers).then(res => {
            console.log(res)
            if (res.message === "OK") {
                alert("Ruta registrada")
            } else {
                alert("Error al registrar la ruta")
            }
        })
    }
    return (
        <form onSubmit={handleSubmit} className="route-form">
            <Input label="Numero de Ruta" name="NumeroR" required type="number" className="input" />
            <Input label="Inicio de Ruta" name="InicioR" required type="text" className="input" />
            <Input label="Fin de Ruta" name="FinR" required type="text" className="input" />
            <Button content="Registrar" submit />


        </form>
    )

}