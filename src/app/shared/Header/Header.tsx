import React, { useState } from 'react';
import Logo from "@/system-design/molecules/Logo";
import NavButton from "@/system-design/atoms/NavButton";
import Button from "@/system-design/atoms/Button";
import { IconLogout, IconUser } from "@tabler/icons-react";
import "./header.scss";

export default function Header() {
    const handleLogoutClick = () => {
        localStorage.clear();
        window.location.href = "/home";
    };

    const [darkMode, setDarkMode] = useState(false);

    // Agregar una console.log dentro de toggleDarkMode para verificar si se está llamando correctamente
const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log('Dark mode:', darkMode); // Verificar si se está cambiando el estado correctamente
    if (!darkMode) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
};


    return (
        <header className={`dashboard-header ${darkMode ? 'dark-mode' : ''}`}>
            <section className="header-logo">
                <Logo to="/dashboard" className="dashboard-logo" />
                <h1 className="my-buss-title">My Buss</h1>
            </section>
            <section className="header-buttons">
                <NavButton content="Inicio" className="header-button" to="/dashboard" />
                <NavButton content="Configuración" className="header-button" to="/dashboard/settings" />
                <NavButton content={<IconUser color="white" />} className="header-button button" to="/profile" />
                <Button action={handleLogoutClick} content={IconLogout} className="header-button" />
                <button onClick={toggleDarkMode} className="header-button dark-mode-toggle">
                    {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
                </button>
            </section>
        </header>
    );
}

// import Logo from "@/system-design/molecules/Logo";
// import NavButton from "@/system-design/atoms/NavButton";
// import Button from "@/system-design/atoms/Button";
// import { IconLogout, IconUser } from "@tabler/icons-react";
// import "./header.scss"
// export default function Header() {
//     const handleLogoutClick = () => {
//         localStorage.clear()
//         window.location.href = "/home"
//     }
//     return (
//         <header className="dashboard-header">
//             <section className="header-logo">
//                 <Logo to="/dashboard" className="dashboard-logo" />
//                 <h1 className="my-buss-title">My Buss</h1>
//             </section>
//             <section className="header-buttons">
//                 <NavButton content="Inicio" className="header-button" to="/dashboard" />
//                 <NavButton content="Configuración" className="header-button" to="/dashboard/settings" />
//                 <NavButton content={<IconUser color="white" />} className="header-button button" to="/profile" />
//                 <Button action={handleLogoutClick} content={IconLogout} className="header-button" />
//             </section>
//         </header>
//     )

// }