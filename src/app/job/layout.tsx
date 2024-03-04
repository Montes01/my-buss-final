import Header from "../home/shared/Header"
import Footer from "../shared/Footer/Footer"

interface Props {

    children: React.ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}