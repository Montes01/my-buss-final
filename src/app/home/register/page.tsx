'use client'
import { useRef } from "react"
import Input from "@/system-design/atoms/Input"
import "./_register.scss";
import Button from "@/system-design/atoms/Button";
export default function Register() {
  const firstRef = useRef<HTMLDivElement>(null)
  const secondRef = useRef<HTMLDivElement>(null)
  const thirdRef = useRef<HTMLDivElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submit')
    const data = new FormData(e.currentTarget)
    console.log(data.get('username'))
    console.log(data.get('password'))
  }

  const handleContinue = (to: 1 | 2 | 3) => {
    switch (to) {
      case 3:
        firstRef.current?.classList.remove('active')
        secondRef.current?.classList.remove('active')
        thirdRef.current?.classList.add('active')
        break;
      case 2:
        firstRef.current?.classList.remove('active')
        secondRef.current?.classList.add('active')
        thirdRef.current?.classList.remove('active')
        break;
      case 1:
        firstRef.current?.classList.add('active')
        secondRef.current?.classList.remove('active')
        thirdRef.current?.classList.remove('active')
        break;
      default:
        break;
    }

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
          <section ref={firstRef} id="first" className="register-camps 1part active">
            <Input name="username" className="form-input" label="Nombre de usuario" />
            <Input name="password" className="form-input" label="Contraseña" type="password" />
            <Input name="email" className="form-input" label="Correo electrónico" type="email" />
            <section className="movement-buttons">
              <Button action={() => handleContinue(2)} content="continuar" className="continue-button" />
            </section>
          </section>
          <section ref={secondRef} id="second" className="register-camps 2part">
            <Input name="name" className="form-input" label="Nombre" />
            <Input name="lastname" className="form-input" label="Apellido" />
            <Input name="phone" className="form-input" label="Teléfono" />
            <section className="movement-buttons">
              <Button action={() => handleContinue(1)} content="volver" className="back-button" />
              <Button action={() => handleContinue(3)} content="continuar" className="continue-button" />
            </section>
          </section>
          <section ref={thirdRef} id="third" className="register-camps 3part">
            <Input name="address" className="form-input" label="Dirección" />
            <Input name="city" className="form-input" label="Ciudad" />
            <Input name="country" className="form-input" label="País" />
            <section className="movement-buttons">
              <Button action={() => handleContinue(2)} content="volver" className="back-button" />
              <Button content="registrarse" submit className="continue-button" />
            </section>
          </section>
        </form>
      </section>
    </section>


  )

}