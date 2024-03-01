import NavButton from "@/system-design/atoms/NavButton";
import "./Footer.scss";
export default function Footer() {
  return (
    <footer className="footer">
      <p className="text-center px-2">
        <strong> &copy; 2023</strong> My Buss. Todos los derechos reservados.
      </p>
      <section className="footer-buttons">
        <NavButton to="/" className="" content="Inicio" />
        <NavButton to="/Servicios" className="" content="Servicios" />
        <NavButton to="/Contacto" className="" content="Contacto" />
      </section>
    </footer>
  )
}