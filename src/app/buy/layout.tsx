"use client"

import { redirect } from "next/navigation"
import { useEffect } from "react"
import Header from "../home/shared/Header"
import Footer from "../shared/Footer/Footer"
interface Props {
    children: React.ReactNode
}

import { store } from "@/lib/context/store"
import { Provider } from "react-redux"
export default function Layout({ children }: Props) {

    return (
        <Provider store={store}>
            <Header />
            {children}
            <Footer />
        </Provider>
    )

}
