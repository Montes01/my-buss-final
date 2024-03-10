'use client'
import { useRef, useState } from "react"
import Input from "@/system-design/atoms/Input"
import "./_register.scss";
import Button from "@/system-design/atoms/Button";
import { UsePost } from "@/lib/hooks/fetchHook";
import { SERVER_URL } from "@/lib/constants/constants";
import { ENDPOINTS } from "@/lib/constants/constants";
import ChangeJoin from "../shared/ChanngeJoin";
import { useRouter } from "next/navigation";
export default function Register() {
  const router = useRouter()
  const firstRef = useRef<HTMLDivElement>(null)
  const secondRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    const data = new FormData(e.currentTarget)
    const Nombre = data.get('Nombre')!
    const CorreoElectronico = data.get('Correo')!
    const Contraseña = data.get('password')!
    const Rol = 'cliente'
    const Teléfono = data.get('Telefono')!

    const ConfirmarContraseña = data.get('password-confirm')!

    if (Contraseña !== ConfirmarContraseña) {
      setMessage('Las contraseñas no coinciden')
      setIsLoading(false)
      return
    } else {
      setMessage('')
    }

    const body = { Nombre, CorreoElectronico, Contraseña, Rol, Teléfono }
    const { REGISTER } = ENDPOINTS.USER
    try {
      const res = await UsePost(SERVER_URL + REGISTER, body)
      setMessage(res.Data)
      setIsLoading(false)
      formRef.current?.reset()
      router.push('/home/join/login')
    } catch (err: unknown) {
      setMessage((err as Error).message)
    }
  }

  const handleContinue = (to: 1 | 2 | 3 | 4) => {

    switch (to) {

      case 2:
        firstRef.current?.classList.remove('active')
        secondRef.current?.classList.add('active')
        break;
      case 1:
        firstRef.current?.classList.add('active')
        secondRef.current?.classList.remove('active')
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
            <Input required name="Correo" className="form-input" label="Correo electrónico" type="email" />
            <Input required name="Nombre" className="form-input" label="Nombre" />
            <Input required name="Dirección" className="form-input" label="Dirección" />
            <section className="movement-buttons">
              <Button action={() => handleContinue(2)} content="continuar" className="continue-button" />
            </section>
          </section>
          <section ref={secondRef} id="second" className="register-camps 2part">
            <Input required name="Telefono" className="form-input" label="Teléfono" type="tel" />
            <Input required name="password" className="form-input" label="Contraseña" type="password" />
            <Input required name="password-confirm" className="form-input" label="Repite la contraseña" type="password" />
            <section className="movement-buttons">
              <Button action={() => handleContinue(1)} content="volver" className="back-button" />
              <Button content="registrarse" submit className="continue-button" />
              {isLoading && <div className="spinner"></div>}
            </section>
          </section>
        </form>
      </section>
    </>

  )
}