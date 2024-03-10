"use client"
import Header from "../home/shared/Header";
import Input from "@/system-design/atoms/Input";
import "./job.scss";
import Button from "@/system-design/atoms/Button";
import { ENDPOINTS, SERVER_URL } from "@/lib/constants/constants";
import { UsePost } from "@/lib/hooks/fetchHook";
import NavButton from "@/system-design/atoms/NavButton";

export default function Company() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // const url = SERVER_URL + ENDPOINTS.COMPANY.ADD
        // const data = new FormData(e.currentTarget)

        // const IdEmpresa = crypto.randomUUID()
        // const Nombre = data.get("name")
        // const Ubicacion = data.get("address")
        // const Telefono = data.get("phone")
        // const Correo_electronico = data.get("email")
        // const Contraseña = data.get("password")
        // const Imagen = ""

        // const passwordConfirm = data.get("password-confirm")
        // if (Contraseña !== passwordConfirm) {
        //     alert("Las contraseñas no coinciden")
        //     return
        // }
        // const body = { IdEmpresa, Nombre, Ubicacion, Telefono, Correo_electronico, Contraseña, Imagen }
        // UsePost(url, body).then(res => {
        //     if (res.ok) {
        //         alert("Empresa registrada")
        //     } else {
        //         alert("Error al registrar la empresa")
        //     }
        // })

    }

    return (
            <section className="register-page">
                <section className="register-form">
                    <h1>Registra tu empresa</h1>
                    <form className="register-business" onSubmit={handleSubmit}>
                        <section className="form-sections">
                            <section className="form-section">
                                <Input label="Nombre de la empresa" name="name" required type="text" className="input" />
                                <Input label="Correo" name="email" required type="email" className="input" />
                                <Input label="Telefono" name="phone" required type="tel" className="input" />
                            </section>
                            <section className="form-section">
                                <Input label="Direccion" name="address" required type="text" className="input" />
                                <Input label="Contraseña" name="password" required type="password" className="input" />
                                <Input label="Confirmar contraseña" name="password-confirm" required type="password" className="input" />
                            </section>
                        </section>
                        <Button content="Registrar" submit />
                    </form>
                <NavButton content="¿ya eres empresa?" to="/job/login" className="join-company"/>
                </section>
            </section>
    )
}