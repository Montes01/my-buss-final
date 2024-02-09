'use client'
import "./_login.scss";
import Button from "@/system-design/atoms/Button";
import { IconBrandGoogle, IconBrandGithub, IconBrandFacebook } from "@tabler/icons-react";
import Input from "@/system-design/atoms/Input";

export default function Login() {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault() }
    return (
        <form
            onSubmit={handleSubmit}
            action=""
            className="login-form"
        >
            <h3 className="login-form_title">Inicia Sesión</h3>
            <section className="login-ways">
                <Button className="login-google login-way" content={<IconBrandGoogle color="white" />} />
                <Button className="login-github login-way" content={<IconBrandGithub color="white" />} />
                <Button className="login-github login-way" content={<IconBrandFacebook color="white" />} />
            </section>
            <section className="camps">
                <Input name="dni" className="form-input" label="Documento" />
                <Input name="password" className="form-input" label="Contraseña" type="password" />
                <Button submit content="Ingresar" className=" login-button" />
            </section>
        </form>
    )
}