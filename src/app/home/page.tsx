import { PRINCIPAL_MESSAGE } from "@/lib/constants/constants";
import { IconBrandAndroid, IconMap } from "@tabler/icons-react"
import "./_home.scss";
import NavButton from "@/system-design/atoms/NavButton";
export default function Home() {


  return (
    <section className="home-content">
      <p className="principal-message">{PRINCIPAL_MESSAGE}</p>
      <section className="main-buttons">
        <NavButton to="/App" className="button main-button">
          <IconBrandAndroid color="white" />
          <strong>Descarga nuestra aplicación</strong>
        </NavButton>
        <NavButton to="/home" className="button main-button">
          <IconMap color="white" />
          <strong>conoce nuestras rutas</strong>
        </NavButton>
      </section>
    </section>
  )
}