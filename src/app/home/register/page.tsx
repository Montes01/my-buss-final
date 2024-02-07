'use client'
import Input from "@/system-design/atoms/Input"
import "./_register.scss";
import Button from "@/system-design/atoms/Button";
export default function Register() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submit')
    const data = new FormData(e.currentTarget)
    console.log(data.get('username'))
    console.log(data.get('password'))
  }

  return (
    <section className="slider-content">
      <section className="register-content">

        <h3 className="register-form_title">Bienvenido</h3>
        <form
          onSubmit={handleSubmit}
          action=""
          className="register-form"
        >
          <section className="register-camps 1part">
            <Input name="username" className="form-input" label="Nombre de usuario" />
            <Input name="password" className="form-input" label="Contraseña" type="password" />
            <Input name="email" className="form-input" label="Correo electrónico" type="email" />
            <Button content="continuar" className="continue-button"/>
          </section>
          <section className="register-camps 2part">
            <Input name="name" className="form-input" label="Nombre" />
            <Input name="lastname" className="form-input" label="Apellido" />
            <Input name="phone" className="form-input" label="Teléfono" />
          </section>
          <section className="register-camps 3part">
            <Input name="address" className="form-input" label="Dirección" />
            <Input name="city" className="form-input" label="Ciudad" />
            <Input name="country" className="form-input" label="País" />
          </section>
        </form>
      </section>
    </section>


  )

}