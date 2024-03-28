interface Props {
    children: React.ReactNode
}
export default function Tickets({ children }: Props) {
    return (
        <main>
            {children}
        </main>
    )

}