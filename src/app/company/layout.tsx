"use client"
import { Provider } from "react-redux";
import { store } from "@/lib/context/store";
import Aside from "./components/Aside";
import "./company.scss";
interface Props {
    children: React.ReactNode


}
export default function Layout({ children }: Props) {

    return (
        <Provider store={store}>
            <main className="company-dashboard">
                <Aside />
                <section className="dashboard-content">
                    {children}
                </section>
            </main>
        </Provider>
    )

}