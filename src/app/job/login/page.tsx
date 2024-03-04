"use client"
import Button from "@/system-design/atoms/Button";
import Input from "@/system-design/atoms/Input";
import "./login.scss";
import { ENDPOINTS, SERVER_URL } from "@/lib/constants/constants";
import { UsePost } from "@/lib/hooks/fetchHook";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const url = SERVER_URL + ENDPOINTS.COMPANY.LOGIN
        const data = new FormData(e.currentTarget)
        const Correo = data.get("email")
        const Contraseña = data.get("password")
        const body = { Correo, Contraseña }
        UsePost(url, body).then(res => {
            if (res.message === "OK") {
                localStorage.setItem("token", res.data)
                router.push("/company")
            } else {
                console.error("Error al iniciar sesion ", res)
            }
        })

    }
    return (
        <section className="login-page">
            <section className="login-form">
                <h1>Bienvenido de nuevo</h1>
                <form className="login-business" onSubmit={handleSubmit}>
                    <section className="form-sections">
                        <section className="form-section">
                            <Input label="Email" name="email" required type="email" className="input" />
                            <Input label="Contraseña" name="password" required type="password" className="input" />
                        </section>
                    </section>
                    <Button content="Login" submit />
                </form>
            </section>
        </section>
    );
}