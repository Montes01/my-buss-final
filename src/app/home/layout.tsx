import Header from "../shared/Header";
import "./_home.scss";
import Footer from "../shared/Footer";

interface Props {
  children: React.ReactNode
}
export default function HomeLayout({ children }: Props) {

  return (

    <>
    <Header/>
      <main className="main-home">
        <section className="slider">
          <img className="slider-image" src="/Images/bus1.jpeg" />
          <img className="slider-image" src="/Images/bus2.jpeg" />
          <img className="slider-image" src="/Images/bus3.jpeg" />
          <img className="slider-image" src="/Images/bus4.jpeg" />
          <img className="slider-image" src="/Images/bus5.jpeg" />
          <img className="slider-image" src="/Images/bus6.jpeg" />
        </section>

        {children}
        <Footer/>

      </main>
    </>
  )
}