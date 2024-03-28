"use client"
import { Empresa } from "@/lib/constants/declarations";
import { IconTrash } from "@tabler/icons-react";
import "./_company-card.scss"
import { UseDelete } from "@/lib/hooks/fetchHook";
import { ENDPOINTS, SERVER_URL } from "@/lib/constants/constants";
interface Props extends Empresa { }
export default function CompanyCard({ Nombre, ID_Empresa, Teléfono, Logo }: Props) {
    const handleRemoveCompany = async () => {
        const token = localStorage.getItem("user-token")
        
        try {
            // TODO: UseDelete(SERVER_URL + ENDPOINTS.COMPANY.DELETE + ID_Empresa, token)
        
        } catch (error) {
            console.error(await error);
        }
    }
    return (
        <article className="company-card">
            <img className="company-logo" src={Logo} alt="company-logo" />
            <h2>{Nombre}</h2>
            <p>{Teléfono}</p>
            <button className="delete-company" onClick={handleRemoveCompany}>
                <IconTrash />
            </button>
        </article>
    )
}