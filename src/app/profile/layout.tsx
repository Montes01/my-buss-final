'use client'
import { Provider } from "react-redux"
import { store } from "@/lib/context/store"
import Header from "@/app/shared/Header/Header"
import Footer from "../shared/Footer/Footer"
interface Props {
    children: React.ReactNode
}
export default function Profile({ children }: Props) {


    return (
        <Provider store={store}>
            <Header />
            {children}
            <Footer />
        </Provider>
    )

}