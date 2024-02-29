import NavButton from "../atoms/NavButton";
interface Props {
    to?: string
    className?: string,
}
export default function Logo({ to, className }: Props) {
    return (
        <picture className={`logo ${className ?? ""}`}>
            <NavButton to={to ?? "#"} content={<img src="/Images/logo.png" alt="Logo de la empresa" />}/>
        </picture>
    )
}