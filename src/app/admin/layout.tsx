"use client"
import "./admin.scss"
import { Provider } from "react-redux"
import { store } from "@/lib/context/store"
import Aside from "./shared/aside/Aside"

interface Props {
    children: React.ReactNode
}
export default function Layout({ children }: Props) {

    return (
        <Provider store={store}>
            <main className="admin-dashboard">
                <Aside />
                <section className="dashboard-content">
                    {children}
                </section>
            </main>
        </Provider>
    )
}