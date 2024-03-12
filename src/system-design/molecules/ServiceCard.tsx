import Link from "next/link";
import { type ServiceCard as Props } from "@/lib/constants/declarations";
import "../../lib/styles/_service-card.scss";

export default function ServiceCard({ image, description, title, href, }: Props) {
    return (
        <Link
            href={href}
            className="service-card"
        >
            <img className="service-card_image" src={image} alt={title} />
            <div className="service-card_text"> 
        
                <h3 className="service-card_title">{title}</h3>
                <p className="service-card_info">{description}</p>
            </div>
        </Link>
    );
}