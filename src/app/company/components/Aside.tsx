import companyActions from "@/lib/context/hooks/companyActions"
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
                    <NavButton to="/company/add-route" content="Agregar Ruta" className="dashboard-option"/>
            </section>
        </aside>


    )

}