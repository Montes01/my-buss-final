'use client'

import { ENDPOINTS, SERVER_URL } from "@/lib/constants/constants"
import { readToken } from "@/lib/constants/utils"
import userActions from "@/lib/context/hooks/userActions"
import { UseGet } from "@/lib/hooks/fetchHook"
import { useEffect, useState } from "react"
import ChatBot from "./components/ChatBot"

export default function Dashboard() {
    // const { UseGetUser, UseLogin } = userActions()
    // let user = UseGetUser
    // const [routes, setRoutes] = useState([])
    // useEffect(() => {
    //     const token = localStorage.getItem('token')
    //     if (token) {
    //         try {
    //             const userFromToken = readToken(token)
    //             UseLogin(userFromToken)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     } else {
    //         window.location.href = '/home'
    //     }
    // }, [])

    // useEffect(() => {
    //     const url = SERVER_URL + ENDPOINTS.ROUTE.LIST
    //     UseGet(url).then(res => {
    //         console.log(res)
    //         setRoutes(res.data)
    //     })
    // }, [])
    return (
        <div className="dashboard-container">

            <section className="company-card welcome-section">
                <div className="welcome-content">
                    <div className="welcome-text">
                        <h2 className='Bienvenido'>Bienvenido, <br /> Usuario</h2> <br />
                        <p className="small-text">Descubre una nueva forma de viajar con MyBuss.  <br />Explora nuestro servicio de transporte público innovador y cómodo. cada viaje.</p>
                        <div className='logos'>
                            <img src="https://cdn-icons-png.flaticon.com/128/2536/2536748.png" alt="" />
                            <img src="https://cdn-icons-png.flaticon.com/128/416/416668.png" alt="" />
                            <img src="https://cdn-icons-png.flaticon.com/128/3124/3124296.png" alt="" />
                            <img src="https://cdn-icons-png.flaticon.com/128/4496/4496927.png" alt="" />
                        </div>
                    </div>
                    <img
                        src="https://www.mybus.io/wp-content/uploads/2020/10/partagecommu-min.gif"
                        alt="Bienvenida"
                        className="welcome-image animated-image smaller-image"
                    />
                </div>
            </section>

            <h2 className="company-section-title">Descubre Nuestras Empresas de Transporte</h2>

            <section className="company-card">
                <div className="company-content">
                    <div className="company-info">
                        <div className="company-header">
                            <img className='Cooburquin' src="https://th.bing.com/th?id=OIP.GIL4pvhe2xd4nCwDfKJxzwHaGR&w=271&h=230&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" />
                        </div>
                        <div className="company-description">
                            <p>
                                Cooburquin es una empresa de transporte público comprometida con la puntualidad y seguridad de sus usuarios. Ofrecemos servicios en toda la ciudad de Armenia, conectando puntos clave y proporcionando una experiencia confiable.
                            </p>
                        </div>
                        <div className="company-details">
                            <p><strong>Horarios de Oficina:</strong> Lunes a Viernes, 8:00 AM - 5:00 PM</p>
                            <p><strong>Dirección:</strong> Av. Principal #123, Armenia</p>
                        </div>
                    </div>
                    <div className="company-image">
                        <img src="https://www.mybus.io/wp-content/uploads/2021/02/dynamiser-reseaux-ipad-iphone-730x505.png" alt="Logo de la empresa" />
                    </div>
                </div>
            </section>

            <section className="company-card another-company-card">
                <div className="company-content">
                    <div className="company-image">
                        <img src="https://www.mybus.io/wp-content/uploads/2020/10/maasify.svg" alt="Logo de otra empresa" />
                    </div>
                    <div className="company-info">
                        <div className="company-header">
                            <h2>Buses Armenia</h2>
                        </div>
                        <div className="company-description">
                            <p>

                                Somos una compañía de servicios de transporte público que busca mejorar la calidad de vida de los armenios y habitantes nacionales, con servicios seguros, de calidad, cómodos y accesibles para todos.
                            </p>
                            <div className="company-details">
                                <p><strong>Detalles de Oficina:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM</p>
                                <p><strong>Ubicación:</strong> Calle Principal #456, Ciudad</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="company-card another-company-card">
                <div className="company-content">
                    <div className="company-info">
                        <div className="company-header">
                            <img className='TUCM' src="https://tucm.com.co/wp-content/uploads/2021/04/tucm.png" alt="" />
                        </div>
                        <div className="company-header">
                            <h2>Transportes Urbanos Ciudad Milagro</h2>
                        </div>
                        <div className="company-description">
                            <p>
                                Humanizamos el servicio del transporte con más de 50 años de experiencia transportando a la comunidad
                            </p>
                            <div className="company-details">
                                <p><strong>Detalles de Oficina:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM</p>
                                <p><strong>Ubicación:</strong> Calle Principal #456, Ciudad</p>
                            </div>
                        </div>
                    </div>
                    <div className="company-image">
                        {/* Agrega la etiqueta de imagen con la URL del logo */}
                        <img src="https://www.mybus.io/wp-content/uploads/2020/10/guide-horaire.gif" alt="Logo de otra empresa" />
                    </div>
                </div>
            </section>

            <ChatBot />
        </div>
    )
}