import Logo from "@/system-design/molecules/Logo";
import NavButton from "@/system-design/atoms/NavButton";
import Button from "@/system-design/atoms/Button";
import { IconLogout, IconUser } from "@tabler/icons-react";
export default function Header() {
    const handleLogoutClick = () => {
        localStorage.clear()
        window.location.href = "/home"
    }
    return (
        <header className="dashboard-header">
            <Logo to="/dashboard" className="dashboard-logo" />
            <section className="header-buttons">
                <NavButton content="Inicio" className="header-button" to="/dashboard" />
                <NavButton content="Configuración" className="header-button" to="/dashboard/settings" />
                {/* if image fails put another src */}
                <Button content={IconUser} className="header-button" />
                <Button action={handleLogoutClick} content={IconLogout} className="header-button" />
            </section>
        </header>
    )

}