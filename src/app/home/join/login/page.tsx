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


        loginMock(Correo as string, Contraseña as string).then((res: any) => {
            localStorage.setItem('user-token', res?.Data?.token)
            location.href = "/home"
        }).catch((err: Response) => {
            setError(err.Message)
        })
        setIsLoading(false)
    }
    return (
        <>
            <ChangeJoin isLogin />
            <form
                onSubmit={handleSubmit}
                action=""
                className="login-form"
            >
                <h3 className="login-form_title">Inicia Sesión</h3>
                <section className="login-ways">
                    <Button className="login-google login-way" content={IconBrandGoogle} />
                    <Button className="login-github login-way" content={IconBrandFacebook} />
                </section>
                <section className="camps">
                    <Input required name="email" className="form-input" label="Correo" type="email" />
                    <Input required name="password" className="form-input" label="Contraseña" type="password" />
                    <section className="final-step">
                        <Button submit content="Ingresar" className=" login-button" />
                        {isLoading && <Spinner />}

                    </section>
                    <section className="login-form_error">
                        {error}
                    </section>
                </section>
            </form>
        </>
    )
}
