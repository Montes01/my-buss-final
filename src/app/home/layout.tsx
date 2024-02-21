'use client'
import "./_home.scss";
import Header from "./shared/Header";
import Footer from "../shared/Footer";
import { Provider } from "react-redux";
import { store } from "@/lib/context/store";
interface Props {
  children: React.ReactNode
}
export default function HomeLayout({ children }: Props) {
  // const { useLogin } = userActions()
  return (

    <Provider store={store}>
      <Header />
      {children}
      <Footer />
    </Provider>
  )
}