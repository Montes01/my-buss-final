import Footer from "../shared/Footer"
import Header from "./shared/Header"
import "./dashboard.scss";

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