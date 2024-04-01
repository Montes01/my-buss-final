"use client"
import UserActions from "@/lib/context/hooks/userActions"
import { isUserAuthenticated } from "@/lib/constants/utils"
import { useEffect } from "react"
import { useRouter } from "next/router"
import { Usuario } from "@/lib/constants/declarations"
import swal from "sweetalert"
import { UseAppSelector } from "@/lib/context/hooks"
import Input from "@/system-design/atoms/Input"

export default function WorkWithUs() {
    const { UseLogin } = UserActions()
    const router = useRouter()
    const user = UseAppSelector(state => state.user)
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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        swal({
            title: "¿Estás seguro de que quieres aspirar a ser conductor?",
            text: "Una vez que envíes tu solicitud, no podrás retractarte.",
            icon: "warning",
            buttons: ["Cancelar", "Sí, quiero aspirar"],
            dangerMode: true,
        }).then((willAspire) => {
            if (willAspire) {
                swal("¡Tu solicitud ha sido enviada!", {
                    icon: "success",
                });
            }
        });
    }

    return (
        <main className="work-page">
            <h1 className="work-page__title">Trabaja con nosotros</h1>
            <section className="work-page__section">
                <p className="work-page__section__text">
                    En Grupo Sistemas Integrales estamos en constante crecimiento y siempre estamos en busca de nuevos talentos para formar parte de nuestro equipo.
                    Si tienes experiencia en el sector de la tecnología y deseas formar parte de una empresa en constante crecimiento
                </p>
                <section className="content">

                    <form>
                        <Input type="file" name="licencia" label="Sube tu licencia" />

                    </form>
                    <img src="" alt="" />
                </section>
            </section>
        </main>
    )
}