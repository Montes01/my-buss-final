import { useRef } from "react";
import { Empresa } from "@/lib/constants/declarations";
import Button from "../atoms/Button";

export default function CompanyCard({ Nombre, Logo }: Empresa) {
    const imageRef = useRef<HTMLImageElement>(null)
    return (
        <article className="company-card">
            <img ref={imageRef} className="company-image" width={250} height={250} src={Logo} onError={() => {
                if (imageRef.current) {
                    imageRef.current.src = "/Images/user.png"
                }
            }} alt="" />

            <section className="company-content">
                <h3 className="company-name">{Nombre}</h3>
                <Button content="ver rutas" className="ver-rutas-button" />
            </section>

        </article>

    )

}