import NavButton from "@/system-design/atoms/NavButton";

export default function Header() {

    return (
        <header className="dashboard-header">
            <picture className="logo">
                <NavButton to="/dashboard">
                    <img src="/Images/logo.png" alt="Logo de la empresa" />
                </NavButton>
            </picture>
        </header>
    )

}