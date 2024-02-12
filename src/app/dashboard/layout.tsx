import Footer from "../home/shared/Footer"
import Header from "../shared/Header"

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