'use client'
import "./_login.scss";
import Button from "@/system-design/atoms/Button";
import { IconBrandGoogle, IconBrandGithub, IconBrandFacebook } from "@tabler/icons-react";
import Input from "@/system-design/atoms/Input";
import { ENDPOINTS, SERVER_URL } from "@/lib/constants/constants";
import { UsePost } from "@/lib/hooks/fetchHook"
import Spinner from "@/system-design/atoms/Spinner";
import { useState } from "react";
import ChangeJoin from "../shared/ChanngeJoin";
import { useRouter } from "next/navigation";
import { loginMock } from "@/lib/constants/mocks";
import { Response } from "@/lib/constants/declarations";
import Link from "next/link";
export default function Login() {
    const router = useRouter()
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError("")
        setIsLoading(true)
        const data = new FormData(e.currentTarget)
        const Correo = data.get('email')!
        const Contraseña = data.get('password')!
        const body = { Correo, Contraseña }
        try {
            const res = await UsePost(SERVER_URL + ENDPOINTS.USER.LOGIN, body);
            localStorage.setItem('user-token', res?.Data);
            router.push('/home');
        } catch (err: unknown) {
            setError("Correo o contraseña incorrectos")
        }
        setIsLoading(false)
    }
    return (
        <>
            <ChangeJoin isLogin />
            <form onSubmit={handleSubmit} action="" className="login-form">
    <h3 className="login-form_title">Inicia Sesión</h3>
    <section className="login-ways">
        {/* Aquí podrías agregar botones para iniciar sesión con Google, Facebook, etc. */}
    </section>
    <section className="camps">
        <Input required name="email" className="form-input" label="Correo" type="email" />
        <Input required name="password" className="form-input" label="Contraseña" type="password" />
        <section className="final-step">
            <Button submit content="Ingresar" className="login-button" />
            {isLoading && <Spinner />}
        </section>
        <section className="join-as-company">
            <p>¿Eres una empresa? <Link className="company-anchor" href="/home/join/company">Ingresa a tu cuenta</Link> </p>
        </section>
        <section className="login-form_error">
            {error}
        </section>
    </section>
</form>

        </>
    )
}
