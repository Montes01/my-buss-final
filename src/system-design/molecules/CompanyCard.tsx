import { Empresa } from "@/lib/constants/declarations";
import Button from "../atoms/Button";
import Image from "next/image";

export default function CompanyCard({ Nombre, Logo }: Empresa) {

    return (
        <article className="company-card">
            <img className="company-image" width={250} height={250} src={Logo ?? "/Images/Company-error.png"} alt="" />

            <section className="company-content">
                <h3 className="company-name">{Nombre}</h3>
                <Button content="ver rutas" className="ver-rutas-button" />
            </section>

        </article>

    )

}