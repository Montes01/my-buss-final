import Header from "../shared/Header";
import "./_home.scss";
import Footer from "./shared/Footer";

interface Props {
  children: React.ReactNode
}
export default function HomeLayout({ children }: Props) {

  return (

    <>
    <Header/>
        {children}

        <Footer/>
    </>
  )
}