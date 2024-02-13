'use client'
import "./_login.scss";
import { decode } from "jsonwebtoken";
import Button from "@/system-design/atoms/Button";
import { IconBrandGoogle, IconBrandGithub, IconBrandFacebook } from "@tabler/icons-react";
import Input from "@/system-design/atoms/Input";
import { SERVER_URL } from "@/lib/constants/constants";
import { usePost } from "@/lib/hooks/fetchHook"
import Spinner from "@/system-design/atoms/Spinner";
import { useState } from "react";
import { parseUser } from "@/lib/constants/utils";
import ChangeJoin from "../shared/ChanngeJoin";
export default function Login() {
    const [isLoading, setIsLoading] = useState(false)
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        const data = new FormData(e.currentTarget)
        const Documento = data.get('dni')!
        const Contraseña = data.get('password')!
        const res = await usePost(SERVER_URL + '/Usuario/Ingresar', { Documento, Contraseña })
        if (res.message === "OK") {
            let token = String(res.data); // Convert res.data to a string
            let decoded = decode(token);
            console.log(decoded)
            try {
                localStorage.clear()
                let userParsed = parseUser(decoded)
                localStorage.setItem('user', JSON.stringify(userParsed))
                window.location.href = "/dashboard"
            } catch (err) {
                console.error(err)
            }
        }
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
                    <Button className="login-github login-way" content={IconBrandGithub} />
                    <Button className="login-github login-way" content={IconBrandFacebook} />
                </section>
                <section className="camps">
                    <Input required name="dni" className="form-input" label="Documento" />
                    <Input required name="password" className="form-input" label="Contraseña" type="password" />
                    <section className="final-step">
                        <Button submit content="Ingresar" className=" login-button" />
                        {isLoading && <Spinner />}
                    </section>
                </section>
            </form>
        </>
    )
}