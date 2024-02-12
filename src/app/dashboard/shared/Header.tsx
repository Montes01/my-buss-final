import Logo from "@/system-design/molecules/Logo";
import NavButton from "@/system-design/atoms/NavButton";
import Button from "@/system-design/atoms/Button";
import {  IconLogout } from "@tabler/icons-react";
export default function Header() {

    return (
        <header className="dashboard-header">
            <Logo to="/dashboard" className="dashboard-logo"/>
            <section className="header-buttons">
                <NavButton children="Inicio" className="header-button" to="/dashboard" />
                <NavButton children="Perfil" className="header-button" to="/dashboard/profile" />
                <NavButton children="Configuración" className="header-button" to="/dashboard/settings" />
                <Button content={IconLogout} className="logout-button" />
            </section>
        </header>
    )

}