import NavButton from "@/system-design/atoms/NavButton";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="text-center px-2">
        <strong> &copy; 2023</strong> My Buss. Todos los derechos reservados.
      </p>
      <section className="footer-buttons">
        <NavButton to="/" className="" children="Inicio" />
        <NavButton to="/Servicios" className="" children="Servicios" />
        <NavButton to="/Contacto" className="" children="Contacto" />
      </section>
    </footer>
  )
}