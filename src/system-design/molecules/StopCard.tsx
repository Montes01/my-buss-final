import { Paradero } from "@/lib/constants/declarations";
import Link from "next/link";

export default function StopCard({Nombre, ID_Paradero, Descripción, Foto, Ubicación }: Paradero) {
    return (
        <article className="stop-card">
            <h3 className="stop-name">
                {Nombre}
            </h3>
            <img src={Foto} alt="stop image from database" className="stop-image" />
            <p className="stop-description">{Descripción}</p>
            <p className="stop-location">{Ubicación}</p>
            <Link href={`/home/stops/${ID_Paradero}`} className="button">Ver paradero</Link>
        </article>
    )
}