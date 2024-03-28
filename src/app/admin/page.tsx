"use client"
import { Empresa } from "@/lib/constants/declarations";
import { parseCompanyList } from "@/lib/constants/utils";
import { UseGet, UsePost } from "@/lib/hooks/fetchHook"
import { useEffect, useRef, useState } from "react";
import CompanyCard from "./shared/company-card/CompanyCard";
import { ENDPOINTS, SERVER_URL } from "@/lib/constants/constants";
import { IconPlus, IconX } from "@tabler/icons-react";
import Button from "@/system-design/atoms/Button";
import Input from "@/system-design/atoms/Input";
import FireHooks from "@/lib/hooks/fireBaseHooks"
import swal from "sweetalert";
export default function AdminDashboard() {
    const [companies, setCompanies] = useState([] as Empresa[])
    const [isLoading, setIsLoading] = useState(true)
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)
    const { UseUpload } = FireHooks()
    const imageRef = useRef<HTMLImageElement>(null)
    useEffect(() => {

        async function getCompanies() {
            try {
                const { Data } = await UseGet(SERVER_URL + ENDPOINTS.COMPANY.LIST)
                const parsedCompanies = parseCompanyList(Data)
                setCompanies(parsedCompanies)
            } catch (error) {
                console.error(await error);
            } finally {
                setIsLoading(false)
            }
        }


        getCompanies()


    }, [])

    const handleOpenCompanyForm = () => {
        setIsPopoverOpen(!isPopoverOpen)
    }

    const handleInputImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (e) => {
                if (imageRef.current) {
                    imageRef.current.src = e.target?.result as string
                }
            }
            reader.readAsDataURL(file)
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const token = localStorage.getItem("user-token")
        const data = {
            Nombre: formData.get("Nombre"),
            Teléfono: formData.get("Teléfono"),
            CorreoElectronico: formData.get("Correo"),
            Dirección: formData.get("Dirección"),
            Contraseña: formData.get("Contraseña"),
            Logo: formData.get("Logo")
        }


        try {
            await UseUpload(data.Logo as File, "company-logos", (url, err) => {
                if (err) {
                    console.error(err)
                    throw err
                }
                data.Logo = url
            })
        } catch (error) {
            console.error(await error)
            await swal("Error", "No se ha podido subir la imagen", "error")
            return
        }

        try {
            const res = await UsePost(SERVER_URL + ENDPOINTS.COMPANY.ADD, data, { Authorization: `Bearer ${token}` })
            console.log(res)
            await swal("Empresa agregada", "La empresa ha sido agregada exitosamente", "success")
            window.location.reload()
        } catch (error) {
            console.error(await error)
            await swal("Error", "No se ha podido agregar la empresa", "error")
        }


    }
    return (
        <section className="company-list-wrapper">
            <h1>Empresas</h1>
            <section className="company-list">
                {isLoading ? <p>Cargando...</p> : companies.map((company) => (
                    <CompanyCard
                        key={company.ID_Empresa}
                        {...company}
                    />
                ))}
                {
                    companies.length === 0 && !isLoading && <p>No hay empresas registradas</p>
                }
            </section>
            <Button action={handleOpenCompanyForm} className="add-company-button" content={!isPopoverOpen ? IconPlus : IconX} />

            {isPopoverOpen &&
                (<div role="popover" className="add-company-popover">
                    <form onSubmit={handleSubmit} className="add-company-form">
                        <section className="company-input-image">
                            <input onChange={handleInputImageChange} title="" type="file" name="Logo" className="add-company-logo-input" />
                            <img ref={imageRef} className="add-copmany-logo" src="/Images/user.png" alt="" />
                        </section>
                        <Input type="text" name="Nombre" placeholder="Nombre" />
                        <Input type="tel" name="Teléfono" placeholder="Teléfono" />
                        <Input type="email" name="Correo" placeholder="Correo" />
                        <Input type="text" name="Dirección" placeholder="Dirección" />
                        <Input type="password" name="Contraseña" placeholder="Contraseña" />
                        <Button content="Agregar" submit />
                    </form>
                </div>)
            }
        </section>
    );
}