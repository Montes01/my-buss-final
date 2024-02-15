interface Props {
    Number: number
    image?: string
}
export default function RouteCard({ Number, image }: Props) {
    return (
        <section className="route-card">
            <img src={image} alt="Route" />
            <h3 className="route-card_title">Ruta {Number}</h3>
        </section>
    )
}
/*scss


*/