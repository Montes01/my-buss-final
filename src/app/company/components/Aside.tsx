import companyActions from "@/lib/context/hooks/companyActions"
import Button from "@/system-design/atoms/Button"
import NavButton from "@/system-design/atoms/NavButton"

export default function Aside() {
    const { UseGetCompany: company } = companyActions()
    return (
        <aside className="nav-bar">
            <section className="info">
                <img width={50} src={company.imagen ? company.imagen : "/Images/user.png"} alt="" />
                <h1>{company?.nombre}</h1>
            </section>
            <section className="options">
                    <NavButton to="/company" content="Rutas" className="dashboard-option"/>
                    <NavButton to="/company/add" content="Añadir ruta" className="dashboard-option"/>
                    <NavButton to="/company/profile" content="Editar perfil" className="dashboard-option"/>
            </section>

            <Button content="Cerrar sesion" className="logout-button" />
        </aside>


    )

}