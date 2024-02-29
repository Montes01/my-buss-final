import Link from "next/link";


interface Props {
    content: React.ReactNode
    className?: string
    to?: string
}
export default function NavButton({ content, className, to }: Props) {
    return (
        <Link href={to ?? ""} className={`nav-button ${className}`}>
            {content}
        </Link>
    );
}