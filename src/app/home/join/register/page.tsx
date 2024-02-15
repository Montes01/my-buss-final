'use client'
import { useRef, useState } from "react"
import Input from "@/system-design/atoms/Input"
import "./_register.scss";
import Button from "@/system-design/atoms/Button";
import { usePost } from "@/lib/hooks/fetchHook";
import { SERVER_URL } from "@/lib/constants/constants";
import { ENDPOINTS } from "@/lib/constants/constants";
import ChangeJoin from "../shared/ChanngeJoin";
export default function Register() {
  const firstRef = useRef<HTMLDivElement>(null)
  const secondRef = useRef<HTMLDivElement>(null)
  const thirdRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    const data = new FormData(e.currentTarget)
    const Documento = data.get('document')!
    const Correo = data.get('mail')!
    const Nombre = data.get('name')!
    const Apellido = data.get('last-name') ?? ""
    const Edad = data.get('age')!
    const Telefono = data.get('phone') ?? ""
    const Contraseña = data.get('password')!
    const Rol = "User"
    const ConfirmarContraseña = data.get('password-confirm')!
    if (Contraseña !== ConfirmarContraseña) {
      setMessage('Las contraseñas no coinciden')
      setIsLoading(false)
      return
    } else {
      setMessage('')
    }
    const { REGISTER } = ENDPOINTS.USER
    const res = await usePost(SERVER_URL + REGISTER, { Documento, Correo, Nombre, Apellido, Edad, Telefono, Contraseña, Rol })
    if (res.message === "OK") {
      handleContinue(1)
      setMessage('Usuario registrado con éxito')
      formRef.current?.reset()
    } else {
      setMessage(res.message)
    }
    setIsLoading(false)

  }

  const handleContinue = (to: 1 | 2 | 3 | 4) => {

    switch (to) {
      case 4:
        firstRef.current?.classList.remove('active')
        secondRef.current?.classList.remove('active')
        thirdRef.current?.classList.remove('active')
        break;
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
    <>
      <ChangeJoin isLogin={false} />
      <section className="register-content">
        <h3 className="register-form_title">Bienvenido</h3>
        {message && <strong className="message-message">{message}</strong>}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          action=""
          className="register-form"
        >
          <section ref={firstRef} id="first" className="register-camps 1part active">
            <Input required name="document" className="form-input" label="Documento" />
            <Input required name="mail" className="form-input" label="Correo electrónico" type="email" />
            <Input required name="name" className="form-input" label="Nombre" />
            <section className="movement-buttons">
              <Button action={() => handleContinue(2)} content="continuar" className="continue-button" />
            </section>
          </section>
          <section ref={secondRef} id="second" className="register-camps 2part">
            <Input name="last-name" className="form-input" label="Apellido" />
            <Input required name="age" className="form-input" label="Edad" type="number" />
            <Input name="phone" className="form-input" label="Teléfono" />
            <section className="movement-buttons">
              <Button action={() => handleContinue(1)} content="volver" className="back-button" />
              <Button action={() => handleContinue(3)} content="continuar" className="continue-button" />
            </section>
          </section>
          <section ref={thirdRef} id="third" className="register-camps 3part">
            <Input required name="password" className="form-input" label="Contraseña" type="password" />
            <Input required name="password-confirm" className="form-input" label="Repite la contraseña" type="password" />
            <section className="movement-buttons">
              <Button action={() => handleContinue(2)} content="volver" className="back-button" />
              <Button content="registrarse" submit className="continue-button" />
            </section>
          </section>
        </form>
      </section>
    </>

  )
}