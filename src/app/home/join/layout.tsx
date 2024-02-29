'use client'
import "./_join.scss"

interface Props {
    children: React.ReactNode
}
export default function Layout({ children }: Props) {


    return (
        <main className="join-home">
            <section className="form-sections">
                {children}
            </section>
        </main>
    )
}