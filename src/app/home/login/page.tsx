'use client'
import Button from "@/system-design/atoms/Button"
import Input from "@/system-design/atoms/Input"
import "./_login.scss";
import Footer from "../../shared/Footer";

export default function Login() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submit')
    const data = new FormData(e.currentTarget)
    console.log(data.get('username'))
    console.log(data.get('password'))
  }
  return (
    <>
      <section className="slider-content">
        <section className="login-content">

          <h3 className="login-form_title">Bienvenido de nuevo</h3>
          <form
            onSubmit={handleSubmit}
            action=""
            className="login-form"
          >
            <Input name="username" className="form-input" label="Nombre de usuario" />
            <Input name="password" className="form-input" label="Contraseña" type="password" />
            <Button submit content="Ingresar" />
          </form>
        </section>
      </section>
    </>
  )
}