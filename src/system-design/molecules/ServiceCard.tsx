import Link from "next/link";
import { type ServiceCard as Props } from "@/lib/constants/declarations";
import "../../lib/styles/_service-card.scss";

export default function ServiceCard({ image, description, title, href, }: Props) {
    return (
        <Link
            href={href}
            className="service-card"
        >
            <img src={image} alt={title} />
            <div className="flex flex-col gap-7">
                <h3 className="text-xl font-bold">{title}</h3>
                <p>{description}</p>
            </div>
        </Link>
    );
}