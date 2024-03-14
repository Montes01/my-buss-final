import { isCompanyAuthenticated } from "@/lib/constants/utils"
import companyActions from "@/lib/context/hooks/companyActions"
import Button from "@/system-design/atoms/Button"
import NavButton from "@/system-design/atoms/NavButton"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Empresa as companyT } from "@/lib/constants/declarations"
export default function Aside() {
    const { UseGetCompany: company, UseSetCompany } = companyActions()
    const router = useRouter()
    useEffect(() => {
        isCompanyAuthenticated((company: companyT | null) => {
            if (company) {
                UseSetCompany(company)
            } else {
                router.push("/home/join/company")
            }
        })
    }, [])
    const handleLogout = () => {
        localStorage.removeItem("company-token")
        router.push("/home/join/company")
    }
    return (
        <aside className="nav-bar">
            <section className="info">
                <img width={50} src={company.logo ? company.logo : "/Images/user.png"} alt="" />
                <h1>{company?.nombre}</h1>
            </section>
            <section className="options">
                    <NavButton to="/company" content="Rutas" className="dashboard-option"/>
                    <NavButton to="/company/add" content="Añadir ruta" className="dashboard-option"/>
                    <NavButton to="/company/profile" content="Editar perfil" className="dashboard-option"/>
            </section>

            <Button content="Cerrar sesion" className="logout-button" action={handleLogout} />
        </aside>


    )

}