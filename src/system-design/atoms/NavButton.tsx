import Link from "next/link";


interface Props {
    children: React.ReactNode
    className?: string
    to?: string
}
export default function NavButton({ children, className, to }: Props) {
    return (
        <Link href={to ?? ""} className={`nav-button ${className}`}>
            {children}
        </Link>
    );
}