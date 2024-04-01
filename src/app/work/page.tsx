"use client"
import UserActions from "@/lib/context/hooks/userActions"
import { isUserAuthenticated } from "@/lib/constants/utils"
import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Usuario } from "@/lib/constants/declarations"
import swal from "sweetalert"
import { UseAppSelector } from "@/lib/context/hooks"
import Input from "@/system-design/atoms/Input"
import Button from "@/system-design/atoms/Button"
import FireBaseHooks from "@/lib/hooks/fireBaseHooks"
import "./work.scss"
import { UsePost } from "@/lib/hooks/fetchHook"
import { ENDPOINTS, SERVER_URL } from "@/lib/constants/constants"
export default function WorkWithUs() {
    const { UseUpload } = FireBaseHooks()
    const { UseLogin } = UserActions()
    const router = useRouter()
    const user = UseAppSelector(state => state.user)
    const imageRef = useRef<HTMLImageElement>(null)
    useEffect(() => {
        isUserAuthenticated((userFromToken: Usuario) => {
            if (!userFromToken) {
                router.push("/home/join/login")
            } else {
                if (userFromToken.Rol === "conductor") {
                    swal("Ya eres conductor", "No puedes aspirar a ser conductor si ya lo eres", "error")
                    router.push("/home")
                }
                UseLogin(userFromToken)
            }
        })
    }, [])

    const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target!.files![0]
        const reader = new FileReader()
        reader.onload = () => {
            imageRef.current!.src = reader.result as string
        }
        reader.readAsDataURL(file)
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const willAspire = await swal({
            title: "¿Estás seguro de que quieres aspirar a ser conductor?",
            text: "Una vez que envíes tu solicitud, no podrás retractarte.",
            icon: "warning",
            buttons: ["Cancelar", "Sí, quiero aspirar"],
            dangerMode: true,
        })
        if (!willAspire) return

        let Licencia = formData.get("licencia") as File
        let imageUrl = ""
        try {

            await UseUpload(Licencia, "licencias", (url, err) => {
            if (err) {
                swal("Error", "Hubo un error al subir tu licencia, intenta de nuevo", "error")
                throw err
            }
            imageUrl = url

            })
        } catch (error) {
            return
        }

        const data = { Licencia: imageUrl }
        console.log(data)

        try {
            UsePost(SERVER_URL + ENDPOINTS.USER.WORK.REQUEST, data, {
            Authorization: `Bearer ${localStorage.getItem("user-token")}`
            }).then((_) => {
            swal("Solicitud enviada", "Tu solicitud ha sido enviada, en breve nos pondremos en contacto contigo", "success")
            })

        } catch (error) {
            swal("Error", "Hubo un error al enviar tu solicitud, intenta de nuevo", "error")
            console.error(error)
        }
    }

    return (
        <main className="work-page">
            <h1 className="work-page__title">Trabaja con nosotros</h1>
            <section className="work-page__section">
                <p className="work-page__section__text">
                    En Grupo Sistemas Integrales estamos en constante crecimiento y siempre estamos en busca de nuevos talentos para formar parte de nuestro equipo.
                    Si tienes experiencia en el sector de la conducción de buses y deseas formar parte de una empresa en constante crecimiento
                </p>
                <section className="content">
                    <form onSubmit={handleSubmit}>
                        <Input change={onImageChange} required type="file" name="licencia" label="Sube tu licencia" />
                        <Button submit content="Aspira a ser conductor" className="aspire-button" />
                    </form>
                    <section className="licence-image-container">
                        <img ref={imageRef} src="" alt="" />
                    </section>
                </section>
            </section>
        </main>
    )
}