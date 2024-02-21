'use client'
import Footer from "../shared/Footer"
import Header from "./shared/Header"
import "./dashboard.scss";
import { store } from "@/lib/context/store";import { Provider } from "react-redux";

interface Props {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {

    return (
        <Provider store={store}>
            <Header />
            {children}
            <Footer />
        </Provider>
    )

}