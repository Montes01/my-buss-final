"use client"
import Header from "../home/shared/Header";
import Footer from "../shared/Footer/Footer";

import { Provider } from "react-redux"
import { store } from "@/lib/context/store"

interface Props {
    children: React.ReactNode;
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