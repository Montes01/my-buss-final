"use client"
import Button from "@/system-design/atoms/Button";
import Spinner from "@/system-design/atoms/Spinner";
import "./_job.scss";
import Link from "next/link";
import Input from "@/system-design/atoms/Input";
import ChangeJoin from "../shared/ChanngeJoin";
import { useState } from "react";

export default function LoginCompany() {
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <>
            <ChangeJoin isLogin />
            <form
                onSubmit={handleSubmit}
                action=""
                className="login-form"
            >
                <h3 className="login-form_title">Ingresa a tu panel de control</h3>
                <section className="login-ways">
                    {/* <Button className="login-google login-way" content={IconBrandGoogle} />
                    <Button className="login-github login-way" content={IconBrandFacebook} /> */}
                </section>
                <section className="camps">
                    <Input required name="email" className="form-input" label="Correo" type="email" />
                    <Input required name="password" className="form-input" label="Contraseña" type="password" />
                    <section className="final-step">
                        <Button submit content="Ingresar" className=" login-button" />
                        {isLoading && <Spinner />}

                    </section>
                    <section className="join-as-company">
                        <p>¿Eres un usuario? <Link className="company-anchor" href="/home/join/login"> Ingresa a tu cuenta</Link> </p>
                    </section>
                    <section className="login-form_error">
                        {error}
                    </section>
                </section>
            </form>
        </>
    )
}