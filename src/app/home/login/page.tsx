'use client'
import Button from "@/system-design/atoms/Button"
import Input from "@/system-design/atoms/Input"
import "./_login.scss";
import { IconBrandGoogle, IconBrandGithub } from "@tabler/icons-react";
import NavButton from "@/system-design/atoms/NavButton";

export default function Login() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault() }
  return (
    <main className="login-home">
      <section className="login-content">
        <section className="form-sections">
          <section className="change-join-type">  
            <h2>BIENVENIDO <br /> NUEVAMENTE</h2>
            <p>Si aun no tienes una cuenta, por favor registrate aqui!</p>
            <NavButton className="button" to="/register" children="Registrate"/>
          </section>
          <form
            onSubmit={handleSubmit}
            action=""
            className="login-form"
          >
            <h3 className="login-form_title">Inicia Sesión</h3>
            <section className="login-ways">
              <Button className="login-google" content={<IconBrandGoogle />} />
              <Button className="login-google" content={<IconBrandGithub />} />
            </section>
            <Input name="dni" className="form-input" label="Documento" />
            <Input name="password" className="form-input" label="Contraseña" type="password" />
            <Button submit content="Ingresar" className=" login-button" />
          </form>

        </section>
      </section>
    </main>
  )
}